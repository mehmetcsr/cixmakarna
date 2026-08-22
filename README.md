# Cix Makarna QR Menü

Mobil QR menü ve şifreli yönetim paneli. Yerel açılış için `public/index.html`, yönetim için `public/admin.html` dosyasını açın.

- Masa menüsü: https://cixmakarna.csrqrmenu.com/masa
- Paket menüsü: https://cixmakarna.csrqrmenu.com/paket
- Yönetim paneli: https://cixmakarna.csrqrmenu.com/yonetim
- GitHub: https://github.com/mehmetcsr/cixmakarna
- Yayın durumu: Cloudflare Pages ve özel alan adı aktif

## Bilgisayarda çalıştırma

`BASLAT.bat` dosyasına çift tıklayın. Menü ve admin paneli tarayıcıda açılır.

- Masa menüsü: http://127.0.0.1:4173/?menu=table
- Paket menüsü: http://127.0.0.1:4173/?menu=package
- Admin: http://127.0.0.1:4173/admin.html
- Yerel admin şifresi: `0000`

Cloudflare Pages ayarları:

- Çıkış dizini: `public`
- KV binding: `SAGLAM_MENU`
- Yerel varsayılan admin şifresi: `0000`
- Canlı ortamda `ADMIN_PASSWORD` secret tanımlanmalıdır.
- Hedef alan adı: `cixmakarna.csrqrmenu.com`

Canlı menü verisi KV içinde `menu_cixmakarna` anahtarında saklanır. Ürün adı, açıklama, görsel ve görünürlük iki menüde ortaktır; her ürünün `prices.table` ve `prices.package` alanları bağımsızdır. Eski `price` alanı masa fiyatıyla eşit tutularak eski bağlantılar korunur. Kod değişiklikleri GitHub bağlantısı üzerinden otomatik olarak Cloudflare Pages'e yayınlanır; admin panelinde yapılan menü değişiklikleri doğrudan KV'ye kaydedilir.
