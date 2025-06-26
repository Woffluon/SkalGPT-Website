import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { LanguageProvider } from "@/components/language-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL("https://skalgpt.netlify.app"),
  title: {
    default: "SkalGPT - Sezai Karakoç Anadolu Lisesi Yapay Zeka Asistanı | Eğitim AI Chatbot",
    template: "%s | SkalGPT - Eğitim AI Asistanı",
  },
  description:
    "SkalGPT, Sezai Karakoç Anadolu Lisesi'nin resmi yapay zeka asistanıdır. Öğrenciler için ders desteği, öğretmenler için materyal geliştirme ve idare için yönetim desteği sunar. 7/24 erişilebilir eğitim chatbotu.",
  keywords: [
    "yapay zeka eğitim",
    "AI chatbot Türkiye",
    "eğitim asistanı",
    "SkalGPT",
    "Sezai Karakoç Anadolu Lisesi",
    "öğrenci yardımı AI",
    "öğretmen desteği yapay zeka",
    "eğitim teknolojisi",
    "okul AI asistanı",
    "Türkçe eğitim chatbot",
    "ders yardımı AI",
    "ödev desteği yapay zeka",
    "sınav hazırlığı AI",
    "matematik AI yardımı",
    "fen bilimleri AI",
    "dil öğrenme AI",
    "eğitim chatbot Türkiye",
    "okul yapay zeka",
    "öğrenci başarı AI",
    "eğitim teknoloji çözümleri",
  ],
  authors: [
    { name: "Sezai Karakoç Anadolu Lisesi", url: "https://skalgpt.netlify.app" },
    { name: "SkalGPT Geliştirme Ekibi" },
  ],
  creator: "Sezai Karakoç Anadolu Lisesi",
  publisher: "SkalGPT",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    alternateLocale: ["en_US"],
    url: "https://skalgpt.netlify.app",
    siteName: "SkalGPT - Eğitim AI Asistanı",
    title: "SkalGPT - Sezai Karakoç Anadolu Lisesi Yapay Zeka Asistanı",
    description:
      "Türkiye'nin ilk okul odaklı yapay zeka asistanı. Öğrenciler, öğretmenler ve idare için özel geliştirilmiş eğitim chatbotu. 7/24 ders desteği, ödev yardımı ve sınav hazırlığı.",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "SkalGPT Logo - Eğitim Yapay Zeka Asistanı",
        type: "image/png",
      },
      {
        url: "/okul.webp",
        width: 800,
        height: 600,
        alt: "Sezai Karakoç Anadolu Lisesi - SkalGPT Ana Kampüs",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@skalgpt",
    creator: "@skalgpt",
    title: "SkalGPT - Türkiye'nin İlk Okul Odaklı AI Asistanı",
    description: "Eğitimde yapay zeka devrimi! Öğrenciler için ders desteği, öğretmenler için materyal geliştirme.",
    images: ["/favicon.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
      { url: "/favicon.png", sizes: "152x152", type: "image/png" },
      { url: "/favicon.png", sizes: "144x144", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon.png",
        color: "#2563eb",
      },
    ],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://skalgpt.netlify.app",
    languages: {
      "tr-TR": "https://skalgpt.netlify.app",
      "en-US": "https://skalgpt.netlify.app/en",
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
  },
  category: "education",
  classification: "Educational Technology",
  referrer: "origin-when-cross-origin",
  colorScheme: "light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2563eb" },
    { media: "(prefers-color-scheme: dark)", color: "#1e40af" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "SkalGPT",
  },
  applicationName: "SkalGPT",
  generator: "Next.js",
  abstract: "Sezai Karakoç Anadolu Lisesi'nin resmi yapay zeka eğitim asistanı",
  archives: ["https://skalgpt.netlify.app/sitemap.xml"],
  bookmarks: ["https://skalgpt.netlify.app"],
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
    HandheldFriendly: "true",
    MobileOptimized: "width",
    "theme-color": "#2563eb",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "SkalGPT",
  alternateName: "Sezai Karakoç Anadolu Lisesi AI Asistanı",
  description: "Türkiye'nin ilk okul odaklı yapay zeka eğitim asistanı",
  url: "https://skalgpt.netlify.app",
  logo: {
    "@type": "ImageObject",
    url: "https://skalgpt.netlify.app/favicon.png",
    width: 512,
    height: 512,
  },
  image: {
    "@type": "ImageObject",
    url: "https://skalgpt.netlify.app/okul.webp",
    width: 800,
    height: 600,
  },
  sameAs: ["https://skalgpt.netlify.app", "https://github.com/skalgpt"],
  parentOrganization: {
    "@type": "EducationalOrganization",
    name: "Sezai Karakoç Anadolu Lisesi",
    address: {
      "@type": "PostalAddress",
      addressCountry: "TR",
      addressLocality: "İstanbul",
    },
  },
  offers: {
    "@type": "Offer",
    name: "Ücretsiz AI Eğitim Desteği",
    description: "7/24 erişilebilir yapay zeka eğitim asistanı hizmeti",
    category: "Educational Service",
    availability: "https://schema.org/InStock",
    price: "0",
    priceCurrency: "TRY",
  },
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web Browser",
  softwareVersion: "1.0.0",
  dateCreated: "2024-01-01",
  dateModified: "2024-12-26",
  inLanguage: ["tr-TR", "en-US"],
  audience: {
    "@type": "EducationalAudience",
    educationalRole: ["student", "teacher", "administrator"],
  },
  educationalLevel: "High School",
  teaches: ["Matematik", "Fen Bilimleri", "Türkçe", "İngilizce", "Sosyal Bilimler", "Eğitim Teknolojileri"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://skalgpt.netlify.app" />
        <link rel="preload" href="/favicon.png" as="image" type="image/png" />
        <link rel="preload" href="/okul.webp" as="image" type="image/webp" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <ScrollToTop />
        </LanguageProvider>
      </body>
    </html>
  )
}
