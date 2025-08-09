import Link from "next/link"
import { GraduationCap, MapPin, Phone, Mail, Facebook, Instagram, Youtube, Clock } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold">MTS Al Falah</div>
                <div className="text-gray-400">Kotabaru Karawang</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Madrasah Tsanawiyah terakreditasi A yang membentuk generasi Islami berakhlak mulia, berprestasi, dan siap
              menghadapi tantangan masa depan.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Menu Utama</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/profil" className="text-gray-400 hover:text-white transition-colors">
                  Profil Sekolah
                </Link>
              </li>
              <li>
                <Link href="/akademik" className="text-gray-400 hover:text-white transition-colors">
                  Akademik
                </Link>
              </li>
              <li>
                <Link href="/berita" className="text-gray-400 hover:text-white transition-colors">
                  Berita
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="text-gray-400 hover:text-white transition-colors">
                  Galeri
                </Link>
              </li>
              <li>
                <Link href="/ppdb" className="text-gray-400 hover:text-white transition-colors">
                  PPDB
                </Link>
              </li>
            </ul>
          </div>

          {/* Academic Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Akademik</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/akademik/kurikulum" className="text-gray-400 hover:text-white transition-colors">
                  Kurikulum
                </Link>
              </li>
              <li>
                <Link href="/akademik/kalender" className="text-gray-400 hover:text-white transition-colors">
                  Kalender Akademik
                </Link>
              </li>
              <li>
                <Link href="/akademik/jadwal" className="text-gray-400 hover:text-white transition-colors">
                  Jadwal Pelajaran
                </Link>
              </li>
              <li>
                <Link href="/akademik/guru" className="text-gray-400 hover:text-white transition-colors">
                  Data Guru
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  Jl. Raya Kotabaru No. 123
                  <br />
                  Kotabaru, Karawang
                  <br />
                  Jawa Barat 41374
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <div className="text-gray-400 text-sm">(0267) 123-4567</div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-400" />
                <div className="text-gray-400 text-sm">info@mtsalfalah-kotabaru.sch.id</div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-yellow-400 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  Senin - Jumat
                  <br />
                  07:00 - 16:00 WIB
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} MTS Al Falah Kotabaru Karawang. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
