"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const whatsappNumber = "491732052569"
  const whatsappMessage = encodeURIComponent(
    "Hallo! Ich möchte gerne einen Tisch reservieren."
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-110 animate-pulse-slow"
      aria-label="Via WhatsApp reservieren"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  )
}
