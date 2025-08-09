import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  FileText,
  CheckCircle,
  AlertCircle,
  Play,
  Pause,
  CheckCircle2,
  Phone,
  Mail,
  Download,
  User,
  BookOpen,
  PenTool,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"

export default function JadwalPage() {
  const currentDate = new Date()

  const ppdbTimeline = [
    {
      phase: "Sosialisasi PPDB",
      startDate: "2023-12-01",
      endDate: "2023-12-31",
      description: "Sosialisasi program PPDB ke sekolah-sekolah dasar",
      activities: ["Kunjungan ke SD/MI", "Penyebaran brosur", "Media sosial campaign"],
      status: "completed",
    },
    {
      phase: "Pendaftaran Online",
      startDate: "2024-01-01",
      endDate: "2024-02-28",
      description: "Periode pendaftaran dan pengumpulan berkas",
      activities: ["Pengisian formulir", "Upload dokumen", "Pembayaran biaya pendaftaran"],
      status: "active",
    },
    {
      phase: "Verifikasi Dokumen",
      startDate: "2024-03-01",
      endDate: "2024-03-15",
      description: "Verifikasi kelengkapan dan keabsahan dokumen",
      activities: ["Pengecekan berkas", "Verifikasi dokumen asli", "Konfirmasi data"],
      status: "upcoming",
    },
    {
      phase: "Tes Seleksi",
      startDate: "2024-03-20",
      endDate: "2024-03-25",
      description: "Pelaksanaan tes tulis dan wawancara",
      activities: ["Tes akademik", "Tes baca Al-Quran", "Wawancara"],
      status: "upcoming",
    },
    {
      phase: "Pengumuman Hasil",
      startDate: "2024-03-30",
      endDate: "2024-03-30",
      description: "Pengumuman hasil seleksi dan daftar siswa diterima",
      activities: ["Publikasi hasil", "Notifikasi ke peserta", "Batas waktu konfirmasi"],
      status: "upcoming",
    },
    {
      phase: "Daftar Ulang",
      startDate: "2024-04-01",
      endDate: "2024-04-15",
      description: "Proses daftar ulang siswa yang diterima",
      activities: ["Pembayaran uang pangkal", "Pengambilan seragam", "Orientasi orang tua"],
      status: "upcoming",
    },
  ]

  const testSchedule = [
    {
      date: "20 Maret 2024",
      day: "Rabu",
      sessions: [
        {
          time: "08:00 - 10:00",
          test: "Tes Akademik (Matematika & IPA)",
          room: "Ruang 1-6",
          participants: "Peserta A-M",
        },
        {
          time: "10:30 - 12:30",
          test: "Tes Akademik (Bahasa Indonesia & IPS)",
          room: "Ruang 1-6",
          participants: "Peserta A-M",
        },
        {
          time: "13:30 - 15:30",
          test: "Tes Akademik (Matematika & IPA)",
          room: "Ruang 7-12",
          participants: "Peserta N-Z",
        },
      ],
    },
    {
      date: "21 Maret 2024",
      day: "Kamis",
      sessions: [
        {
          time: "08:00 - 10:00",
          test: "Tes Baca Al-Quran",
          room: "Masjid Sekolah",
          participants: "Peserta A-M",
        },
        {
          time: "10:30 - 12:30",
          test: "Wawancara",
          room: "Ruang Guru",
          participants: "Peserta A-M",
        },
        {
          time: "13:30 - 15:30",
          test: "Tes Baca Al-Quran",
          room: "Masjid Sekolah",
          participants: "Peserta N-Z",
        },
      ],
    },
    {
      date: "22 Maret 2024",
      day: "Jumat",
      sessions: [
        {
          time: "08:00 - 12:00",
          test: "Wawancara (Lanjutan)",
          room: "Ruang Guru",
          participants: "Peserta N-Z",
        },
        {
          time: "13:30 - 15:30",
          test: "Tes Susulan",
          room: "Ruang 13",
          participants: "Peserta Susulan",
        },
      ],
    },
  ]

  const importantDates = [
    {
      date: "28 Februari 2024",
      title: "Batas Akhir Pendaftaran",
      description: "Penutupan pendaftaran online dan offline",
      category: "deadline",
      color: "bg-red-100 text-red-800",
    },
    {
      date: "15 Maret 2024",
      title: "Rapat Koordinasi Panitia",
      description: "Persiapan pelaksanaan tes seleksi",
      category: "meeting",
      color: "bg-blue-100 text-blue-800",
    },
    {
      date: "19 Maret 2024",
      title: "Technical Meeting",
      description: "Pengarahan peserta tes dan orang tua",
      category: "meeting",
      color: "bg-blue-100 text-blue-800",
    },
    {
      date: "30 Maret 2024",
      title: "Pengumuman Hasil Seleksi",
      description: "Publikasi daftar siswa yang diterima",
      category: "announcement",
      color: "bg-green-100 text-green-800",
    },
    {
      date: "15 April 2024",
      title: "Batas Akhir Daftar Ulang",
      description: "Deadline konfirmasi dan pembayaran",
      category: "deadline",
      color: "bg-red-100 text-red-800",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-5 w-5 text-green-600" />
      case "active":
        return <Play className="h-5 w-5 text-blue-600" />
      case "upcoming":
        return <Pause className="h-5 w-5 text-gray-400" />
      default:
        return <Clock className="h-5 w-5 text-gray-400" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Selesai"
      case "active":
        return "Berlangsung"
      case "upcoming":
        return "Akan Datang"
      default:
        return "Belum Dimulai"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "active":
        return "bg-blue-100 text-blue-800"
      case "upcoming":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">PPDB 2024/2025</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Jadwal Seleksi</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Timeline lengkap dan jadwal detail pelaksanaan Penerimaan Peserta Didik Baru MTS Al Falah Kotabaru
              Karawang
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Link href="#timeline">Lihat Timeline</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                <Link href="#test-schedule">Jadwal Tes</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PPDB Timeline */}
      <section id="timeline" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Timeline PPDB 2024</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jadwal lengkap pelaksanaan PPDB dari sosialisasi hingga daftar ulang
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {ppdbTimeline.map((phase, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          phase.status === "completed"
                            ? "bg-green-600"
                            : phase.status === "active"
                              ? "bg-blue-600"
                              : "bg-gray-400"
                        }`}
                      >
                        {getStatusIcon(phase.status)}
                      </div>
                    </div>
                    <div className="flex-1">
                      <Card
                        className={`border-2 ${
                          phase.status === "active" ? "border-blue-600 shadow-lg" : "border-gray-200"
                        }`}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold text-gray-900">{phase.phase}</h3>
                            <Badge className={getStatusColor(phase.status)}>{getStatusText(phase.status)}</Badge>
                          </div>
                          <div className="flex items-center space-x-4 mb-4 text-gray-600">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span className="text-sm">
                                {new Date(phase.startDate).toLocaleDateString("id-ID", {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                })}
                                {phase.startDate !== phase.endDate && (
                                  <>
                                    {" "}
                                    -{" "}
                                    {new Date(phase.endDate).toLocaleDateString("id-ID", {
                                      day: "numeric",
                                      month: "long",
                                      year: "numeric",
                                    })}
                                  </>
                                )}
                              </span>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-4">{phase.description}</p>
                          <div className="grid md:grid-cols-3 gap-3">
                            {phase.activities.map((activity, idx) => (
                              <div key={idx} className="flex items-start space-x-2">
                                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700 text-sm">{activity}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  {index < ppdbTimeline.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-8 bg-gray-300"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Test Schedule */}
      <section id="test-schedule" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Jadwal Tes Seleksi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Jadwal detail pelaksanaan tes seleksi per hari dan sesi</p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {testSchedule.map((schedule, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader className="bg-blue-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl text-gray-900">{schedule.date}</CardTitle>
                      <p className="text-blue-600 font-semibold">{schedule.day}</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-blue-100 text-blue-800">{schedule.sessions.length} Sesi</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-gray-200">
                    {schedule.sessions.map((session, idx) => (
                      <div key={idx} className="p-6 hover:bg-gray-50 transition-colors">
                        <div className="grid md:grid-cols-4 gap-4 items-center">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-green-100 rounded-full">
                              <Clock className="h-5 w-5 text-green-600" />
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">{session.time}</div>
                              <div className="text-sm text-gray-500">WIB</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-purple-100 rounded-full">
                              <BookOpen className="h-5 w-5 text-purple-600" />
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">{session.test}</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-yellow-100 rounded-full">
                              <MapPin className="h-5 w-5 text-yellow-600" />
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">{session.room}</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-red-100 rounded-full">
                              <Users className="h-5 w-5 text-red-600" />
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">{session.participants}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tanggal Penting</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tanggal-tanggal penting yang perlu diperhatikan selama proses PPDB
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {importantDates.map((date, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gray-100 rounded-full">
                      <Calendar className="h-6 w-6 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-gray-900">{date.title}</h3>
                        <Badge className={date.color}>
                          {date.category === "deadline"
                            ? "Deadline"
                            : date.category === "meeting"
                              ? "Meeting"
                              : "Pengumuman"}
                        </Badge>
                      </div>
                      <p className="text-blue-600 font-semibold mb-2">
                        {new Date(date.date).toLocaleDateString("id-ID", {
                          weekday: "long",
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                      <p className="text-gray-600 text-sm">{date.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Test Instructions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Petunjuk Pelaksanaan Tes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Informasi penting yang harus diperhatikan saat mengikuti tes seleksi
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Preparation */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-6 w-6 text-blue-600" />
                  <span>Persiapan Peserta</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700 text-sm">Datang 30 menit sebelum tes dimulai</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700 text-sm">Membawa kartu peserta dan identitas diri</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700 text-sm">
                      Menyiapkan alat tulis (pensil 2B, penghapus, penggaris)
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700 text-sm">Berpakaian rapi dan sopan</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700 text-sm">Membawa Al-Quran untuk tes baca</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Rules */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                  <span>Aturan Tes</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
                    <span className="text-gray-700 text-sm">Dilarang membawa HP atau alat elektronik</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
                    <span className="text-gray-700 text-sm">Tidak diperkenankan bekerjasama atau menyontek</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
                    <span className="text-gray-700 text-sm">Mengikuti instruksi pengawas dengan baik</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
                    <span className="text-gray-700 text-sm">Menjaga ketenangan selama tes berlangsung</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
                    <span className="text-gray-700 text-sm">Peserta yang terlambat tidak diperkenankan masuk</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Akses Cepat</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Akses cepat untuk informasi dan layanan PPDB</p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Cek Status</h3>
                <p className="text-gray-600 text-sm mb-4">Cek status pendaftaran Anda</p>
                <Button asChild size="sm" className="w-full">
                  <Link href="/ppdb/status">Cek Status</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Kartu Peserta</h3>
                <p className="text-gray-600 text-sm mb-4">Download kartu peserta tes</p>
                <Button asChild size="sm" variant="outline" className="w-full bg-transparent">
                  <Link href="/ppdb/kartu-peserta">Download</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Bantuan</h3>
                <p className="text-gray-600 text-sm mb-4">Hubungi tim support PPDB</p>
                <Button asChild size="sm" variant="outline" className="w-full bg-transparent">
                  <Link href="/kontak">Hubungi</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PenTool className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Persyaratan</h3>
                <p className="text-gray-600 text-sm mb-4">Lihat persyaratan lengkap</p>
                <Button asChild size="sm" variant="outline" className="w-full bg-transparent">
                  <Link href="/ppdb/persyaratan">Lihat Detail</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Informasi Kontak PPDB</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hubungi kami jika ada pertanyaan tentang jadwal atau pelaksanaan tes
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-green-50">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-100 rounded-full">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Lokasi Tes</h3>
                        <p className="text-gray-600">
                          MTS Al Falah Kotabaru
                          <br />
                          Jl. Raya Kotabaru No. 123, Karawang
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-green-100 rounded-full">
                        <Phone className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Telepon PPDB</h3>
                        <p className="text-gray-600">(0267) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-purple-100 rounded-full">
                        <Mail className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Email PPDB</h3>
                        <p className="text-gray-600">ppdb@mtsalfalah-kotabaru.sch.id</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Button asChild size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                      <Link href="/kontak">
                        <Phone className="mr-2 h-5 w-5" />
                        Hubungi Kami
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="w-full bg-transparent">
                      <Link href="/ppdb/persyaratan">
                        <FileText className="mr-2 h-5 w-5" />
                        Lihat Persyaratan
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="w-full bg-transparent">
                      <Link href="/ppdb/informasi">
                        <User className="mr-2 h-5 w-5" />
                        Info Sekolah
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
