"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Eye, ArrowLeft, Facebook, MessageCircle, Twitter, Clock, Tag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock data - in real app, this would come from API/database
const getNewsById = (id: string) => {
  const allNews = [
    {
      id: 1,
      title: "MTS Al Falah Raih Juara 1 Olimpiade Matematika Tingkat Kabupaten",
      excerpt:
        "Tim olimpiade matematika MTS Al Falah berhasil meraih prestasi gemilang dengan menjuarai kompetisi tingkat kabupaten.",
      content: `
        <p>Prestasi membanggakan kembali diraih oleh MTS Al Falah Kotabaru Karawang. Tim olimpiade matematika sekolah berhasil meraih juara 1 dalam kompetisi Olimpiade Matematika tingkat Kabupaten Karawang yang diselenggarakan pada tanggal 10-12 Januari 2024.</p>
        
        <p>Kompetisi yang diikuti oleh 45 sekolah menengah pertama se-Kabupaten Karawang ini menguji kemampuan siswa dalam menyelesaikan soal-soal matematika tingkat lanjut. Tim MTS Al Falah yang terdiri dari 3 siswa terbaik berhasil unggul dengan skor tertinggi.</p>
        
        <h3>Tim Pemenang</h3>
        <p>Tim yang meraih prestasi ini terdiri dari:</p>
        <ul>
          <li>Ahmad Fauzi (Kelas IX-A) - Ketua Tim</li>
          <li>Siti Nurhaliza (Kelas IX-B) - Anggota</li>
          <li>Muhammad Rizki (Kelas VIII-C) - Anggota</li>
        </ul>
        
        <p>Ketiga siswa ini telah mempersiapkan diri dengan intensif selama 3 bulan terakhir di bawah bimbingan Bapak Drs. Suryanto, M.Pd., guru matematika senior MTS Al Falah.</p>
        
        <h3>Persiapan dan Pembinaan</h3>
        <p>"Persiapan untuk olimpiade ini tidak mudah. Kami mengadakan pembinaan khusus setiap hari Sabtu dan Minggu, dengan materi yang lebih mendalam dari kurikulum reguler," ungkap Bapak Suryanto.</p>
        
        <p>Selain pembinaan rutin, para siswa juga mengikuti try out dan latihan soal-soal olimpiade dari tahun-tahun sebelumnya. Dedikasi dan kerja keras mereka akhirnya membuahkan hasil yang membanggakan.</p>
        
        <h3>Apresiasi Kepala Sekolah</h3>
        <p>Kepala Sekolah MTS Al Falah, Bapak H. Abdullah, S.Pd., M.M., menyampaikan apresiasi yang tinggi atas prestasi yang diraih. "Ini adalah bukti bahwa MTS Al Falah mampu bersaing di tingkat kabupaten. Kami berharap prestasi ini dapat memotivasi siswa lain untuk terus berprestasi," ujarnya.</p>
        
        <p>Sebagai bentuk apresiasi, sekolah memberikan beasiswa penuh untuk ketiga siswa pemenang dan bonus khusus untuk guru pembimbing.</p>
        
        <h3>Rencana ke Depan</h3>
        <p>Dengan kemenangan di tingkat kabupaten, tim MTS Al Falah berhak mewakili Kabupaten Karawang dalam Olimpiade Matematika tingkat Provinsi Jawa Barat yang akan diselenggarakan pada bulan Maret 2024.</p>
        
        <p>"Kami akan mempersiapkan diri dengan lebih baik lagi untuk kompetisi tingkat provinsi. Target kami adalah minimal masuk 5 besar," kata Ahmad Fauzi, ketua tim.</p>
        
        <p>Prestasi ini semakin memperkuat reputasi MTS Al Falah sebagai sekolah yang tidak hanya unggul dalam bidang keagamaan, tetapi juga dalam bidang akademik dan sains.</p>
      `,
      image: "/placeholder.svg?height=400&width=800&text=Juara+Olimpiade+Matematika",
      author: "Humas MTS Al Falah",
      date: "2024-01-15",
      category: "prestasi",
      views: 1250,
      tags: ["olimpiade", "matematika", "prestasi", "kabupaten"],
    },
    {
      id: 2,
      title: "Pelaksanaan Ujian Tengah Semester Ganjil 2023/2024",
      excerpt:
        "Ujian Tengah Semester (UTS) Ganjil tahun ajaran 2023/2024 akan dilaksanakan mulai tanggal 25 September hingga 5 Oktober 2023.",
      content: `
        <p>Dalam rangka evaluasi pembelajaran semester ganjil tahun ajaran 2023/2024, MTS Al Falah Kotabaru Karawang akan menyelenggarakan Ujian Tengah Semester (UTS) mulai tanggal 25 September hingga 5 Oktober 2023.</p>
        
        <h3>Jadwal Pelaksanaan</h3>
        <p>UTS akan dilaksanakan sesuai dengan jadwal yang telah ditetapkan:</p>
        <ul>
          <li>Senin, 25 September 2023: Bahasa Indonesia dan Matematika</li>
          <li>Selasa, 26 September 2023: IPA dan IPS</li>
          <li>Rabu, 27 September 2023: Bahasa Inggris dan PKn</li>
          <li>Kamis, 28 September 2023: Pendidikan Agama Islam dan Bahasa Arab</li>
          <li>Jumat, 29 September 2023: Seni Budaya dan Prakarya</li>
        </ul>
        
        <p>Ujian akan dimulai pukul 07.30 WIB dan berakhir pukul 11.30 WIB untuk setiap harinya.</p>
        
        <h3>Persiapan Siswa</h3>
        <p>Seluruh siswa diharapkan mempersiapkan diri dengan baik. Beberapa hal yang perlu diperhatikan:</p>
        <ul>
          <li>Belajar materi yang telah diajarkan selama setengah semester</li>
          <li>Mengerjakan latihan soal dan tugas yang diberikan guru</li>
          <li>Istirahat yang cukup sebelum hari ujian</li>
          <li>Membawa alat tulis lengkap</li>
          <li>Datang tepat waktu</li>
        </ul>
        
        <h3>Tata Tertib Ujian</h3>
        <p>Untuk menjaga kelancaran ujian, siswa wajib mematuhi tata tertib yang berlaku:</p>
        <ul>
          <li>Berpakaian seragam lengkap dan rapi</li>
          <li>Tidak membawa HP atau alat komunikasi lainnya</li>
          <li>Tidak diperbolehkan menyontek atau bekerja sama</li>
          <li>Mengerjakan soal dengan jujur dan mandiri</li>
          <li>Menjaga ketenangan selama ujian berlangsung</li>
        </ul>
        
        <p>Hasil UTS akan diumumkan paling lambat 2 minggu setelah pelaksanaan ujian terakhir.</p>
      `,
      image: "/placeholder.svg?height=400&width=800&text=Ujian+Tengah+Semester",
      author: "Tim Kurikulum",
      date: "2024-01-12",
      category: "akademik",
      views: 890,
      tags: ["ujian", "UTS", "semester", "akademik"],
    },
  ]

  return allNews.find((news) => news.id === Number.parseInt(id))
}

