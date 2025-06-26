"use client"

import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HelpCircle, MessageSquare, Shield, Clock } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export default function FAQPage() {
  const { t } = useLanguage()

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
    {
      question: t("faqQuestion9"),
      answer: t("faqAnswer9"),
    },
    {
      question: t("faqQuestion10"),
      answer: t("faqAnswer10"),
    },
  ]

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200 mb-4">
            {t("faq")}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t("frequentlyAsked")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t("faqDesc")}</p>
        </div>

        {/* FAQ Accordion */}
        <div className="mb-16">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Help Categories */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("helpCategories")}</h2>
            <p className="text-lg text-gray-600">{t("helpCategoriesDesc")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-hover text-center">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <HelpCircle className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">{t("generalUsage")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{t("generalUsageDesc")}</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-hover text-center">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">{t("security")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{t("securityDesc")}</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-hover text-center">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MessageSquare className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">{t("educationSupport")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{t("educationSupportDesc")}</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-hover text-center">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">{t("technicalSupport")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{t("technicalSupportDesc")}</CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t("questionNotHere")}</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">{t("questionNotHereDesc")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <Link href="/hakkinda">{t("about")}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              asChild
            >
              <Link href="/ozellikler">{t("exploreFeatures")}</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
