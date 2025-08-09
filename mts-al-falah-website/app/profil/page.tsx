import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Building, Award, Target, Eye, Heart, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProfilPage() {
  const visionMission = {
    vision:
      "Menjadi madrasah tsanawiyah yang unggul dalam prestasi, berakhlak mulia, dan berwawasan global berdasarkan nilai-nilai Islam.",
    missions: [
      "Menyelenggarakan pendidikan Islam yang berkualitas dan berkarakter",
      "Mengembangkan potensi siswa dalam bidang akademik dan non-akademik",
      "Membentuk generasi yang berakhlak mulia dan bertakwa kepada Allah SWT",
      "Mempersiapkan siswa yang siap menghadapi tantangan global",
      "Menciptakan lingkungan belajar yang kondusif dan Islami",
    ],
  }

  const schoolValues = [
    {
      icon: Heart,
      title: "Akhlak Mulia",
      description: "Membentuk karakter siswa berdasarkan nilai-nilai Islam yang luhur",
    },
    {
      icon: BookOpen,
      title: "Prestasi Akademik",
      description: "Mengutamakan keunggulan dalam bidang akademik dan pengetahuan",
    },
    {
      icon: Users,
      title: "Kerjasama",
      description: "Membangun semangat gotong royong dan kerjasama yang baik",
    },
    {
      icon: Target,
      title: "Inovasi",
      description: "Mengembangkan kreativitas dan inovasi dalam pembelajaran",
    },
  ]

  const facilities = [
    "Ruang Kelas Ber-AC",
    "Laboratorium IPA",
    "Laboratorium Komputer",
    "Perpustakaan",
    "Masjid",
    "Lapangan Olahraga",
    "Kantin Sehat",
    "UKS",
    "Ruang Multimedia",
    "Aula Serbaguna",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">Profil Sekolah</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Tentang MTS Al Falah</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Mengenal lebih dekat sejarah, visi misi, dan komitmen kami dalam memberikan pendidikan Islam yang
              berkualitas
            </p>
          </div>
        </div>
      </section>

      {/* School Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Siswa MTS Al Falah"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">25+</div>
                  <div className="text-sm">Tahun Pengalaman</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <Badge className="bg-green-100 text-green-800 mb-4">Sejarah Singkat</Badge>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Perjalanan Panjang Pendidikan Islam</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  MTS Al Falah Kotabaru Karawang didirikan pada tahun 1999 dengan semangat untuk memberikan pendidikan
                  Islam yang berkualitas bagi masyarakat Karawang dan sekitarnya. Berawal dari sebuah madrasah kecil
                  dengan 3 ruang kelas, kini telah berkembang menjadi institusi pendidikan yang dipercaya.
                </p>
                <p>
                  Dengan dukungan masyarakat dan komitmen para pendidik, MTS Al Falah terus berinovasi dalam metode
                  pembelajaran, memadukan kurikulum nasional dengan nilai-nilai keislaman yang kuat.
                </p>
                <p>
                  Hingga saat ini, lebih dari 2000 alumni telah lulus dan tersebar di berbagai jenjang pendidikan tinggi
                  serta berkiprah di masyarakat dengan bekal akhlak mulia dan ilmu pengetahuan yang solid.
                </p>
              </div>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/profil/sejarah">
                  Baca Sejarah Lengkap
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visi & Misi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Landasan filosofis yang mengarahkan setiap langkah pendidikan di MTS Al Falah
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Vision */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Eye className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Visi</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">{visionMission.vision}</p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Target className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Misi</h3>
                </div>
                <ul className="space-y-3">
                  {visionMission.missions.map((mission, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{mission}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* School Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nilai-Nilai Sekolah</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nilai-nilai fundamental yang menjadi pedoman dalam setiap aktivitas pendidikan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {schoolValues.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-r from-blue-100 to-green-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <value.icon className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fasilitas Sekolah</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fasilitas lengkap dan modern untuk mendukung proses pembelajaran yang optimal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Building className="h-6 w-6 text-blue-600" />
                  </div>
                  <span className="text-gray-900 font-medium">{facility}</span>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="/profil/fasilitas">
                Lihat Fasilitas Lengkap
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Prestasi & Penghargaan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Berbagai pencapaian membanggakan yang telah diraih MTS Al Falah
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="bg-yellow-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Award className="h-10 w-10 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Akreditasi A</h3>
                <p className="text-gray-600">Terakreditasi A dari Kementerian Agama RI</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="bg-blue-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Award className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Juara Olimpiade</h3>
                <p className="text-gray-600">Juara 1 Olimpiade Matematika Tingkat Kabupaten</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="bg-green-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Award className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sekolah Adiwiyata</h3>
                <p className="text-gray-600">Penghargaan Sekolah Peduli Lingkungan</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Bergabunglah dengan Keluarga Besar MTS Al Falah</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Wujudkan masa depan gemilang putra-putri Anda dengan pendidikan Islam yang berkualitas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link href="/ppdb">Daftar Sekarang</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/kontak">Hubungi Kami</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
