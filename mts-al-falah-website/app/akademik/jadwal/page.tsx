"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, User, BookOpen, MapPin, Download, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function JadwalPage() {
  const [selectedClass, setSelectedClass] = useState("7A")
  const [selectedTeacher, setSelectedTeacher] = useState("Dra. Nurhayati")

  const classes = ["7A", "7B", "7C", "7D", "8A", "8B", "8C", "8D", "9A", "9B", "9C", "9D"]

  const teachers = [
    "Dra. Nurhayati",
    "H. Bambang, S.Pd",
    "Hj. Aisyah, S.Pd.I",
    "Muhammad Ali, S.Pd",
    "Siti Maryam, S.Pd",
    "H. Ibrahim, S.Pd.I",
    "Dra. Hj. Siti Aminah, M.Pd",
    "H. Muhammad Yusuf, S.Pd.I",
  ]

  const timeSlots = [
    { time: "07:00 - 07:40", period: "1" },
    { time: "07:40 - 08:20", period: "2" },
    { time: "08:20 - 09:00", period: "3" },
    { time: "09:00 - 09:20", period: "Istirahat" },
    { time: "09:20 - 10:00", period: "4" },
    { time: "10:00 - 10:40", period: "5" },
    { time: "10:40 - 11:20", period: "6" },
    { time: "11:20 - 12:00", period: "Sholat Dzuhur" },
    { time: "12:00 - 12:40", period: "7" },
    { time: "12:40 - 13:20", period: "8" },
    { time: "13:20 - 14:00", period: "9" },
    { time: "14:00 - 14:40", period: "10" },
  ]

  const classSchedule = {
    "7A": {
      Senin: [
        { subject: "Upacara", teacher: "Wali Kelas", room: "Lapangan", color: "bg-gray-100 text-gray-800" },
        { subject: "Matematika", teacher: "H. Bambang, S.Pd", room: "7A", color: "bg-blue-100 text-blue-800" },
        { subject: "Matematika", teacher: "H. Bambang, S.Pd", room: "7A", color: "bg-blue-100 text-blue-800" },
        { subject: "Istirahat", teacher: "-", room: "-", color: "bg-yellow-100 text-yellow-800" },
        { subject: "Bahasa Indonesia", teacher: "Dra. Nurhayati", room: "7A", color: "bg-green-100 text-green-800" },
        { subject: "Bahasa Indonesia", teacher: "Dra. Nurhayati", room: "7A", color: "bg-green-100 text-green-800" },
        { subject: "IPA", teacher: "Muhammad Ali, S.Pd", room: "Lab IPA", color: "bg-purple-100 text-purple-800" },
        { subject: "Sholat Dzuhur", teacher: "-", room: "Masjid", color: "bg-emerald-100 text-emerald-800" },
        {
          subject: "Al-Quran Hadits",
          teacher: "H. Ibrahim, S.Pd.I",
          room: "7A",
          color: "bg-orange-100 text-orange-800",
        },
        {
          subject: "Al-Quran Hadits",
          teacher: "H. Ibrahim, S.Pd.I",
          room: "7A",
          color: "bg-orange-100 text-orange-800",
        },
        { subject: "Tahfidz", teacher: "H. Usman, S.Pd.I", room: "Masjid", color: "bg-teal-100 text-teal-800" },
        { subject: "Tahfidz", teacher: "H. Usman, S.Pd.I", room: "Masjid", color: "bg-teal-100 text-teal-800" },
      ],
      Selasa: [
        { subject: "Bahasa Arab", teacher: "Hj. Aisyah, S.Pd.I", room: "7A", color: "bg-red-100 text-red-800" },
        { subject: "Bahasa Arab", teacher: "Hj. Aisyah, S.Pd.I", room: "7A", color: "bg-red-100 text-red-800" },
        { subject: "Bahasa Arab", teacher: "Hj. Aisyah, S.Pd.I", room: "7A", color: "bg-red-100 text-red-800" },
        { subject: "Istirahat", teacher: "-", room: "-", color: "bg-yellow-100 text-yellow-800" },
        { subject: "IPS", teacher: "Siti Maryam, S.Pd", room: "7A", color: "bg-indigo-100 text-indigo-800" },
        { subject: "IPS", teacher: "Siti Maryam, S.Pd", room: "7A", color: "bg-indigo-100 text-indigo-800" },
        { subject: "Bahasa Inggris", teacher: "Dra. Fatimah", room: "7A", color: "bg-pink-100 text-pink-800" },
        { subject: "Sholat Dzuhur", teacher: "-", room: "Masjid", color: "bg-emerald-100 text-emerald-800" },
        { subject: "Bahasa Inggris", teacher: "Dra. Fatimah", room: "7A", color: "bg-pink-100 text-pink-800" },
        { subject: "PJOK", teacher: "Ahmad Soleh, S.Pd", room: "Lapangan", color: "bg-cyan-100 text-cyan-800" },
        { subject: "PJOK", teacher: "Ahmad Soleh, S.Pd", room: "Lapangan", color: "bg-cyan-100 text-cyan-800" },
        { subject: "PJOK", teacher: "Ahmad Soleh, S.Pd", room: "Lapangan", color: "bg-cyan-100 text-cyan-800" },
      ],
      // Add more days...
    },
  }

  const teacherSchedule = {
    "Dra. Nurhayati": {
      Senin: [
        { time: "09:20 - 10:00", class: "7A", subject: "Bahasa Indonesia", room: "7A" },
        { time: "10:00 - 10:40", class: "7A", subject: "Bahasa Indonesia", room: "7A" },
        { time: "12:00 - 12:40", class: "8B", subject: "Bahasa Indonesia", room: "8B" },
        { time: "12:40 - 13:20", class: "8B", subject: "Bahasa Indonesia", room: "8B" },
      ],
      Selasa: [
        { time: "07:00 - 07:40", class: "9A", subject: "Bahasa Indonesia", room: "9A" },
        { time: "07:40 - 08:20", class: "9A", subject: "Bahasa Indonesia", room: "9A" },
        { time: "10:00 - 10:40", class: "7B", subject: "Bahasa Indonesia", room: "7B" },
        { time: "10:40 - 11:20", class: "7B", subject: "Bahasa Indonesia", room: "7B" },
      ],
      // Add more days...
    },
  }

  const days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">Jadwal Pelajaran</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Jadwal Pelajaran</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Jadwal lengkap mata pelajaran untuk semua kelas dan guru di MTS Al Falah
            </p>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <Tabs defaultValue="class" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="class" className="text-lg">
                  Jadwal Per Kelas
                </TabsTrigger>
                <TabsTrigger value="teacher" className="text-lg">
                  Jadwal Per Guru
                </TabsTrigger>
              </TabsList>

              <TabsContent value="class" className="space-y-8">
                <div className="flex items-center space-x-4 mb-6">
                  <label className="font-medium text-gray-700">Pilih Kelas:</label>
                  <Select value={selectedClass} onValueChange={setSelectedClass}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {classes.map((cls) => (
                        <SelectItem key={cls} value={cls}>
                          {cls}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <BookOpen className="h-6 w-6 text-blue-600" />
                      <span>Jadwal Kelas {selectedClass}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr>
                            <th className="border border-gray-300 p-3 bg-gray-50 text-left font-medium">Waktu</th>
                            {days.map((day) => (
                              <th
                                key={day}
                                className="border border-gray-300 p-3 bg-gray-50 text-center font-medium min-w-32"
                              >
                                {day}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {timeSlots.map((slot, index) => (
                            <tr key={index}>
                              <td className="border border-gray-300 p-3 font-medium text-sm bg-gray-50">
                                <div>{slot.time}</div>
                                <div className="text-xs text-gray-500">Jam ke-{slot.period}</div>
                              </td>
                              {days.map((day) => {
                                const schedule =
                                  classSchedule[selectedClass as keyof typeof classSchedule]?.[
                                    day as keyof (typeof classSchedule)[typeof selectedClass]
                                  ]?.[index]
                                return (
                                  <td key={day} className="border border-gray-300 p-2">
                                    {schedule && (
                                      <div className={`p-2 rounded text-xs ${schedule.color}`}>
                                        <div className="font-medium">{schedule.subject}</div>
                                        <div className="text-xs opacity-75">{schedule.teacher}</div>
                                        <div className="text-xs opacity-75 flex items-center">
                                          <MapPin className="h-3 w-3 mr-1" />
                                          {schedule.room}
                                        </div>
                                      </div>
                                    )}
                                  </td>
                                )
                              })}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="teacher" className="space-y-8">
                <div className="flex items-center space-x-4 mb-6">
                  <label className="font-medium text-gray-700">Pilih Guru:</label>
                  <Select value={selectedTeacher} onValueChange={setSelectedTeacher}>
                    <SelectTrigger className="w-64">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {teachers.map((teacher) => (
                        <SelectItem key={teacher} value={teacher}>
                          {teacher}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <User className="h-6 w-6 text-green-600" />
                      <span>Jadwal {selectedTeacher}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {days.slice(0, 6).map((day) => (
                        <Card key={day} className="border border-gray-200">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-lg text-center">{day}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              {teacherSchedule[selectedTeacher as keyof typeof teacherSchedule]?.[
                                day as keyof (typeof teacherSchedule)[typeof selectedTeacher]
                              ]?.map((schedule, index) => (
                                <div key={index} className="p-3 bg-blue-50 rounded-lg">
                                  <div className="flex items-center space-x-2 mb-2">
                                    <Clock className="h-4 w-4 text-blue-600" />
                                    <span className="text-sm font-medium">{schedule.time}</span>
                                  </div>
                                  <div className="text-sm">
                                    <div className="font-medium">{schedule.subject}</div>
                                    <div className="text-gray-600">Kelas {schedule.class}</div>
                                    <div className="text-gray-600 flex items-center">
                                      <MapPin className="h-3 w-3 mr-1" />
                                      {schedule.room}
                                    </div>
                                  </div>
                                </div>
                              )) || <div className="text-center text-gray-500 py-4">Tidak ada jadwal</div>}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Schedule Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Informasi Jadwal</h2>
              <p className="text-gray-600">Ketentuan dan informasi penting terkait jadwal pelajaran</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-6 w-6 text-blue-600" />
                    <span>Jam Pelajaran</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                      <span className="font-medium">Jam Masuk</span>
                      <span>07:00 WIB</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                      <span className="font-medium">Jam Pulang</span>
                      <span>14:40 WIB</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                      <span className="font-medium">Istirahat 1</span>
                      <span>09:00 - 09:20</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-emerald-50 rounded">
                      <span className="font-medium">Sholat Dzuhur</span>
                      <span>11:20 - 12:00</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-purple-50 rounded">
                      <span className="font-medium">Durasi/JP</span>
                      <span>40 Menit</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="h-6 w-6 text-green-600" />
                    <span>Ketentuan Umum</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <span>Siswa wajib hadir 15 menit sebelum jam pelajaran dimulai</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <span>Setiap pergantian jam pelajaran ada jeda 5 menit</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2"></div>
                      <span>Sholat Dzuhur berjamaah wajib untuk semua siswa</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                      <span>Jadwal dapat berubah sewaktu-waktu sesuai kebutuhan</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                      <span>Hari Sabtu khusus untuk kegiatan ekstrakurikuler</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-50 to-green-50">
              <CardContent className="p-8 text-center">
                <Download className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Download Jadwal</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Unduh jadwal pelajaran lengkap untuk semua kelas dan guru dalam format PDF
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Link href="/downloads/jadwal-kelas.pdf" target="_blank">
                      <Download className="mr-2 h-5 w-5" />
                      Jadwal Per Kelas
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/downloads/jadwal-guru.pdf" target="_blank">
                      <Download className="mr-2 h-5 w-5" />
                      Jadwal Per Guru
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Jadwal Pembelajaran Terstruktur</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Sistem pembelajaran yang terorganisir dengan baik untuk mengoptimalkan proses belajar mengajar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link href="/akademik/guru">
                Lihat Profil Guru
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/akademik/kurikulum">Lihat Kurikulum</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
