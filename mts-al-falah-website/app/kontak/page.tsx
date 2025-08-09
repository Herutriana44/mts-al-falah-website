"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
  Send,
  Building,
  GraduationCap,
  Users,
  BookOpen,
  FileText,
} from "lucide-react"

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const departmentContacts = [
    {
      department: "Kepala Sekolah",
      name: "Drs. Ahmad Fauzi, M.Pd.I",
      phone: "(0267) 123-4567",
      email: "kepala@mtsalfalah-kotabaru.sch.id",
      icon: Building,
      color: "text-blue-600",
    },
    {
      department: "Wakil Kepala Sekolah",
      name: "Hj. Siti Nurhasanah, S.Pd.I",
      phone: "(0267) 123-4568",
      email: "wakasek@mtsalfalah-kotabaru.sch.id",
      icon: Users,
      color: "text-green-600",
    },
    {
      department: "Tata Usaha",
      name: "Budi Santoso, S.Pd",
      phone: "(0267) 123-4569",
      email: "tu@mtsalfalah-kotabaru.sch.id",
      icon: FileText,
      color: "text-purple-600",
    },
    {
      department: "PPDB",
      name: "Dra. Fatimah Zahra",
      phone: "(0267) 123-4570",
      email: "ppdb@mtsalfalah-kotabaru.sch.id",
      icon: GraduationCap,
      color: "text-orange-600",
    },
    {
      department: "Kurikulum",
      name: "H. Muhammad Yusuf, M.Pd",
      phone: "(0267) 123-4571",
      email: "kurikulum@mtsalfalah-kotabaru.sch.id",
      icon: BookOpen,
      color: "text-red-600",
    },
  ]

  const operatingHours = [
    { day: "Senin - Kamis", hours: "07:00 - 15:30 WIB", status: "open" },
    { day: "Jumat", hours: "07:00 - 11:30 WIB", status: "open" },
    { day: "Sabtu", hours: "07:00 - 12:00 WIB", status: "open" },
    { day: "Minggu", hours: "Libur", status: "closed" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Hubungi Kami</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Kami siap membantu Anda dengan informasi lengkap tentang MTS Al Falah Kotabaru Karawang
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <a href="https://wa.me/6267123456789" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                <a href="tel:+6267123456789">
                  <Phone className="mr-2 h-5 w-5" />
                  Telepon Langsung
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Main Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Informasi Kontak</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-blue-100 rounded-full">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Alamat Sekolah</h3>
                        <p className="text-gray-600">
                          Jl. Raya Kotabaru No. 123
                          <br />
                          Kotabaru, Karawang
                          <br />
                          Jawa Barat 41374
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-green-100 rounded-full">
                        <Phone className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Telepon</h3>
                        <p className="text-gray-600 mb-1">(0267) 123-4567</p>
                        <p className="text-gray-600">+62 812-3456-7890</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-purple-100 rounded-full">
                        <Mail className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                        <p className="text-gray-600 mb-1">info@mtsalfalah-kotabaru.sch.id</p>
                        <p className="text-gray-600">admin@mtsalfalah-kotabaru.sch.id</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-yellow-100 rounded-full">
                        <Globe className="h-6 w-6 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Website</h3>
                        <p className="text-gray-600 mb-1">www.mtsalfalah-kotabaru.sch.id</p>
                        <p className="text-gray-600">Portal Siswa: portal.mtsalfalah-kotabaru.sch.id</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Operating Hours */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Jam Operasional</h2>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span>Jam Layanan</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {operatingHours.map((schedule, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-gray-700 font-medium">{schedule.day}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-600">{schedule.hours}</span>
                          <Badge
                            className={
                              schedule.status === "open" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                            }
                          >
                            {schedule.status === "open" ? "Buka" : "Tutup"}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Catatan:</strong> Pada hari libur nasional dan cuti bersama, sekolah tutup. Untuk
                      keperluan mendesak, hubungi nomor WhatsApp.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Department Contacts */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Kontak Departemen</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departmentContacts.map((contact, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 bg-gray-100 rounded-full`}>
                        <contact.icon className={`h-6 w-6 ${contact.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{contact.department}</h3>
                        <p className="text-sm text-gray-600 mb-2">{contact.name}</p>
                        <div className="space-y-1">
                          <p className="text-sm text-gray-600">{contact.phone}</p>
                          <p className="text-sm text-gray-600">{contact.email}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form & Social Media */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Kirim Pesan</h2>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Nama Lengkap *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Masukkan nama lengkap"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Nomor Telepon
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Masukkan nomor telepon"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Masukkan alamat email"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subjek *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Masukkan subjek pesan"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Pesan *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tulis pesan Anda di sini..."
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                      <Send className="mr-2 h-5 w-5" />
                      Kirim Pesan
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Social Media & Map */}
            <div className="space-y-8">
              {/* Social Media */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Media Sosial</h2>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <a
                        href="https://facebook.com/mtsalfalahkotabaru"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 p-4 rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        <div className="p-2 bg-blue-100 rounded-full">
                          <Facebook className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Facebook</h3>
                          <p className="text-gray-600">@mtsalfalahkotabaru</p>
                        </div>
                      </a>
                      <a
                        href="https://instagram.com/mtsalfalahkotabaru"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 p-4 rounded-lg hover:bg-pink-50 transition-colors"
                      >
                        <div className="p-2 bg-pink-100 rounded-full">
                          <Instagram className="h-6 w-6 text-pink-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Instagram</h3>
                          <p className="text-gray-600">@mtsalfalahkotabaru</p>
                        </div>
                      </a>
                      <a
                        href="https://youtube.com/@mtsalfalahkotabaru"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 p-4 rounded-lg hover:bg-red-50 transition-colors"
                      >
                        <div className="p-2 bg-red-100 rounded-full">
                          <Youtube className="h-6 w-6 text-red-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">YouTube</h3>
                          <p className="text-gray-600">MTS Al Falah Kotabaru</p>
                        </div>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Contact */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Kontak Cepat</h2>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <Button asChild size="lg" className="w-full bg-green-600 hover:bg-green-700">
                        <a href="https://wa.me/6267123456789" target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="mr-2 h-5 w-5" />
                          Chat WhatsApp
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="lg" className="w-full bg-transparent">
                        <a href="tel:+6267123456789">
                          <Phone className="mr-2 h-5 w-5" />
                          Telepon Sekarang
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="lg" className="w-full bg-transparent">
                        <a href="mailto:info@mtsalfalah-kotabaru.sch.id">
                          <Mail className="mr-2 h-5 w-5" />
                          Kirim Email
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Lokasi Sekolah</h2>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <MapPin className="h-12 w-12 mx-auto mb-2" />
                        <p>Peta Lokasi Sekolah</p>
                        <p className="text-sm">Google Maps akan dimuat di sini</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Informasi Akses</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Transportasi Umum</h4>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>• Angkot jurusan Kotabaru - Karawang</li>
                          <li>• Bus Trans Karawang (Halte Kotabaru)</li>
                          <li>• Ojek online tersedia</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Landmark Terdekat</h4>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>• Masjid Al Falah (50m)</li>
                          <li>• Pasar Kotabaru (200m)</li>
                          <li>• Kantor Kelurahan (300m)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Parkir</h4>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>• Parkir motor: Gratis</li>
                          <li>• Parkir mobil: Tersedia</li>
                          <li>• Area parkir luas</li>
                        </ul>
                      </div>
                    </div>
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
