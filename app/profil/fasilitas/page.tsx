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

  // Data fasilitas madrasah berdasarkan profil_madrasah.json
  const madrasahData = {
    luas_bangunan: "948 m2",
    status_bangunan: "Yayasan",
    kepemilikan_tanah: {
      tipe: "Yayasan",
      detail: [
        "a. Status Tanah (Wakaf Yayasan)",
        "b. Luas Tanah 1598 m2"
      ]
    }
  }

  // Galeri foto sarana prasarana madrasah
  const facilityImages = [
    {
      id: 1,
      title: "Sarana Prasarana 1",
      image: "/assets/images/sarana-prasarana/Picture5.png",
    },
    {
      id: 2,
      title: "Sarana Prasarana 2",
      image: "/assets/images/sarana-prasarana/Picture6.png",
    },
    {
      id: 3,
      title: "Sarana Prasarana 3",
      image: "/assets/images/sarana-prasarana/Picture7.png",
    },
    {
      id: 4,
      title: "Sarana Prasarana 4",
      image: "/assets/images/sarana-prasarana/Picture8.png",
    },
    {
      id: 5,
      title: "Sarana Prasarana 5",
      image: "/assets/images/sarana-prasarana/Picture9.png",
    },
    {
      id: 6,
      title: "Sarana Prasarana 6",
      image: "/assets/images/sarana-prasarana/Picture10.png",
    },
    {
      id: 7,
      title: "Sarana Prasarana 7",
      image: "/assets/images/sarana-prasarana/Picture11.png",
    },
    {
      id: 8,
      title: "Sarana Prasarana 8",
      image: "/assets/images/sarana-prasarana/Picture12.png",
    },
    {
      id: 9,
      title: "Sarana Prasarana 9",
      image: "/assets/images/sarana-prasarana/Picture13.png",
    },
    {
      id: 10,
      title: "Sarana Prasarana 10",
      image: "/assets/images/sarana-prasarana/Picture14.png",
    },
    {
      id: 11,
      title: "Sarana Prasarana 11",
      image: "/assets/images/sarana-prasarana/Picture15.png",
    },
    {
      id: 12,
      title: "Sarana Prasarana 12",
      image: "/assets/images/sarana-prasarana/Picture16.png",
    },
    {
      id: 13,
      title: "Sarana Prasarana 13",
      image: "/assets/images/sarana-prasarana/Picture17.png",
    },
    {
      id: 14,
      title: "Sarana Prasarana 14",
      image: "/assets/images/sarana-prasarana/Picture18.png",
    },
    {
      id: 15,
      title: "Sarana Prasarana 15",
      image: "/assets/images/sarana-prasarana/Picture19.png",
    },
    {
      id: 16,
      title: "Sarana Prasarana 16",
      image: "/assets/images/sarana-prasarana/Picture20.png",
    },
    {
      id: 17,
      title: "Sarana Prasarana 17",
      image: "/assets/images/sarana-prasarana/Picture21.png",
    },
    {
      id: 18,
      title: "Sarana Prasarana 18",
      image: "/assets/images/sarana-prasarana/Picture22.png",
    },
  ]

  // Informasi tambahan fasilitas madrasah
  const additionalFacilitiesInfo = [
    `Luas Bangunan: ${madrasahData.luas_bangunan}`,
    `Status Bangunan: ${madrasahData.status_bangunan}`,
    ...madrasahData.kepemilikan_tanah.detail
  ]

  const [selectedImage, setSelectedImage] = useState<any>(null)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">Sarana Prasarana</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Galeri Sarana Prasarana</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Dokumentasi fasilitas dan sarana prasarana MTs Al-Falah Kotabaru Karawang
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {facilityImages.map((item) => (
              <Card
                key={item.id}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 text-center">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Preview Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedImage && (
            <>
              <DialogHeader>
                <DialogTitle className="text-center">
                  {selectedImage.title}
                </DialogTitle>
              </DialogHeader>

              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Informasi Sarana Prasarana</h2>
            <p className="text-gray-600">Data dan informasi terkait sarana prasarana madrasah</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <Building className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">18</div>
                <div className="text-gray-600">Foto Sarana Prasarana</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <Computer className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">1598 m²</div>
                <div className="text-gray-600">Luas Tanah</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <BookOpen className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">Wakaf</div>
                <div className="text-gray-600">Status Tanah</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <Building className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">948 m²</div>
                <div className="text-gray-600">Luas Bangunan</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Kunjungi Madrasah Kami</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Lihat langsung sarana prasarana yang mendukung kegiatan belajar mengajar di MTs Al-Falah
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
