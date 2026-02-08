"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#menu", label: "Karte" },
  { href: "#galerie", label: "Galerie" },
  { href: "#bewertungen", label: "Bewertungen" },
  { href: "#kontakt", label: "Kontakt" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center shrink-0"
            aria-label="Zur Startseite"
          >
            <Image
              src="/Logo.png"
              alt="FABULOUS LOUNGE-SHISHA-BAR"
              width={250}
              height={250}
              className="h-16 w-auto md:h-20 object-contain"
              priority
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#kontakt")}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Reservieren
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => scrollToSection(link.href)}
                className="text-left text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#kontakt")}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-2"
            >
              Reservieren
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
