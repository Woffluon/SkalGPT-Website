"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Users, Shield, Lightbulb, Heart } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import Head from "next/head"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <>
      <Head>
        <title>Hakkında - SkalGPT Nedir? | Sezai Karakoç Anadolu Lisesi AI Asistanı</title>
        <meta
          name="description"
          content="SkalGPT hakkında detaylı bilgi. Misyonumuz, vizyonumuz ve temel değerlerimiz. Sezai Karakoç Anadolu Lisesi'nin resmi yapay zeka eğitim asistanı."
        />
        <meta
          name="keywords"
          content="SkalGPT hakkında, yapay zeka eğitim misyonu, AI asistanı vizyonu, eğitim teknolojisi değerleri"
        />
        <link rel="canonical" href="https://skalgpt.netlify.app/hakkinda" />
      </Head>

      <div className="min-h-screen py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200 mb-4">
              {t("about")}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t("aboutSkalGPT")}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t("aboutDesc")}</p>
          </div>

          {/* Beta Notice */}
          <div className="mb-16 bg-orange-50 border border-orange-200 rounded-lg p-6 text-center">
            <Badge variant="secondary" className="bg-orange-100 text-orange-800 mb-4">
              {t("beta")}
            </Badge>
            <h2 className="text-2xl font-bold text-orange-900 mb-4">{t("betaNotice")}</h2>
            <p className="text-orange-800 leading-relaxed max-w-2xl mx-auto">{t("betaNoticeDesc")}</p>
          </div>

          {/* Mission & Vision */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <Card className="border-0 shadow-lg card-hover">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" aria-hidden="true" />
                </div>
                <CardTitle className="text-2xl text-gray-900">{t("ourMission")}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 leading-relaxed text-base">
                  {t("missionDesc")}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg card-hover">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-green-600" aria-hidden="true" />
                </div>
                <CardTitle className="text-2xl text-gray-900">{t("ourVision")}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 leading-relaxed text-base">{t("visionDesc")}</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("coreValues")}</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("coreValuesDesc")}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="h-8 w-8 text-red-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{t("reliability")}</h3>
                <p className="text-gray-600 leading-relaxed">{t("reliabilityDesc")}</p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-purple-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{t("inclusivity")}</h3>
                <p className="text-gray-600 leading-relaxed">{t("inclusivityDesc")}</p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="h-8 w-8 text-orange-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{t("ethics")}</h3>
                <p className="text-gray-600 leading-relaxed">{t("ethicsDesc")}</p>
              </div>
            </div>
          </section>

          {/* School Connection */}
          <section className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t("schoolConnection")}</h2>
                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">{t("schoolConnectionDesc1")}</p>
                  <p className="text-gray-600 leading-relaxed">{t("schoolConnectionDesc2")}</p>
                  <div className="bg-white rounded-lg p-6 border-l-4 border-blue-600">
                    <p className="text-gray-700 font-medium italic">"{t("schoolQuote")}"</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/okul.webp"
                  alt="Sezai Karakoç Anadolu Lisesi ana kampüs binası - SkalGPT'nin geliştirildiği eğitim kurumu"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-lg"
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
