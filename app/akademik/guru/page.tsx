import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, BookOpen, Users, Clock, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function GuruPage() {
  // Data nama guru dari profil_madrasah.json
  const namaGuru = [
    "Dra. Hj. Mahmudah",
    "Quratul Aeni, S.Pd.",
    "Rika Susanti, S.Pd.I",
    "Iis Aisyah, S.Pd.I",
    "Iat Solihatul Apiah, S.Pd.I",
    "Dra. N. Nurpadilah",
    "Tin Suwarti, S.Pd",
    "Suhendar M Nur, S.Pd",
    "Linda K Nisa, S.Pd",
    "Fathul Barri, S.Hum",
    "Ryan Astriani, S.Pd",
    "M.Wildan H F, S.Pd",
    "Arif Rahman,S.Pd.I",
    "Drs.Mlulyadi",
    "Zaenal Muhtadin, S.Pd.I",
    "Sri Mulyati I F, S.Pd",
    "Siti Rohmah, S.T",
    "Agus Riyanto",
    "Gegana Bima H, S.Pd",
    "Farhan Putra Anugrah, S.Pd",
    "Nana Setiana, S.Kom",
    "Ghina Nafisaturrahmah, S.T",
    "Nur Ainun Siti F, S.Pd",
    "Theresia Stella, S.Pd"
  ]

  const stats = [
    { icon: Users, label: "Total Guru", value: namaGuru.length.toString(), color: "text-blue-600" },
    { icon: GraduationCap, label: "Guru Berkualifikasi", value: "S1/S2", color: "text-green-600" },
    { icon: Award, label: "Guru Berpengalaman", value: "Profesional", color: "text-purple-600" },
    { icon: Clock, label: "Status", value: "Aktif Mengajar", color: "text-orange-600" },
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
              Tenaga pendidik profesional dan berpengalaman yang berdedikasi untuk kemajuan pendidikan Islam di MTs Al-Falah
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

      {/* Teachers List Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Daftar Nama Guru</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tenaga pendidik yang bertugas di MTs Al-Falah Kotabaru Karawang
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {namaGuru.map((guru, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                        <Users className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-gray-900 truncate">{guru}</h3>
                        <p className="text-xs text-gray-500">Guru MTs Al-Falah</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
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
            Jadilah bagian dari keluarga besar MTs Al-Falah dan berkontribusi dalam mencerdaskan generasi bangsa
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
