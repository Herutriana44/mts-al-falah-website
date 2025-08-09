import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  GraduationCap,
  Users,
  BookOpen,
  Award,
  Building,
  Microscope,
  Computer,
  Music,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Star,
  Heart,
  Target,
  Calendar,
  Download,
  ExternalLink,
  FileText,
} from "lucide-react"
import Link from "next/link"

export default function InformasiPPDBPage() {
  const keunggulanSekolah = [
    {
      icon: Award,
      title: "Terakreditasi A",
      description: "Diakui oleh Badan Akreditasi Nasional dengan nilai A untuk kualitas pendidikan terbaik",
    },
    {
      icon: Users,
      title: "Tenaga Pengajar Berkualitas",
      description: "35+ guru berpengalaman dan bersertifikat dengan dedikasi tinggi dalam mendidik",
    },
    {
      icon: BookOpen,
      title: "Kurikulum Terintegrasi",
      description: "Memadukan kurikulum nasional dengan nilai-nilai Islam untuk pembentukan karakter",
    },
    {
      icon: Star,
      title: "Prestasi Gemilang",
      description: "Berbagai prestasi tingkat kabupaten, provinsi, dan nasional di bidang akademik dan non-akademik",
    },
  ]

  const programUnggulan = [
    {
      icon: BookOpen,
      title: "Program Tahfidz",
      description: "Target hafalan 5 juz dengan metode pembelajaran modern dan bimbingan intensif",
      highlight: "Target 5 Juz",
    },
    {
      icon: Microscope,
      title: "Program Sains",
      description: "Laboratorium lengkap dan persiapan olimpiade sains tingkat nasional",
      highlight: "Lab Lengkap",
    },
    {
      icon: Computer,
      title: "Program IT",
      description: "Laboratorium komputer modern dan pembelajaran digital literacy",
      highlight: "Digital Ready",
    },
    {
      icon: Music,
      title: "Program Seni",
      description: "Pengembangan bakat seni musik, kaligrafi, dan teater untuk kreativitas siswa",
      highlight: "Kreatif",
    },
  ]

  const fasilitas = [
    { icon: Building, name: "18 Ruang Kelas Ber-AC", desc: "Nyaman & Modern" },
    { icon: Microscope, name: "2 Laboratorium IPA", desc: "Peralatan Lengkap" },
    { icon: Computer, name: "1 Laboratorium Komputer", desc: "40 Unit PC" },
    { icon: BookOpen, name: "Perpustakaan", desc: "5000+ Koleksi Buku" },
    { icon: Building, name: "Masjid", desc: "Kapasitas 500 Jamaah" },
    { icon: Target, name: "3 Lapangan Olahraga", desc: "Basket, Voli, Futsal" },
    { icon: Heart, name: "2 Kantin Sehat", desc: "Menu Bergizi" },
    { icon: Heart, name: "1 Ruang UKS", desc: "Pelayanan Kesehatan" },
  ]

  const prestasiTerbaru = [
    {
      title: "Juara 1 Olimpiade Matematika",
      level: "Tingkat Kabupaten",
      year: "2023",
      icon: Award,
    },
    {
      title: "Juara 2 Lomba Tahfidz",
      level: "Tingkat Provinsi",
      year: "2023",
      icon: BookOpen,
    },
    {
      title: "Juara 3 Festival Sains Nasional",
      level: "Tingkat Nasional",
      year: "2023",
      icon: Microscope,
    },
    {
      title: "Sekolah Adiwiyata",
      level: "Tingkat Kabupaten",
      year: "2022",
      icon: Target,
    },
  ]

  const alasanMemilih = [
    {
      icon: Heart,
      title: "Pendidikan Karakter Islami",
      description: "Pembentukan akhlak mulia berdasarkan Al-Quran dan As-Sunnah",
    },
    {
      icon: Star,
      title: "Pembelajaran Inovatif",
      description: "Metode pembelajaran modern yang menyenangkan dan efektif",
    },
    {
      icon: CheckCircle,
      title: "Fasilitas Lengkap",
      description: "Sarana dan prasarana pendidikan yang memadai dan terawat",
    },
    {
      icon: Target,
      title: "Prestasi Terbukti",
      description: "Track record prestasi akademik dan non-akademik yang gemilang",
    },
  ]

  const statistik = [
    { label: "Tahun Berpengalaman", value: "25+", icon: Calendar },
    { label: "Siswa Aktif", value: "500+", icon: Users },
    { label: "Tenaga Pengajar", value: "35+", icon: GraduationCap },
    { label: "Tingkat Kelulusan", value: "95%", icon: Award },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              Tahun Ajaran 2024/2025
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Informasi PPDB
              <span className="block text-3xl md:text-5xl mt-2 text-blue-200">MTS Al Falah Kotabaru</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Bergabunglah dengan keluarga besar MTS Al Falah Kotabaru Karawang, sekolah yang mengintegrasikan
              pendidikan berkualitas dengan nilai-nilai Islam untuk membentuk generasi yang berakhlak mulia dan
              berprestasi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <BookOpen className="mr-2 h-5 w-5" />
                Lihat Program Unggulan
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                <Building className="mr-2 h-5 w-5" />
                Jelajahi Fasilitas
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Keunggulan Sekolah */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Keunggulan MTS Al Falah</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Komitmen kami dalam memberikan pendidikan terbaik dengan standar nasional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keunggulanSekolah.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mb-4">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Unggulan */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Program Unggulan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Program khusus yang dirancang untuk mengembangkan potensi siswa secara optimal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programUnggulan.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <program.icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="secondary">{program.highlight}</Badge>
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fasilitas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fasilitas Lengkap</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sarana dan prasarana modern untuk mendukung proses pembelajaran yang optimal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fasilitas.map((item, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prestasi Terbaru */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Prestasi Terbaru</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pencapaian membanggakan siswa-siswi MTS Al Falah dalam berbagai kompetisi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {prestasiTerbaru.map((prestasi, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <prestasi.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{prestasi.title}</CardTitle>
                  <CardDescription>
                    {prestasi.level} • {prestasi.year}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mengapa Memilih MTS Al Falah */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mengapa Memilih MTS Al Falah?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Alasan kuat untuk mempercayakan pendidikan putra-putri Anda kepada kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {alasanMemilih.map((alasan, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <alasan.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{alasan.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{alasan.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistik */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">MTS Al Falah dalam Angka</h2>
            <p className="text-xl text-blue-100">Pencapaian yang membanggakan selama bertahun-tahun</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistik.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Informasi Kontak & CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Siap Bergabung dengan Kami?</h2>
              <p className="text-xl text-gray-600">
                Dapatkan informasi lengkap dan mulai proses pendaftaran sekarang juga
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Informasi Kontak */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-blue-600" />
                    Informasi Kontak
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-medium">Alamat Sekolah</p>
                      <p className="text-gray-600">Jl. Raya Kotabaru No. 123, Kotabaru, Karawang</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-medium">Telepon PPDB</p>
                      <p className="text-gray-600">(0267) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-medium">Email PPDB</p>
                      <p className="text-gray-600">ppdb@mtsalfalah.sch.id</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-medium">Jam Layanan</p>
                      <p className="text-gray-600">Senin - Jumat: 07:00 - 15:00 WIB</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="mr-2 h-5 w-5 text-green-600" />
                    Akses Cepat
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button asChild className="w-full justify-start bg-transparent" variant="outline">
                    <Link href="/ppdb/persyaratan">
                      <FileText className="mr-2 h-4 w-4" />
                      Lihat Persyaratan Lengkap
                    </Link>
                  </Button>
                  <Button asChild className="w-full justify-start bg-transparent" variant="outline">
                    <Link href="/ppdb/jadwal">
                      <Calendar className="mr-2 h-4 w-4" />
                      Cek Jadwal Seleksi
                    </Link>
                  </Button>
                  <Button asChild className="w-full justify-start bg-transparent" variant="outline">
                    <Link href="/kontak">
                      <Phone className="mr-2 h-4 w-4" />
                      Hubungi Kami
                    </Link>
                  </Button>
                  <Button asChild className="w-full justify-start bg-transparent" variant="outline">
                    <Link href="#" className="flex items-center">
                      <Download className="mr-2 h-4 w-4" />
                      Download Brosur
                      <ExternalLink className="ml-auto h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Final CTA */}
            <div className="text-center bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Bergabunglah dengan 500+ Siswa Berprestasi</h3>
              <p className="text-blue-100 mb-6">Kuota terbatas! Segera daftarkan putra-putri Anda di MTS Al Falah</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  <Users className="mr-2 h-5 w-5" />
                  Daftar Sekarang
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Konsultasi Gratis
                </Button>
              </div>
              <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-blue-100">
                <div className="flex items-center">
                  <CheckCircle className="mr-1 h-4 w-4" />
                  Biaya Terjangkau
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-1 h-4 w-4" />
                  Beasiswa Tersedia
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-1 h-4 w-4" />
                  Kuota Terbatas
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
