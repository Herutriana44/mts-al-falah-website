import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Trophy,
  Building,
  Calendar,
  Phone,
  MapPin,
  Mail,
  ChevronRight,
  Star,
  BookOpen,
  UserCheck,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  // Data dari file profil_madrasah.json
  const schoolData = {
    nama_madrasah: "Madrasah Tsanawiyah (MTs) Al-Falah",
    npsn: "20279226",
    nsm: "121232150040",
    sk_pendirian: "W.i/I/PP.005.1/578/1991",
    alamat: "Jl. Mashudi No.2 RT.03/03, Desa Pangulah Utara, Kecamatan Kotabaru, Kabupaten Karawang, Provinsi Jawa Barat",
    nama_kepala: "Dra. Hj. Mahmudah",
    no_telp: "(0264) 315556",
    visi: "Terwujudnya Peserta Didik yang Unggul dalam IPTEK berlandaskan IMTAQ",
    // Data statistik terbaru (2024/2025)
    jumlah_siswa: 355,
    jumlah_guru: 20,
    jumlah_staff: 6
  }

  const schoolStats = [
    { icon: Users, label: "Siswa Aktif", value: schoolData.jumlah_siswa.toString(), color: "text-blue-600" },
    { icon: UserCheck, label: "Guru & Staff", value: (schoolData.jumlah_guru + schoolData.jumlah_staff).toString(), color: "text-green-600" },
    { icon: Trophy, label: "Prestasi", value: "23+", color: "text-yellow-600" },
    { icon: Building, label: "Luas Bangunan", value: "948 m²", color: "text-purple-600" },
  ]

  const quickActions = [
    { title: "PPDB 2024", desc: "Pendaftaran Peserta Didik Baru", href: "/ppdb", color: "bg-blue-600" },
    { title: "Galeri Foto", desc: "Dokumentasi Kegiatan Sekolah", href: "/galeri/foto", color: "bg-green-600" },
    { title: "Kontak Kami", desc: "Hubungi Sekolah", href: "/kontak", color: "bg-purple-600" },
    { title: "Berita Terbaru", desc: "Informasi & Pengumuman", href: "/berita", color: "bg-orange-600" },
  ]

  const latestNews = [
    {
      id: 1,
      title: "Penerimaan Siswa Baru Tahun Ajaran 2025/2026",
      excerpt:
        "Pendaftaran dibuka mulai 1 Januari 2025. MTs Al-Falah menerima siswa baru dengan berbagai program unggulan.",
      date: "2025-01-15",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Prestasi Tenis Meja Putri Juara 1 Tingkat Kabupaten",
      excerpt: "Siswi MTs Al-Falah meraih Juara 1 Tenis Meja Putri Tingkat Kabupaten dalam kompetisi KKM.",
      date: "2024-12-10",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Program Tahfidz Al-Quran dan Pendidikan Karakter",
      excerpt: "Penguatan program tahfidz Al-Quran sebagai salah satu keunggulan MTs Al-Falah dalam membentuk karakter Islami.",
      date: "2024-12-08",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const achievements = [
    "Juara 1 Tenis Meja Putri Tingkat Kabupaten 2024",
    "Juara 1 Voli Putri Tingkat KKM Rayon Jatisari 2024",
    "Juara 2 MTQ Putri Tingkat KKM Rayon Jatisari 2024",
    "Juara 2 PBB Pramuka Event Nayarika Tingkat Jawa Barat 2024",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-white/20 text-white border-white/30">NPSN: {schoolData.npsn}</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                MTs Al-Falah
                <span className="block text-green-300">Karawang</span>
              </h1>
              <p className="text-xl text-blue-100 max-w-lg">
                {schoolData.visi}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  <Link href="/ppdb">
                    Daftar Sekarang
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  <Link href="/profil">Tentang Sekolah</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/assets/images/foto-sekolah/Foto 1.jpg"
                alt="MTs Al-Falah Karawang"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {schoolStats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <stat.icon className={`h-12 w-12 mx-auto mb-4 ${stat.color}`} />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Documents Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Dokumen Resmi</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Legalitas Madrasah</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dokumen resmi dan nomor identitas madrasah yang menjadi dasar legalitas operasional
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* SK Pendirian */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-blue-600 to-blue-800">
                <Image
                  src="/assets/images/persuratan/sk-pendirian.png"
                  alt="SK Pendirian MTs Al-Falah"
                  fill
                  className="object-cover opacity-90 hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                    <Building className="h-6 w-6 mb-2" />
                    <div className="text-sm font-medium">Surat Keputusan Pendirian</div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">SK Pendirian Madrasah</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Nomor SK:</span>
                    <Badge className="bg-blue-100 text-blue-800 font-mono">{schoolData.sk_pendirian}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Tahun:</span>
                    <span className="font-semibold text-gray-900">1991</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Status:</span>
                    <Badge className="bg-green-100 text-green-800">Aktif</Badge>
                  </div>
                </div>
                <Button asChild className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                  <Link href="/assets/images/persuratan/sk-pendirian.png" target="_blank">
                    Lihat Dokumen
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Nomor Statistik Madrasah */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-green-600 to-green-800">
                <Image
                  src="/assets/images/persuratan/nomor-statistik-madrasah.png"
                  alt="Nomor Statistik Madrasah MTs Al-Falah"
                  fill
                  className="object-cover opacity-90 hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                    <BookOpen className="h-6 w-6 mb-2" />
                    <div className="text-sm font-medium">Nomor Statistik Madrasah</div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Nomor Statistik Madrasah</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">NSM:</span>
                    <Badge className="bg-green-100 text-green-800 font-mono">{schoolData.nsm}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">NPSN:</span>
                    <Badge className="bg-green-100 text-green-800 font-mono">{schoolData.npsn}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Status:</span>
                    <Badge className="bg-green-100 text-green-800">Terdaftar</Badge>
                  </div>
                </div>
                <Button asChild className="w-full mt-4 bg-green-600 hover:bg-green-700">
                  <Link href="/assets/images/persuratan/nomor-statistik-madrasah.png" target="_blank">
                    Lihat Dokumen
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <Card className="inline-block border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <Star className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">Madrasah Terakreditasi</div>
                    <div className="text-sm text-gray-600">Terdaftar resmi di Kementerian Agama RI</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Kepala Madrasah MTs Al-Falah"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                <BookOpen className="h-8 w-8" />
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <Badge className="bg-green-100 text-green-800 mb-4">Sambutan Kepala Madrasah</Badge>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Selamat Datang di MTs Al-Falah</h2>
              </div>
              <blockquote className="text-lg text-gray-700 italic border-l-4 border-blue-600 pl-6">
                "Kami berkomitmen untuk mewujudkan visi madrasah dalam membentuk peserta didik yang unggul dalam IPTEK berlandaskan IMTAQ.
                Dengan dukungan seluruh civitas akademika, kami akan terus berupaya memberikan pendidikan Islam yang berkualitas
                untuk mempersiapkan generasi yang berakhlak mulia dan berprestasi."
              </blockquote>
              <div className="space-y-2">
                <div className="font-semibold text-gray-900">{schoolData.nama_kepala}</div>
                <div className="text-gray-600">Kepala Madrasah MTs Al-Falah</div>
              </div>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/profil/kepala-sekolah">
                  Baca Selengkapnya
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Layanan Madrasah</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Akses cepat ke berbagai layanan dan informasi penting madrasah
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className={`${action.color} p-6 text-white`}>
                    <h3 className="text-xl font-bold mb-2">{action.title}</h3>
                    <p className="text-white/90 text-sm">{action.desc}</p>
                  </div>
                  <div className="p-6">
                    <Button asChild variant="ghost" className="w-full group-hover:bg-gray-50">
                      <Link href={action.href}>
                        Selengkapnya
                        <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-yellow-100 text-yellow-800 mb-4">Prestasi Terbaru</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pencapaian Membanggakan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Berbagai prestasi yang telah diraih siswa-siswi MTs Al-Falah
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <Trophy className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-medium">{achievement}</p>
                  </div>
                  <Star className="h-5 w-5 text-yellow-500" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Berita Terbaru</h2>
              <p className="text-gray-600">Informasi dan pengumuman terkini dari madrasah</p>
            </div>
            <Button asChild variant="outline">
              <Link href="/berita">
                Lihat Semua
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestNews.map((news) => (
              <Card key={news.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative h-48">
                  <Image src={news.image || "/placeholder.svg"} alt={news.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-gray-500 mb-2">
                    {new Date(news.date).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{news.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{news.excerpt}</p>
                  <Button asChild variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                    <Link href={`/berita/${news.id}`}>
                      Baca Selengkapnya
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Hubungi Kami</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-blue-400" />
                  <div>
                    <div className="font-semibold">Alamat</div>
                    <div className="text-gray-300">{schoolData.alamat}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-green-400" />
                  <div>
                    <div className="font-semibold">Telepon</div>
                    <div className="text-gray-300">{schoolData.no_telp}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-purple-400" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-300">info@mts-alfalah.sch.id</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Calendar className="h-6 w-6 text-yellow-400" />
                  <div>
                    <div className="font-semibold">Jam Operasional</div>
                    <div className="text-gray-300">Senin - Jumat: 07:00 - 16:00 WIB</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6">Kirim Pesan</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Nama Lengkap"
                    className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Pesan Anda"
                    rows={4}
                    className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:outline-none resize-none"
                  ></textarea>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Kirim Pesan</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
