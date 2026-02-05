"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Clock } from "lucide-react"
import Image from "next/image"

function isLunchTime(): boolean {
  const now = new Date()
  const day = now.getDay() // 0 = Sonntag, 1 = Montag, ..., 6 = Samstag
  const hour = now.getHours()
  
  // Sonntag-Donnerstag (0, 1, 2, 3, 4) 15-19 Uhr
  const isSundayToThursday = day >= 0 && day <= 4
  const isSunThuHour = hour >= 15 && hour < 19
  
  // Freitag + Samstag (5, 6) 14-19 Uhr
  const isFridayOrSaturday = day === 5 || day === 6
  const isFriSatHour = hour >= 14 && hour < 19
  
  return (isSundayToThursday && isSunThuHour) || (isFridayOrSaturday && isFriSatHour)
}

export function SpecialOffersSection() {
  const [isLunch, setIsLunch] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsLunch(isLunchTime())
    
    const interval = setInterval(() => {
      setIsLunch(isLunchTime())
    }, 60000)
    
    return () => clearInterval(interval)
  }, [])

  const whatsappNumber = "491732052569"
  const whatsappMessage = encodeURIComponent(
    isLunch 
      ? "Hallo! Ich möchte gerne den Gottis Lunch Deal reservieren."
      : "Hallo! Ich möchte gerne einen Tisch reservieren."
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <section id="angebote" className="py-24 md:py-32 bg-transparent relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[500px] animate-pulse bg-zinc-900/30 rounded-lg" />
        </div>
      </section>
    )
  }

  return (
    <section id="angebote" className="py-16 md:py-32 bg-transparent relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square max-w-xs sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-transparent to-amber-600/10 rounded-full blur-3xl scale-90" />
              
              {/* Shisha Image */}
              <div className="relative z-10 overflow-hidden rounded-3xl">
                <Image
                  src="/shisha-hero.png"
                  alt="Premium Shisha"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover drop-shadow-2xl rounded-3xl"
                  priority
                />
              </div>

              {/* Floating smoke effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent pointer-events-none z-20 rounded-3xl" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="order-1 lg:order-2 text-center lg:text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-amber-400 text-sm font-medium tracking-widest uppercase">
                Gottis Exclusive
              </span>
              {isLunch && (
                <span className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  <span className="text-green-400 text-xs font-medium">Jetzt aktiv</span>
                </span>
              )}
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 leading-[0.95] tracking-tight">
              <span className="bg-gradient-to-b from-white via-white to-amber-200/60 bg-clip-text text-transparent">
                Gottis
              </span>
              <br />
              <span className="bg-gradient-to-b from-amber-300 via-amber-400 to-amber-600/80 bg-clip-text text-transparent">
                Lunch Deal
              </span>
            </h2>

            {/* Time indicator */}
            <div className="flex flex-col items-center lg:items-start gap-1 text-zinc-500 mb-6">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">So – Do | 15:00 – 19:00 Uhr</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Fr + Sa | 14:00 – 19:00 Uhr</span>
              </div>
            </div>

            {/* Subline */}
            <p className="text-zinc-400 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-10 max-w-md mx-auto lg:mx-0">
              Deine perfekte Auszeit in Langen. Genieße eine Premium-Shisha inkl. Softdrink für nur
            </p>

            {/* Price */}
            <div className="relative inline-block mb-6 sm:mb-10">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-amber-500/15 blur-xl rounded-full scale-125" />
              
              <div className="relative">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter">
                  <span className="relative bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                    10€
                  </span>
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="block">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-white font-medium text-lg border-b-2 border-amber-500/50 pb-1 hover:border-amber-400 transition-colors duration-300"
              >
                <span>Jetzt via WhatsApp anfragen</span>
                <ArrowRight className="w-5 h-5 text-amber-400 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
