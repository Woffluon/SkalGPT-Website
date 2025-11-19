<div align="right">
  <a href="#english">🇬🇧 English</a> | 
  <a href="#turkish">🇹🇷 Türkçe</a>
</div>

<div id="english">

# 🚀 SkalGPT - Sezai Karakoç Anatolian High School AI Assistant

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/Radix_UI-191919?style=for-the-badge&logo=radix-ui&logoColor=white" alt="Radix UI"/>
  <img src="https://img.shields.io/badge/MIT-License-blue?style=for-the-badge" alt="MIT License"/>
</div>

## 🌟 About the Project

SkalGPT is a **versatile AI assistant** specifically developed for Sezai Karakoç Anatolian High School. **Not just an educational assistant** - it serves as a guide, consultant, and information source for the entire school community, supporting administrative, pedagogical, and communication processes.

Built with modern web technologies, this platform stands out with its user-friendly interface, robust infrastructure, and ethical design principles.

### 🎯 Key Features

#### 📚 Academic & Educational Support
- Academic topic explanations and conceptual understanding
- Problem-solving strategies and step-by-step guidance
- Homework guidance (not direct solutions - promotes learning)
- Exam preparation strategies and study methods
- Learning techniques and study methodologies

#### ✍️ Creative & Analytical Tasks
- Creative writing assistance (stories, poems, essays, scripts)
- Text summarization and analysis
- Research topic suggestions and resource finding strategies
- Brainstorming and idea generation

#### 🌍 Language & Communication
- Multi-language support (Turkish primary, English secondary)
- Translation services
- Grammar and writing style improvements
- Vocabulary development

#### 🏫 Administrative & Institutional
- School procedures, rules, and policies information
- Event calendar and campus facilities
- Organizational planning support
- Administrative process guidance

#### 🛡️ Safety & Ethics
- No personal data collection or sharing
- Does not produce harmful content (violence, hate speech, etc.)
- Respects academic integrity (no direct exam/homework solutions)
- Honest about limitations and uncertainties
- Conversations stored max 30 days then deleted

#### 🎨 User Experience
- Dark/Light theme support
- Responsive design (mobile, tablet, desktop)
- Accessible and inclusive interface
- 24/7 availability

## 🚀 Live Demo

