"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Users, Shield, Lightbulb, Heart } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import Head from "next/head"

export default function AboutPage() {
  const { t } = useLanguage()

  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "SkalGPT Hakkında",
    "description": "SkalGPT'nin misyonu, vizyonu ve temel değerleri hakkında detaylı bilgi.",
    "url": "https://skalgpt.netlify.app/hakkinda",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Ana Sayfa",
          "item": "https://skalgpt.netlify.app"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Hakkında",
          "item": "https://skalgpt.netlify.app/hakkinda"
        }
      ]
    },
    "about": {
      "@type": "Organization",
      "name": "Sezai Karakoç Anadolu Lisesi",
      "url": "https://skalgpt.netlify.app",
      "logo": "https://skalgpt.netlify.app/favicon.png"
    }
  }

  return (
    <>
      <Head>
        <title>Hakkında - SkalGPT Nedir? | Sezai Karakoç Anadolu Lisesi AI Asistanı</title>
        <meta
          name="description"
          content="SkalGPT hakkında detaylı bilgi. Misyonumuz, vizyonumuz ve temel değerlerimiz. Sezai Karakoç Anadolu Lisesi'nin resmi yapay zeka asistanı."
        />
        <meta
          name="keywords"
          content="SkalGPT hakkında, yapay zeka asistanı misyonu, AI asistanı vizyonu, yapay zeka değerleri, Sezai Karakoç Anadolu Lisesi AI"
        />
        <link rel="canonical" href="https://skalgpt.netlify.app/hakkinda" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
        />
      </Head>

      <div className="min-h-screen py-8 sm:py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header - Mobile Optimized */}
          <div className="text-center mb-12 sm:mb-16">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200 mb-4 text-xs sm:text-sm">
              {t("about")}
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              {t("aboutSkalGPT")}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">{t("aboutDesc")}</p>
          </div>

          {/* Development Notice - Mobile Optimized */}
          <div className="mb-12 sm:mb-16 bg-orange-50 border border-orange-200 rounded-lg p-4 sm:p-6 text-center">
            <Badge variant="secondary" className="bg-orange-100 text-orange-800 mb-3 sm:mb-4 text-xs sm:text-sm">
              {t("comingSoon")}
            </Badge>
            <h2 className="text-xl sm:text-2xl font-bold text-orange-900 mb-3 sm:mb-4">{t("betaNotice")}</h2>
            <p className="text-orange-800 leading-relaxed max-w-2xl mx-auto text-sm sm:text-base px-2">
              {t("betaNoticeDesc")}
            </p>
          </div>

          {/* Mission & Vision - Mobile Optimized */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-20">
            <Card className="border-0 shadow-lg card-hover">
              <CardHeader className="text-center pb-3 sm:pb-4 px-4 sm:px-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Target className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" aria-hidden="true" />
                </div>
                <CardTitle className="text-xl sm:text-2xl text-gray-900">{t("ourMission")}</CardTitle>
              </CardHeader>
              <CardContent className="text-center px-4 sm:px-6">
                <CardDescription className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {t("missionDesc")}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg card-hover">
              <CardHeader className="text-center pb-3 sm:pb-4 px-4 sm:px-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" aria-hidden="true" />
                </div>
                <CardTitle className="text-xl sm:text-2xl text-gray-900">{t("ourVision")}</CardTitle>
              </CardHeader>
              <CardContent className="text-center px-4 sm:px-6">
                <CardDescription className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {t("visionDesc")}
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Core Values - Mobile Optimized */}
          <section className="mb-16 sm:mb-20">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                {t("coreValues")}
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">{t("coreValuesDesc")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" aria-hidden="true" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{t("reliability")}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{t("reliabilityDesc")}</p>
              </div>

              <div className="text-center space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" aria-hidden="true" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{t("inclusivity")}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{t("inclusivityDesc")}</p>
              </div>

              <div className="text-center space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600" aria-hidden="true" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{t("ethics")}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{t("ethicsDesc")}</p>
              </div>
            </div>
          </section>

          {/* School Connection - Mobile Optimized */}
          <section className="bg-gray-50 rounded-2xl p-6 sm:p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-center lg:text-left">
                  {t("schoolConnection")}
                </h2>
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{t("schoolConnectionDesc1")}</p>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{t("schoolConnectionDesc2")}</p>
                  <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-600">
                    <p className="text-gray-700 font-medium italic text-sm sm:text-base">"{t("schoolQuote")}"</p>
                  </div>
                </div>
              </div>

              <div className="relative order-1 lg:order-2">
                <Image
                  src="/okul.webp"
                  alt="Sezai Karakoç Anadolu Lisesi ana kampüs binası - SkalGPT'nin geliştirildiği eğitim kurumu"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-lg w-full h-auto"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
