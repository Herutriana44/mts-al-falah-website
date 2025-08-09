"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Search, Calendar, User, Eye, Play, Clock, Video, X, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function GaleriVideoPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("semua")
  const [selectedVideo, setSelectedVideo] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const categories = [
    { value: "semua", label: "Semua Kategori" },
    { value: "kegiatan", label: "Kegiatan Sekolah" },
    { value: "prestasi", label: "Prestasi" },
    { value: "pembelajaran", label: "Pembelajaran" },
    { value: "ekstrakurikuler", label: "Ekstrakurikuler" },
    { value: "acara", label: "Acara Khusus" },
    { value: "profil", label: "Profil Sekolah" },
  ]

  const featuredVideo = {
    id: 1,
    title: "Profil MTS Al Falah Kotabaru Karawang 2024",
    description:
      "Video profil lengkap MTS Al Falah yang menampilkan fasilitas, kegiatan pembelajaran, dan prestasi sekolah",
    thumbnail: "/placeholder.svg?height=400&width=700&text=Profil+Sekolah+2024",
    duration: "05:32",
    category: "profil",
    uploader: "Humas MTS Al Falah",
    date: "2024-01-15",
    views: 2450,
    videoId: "dQw4w9WgXcQ", // YouTube video ID
    featured: true,
  }

  const videos = [
    {
      id: 2,
      title: "Upacara Peringatan Hari Kemerdekaan RI ke-78",
      description: "Dokumentasi upacara peringatan HUT RI ke-78 di MTS Al Falah dengan berbagai lomba kemerdekaan",
      thumbnail: "/placeholder.svg?height=300&width=400&text=Upacara+17+Agustus",
      duration: "08:45",
      category: "kegiatan",
      uploader: "Tim Dokumentasi",
      date: "2024-01-12",
      views: 1230,
      videoId: "dQw4w9WgXcQ",
    },
    {
      id: 3,
      title: "Juara 1 Olimpiade Matematika Tingkat Kabupaten",
      description: "Momen penyerahan piala dan wawancara dengan siswa pemenang olimpiade matematika",
      thumbnail: "/placeholder.svg?height=300&width=400&text=Juara+Olimpiade+Matematika",
      duration: "04:20",
      category: "prestasi",
      uploader: "Humas Sekolah",
      date: "2024-01-10",
      views: 890,
      videoId: "dQw4w9WgXcQ",
    },
    {
      id: 4,
      title: "Pembelajaran Interaktif dengan Teknologi Digital",
      description: "Inovasi pembelajaran menggunakan teknologi digital di kelas multimedia MTS Al Falah",
      thumbnail: "/placeholder.svg?height=300&width=400&text=Pembelajaran+Digital",
      duration: "06:15",
      category: "pembelajaran",
      uploader: "Tim Kurikulum",
      date: "2024-01-08",
      views: 567,
      videoId: "dQw4w9WgXcQ",
    },
    {
      id: 5,
      title: "Ekstrakurikuler Robotika - Kompetisi Robot",
      description: "Kegiatan ekstrakurikuler robotika dan persiapan menghadapi kompetisi robot tingkat provinsi",
      thumbnail: "/placeholder.svg?height=300&width=400&text=Ekstrakurikuler+Robotika",
      duration: "07:30",
      category: "ekstrakurikuler",
      uploader: "Pembina Robotika",
      date: "2024-01-05",
      views: 734,
      videoId: "dQw4w9WgXcQ",
    },
    {
      id: 6,
      title: "Peringatan Maulid Nabi Muhammad SAW 1445 H",
      description: "Acara peringatan Maulid Nabi dengan berbagai kegiatan keagamaan dan lomba islami",
      thumbnail: "/placeholder.svg?height=300&width=400&text=Maulid+Nabi+1445H",
      duration: "12:18",
      category: "acara",
      uploader: "Panitia Maulid",
      date: "2024-01-03",
      views: 1456,
      videoId: "dQw4w9WgXcQ",
    },
    {
      id: 7,
      title: "Wisuda Tahfidz Al-Quran 30 Juz",
      description: "Momen bersejarah wisuda siswa yang telah menyelesaikan hafalan Al-Quran 30 juz",
      thumbnail: "/placeholder.svg?height=300&width=400&text=Wisuda+Tahfidz",
      duration: "15:42",
      category: "acara",
      uploader: "Tim Tahfidz",
      date: "2024-01-01",
      views: 2180,
      videoId: "dQw4w9WgXcQ",
    },
    {
      id: 8,
      title: "Kegiatan Bakti Sosial di Panti Asuhan",
      description: "Dokumentasi kegiatan bakti sosial siswa MTS Al Falah di panti asuhan yatim piatu",
      thumbnail: "/placeholder.svg?height=300&width=400&text=Bakti+Sosial",
      duration: "09:25",
      category: "kegiatan",
      uploader: "OSIS MTS Al Falah",
      date: "2023-12-28",
      views: 623,
      videoId: "dQw4w9WgXcQ",
    },
    {
      id: 9,
      title: "Ekstrakurikuler Pramuka - Kemah Bakti",
      description: "Kegiatan kemah bakti pramuka MTS Al Falah dengan berbagai permainan dan pembelajaran karakter",
      thumbnail: "/placeholder.svg?height=300&width=400&text=Pramuka+Kemah+Bakti",
      duration: "11:33",
      category: "ekstrakurikuler",
      uploader: "Pembina Pramuka",
      date: "2023-12-25",
      views: 445,
      videoId: "dQw4w9WgXcQ",
    },
  ]

  // Filter videos based on search and category
  const filteredVideos = videos.filter((video) => {
    const matchesSearch =
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "semua" || video.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getCategoryColor = (category: string) => {
    const colors = {
      kegiatan: "bg-green-100 text-green-800",
      prestasi: "bg-yellow-100 text-yellow-800",
      pembelajaran: "bg-blue-100 text-blue-800",
      ekstrakurikuler: "bg-orange-100 text-orange-800",
      acara: "bg-red-100 text-red-800",
      profil: "bg-purple-100 text-purple-800",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  const getCategoryLabel = (category: string) => {
    const labels = {
      kegiatan: "Kegiatan",
      prestasi: "Prestasi",
      pembelajaran: "Pembelajaran",
      ekstrakurikuler: "Ekstrakurikuler",
      acara: "Acara Khusus",
      profil: "Profil Sekolah",
    }
    return labels[category as keyof typeof labels] || category
  }

  const openModal = (video: any) => {
    setSelectedVideo(video)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedVideo(null)
  }

  const formatDuration = (duration: string) => {
    return duration
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">Galeri Video</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Galeri Video Sekolah</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Saksikan berbagai kegiatan, prestasi, dan momen berharga MTS Al Falah melalui dokumentasi video
            </p>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="flex items-center space-x-2 mb-6">
              <Video className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Video Unggulan</h2>
            </div>

            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto cursor-pointer group" onClick={() => openModal(featuredVideo)}>
                  <Image
                    src={featuredVideo.thumbnail || "/placeholder.svg"}
                    alt={featuredVideo.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-8 w-8 text-blue-600 ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className={getCategoryColor(featuredVideo.category)}>
                      {getCategoryLabel(featuredVideo.category)}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-black/70 text-white">
                      <Clock className="h-3 w-3 mr-1" />
                      {featuredVideo.duration}
                    </Badge>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{featuredVideo.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{featuredVideo.description}</p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{featuredVideo.uploader}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(featuredVideo.date).toLocaleDateString("id-ID", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{featuredVideo.views.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={() => openModal(featuredVideo)}>
                    <Play className="mr-2 h-5 w-5" />
                    Tonton Video
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-white border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">{videos.length + 1}</div>
              <div className="text-sm text-gray-600">Total Video</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">6</div>
              <div className="text-sm text-gray-600">Kategori</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">
                {Math.floor(
                  [...videos, featuredVideo].reduce((sum, video) => {
                    const [minutes, seconds] = video.duration.split(":").map(Number)
                    return sum + minutes + seconds / 60
                  }, 0),
                )}{" "}
                menit
              </div>
              <div className="text-sm text-gray-600">Total Durasi</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">
                {[...videos, featuredVideo].reduce((sum, video) => sum + video.views, 0).toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Total Views</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Cari video..."
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
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Video className="h-4 w-4" />
                <span>{filteredVideos.length} video</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredVideos.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVideos.map((video) => (
                <Card
                  key={video.id}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden cursor-pointer group"
                  onClick={() => openModal(video)}
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-video">
                      <Image
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                          <Play className="h-6 w-6 text-blue-600 ml-0.5" />
                        </div>
                      </div>
                      <div className="absolute top-3 left-3">
                        <Badge className={getCategoryColor(video.category)}>{getCategoryLabel(video.category)}</Badge>
                      </div>
                      <div className="absolute bottom-3 right-3">
                        <Badge className="bg-black/70 text-white text-xs">
                          <Clock className="h-3 w-3 mr-1" />
                          {video.duration}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">{video.title}</h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">{video.description}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1">
                            <User className="h-3 w-3" />
                            <span>{video.uploader}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="h-3 w-3" />
                            <span>{video.views}</span>
                          </div>
                        </div>
                        <span>
                          {new Date(video.date).toLocaleDateString("id-ID", {
                            day: "numeric",
                            month: "short",
                          })}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <Video className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Video Tidak Ditemukan</h3>
                <p className="text-gray-600 mb-6">
                  Tidak ada video yang sesuai dengan pencarian "{searchTerm}" dalam kategori yang dipilih.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("semua")
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

      {/* Video Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl w-full h-[90vh] p-0">
          {selectedVideo && (
            <div className="flex flex-col h-full">
              <DialogHeader className="p-6 pb-0">
                <div className="flex items-center justify-between">
                  <DialogTitle className="text-xl font-bold">{selectedVideo.title}</DialogTitle>
                  <Button variant="ghost" size="sm" onClick={closeModal}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </DialogHeader>

              <div className="flex-1 p-6">
                <div className="aspect-video bg-gray-900 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-semibold mb-2">Video Player</p>
                    <p className="text-sm opacity-75">Video ID: {selectedVideo.videoId}</p>
                    <Button
                      className="mt-4"
                      onClick={() => window.open(`https://youtube.com/watch?v=${selectedVideo.videoId}`, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Tonton di YouTube
                    </Button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 mb-4">{selectedVideo.description}</p>
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge className={getCategoryColor(selectedVideo.category)}>
                        {getCategoryLabel(selectedVideo.category)}
                      </Badge>
                      <Badge variant="outline">
                        <Clock className="h-3 w-3 mr-1" />
                        {selectedVideo.duration}
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <User className="h-4 w-4" />
                        <span>{selectedVideo.uploader}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(selectedVideo.date).toLocaleDateString("id-ID", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Eye className="h-4 w-4" />
                        <span>{selectedVideo.views.toLocaleString()} views</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
