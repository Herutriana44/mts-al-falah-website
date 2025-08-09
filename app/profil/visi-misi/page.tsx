import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Eye,
  Target,
  Heart,
  BookOpen,
  Users,
  Award,
  Globe,
  Star,
  ChevronRight,
  CheckCircle,
  Lightbulb,
  Shield,
  Compass,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function VisiMisiPage() {
  // Data dari profil_madrasah.json
  const visionStatement = "Terwujudnya Peserta Didik yang Unggul dalam IPTEK berlandaskan IMTAQ"
  const missions = [
    "Menumbuhkan semangat qur'ani dalam membentuk jiwa yang berakhlakul karimah.",
    "Melaksanakan pembelajaran dan bimbingan secara efektif sehingga setiap siswa berkembang secara optimal, sesuai dengan potensi yang dimiliki.",
    "Menumbuhkan semangat keunggulan iptek dan imtaq secara intensif kepada seluruh warga sekolah.",
    "Mendorong dan membantu setiap siswa untuk mengenali potensi dirinya, sehinggadapat berkembang secara optimal.",
    "Menghasilkan lulusan yang berprestasi dan berkualitas dalam iptek dan imtaq kepada Allah SWT"
  ]

  const objectives = [
    {
      category: "Akademik",
      items: [
        "Meningkatkan rata-rata nilai UN/UNBK di atas standar nasional",
        "Mengembangkan kurikulum terintegrasi yang sesuai dengan perkembangan zaman",
        "Meningkatkan kompetensi guru melalui pelatihan berkelanjutan",
        "Mengoptimalkan penggunaan teknologi dalam pembelajaran",
      ],
      color: "border-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      category: "Karakter",
      items: [
        "Menanamkan nilai-nilai akhlak mulia dalam kehidupan sehari-hari",
        "Mengembangkan program tahfidz Al-Quran untuk semua siswa",
        "Membentuk kepribadian yang mandiri, disiplin, dan bertanggung jawab",
        "Menumbuhkan sikap toleransi dan menghargai perbedaan",
      ],
      color: "border-green-500",
      bgColor: "bg-green-50",
    },
    {
      category: "Prestasi",
      items: [
        "Meraih juara dalam berbagai kompetisi akademik tingkat kabupaten/provinsi",
        "Mengembangkan bakat dan minat siswa melalui ekstrakurikuler",
        "Menciptakan karya inovatif dalam bidang sains dan teknologi",
        "Membangun budaya kompetitif yang sehat dan sportif",
      ],
      color: "border-purple-500",
      bgColor: "bg-purple-50",
    },
    {
      category: "Sosial",
      items: [
        "Membangun kerjasama yang baik dengan orang tua dan masyarakat",
        "Mengembangkan program pengabdian masyarakat",
        "Menciptakan alumni yang berkontribusi positif bagi bangsa",
        "Menjadi rujukan madrasah berkualitas di wilayah Karawang",
      ],
      color: "border-orange-500",
      bgColor: "bg-orange-50",
    },
  ]

  const coreValues = [
    {
      icon: Heart,
      title: "Akhlak Mulia",
      description: "Menjunjung tinggi nilai-nilai moral dan etika Islam dalam setiap tindakan dan keputusan",
      examples: ["Jujur dan amanah", "Sopan santun", "Menghormati guru dan sesama", "Peduli lingkungan"],
    },
    {
      icon: BookOpen,
      title: "Ilmu Pengetahuan",
      description: "Mengutamakan pencarian ilmu sebagai ibadah dan kewajiban setiap muslim",
      examples: ["Gemar membaca", "Berpikir kritis", "Inovatif dan kreatif", "Pembelajaran sepanjang hayat"],
    },
    {
      icon: Users,
      title: "Kerjasama",
      description: "Membangun semangat gotong royong dan kolaborasi dalam mencapai tujuan bersama",
      examples: ["Kerja tim yang solid", "Saling membantu", "Komunikasi efektif", "Menghargai perbedaan"],
    },
    {
      icon: Target,
      title: "Prestasi",
      description: "Berusaha mencapai keunggulan dalam setiap bidang dengan tetap menjaga keseimbangan",
      examples: ["Disiplin tinggi", "Pantang menyerah", "Kompetitif sehat", "Orientasi hasil"],
    },
    {
      icon: Lightbulb,
      title: "Inovasi",
      description: "Mengembangkan kreativitas dan pemikiran maju untuk menghadapi tantangan masa depan",
      examples: [
        "Berpikir out of the box",
        "Adaptif terhadap perubahan",
        "Teknologi dalam pembelajaran",
        "Solusi kreatif",
      ],
    },
    {
      icon: Compass,
      title: "Integritas",
      description: "Konsisten antara nilai yang dianut, perkataan, dan perbuatan dalam kehidupan sehari-hari",
      examples: ["Dapat dipercaya", "Konsisten", "Bertanggung jawab", "Transparansi"],
    },
  ]

  const implementationStrategies = [
    {
      title: "Kurikulum Terintegrasi",
      description: "Mengintegrasikan nilai-nilai Islam dalam setiap mata pelajaran",
      icon: BookOpen,
    },
    {
      title: "Pembelajaran Aktif",
      description: "Menerapkan metode pembelajaran yang mengaktifkan siswa",
      icon: Users,
    },
    {
      title: "Teknologi Pendidikan",
      description: "Memanfaatkan teknologi untuk meningkatkan kualitas pembelajaran",
      icon: Lightbulb,
    },
    {
      title: "Pengembangan SDM",
      description: "Meningkatkan kompetensi guru dan tenaga kependidikan",
      icon: Award,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">Visi & Misi</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Visi & Misi Sekolah</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Landasan filosofis dan arah pengembangan MTs Al-Falah Karawang menuju keunggulan pendidikan Islam
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                  src="/assets/images/logo/logo.png"
                  alt="Visi MTs Al-Falah"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
                  <Eye className="h-12 w-12" />
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <Badge className="bg-blue-100 text-blue-800 mb-4">Visi Sekolah</Badge>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Arah dan Cita-cita Kami</h2>
                </div>
                <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-green-50">
                  <CardContent className="p-8">
                    <blockquote className="text-xl text-gray-800 leading-relaxed italic font-medium">
                      "{visionStatement}"
                    </blockquote>
                  </CardContent>
                </Card>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-1">Unggul</div>
                    <div className="text-sm text-gray-600">Prestasi</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">Mulia</div>
                    <div className="text-sm text-gray-600">Akhlak</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-1">Global</div>
                    <div className="text-sm text-gray-600">Wawasan</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600 mb-1">Islam</div>
                    <div className="text-sm text-gray-600">Nilai-nilai</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-green-100 text-green-800 mb-4">Misi Sekolah</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Langkah Strategis Mencapai Visi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lima misi utama yang menjadi panduan dalam setiap program dan kegiatan madrasah
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {missions.map((mission, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-gradient-to-r from-blue-100 to-green-100 p-3 rounded-full group-hover:scale-110 transition-transform">
                      <Target className="h-8 w-8 text-blue-600" />
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">{`Misi ${index + 1}`}</Badge>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{mission}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-purple-100 text-purple-800 mb-4">Tujuan Sekolah</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Target Pencapaian Konkret</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tujuan-tujuan spesifik yang ingin dicapai dalam berbagai aspek pengembangan sekolah
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {objectives.map((objective, index) => (
              <Card key={index} className={`border-2 ${objective.color} ${objective.bgColor} shadow-lg`}>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Target className="h-6 w-6 mr-3 text-blue-600" />
                    {objective.category}
                  </h3>
                  <div className="space-y-3">
                    {objective.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-yellow-100 text-yellow-800 mb-4">Nilai-Nilai Inti</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fondasi Karakter Sekolah</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nilai-nilai fundamental yang menjadi pedoman dalam setiap aktivitas dan pengambilan keputusan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="bg-gradient-to-r from-blue-100 to-green-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                      <value.icon className="h-10 w-10 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-gray-700 mb-2">Implementasi:</div>
                    {value.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center space-x-2">
                        <Star className="h-3 w-3 text-yellow-500" />
                        <span className="text-xs text-gray-600">{example}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Strategy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Strategi Implementasi</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cara Mewujudkan Visi & Misi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Strategi konkret yang diterapkan untuk merealisasikan visi dan misi sekolah
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {implementationStrategies.map((strategy, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <strategy.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{strategy.title}</h3>
                  <p className="text-gray-600 text-sm">{strategy.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 text-6xl text-blue-400 opacity-50">"</div>
              <blockquote className="text-2xl font-medium leading-relaxed mb-8 italic">
                Visi dan misi bukan hanya tulisan di dinding, tetapi jiwa yang menggerakkan setiap langkah kami dalam
                mendidik generasi masa depan yang berakhlak mulia dan berprestasi.
              </blockquote>
              <div className="absolute -bottom-4 -right-4 text-6xl text-green-400 opacity-50">"</div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <div className="relative w-16 h-16">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="Kepala Sekolah"
                  fill
                  className="object-cover rounded-full border-2 border-white"
                />
              </div>
              <div className="text-left">
                <div className="font-bold">Dra. Hj. Mahmudah</div>
                <div className="text-gray-300">Kepala Madrasah MTs Al-Falah</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Bergabunglah dengan Visi Kami</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Mari bersama-sama mewujudkan visi dan misi MTs Al-Falah untuk menciptakan generasi yang unggul dan berakhlak
            mulia
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
