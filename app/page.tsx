"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, Users, Shield, Zap, MessageSquare, Brain } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import Head from "next/head"

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <>
      <Head>
        <title>SkalGPT - Türkiye'nin İlk Okul Odaklı AI Eğitim Asistanı | 7/24 Ders Desteği</title>
        <meta
          name="description"
          content="SkalGPT ile eğitimde AI devrimi! Öğrenciler için 7/24 ders desteği, öğretmenler için materyal geliştirme, idare için yönetim desteği. Ücretsiz Türkçe eğitim chatbotu."
        />
        <meta
          name="keywords"
          content="yapay zeka eğitim, AI chatbot Türkiye, ücretsiz eğitim asistanı, ders yardımı AI, ödev desteği yapay zeka, sınav hazırlığı AI"
        />
        <link rel="canonical" href="https://skalgpt.netlify.app" />
      </Head>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 px-4 animate-fade-in">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-slide-in-left">
                <div className="space-y-4">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                    {t("schoolName")}
                  </Badge>
                  <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                    <span className="text-blue-600">{t("heroTitle")}</span>
                    <br />
                    {t("heroSubtitle")}
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">{t("heroDescription")}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white btn-hover" asChild>
                    <Link href="/demo" aria-label="SkalGPT demo sayfasına git - Yapay zeka asistanını deneyin">
                      {t("tryDemo")}
                      <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    asChild
                  >
                    <Link href="/ozellikler" aria-label="SkalGPT özelliklerini keşfedin">
                      {t("exploreFeatures")}
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative animate-slide-in-right">
                <div className="bg-white rounded-2xl shadow-2xl p-8 border">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <Brain className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">SkalGPT</h3>
                      <p className="text-sm text-gray-500">{t("aiAssistant")}</p>
                    </div>
                  </div>
                  <div className="space-y-4" role="dialog" aria-label="SkalGPT sohbet örneği">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600">"Matematik dersinde türev konusunu anlatır mısın?"</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="text-sm text-blue-800">
                        Tabii ki! Türev, bir fonksiyonun değişim hızını ölçen matematiksel bir kavramdır. Size adım adım
                        açıklayayım...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("whySkalGPT")}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("whySkalGPTDesc")}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-hover animate-slide-up stagger-1">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-green-600" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{t("forStudents")}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 leading-relaxed">{t("forStudentsDesc")}</CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-hover animate-slide-up stagger-2">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-purple-600" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{t("forTeachers")}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 leading-relaxed">{t("forTeachersDesc")}</CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-hover animate-slide-up stagger-3">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-orange-600" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{t("forAdmin")}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 leading-relaxed">{t("forAdminDesc")}</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t("reliableOfficial")}</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Shield className="h-5 w-5 text-blue-600" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{t("schoolApproved")}</h3>
                      <p className="text-gray-600">{t("schoolApprovedDesc")}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Zap className="h-5 w-5 text-green-600" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{t("educationFocused")}</h3>
                      <p className="text-gray-600">{t("educationFocusedDesc")}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <MessageSquare className="h-5 w-5 text-purple-600" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{t("continuousDevelopment")}</h3>
                      <p className="text-gray-600">{t("continuousDevelopmentDesc")}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/skalgpt.png"
                  alt="SkalGPT güvenilir eğitim teknolojisi görseli - Yapay zeka destekli öğrenme platformu"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-lg"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-blue-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t("improveEducation")}</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">{t("improveEducationDesc")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                <Link href="/demo" aria-label="SkalGPT demo sayfasına git ve yapay zeka asistanını deneyin">
                  {t("tryDemo")}
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-blue-600 border-white hover:bg-gray-100"
                asChild
              >
                <Link href="/hakkinda" aria-label="SkalGPT hakkında daha fazla bilgi edinin">
                  {t("learnMore")}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
