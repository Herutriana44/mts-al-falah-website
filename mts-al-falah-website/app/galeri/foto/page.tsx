"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  Search,
  Calendar,
  User,
  Eye,
  Download,
  ChevronLeft,
  ChevronRight,
  X,
  Camera,
  ImageIcon,
  Grid3X3,
} from "lucide-react"
import Image from "next/image"

export default function GaleriFotoPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("semua")
  const [selectedPhoto, setSelectedPhoto] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const categories = [
    { value: "semua", label: "Semua Kategori" },
    { value: "kegiatan", label: "Kegiatan Sekolah" },
    { value: "prestasi", label: "Prestasi" },
    { value: "fasilitas", label: "Fasilitas" },
    { value: "pembelajaran", label: "Pembelajaran" },
    { value: "ekstrakurikuler", label: "Ekstrakurikuler" },
    { value: "acara", label: "Acara Khusus" },
  ]

  const photos = [
    {
      id: 1,
      title: "Upacara Bendera Hari Senin",
      description: "Kegiatan rutin upacara bendera yang dilaksanakan setiap hari Senin di halaman sekolah",
      image: "/placeholder.svg?height=400&width=600&text=Upacara+Bendera",
      category: "kegiatan",
      photographer: "Tim Dokumentasi",
      date: "2024-01-15",
      views: 245,
      album: "Kegiatan Rutin",
    },
    {
      id: 2,
      title: "Laboratorium IPA Modern",
      description: "Fasilitas laboratorium IPA yang dilengkapi dengan peralatan modern untuk mendukung pembelajaran",
      image: "/placeholder.svg?height=400&width=600&text=Lab+IPA+Modern",
      category: "fasilitas",
      photographer: "Humas Sekolah",
      date: "2024-01-12",
      views: 189,
      album: "Fasilitas Sekolah",
    },
    {
      id: 3,
      title: "Juara Olimpiade Matematika",
      description: "Momen penyerahan piala juara 1 olimpiade matematika tingkat kabupaten",
      image: "/placeholder.svg?height=400&width=600&text=Juara+Olimpiade",
      category: "prestasi",
      photographer: "Tim Dokumentasi",
      date: "2024-01-10",
      views: 567,
      album: "Prestasi Siswa",
    },
    {
      id: 4,
      title: "Kegiatan Pembelajaran Al-Quran",
      description: "Suasana pembelajaran Al-Quran di kelas dengan metode tahfidz",
      image: "/placeholder.svg?height=400&width=600&text=Pembelajaran+Quran",
      category: "pembelajaran",
      photographer: "Guru Tahfidz",
      date: "2024-01-08",
      views: 334,
      album: "Kegiatan Pembelajaran",
    },
    {
      id: 5,
      title: "Ekstrakurikuler Pramuka",
      description: "Kegiatan pramuka siswa MTS Al Falah di alam terbuka",
      image: "/placeholder.svg?height=400&width=600&text=Ekstrakurikuler+Pramuka",
      category: "ekstrakurikuler",
      photographer: "Pembina Pramuka",
      date: "2024-01-05",
      views: 423,
      album: "Ekstrakurikuler",
    },
    {
      id: 6,
      title: "Perpustakaan Digital",
      description: "Fasilitas perpustakaan dengan koleksi buku digital dan ruang baca yang nyaman",
      image: "/placeholder.svg?height=400&width=600&text=Perpustakaan+Digital",
      category: "fasilitas",
      photographer: "Pustakawan",
      date: "2024-01-03",
      views: 298,
      album: "Fasilitas Sekolah",
    },
    {
      id: 7,
      title: "Peringatan Maulid Nabi",
      description: "Acara peringatan Maulid Nabi Muhammad SAW dengan berbagai lomba islami",
      image: "/placeholder.svg?height=400&width=600&text=Maulid+Nabi",
      category: "acara",
      photographer: "Panitia Acara",
      date: "2023-12-28",
      views: 678,
      album: "Acara Keagamaan",
    },
    {
      id: 8,
      title: "Kelas Multimedia",
      description: "Ruang kelas multimedia dengan fasilitas proyektor dan komputer untuk pembelajaran interaktif",
      image: "/placeholder.svg?height=400&width=600&text=Kelas+Multimedia",
      category: "fasilitas",
      photographer: "Tim IT",
      date: "2023-12-25",
      views: 156,
      album: "Fasilitas Sekolah",
    },
    {
      id: 9,
      title: "Turnamen Futsal Antar Kelas",
      description: "Kompetisi futsal antar kelas dalam rangka memperingati HUT sekolah",
      image: "/placeholder.svg?height=400&width=600&text=Turnamen+Futsal",
      category: "kegiatan",
      photographer: "OSIS",
      date: "2023-12-20",
      views: 445,
      album: "Kegiatan Olahraga",
    },
    {
      id: 10,
      title: "Ekstrakurikuler Robotika",
      description: "Siswa sedang mengembangkan robot dalam kegiatan ekstrakurikuler robotika",
      image: "/placeholder.svg?height=400&width=600&text=Ekstrakurikuler+Robotika",
      category: "ekstrakurikuler",
      photographer: "Pembina Robotika",
      date: "2023-12-18",
      views: 389,
      album: "Ekstrakurikuler",
    },
    {
      id: 11,
      title: "Wisuda Tahfidz Al-Quran",
      description: "Acara wisuda siswa yang telah menyelesaikan hafalan Al-Quran 30 juz",
      image: "/placeholder.svg?height=400&width=600&text=Wisuda+Tahfidz",
      category: "acara",
      photographer: "Tim Dokumentasi",
      date: "2023-12-15",
      views: 892,
      album: "Acara Keagamaan",
    },
    {
      id: 12,
      title: "Masjid Sekolah",
      description: "Masjid sekolah yang digunakan untuk kegiatan ibadah dan pembelajaran agama",
      image: "/placeholder.svg?height=400&width=600&text=Masjid+Sekolah",
      category: "fasilitas",
      photographer: "Humas Sekolah",
      date: "2023-12-12",
      views: 267,
      album: "Fasilitas Sekolah",
    },
  ]

  // Filter photos based on search and category
  const filteredPhotos = photos.filter((photo) => {
    const matchesSearch =
      photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      photo.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "semua" || photo.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getCategoryColor = (category: string) => {
    const colors = {
      kegiatan: "bg-green-100 text-green-800",
      prestasi: "bg-yellow-100 text-yellow-800",
      fasilitas: "bg-blue-100 text-blue-800",
      pembelajaran: "bg-purple-100 text-purple-800",
      ekstrakurikuler: "bg-orange-100 text-orange-800",
      acara: "bg-red-100 text-red-800",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  const getCategoryLabel = (category: string) => {
    const labels = {
      kegiatan: "Kegiatan",
      prestasi: "Prestasi",
      fasilitas: "Fasilitas",
      pembelajaran: "Pembelajaran",
      ekstrakurikuler: "Ekstrakurikuler",
      acara: "Acara Khusus",
    }
    return labels[category as keyof typeof labels] || category
  }

  const openModal = (photo: any) => {
    setSelectedPhoto(photo)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedPhoto(null)
  }

  const navigatePhoto = (direction: "prev" | "next") => {
    if (!selectedPhoto) return

    const currentIndex = filteredPhotos.findIndex((p) => p.id === selectedPhoto.id)
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredPhotos.length - 1
    } else {
      newIndex = currentIndex < filteredPhotos.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedPhoto(filteredPhotos[newIndex])
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">Galeri Foto</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Galeri Foto Sekolah</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Dokumentasi kegiatan, fasilitas, dan momen berharga di MTS Al Falah Kotabaru Karawang
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">{photos.length}</div>
              <div className="text-sm text-gray-600">Total Foto</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">6</div>
              <div className="text-sm text-gray-600">Kategori</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">12</div>
              <div className="text-sm text-gray-600">Album</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">
                {photos.reduce((sum, photo) => sum + photo.views, 0).toLocaleString()}
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
                  placeholder="Cari foto..."
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
                <Grid3X3 className="h-4 w-4" />
                <span>{filteredPhotos.length} foto</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredPhotos.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPhotos.map((photo) => (
                <Card
                  key={photo.id}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group"
                  onClick={() => openModal(photo)}
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-square">
                      <Image
                        src={photo.image || "/placeholder.svg"}
                        alt={photo.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      <div className="absolute top-3 left-3">
                        <Badge className={getCategoryColor(photo.category)}>{getCategoryLabel(photo.category)}</Badge>
                      </div>
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                          <Camera className="h-4 w-4 text-gray-700" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <h3 className="text-white font-semibold text-sm mb-1 line-clamp-2">{photo.title}</h3>
                        <div className="flex items-center justify-between text-xs text-white/80">
                          <div className="flex items-center space-x-1">
                            <User className="h-3 w-3" />
                            <span>{photo.photographer}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="h-3 w-3" />
                            <span>{photo.views}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <ImageIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Foto Tidak Ditemukan</h3>
                <p className="text-gray-600 mb-6">
                  Tidak ada foto yang sesuai dengan pencarian "{searchTerm}" dalam kategori yang dipilih.
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

      {/* Photo Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl w-full h-[90vh] p-0">
          {selectedPhoto && (
            <div className="flex flex-col h-full">
              <DialogHeader className="p-6 pb-0">
                <div className="flex items-center justify-between">
                  <DialogTitle className="text-xl font-bold">{selectedPhoto.title}</DialogTitle>
                  <Button variant="ghost" size="sm" onClick={closeModal}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </DialogHeader>

              <div className="flex-1 relative">
                <div className="absolute inset-4">
                  <Image
                    src={selectedPhoto.image || "/placeholder.svg"}
                    alt={selectedPhoto.title}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Navigation Buttons */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                  onClick={() => navigatePhoto("prev")}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                  onClick={() => navigatePhoto("next")}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>

              <div className="p-6 bg-gray-50 border-t">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 mb-4">{selectedPhoto.description}</p>
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge className={getCategoryColor(selectedPhoto.category)}>
                        {getCategoryLabel(selectedPhoto.category)}
                      </Badge>
                      <span className="text-sm text-gray-500">Album: {selectedPhoto.album}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <User className="h-4 w-4" />
                        <span>{selectedPhoto.photographer}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(selectedPhoto.date).toLocaleDateString("id-ID", {
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
                        <span>{selectedPhoto.views} views</span>
                      </div>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
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
