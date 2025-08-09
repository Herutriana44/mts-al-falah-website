import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MTS Al Falah Kotabaru Karawang - Madrasah Tsanawiyah Terakreditasi A",
  description:
    "MTS Al Falah Kotabaru Karawang adalah madrasah tsanawiyah terakreditasi A yang membentuk generasi Islami berakhlak mulia, berprestasi, dan siap menghadapi tantangan masa depan.",
  keywords: "MTS Al Falah, Kotabaru, Karawang, madrasah tsanawiyah, sekolah Islam, pendidikan Islam, PPDB",
  authors: [{ name: "MTS Al Falah Kotabaru Karawang" }],
  openGraph: {
    title: "MTS Al Falah Kotabaru Karawang",
    description: "Madrasah Tsanawiyah Terakreditasi A - Membentuk generasi Islami yang berakhlak mulia dan berprestasi",
    type: "website",
    locale: "id_ID",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
