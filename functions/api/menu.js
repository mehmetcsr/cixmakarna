const MENU_KEY = "menu_cixmakarna";
const PASSWORD_KEY = "admin_pass_cixmakarna";
const MAX_BODY_BYTES = 24_000_000;

async function verifySecret(provided, expected) {
  const encoder = new TextEncoder();
  const [providedHash, expectedHash] = await Promise.all([
    crypto.subtle.digest("SHA-256", encoder.encode(provided)),
    crypto.subtle.digest("SHA-256", encoder.encode(expected))
  ]);
  return crypto.subtle.timingSafeEqual(providedHash, expectedHash);
}

async function readBodyWithLimit(request) {
  const reader = request.body?.getReader();
  if (!reader) return "";

  const chunks = [];
  let totalBytes = 0;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    totalBytes += value.byteLength;
    if (totalBytes > MAX_BODY_BYTES) {
      await reader.cancel();
      throw new RangeError("PAYLOAD_TOO_LARGE");
    }
    chunks.push(value);
  }

  const body = new Uint8Array(totalBytes);
  let offset = 0;
  for (const chunk of chunks) {
    body.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return new TextDecoder().decode(body);
}

export async function onRequest({ request, env }) {
  const url = new URL(request.url);
  const cors = {
    "Access-Control-Allow-Origin": url.origin,
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type,X-Admin-Password",
    "Vary": "Origin"
  };
  if (request.method === "OPTIONS") return new Response(null, { headers: cors });
  try {
    if (request.method === "GET") {
      const data = await env.SAGLAM_MENU.get(MENU_KEY) || "{}";
      return new Response(data, { headers: { ...cors, "Content-Type": "application/json", "Cache-Control": "no-store" } });
    }
    if (request.method === "POST") {
      const sent = request.headers.get("X-Admin-Password") || "";
      const saved = await env.SAGLAM_MENU.get(PASSWORD_KEY);
      const expected = saved || env.ADMIN_PASSWORD;
      if (!expected) return Response.json({ error: "Admin şifresi yapılandırılmamış" }, { status: 503, headers: cors });
      if (!(await verifySecret(sent, expected))) return Response.json({ error: "Yetkisiz" }, { status: 401, headers: cors });
      if (url.searchParams.has("verify")) return Response.json({ ok: true }, { headers: cors });
      const contentLength = Number(request.headers.get("Content-Length") || 0);
      if (contentLength > MAX_BODY_BYTES) return Response.json({ error: "Menü verisi çok büyük" }, { status: 413, headers: cors });
      const body = await readBodyWithLimit(request);
      let parsed;
      try {
        parsed = JSON.parse(body);
      } catch {
        return Response.json({ error: "Geçersiz JSON verisi" }, { status: 400, headers: cors });
      }
      if (!parsed?.restaurant || !Array.isArray(parsed?.categories) || !Array.isArray(parsed?.items)) {
        return Response.json({ error: "Geçersiz menü verisi" }, { status: 400, headers: cors });
      }
      await env.SAGLAM_MENU.put(MENU_KEY, body);
      return Response.json({ ok: true }, { headers: cors });
    }
    return new Response("Method not allowed", { status: 405, headers: cors });
  } catch (error) {
    if (error instanceof RangeError && error.message === "PAYLOAD_TOO_LARGE") {
      return Response.json({ error: "Menü verisi çok büyük" }, { status: 413, headers: cors });
    }
    console.error(JSON.stringify({
      message: "menu API error",
      error: error instanceof Error ? error.message : "Unknown error",
      path: url.pathname
    }));
    return Response.json({ error: "Sunucu hatası" }, { status: 500, headers: cors });
  }
}
