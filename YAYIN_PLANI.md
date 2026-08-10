# Cix Makarna — Yayın Yapısı

> Hedef: GitHub bağlantılı Cloudflare Pages yayını ve KV tabanlı canlı yönetim paneli.

## İstenen yayın yapısı

- GitHub üzerinde Cix/Jix Makarna adına özel bir repository oluşturulacak.
- Masaüstündeki güncel QR menü projesi bu repository'ye yüklenecek.
- GitHub repository, Cloudflare'a bağlanacak.
- GitHub'a gönderilen kod değişiklikleri Cloudflare tarafından otomatik olarak yayınlanacak.
- Hedef özel alan adı: `cixmakarna.csrqrmenu.com`

## Güncelleme akışı

- Kod ve tasarım revizeleri: yerel proje → GitHub → otomatik Cloudflare deploy.
- Admin panelindeki menü/fiyat/görsel/görünürlük değişiklikleri: doğrudan canlı Cloudflare KV verisine kaydedilecek.
- Admin değişiklikleri için GitHub commit'i oluşturulmayacak; GitHub kodun, KV ise canlı menü içeriğinin kaynağı olacak.
- Daha sonra kullanıcı bir revize verdiğinde yerel proje ve GitHub repository birlikte güncellenecek; Cloudflare otomatik yayınlayacak.

## Güvenlik ve yönetim

- Canlı admin paneli için güçlü ve kullanıcıya teslim edilecek bir şifre hazırlanacak.
- Şifre kaynak koda açık biçimde yazılmayacak; Cloudflare secret/environment variable olarak saklanacak.
- Cloudflare KV binding, admin API ve yetki kontrolü canlı ortamda ayrıca test edilecek.
- Admin panelinden ürün görseli yükleme ve kaydetme canlı ortamda doğrulanacak.

## Yayın sırasında kontrol listesi

1. GitHub repository oluştur ve ilk sürümü yükle.
2. Cloudflare projesini repository'ye bağla.
3. Build/output ayarlarını doğrula.
4. KV namespace oluştur veya uygun namespace'i bağla.
5. Admin şifresini Cloudflare secret olarak ekle.
6. `cixmakarna.csrqrmenu.com` özel alan adını bağla.
7. DNS ve SSL durumunu doğrula.
8. Menü, WhatsApp, telefon, Instagram, Google yorum ve yol tarifi bağlantılarını test et.
9. Admin girişini, ürün düzenlemeyi, görsel yüklemeyi ve Aktif/Gizli anahtarını test et.
10. GitHub'a yapılan örnek bir değişikliğin otomatik olarak canlı siteye geçtiğini doğrula.
