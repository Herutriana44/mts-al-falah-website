"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Calendar, User, Eye, ChevronLeft, ChevronRight, Clock, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BeritaPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("semua")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  const categories = [
    { value: "semua", label: "Semua Kategori" },
    { value: "akademik", label: "Akademik" },
    { value: "prestasi", label: "Prestasi" },
    { value: "kegiatan", label: "Kegiatan Sekolah" },
    { value: "pengumuman", label: "Pengumuman" },
    { value: "ppdb", label: "PPDB" },
    { value: "ekstrakurikuler", label: "Ekstrakurikuler" },
  ]

  const featuredNews = {
    id: 1,
    title: "MTS Al Falah Raih Juara 1 Olimpiade Matematika Tingkat Kabupaten",
    excerpt:
      "Tim olimpiade matematika MTS Al Falah berhasil meraih prestasi gemilang dengan menjuarai kompetisi tingkat kabupaten. Pencapaian ini merupakan hasil kerja keras siswa dan pembimbingan guru yang intensif.",
    content: "Prestasi membanggakan kembali diraih oleh MTS Al Falah Kotabaru Karawang...",
    image: "/placeholder.svg?height=400&width=800&text=Juara+Olimpiade+Matematika",
    author: "Humas MTS Al Falah",
    date: "2024-01-15",
    category: "prestasi",
    views: 1250,
    featured: true,
  }

  const allNews = [
    {
      id: 2,
      title: "Pelaksanaan Ujian Tengah Semester Ganjil 2023/2024",
      excerpt:
        "Ujian Tengah Semester (UTS) Ganjil tahun ajaran 2023/2024 akan dilaksanakan mulai tanggal 25 September hingga 5 Oktober 2023.",
      content: "Dalam rangka evaluasi pembelajaran semester ganjil...",
      image: "/placeholder.svg?height=300&width=400&text=Ujian+Tengah+Semester",
      author: "Tim Kurikulum",
      date: "2024-01-12",
      category: "akademik",
      views: 890,
    },
    {
      id: 3,
      title: "Kegiatan Bakti Sosial di Panti Asuhan Yatim Piatu",
      excerpt:
        "Siswa-siswi MTS Al Falah mengadakan kegiatan bakti sosial dengan memberikan bantuan kepada anak-anak panti asuhan.",
      content: "Sebagai bentuk kepedulian sosial dan implementasi nilai-nilai Islam...",
      image: "/placeholder.svg?height=300&width=400&text=Bakti+Sosial+Panti+Asuhan",
      author: "OSIS MTS Al Falah",
      date: "2024-01-10",
      category: "kegiatan",
      views: 675,
    },
    {
      id: 4,
      title: "Pendaftaran Ekstrakurikuler Semester Genap Dibuka",
      excerpt:
        "Pendaftaran kegiatan ekstrakurikuler untuk semester genap 2023/2024 telah dibuka untuk seluruh siswa MTS Al Falah.",
      content: "MTS Al Falah membuka pendaftaran ekstrakurikuler semester genap...",
      image: "/placeholder.svg?height=300&width=400&text=Ekstrakurikuler+Semester+Genap",
      author: "Pembina Ekstrakurikuler",
      date: "2024-01-08",
      category: "ekstrakurikuler",
      views: 542,
    },
    {
      id: 5,
      title: "Pengumuman Libur Semester dan Jadwal Masuk Semester Genap",
      excerpt:
        "Informasi mengenai jadwal libur semester ganjil dan rencana masuk semester genap tahun ajaran 2023/2024.",
      content: "Berdasarkan kalender akademik yang telah ditetapkan...",
      image: "/placeholder.svg?height=300&width=400&text=Libur+Semester+Genap",
      author: "Tata Usaha",
      date: "2024-01-05",
      category: "pengumuman",
      views: 1120,
    },
    {
      id: 6,
      title: "Workshop Pembelajaran Digital untuk Guru",
      excerpt:
        "MTS Al Falah mengadakan workshop pembelajaran digital untuk meningkatkan kompetensi guru dalam menggunakan teknologi.",
      content: "Dalam era digital saat ini, kemampuan menggunakan teknologi...",
      image: "/placeholder.svg?height=300&width=400&text=Workshop+Digital+Guru",
      author: "Tim Pengembangan",
      date: "2024-01-03",
      category: "akademik",
      views: 423,
    },
    {
      id: 7,
      title: "Informasi PPDB 2024/2025 - Syarat dan Ketentuan",
      excerpt:
        "Informasi lengkap mengenai Penerimaan Peserta Didik Baru (PPDB) tahun ajaran 2024/2025 beserta syarat dan ketentuannya.",
      content: "MTS Al Falah Kotabaru Karawang membuka pendaftaran siswa baru...",
      image: "/placeholder.svg?height=300&width=400&text=PPDB+2024+2025",
      author: "Panitia PPDB",
      date: "2024-01-01",
      category: "ppdb",
      views: 2150,
    },
    {
      id: 8,
      title: "Peringatan Maulid Nabi Muhammad SAW 1445 H",
      excerpt:
        "MTS Al Falah mengadakan peringatan Maulid Nabi Muhammad SAW dengan berbagai kegiatan keagamaan dan lomba islami.",
      content: "Dalam rangka memperingati kelahiran Nabi Muhammad SAW...",
      image: "/placeholder.svg?height=300&width=400&text=Maulid+Nabi+1445H",
      author: "Rohis MTS Al Falah",
      date: "2023-12-28",
      category: "kegiatan",
      views: 987,
    },
    {
      id: 9,
      title: "Prestasi Siswa dalam Lomba Tahfidz Tingkat Provinsi",
      excerpt: "Siswa MTS Al Falah meraih juara 2 dalam lomba tahfidz Al-Quran tingkat provinsi Jawa Barat.",
      content: "Alhamdulillah, siswa MTS Al Falah kembali mengharumkan nama sekolah...",
      image: "/placeholder.svg?height=300&width=400&text=Juara+Tahfidz+Provinsi",
      author: "Guru Tahfidz",
      date: "2023-12-25",
      category: "prestasi",
      views: 1340,
    },
  ]

  // Filter news based on search and category
  const filteredNews = allNews.filter((news) => {
    const matchesSearch =
      news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      news.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "semua" || news.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Pagination
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedNews = filteredNews.slice(startIndex, startIndex + itemsPerPage)

  const getCategoryColor = (category: string) => {
    const colors = {
      akademik: "bg-blue-100 text-blue-800",
      prestasi: "bg-yellow-100 text-yellow-800",
      kegiatan: "bg-green-100 text-green-800",
      pengumuman: "bg-red-100 text-red-800",
      ppdb: "bg-purple-100 text-purple-800",
      ekstrakurikuler: "bg-orange-100 text-orange-800",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  const getCategoryLabel = (category: string) => {
    const labels = {
      akademik: "Akademik",
      prestasi: "Prestasi",
      kegiatan: "Kegiatan",
      pengumuman: "Pengumuman",
      ppdb: "PPDB",
      ekstrakurikuler: "Ekstrakurikuler",
    }
    return labels[category as keyof typeof labels] || category
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">Berita Terkini</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Berita & Informasi</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Dapatkan informasi terbaru seputar kegiatan, prestasi, dan pengumuman penting dari MTS Al Falah Kotabaru
              Karawang
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="flex items-center space-x-2 mb-6">
              <TrendingUp className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Berita Utama</h2>
            </div>

            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featuredNews.image || "/placeholder.svg"}
                    alt={featuredNews.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getCategoryColor(featuredNews.category)}>
                      {getCategoryLabel(featuredNews.category)}
                    </Badge>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{featuredNews.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{featuredNews.excerpt}</p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{featuredNews.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(featuredNews.date).toLocaleDateString("id-ID", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{featuredNews.views.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Link href={`/berita/${featuredNews.id}`}>Baca Selengkapnya</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-y">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Cari berita..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Pilih kategori" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {paginatedNews.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {paginatedNews.map((news) => (
                  <Card key={news.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                    <div className="relative h-48">
                      <Image src={news.image || "/placeholder.svg"} alt={news.title} fill className="object-cover" />
                      <div className="absolute top-4 left-4">
                        <Badge className={getCategoryColor(news.category)}>{getCategoryLabel(news.category)}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">{news.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">{news.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>
                              {new Date(news.date).toLocaleDateString("id-ID", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="h-3 w-3" />
                            <span>{news.views}</span>
                          </div>
                        </div>
                      </div>
                      <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                        <Link href={`/berita/${news.id}`}>Baca Selengkapnya</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Sebelumnya
                  </Button>

                  <div className="flex items-center space-x-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrentPage(page)}
                        className="w-10"
                      >
                        {page}
                      </Button>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                  >
                    Selanjutnya
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Berita Tidak Ditemukan</h3>
                <p className="text-gray-600 mb-6">
                  Tidak ada berita yang sesuai dengan pencarian "{searchTerm}" dalam kategori yang dipilih.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("semua")
                    setCurrentPage(1)
                  }}
                  variant="outline"
                >
                  Reset Pencarian
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
