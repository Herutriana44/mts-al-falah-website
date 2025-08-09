import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Phone, GraduationCap, Award, BookOpen, Users, Clock, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function GuruPage() {
  const teachers = [
    {
      id: 1,
      name: "Drs. H. Ahmad Fauzi, M.Pd.I",
      position: "Kepala Madrasah",
      subjects: ["Manajemen Pendidikan"],
      photo: "/placeholder.svg?height=200&width=200",
      email: "kepala@mtsalfalah-kotabaru.sch.id",
      phone: "(0267) 123-4567",
      education: "S2 Pendidikan Islam - UIN Sunan Gunung Djati",
      experience: "15 Tahun",
      achievements: ["Kepala Sekolah Berprestasi 2022", "Tokoh Pendidikan Islam Karawang 2021"],
      category: "manajemen",
    },
    {
      id: 2,
      name: "Dra. Hj. Siti Aminah, M.Pd",
      position: "Wakil Kepala Kurikulum",
      subjects: ["Bahasa Indonesia", "Sastra Indonesia"],
      photo: "/placeholder.svg?height=200&width=200",
      email: "kurikulum@mtsalfalah-kotabaru.sch.id",
      phone: "(0267) 123-4568",
      education: "S2 Pendidikan Bahasa Indonesia - UPI",
      experience: "12 Tahun",
      achievements: ["Guru Berprestasi Tingkat Kabupaten 2020", "Juara 1 Lomba Karya Tulis Ilmiah 2019"],
      category: "bahasa",
    },
    {
      id: 3,
      name: "H. Muhammad Yusuf, S.Pd.I",
      position: "Wakil Kepala Kesiswaan",
      subjects: ["Pendidikan Agama Islam", "Akidah Akhlak"],
      photo: "/placeholder.svg?height=200&width=200",
      email: "kesiswaan@mtsalfalah-kotabaru.sch.id",
      phone: "(0267) 123-4569",
      education: "S1 Pendidikan Agama Islam - IAIN Bandung",
      experience: "10 Tahun",
      achievements: ["Pembina Terbaik Rohis 2021", "Juara 2 Lomba Ceramah Guru 2020"],
      category: "agama",
    },
    {
      id: 4,
      name: "H. Bambang Sutrisno, S.Pd",
      position: "Guru Matematika",
      subjects: ["Matematika"],
      photo: "/placeholder.svg?height=200&width=200",
      email: "bambang@mtsalfalah-kotabaru.sch.id",
      phone: "(0267) 123-4570",
      education: "S1 Pendidikan Matematika - UPI",
      experience: "8 Tahun",
      achievements: ["Pembina OSN Matematika Terbaik 2022", "Guru Inovatif 2021"],
      category: "eksak",
    },
    {
      id: 5,
      name: "Hj. Aisyah Nurjanah, S.Pd.I",
      position: "Guru Bahasa Arab",
      subjects: ["Bahasa Arab", "Al-Quran Hadits"],
      photo: "/placeholder.svg?height=200&width=200",
      email: "aisyah@mtsalfalah-kotabaru.sch.id",
      phone: "(0267) 123-4571",
      education: "S1 Pendidikan Bahasa Arab - UIN Jakarta",
      experience: "9 Tahun",
      achievements: ["Juara 1 Lomba Kaligrafi Guru 2021", "Pembina Tahfidz Terbaik 2020"],
      category: "agama",
    },
    {
      id: 6,
      name: "Muhammad Ali Akbar, S.Pd",
      position: "Guru IPA",
      subjects: ["IPA Terpadu", "Fisika", "Kimia"],
      photo: "/placeholder.svg?height=200&width=200",
      email: "ali@mtsalfalah-kotabaru.sch.id",
      phone: "(0267) 123-4572",
      education: "S1 Pendidikan Fisika - UNJ",
      experience: "7 Tahun",
      achievements: ["Pembina OSN IPA Terbaik 2022", "Guru Kreatif 2021"],
      category: "eksak",
    },
    {
      id: 7,
      name: "Siti Maryam, S.Pd",
      position: "Guru IPS",
      subjects: ["IPS Terpadu", "Sejarah", "Geografi"],
      photo: "/placeholder.svg?height=200&width=200",
      email: "maryam@mtsalfalah-kotabaru.sch.id",
      phone: "(0267) 123-4573",
      education: "S1 Pendidikan Sejarah - UNJ",
      experience: "6 Tahun",
      achievements: ["Guru Inspiratif 2021", "Juara 2 Lomba Media Pembelajaran 2020"],
      category: "sosial",
    },
    {
      id: 8,
      name: "Dra. Fatimah Azzahra",
      position: "Guru Bahasa Inggris",
      subjects: ["Bahasa Inggris"],
      photo: "/placeholder.svg?height=200&width=200",
      email: "fatimah@mtsalfalah-kotabaru.sch.id",
      phone: "(0267) 123-4574",
      education: "S1 Pendidikan Bahasa Inggris - UPI",
      experience: "11 Tahun",
      achievements: ["English Teacher of the Year 2021", "TOEFL Score 550"],
      category: "bahasa",
    },
    {
      id: 9,
      name: "H. Ibrahim Khalil, S.Pd.I",
      position: "Guru Fiqih",
      subjects: ["Fiqih", "Sejarah Kebudayaan Islam"],
      photo: "/placeholder.svg?height=200&width=200",
      email: "ibrahim@mtsalfalah-kotabaru.sch.id",
      phone: "(0267) 123-4575",
      education: "S1 Syariah - UIN Bandung",
      experience: "13 Tahun",
      achievements: ["Hafidz 10 Juz", "Pembina Pesantren Kilat Terbaik 2021"],
      category: "agama",
    },
    {
      id: 10,
      name: "Ahmad Soleh, S.Pd",
      position: "Guru PJOK",
      subjects: ["Pendidikan Jasmani", "Olahraga", "Kesehatan"],
      photo: "/placeholder.svg?height=200&width=200",
      email: "soleh@mtsalfalah-kotabaru.sch.id",
      phone: "(0267) 123-4576",
      education: "S1 Pendidikan Jasmani - UNJ",
      experience: "5 Tahun",
      achievements: ["Pelatih Futsal Terbaik 2022", "Atlet Pencak Silat Nasional"],
      category: "olahraga",
    },
    {
      id: 11,
      name: "Hj. Khadijah, S.Pd",
      position: "Guru Seni Budaya",
      subjects: ["Seni Budaya", "Kaligrafi"],
      photo: "/placeholder.svg?height=200&width=200",
      email: "khadijah@mtsalfalah-kotabaru.sch.id",
      phone: "(0267) 123-4577",
      education: "S1 Pendidikan Seni Rupa - ISI Yogyakarta",
      experience: "8 Tahun",
      achievements: ["Seniman Kaligrafi Terbaik 2021", "Juara 1 Lomba Lukis Islami 2020"],
      category: "seni",
    },
    {
      id: 12,
      name: "H. Usman Bin Affan, S.Pd.I",
      position: "Koordinator Tahfidz",
      subjects: ["Tahfidz Al-Quran", "Baca Tulis Al-Quran"],
      photo: "/placeholder.svg?height=200&width=200",
      email: "usman@mtsalfalah-kotabaru.sch.id",
      phone: "(0267) 123-4578",
      education: "S1 Ilmu Al-Quran dan Tafsir - UIN Bandung",
      experience: "14 Tahun",
      achievements: ["Hafidz 30 Juz", "Qori Terbaik Tingkat Provinsi 2019"],
      category: "agama",
    },
  ]

  const categories = [
    { id: "semua", label: "Semua Guru", count: teachers.length },
    { id: "manajemen", label: "Manajemen", count: teachers.filter((t) => t.category === "manajemen").length },
    { id: "agama", label: "Pendidikan Agama", count: teachers.filter((t) => t.category === "agama").length },
    { id: "eksak", label: "Eksak", count: teachers.filter((t) => t.category === "eksak").length },
    { id: "sosial", label: "Sosial", count: teachers.filter((t) => t.category === "sosial").length },
    { id: "bahasa", label: "Bahasa", count: teachers.filter((t) => t.category === "bahasa").length },
    { id: "olahraga", label: "Olahraga", count: teachers.filter((t) => t.category === "olahraga").length },
    { id: "seni", label: "Seni", count: teachers.filter((t) => t.category === "seni").length },
  ]

  const stats = [
    { icon: Users, label: "Total Guru", value: "28", color: "text-blue-600" },
    { icon: GraduationCap, label: "Guru S2", value: "8", color: "text-green-600" },
    { icon: Award, label: "Guru Bersertifikat", value: "25", color: "text-purple-600" },
    { icon: Clock, label: "Rata-rata Pengalaman", value: "9 Tahun", color: "text-orange-600" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">Data Guru</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Dewan Guru</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Tenaga pendidik profesional dan berpengalaman yang berdedikasi untuk kemajuan pendidikan Islam
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <stat.icon className={`h-12 w-12 mx-auto mb-4 ${stat.color}`} />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <Tabs defaultValue="semua" className="w-full">
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                <TabsList className="grid grid-cols-4 lg:grid-cols-8 w-full max-w-4xl">
                  {categories.map((category) => (
                    <TabsTrigger key={category.id} value={category.id} className="text-xs lg:text-sm">
                      {category.label}
                      <Badge className="ml-1 bg-blue-100 text-blue-800 text-xs">{category.count}</Badge>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {categories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {teachers
                      .filter((teacher) => category.id === "semua" || teacher.category === category.id)
                      .map((teacher) => (
                        <Card
                          key={teacher.id}
                          className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
                        >
                          <CardContent className="p-6">
                            {/* Photo */}
                            <div className="relative w-32 h-32 mx-auto mb-4">
                              <Image
                                src={teacher.photo || "/placeholder.svg"}
                                alt={teacher.name}
                                fill
                                className="object-cover rounded-full border-4 border-white shadow-lg group-hover:scale-105 transition-transform"
                              />
                            </div>

                            {/* Basic Info */}
                            <div className="text-center mb-4">
                              <h3 className="text-lg font-bold text-gray-900 mb-1">{teacher.name}</h3>
                              <Badge className="bg-blue-100 text-blue-800 mb-2">{teacher.position}</Badge>
                              <div className="text-sm text-gray-600">{teacher.subjects.join(", ")}</div>
                            </div>

                            {/* Contact */}
                            <div className="space-y-2 mb-4">
                              <div className="flex items-center space-x-2 text-sm">
                                <Mail className="h-4 w-4 text-blue-600" />
                                <span className="text-gray-600 truncate">{teacher.email}</span>
                              </div>
                              <div className="flex items-center space-x-2 text-sm">
                                <Phone className="h-4 w-4 text-green-600" />
                                <span className="text-gray-600">{teacher.phone}</span>
                              </div>
                            </div>

                            {/* Education & Experience */}
                            <div className="space-y-2 mb-4">
                              <div className="flex items-start space-x-2 text-sm">
                                <GraduationCap className="h-4 w-4 text-purple-600 mt-0.5" />
                                <span className="text-gray-600 text-xs">{teacher.education}</span>
                              </div>
                              <div className="flex items-center space-x-2 text-sm">
                                <Clock className="h-4 w-4 text-orange-600" />
                                <span className="text-gray-600">Pengalaman: {teacher.experience}</span>
                              </div>
                            </div>

                            {/* Achievements */}
                            <div className="mb-4">
                              <div className="text-sm font-medium text-gray-700 mb-2">Prestasi:</div>
                              <div className="space-y-1">
                                {teacher.achievements.slice(0, 2).map((achievement, index) => (
                                  <div key={index} className="flex items-start space-x-2">
                                    <Award className="h-3 w-3 text-yellow-600 mt-1 flex-shrink-0" />
                                    <span className="text-xs text-gray-600">{achievement}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Action Button */}
                            <Button
                              variant="ghost"
                              className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                            >
                              Lihat Detail
                              <ChevronRight className="ml-2 h-4 w-4" />
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Teacher Development */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pengembangan Guru</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Program pengembangan profesional untuk meningkatkan kualitas tenaga pendidik
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Pelatihan Rutin</h3>
                <p className="text-gray-600 text-sm">Workshop dan seminar berkala untuk update metode pembelajaran</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Studi Lanjut</h3>
                <p className="text-gray-600 text-sm">
                  Dukungan untuk melanjutkan pendidikan ke jenjang yang lebih tinggi
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Sertifikasi</h3>
                <p className="text-gray-600 text-sm">Program sertifikasi guru dan peningkatan kompetensi profesional</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">MGMP</h3>
                <p className="text-gray-600 text-sm">Aktif dalam Musyawarah Guru Mata Pelajaran tingkat kabupaten</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Bergabung dengan Tim Pendidik Profesional</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Jadilah bagian dari keluarga besar MTS Al Falah dan berkontribusi dalam mencerdaskan generasi bangsa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link href="/karir">
                Lowongan Guru
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/akademik/jadwal">Lihat Jadwal Mengajar</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