const getRelatedNews = (currentId: number, category: string) => {
  const allNews = [
    {
      id: 3,
      title: "Kegiatan Bakti Sosial di Panti Asuhan Yatim Piatu",
      category: "kegiatan",
      date: "2024-01-10",
      views: 675,
    },
    {
      id: 4,
      title: "Pendaftaran Ekstrakurikuler Semester Genap Dibuka",
      category: "ekstrakurikuler",
      date: "2024-01-08",
      views: 542,
    },
    {
      id: 5,
      title: "Pengumuman Libur Semester dan Jadwal Masuk Semester Genap",
      category: "pengumuman",
      date: "2024-01-05",
      views: 1120,
    },
    {
      id: 6,
      title: "Workshop Pembelajaran Digital untuk Guru",
      category: "akademik",
      date: "2024-01-03",
      views: 423,
    },
  ]

  return allNews.filter((news) => news.id !== currentId).slice(0, 4)
}

export default function DetailBeritaPage({ params }: { params: { id: string } }) {
  const news = getNewsById(params.id)
  const relatedNews = getRelatedNews(Number.parseInt(params.id), news?.category || "")

  if (!news) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Berita Tidak Ditemukan</h1>
          <p className="text-gray-600 mb-6">Maaf, berita yang Anda cari tidak dapat ditemukan.</p>
          <Button asChild>
            <Link href="/berita">Kembali ke Berita</Link>
          </Button>
        </div>
      </div>
    )
  }

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
      {/* Breadcrumb */}
      <section className="bg-white border-b py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              Beranda
            </Link>
            <span>/</span>
            <Link href="/berita" className="hover:text-blue-600">
              Berita
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Detail Berita</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-0">
                {/* Featured Image */}
                <div className="relative h-64 md:h-80">
                  <Image
                    src={news.image || "/placeholder.svg"}
                    alt={news.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getCategoryColor(news.category)}>{getCategoryLabel(news.category)}</Badge>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6 md:p-8">
                  {/* Back Button */}
                  <div className="mb-6">
                    <Button asChild variant="outline" size="sm">
                      <Link href="/berita">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Kembali ke Berita
                      </Link>
                    </Button>
                  </div>

                  {/* Article Header */}
                  <div className="mb-6">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">{news.title}</h1>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{news.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(news.date).toLocaleDateString("id-ID", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{news.views.toLocaleString()} views</span>
                      </div>
                    </div>

                    {/* Tags */}
                    {news.tags && (
                      <div className="flex items-center space-x-2 mb-6">
                        <Tag className="h-4 w-4 text-gray-500" />
                        <div className="flex flex-wrap gap-2">
                          {news.tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Article Body */}
                  <div
                    className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: news.content }}
                  />

                  {/* Share Buttons */}
                  <div className="mt-8 pt-6 border-t">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">Bagikan Artikel</h3>
                      <div className="flex items-center space-x-3">
                        <Button
                          size="sm"
                          className="bg-blue-600 hover:bg-blue-700"
                          onClick={() =>
                            window.open(
                              `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
                              "_blank",
                            )
                          }
                        >
                          <Facebook className="h-4 w-4 mr-2" />
                          Facebook
                        </Button>
                        <Button
                          size="sm"
                          className="bg-green-600 hover:bg-green-700"
                          onClick={() =>
                            window.open(
                              `https://wa.me/?text=${encodeURIComponent(news.title + " - " + window.location.href)}`,
                              "_blank",
                            )
                          }
                        >
                          <MessageCircle className="h-4 w-4 mr-2" />
                          WhatsApp
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            window.open(
                              `https://twitter.com/intent/tweet?text=${encodeURIComponent(news.title)}&url=${window.location.href}`,
                              "_blank",
                            )
                          }
                        >
                          <Twitter className="h-4 w-4 mr-2" />
                          Twitter
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Related News */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Berita Terkait</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {relatedNews.map((item) => (
                    <Link key={item.id} href={`/berita/${item.id}`} className="block group">
                      <div className="p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2 line-clamp-2 text-sm">
                          {item.title}
                        </h4>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>
                              {new Date(item.date).toLocaleDateString("id-ID", {
                                day: "numeric",
                                month: "short",
                              })}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="h-3 w-3" />
                            <span>{item.views}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                    <Link href="/berita">Lihat Semua Berita</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Menu Cepat</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button asChild variant="ghost" size="sm" className="w-full justify-start">
                    <Link href="/profil">Profil Sekolah</Link>
                  </Button>
                  <Button asChild variant="ghost" size="sm" className="w-full justify-start">
                    <Link href="/akademik">Akademik</Link>
                  </Button>
                  <Button asChild variant="ghost" size="sm" className="w-full justify-start">
                    <Link href="/ppdb">PPDB</Link>
                  </Button>
                  <Button asChild variant="ghost" size="sm" className="w-full justify-start">
                    <Link href="/galeri/foto">Galeri</Link>
                  </Button>
                  <Button asChild variant="ghost" size="sm" className="w-full justify-start">
                    <Link href="/kontak">Kontak</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
