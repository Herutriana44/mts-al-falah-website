import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Calendar, GraduationCap, Award, Target, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function KepalaSekolahPage() {
  const principalData = {
    name: "Drs. H. Ahmad Fauzi, M.Pd.I",
    position: "Kepala Madrasah MTS Al Falah Kotabaru Karawang",
    photo: "/placeholder.svg?height=400&width=400",
    contact: {
      email: "kepala@mtsalfalah-kotabaru.sch.id",
      phone: "(0267) 123-4567",
      office: "Ruang Kepala Sekolah, Lantai 2",
    },
    personal: {
      birthPlace: "Karawang",
      birthDate: "15 Agustus 1975",
      address: "Jl. Merdeka No. 45, Karawang",
      religion: "Islam",
      maritalStatus: "Menikah (3 anak)",
    },
    education: [
      {
        degree: "S2 Pendidikan Islam",
        institution: "UIN Sunan Gunung Djati Bandung",
        year: "2010-2012",
        achievement: "Cum Laude",
      },
      {
        degree: "S1 Pendidikan Agama Islam",
        institution: "IAIN Sunan Gunung Djati Bandung",
        year: "1995-1999",
        achievement: "IPK 3.65",
      },
      {
        degree: "MA (Madrasah Aliyah)",
        institution: "MA Al-Hikmah Karawang",
        year: "1992-1995",
        achievement: "Juara 1 Paralel",
      },
    ],
    experience: [
      {
        position: "Kepala Madrasah MTS Al Falah",
        period: "2018 - Sekarang",
        description:
          "Memimpin dan mengembangkan MTS Al Falah menjadi madrasah terakreditasi A dengan berbagai prestasi.",
      },
      {
        position: "Wakil Kepala Kurikulum MTS Al Falah",
        period: "2015 - 2018",
        description: "Mengembangkan kurikulum terintegrasi dan meningkatkan kualitas pembelajaran.",
      },
      {
        position: "Guru PAI MTS Al Falah",
        period: "2005 - 2015",
        description: "Mengajar Pendidikan Agama Islam dan membina kegiatan keagamaan siswa.",
      },
      {
        position: "Guru PAI SMP Negeri 2 Karawang",
        period: "1999 - 2005",
        description: "Mengajar di sekolah negeri dan aktif dalam kegiatan MGMP PAI.",
      },
    ],
    achievements: [
      "Kepala Sekolah Berprestasi Tingkat Kabupaten Karawang (2022)",
      "Penghargaan Tokoh Pendidikan Islam Karawang (2021)",
      "Sertifikat Kepala Sekolah Profesional Kemenag RI (2018)",
      "Juara 1 Lomba Karya Tulis Ilmiah Pendidikan Islam (2020)",
      "Pembina Terbaik Olimpiade Sains Madrasah (2019)",
    ],
    vision:
      "Mewujudkan MTS Al Falah sebagai madrasah unggul yang menghasilkan lulusan berakhlak mulia, berprestasi akademik, dan siap menghadapi tantangan global dengan tetap berpegang teguh pada nilai-nilai Islam.",
    programs: [
      {
        title: "Program Tahfidz Al-Quran",
        description: "Mengembangkan program hafalan Al-Quran untuk semua siswa dengan target minimal 3 juz.",
      },
      {
        title: "Digitalisasi Pembelajaran",
        description: "Implementasi teknologi dalam pembelajaran untuk meningkatkan kualitas pendidikan.",
      },
      {
        title: "Pengembangan Karakter Islami",
        description: "Penguatan pendidikan karakter berbasis nilai-nilai Islam dalam kehidupan sehari-hari.",
      },
      {
        title: "Peningkatan Prestasi Akademik",
        description: "Program intensif untuk meningkatkan prestasi siswa dalam berbagai kompetisi.",
      },
    ],
    message:
      "Assalamu'alaikum warahmatullahi wabarakatuh. Sebagai Kepala Madrasah MTS Al Falah, saya berkomitmen penuh untuk memberikan pendidikan Islam yang berkualitas tinggi. Kami tidak hanya fokus pada prestasi akademik, tetapi juga pembentukan karakter Islami yang kuat. Dengan dukungan seluruh civitas akademika, orang tua, dan masyarakat, kami yakin dapat mencetak generasi yang berakhlak mulia, cerdas, dan siap menghadapi tantangan masa depan. Mari bersama-sama membangun masa depan yang gemilang melalui pendidikan Islam yang berkualitas.",
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">Profil Kepala Sekolah</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Kepala Madrasah</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Pemimpin yang berdedikasi untuk kemajuan pendidikan Islam di MTS Al Falah
            </p>
          </div>
        </div>
      </section>

      {/* Profile Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Photo */}
                  <div className="text-center">
                    <div className="relative w-64 h-64 mx-auto mb-6">
                      <Image
                        src={principalData.photo || "/placeholder.svg"}
                        alt={principalData.name}
                        fill
                        className="object-cover rounded-full border-4 border-white shadow-lg"
                      />
                    </div>
                    <Badge className="bg-blue-600 text-white text-lg px-6 py-2 mb-4">{principalData.position}</Badge>
                  </div>

                  {/* Basic Info */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">{principalData.name}</h2>
                      <p className="text-lg text-gray-600 mb-6">{principalData.position}</p>
                    </div>

                    {/* Contact Info */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-blue-600" />
                        <span className="text-gray-700">{principalData.contact.email}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-green-600" />
                        <span className="text-gray-700">{principalData.contact.phone}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-purple-600" />
                        <span className="text-gray-700">{principalData.contact.office}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Calendar className="h-5 w-5 text-orange-600" />
                        <span className="text-gray-700">Senin - Jumat, 08:00 - 16:00</span>
                      </div>
                    </div>

                    {/* Personal Info */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Data Pribadi</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <span className="text-gray-600">Tempat, Tanggal Lahir:</span>
                          <div className="font-medium">
                            {principalData.personal.birthPlace}, {principalData.personal.birthDate}
                          </div>
                        </div>
                        <div>
                          <span className="text-gray-600">Alamat:</span>
                          <div className="font-medium">{principalData.personal.address}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Agama:</span>
                          <div className="font-medium">{principalData.personal.religion}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Status:</span>
                          <div className="font-medium">{principalData.personal.maritalStatus}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Background */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Riwayat Pendidikan</h2>
              <p className="text-gray-600">Latar belakang pendidikan yang solid dalam bidang pendidikan Islam</p>
            </div>

            <div className="space-y-6">
              {principalData.education.map((edu, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <GraduationCap className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                        <p className="text-gray-700 mb-1">{edu.institution}</p>
                        <div className="flex items-center space-x-4">
                          <span className="text-gray-500">{edu.year}</span>
                          <Badge className="bg-green-100 text-green-800">{edu.achievement}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Pengalaman Kerja</h2>
              <p className="text-gray-600">Perjalanan karir dalam dunia pendidikan selama lebih dari 20 tahun</p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

              <div className="space-y-8">
                {principalData.experience.map((exp, index) => (
                  <div key={index} className="relative flex items-start space-x-6">
                    <div className="bg-blue-600 w-4 h-4 rounded-full border-4 border-white shadow-lg z-10"></div>
                    <Card className="flex-1 border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-3">
                          <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                          <Badge className="bg-blue-100 text-blue-800">{exp.period}</Badge>
                        </div>
                        <p className="text-gray-600">{exp.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Prestasi & Penghargaan</h2>
              <p className="text-gray-600">Berbagai penghargaan yang diterima dalam bidang pendidikan</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {principalData.achievements.map((achievement, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="bg-yellow-100 p-3 rounded-full">
                      <Award className="h-6 w-6 text-yellow-600" />
                    </div>
                    <span className="text-gray-900 font-medium">{achievement}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Vision */}
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Visi Kepemimpinan</h2>
                  <p className="text-gray-600">Arah dan tujuan kepemimpinan di MTS Al Falah</p>
                </div>
                <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-green-50">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <Target className="h-8 w-8 text-blue-600 mt-1" />
                      <p className="text-gray-700 text-lg leading-relaxed italic">{principalData.vision}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Programs */}
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Program Unggulan</h2>
                  <p className="text-gray-600">Program-program inovatif yang dikembangkan</p>
                </div>
                <div className="space-y-4">
                  {principalData.programs.map((program, index) => (
                    <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{program.title}</h3>
                        <p className="text-gray-600">{program.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Message */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Pesan Kepala Madrasah</h2>
              <p className="text-gray-600">Sambutan dan harapan untuk seluruh civitas akademika</p>
            </div>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <Quote className="h-12 w-12 text-blue-600 flex-shrink-0 mt-2" />
                  <div>
                    <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                      {principalData.message}
                    </blockquote>
                    <div className="flex items-center space-x-4">
                      <div className="relative w-16 h-16">
                        <Image
                          src={principalData.photo || "/placeholder.svg"}
                          alt={principalData.name}
                          fill
                          className="object-cover rounded-full border-2 border-gray-200"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{principalData.name}</div>
                        <div className="text-gray-600">Kepala Madrasah MTS Al Falah</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Bergabunglah dengan Visi Kami</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Mari bersama-sama membangun masa depan pendidikan Islam yang gemilang di MTS Al Falah
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
              <Link href="/kontak">Hubungi Kami</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
