"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Users, BookOpen, Camera, FileText, Building } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const profileMenuItems = [
    // { title: "Sejarah Sekolah", href: "/profil/sejarah", icon: BookOpen },
    { title: "Visi & Misi", href: "/profil/visi-misi", icon: FileText },
    { title: "Struktur Organisasi", href: "/profil/struktur-organisasi", icon: Users },
    { title: "Fasilitas", href: "/profil/fasilitas", icon: Building },
  ]

  const academicMenuItems = [
    { title: "Kurikulum", href: "/akademik/kurikulum", icon: BookOpen },
    { title: "Kalender Akademik", href: "/akademik/kalender", icon: FileText },
    { title: "Jadwal Pelajaran", href: "/akademik/jadwal", icon: FileText },
    { title: "Data Guru", href: "/akademik/guru", icon: Users },
  ]

  const galleryMenuItems = [
    { title: "Galeri Foto", href: "/galeri/foto", icon: Camera },
    // { title: "Galeri Video", href: "/galeri/video", icon: Camera },
  ]

  const ppdbMenuItems = [
    { title: "Informasi PPDB", href: "/ppdb/informasi", icon: FileText },
    // { title: "Pendaftaran Online", href: "/ppdb/daftar", icon: Users },
    { title: "Jadwal Seleksi", href: "/ppdb/jadwal", icon: FileText },
    { title: "Persyaratan", href: "/ppdb/persyaratan", icon: FileText },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="bg-white p-1 rounded-lg shadow-sm">
              <Image
                src="/assets/images/logo/logo.png"
                alt="Logo MTS Al Falah"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-gray-900">MTS Al Falah</div>
              <div className="text-sm text-gray-600">Kotabaru Karawang</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium">
                      Beranda
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600">Profil</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-80 p-4">
                      <div className="grid gap-3">
                        {profileMenuItems.map((item) => (
                          <Link key={item.href} href={item.href} legacyBehavior passHref>
                            <NavigationMenuLink className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                              <item.icon className="h-5 w-5 text-blue-600" />
                              <div>
                                <div className="font-medium text-gray-900">{item.title}</div>
                              </div>
                            </NavigationMenuLink>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600">Akademik</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-80 p-4">
                      <div className="grid gap-3">
                        {academicMenuItems.map((item) => (
                          <Link key={item.href} href={item.href} legacyBehavior passHref>
                            <NavigationMenuLink className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                              <item.icon className="h-5 w-5 text-green-600" />
                              <div>
                                <div className="font-medium text-gray-900">{item.title}</div>
                              </div>
                            </NavigationMenuLink>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/berita" legacyBehavior passHref>
                    <NavigationMenuLink className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium">
                      Berita
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600">Galeri</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-64 p-4">
                      <div className="grid gap-3">
                        {galleryMenuItems.map((item) => (
                          <Link key={item.href} href={item.href} legacyBehavior passHref>
                            <NavigationMenuLink className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                              <item.icon className="h-5 w-5 text-purple-600" />
                              <div>
                                <div className="font-medium text-gray-900">{item.title}</div>
                              </div>
                            </NavigationMenuLink>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600">PPDB</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-80 p-4">
                      <div className="grid gap-3">
                        {ppdbMenuItems.map((item) => (
                          <Link key={item.href} href={item.href} legacyBehavior passHref>
                            <NavigationMenuLink className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                              <item.icon className="h-5 w-5 text-orange-600" />
                              <div>
                                <div className="font-medium text-gray-900">{item.title}</div>
                              </div>
                            </NavigationMenuLink>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/kontak" legacyBehavior passHref>
                    <NavigationMenuLink className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium">
                      Kontak
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button */}
          {/* <div className="hidden lg:block">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/ppdb/daftar">Daftar Sekarang</Link>
            </Button>
          </div> */}

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="space-y-2">
              <Link
                href="/"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Beranda
              </Link>

              <div className="space-y-1">
                <div className="px-4 py-2 text-gray-900 font-medium">Profil</div>
                {profileMenuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-8 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              <div className="space-y-1">
                <div className="px-4 py-2 text-gray-900 font-medium">Akademik</div>
                {academicMenuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-8 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              <Link
                href="/berita"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Berita
              </Link>

              <div className="space-y-1">
                <div className="px-4 py-2 text-gray-900 font-medium">Galeri</div>
                {galleryMenuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-8 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              <div className="space-y-1">
                <div className="px-4 py-2 text-gray-900 font-medium">PPDB</div>
                {ppdbMenuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-8 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              <Link
                href="/kontak"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Kontak
              </Link>

              <div className="px-4 pt-4">
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/ppdb/daftar" onClick={() => setIsOpen(false)}>
                    Daftar Sekarang
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
