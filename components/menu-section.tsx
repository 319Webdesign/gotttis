"use client"

import { useState } from "react"
import { Wind, Wine, UtensilsCrossed } from "lucide-react"
import { cn } from "@/lib/utils"

type Category = "tabak" | "cocktails" | "snacks"

const categories = [
  { id: "tabak" as const, label: "Premium Tabak", icon: Wind },
  { id: "cocktails" as const, label: "Signature Cocktails", icon: Wine },
  { id: "snacks" as const, label: "Snacks", icon: UtensilsCrossed },
]

const menuItems: Record<Category, { name: string; description: string; price: string }[]> = {
  tabak: [
    { name: "Gotti's Signature Blend", description: "Unser exklusiver Hausmix mit Noten von Traube, Minze und einem Hauch Vanille", price: "18€" },
    { name: "Tropical Paradise", description: "Fruchtige Mischung aus Mango, Passionsfrucht und Kokosnuss", price: "16€" },
    { name: "Arctic Fresh", description: "Intensive Minze mit kühlem Menthol für ein erfrischendes Erlebnis", price: "15€" },
    { name: "Oriental Nights", description: "Klassische orientalische Aromen mit Anis und Kardamom", price: "17€" },
    { name: "Berry Fusion", description: "Mix aus Waldbeeren, Blaubeere und einem Touch Zitrus", price: "16€" },
    { name: "Golden Apple", description: "Doppel-Apfel Klassiker mit einem Hauch Zimt", price: "15€" },
  ],
  cocktails: [
    { name: "Gotti's Sunset", description: "Vodka, Passionsfrucht, Orangensaft und ein Spritzer Grenadine", price: "14€" },
    { name: "Midnight Mojito", description: "Dunkler Rum, frische Minze, Limette und Rohrzucker", price: "13€" },
    { name: "Golden Hour", description: "Bourbon, Honigsirup, Zitrone und Angostura Bitters", price: "15€" },
    { name: "Velvet Rose", description: "Gin, Rosensirup, Hibiskus und Prosecco", price: "14€" },
    { name: "Smoky Margarita", description: "Mezcal, Cointreau, Limette und Agavensirup", price: "15€" },
    { name: "Virgin Paradise", description: "Alkoholfreier Mix aus tropischen Früchten und Kokosmilch", price: "9€" },
  ],
  snacks: [
    { name: "Mezze Platte", description: "Hummus, Baba Ganoush, Falafel und frisches Fladenbrot", price: "16€" },
    { name: "Crispy Halloumi", description: "Gegrillter Halloumi mit Minz-Joghurt Dip", price: "12€" },
    { name: "Loaded Nachos", description: "Tortilla Chips mit Käse, Guacamole, Salsa und Sour Cream", price: "14€" },
    { name: "Oriental Wings", description: "Knusprige Chicken Wings mit Harissa-Honig Glasur", price: "13€" },
    { name: "Truffle Fries", description: "Pommes mit Trüffelöl und Parmesan", price: "10€" },
    { name: "Sweet Baklava", description: "Hausgemachtes Baklava mit Pistazien und Honig", price: "8€" },
  ],
}

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("tabak")

  return (
    <section id="menu" className="py-16 md:py-32 px-4 sm:px-6 lg:px-8 bg-zinc-950 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-3">
            Unsere Karte
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            Erlebe erstklassige Qualität
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 md:mb-16">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "flex items-center gap-2 px-4 md:px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300",
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-card dark:bg-slate-800/50 text-muted-foreground dark:text-slate-300 hover:bg-secondary dark:hover:bg-slate-700/50 hover:text-foreground dark:hover:text-slate-100 border border-border dark:border-slate-700"
                )}
              >
                <Icon size={18} />
                <span className="hidden sm:inline">{category.label}</span>
                <span className="sm:hidden">{category.label.split(" ")[0]}</span>
              </button>
            )
          })}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {menuItems[activeCategory].map((item, index) => (
            <div
              key={item.name}
              className="group relative bg-card/50 dark:bg-slate-800/30 backdrop-blur-sm border border-border dark:border-slate-700 rounded-xl p-6 hover:border-primary/50 dark:hover:border-slate-600 transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Glassmorphism effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <span className="text-primary font-bold text-lg whitespace-nowrap">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
