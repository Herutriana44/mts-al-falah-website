import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Building, Award, BookOpen, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SejarahPage() {
  const timelineEvents = [
    {
      year: "1999",
      title: "Pendirian MTS Al Falah",
      description:
        "Didirikan dengan 3 ruang kelas dan 45 siswa pertama. Dipimpin oleh Bapak H. Abdul Rahman sebagai kepala sekolah pertama.",
      image: "/placeholder.svg?height=300&width=400",
      achievements: ["3 Ruang Kelas", "45 Siswa", "8 Guru"],
    },
    {
      year: "2003",
      title: "Pembangunan Masjid Sekolah",
      description:
        "Pembangunan masjid sekolah yang menjadi pusat kegiatan keagamaan dan pembelajaran Al-Quran bagi siswa.",
      image: "/placeholder.svg?height=300&width=400",
      achievements: ["Masjid 200m²", "Perpustakaan", "Lab IPA"],
    },
    {
      year: "2007",
      title: "Akreditasi Pertama",
      description:
        "Meraih akreditasi B dari Kementerian Agama RI, menandai pengakuan kualitas pendidikan yang semakin baik.",
      image: "/placeholder.svg?height=300&width=400",
      achievements: ["Akreditasi B", "150 Siswa", "20 Guru"],
    },
    {
      year: "2012",
      title: "Renovasi dan Modernisasi",
      description:
        "Renovasi besar-besaran fasilitas sekolah dan penambahan laboratorium komputer serta ruang multimedia.",
      image: "/placeholder.svg?height=300&width=400",
      achievements: ["Lab Komputer", "Ruang Multimedia", "AC di Semua Kelas"],
    },
    {
      year: "2018",
      title: "Akreditasi A",
      description:
        "Berhasil meraih akreditasi A dari Kementerian Agama RI, membuktikan komitmen terhadap kualitas pendidikan.",
      image: "/placeholder.svg?height=300&width=400",
      achievements: ["Akreditasi A", "400 Siswa", "28 Guru"],
    },
    {
      year: "2020",
      title: "Adaptasi Digital",
      description: "Implementasi pembelajaran digital dan hybrid learning sebagai respons terhadap pandemi COVID-19.",
      image: "/placeholder.svg?height=300&width=400",
      achievements: ["E-Learning Platform", "Smart Classroom", "Digital Library"],
    },
    {
      year: "2024",
      title: "Era Baru MTS Al Falah",
      description:
        "Meluncurkan website resmi dan sistem informasi sekolah terintegrasi untuk pelayanan yang lebih baik.",
      image: "/placeholder.svg?height=300&width=400",
      achievements: ["Website Resmi", "Sistem Informasi", "500+ Siswa"],
    },
  ]

  const milestones = [
    { icon: Users, label: "Total Alumni", value: "2000+", color: "text-blue-600" },
    { icon: Award, label: "Prestasi Diraih", value: "50+", color: "text-green-600" },
    { icon: Building, label: "Fasilitas", value: "15+", color: "text-purple-600" },
    { icon: BookOpen, label: "Program Unggulan", value: "8", color: "text-orange-600" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">Sejarah Sekolah</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Perjalanan 25 Tahun MTS Al Falah</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Dari sebuah madrasah kecil hingga menjadi institusi pendidikan Islam terpercaya di Karawang
            </p>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pencapaian Selama 25 Tahun</h2>
            <p className="text-gray-600">Angka-angka yang membanggakan dalam perjalanan MTS Al Falah</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <milestone.icon className={`h-12 w-12 mx-auto mb-4 ${milestone.color}`} />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{milestone.value}</div>
                  <div className="text-gray-600">{milestone.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Timeline Sejarah</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Perjalanan panjang MTS Al Falah dari tahun ke tahun dalam membangun pendidikan Islam yang berkualitas
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-blue-200 hidden lg:block"></div>

              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <div
                    key={event.year}
                    className={`flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} flex-col lg:space-x-8`}
                  >
                    {/* Content */}
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                      <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-3 mb-4">
                            <Badge className="bg-blue-600 text-white text-lg px-4 py-2">{event.year}</Badge>
                            <Calendar className="h-5 w-5 text-blue-600" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                          <p className="text-gray-600 mb-4">{event.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {event.achievements.map((achievement, idx) => (
                              <Badge key={idx} className="bg-green-100 text-green-800">
                                {achievement}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Timeline Dot */}
                    <div className="hidden lg:flex w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                    {/* Image */}
                    <div className="lg:w-1/2">
                      <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision for Future */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Visi Masa Depan</h2>
            <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-green-50">
              <CardContent className="p-8">
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=600"
                    alt="Visi Masa Depan MTS Al Falah"
                    fill
                    className="object-cover"
                  />
                </div>
                <blockquote className="text-lg text-gray-700 italic mb-6">
                  "Dengan pengalaman 25 tahun, MTS Al Falah berkomitmen untuk terus berinovasi dalam pendidikan Islam,
                  memadukan tradisi dengan teknologi modern, dan mempersiapkan generasi yang siap menghadapi tantangan
                  global dengan tetap berpegang teguh pada nilai-nilai Islam."
                </blockquote>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">Drs. H. Ahmad Fauzi, M.Pd.I</div>
                  <div className="text-gray-600">Kepala Madrasah MTS Al Falah</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Bergabunglah dengan Sejarah Kami</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Jadilah bagian dari perjalanan MTS Al Falah menuju masa depan yang lebih gemilang
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <Link href="/profil">Pelajari Lebih Lanjut</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
