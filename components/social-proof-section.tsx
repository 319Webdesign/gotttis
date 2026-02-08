import { Star, Instagram } from "lucide-react"

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Beste Shisha Bar in der Umgebung! Die Atmosphäre ist unglaublich und der Service erstklassig. Komme definitiv wieder!",
  },
  {
    name: "Maximilian K.",
    rating: 5,
    text: "Top Qualität beim Tabak und die Cocktails sind ein Traum. Das Ambiente ist einfach perfekt für einen entspannten Abend.",
  },
  {
    name: "Leyla A.",
    rating: 5,
    text: "Mein neuer Lieblingsspot! Das Personal ist super freundlich und die Auswahl an Shisha-Sorten ist beeindruckend.",
  },
]

export function SocialProofSection() {
  return (
    <section id="bewertungen" className="py-16 md:py-32 px-4 sm:px-6 lg:px-8 bg-zinc-950 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-3">
            Kundenstimmen
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            Was unsere Gäste sagen
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-card/50 dark:bg-slate-800/30 backdrop-blur-sm border border-border dark:border-slate-700 rounded-xl p-6 hover:border-primary/30 dark:hover:border-slate-600 transition-colors duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={`star-${review.name}-${i}`}
                    size={18}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>
              {/* Review Text */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {'"'}{review.text}{'"'}
              </p>
              {/* Reviewer */}
              <p className="text-foreground font-medium text-sm">{review.name}</p>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-card/50 dark:bg-slate-800/30 backdrop-blur-sm border border-border dark:border-slate-700 rounded-full px-6 py-3 hover:border-primary/50 dark:hover:border-slate-600 transition-colors duration-300">
            <Instagram size={20} className="text-primary" />
            <span className="text-muted-foreground text-sm">
              Folge uns auf{" "}
              <a
                href="https://www.instagram.com/fabulousloungeshishabar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                @fabulousloungeshishabar
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
