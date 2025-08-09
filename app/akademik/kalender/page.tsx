"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Users,
  BookOpen,
  Award,
  AlertCircle,
  Download,
} from "lucide-react"
import Link from "next/link"

export default function KalenderPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedEvent, setSelectedEvent] = useState<any>(null)

  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ]

  const events = [
    {
      id: 1,
      title: "Tahun Ajaran Baru 2024/2025",
      date: "2024-07-15",
      endDate: "2024-07-15",
      type: "academic",
      description: "Pembukaan tahun ajaran baru dan orientasi siswa baru",
      location: "Aula Sekolah",
      time: "07:00 - 12:00",
      participants: "Seluruh siswa dan guru",
    },
    {
      id: 2,
      title: "Pekan Orientasi Siswa (POS)",
      date: "2024-07-16",
      endDate: "2024-07-18",
      type: "orientation",
      description: "Kegiatan pengenalan lingkungan sekolah untuk siswa baru",
      location: "Seluruh area sekolah",
      time: "07:00 - 15:00",
      participants: "Siswa kelas VII",
    },
    {
      id: 3,
      title: "Ujian Tengah Semester Ganjil",
      date: "2024-09-23",
      endDate: "2024-10-04",
      type: "exam",
      description: "Ujian tengah semester untuk semua mata pelajaran",
      location: "Ruang kelas masing-masing",
      time: "07:30 - 11:30",
      participants: "Seluruh siswa",
    },
    {
      id: 4,
      title: "Peringatan Maulid Nabi Muhammad SAW",
      date: "2024-09-16",
      endDate: "2024-09-16",
      type: "religious",
      description: "Peringatan Maulid Nabi dengan ceramah dan lomba islami",
      location: "Masjid Sekolah",
      time: "08:00 - 11:00",
      participants: "Seluruh warga sekolah",
    },
    {
      id: 5,
      title: "Libur Semester Ganjil",
      date: "2024-12-23",
      endDate: "2025-01-06",
      type: "holiday",
      description: "Libur akhir semester ganjil dan libur tahun baru",
      location: "-",
      time: "-",
      participants: "Seluruh warga sekolah",
    },
    {
      id: 6,
      title: "Ujian Akhir Semester Ganjil",
      date: "2024-12-02",
      endDate: "2024-12-13",
      type: "exam",
      description: "Ujian akhir semester ganjil semua mata pelajaran",
      location: "Ruang kelas masing-masing",
      time: "07:30 - 11:30",
      participants: "Seluruh siswa",
    },
    {
      id: 7,
      title: "Penerimaan Rapor Semester Ganjil",
      date: "2024-12-21",
      endDate: "2024-12-21",
      type: "academic",
      description: "Pembagian rapor hasil belajar semester ganjil",
      location: "Ruang kelas masing-masing",
      time: "08:00 - 11:00",
      participants: "Siswa dan orang tua",
    },
    {
      id: 8,
      title: "Semester Genap Dimulai",
      date: "2025-01-07",
      endDate: "2025-01-07",
      type: "academic",
      description: "Dimulainya kegiatan pembelajaran semester genap",
      location: "Seluruh ruang kelas",
      time: "07:00 - 15:00",
      participants: "Seluruh siswa dan guru",
    },
  ]

  const eventTypes = {
    academic: { color: "bg-blue-100 text-blue-800", label: "Akademik" },
    exam: { color: "bg-red-100 text-red-800", label: "Ujian" },
    religious: { color: "bg-green-100 text-green-800", label: "Keagamaan" },
    holiday: { color: "bg-yellow-100 text-yellow-800", label: "Libur" },
    orientation: { color: "bg-purple-100 text-purple-800", label: "Orientasi" },
  }

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const getEventsForDate = (day: number) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
    return events.filter((event) => {
      const eventStart = new Date(event.date)
      const eventEnd = new Date(event.endDate)
      const checkDate = new Date(dateStr)
      return checkDate >= eventStart && checkDate <= eventEnd
    })
  }

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate)
    const firstDay = getFirstDayOfMonth(currentDate)
    const days = []

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 border border-gray-200"></div>)
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayEvents = getEventsForDate(day)
      const isToday =
        new Date().toDateString() === new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toDateString()

      days.push(
        <div
          key={day}
          className={`h-24 border border-gray-200 p-1 ${isToday ? "bg-blue-50" : "bg-white"} hover:bg-gray-50 cursor-pointer`}
        >
          <div className={`text-sm font-medium mb-1 ${isToday ? "text-blue-600" : "text-gray-900"}`}>{day}</div>
          <div className="space-y-1">
            {dayEvents.slice(0, 2).map((event) => (
              <div
                key={event.id}
                className={`text-xs px-1 py-0.5 rounded truncate ${eventTypes[event.type as keyof typeof eventTypes].color}`}
                onClick={() => setSelectedEvent(event)}
              >
                {event.title}
              </div>
            ))}
            {dayEvents.length > 2 && <div className="text-xs text-gray-500">+{dayEvents.length - 2} lainnya</div>}
          </div>
        </div>,
      )
    }

    return days
  }

  const upcomingEvents = events
    .filter((event) => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 5)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">Kalender Akademik</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Kalender Akademik 2024/2025</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Jadwal lengkap kegiatan akademik, ujian, libur, dan acara penting sepanjang tahun ajaran
            </p>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Calendar */}
              <div className="lg:col-span-3">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl">
                        {months[currentDate.getMonth()]} {currentDate.getFullYear()}
                      </CardTitle>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" onClick={() => navigateMonth("prev")}>
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => navigateMonth("next")}>
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {/* Calendar Header */}
                    <div className="grid grid-cols-7 gap-0 mb-2">
                      {["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"].map((day) => (
                        <div
                          key={day}
                          className="h-10 flex items-center justify-center font-medium text-gray-600 border border-gray-200 bg-gray-50"
                        >
                          {day}
                        </div>
                      ))}
                    </div>
                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-0">{renderCalendar()}</div>
                  </CardContent>
                </Card>
              </div>

              {/* Upcoming Events */}
              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <span>Kegiatan Mendatang</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingEvents.map((event) => (
                        <div
                          key={event.id}
                          className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                          onClick={() => setSelectedEvent(event)}
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-medium text-gray-900 text-sm">{event.title}</h4>
                            <Badge className={`${eventTypes[event.type as keyof typeof eventTypes].color} text-xs`}>
                              {eventTypes[event.type as keyof typeof eventTypes].label}
                            </Badge>
                          </div>
                          <div className="text-xs text-gray-500">
                            {new Date(event.date).toLocaleDateString("id-ID", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Legend */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">Keterangan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {Object.entries(eventTypes).map(([key, type]) => (
                        <div key={key} className="flex items-center space-x-2">
                          <div className={`w-4 h-4 rounded ${type.color.replace("text-", "bg-").split(" ")[0]}`}></div>
                          <span className="text-sm text-gray-700">{type.label}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Download */}
                <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-green-50">
                  <CardContent className="p-6 text-center">
                    <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-bold text-gray-900 mb-2">Download Kalender</h3>
                    <p className="text-sm text-gray-600 mb-4">Unduh kalender akademik lengkap</p>
                    <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <Link href="/downloads/kalender-akademik-2024-2025.pdf" target="_blank">
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Detail Modal */}
      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="max-w-2xl">
          {selectedEvent && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center space-x-3">
                  <span>{selectedEvent.title}</span>
                  <Badge className={eventTypes[selectedEvent.type as keyof typeof eventTypes].color}>
                    {eventTypes[selectedEvent.type as keyof typeof eventTypes].label}
                  </Badge>
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-4">
                <p className="text-gray-600">{selectedEvent.description}</p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-medium">Tanggal</div>
                      <div className="text-sm text-gray-600">
                        {new Date(selectedEvent.date).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                        {selectedEvent.date !== selectedEvent.endDate && (
                          <span>
                            {" "}
                            -{" "}
                            {new Date(selectedEvent.endDate).toLocaleDateString("id-ID", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-medium">Waktu</div>
                      <div className="text-sm text-gray-600">{selectedEvent.time}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-purple-600" />
                    <div>
                      <div className="font-medium">Lokasi</div>
                      <div className="text-sm text-gray-600">{selectedEvent.location}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-orange-600" />
                    <div>
                      <div className="font-medium">Peserta</div>
                      <div className="text-sm text-gray-600">{selectedEvent.participants}</div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Important Dates */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tanggal Penting</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jadwal-jadwal penting yang perlu diperhatikan sepanjang tahun ajaran
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Tahun Ajaran Baru</h3>
                <p className="text-2xl font-bold text-blue-600 mb-1">15 Juli</p>
                <p className="text-sm text-gray-600">2024</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <AlertCircle className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">UTS Ganjil</h3>
                <p className="text-2xl font-bold text-red-600 mb-1">23 Sep</p>
                <p className="text-sm text-gray-600">2024</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">UAS Ganjil</h3>
                <p className="text-2xl font-bold text-green-600 mb-1">2 Des</p>
                <p className="text-sm text-gray-600">2024</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Libur Semester</h3>
                <p className="text-2xl font-bold text-yellow-600 mb-1">23 Des</p>
                <p className="text-sm text-gray-600">2024</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