You can access the live version of the project at:  
👉 [https://skalgpt.netlify.app](https://skalgpt.netlify.app)

## 🔧 Installation

To run the project locally, follow these steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/skalgpt-website.git
   cd skalgpt-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   The application will be available at: [http://localhost:3000](http://localhost:3000)

## 🧠 Technologies Used

- **Frontend Framework:** Next.js 14 (App Router)
- **Language:** TypeScript 5
- **Runtime:** Node.js 22+
- **Styling:** Tailwind CSS 3.4+
- **UI Components:** Radix UI + Shadcn/ui
- **State Management:** React Context API
- **Form Management:** React Hook Form + Zod
- **Internationalization:** Custom Language Provider
- **Icons:** Lucide React
- **Theme Management:** next-themes
- **Deployment:** Netlify (Static Export)
- **Build Output:** Static HTML/CSS/JS

## 📁 Project Structure

```
skalgpt-website/
├── app/                    # Next.js App Router pages
│   ├── hakkinda/          # About page (Turkish: "hakkında")
│   ├── ozellikler/        # Features page (Turkish: "özellikler")
│   ├── sss/               # FAQ page (Turkish: "sıkça sorulan sorular")
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── ui/               # shadcn/ui components (button, card, dialog, etc.)
│   ├── footer.tsx        # Site footer
│   ├── header.tsx        # Site header with navigation
│   ├── language-provider.tsx  # i18n context provider
│   ├── scroll-to-top.tsx # Scroll to top button
│   └── theme-provider.tsx     # Dark/light theme provider
├── hooks/                # Custom React hooks
│   ├── use-mobile.tsx    # Mobile detection hook
│   └── use-toast.ts      # Toast notification hook
├── lib/                  # Utility functions
│   └── utils.ts          # Helper functions (cn for class merging)
├── public/               # Static assets
│   ├── *.webp, *.png     # Images
│   ├── favicon.png       # Site favicon
│   ├── manifest.json     # PWA manifest
│   ├── robots.txt        # SEO robots file
│   └── sitemap.xml       # SEO sitemap
├── .kiro/                # Kiro AI assistant configuration
│   └── steering/         # AI steering rules
│       ├── product.md    # Product overview and guidelines
│       ├── structure.md  # Project structure documentation
│       └── tech.md       # Technology stack details
├── components.json       # shadcn/ui configuration
├── next.config.mjs       # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── netlify.toml          # Netlify deployment config
└── package.json          # Dependencies and scripts
```

## 🤖 SkalGPT Personality & Approach

### Personality Traits
- **Friendly and Supportive**: Approachable while maintaining professionalism
- **Patient and Understanding**: Recognizes different knowledge levels
- **Encouraging**: Promotes curiosity and critical thinking
- **Honest and Transparent**: Clear about limitations and uncertainties
- **Positive and Constructive**: Views mistakes as learning opportunities

### Educational Philosophy
- **Socratic Method**: Asks questions to promote thinking and discovery
- **Scaffolding**: Provides step-by-step guidance toward independence
- **Active Learning**: Encourages participation and application over passive information transfer
- **No Direct Solutions**: Guides students to find answers themselves

### Important Limitations
- ❌ No image or visual recognition capabilities
- ❌ Not connected to real-time internet
- ❌ No file upload/download functionality
- ❌ Does not provide direct homework/exam solutions
- ❌ Does not produce harmful content
- ⚠️ May occasionally provide incorrect information
- 🔒 Conversations stored max 30 days then deleted

## 📦 Customization

### Editing Translations

1. Edit translations in `components/language-provider.tsx`.
2. Add new translation keys to both `tr` and `en` objects.
3. Use the `t()` function in components to access translations.

### Changing Theme Colors

1. Edit the `theme.extend.colors` section in `tailwind.config.ts`.
2. Update CSS variables in `app/globals.css` for custom colors.
3. Theme colors use HSL format for better dark mode support.

### Adding New Components

1. Create a new component in the `components/ui/` directory.
2. Follow shadcn/ui conventions for consistency.
3. Use Radix UI primitives for accessibility.

## 🏗️ Build & Deployment

### Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

This creates a static export in the `out/` directory.

### Preview Production Build

```bash
npm run start
# or
yarn start
# or
pnpm start
```

### Deployment on Netlify

The project is configured for automatic deployment on Netlify:

1. Push changes to the main branch
2. Netlify automatically builds and deploys
3. Build command: `npm run build`
4. Publish directory: `out`

Configuration is in `netlify.toml`.

## 🛠️ Contributing

1. Fork this project
2. Create a new feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style and conventions
- Write clear commit messages
- Test your changes thoroughly
- Update documentation if needed
- Respect the ethical guidelines of the project

## 📄 License

This project is licensed under the [MIT](LICENSE) License.

## 🙋‍♂️ Contact

- 🌐 Portfolio: [efearabaci.vercel.app](https://efearabaci.vercel.app)
- 📧 Email: [efe.arabaci.dev@gmail.com](mailto:efe.arabaci.dev@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/efearabaci](https://linkedin.com/in/efearabaci)

---

<div id="turkish">

# 🚀 SkalGPT - Sezai Karakoç Anadolu Lisesi AI Asistanı

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/Radix_UI-191919?style=for-the-badge&logo=radix-ui&logoColor=white" alt="Radix UI"/>
  <img src="https://img.shields.io/badge/MIT-License-blue?style=for-the-badge" alt="MIT License"/>
</div>

## 🌟 Proje Hakkında

SkalGPT, Sezai Karakoç Anadolu Lisesi için özel olarak geliştirilmiş, **çok yönlü bir yapay zeka asistanıdır**. **Sadece bir eğitim asistanı değil**; aynı zamanda rehber, danışman ve bilgi kaynağıdır. Okul topluluğunun idari, pedagojik ve iletişim süreçlerine destek sağlar.

Modern web teknolojileri kullanılarak geliştirilen bu platform, kullanıcı dostu arayüzü, güçlü altyapısı ve etik tasarım ilkeleriyle dikkat çekmektedir.

### 🎯 Temel Özellikler

#### 📚 Akademik ve Eğitim Desteği
- Akademik konu anlatımları ve kavramsal anlama
- Problem çözme stratejileri ve adım adım rehberlik
- Ödev rehberliği (doğrudan çözüm değil - öğrenmeyi teşvik eder)
- Sınav hazırlık stratejileri ve çalışma yöntemleri
- Öğrenme teknikleri ve çalışma metodolojileri

#### ✍️ Yaratıcı ve Analitik Görevler
- Yaratıcı yazım desteği (hikaye, şiir, deneme, senaryo)
- Metin özetleme ve analiz
- Araştırma konuları önerme ve kaynak bulma stratejileri
- Beyin fırtınası ve fikir geliştirme

#### 🌍 Dil ve İletişim
- Çok dilli destek (Türkçe birincil, İngilizce ikincil)
- Çeviri hizmetleri
- Dilbilgisi ve yazım stili geliştirme
- Kelime dağarcığı geliştirme

#### 🏫 İdari ve Kurumsal Destek
- Okul prosedürleri, kurallar ve politikalar hakkında bilgi
- Etkinlik takvimi ve kampüs olanakları
- Organizasyon planlama desteği
- İdari süreç rehberliği

#### 🛡️ Güvenlik ve Etik
- Kişisel veri toplama veya paylaşma yapılmaz
- Zararlı içerik üretmez (şiddet, nefret söylemi vb.)
- Akademik dürüstlüğe saygı (sınav/ödev sorularına doğrudan çözüm vermez)
- Sınırlamalar ve belirsizlikler konusunda dürüst
- Sohbetler maksimum 30 gün saklanır, sonra silinir

#### 🎨 Kullanıcı Deneyimi
- Karanlık/Aydınlık tema desteği
- Duyarlı tasarım (mobil, tablet, masaüstü)
- Erişilebilir ve kapsayıcı arayüz
- 7/24 erişilebilirlik

## 🚀 Canlı Demo

Projenin canlı sürümüne şu adresten ulaşabilirsiniz:  
👉 [https://skalgpt.netlify.app](https://skalgpt.netlify.app)

## 🔧 Kurulum

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

1. **Depoyu Klonlayın**
   ```bash
   git clone https://github.com/yourusername/skalgpt-website.git
   cd skalgpt-website
   ```

2. **Gerekli Paketleri Yükleyin**
   ```bash
   npm install
   # veya
   yarn install
   # veya
   pnpm install
   ```

3. **Geliştirme Sunucusunu Başlatın**
   ```bash
   npm run dev
   # veya
   yarn dev
   # veya
   pnpm dev
   ```

4. **Tarayıcıda Açın**
   Uygulama şu adreste çalışacaktır: [http://localhost:3000](http://localhost:3000)

## 🧠 Kullanılan Teknolojiler

- **Frontend Framework:** Next.js 14 (App Router)
- **Dil:** TypeScript 5
- **Çalışma Ortamı:** Node.js 22+
- **Stil:** Tailwind CSS 3.4+
- **UI Bileşenleri:** Radix UI + Shadcn/ui
- **Durum Yönetimi:** React Context API
- **Form Yönetimi:** React Hook Form + Zod
- **Uluslararasılaştırma:** Özel Dil Sağlayıcı
- **İkonlar:** Lucide React
- **Tema Yönetimi:** next-themes
- **Dağıtım:** Netlify (Statik Export)
- **Build Çıktısı:** Statik HTML/CSS/JS

## 📁 Proje Klasör Yapısı

```
skalgpt-website/
├── app/                    # Next.js App Router sayfaları
│   ├── hakkinda/          # Hakkında sayfası
│   ├── ozellikler/        # Özellikler sayfası
│   ├── sss/               # SSS sayfası
│   ├── globals.css        # Global stiller
│   ├── layout.tsx         # Ana layout (provider'lar ile)
│   └── page.tsx           # Ana sayfa
├── components/            # Yeniden kullanılabilir React bileşenleri
│   ├── ui/               # shadcn/ui bileşenleri (button, card, dialog vb.)
│   ├── footer.tsx        # Site alt bilgisi
│   ├── header.tsx        # Site başlığı ve navigasyon
│   ├── language-provider.tsx  # i18n context provider
│   ├── scroll-to-top.tsx # Yukarı kaydır butonu
│   └── theme-provider.tsx     # Karanlık/aydınlık tema provider
├── hooks/                # Özel React hook'ları
│   ├── use-mobile.tsx    # Mobil algılama hook'u
│   └── use-toast.ts      # Toast bildirim hook'u
├── lib/                  # Yardımcı fonksiyonlar
│   └── utils.ts          # Yardımcı fonksiyonlar (cn sınıf birleştirme)
├── public/               # Statik dosyalar
│   ├── *.webp, *.png     # Görseller
│   ├── favicon.png       # Site favicon'u
│   ├── manifest.json     # PWA manifest
│   ├── robots.txt        # SEO robots dosyası
│   └── sitemap.xml       # SEO sitemap
├── .kiro/                # Kiro AI asistan yapılandırması
│   └── steering/         # AI yönlendirme kuralları
│       ├── product.md    # Ürün genel bakış ve yönergeler
│       ├── structure.md  # Proje yapısı dokümantasyonu
│       └── tech.md       # Teknoloji yığını detayları
├── components.json       # shadcn/ui yapılandırması
├── next.config.mjs       # Next.js yapılandırması
├── tailwind.config.ts    # Tailwind CSS yapılandırması
├── tsconfig.json         # TypeScript yapılandırması
├── netlify.toml          # Netlify dağıtım yapılandırması
└── package.json          # Bağımlılıklar ve scriptler
```

## 🤖 SkalGPT Kişiliği ve Yaklaşımı

### Kişilik Özellikleri
- **Samimi ve Destekleyici**: Profesyonelliği korurken yaklaşılabilir
- **Sabırlı ve Anlayışlı**: Farklı bilgi seviyelerini kabul eder
- **Teşvik Edici**: Merak ve eleştirel düşünmeyi teşvik eder
- **Dürüst ve Şeffaf**: Sınırlamalar ve belirsizlikler konusunda açık
- **Olumlu ve Yapıcı**: Hataları öğrenme fırsatı olarak görür

### Eğitim Felsefesi
- **Sokratik Yöntem**: Düşünmeyi ve keşfetmeyi teşvik etmek için sorular sorar
- **Scaffolding**: Bağımsızlığa doğru adım adım rehberlik sağlar
- **Aktif Öğrenme**: Pasif bilgi aktarımı yerine katılım ve uygulamayı teşvik eder
- **Doğrudan Çözüm Yok**: Öğrencileri cevapları kendileri bulmaya yönlendirir

### Önemli Sınırlamalar
- ❌ Görsel veya resim tanıma yeteneği yok
- ❌ Gerçek zamanlı internete bağlı değil
- ❌ Dosya yükleme/indirme işlevi yok
- ❌ Ödev/sınav sorularına doğrudan çözüm vermez
- ❌ Zararlı içerik üretmez
- ⚠️ Zaman zaman yanlış bilgi verebilir
- 🔒 Sohbetler maksimum 30 gün saklanır, sonra silinir

## 📦 Özelleştirme

### Çevirileri Düzenleme

1. `components/language-provider.tsx` dosyasındaki çevirileri düzenleyin.
2. Hem `tr` hem de `en` nesnelerine yeni çeviri anahtarları ekleyin.
3. Bileşenlerde çevirilere erişmek için `t()` fonksiyonunu kullanın.

### Tema Renklerini Değiştirme

1. `tailwind.config.ts` dosyasındaki `theme.extend.colors` bölümünü düzenleyin.
2. Özel renkler için `app/globals.css` dosyasında CSS değişkenlerini güncelleyin.
3. Tema renkleri daha iyi karanlık mod desteği için HSL formatı kullanır.

### Yeni Bileşen Ekleme

1. `components/ui/` dizininde yeni bir bileşen oluşturun.
2. Tutarlılık için shadcn/ui kurallarını takip edin.
3. Erişilebilirlik için Radix UI temellerini kullanın.

## 🏗️ Build ve Dağıtım

### Production için Build

```bash
npm run build
# veya
yarn build
# veya
pnpm build
```

Bu komut `out/` dizininde statik bir export oluşturur.

### Production Build'i Önizleme

```bash
npm run start
# veya
yarn start
# veya
pnpm start
```

### Netlify'da Dağıtım

Proje, Netlify'da otomatik dağıtım için yapılandırılmıştır:

1. Ana branch'e değişiklikleri push edin
2. Netlify otomatik olarak build eder ve dağıtır
3. Build komutu: `npm run build`
4. Yayın dizini: `out`

Yapılandırma `netlify.toml` dosyasındadır.

## 🛠️ Katkıda Bulunma

1. Bu projeyi fork edin
2. Yeni bir özellik dalı oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Dalınıza push edin (`git push origin feature/AmazingFeature`)
5. Bir Pull Request açın

### Katkı Yönergeleri

- Mevcut kod stili ve kurallarını takip edin
- Açık commit mesajları yazın
- Değişikliklerinizi kapsamlı bir şekilde test edin
- Gerekirse dokümantasyonu güncelleyin
- Projenin etik yönergelerine saygı gösterin

## 📄 Lisans

Bu proje [MIT](LICENSE) lisansı altında lisanslanmıştır.

## 🙋‍♂️ İletişim

- 🌐 Portfolyo: [efearabaci.vercel.app](https://efearabaci.vercel.app)
- 📧 E-posta: [efe.arabaci.dev@gmail.com](mailto:efe.arabaci.dev@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/efearabaci](https://linkedin.com/in/efearabaci)

---

<div align="center">
  <p>Made with ❤️ by Efe Arabacı</p>
  <p>✨ Sezai Karakoç Anadolu Lisesi - 2025</p>
</div>
