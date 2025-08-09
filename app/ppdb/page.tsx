import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, FileText, Users, CheckCircle, Clock, MapPin, Phone, Mail, Download, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function PPDBPage() {
  const registrationSteps = [
    {
      step: 1,
      title: "Persiapan Dokumen",
      description: "Siapkan semua dokumen yang diperlukan sesuai persyaratan",
      status: "active",
    },
    {
      step: 2,
      title: "Pendaftaran Online",
      description: "Isi formulir pendaftaran online melalui website sekolah",
      status: "pending",
    },
    {
      step: 3,
      title: "Verifikasi Dokumen",
      description: "Datang ke sekolah untuk verifikasi dokumen asli",
      status: "pending",
    },
    {
      step: 4,
      title: "Tes Seleksi",
      description: "Mengikuti tes tulis dan wawancara",
      status: "pending",
    },
    {
      step: 5,
      title: "Pengumuman",
      description: "Pengumuman hasil seleksi dan daftar ulang",
      status: "pending",
    },
  ]

  const schedule = [
    { phase: "Pendaftaran Online", date: "1 Januari - 28 Februari 2024", status: "open" },
    { phase: "Verifikasi Dokumen", date: "1 Maret - 15 Maret 2024", status: "upcoming" },
    { phase: "Tes Seleksi", date: "20 Maret - 25 Maret 2024", status: "upcoming" },
    { phase: "Pengumuman", date: "30 Maret 2024", status: "upcoming" },
    { phase: "Daftar Ulang", date: "1 April - 15 April 2024", status: "upcoming" },
  ]

  const requirements = [
    "Fotokopi Ijazah SD/MI yang telah dilegalisir (3 lembar)",
    "Fotokopi SKHUN SD/MI yang telah dilegalisir (3 lembar)",
    "Fotokopi Akta Kelahiran (2 lembar)",
    "Fotokopi Kartu Keluarga (2 lembar)",
    "Fotokopi KTP Orang Tua/Wali (2 lembar)",
    "Pas foto 3x4 (6 lembar) dan 2x3 (4 lembar)",
    "Surat Keterangan Sehat dari Dokter",
    "Surat Keterangan Kelakuan Baik dari SD/MI asal",
    "Fotokopi Piagam/Sertifikat Prestasi (jika ada)",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">Tahun Ajaran 2024/2025</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Penerimaan Peserta Didik Baru</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Bergabunglah dengan MTS Al Falah Kotabaru Karawang dan wujudkan masa depan gemilang dengan pendidikan
              Islam yang berkualitas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Link href="#requirements">Lihat Persyaratan</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                <Link href="#info">Lihat Informasi</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 bg-yellow-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-3 text-yellow-800">
            <AlertCircle className="h-6 w-6" />
            <div className="text-center">
              <span className="font-semibold">Pendaftaran Dibuka!</span>
              <span className="ml-2">Periode pendaftaran: 1 Januari - 28 Februari 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Steps */}
      <section id="info" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Alur Pendaftaran</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ikuti langkah-langkah berikut untuk mendaftar sebagai siswa baru MTS Al Falah
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {registrationSteps.map((step, index) => (
                <div key={step.step} className="flex items-start space-x-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${
                      step.status === "active" ? "bg-blue-600" : "bg-gray-400"
                    }`}
                  >
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <Card className={`${step.status === "active" ? "border-blue-600 shadow-lg" : "border-gray-200"}`}>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  {index < registrationSteps.length - 1 && (
                    <div className="absolute left-6 mt-12 w-0.5 h-8 bg-gray-300"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Jadwal PPDB 2024</h2>
            <p className="text-gray-600">Jadwal lengkap penerimaan peserta didik baru</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {schedule.map((item, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-full ${item.status === "open" ? "bg-green-100" : "bg-gray-100"}`}>
                          <Calendar
                            className={`h-6 w-6 ${item.status === "open" ? "text-green-600" : "text-gray-600"}`}
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{item.phase}</h3>
                          <p className="text-gray-600">{item.date}</p>
                        </div>
                      </div>
                      <Badge
                        className={item.status === "open" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}
                      >
                        {item.status === "open" ? "Dibuka" : "Akan Datang"}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section id="requirements" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Persyaratan Pendaftaran</h2>
            <p className="text-gray-600">Dokumen yang harus disiapkan untuk mendaftar</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-6 w-6 text-blue-600" />
                  <span>Dokumen yang Diperlukan</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{requirement}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div className="text-blue-800">
                      <p className="font-semibold mb-1">Catatan Penting:</p>
                      <p className="text-sm">
                        Semua dokumen harus dalam kondisi baik dan jelas. Dokumen yang rusak atau tidak jelas dapat
                        menyebabkan pendaftaran ditolak.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & Registration */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Informasi Kontak</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Alamat Sekolah</h3>
                    <p className="text-gray-600">
                      Jl. Raya Kotabaru No. 123
                      <br />
                      Kotabaru, Karawang, Jawa Barat 41374
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-green-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Telepon</h3>
                    <p className="text-gray-600">(0267) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-purple-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">ppdb@mtsalfalah-kotabaru.sch.id</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-yellow-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Jam Layanan PPDB</h3>
                    <p className="text-gray-600">
                      Senin - Jumat: 08:00 - 15:00 WIB
                      <br />
                      Sabtu: 08:00 - 12:00 WIB
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration CTA */}
            <div>
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-green-50">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Siap Mendaftar?</h2>
                  <p className="text-gray-600 mb-6">
                    Jangan lewatkan kesempatan untuk bergabung dengan MTS Al Falah. Daftar sekarang dan wujudkan masa
                    depan gemilang!
                  </p>
                  <div className="space-y-4">
                    <Button asChild size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                      <Link href="/kontak">
                        <Users className="mr-2 h-5 w-5" />
                        Hubungi Kami
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="w-full bg-transparent">
                      <Link href="/ppdb/brosur.pdf" target="_blank">
                        <Download className="mr-2 h-5 w-5" />
                        Download Brosur
                      </Link>
                    </Button>
                  </div>
                  <div className="mt-6 p-4 bg-white rounded-lg">
                    <p className="text-sm text-gray-600 text-center">
                      <strong>Biaya Pendaftaran:</strong> Rp 100.000
                      <br />
                      <strong>Kuota:</strong> 120 siswa
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
