"use client"

import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Logo and Description */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <Link href="/" className="flex items-center justify-center sm:justify-start space-x-2">
              <span className="font-bold text-lg sm:text-xl">SkalGPT</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto sm:mx-0">
              Sezai Karakoç Anadolu Lisesi'nin resmi yapay zeka asistanı. Eğitim sürecinizi destekleyen güvenilir
              teknoloji.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">{t("quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/hakkinda"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/ozellikler"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  {t("features")}
                </Link>
              </li>
              <li>
                <Link href="/sss" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  {t("faq")}
                </Link>
              </li>
            </ul>
          </div>

          {/* School Info */}
          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">{t("schoolInfo")}</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <Link
                  href="https://maps.app.goo.gl/xzcdvphgh73QeYpu7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {t("schoolName")}
                </Link>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+90 0(232) 502 35 40</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:skalgpt.official@gmail.com" className="hover:text-white transition-colors">
                  skalgpt.official@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
