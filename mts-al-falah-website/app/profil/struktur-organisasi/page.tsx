import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { User, Mail, Phone, Users, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function StrukturOrganisasiPage() {
  const organizationStructure = {
    kepalaSekolah: {
      name: "Drs. H. Ahmad Fauzi, M.Pd.I",
      position: "Kepala Madrasah",
      photo: "/placeholder.svg?height=200&width=200",
      email: "kepala@mtsalfalah-kotabaru.sch.id",
      phone: "(0267) 123-4567",
      education: "S2 Pendidikan Islam - UIN Sunan Gunung Djati",
      experience: "15 Tahun",
    },
    wakilKepala: [
      {
        name: "Dra. Hj. Siti Aminah, M.Pd",
        position: "Wakil Kepala Kurikulum",
        photo: "/placeholder.svg?height=150&width=150",
        email: "kurikulum@mtsalfalah-kotabaru.sch.id",
        department: "Kurikulum",
      },
      {
        name: "H. Muhammad Yusuf, S.Pd.I",
        position: "Wakil Kepala Kesiswaan",
        photo: "/placeholder.svg?height=150&width=150",
        email: "kesiswaan@mtsalfalah-kotabaru.sch.id",
        department: "Kesiswaan",
      },
      {
        name: "Drs. Abdul Malik, M.M",
        position: "Wakil Kepala Sarana Prasarana",
        photo: "/placeholder.svg?height=150&width=150",
        email: "sarpras@mtsalfalah-kotabaru.sch.id",
        department: "Sarana Prasarana",
      },
    ],
    koordinator: [
      {
        name: "Hj. Fatimah, S.Pd.I",
        position: "Koordinator BK",
        photo: "/placeholder.svg?height=120&width=120",
        department: "Bimbingan Konseling",
      },
      {
        name: "Ahmad Ridwan, S.Kom",
        position: "Koordinator IT",
        photo: "/placeholder.svg?height=120&width=120",
        department: "Teknologi Informasi",
      },
      {
        name: "Hj. Khadijah, S.Pd",
        position: "Koordinator Perpustakaan",
        photo: "/placeholder.svg?height=120&width=120",
        department: "Perpustakaan",
      },
      {
        name: "H. Usman, S.Pd.I",
        position: "Koordinator Tahfidz",
        photo: "/placeholder.svg?height=120&width=120",
        department: "Program Tahfidz",
      },
    ],
    guru: {
      mapel: [
        { name: "Dra. Nurhayati", subject: "Bahasa Indonesia", photo: "/placeholder.svg?height=100&width=100" },
        { name: "H. Bambang, S.Pd", subject: "Matematika", photo: "/placeholder.svg?height=100&width=100" },
        { name: "Hj. Aisyah, S.Pd.I", subject: "Bahasa Arab", photo: "/placeholder.svg?height=100&width=100" },
        { name: "Muhammad Ali, S.Pd", subject: "IPA", photo: "/placeholder.svg?height=100&width=100" },
        { name: "Siti Maryam, S.Pd", subject: "IPS", photo: "/placeholder.svg?height=100&width=100" },
        { name: "H. Ibrahim, S.Pd.I", subject: "Fiqih", photo: "/placeholder.svg?height=100&width=100" },
      ],
      total: 28,
    },
    staff: [
      { name: "Dedi Suryadi", position: "Tata Usaha", photo: "/placeholder.svg?height=100&width=100" },
      { name: "Siti Rohani", position: "Bendahara", photo: "/placeholder.svg?height=100&width=100" },
      { name: "Ahmad Soleh", position: "Keamanan", photo: "/placeholder.svg?height=100&width=100" },
      { name: "Ibu Umi", position: "Kebersihan", photo: "/placeholder.svg?height=100&width=100" },
    ],
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
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="text-center">
                    <div className="relative w-48 h-48 mx-auto mb-4">
                      <Image
                        src={organizationStructure.kepalaSekolah.photo || "/placeholder.svg"}
                        alt={organizationStructure.kepalaSekolah.name}
                        fill
                        className="object-cover rounded-full border-4 border-white shadow-lg"
                      />
                    </div>
                    <Badge className="bg-blue-600 text-white text-lg px-4 py-2">
                      {organizationStructure.kepalaSekolah.position}
                    </Badge>
                  </div>
                  <div className="lg:col-span-2 space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900">{organizationStructure.kepalaSekolah.name}</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-blue-600" />
                        <span className="text-gray-700">{organizationStructure.kepalaSekolah.email}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-green-600" />
                        <span className="text-gray-700">{organizationStructure.kepalaSekolah.phone}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <User className="h-5 w-5 text-purple-600" />
                        <span className="text-gray-700">{organizationStructure.kepalaSekolah.education}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="h-5 w-5 text-orange-600" />
                        <span className="text-gray-700">
                          Pengalaman: {organizationStructure.kepalaSekolah.experience}
                        </span>
                      </div>
                    </div>
                    <Button asChild className="bg-blue-600 hover:bg-blue-700">
                      <Link href="/profil/kepala-sekolah">
                        Lihat Profil Lengkap
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
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
          <div className="grid md:grid-cols-3 gap-8">
            {organizationStructure.wakilKepala.map((wakil, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={wakil.photo || "/placeholder.svg"}
                      alt={wakil.name}
                      fill
                      className="object-cover rounded-full border-2 border-gray-200"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{wakil.name}</h3>
                  <Badge className="bg-green-100 text-green-800 mb-3">{wakil.position}</Badge>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-600">{wakil.email}</span>
                    </div>
                    <div className="text-sm text-gray-500">Bidang: {wakil.department}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Koordinator */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Koordinator Program</h2>
            <p className="text-gray-600">Koordinator berbagai program unggulan sekolah</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {organizationStructure.koordinator.map((koordinator, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                      src={koordinator.photo || "/placeholder.svg"}
                      alt={koordinator.name}
                      fill
                      className="object-cover rounded-full border-2 border-gray-200"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{koordinator.name}</h3>
                  <Badge className="bg-purple-100 text-purple-800 mb-2 text-xs">{koordinator.position}</Badge>
                  <div className="text-sm text-gray-500">{koordinator.department}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guru dan Staff */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Guru */}
            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Dewan Guru</h2>
                <p className="text-gray-600">Tenaga pendidik profesional dan berpengalaman</p>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {organizationStructure.guru.mapel.map((guru, index) => (
                  <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-4 text-center">
                      <div className="relative w-16 h-16 mx-auto mb-3">
                        <Image
                          src={guru.photo || "/placeholder.svg"}
                          alt={guru.name}
                          fill
                          className="object-cover rounded-full border border-gray-200"
                        />
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">{guru.name}</h4>
                      <div className="text-xs text-gray-500">{guru.subject}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Card className="border-0 shadow-lg bg-blue-50">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{organizationStructure.guru.total}</div>
                  <div className="text-gray-600">Total Guru</div>
                  <Button asChild className="mt-4 bg-blue-600 hover:bg-blue-700">
                    <Link href="/akademik/guru">
                      Lihat Semua Guru
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

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
                      <div className="relative w-16 h-16">
                        <Image
                          src={staff.photo || "/placeholder.svg"}
                          alt={staff.name}
                          fill
                          className="object-cover rounded-full border border-gray-200"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{staff.name}</h4>
                        <div className="text-sm text-gray-500">{staff.position}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Card className="border-0 shadow-lg bg-green-50 mt-6">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-2">{organizationStructure.staff.length}+</div>
                  <div className="text-gray-600">Tenaga Kependidikan</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Chart */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Bagan Organisasi</h2>
            <p className="text-gray-600">Struktur organisasi MTS Al Falah Kotabaru Karawang</p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="relative bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-lg">
              <Image
                src="/placeholder.svg?height=600&width=800"
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
