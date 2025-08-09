import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Users, Target, CheckCircle, Download, ChevronRight, GraduationCap, Heart, Globe } from "lucide-react"
import Link from "next/link"

export default function KurikulumPage() {
  const kurikulumNasional = {
    description:
      "Kurikulum 2013 yang diterapkan di MTS Al Falah mengintegrasikan pendekatan saintifik dengan nilai-nilai Islam untuk mengembangkan kompetensi siswa secara holistik.",
    subjects: [
      { name: "Pendidikan Agama Islam", hours: 3, description: "Al-Quran Hadits, Akidah Akhlak, Fiqih, SKI" },
      { name: "Bahasa Indonesia", hours: 6, description: "Komunikasi lisan dan tulisan" },
      { name: "Matematika", hours: 5, description: "Aljabar, Geometri, Statistika" },
      { name: "IPA", hours: 5, description: "Fisika, Kimia, Biologi terintegrasi" },
      { name: "IPS", hours: 4, description: "Sejarah, Geografi, Ekonomi, Sosiologi" },
      { name: "Bahasa Inggris", hours: 4, description: "Speaking, Listening, Reading, Writing" },
      { name: "Seni Budaya", hours: 3, description: "Seni rupa, musik, tari, teater" },
      { name: "PJOK", hours: 3, description: "Pendidikan Jasmani, Olahraga, Kesehatan" },
      { name: "Prakarya", hours: 2, description: "Kerajinan, teknologi, kewirausahaan" },
    ],
  }

  const kurikulumMadrasah = {
    description:
      "Kurikulum khas madrasah yang memperkuat identitas Islam dan mengembangkan karakter religius siswa melalui pembelajaran yang mendalam tentang ajaran Islam.",
    subjects: [
      { name: "Al-Quran Hadits", hours: 2, description: "Hafalan, tajwid, dan pemahaman makna" },
      { name: "Akidah Akhlak", hours: 2, description: "Keimanan dan pembentukan karakter" },
      { name: "Fiqih", hours: 2, description: "Hukum Islam dan praktik ibadah" },
      { name: "Sejarah Kebudayaan Islam", hours: 2, description: "Peradaban dan tokoh Islam" },
      { name: "Bahasa Arab", hours: 3, description: "Nahwu, Sharaf, Muthala'ah, Muhadatsah" },
      { name: "Tahfidz Al-Quran", hours: 2, description: "Program hafalan Al-Quran" },
      { name: "Baca Tulis Al-Quran", hours: 1, description: "Perbaikan bacaan Al-Quran" },
      { name: "Muatan Lokal Islam", hours: 1, description: "Budaya Islam Nusantara" },
    ],
  }

  const ekstrakurikuler = [
    {
      category: "Keagamaan",
      activities: [
        { name: "Tahfidz Al-Quran", description: "Program hafalan Al-Quran dengan target 3 juz" },
        { name: "Tilawah", description: "Seni baca Al-Quran dengan lagu" },
        { name: "Kaligrafi", description: "Seni tulis Arab dan kaligrafi Islam" },
        { name: "Ceramah", description: "Latihan pidato dan dakwah" },
      ],
    },
    {
      category: "Akademik",
      activities: [
        { name: "Olimpiade Sains", description: "Persiapan OSN Matematika, IPA, IPS" },
        { name: "English Club", description: "Klub bahasa Inggris dan conversation" },
        { name: "Jurnalistik", description: "Majalah sekolah dan media sosial" },
        { name: "Debat", description: "Latihan debat bahasa Indonesia dan Arab" },
      ],
    },
    {
      category: "Olahraga",
      activities: [
        { name: "Futsal", description: "Tim futsal putra dan putri" },
        { name: "Bulu Tangkis", description: "Klub bulu tangkis sekolah" },
        { name: "Voli", description: "Tim voli putra dan putri" },
        { name: "Pencak Silat", description: "Beladiri tradisional Indonesia" },
      ],
    },
    {
      category: "Seni & Budaya",
      activities: [
        { name: "Nasyid", description: "Grup musik Islami" },
        { name: "Teater", description: "Drama dan pertunjukan seni" },
        { name: "Tari Tradisional", description: "Tari daerah dan tari Islami" },
        { name: "Rebana", description: "Musik tradisional Islam" },
      ],
    },
  ]

  const kompetensiLulusan = [
    {
      domain: "Sikap",
      icon: Heart,
      color: "bg-red-100 text-red-800",
      competencies: [
        "Beriman dan bertakwa kepada Tuhan Yang Maha Esa",
        "Berkarakter, jujur, dan peduli",
        "Bertanggung jawab dan pembelajar sejati sepanjang hayat",
        "Sehat jasmani dan rohani",
      ],
    },
    {
      domain: "Pengetahuan",
      icon: BookOpen,
      color: "bg-blue-100 text-blue-800",
      competencies: [
        "Memiliki pengetahuan faktual, konseptual, prosedural, dan metakognitif",
        "Menguasai ilmu pengetahuan, teknologi, seni, dan budaya",
        "Mampu mengaitkan pengetahuan di atas dalam konteks diri sendiri, keluarga, sekolah, masyarakat",
        "Memahami ajaran Islam secara komprehensif",
      ],
    },
    {
      domain: "Keterampilan",
      icon: Target,
      color: "bg-green-100 text-green-800",
      competencies: [
        "Memiliki kemampuan pikir dan tindak yang kreatif, produktif, kritis, mandiri, kolaboratif, dan komunikatif",
        "Mampu menggunakan teknologi informasi dan komunikasi",
        "Terampil dalam berbagai bidang keahlian",
        "Mampu beradaptasi dengan lingkungan",
      ],
    },
  ]

  const metodePembelajaran = [
    {
      name: "Scientific Approach",
      description:
        "Pendekatan ilmiah dengan 5M: Mengamati, Menanya, Mengumpulkan informasi, Mengasosiasi, Mengkomunikasikan",
      icon: Target,
    },
    {
      name: "Project Based Learning",
      description: "Pembelajaran berbasis proyek untuk mengembangkan kreativitas dan kemampuan problem solving",
      icon: Users,
    },
    {
      name: "Contextual Learning",
      description: "Pembelajaran kontekstual yang mengaitkan materi dengan kehidupan sehari-hari",
      icon: Globe,
    },
    {
      name: "Islamic Integration",
      description: "Integrasi nilai-nilai Islam dalam setiap mata pelajaran dan aktivitas pembelajaran",
      icon: Heart,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">Kurikulum Sekolah</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Kurikulum Terintegrasi</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Memadukan Kurikulum 2013 dengan Kurikulum Madrasah untuk menghasilkan lulusan yang unggul dalam IPTEK dan
              IMTAQ
            </p>
          </div>
        </div>
      </section>

      {/* Kurikulum Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="nasional" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="nasional" className="text-lg">
                  Kurikulum 2013
                </TabsTrigger>
                <TabsTrigger value="madrasah" className="text-lg">
                  Kurikulum Madrasah
                </TabsTrigger>
              </TabsList>

              <TabsContent value="nasional" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Kurikulum 2013</h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">{kurikulumNasional.description}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {kurikulumNasional.subjects.map((subject, index) => (
                    <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-lg font-bold text-gray-900">{subject.name}</h3>
                          <Badge className="bg-blue-100 text-blue-800">{subject.hours} JP/Minggu</Badge>
                        </div>
                        <p className="text-gray-600 text-sm">{subject.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="madrasah" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Kurikulum Madrasah</h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">{kurikulumMadrasah.description}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {kurikulumMadrasah.subjects.map((subject, index) => (
                    <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-lg font-bold text-gray-900">{subject.name}</h3>
                          <Badge className="bg-green-100 text-green-800">{subject.hours} JP/Minggu</Badge>
                        </div>
                        <p className="text-gray-600 text-sm">{subject.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Kompetensi Lulusan */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kompetensi Lulusan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Standar kompetensi lulusan yang harus dicapai siswa MTS Al Falah
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {kompetensiLulusan.map((domain, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="bg-gradient-to-r from-blue-100 to-green-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <domain.icon className="h-10 w-10 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl">{domain.domain}</CardTitle>
                  <Badge className={domain.color}>Kompetensi Inti</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {domain.competencies.map((competency, compIndex) => (
                      <div key={compIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{competency}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Metode Pembelajaran */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Metode Pembelajaran</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pendekatan pembelajaran inovatif yang diterapkan di MTS Al Falah
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metodePembelajaran.map((metode, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <metode.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{metode.name}</h3>
                  <p className="text-gray-600 text-sm">{metode.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ekstrakurikuler */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Program Ekstrakurikuler</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kegiatan pengembangan bakat dan minat siswa di luar jam pelajaran
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {ekstrakurikuler.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-center">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.activities.map((activity, actIndex) => (
                      <div key={actIndex} className="border-l-4 border-blue-600 pl-4">
                        <h4 className="font-semibold text-gray-900">{activity.name}</h4>
                        <p className="text-gray-600 text-sm">{activity.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-50 to-green-50">
              <CardContent className="p-8 text-center">
                <GraduationCap className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Dokumen Kurikulum</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Download dokumen lengkap kurikulum, silabus, dan panduan pembelajaran MTS Al Falah
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Link href="/downloads/kurikulum-2013.pdf" target="_blank">
                      <Download className="mr-2 h-5 w-5" />
                      Kurikulum 2013
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/downloads/kurikulum-madrasah.pdf" target="_blank">
                      <Download className="mr-2 h-5 w-5" />
                      Kurikulum Madrasah
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/downloads/panduan-pembelajaran.pdf" target="_blank">
                      <Download className="mr-2 h-5 w-5" />
                      Panduan Pembelajaran
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Bergabunglah dengan Kurikulum Terbaik</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Rasakan pengalaman belajar dengan kurikulum terintegrasi yang mengembangkan potensi siswa secara holistik
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
              <Link href="/akademik/jadwal">Lihat Jadwal Pelajaran</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
