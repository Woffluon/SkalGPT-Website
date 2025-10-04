"use client"

import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HelpCircle, MessageSquare, Shield, Clock } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import Head from "next/head"

export default function FAQPage() {
  const { t } = useLanguage()

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "SkalGPT Hakkında Sık Sorulan Sorular",
    "description": "SkalGPT yapay zeka asistanı hakkında en çok sorulan sorular ve yanıtları.",
    "url": "https://skalgpt.netlify.app/sss",
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
          "name": "SSS",
          "item": "https://skalgpt.netlify.app/sss"
        }
      ]
    },
    "mainEntity": [
      {
        "@type": "Question",
        "name": "SkalGPT nedir ve nasıl çalışır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SkalGPT, Sezai Karakoç Anadolu Lisesi öğrencileri, öğretmenleri ve personeli için özel olarak geliştirilmiş çok yönlü bir yapay zeka asistanıdır. Okul içi bilgiye erişimi kolaylaştırır, akademik süreçlerde destek olur. Bilgi sağlama, yaratıcı yazım, özetleme, analiz ve problem çözme gibi birçok alanda hizmet sunar. NOT: Görsel veya resim tanıma yetenekleri bulunmamaktadır."
        }
      },
      {
        "@type": "Question",
        "name": "SkalGPT'ye nasıl erişebilirim?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SkalGPT şu anda aktif olarak geliştirilmekte olup, yakın zamanda Sezai Karakoç Anadolu Lisesi öğrencileri, öğretmenleri ve personelinin kullanımına açılacaktır."
        }
      },
      {
        "@type": "Question",
        "name": "SkalGPT güvenli mi? Verilerim korunuyor mu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet, SkalGPT tamamen güvenlidir. Tüm konuşmalarınız şifrelenir ve kişisel verileriniz korunur. Sohbetler maksimum 30 gün saklanır ve süre sonunda silinir."
        }
      },
      {
        "@type": "Question",
        "name": "SkalGPT 7/24 kullanılabilir mi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet, SkalGPT günün her saati kullanılabilir. İstediğiniz zaman sorularınızı sorabilir ve anında yanıt alabilirsiniz."
        }
      }
    ]
  }

  const faqs = [
    {
      question: t("faqQuestion1"),
      answer: t("faqAnswer1"),
    },
    {
      question: t("faqQuestion2"),
      answer: t("faqAnswer2"),
    },
    {
      question: t("faqQuestion3"),
      answer: t("faqAnswer3"),
    },
    {
      question: t("faqQuestion4"),
      answer: t("faqAnswer4"),
    },
    {
      question: t("faqQuestion5"),
      answer: t("faqAnswer5"),
    },
    {
      question: t("faqQuestion6"),
      answer: t("faqAnswer6"),
    },
    {
      question: t("faqQuestion7"),
      answer: t("faqAnswer7"),
    },
    {
      question: t("faqQuestion8"),
      answer: t("faqAnswer8"),
    },
  ]

  return (
    <>
      <Head>
        <title>SSS - SkalGPT Hakkında Sık Sorulan Sorular | Yapay Zeka Asistanı</title>
        <meta
          name="description"
          content="SkalGPT hakkında sık sorulan sorular ve yanıtları. Yapay zeka asistanının kullanımı, güvenliği, özellikleri ve erişim bilgileri hakkında detaylı bilgi edinin."
        />
        <meta
          name="keywords"
          content="SkalGPT SSS, yapay zeka asistanı soruları, AI asistanı güvenliği, SkalGPT erişim, yapay zeka yardım, Sezai Karakoç Anadolu Lisesi AI"
        />
        <link rel="canonical" href="https://skalgpt.netlify.app/sss" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </Head>

      <div className="min-h-screen py-8 sm:py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header - Mobile Optimized */}
          <div className="text-center mb-12 sm:mb-16">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200 mb-4 text-xs sm:text-sm">
              {t("faq")}
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              {t("frequentlyAsked")}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">{t("faqDesc")}</p>
          </div>

          {/* FAQ Accordion - Mobile Optimized */}
          <div className="mb-12 sm:mb-16">
            <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border rounded-lg px-4 sm:px-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4 sm:py-6 text-sm sm:text-base">
                    <span className="font-semibold text-gray-900 pr-2 sm:pr-4 leading-snug">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 sm:pb-6">
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Help Categories - Mobile Optimized */}
          <section className="mb-12 sm:mb-16">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                {t("helpCategories")}
              </h2>
              <p className="text-base sm:text-lg text-gray-600 px-2">{t("helpCategoriesDesc")}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-hover text-center">
                <CardHeader className="pb-3 sm:pb-4 px-4 sm:px-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <HelpCircle className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-base sm:text-lg">{t("generalUsage")}</CardTitle>
                </CardHeader>
                <CardContent className="px-4 sm:px-6">
                  <CardDescription className="text-gray-600 text-sm sm:text-base">
                    {t("generalUsageDesc")}
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-hover text-center">
                <CardHeader className="pb-3 sm:pb-4 px-4 sm:px-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-base sm:text-lg">{t("security")}</CardTitle>
                </CardHeader>
                <CardContent className="px-4 sm:px-6">
                  <CardDescription className="text-gray-600 text-sm sm:text-base">{t("securityDesc")}</CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-hover text-center">
                <CardHeader className="pb-3 sm:pb-4 px-4 sm:px-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-base sm:text-lg">{t("educationSupport")}</CardTitle>
                </CardHeader>
                <CardContent className="px-4 sm:px-6">
                  <CardDescription className="text-gray-600 text-sm sm:text-base">
                    {t("educationSupportDesc")}
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-hover text-center">
                <CardHeader className="pb-3 sm:pb-4 px-4 sm:px-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-base sm:text-lg">{t("technicalSupport")}</CardTitle>
                </CardHeader>
                <CardContent className="px-4 sm:px-6">
                  <CardDescription className="text-gray-600 text-sm sm:text-base">
                    {t("technicalSupportDesc")}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Contact CTA - Mobile Optimized */}
          <section className="bg-gray-50 rounded-2xl p-6 sm:p-8 md:p-12 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              {t("questionNotHere")}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
              {t("questionNotHereDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto text-sm sm:text-base"
                asChild
              >
                <Link href="/hakkinda">{t("about")}</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50 w-full sm:w-auto text-sm sm:text-base"
                asChild
              >
                <Link href="/ozellikler">{t("exploreFeatures")}</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
