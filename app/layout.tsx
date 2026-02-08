import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FABULOUS LOUNGE-SHISHA-BAR | Premium Shisha Bar Egelsbach",
  description: 'Dein exklusives Shisha-Erlebnis in Egelsbach. Premium Tabak, Signature Cocktails und eine einzigartige Atmosphäre. Reserviere jetzt deinen Tisch.',
  keywords: ['Shisha', 'Lounge', 'Egelsbach', 'Hookah', 'Cocktails', 'Bar', 'FABULOUS'],
}

export const viewport: Viewport = {
  themeColor: '#1a1a1f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className="dark">
      <body className={`${inter.className} antialiased text-foreground dark:text-slate-100 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
