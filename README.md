# SkalGPT - Sezai Karakoç Anadolu Lisesi Yapay Zeka Asistanı

🎓 **Türkiye'nin ilk okul odaklı yapay zeka eğitim asistanı**

Öğrenciler, öğretmenler ve idare için özel olarak geliştirilmiş güvenilir yapay zeka asistanı. 7/24 erişilebilir eğitim desteği sunar.

## 🌟 Özellikler

- 🎯 **Öğrenciler İçin**: Ders desteği, ödev yardımı, sınav hazırlığı
- 👨‍🏫 **Öğretmenler İçin**: Materyal geliştirme, ders planı hazırlama
- 🏫 **İdare İçin**: Yönetim desteği, duyuru hazırlama
- 🔒 **Güvenli ve Güvenilir**: Okul değerleriyle uyumlu
- 🌐 **Çok Dilli**: Türkçe/İngilizce dil desteği
- 📱 **Responsive**: Tüm cihazlarda mükemmel deneyim
- ⚡ **Hızlı**: Optimize edilmiş performans

## 🚀 Canlı Demo

**[skalgpt.netlify.app](https://skalgpt.netlify.app)** adresinden SkalGPT'yi deneyebilirsiniz.

## 🛠️ Teknoloji Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **UI Components**: Radix UI, Lucide React
- **Backend**: Netlify Functions
- **AI Integration**: Langflow API
- **Deployment**: Netlify
- **SEO**: Comprehensive optimization

## 📦 Kurulum

### Gereksinimler

- Node.js 18+
- npm veya yarn

### Environment Variables

\`\`\`env
VITE_FLOW_ID=your_flow_id
VITE_LANGFLOW_BASE_URL=your_langflow_base_url
VITE_LANGFLOW_API_KEY=your_api_key
VITE_HF_TOKEN=your_huggingface_token
\`\`\`

### Adımlar

1. **Repository'yi klonlayın**
   \`\`\`bash
   git clone https://github.com/your-username/skalgpt-website.git
   cd skalgpt-website
   \`\`\`

2. **Dependencies'leri yükleyin**
   \`\`\`bash
   npm install
   \`\`\`

3. **Environment variables'ları ayarlayın**
   - `.env.local` dosyası oluşturun
   - Yukarıdaki environment variables'ları ekleyin

4. **Development server'ı başlatın**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Production build**
   \`\`\`bash
   npm run build
   \`\`\`

## 🌐 Deployment

### Netlify'a Deploy

1. GitHub'a push edin
2. Netlify'da "New site from Git" seçin
3. Repository'nizi bağlayın
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
5. Environment variables'ları ekleyin
6. Deploy edin

## 📈 SEO Optimizasyonları

- ✅ Comprehensive meta tags
- ✅ Structured data (JSON-LD)
- ✅ Optimized images with alt text
- ✅ Semantic HTML
- ✅ Performance optimization
- ✅ Mobile-first responsive design
- ✅ Sitemap and robots.txt
- ✅ Open Graph and Twitter Cards

## 🔧 API Endpoints

### Netlify Functions

- `/.netlify/functions/langflow-proxy` - Chat functionality

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 📞 İletişim

- **Email**: skalgpt.official@gmail.com
- **Website**: [skalgpt.netlify.app](https://skalgpt.netlify.app)
- **School**: Sezai Karakoç Anadolu Lisesi

## 🙏 Teşekkürler

- Sezai Karakoç Anadolu Lisesi öğretmen ve öğrencilerine
- Açık kaynak topluluğuna
- Tüm katkıda bulunanlara

---

**SkalGPT** - Eğitimde yapay zeka devrimi! 🚀
