
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BookOpen, Users, Building, Award, Target, Eye, Heart, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProfilPage() {
  // Data dari profil_madrasah.json
  const profilMadrasah = {
    nama_madrasah: "Madrasah Tsanawiyah (MTs) Al-Falah",
    npsn: "20279226",
    alamat: "Jl. Mashudi No.2 RT.03/03, Desa Pangulah Utara, Kecamatan Kotabaru, Kabupaten Karawang, Provinsi Jawa Barat",
    no_akte_pendirian_yayasan: "AHU-0031966.AH.01.04. Tahun 2016",
    nama_yayasan: "YAPISAF (Yayasan Perguruan Agama Islam Al Falah)",
    nama_kepala: "Dra. Hj. Mahmudah",
    komite_madrasah: "Arif Rahman, S.Pd.I",
    status_bangungan: "Yayasan",
    luas_bangunan: "948 m2",
    kepemilikan_tanah: {
      tipe: "Yayasan",
      detail: [
        "a. Status Tanah (Wakaf Yayasan)",
        "b. Luas Tanah 1598 m2"
      ]
    },
    no_rekening: "0431687809 13.",
    npwPerempuan: "00.505.352.5-433.000",
    no_telPerempuan: "(0264) 315556",
    visi: "Terwujudnya Peserta Didik yang Unggul dalam IPTEK berlandaskan IMTAQ",
    misi: [
      "Menumbuhkan semangat qur'ani dalam membentuk jiwa yang berakhlakul karimah.",
      "Melaksanakan pembelajaran dan bimbingan secara efektif sehingga setiap siswa berkembang secara optimal, sesuai dengan potensi yang dimiliki.",
      "Menumbuhkan semangat keunggulan iptek dan imtaq secara intensif kepada seluruh warga sekolah.",
      "Mendorong dan membantu setiap siswa untuk mengenali potensi dirinya, sehinggadapat berkembang secara optimal.",
      "Menghasilkan lulusan yang berprestasi dan berkualitas dalam iptek dan imtaq kepada Allah SWT"
    ],
    data_pendidik_tenaga_kependidikan: {
      pendidik: {
        "Guru PNS diperbantukan Tetap": {
          "laki-laki": 0,
          "perempuan": 1,
          "jumlah": 1
        },
        "Guru Tetap Yayasan": {
          "laki-laki": 6,
          "perempuan": 11,
          "jumlah": 17
        },
        "Guru Honorer": {
          "laki-laki": 1,
          "perempuan": 1,
          "jumlah": 2
        }
      },
      tenaga_kependidikan: {
        "Staff Tata Usaha": {
          "laki-laki": 2,
          "perempuan": 1,
          "jumlah": 3
        },
        "Petugas Khusus": {
          "laki-laki": 2,
          "perempuan": 1,
          "jumlah": 3
        }
      }
    },
    data_siswa: {
      "2022/2023": {
        "kelas_7": {
          "laki-laki": 61,
          "perempuan": 65
        },
        "kelas_8": {
          "laki-laki": 58,
          "perempuan": 49
        },
        "kelas_9": {
          "laki-laki": 71,
          "perempuan": 56
        },
        "jumlah": {
          "laki-laki": 190,
          "perempuan": 170,
          "total": 360
        }
      },
      "2023/2024": {
        "kelas_7": {
          "laki-laki": 50,
          "perempuan": 53
        },
        "kelas_8": {
          "laki-laki": 61,
          "perempuan": 65
        },
        "kelas_9": {
          "laki-laki": 58,
          "perempuan": 49
        },
        "jumlah": {
          "laki-laki": 169,
          "perempuan": 167,
          "total": 336
        }
      },
      "2024/2025": {
        "kelas_7": {
          "laki-laki": 49,
          "perempuan": 55
        },
        "kelas_8": {
          "laki-laki": 59,
          "perempuan": 67
        },
        "kelas_9": {
          "laki-laki": 58,
          "perempuan": 67
        },
        "jumlah": {
          "laki-laki": 166,
          "perempuan": 189,
          "total": 355
        }
      }
    },
    list_prestasi: {
      "2024-2025": [
        {
          "prestasi": "Juara 2 MTQ Putri Tingkat KKM Rayon Jatisari",
          "tingkat": "TK. KKM RAYON"
        },
        {
          "prestasi": "Juara 2 Singer Putra Tingkat KKM Rayon Jatisari",
          "tingkat": "TK. KKM RAYON"
        },
        {
          "prestasi": "Juara 2 Futsal Tingkat KKM Rayon Jatisari",
          "tingkat": "TK. KKM RAYON"
        },
        {
          "prestasi": "Juara 1 Voli Putri Tingkat KKM Rayon Jatisari",
          "tingkat": "TK. KKM RAYON"
        },
        {
          "prestasi": "Juara 2 Tenis Meja Putri Tingkat KKM Rayon Jatisari",
          "tingkat": "TK. KKM RAYON"
        },
        {
          "prestasi": "Juara 2 Atletik Putri Tingkat KKM Rayon Jatisari",
          "tingkat": "TK. KKM RAYON"
        },
        {
          "prestasi": "Juara 3 Futsal Tingkat Kabupaten",
          "tingkat": "KKM TK. KAB"
        },
        {
          "prestasi": "Juara 3 Voli Putri Tingkat Kabupaten",
          "tingkat": "KKM TK. KAB"
        },
        {
          "prestasi": "Juara 1 Tenis Meja Putri Tingkat Kabupaten",
          "tingkat": "KKM TK. KAB"
        },
        {
          "prestasi": "Juara 2 PBB Pramuka Event nayarika",
          "tingkat": "TK. JAWA BARAT"
        },
        {
          "prestasi": "Juara Mula 1 LKBB Paskibra LACOSTAR SUBANG",
          "tingkat": "TK. JAWA BARAT"
        },
        {
          "prestasi": "Juara Bina 3 LKBB Paskibra GLOBARIS",
          "tingkat": "TK. JAWA BARAT"
        },
        {
          "prestasi": "Jura Mula 2 LKBB Paskibra KIBUYUT SUBANG",
          "tingkat": "TK. JAWA BARAT"
        },
        {
          "prestasi": "Juara Harapan Mula 1 LKBB Paskibra SAMUDJA PURWAKARTA",
          "tingkat": "TK. JAWA BARAT"
        },
        {
          "prestasi": "Juara Harapan 1 LKBB Paskibra CIPENDEUY Bandung",
          "tingkat": "TK. JAWA BARAT"
        }
      ]
    },
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

  const visionMission = {
    vision: profilMadrasah.visi,
    missions: profilMadrasah.misi,
  }

  const schoolValues = [
    {
      icon: Heart,
      title: "Akhlak Mulia",
      description: "Membentuk karakter siswa berdasarkan nilai-nilai Islam yang luhur",
    },
    {
      icon: BookOpen,
      title: "Prestasi Akademik",
      description: "Mengutamakan keunggulan dalam bidang akademik dan pengetahuan",
    },
    {
      icon: Users,
      title: "Kerjasama",
      description: "Membangun semangat gotong royong dan kerjasama yang baik",
    },
    {
      icon: Target,
      title: "Inovasi",
      description: "Mengembangkan kreativitas dan inovasi dalam pembelajaran",
    },
  ]

  // Fasilitas, guru, dan data lain bisa diambil dari profilMadrasah
  const facilities = [
    `Luas Bangunan: ${profilMadrasah.luas_bangunan}`,
    ...((profilMadrasah.kepemilikan_tanah && profilMadrasah.kepemilikan_tanah.detail) ? profilMadrasah.kepemilikan_tanah.detail : []),
    // Tambahkan fasilitas lain jika ada di JSON, misal profilMadrasah.fasilitas
    // ...(profilMadrasah.fasilitas ?? [])
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">Profil Sekolah</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Tentang MTs Al-Falah</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Mengenal lebih dekat sejarah, visi misi, dan komitmen kami dalam memberikan pendidikan Islam yang
              berkualitas
            </p>
          </div>
        </div>
      </section>

      {/* School Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Siswa MTs Al-Falah"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">25+</div>
                  <div className="text-sm">Tahun Pengalaman</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <Badge className="bg-green-100 text-green-800 mb-4">Sejarah Singkat</Badge>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Perjalanan Panjang Pendidikan Islam</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  {profilMadrasah.nama_madrasah} berlokasi di {profilMadrasah.alamat}. Madrasah ini berada di bawah naungan
                  {profilMadrasah.nama_yayasan} dengan nomor akte pendirian {profilMadrasah.no_akte_pendirian_yayasan}.
                </p>
                <p>
                  Dengan luas bangunan {profilMadrasah.luas_bangunan} dan status kepemilikan tanah {profilMadrasah.kepemilikan_tanah.tipe},
                  MTs Al-Falah terus berkomitmen memberikan pendidikan Islam yang berkualitas dengan memadukan IPTEK dan IMTAQ.
                </p>
                <p>
                  Di bawah kepemimpinan {profilMadrasah.nama_kepala} sebagai Kepala Madrasah dan {profilMadrasah.komite_madrasah}
                  sebagai Ketua Komite Madrasah, MTs Al-Falah terus berinovasi dalam menciptakan lulusan yang berakhlak mulia dan berprestasi.
                </p>
              </div>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/profil/sejarah">
                  Baca Sejarah Lengkap
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visi & Misi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Landasan filosofis yang mengarahkan setiap langkah pendidikan di MTs Al-Falah
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Vision */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Eye className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Visi</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">{visionMission.vision}</p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Target className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Misi</h3>
                </div>
                <ul className="space-y-3">
                  {visionMission.missions.map((mission, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{mission}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* School Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nilai-Nilai Sekolah</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nilai-nilai fundamental yang menjadi pedoman dalam setiap aktivitas pendidikan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {schoolValues.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-r from-blue-100 to-green-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <value.icon className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fasilitas Sekolah</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fasilitas lengkap dan modern untuk mendukung proses pembelajaran yang optimal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Building className="h-6 w-6 text-blue-600" />
                  </div>
                  <span className="text-gray-900 font-medium">{facility}</span>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="/profil/fasilitas">
                Lihat Fasilitas Lengkap
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Prestasi & Penghargaan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Berbagai pencapaian membanggakan yang telah diraih MTS Al Falah
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tampilkan prestasi dari JSON, prioritas tahun terbaru */}
            {Object.entries(profilMadrasah.list_prestasi ?? {}).map(([tahun, prestasiList]) => (
              prestasiList.map((item, idx) => (
                <Card key={tahun + idx} className="border-0 shadow-lg text-center">
                  <CardContent className="p-8">
                    <div className="bg-yellow-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                      <Award className="h-10 w-10 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.prestasi}</h3>
                    <p className="text-gray-600">{item.tingkat} - {tahun.replace('-', '/')}</p>
                  </CardContent>
                </Card>
              ))
            ))}
          </div>
        </div>
      </section>

      {/* Data Guru & Tenaga Kependidikan */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Guru & Tenaga Kependidikan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Daftar jumlah guru dan tenaga kependidikan berdasarkan data terbaru
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Tabel Pendidik */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Data Pendidik</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold">Jenis Pendidik</TableHead>
                      <TableHead className="text-center font-semibold">Laki-laki</TableHead>
                      <TableHead className="text-center font-semibold">Perempuan</TableHead>
                      <TableHead className="text-center font-semibold">Jumlah</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {Object.entries(profilMadrasah.data_pendidik_tenaga_kependidikan.pendidik).map(([jenis, data]) => (
                      <TableRow key={jenis}>
                        <TableCell className="font-medium">{jenis}</TableCell>
                        <TableCell className="text-center">{data["laki-laki"]}</TableCell>
                        <TableCell className="text-center">{data["perempuan"]}</TableCell>
                        <TableCell className="text-center font-semibold">{data.jumlah}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Tabel Tenaga Kependidikan */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Tenaga Kependidikan</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold">Jenis Tenaga</TableHead>
                      <TableHead className="text-center font-semibold">Laki-laki</TableHead>
                      <TableHead className="text-center font-semibold">Perempuan</TableHead>
                      <TableHead className="text-center font-semibold">Jumlah</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {Object.entries(profilMadrasah.data_pendidik_tenaga_kependidikan.tenaga_kependidikan).map(([jenis, data]) => (
                      <TableRow key={jenis}>
                        <TableCell className="font-medium">{jenis}</TableCell>
                        <TableCell className="text-center">{data["laki-laki"]}</TableCell>
                        <TableCell className="text-center">{data["perempuan"]}</TableCell>
                        <TableCell className="text-center font-semibold">{data.jumlah}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Siswa */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Siswa</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Rekap jumlah siswa per tahun ajaran
            </p>
          </div>

          <Card className="border-0 shadow-lg max-w-6xl mx-auto">
            <CardContent className="p-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">Tahun Ajaran</TableHead>
                    <TableHead className="text-center font-semibold">Kelas 7</TableHead>
                    <TableHead className="text-center font-semibold">Kelas 8</TableHead>
                    <TableHead className="text-center font-semibold">Kelas 9</TableHead>
                    <TableHead className="text-center font-semibold">Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Object.entries(profilMadrasah.data_siswa).map(([tahun, data]) => (
                    <TableRow key={tahun}>
                      <TableCell className="font-medium">{tahun}</TableCell>
                      <TableCell className="text-center">
                        <div className="text-sm">
                          <div>Laki-laki : {data.kelas_7["laki-laki"]}</div>
                          <div>Perempuan : {data.kelas_7["perempuan"]}</div>
                          <div className="font-semibold">Total : {data.kelas_7["laki-laki"] + data.kelas_7["perempuan"]}</div>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="text-sm">
                          <div>Laki-laki : {data.kelas_8["laki-laki"]}</div>
                          <div>Perempuan : {data.kelas_8["perempuan"]}</div>
                          <div className="font-semibold">Total : {data.kelas_8["laki-laki"] + data.kelas_8["perempuan"]}</div>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="text-sm">
                          <div>Laki-laki : {data.kelas_9["laki-laki"]}</div>
                          <div>Perempuan : {data.kelas_9["perempuan"]}</div>
                          <div className="font-semibold">Total : {data.kelas_9["laki-laki"] + data.kelas_9["perempuan"]}</div>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="text-sm">
                          <div>Laki-laki : {data.jumlah["laki-laki"]}</div>
                          <div>Perempuan : {data.jumlah["perempuan"]}</div>
                          <div className="font-bold text-blue-600">Total : {data.jumlah.total}</div>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Bergabunglah dengan Keluarga Besar MTs Al-Falah</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Wujudkan masa depan gemilang putra-putri Anda dengan pendidikan Islam yang berkualitas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link href="/ppdb">Daftar Sekarang</Link>
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
