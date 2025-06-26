"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Calculator,
  FileText,
  Users,
  PresentationIcon as PresentationChart,
  ClipboardList,
  Megaphone,
  Settings,
  HelpCircle,
  Clock,
  Shield,
  Zap,
} from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function FeaturesPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200 mb-4">
            {t("features")}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t("skalGPTCapabilities")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t("capabilitiesDesc")}</p>
        </div>

        {/* Target Audience Tabs */}
        <Tabs defaultValue="students" className="mb-16">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="students" className="text-sm md:text-base">
              {t("students")}
            </TabsTrigger>
            <TabsTrigger value="teachers" className="text-sm md:text-base">
              {t("teachers")}
            </TabsTrigger>
            <TabsTrigger value="administration" className="text-sm md:text-base">
              {t("administration")}
            </TabsTrigger>
          </TabsList>

          {/* Students Features */}
          <TabsContent value="students" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t("studentsFeatures")}</h2>
              <p className="text-lg text-gray-600">{t("studentsFeaturesDesc")}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{t("topicExplanation")}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600">{t("topicExplanationDesc")}</CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Calculator className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">{t("problemSolving")}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600">{t("problemSolvingDesc")}</CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FileText className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">{t("homeworkHelp")}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600">{t("homeworkHelpDesc")}</CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <ClipboardList className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">{t("examPrep")}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600">{t("examPrepDesc")}</CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <HelpCircle className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-lg">{t("schoolInfo")}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600">{t("schoolInfoDesc")}</CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="h-6 w-6 text-indigo-600" />
                  </div>
                  <CardTitle className="text-lg">{t("access247")}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600">{t("access247Desc")}</CardDescription>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Teachers Features */}
          <TabsContent value="teachers" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t("teachersFeatures")}</h2>
              <p className="text-lg text-gray-600">{t("teachersFeaturesDesc")}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <PresentationChart className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{t("lessonPlan")}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600">{t("lessonPlanDesc")}</CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FileText className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">{t("materialDevelopment")}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600">{t("materialDevelopmentDesc")}</CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <ClipboardList className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">{t("evaluation")}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600">{t("evaluationDesc")}</CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">{t("classManagement")}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600">{t("classManagementDesc")}</CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BookOpen className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-lg">{t("pedagogicalSupport")}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600">{t("pedagogicalSupportDesc")}</CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <HelpCircle className="h-6 w-6 text-indigo-600" />
                  </div>
                  <CardTitle className="text-lg">{t("professionalDevelopment")}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600">{t("professionalDevelopmentDesc")}</CardDescription>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Administration Features */}
          <TabsContent value="administration" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t("adminFeatures")}</h2>
              <p className="text-lg text-gray-600">{t("adminFeaturesDesc")}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Megaphone className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{t("announcementManagement")}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600">{t("announcementManagementDesc")}</CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Settings className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">{t("policyGuidance")}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600">{t("policyGuidanceDesc")}</CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FileText className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">{t("documentation")}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600">{t("documentationDesc")}</CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">{t("communicationSupport")}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600">{t("communicationSupportDesc")}</CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <ClipboardList className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-lg">{t("processManagement")}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600">{t("processManagementDesc")}</CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <HelpCircle className="h-6 w-6 text-indigo-600" />
                  </div>
                  <CardTitle className="text-lg">{t("consulting")}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600">{t("consultingDesc")}</CardDescription>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Key Features */}
        <section className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("keyFeatures")}</h2>
            <p className="text-lg text-gray-600">{t("keyFeaturesDesc")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{t("secureReliable")}</h3>
              <p className="text-gray-600 leading-relaxed">{t("secureReliableDesc")}</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{t("fastEffective")}</h3>
              <p className="text-gray-600 leading-relaxed">{t("fastEffectiveDesc")}</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{t("personalized")}</h3>
              <p className="text-gray-600 leading-relaxed">{t("personalizedDesc")}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
