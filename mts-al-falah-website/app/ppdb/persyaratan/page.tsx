import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  Download,
  CheckCircle,
  AlertCircle,
  CreditCard,
  Clock,
  User,
  Heart,
  Camera,
  GraduationCap,
  Banknote,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"
import Link from "next/link"

export default function PersyaratanPage() {
  const documentCategories = [
    {
      title: "Dokumen Akademik",
      icon: GraduationCap,
      color: "bg-blue-100 text-blue-600",
      documents: [
        "Fotokopi Ijazah SD/MI yang telah dilegalisir (3 lembar)",
        "Fotokopi SKHUN SD/MI yang telah dilegalisir (3 lembar)",
        "Fotokopi Rapor Kelas 6 Semester 1 dan 2 (2 lembar)",
        "Surat Keterangan Kelakuan Baik dari SD/MI asal",
      ],
    },
    {
      title: "Dokumen Identitas",
      icon: User,
      color: "bg-green-100 text-green-600",
      documents: [
        "Fotokopi Akta Kelahiran (2 lembar)",
        "Fotokopi Kartu Keluarga (2 lembar)",
        "Fotokopi KTP Orang Tua/Wali (2 lembar)",
        "Fotokopi Kartu NISN (jika ada)",
      ],
    },
    {
      title: "Dokumen Kesehatan",
      icon: Heart,
      color: "bg-red-100 text-red-600",
      documents: [
        "Surat Keterangan Sehat dari Dokter",
        "Fotokopi Kartu Imunisasi/KMS (jika ada)",
        "Surat Keterangan Bebas Narkoba (untuk kelas tertentu)",
        "Surat Keterangan Tidak Buta Warna (untuk jurusan tertentu)",
      ],
    },
    {
      title: "Foto dan Dokumen Tambahan",
      icon: Camera,
      color: "bg-purple-100 text-purple-600",
      documents: [
        "Pas foto 3x4 (6 lembar) background merah",
        "Pas foto 2x3 (4 lembar) background biru",
        "Fotokopi Piagam/Sertifikat Prestasi (jika ada)",
        "Surat Pernyataan bermaterai 10.000 (format dari sekolah)",
      ],
    },
  ]

  const feeComponents = [
    {
      category: "Biaya Pendaftaran",
      amount: "Rp 100.000",
      status: "Wajib",
      description: "Biaya administrasi pendaftaran dan seleksi",
      color: "bg-blue-50 border-blue-200",
    },
    {
      category: "Uang Pangkal",
      amount: "Rp 2.500.000",
      status: "Wajib",
      description: "Dibayar saat daftar ulang setelah diterima",
      color: "bg-green-50 border-green-200",
    },
    {
      category: "SPP Bulanan",
      amount: "Rp 350.000",
      status: "Wajib",
      description: "Biaya pendidikan per bulan",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      category: "Seragam & Perlengkapan",
      amount: "Rp 800.000",
      status: "Wajib",
      description: "Seragam lengkap dan perlengkapan sekolah",
      color: "bg-purple-50 border-purple-200",
    },
    {
      category: "Kegiatan Ekstrakurikuler",
      amount: "Rp 200.000",
      status: "Opsional",
      description: "Biaya kegiatan ekstrakurikuler per semester",
      color: "bg-gray-50 border-gray-200",
    },
    {
      category: "Program Tahfidz",
      amount: "Rp 150.000",
      status: "Opsional",
      description: "Program khusus menghafal Al-Quran",
      color: "bg-indigo-50 border-indigo-200",
    },
  ]

  const registrationSteps = [
    {
      step: 1,
      title: "Persiapan Dokumen",
      duration: "1-2 hari",
      activities: [
        "Kumpulkan semua dokumen yang diperlukan",
        "Legalisir dokumen akademik di sekolah asal",
        "Siapkan pas foto sesuai ketentuan",
        "Isi formulir pendaftaran",
      ],
    },
    {
      step: 2,
      title: "Pembayaran Biaya Pendaftaran",
      duration: "1 hari",
      activities: [
        "Transfer biaya pendaftaran ke rekening sekolah",
        "Simpan bukti transfer dengan baik",
        "Konfirmasi pembayaran via WhatsApp",
        "Tunggu konfirmasi dari panitia PPDB",
      ],
    },
    {
      step: 3,
      title: "Penyerahan Berkas",
      duration: "1 hari",
      activities: [
        "Datang ke sekolah sesuai jadwal",
        "Serahkan berkas lengkap ke panitia",
        "Verifikasi dokumen asli",
        "Terima kartu peserta tes",
      ],
    },
    {
      step: 4,
      title: "Mengikuti Tes Seleksi",
      duration: "1 hari",
      activities: [
        "Datang 30 menit sebelum tes dimulai",
        "Bawa kartu peserta dan alat tulis",
        "Ikuti tes tulis dan wawancara",
        "Tunggu pengumuman hasil",
      ],
    },
    {
      step: 5,
      title: "Daftar Ulang",
      duration: "3 hari",
      activities: [
        "Cek pengumuman hasil seleksi",
        "Bayar uang pangkal jika diterima",
        "Serahkan dokumen tambahan",
        "Terima seragam dan perlengkapan",
      ],
    },
    {
      step: 6,
      title: "Orientasi Siswa Baru",
      duration: "3 hari",
      activities: [
        "Ikuti masa orientasi siswa (MOS)",
        "Kenali lingkungan sekolah",
        "Bertemu dengan guru dan teman baru",
        "Mulai kegiatan pembelajaran",
      ],
    },
  ]

  const paymentMethods = [
    {
      method: "Transfer Bank",
      details: [
        "Bank BRI: 1234-5678-9012-3456",
        "Bank BNI: 9876-5432-1098-7654",
        "Bank Mandiri: 5555-4444-3333-2222",
        "a.n. MTS Al Falah Kotabaru",
      ],
    },
    {
      method: "Pembayaran Tunai",
      details: [
        "Langsung ke Tata Usaha sekolah",
        "Jam kerja: 08:00 - 15:00 WIB",
        "Hari kerja: Senin - Sabtu",
        "Bawa bukti identitas",
      ],
    },
  ]

  const downloadFiles = [
    {
      title: "Formulir Pendaftaran",
      description: "Formulir pendaftaran yang harus diisi lengkap",
      filename: "formulir-pendaftaran.pdf",
      size: "2.1 MB",
    },
    {
      title: "Brosur PPDB 2024",
      description: "Informasi lengkap tentang PPDB MTS Al Falah",
      filename: "brosur-ppdb-2024.pdf",
      size: "5.8 MB",
    },
    {
      title: "Surat Pernyataan",
      description: "Format surat pernyataan bermaterai",
      filename: "surat-pernyataan.pdf",
      size: "1.2 MB",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">PPDB 2024/2025</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Persyaratan Pendaftaran</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Informasi lengkap tentang persyaratan, biaya, dan prosedur pendaftaran siswa baru MTS Al Falah Kotabaru
              Karawang
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Link href="#documents">Lihat Dokumen</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                <Link href="#fees">Lihat Biaya</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Document Requirements */}
      <section id="documents" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Persyaratan Dokumen</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dokumen yang harus disiapkan dan diserahkan saat pendaftaran
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {documentCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-full ${category.color}`}>
                      <category.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.documents.map((doc, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{doc}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Important Notes */}
          <div className="mt-12">
            <Card className="border-0 shadow-lg bg-yellow-50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-6 w-6 text-yellow-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-yellow-800 mb-2">Catatan Penting:</h3>
                    <ul className="space-y-1 text-yellow-700 text-sm">
                      <li>• Semua dokumen harus dalam kondisi baik dan jelas terbaca</li>
                      <li>• Dokumen yang rusak atau tidak jelas dapat menyebabkan pendaftaran ditolak</li>
                      <li>• Legalisir dokumen harus dari instansi yang berwenang</li>
                      <li>• Pas foto harus terbaru (maksimal 6 bulan)</li>
                      <li>• Dokumen asli wajib dibawa saat verifikasi</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section id="fees" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Rincian Biaya</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Informasi lengkap tentang biaya pendidikan di MTS Al Falah
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {feeComponents.map((fee, index) => (
              <Card key={index} className={`border-2 ${fee.color} hover:shadow-lg transition-shadow`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{fee.category}</h3>
                      <p className="text-2xl font-bold text-blue-600 mb-2">{fee.amount}</p>
                    </div>
                    <Badge className={fee.status === "Wajib" ? "bg-red-100 text-red-800" : "bg-gray-100 text-gray-800"}>
                      {fee.status}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm">{fee.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Payment Methods */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {paymentMethods.map((method, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="h-6 w-6 text-blue-600" />
                    <span>{method.method}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {method.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-gray-700 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Payment Policy */}
          <div className="mt-8">
            <Card className="border-0 shadow-lg bg-blue-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-blue-800 mb-4 flex items-center">
                  <Banknote className="h-5 w-5 mr-2" />
                  Kebijakan Pembayaran
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-blue-700 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">Cicilan:</h4>
                    <ul className="space-y-1">
                      <li>• Uang pangkal dapat dicicil 2x</li>
                      <li>• Cicilan pertama saat daftar ulang</li>
                      <li>• Cicilan kedua maksimal 1 bulan</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Ketentuan:</h4>
                    <ul className="space-y-1">
                      <li>• Biaya pendaftaran tidak dapat dikembalikan</li>
                      <li>• SPP dibayar setiap tanggal 10</li>
                      <li>• Denda keterlambatan Rp 10.000/hari</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Procedure */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Prosedur Pendaftaran</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Langkah-langkah detail untuk mendaftar sebagai siswa baru</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {registrationSteps.map((step, index) => (
                <div key={step.step} className="relative">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <Card className="border-0 shadow-lg">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                            <div className="flex items-center space-x-2 text-blue-600">
                              <Clock className="h-4 w-4" />
                              <span className="text-sm font-semibold">{step.duration}</span>
                            </div>
                          </div>
                          <div className="grid md:grid-cols-2 gap-3">
                            {step.activities.map((activity, idx) => (
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
                  {index < registrationSteps.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-8 bg-gray-300"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Download Formulir</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Unduh formulir dan dokumen yang diperlukan untuk pendaftaran
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            {downloadFiles.map((file, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{file.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{file.description}</p>
                  <div className="text-xs text-gray-500 mb-4">
                    {file.filename} • {file.size}
                  </div>
                  <Button asChild className="w-full">
                    <Link href={`/ppdb/${file.filename}`} target="_blank">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Butuh Bantuan?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hubungi kami jika ada pertanyaan tentang persyaratan pendaftaran
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
                        <h3 className="font-semibold text-gray-900">Alamat</h3>
                        <p className="text-gray-600">Jl. Raya Kotabaru No. 123, Kotabaru, Karawang</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-green-100 rounded-full">
                        <Phone className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Telepon</h3>
                        <p className="text-gray-600">(0267) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-purple-100 rounded-full">
                        <Mail className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Email</h3>
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
                      <Link href="/ppdb/jadwal">
                        <Clock className="mr-2 h-5 w-5" />
                        Lihat Jadwal
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="w-full bg-transparent">
                      <Link href="/ppdb/informasi">
                        <FileText className="mr-2 h-5 w-5" />
                        Info Lengkap
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
