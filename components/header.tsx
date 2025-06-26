"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Menu, Globe } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navigation = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "/hakkinda" },
    { name: t("features"), href: "/ozellikler" },
    { name: t("faq"), href: "/sss" },
    { name: t("demo"), href: "/demo", badge: t("beta") },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl text-gray-900">SkalGPT</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium flex items-center gap-2"
                >
                  {item.name}
                  {item.badge && (
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800 text-xs">
                      {item.badge}
                    </Badge>
                  )}
                </Link>
              </div>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Select value={language} onValueChange={(value: "tr" | "en") => setLanguage(value)}>
              <SelectTrigger className="w-20 h-9">
                <div className="flex items-center gap-1">
                  <Globe className="h-4 w-4" />
                  <SelectValue />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tr">TR</SelectItem>
                <SelectItem value="en">EN</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                    {item.badge && (
                      <Badge variant="secondary" className="bg-orange-100 text-orange-800 text-xs">
                        {item.badge}
                      </Badge>
                    )}
                  </Link>
                ))}
                <div className="pt-4">
                  <Select value={language} onValueChange={(value: "tr" | "en") => setLanguage(value)}>
                    <SelectTrigger className="w-full">
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4" />
                        <SelectValue />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tr">Türkçe</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
