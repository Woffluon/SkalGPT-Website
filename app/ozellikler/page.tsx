"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Calculator,
  FileText,
  GraduationCap,
  Info,
  Clock,
  PresentationIcon as PresentationChart,
  FileSpreadsheet,
  ClipboardCheck,
  Users,
  Lightbulb,
  TrendingUp,
  Shield,
  Zap,
  Heart,
  PenTool,
  FileSearch,
  Languages,
  Sparkles,
} from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function FeaturesPage() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState("students")

  const studentFeatures = [
    {
      icon: BookOpen,
      title: t("topicExplanation"),
      description: t("topicExplanationDesc"),
    },
    {
      icon: Calculator,
      title: t("problemSolving"),
      description: t("problemSolvingDesc"),
    },
    {
      icon: FileText,
      title: t("homeworkHelp"),
      description: t("homeworkHelpDesc"),
    },
    {
      icon: GraduationCap,
      title: t("examPrep"),
      description: t("examPrepDesc"),
    },
    {
      icon: Info,
      title: t("schoolInfo"),
      description: t("schoolInfoDesc"),
    },
    {
      icon: Clock,
      title: t("access247"),
      description: t("access247Desc"),
    },
  ]

  const teacherFeatures = [
    {
      icon: PresentationChart,
      title: t("lessonPlan"),
      description: t("lessonPlanDesc"),
    },
    {
      icon: FileSpreadsheet,
      title: t("materialDevelopment"),
      description: t("materialDevelopmentDesc"),
    },
    {
      icon: ClipboardCheck,
      title: t("evaluation"),
      description: t("evaluationDesc"),
    },
    {
      icon: Users,
      title: t("classManagement"),
      description: t("classManagementDesc"),
    },
    {
      icon: Lightbulb,
      title: t("pedagogicalSupport"),
      description: t("pedagogicalSupportDesc"),
    },
    {
      icon: TrendingUp,
      title: t("professionalDevelopment"),
      description: t("professionalDevelopmentDesc"),
    },
  ]

  const keyFeatures = [
    {
      icon: Shield,
      title: t("secureReliable"),
      description: t("secureReliableDesc"),
    },
    {
      icon: Zap,
      title: t("fastEffective"),
      description: t("fastEffectiveDesc"),
    },
    {
      icon: Heart,
      title: t("personalized"),
      description: t("personalizedDesc"),
    },
  ]

  const newCapabilities = [
    {
      icon: PenTool,
      title: t("creativeWriting"),
      description: t("creativeWritingDesc"),
    },
    {
      icon: FileSearch,
      title: t("summarization"),
      description: t("summarizationDesc"),
    },
    {
      icon: Languages,
      title: t("languageSupport"),
      description: t("languageSupportDesc"),
    },
    {
      icon: Sparkles,
      title: t("ideaGeneration"),
      description: t("ideaGenerationDesc"),
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            {t("features")}
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            {t("skalGPTCapabilities")}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t("capabilitiesDesc")}</p>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 mb-8 lg:mb-12 max-w-md mx-auto py-0 h-11 w-auto px-1">
            <TabsTrigger value="students" className="text-sm sm:text-base">
              {t("students")}
            </TabsTrigger>
            <TabsTrigger value="teachers" className="text-sm sm:text-base">
              {t("teachers")}
            </TabsTrigger>
          </TabsList>

          {/* Students Tab */}
          <TabsContent value="students" className="space-y-8 lg:space-y-12">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{t("studentsFeatures")}</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("studentsFeaturesDesc")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {studentFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-xl hover:-translate-y-1"
                  >
                    <CardHeader className="pb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-gray-900">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 leading-relaxed">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          {/* Teachers Tab */}
          <TabsContent value="teachers" className="space-y-8 lg:space-y-12">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{t("teachersFeatures")}</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("teachersFeaturesDesc")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {teacherFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-xl hover:-translate-y-1"
                  >
                    <CardHeader className="pb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                        <Icon className="h-6 w-6 text-green-600" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-gray-900">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 leading-relaxed">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>
        </Tabs>

        {/* New Capabilities Section */}
        <div className="mt-16 lg:mt-20">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-sm font-medium border-purple-200 text-purple-700">
              Yeni Yetenekler
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Çok Yönlü AI Asistan</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Eğitim desteğinin yanı sıra yaratıcılık ve analiz alanlarında da güçlü yetenekler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newCapabilities.map((capability, index) => {
              const Icon = capability.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-xl hover:-translate-y-1"
                >
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-900">{capability.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {capability.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Key Features */}
        <div className="mt-16 lg:mt-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{t("keyFeatures")}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("keyFeaturesDesc")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {keyFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-xl hover:-translate-y-1 text-center"
                >
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-indigo-200 transition-colors">
                      <Icon className="h-8 w-8 text-indigo-600" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 lg:p-12 text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">SkalGPT ile Deneyiminizi Geliştirin</h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Yapay zeka destekli asistan ile akademik başarınızı artırın ve yaratıcı süreçlerinizde destek alın
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3"
            >
              {t("comingSoon")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
