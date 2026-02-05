"use client"

import { useState } from "react"
import { X } from "lucide-react"

const galleryImages = [
  { src: "/Gallerie1.jpg", alt: "Gotti's Hookah Bar" },
  { src: "/Gallerie2.jpg", alt: "Premium Shisha Auswahl" },
  { src: "/Gallerie3.jpg", alt: "Lounge Atmosphäre" },
  { src: "/Gallerie4.jpg", alt: "Gemütlicher Bereich" },
  { src: "/Gallerie5.jpg", alt: "Bar & Getränke" },
  { src: "/Gallerie6.jpg", alt: "Ambiente" },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="galerie" className="py-16 md:py-32 px-4 sm:px-6 lg:px-8 bg-zinc-900/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-3">
            Einblicke
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            Entdecke unsere Atmosphäre
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setSelectedImage(image.src)}
              className="relative overflow-hidden rounded-lg sm:rounded-xl group cursor-pointer"
              style={{ aspectRatio: "1/1" }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-foreground text-sm font-medium">{image.alt}</p>
              </div>
              {/* Gold border on hover */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-xl transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-background/95 dark:bg-slate-950/95 backdrop-blur-xl z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          onKeyDown={(e) => e.key === "Escape" && setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Bild vergrößert"
        >
          <button
            type="button"
            className="absolute top-4 right-4 text-foreground hover:text-primary transition-colors p-2"
            onClick={() => setSelectedImage(null)}
            aria-label="Schließen"
          >
            <X size={32} />
          </button>
          <div className="relative w-full max-w-4xl aspect-video">
            <img
              src={selectedImage}
              alt="Vergrößerte Ansicht"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}
