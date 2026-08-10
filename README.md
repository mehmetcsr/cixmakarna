# Cix Makarna QR Menü

Mobil QR menü ve şifreli yönetim paneli. Yerel açılış için `public/index.html`, yönetim için `public/admin.html` dosyasını açın.

## Bilgisayarda çalıştırma

`BASLAT.bat` dosyasına çift tıklayın. Menü ve admin paneli tarayıcıda açılır.

- Menü: http://127.0.0.1:4173/
- Admin: http://127.0.0.1:4173/admin.html
- Yerel admin şifresi: `0000`

Cloudflare Pages ayarları:

- Çıkış dizini: `public`
- KV binding: `SAGLAM_MENU`
- Yerel varsayılan admin şifresi: `0000`
- Canlı ortamda `ADMIN_PASSWORD` secret tanımlanmalıdır.
- Hedef alan adı: `cixmakarna.csrqrmenu.com`

Canlı menü verisi KV içinde `menu_cixmakarna` anahtarında saklanır. Kod değişiklikleri GitHub bağlantısı üzerinden otomatik olarak Cloudflare Pages'e yayınlanır; admin panelinde yapılan menü değişiklikleri doğrudan KV'ye kaydedilir.
