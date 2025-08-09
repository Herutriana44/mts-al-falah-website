"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  Building,
  BookOpen,
  Computer,
  Microscope,
  Utensils,
  Heart,
  Users,
  Car,
  Wifi,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function FasilitasPage() {
  const [selectedFacility, setSelectedFacility] = useState<any>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const facilities = [
    {
      id: 1,
      name: "Ruang Kelas Ber-AC",
      category: "Akademik",
      icon: Building,
      description:
        "15 ruang kelas yang nyaman dengan fasilitas AC, proyektor, dan sound system untuk pembelajaran yang optimal.",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      specifications: [
        "Kapasitas: 32 siswa per kelas",
        "Dilengkapi AC dan ventilasi yang baik",
        "Proyektor dan sound system",
        "Papan tulis interaktif",
        "Meja dan kursi ergonomis",
      ],
      color: "bg-blue-100 text-blue-800",
    },
    {
      id: 2,
      name: "Perpustakaan Digital",
      category: "Akademik",
      icon: BookOpen,
      description:
        "Perpustakaan modern dengan koleksi buku fisik dan digital, ruang baca yang nyaman, dan akses internet.",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      specifications: [
        "Koleksi: 5000+ buku fisik",
        "Akses e-book dan jurnal online",
        "Ruang baca untuk 50 orang",
        "Komputer akses internet",
        "Area diskusi kelompok",
      ],
      color: "bg-green-100 text-green-800",
    },
    {
      id: 3,
      name: "Laboratorium Komputer",
      category: "Teknologi",
      icon: Computer,
      description: "Lab komputer dengan 30 unit PC terbaru, akses internet cepat, dan software pembelajaran terkini.",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      specifications: [
        "30 unit komputer terbaru",
        "Internet fiber optic 100 Mbps",
        "Software pembelajaran lengkap",
        "AC dan pencahayaan optimal",
        "Proyektor untuk presentasi",
      ],
      color: "bg-purple-100 text-purple-800",
    },
    {
      id: 4,
      name: "Laboratorium IPA",
      category: "Akademik",
      icon: Microscope,
      description: "Laboratorium IPA lengkap untuk praktikum Fisika, Kimia, dan Biologi dengan peralatan modern.",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      specifications: [
        "Peralatan praktikum lengkap",
        "Mikroskop digital",
        "Lemari asam dan safety equipment",
        "Kapasitas 36 siswa",
        "Teknisi lab berpengalaman",
      ],
      color: "bg-orange-100 text-orange-800",
    },
    {
      id: 5,
      name: "Masjid Sekolah",
      category: "Keagamaan",
      icon: Building,
      description:
        "Masjid yang luas dan nyaman untuk sholat berjamaah, kajian keagamaan, dan kegiatan spiritual siswa.",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      specifications: [
        "Kapasitas: 500 jamaah",
        "Sound system berkualitas",
        "AC dan kipas angin",
        "Tempat wudhu terpisah",
        "Perpustakaan mini islami",
      ],
      color: "bg-emerald-100 text-emerald-800",
    },
    {
      id: 6,
      name: "Kantin Sehat",
      category: "Penunjang",
      icon: Utensils,
      description: "Kantin dengan menu makanan sehat dan halal, tempat duduk yang nyaman, dan harga terjangkau.",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      specifications: [
        "Menu makanan sehat dan halal",
        "Tempat duduk untuk 100 orang",
        "Dapur bersih dan higienis",
        "Harga terjangkau siswa",
        "Sertifikat halal MUI",
      ],
      color: "bg-yellow-100 text-yellow-800",
    },
    {
      id: 7,
      name: "Unit Kesehatan Sekolah (UKS)",
      category: "Kesehatan",
      icon: Heart,
      description: "UKS dengan fasilitas lengkap, tenaga medis profesional, dan obat-obatan untuk kesehatan siswa.",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      specifications: [
        "Tenaga medis profesional",
        "Tempat tidur pasien",
        "Obat-obatan lengkap",
        "Alat kesehatan standar",
        "Ruang konsultasi kesehatan",
      ],
      color: "bg-red-100 text-red-800",
    },
    {
      id: 8,
      name: "Lapangan Olahraga",
      category: "Olahraga",
      icon: Users,
      description:
        "Lapangan serbaguna untuk berbagai olahraga seperti basket, voli, futsal, dan kegiatan olahraga lainnya.",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      specifications: [
        "Lapangan basket standar",
        "Lapangan voli indoor/outdoor",
        "Lapangan futsal",
        "Tribun penonton",
        "Gudang peralatan olahraga",
      ],
      color: "bg-indigo-100 text-indigo-800",
    },
    {
      id: 9,
      name: "Aula Serbaguna",
      category: "Penunjang",
      icon: Building,
      description: "Aula besar untuk acara sekolah, seminar, pertunjukan seni, dan kegiatan besar lainnya.",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      specifications: [
        "Kapasitas: 400 orang",
        "Panggung dengan lighting",
        "Sound system profesional",
        "AC dan ventilasi baik",
        "Ruang ganti dan backstage",
      ],
      color: "bg-pink-100 text-pink-800",
    },
    {
      id: 10,
      name: "Parkir Kendaraan",
      category: "Penunjang",
      icon: Car,
      description: "Area parkir yang luas dan aman untuk kendaraan guru, staff, dan tamu sekolah.",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      specifications: [
        "Parkir mobil: 20 unit",
        "Parkir motor: 100 unit",
        "Petugas keamanan 24 jam",
        "CCTV monitoring",
        "Akses mudah dan aman",
      ],
      color: "bg-gray-100 text-gray-800",
    },
  ]

  const categories = ["Semua", "Akademik", "Teknologi", "Keagamaan", "Penunjang", "Kesehatan", "Olahraga"]
  const [selectedCategory, setSelectedCategory] = useState("Semua")

  const filteredFacilities =
    selectedCategory === "Semua" ? facilities : facilities.filter((facility) => facility.category === selectedCategory)

  const nextImage = () => {
    if (selectedFacility) {
      setCurrentImageIndex((prev) => (prev === selectedFacility.images.length - 1 ? 0 : prev + 1))
    }
  }

  const prevImage = () => {
    if (selectedFacility) {
      setCurrentImageIndex((prev) => (prev === 0 ? selectedFacility.images.length - 1 : prev - 1))
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">Fasilitas Sekolah</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Fasilitas Lengkap & Modern</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Fasilitas pendukung pembelajaran yang lengkap dan modern untuk kenyamanan dan prestasi siswa
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFacilities.map((facility) => (
              <Card
                key={facility.id}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => {
                  setSelectedFacility(facility)
                  setCurrentImageIndex(0)
                }}
              >
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={facility.images[0] || "/placeholder.svg"}
                    alt={facility.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={facility.color}>{facility.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <facility.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{facility.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-3">{facility.description}</p>
                  <Button variant="ghost" className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                    Lihat Detail
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Detail Modal */}
      <Dialog open={!!selectedFacility} onOpenChange={() => setSelectedFacility(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedFacility && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center space-x-3">
                  <selectedFacility.icon className="h-6 w-6 text-blue-600" />
                  <span>{selectedFacility.name}</span>
                  <Badge className={selectedFacility.color}>{selectedFacility.category}</Badge>
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                {/* Image Gallery */}
                <div className="relative">
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <Image
                      src={selectedFacility.images[currentImageIndex] || "/placeholder.svg"}
                      alt={selectedFacility.name}
                      fill
                      className="object-cover"
                    />
                    {selectedFacility.images.length > 1 && (
                      <>
                        <Button
                          variant="outline"
                          size="icon"
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                          onClick={prevImage}
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                          onClick={nextImage}
                        >
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </>
                    )}
                  </div>
                  {selectedFacility.images.length > 1 && (
                    <div className="flex justify-center space-x-2 mt-4">
                      {selectedFacility.images.map((_, index) => (
                        <button
                          key={index}
                          className={`w-3 h-3 rounded-full ${
                            index === currentImageIndex ? "bg-blue-600" : "bg-gray-300"
                          }`}
                          onClick={() => setCurrentImageIndex(index)}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Deskripsi</h3>
                  <p className="text-gray-600">{selectedFacility.description}</p>
                </div>

                {/* Specifications */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Spesifikasi & Fasilitas</h3>
                  <div className="grid md:grid-cols-2 gap-2">
                    {selectedFacility.specifications.map((spec, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700 text-sm">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fasilitas dalam Angka</h2>
            <p className="text-gray-600">Komitmen kami untuk menyediakan fasilitas terbaik</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <Building className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
                <div className="text-gray-600">Fasilitas Utama</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <Computer className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">30</div>
                <div className="text-gray-600">Unit Komputer</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <BookOpen className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">5000+</div>
                <div className="text-gray-600">Koleksi Buku</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <Wifi className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
                <div className="text-gray-600">Area WiFi</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Rasakan Fasilitas Terbaik Kami</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Kunjungi sekolah kami dan lihat langsung fasilitas lengkap yang mendukung prestasi siswa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link href="/kontak">
                Jadwalkan Kunjungan
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/ppdb">Daftar Sekarang</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
