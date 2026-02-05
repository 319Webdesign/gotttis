import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { SpecialOffersSection } from "@/components/special-offers-section"
import { MenuSection } from "@/components/menu-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactSection } from "@/components/contact-section"
import { SocialProofSection } from "@/components/social-proof-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <SpecialOffersSection />
      <MenuSection />
      <GallerySection />
      <SocialProofSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
