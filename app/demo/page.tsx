"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Send, Bot, User, Sparkles, AlertCircle } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { sendMessageToLangflow, LangflowError, NetworkError, APIError } from "@/lib/langflow-client"

interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function DemoPage() {
  const { t } = useLanguage()
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: t("initialGreeting"),
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [sessionId, setSessionId] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const predefinedQuestions = [
    t("exampleQuestion1"),
    t("exampleQuestion2"),
    t("exampleQuestion3"),
    t("exampleQuestion4"),
  ]

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)
    setError(null)

    try {
      const result = await sendMessageToLangflow(content, sessionId)

      if (result.sessionId && !sessionId) {
        setSessionId(result.sessionId)
      }

      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: result.response,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botResponse])
    } catch (error) {
      let errorMessage = "Bir hata oluştu"

      if (error instanceof NetworkError) {
        errorMessage = "Sunucuya bağlanılamadı. Lütfen internet bağlantınızı kontrol edin."
      } else if (error instanceof APIError) {
        errorMessage = "API isteği başarısız oldu. Lütfen tekrar deneyin."
      } else if (error instanceof LangflowError) {
        errorMessage = error.message
      }

      setError(errorMessage)

      const fallbackResponse: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "Üzgünüm, şu anda bir teknik sorun yaşıyorum. Lütfen daha sonra tekrar deneyin veya skalgpt.official@gmail.com adresinden bizimle iletişime geçin.",
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, fallbackResponse])
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Badge variant="secondary" className="bg-orange-100 text-orange-800 hover:bg-orange-200 mb-4">
            BETA - {t("demoVersion")}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t("skalGPTDemo")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t("demoDesc")}</p>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
            <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
            <p className="text-red-800 text-sm">{error}</p>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setError(null)}
              className="ml-auto text-red-600 hover:text-red-800"
            >
              ✕
            </Button>
          </div>
        )}

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Predefined Questions */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-lg h-fit">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-blue-600" />
                  {t("exampleQuestions")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {predefinedQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="w-full text-left h-auto p-3 text-sm whitespace-normal justify-start"
                    onClick={() => handleSendMessage(question)}
                    disabled={isTyping}
                  >
                    {question}
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <Card className="border-0 shadow-lg h-[600px] flex flex-col">
              <CardHeader className="border-b">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">SkalGPT</CardTitle>
                    <p className="text-sm text-gray-500">
                      {t("aiAssistant")} - {t("demoVersion")}
                    </p>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800 ml-auto">
                    {t("online")}
                  </Badge>
                </div>
              </CardHeader>

              {/* Messages */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {message.sender === "bot" && (
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="bg-blue-100">
                            <Bot className="h-4 w-4 text-blue-600" />
                          </AvatarFallback>
                        </Avatar>
                      )}
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{message.content}</p>
                        <p className={`text-xs mt-1 ${message.sender === "user" ? "text-blue-100" : "text-gray-500"}`}>
                          {message.timestamp.toLocaleTimeString("tr-TR", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                      {message.sender === "user" && (
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="bg-gray-100">
                            <User className="h-4 w-4 text-gray-600" />
                          </AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex gap-3 justify-start">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-blue-100">
                          <Bot className="h-4 w-4 text-blue-600" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="bg-gray-100 rounded-lg p-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>

              {/* Input */}
              <div className="border-t p-4">
                <div className="flex gap-2">
                  <Input
                    placeholder={t("typeMessage")}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault()
                        handleSendMessage(inputValue)
                      }
                    }}
                    className="flex-1"
                    disabled={isTyping}
                  />
                  <Button
                    onClick={() => handleSendMessage(inputValue)}
                    disabled={!inputValue.trim() || isTyping}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2">{t("demoNotice")}</p>
              </div>
            </Card>
          </div>
        </div>

        {/* Beta Notice */}
        <div className="mt-8 bg-orange-50 border border-orange-200 rounded-lg p-6 text-center">
          <h3 className="font-semibold text-orange-900 mb-2">{t("aboutBetaVersion")}</h3>
          <p className="text-orange-800 text-sm leading-relaxed">{t("betaVersionDesc")}</p>
        </div>
      </div>
    </div>
  )
}
