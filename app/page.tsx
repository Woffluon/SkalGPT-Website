"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Shield, Zap, MessageSquare, Brain, FileText, Lightbulb } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import Head from "next/head"

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <>
      <Head>
        <title>SkalGPT - Sezai Karakoç Anadolu Lisesi Yapay Zeka Asistanı | Çok Yönlü AI</title>
        <meta
          name="description"
          content="SkalGPT, Sezai Karakoç Anadolu Lisesi öğrencileri, öğretmenleri ve personeli için özel olarak geliştirilmiş, çok yönlü bir yapay zeka asistanıdır. Akademik destek, yaratıcı yazım, özetleme, analiz ve problem çözme gibi birçok alanda hizmet sunar."
        />
        <meta
          name="keywords"
          content="yapay zeka asistanı, SkalGPT, Sezai Karakoç Anadolu Lisesi, akademik destek, yaratıcı yazım, özetleme, analiz, problem çözme, AI chatbot Türkiye"
        />
        <link rel="canonical" href="https://skalgpt.netlify.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
      </Head>

      <div className="min-h-screen">
        {/* Hero Section - Mobile Optimized */}
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 sm:py-16 lg:py-20 px-4 animate-fade-in">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6 sm:space-y-8 animate-slide-in-left text-center lg:text-left">
                <div className="space-y-4">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-xs sm:text-sm">
                    {t("schoolName")}
                  </Badge>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    <span className="text-blue-600">{t("heroTitle")}</span>
                    <br />
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{t("heroSubtitle")}</span>
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    {t("heroDescription")}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto text-sm sm:text-base"
                    asChild
                  >
                    <Link href="/ozellikler" aria-label="SkalGPT özelliklerini keşfedin">
                      {t("exploreFeatures")}
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50 w-full sm:w-auto text-sm sm:text-base"
                    asChild
                  >
                    <Link href="/hakkinda" aria-label="SkalGPT hakkında daha fazla bilgi edinin">
                      {t("learnMore")}
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative animate-slide-in-right mt-8 lg:mt-0">
                <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 border">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <Brain className="h-4 w-4 sm:h-6 sm:w-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base">SkalGPT</h3>
                      <p className="text-xs sm:text-sm text-gray-500">{t("heroSubtitle")}</p>
                    </div>
                  </div>
                  <div className="space-y-3 sm:space-y-4" role="dialog" aria-label="SkalGPT sohbet örneği">
                    <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                      <p className="text-xs sm:text-sm text-gray-600">
                        "Matematik dersinde türev konusunu anlatır mısın?"
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 sm:p-4">
                      <p className="text-xs sm:text-sm text-blue-800">
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

        {/* Benefits Section - Mobile Optimized */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                {t("whySkalGPT")}
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">{t("whySkalGPTDesc")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-hover animate-slide-up stagger-1">
                <CardHeader className="text-center pb-3 sm:pb-4 px-4 sm:px-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-gray-900">{t("forStudents")}</CardTitle>
                </CardHeader>
                <CardContent className="text-center px-4 sm:px-6">
                  <CardDescription className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {t("forStudentsDesc")}
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-hover animate-slide-up stagger-2">
                <CardHeader className="text-center pb-3 sm:pb-4 px-4 sm:px-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Users className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-gray-900">{t("forTeachers")}</CardTitle>
                </CardHeader>
                <CardContent className="text-center px-4 sm:px-6">
                  <CardDescription className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {t("forTeachersDesc")}
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-hover animate-slide-up stagger-3">
                <CardHeader className="text-center pb-3 sm:pb-4 px-4 sm:px-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-gray-900">{t("forAdmin")}</CardTitle>
                </CardHeader>
                <CardContent className="text-center px-4 sm:px-6">
                  <CardDescription className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {t("forAdminDesc")}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Capabilities Section - Mobile Optimized */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                {t("skalGPTCapabilities")}
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">{t("capabilitiesDesc")}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                <CardHeader className="text-center pb-3 sm:pb-4 px-4 sm:px-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-base sm:text-lg">{t("topicExplanation")}</CardTitle>
                </CardHeader>
                <CardContent className="text-center px-4 sm:px-6">
                  <CardDescription className="text-gray-600 text-sm sm:text-base">
                    {t("topicExplanationDesc")}
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                <CardHeader className="text-center pb-3 sm:pb-4 px-4 sm:px-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-base sm:text-lg">{t("creativeWriting")}</CardTitle>
                </CardHeader>
                <CardContent className="text-center px-4 sm:px-6">
                  <CardDescription className="text-gray-600 text-sm sm:text-base">
                    {t("creativeWritingDesc")}
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                <CardHeader className="text-center pb-3 sm:pb-4 px-4 sm:px-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-base sm:text-lg">{t("summarization")}</CardTitle>
                </CardHeader>
                <CardContent className="text-center px-4 sm:px-6">
                  <CardDescription className="text-gray-600 text-sm sm:text-base">
                    {t("summarizationDesc")}
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                <CardHeader className="text-center pb-3 sm:pb-4 px-4 sm:px-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-base sm:text-lg">{t("ideaGeneration")}</CardTitle>
                </CardHeader>
                <CardContent className="text-center px-4 sm:px-6">
                  <CardDescription className="text-gray-600 text-sm sm:text-base">
                    {t("ideaGenerationDesc")}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Trust Section - Mobile Optimized */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-center lg:text-left">
                  {t("reliableOfficial")}
                </h2>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Shield className="h-3 w-3 sm:h-5 sm:w-5 text-blue-600" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">
                        {t("schoolApproved")}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{t("schoolApprovedDesc")}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Zap className="h-3 w-3 sm:h-5 sm:w-5 text-green-600" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">
                        {t("educationFocused")}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{t("educationFocusedDesc")}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <MessageSquare className="h-3 w-3 sm:h-5 sm:w-5 text-purple-600" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">
                        {t("continuousDevelopment")}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {t("continuousDevelopmentDesc")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative order-1 lg:order-2">
                <Image
                  src="/skalgpt.png"
                  alt="SkalGPT güvenilir yapay zeka asistanı görseli - Sezai Karakoç Anadolu Lisesi'ne özel AI"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-lg w-full h-auto"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Mobile Optimized */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-blue-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              {t("improveEducation")}
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
              {t("improveEducationDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-blue-600 border-white hover:bg-gray-100 w-full sm:w-auto text-sm sm:text-base"
                asChild
              >
                <Link href="/hakkinda" aria-label="SkalGPT hakkında daha fazla bilgi edinin">
                  {t("learnMore")}
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-blue-600 border-white hover:bg-gray-100 w-full sm:w-auto text-sm sm:text-base"
                asChild
              >
                <Link href="/ozellikler" aria-label="SkalGPT özelliklerini keşfedin">
                  {t("exploreFeatures")}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
