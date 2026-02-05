import { MapPin, Clock, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const openingHours = [
  { day: "Sonntag - Donnerstag", hours: "16:00 - 01:00" },
  { day: "Freitag - Samstag", hours: "16:00 - 03:00" },
]

export function ContactSection() {
  return (
    <section id="kontakt" className="py-16 md:py-32 px-4 sm:px-6 lg:px-8 bg-zinc-900/30 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-3">
            Besuche uns
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            Wir freuen uns auf dich
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Info Cards */}
          <div className="flex flex-col gap-6">
            {/* Location Card */}
            <div className="bg-card/50 dark:bg-slate-800/30 backdrop-blur-sm border border-border dark:border-slate-700 rounded-xl p-6 hover:border-primary/30 dark:hover:border-slate-600 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold text-lg mb-2">Standort</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Gartenstraße 5<br />
                    63225 Langen, Hessen<br />
                    Deutschland
                  </p>
                </div>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-card/50 dark:bg-slate-800/30 backdrop-blur-sm border border-border dark:border-slate-700 rounded-xl p-6 hover:border-primary/30 dark:hover:border-slate-600 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Clock className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-foreground font-semibold text-lg mb-3">Öffnungszeiten</h3>
                  <div className="flex flex-col gap-2">
                    {openingHours.map((item) => (
                      <div key={item.day} className="flex flex-col xs:flex-row xs:justify-between text-sm gap-0.5 xs:gap-2">
                        <span className="text-muted-foreground">{item.day}</span>
                        <span className="text-foreground font-medium">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-card/50 dark:bg-slate-800/30 backdrop-blur-sm border border-border dark:border-slate-700 rounded-xl p-6 hover:border-primary/30 dark:hover:border-slate-600 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold text-lg mb-2">Kontakt</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+491732052569" className="hover:text-primary transition-colors">
                      0173 2052569
                    </a>
                  </p>
                  <p className="text-muted-foreground">
                    <a href="mailto:info@gottis-hookahbar.de" className="hover:text-primary transition-colors">
                      info@gottis-hookahbar.de
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA & Map */}
          <div className="flex flex-col gap-6">
            {/* WhatsApp Reservation */}
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-xl p-8 text-center">
              <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-6">
                <MessageCircle className="text-primary" size={32} />
              </div>
              <h3 className="text-foreground font-semibold text-xl mb-3">
                Schnell & Einfach reservieren
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Schreib uns einfach auf WhatsApp und sichere dir deinen Tisch für einen 
                unvergesslichen Abend.
              </p>
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8"
              >
                <a
                  href="https://wa.me/491732052569?text=Hallo,%20ich%20möchte%20gerne%20einen%20Tisch%20reservieren."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Via WhatsApp reservieren
                </a>
              </Button>
            </div>

            {/* Map Placeholder */}
            <div className="flex-1 min-h-[250px] bg-card/50 dark:bg-slate-800/30 backdrop-blur-sm border border-border dark:border-slate-700 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5130.232575563093!2d8.671582576807959!3d49.9904292203793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd7304f7e6a8c1%3A0x4e060ff5a874544b!2sGOTTI&#39;S!5e0!3m2!1sde!2sde!4v1770285919793!5m2!1sde!2sde"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "250px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gotti's Hookah Bar Standort"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
