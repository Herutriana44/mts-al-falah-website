import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { User, Mail, Phone, Users, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function StrukturOrganisasiPage() {
  // Data organisasi madrasah berdasarkan profil_madrasah.json
  const madrasahData = {
    nama_kepala: "Dra. Hj. Mahmudah",
    komite_madrasah: "Arif Rahman, S.Pd.I",
    no_telp: "(0264) 315556",
    list_nama_guru: [
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
  }

  const organizationStructure = {
    kepalaSekolah: {
      name: "Dra. Hj. Mahmudah",
      position: "Kepala Madrasah",
    },
    wakilKepala: [
      {
        name: "Tin Suwarti, S.Pd",
        position: "Waka. Kurikulum",
      },
      {
        name: "Farhan Putra A., S.Pd",
        position: "Waka. Kesiswaan",
      },
    ],
    koordinator: [
      {
        name: "A. Zaenal M, S.Ag",
        position: "Bid. Humas",
      },
      {
        name: "Nana Setiana, S.Kom",
        position: "Bid. Sarpras",
      },
      {
        name: "Ustad Permadi",
        position: "Kerohanian",
      },
      {
        name: "Abdurahman Arif",
        position: "BK / BP",
      },
    ],
    komite: {
      name: "Arif Rahman, S.Pd",
      position: "Ketua Komite",
    },
    staff: [
      {
        name: "Fathul Barri",
        position: "Kepala TU",
      },
      {
        name: "Arya Ramadhan",
        position: "Staff TU",
      },
      {
        name: "Siti Maryam, S.H",
        position: "Bendahara",
      },
    ],
    waliKelas: madrasahData.list_nama_guru,
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">Struktur Organisasi</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Struktur Organisasi Sekolah</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Tim profesional yang berdedikasi untuk memberikan pendidikan Islam terbaik
            </p>
          </div>
        </div>
      </section>

      {/* Kepala Sekolah */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-50 to-green-50">
              <CardContent className="p-8 text-center">
                <div className="space-y-4">
                  <div className="relative w-48 h-48 mx-auto mb-4">
                    <div className="w-full h-full bg-blue-100 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                      <User className="h-24 w-24 text-blue-600" />
                    </div>
                  </div>
                  <Badge className="bg-blue-600 text-white text-lg px-6 py-2">
                    {organizationStructure.kepalaSekolah.position}
                  </Badge>
                  <h2 className="text-3xl font-bold text-gray-900">{organizationStructure.kepalaSekolah.name}</h2>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Wakil Kepala */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Wakil Kepala Madrasah</h2>
            <p className="text-gray-600">Tim manajemen yang mendukung kepemimpinan sekolah</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {organizationStructure.wakilKepala.map((wakil, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <User className="h-12 w-12 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{wakil.name}</h3>
                  <Badge className="bg-green-100 text-green-800">{wakil.position}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Koordinator Bidang */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Koordinator Bidang</h2>
            <p className="text-gray-600">Koordinator berbagai bidang madrasah</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {organizationStructure.koordinator.map((koordinator, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                    <User className="h-10 w-10 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{koordinator.name}</h3>
                  <Badge className="bg-purple-100 text-purple-800 text-xs">{koordinator.position}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Komite Madrasah */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-xl bg-gradient-to-r from-orange-50 to-yellow-50">
              <CardContent className="p-8 text-center">
                <div className="space-y-4">
                  <div className="w-32 h-32 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                    <Users className="h-16 w-16 text-orange-600" />
                  </div>
                  <Badge className="bg-orange-600 text-white text-lg px-6 py-2">
                    {organizationStructure.komite.position}
                  </Badge>
                  <h2 className="text-2xl font-bold text-gray-900">{organizationStructure.komite.name}</h2>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Staff dan Tenaga Kependidikan */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Staff */}
            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Tenaga Kependidikan</h2>
                <p className="text-gray-600">Staff pendukung yang berdedikasi</p>
              </div>
              <div className="space-y-4">
                {organizationStructure.staff.map((staff, index) => (
                  <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-4 flex items-center space-x-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="h-8 w-8 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{staff.name}</h4>
                        <div className="text-sm text-gray-500">{staff.position}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Wali Kelas */}
            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Wali Kelas</h2>
                <p className="text-gray-600">Tenaga pendidik yang membimbing siswa</p>
              </div>
              <Card className="border-0 shadow-lg bg-green-50">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  {/* <div className="text-3xl font-bold text-gray-900 mb-2">{organizationStructure.waliKelas.length}</div> */}
                  <div className="text-gray-600">Wali Kelas</div>
                  {/* <Button asChild className="mt-4 bg-green-600 hover:bg-green-700">
                    <Link href="/akademik/guru">
                      Lihat Semua Wali Kelas
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button> */}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Chart */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Bagan Organisasi</h2>
            <p className="text-gray-600">Struktur organisasi MTS Al Falah Kotabaru Karawang</p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="relative bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-lg">
              <Image
                src="/assets/images/struktur madrasah/Picture4.png"
                alt="Bagan Organisasi MTS Al Falah"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Bergabung dengan Tim Profesional Kami</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Jadilah bagian dari keluarga besar MTS Al Falah yang berdedikasi untuk pendidikan Islam berkualitas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link href="/karir">
                Lowongan Kerja
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
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
