"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Menu, Globe, X, Home, Info, Zap, HelpCircle } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { cn } from "@/lib/utils"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()

  const navigation = [
    { name: t("home"), href: "/", icon: Home },
    { name: t("about"), href: "/hakkinda", icon: Info },
    { name: t("features"), href: "/ozellikler", icon: Zap },
    { name: t("faq"), href: "/sss", icon: HelpCircle },
  ]

  return (
    <>
      {/* Desktop Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-14 sm:h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
              <span className="font-bold text-lg sm:text-xl text-gray-900">SkalGPT</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm xl:text-base whitespace-nowrap",
                    pathname === item.href && "text-blue-600 font-semibold",
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop Language Selector */}
            <div className="hidden lg:flex items-center space-x-4">
              <Select value={language} onValueChange={(value: "tr" | "en") => setLanguage(value)}>
                <SelectTrigger className="w-16 sm:w-20 h-8 sm:h-9 text-xs sm:text-sm">
                  <div className="flex items-center gap-1">
                    <Globe className="h-3 w-3 sm:h-4 sm:w-4" />
                    <SelectValue />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tr">TR</SelectItem>
                  <SelectItem value="en">EN</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Menüyü {isOpen ? "kapat" : "aç"}</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="lg:hidden border-t bg-white shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <nav className="space-y-2">
                {navigation.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 text-base font-medium rounded-lg transition-all duration-200",
                        pathname === item.href
                          ? "bg-blue-50 text-blue-600 border border-blue-200"
                          : "text-gray-700 hover:bg-gray-50 hover:text-blue-600",
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon className="h-5 w-5" />
                      {item.name}
                    </Link>
                  )
                })}
              </nav>

              {/* Mobile Language Selector */}
              <div className="mt-6 pt-4 border-t">
                <label className="block text-sm font-medium text-gray-700 mb-3">Dil / Language</label>
                <Select value={language} onValueChange={(value: "tr" | "en") => setLanguage(value)}>
                  <SelectTrigger className="w-full h-12">
                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5" />
                      <SelectValue />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tr">🇹🇷 Türkçe</SelectItem>
                    <SelectItem value="en">🇺🇸 English</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-lg">
        <nav className="flex items-center justify-around py-2">
          {navigation.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 min-w-0 flex-1",
                  isActive ? "text-blue-600 bg-blue-50" : "text-gray-600 hover:text-blue-600 hover:bg-gray-50",
                )}
              >
                <Icon className={cn("h-5 w-5", isActive && "scale-110")} />
                <span className={cn("text-xs font-medium truncate", isActive && "font-semibold")}>{item.name}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </>
  )
}
