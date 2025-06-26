"use client"

import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl">SkalGPT</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Sezai Karakoç Anadolu Lisesi'nin resmi yapay zeka asistanı. Eğitim sürecinizi destekleyen güvenilir
              teknoloji.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t("quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hakkinda" className="text-gray-400 hover:text-white transition-colors">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link href="/ozellikler" className="text-gray-400 hover:text-white transition-colors">
                  {t("features")}
                </Link>
              </li>
              <li>
                <Link href="/sss" className="text-gray-400 hover:text-white transition-colors">
                  {t("faq")}
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-gray-400 hover:text-white transition-colors">
                  {t("demo")}
                </Link>
              </li>
            </ul>
          </div>

          {/* School Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t("schoolInfo")}</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <Link
                  href="https://maps.app.goo.gl/xzcdvphgh73QeYpu7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {t("schoolName")}
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +90 (XXX) XXX XX XX
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                info@skalgpt.edu.tr
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
