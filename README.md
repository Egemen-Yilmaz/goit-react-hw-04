# goit-react-hw-04 — scaffold and tooling

Bu repo ödevinizin başlangıç iskeletini oluşturur. Ben yalnızca proje gereksinimlerine uygun temel yapı ve araçları ekledim; ödevin işlevsel kodunu siz yazacaksınız.

Neler eklendi:
- Vite + React yapılandırması (`vite`, `@vitejs/plugin-react`).
- `axios` bağımlılığı (HTTP istekleri için).
- Prettier ve `.prettierrc` (kod formatı).
- `src/components` içinde bir `README.md` — bileşen klasör yapısı kuralları.
- Minimal `index.html` ve `src/main.jsx` (boş giriş noktası; lütfen kendi bileşenlerinizi ekleyin).

Hızlı başlangıç:

1. Bağımlılıkları yükleyin:

```bash
npm install
```

2. Geliştirme sunucusunu başlatın:

```bash
npm run dev
```

Kodlama kuralları ve teslim:

- Her bileşen `src/components` içinde kendi klasöründe olacak. Klasör adı, `.jsx` bileşen dosyası adı ve `.module.css` stil dosyası adı aynı olmalıdır.
- Bileşenleri `export default` ile dışa aktarın.
- Stil için CSS modülleri (`*.module.css`) kullanın.
- Proje Vercel üzerinde deploy edilmelidir. Ödev tesliminde iki bağlantı gönderilmelidir:
  1) GitHub kaynak deposu
  2) Vercel üzerinde canlı çalışma bağlantısı (task page)

Diğer notlar:
- Konsolda hata veya uyarı görmemek için React bileşenlerinizi oluştururken linter/uyarı kurallarına dikkat edin.
- `npm run format` komutu ile Prettier'ı çalıştırabilirsiniz.

Unsplash API anahtarı ve yapılandırma
----------------------------------

Uygulamanızda Unsplash gibi üçüncü parti bir hizmetin Access Key'ini doğrudan kod içine yazmayın. Bu repo kökünde bir `.env` dosyası bulunmalıdır (bu dosya zaten `.gitignore` içinde listelenmiştir). Vite, tarayıcıya açık değişkenleri `VITE_` önekiyle okumaktadır.

Örnek `.env` girdisi:

```
VITE_UNSPLASH_ACCESS_KEY="<YOUR_UNSPLASH_ACCESS_KEY_HERE>"
```

Koda erişim örneği (client-side kodunuzda kullanırken):

```js
const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
// kullanırken axios ile Authorization header veya query parametre olarak ekleyebilirsiniz
```

Vercel'e deploy ederken
- Vercel dashboard -> Project -> Settings -> Environment Variables bölümüne aynı anahtar adını (`VITE_UNSPLASH_ACCESS_KEY`) ekleyin ve değerini girin.
- Hem Preview hem de Production ortamları için uygun şekilde anahtarları eklediğinizden emin olun.

Güvenlik notu: Access Key'inizi ve Secret Key'inizi herkese açık reposlarda paylaşmayın. Eğer anahtarın sızdığını düşünüyorsanız Unsplash panelinden anahtarı iptal edin ve yenisini oluşturun.
