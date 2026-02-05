"use client"

import { ChevronDown, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToMenu = () => {
    const element = document.querySelector("#menu")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const element = document.querySelector("#kontakt")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/hero-bg.png"
          alt="Gotti's Hookah and Bar Atmosphäre"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ minHeight: '100vh', minWidth: '100%' }}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/50 to-zinc-950" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pt-20 pb-32 md:pb-40">
        <p className="text-primary text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-4 md:mb-6">
          Gottis Hookah and Bar
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 md:mb-8 leading-tight text-balance">
          Dein Abend,
          <br />
          <span className="text-primary">dein Vibe.</span>
        </h1>
        <p className="text-muted-foreground text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed">
          Erlebe erstklassigen Premium-Tabak, exquisite Cocktails und eine Atmosphäre, 
          die deinen Abend unvergesslich macht.
        </p>

        {/* Google Badge */}
        <div className="flex items-center justify-center gap-2 mb-8 md:mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-2 sm:px-4 border border-white/20">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <div className="flex items-center gap-0.5 sm:gap-1">
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400/40 text-yellow-400" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-foreground">4,4</span>
            <span className="text-xs sm:text-sm text-muted-foreground hidden xs:inline">/ 91 Rezensionen</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6"
          >
            Tisch reservieren
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToMenu}
            className="w-full sm:w-auto border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary text-base px-8 py-6 bg-transparent"
          >
            Digitale Karte
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        type="button"
        onClick={scrollToMenu}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary animate-bounce"
        aria-label="Nach unten scrollen"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  )
}
