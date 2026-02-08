import { Instagram, Facebook } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-zinc-950 border-t border-border dark:border-slate-800 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
          {/* Logo */}
          <div className="text-xl font-bold tracking-tight text-center md:text-left">
            <span className="text-primary">FABULOUS</span>
            <span className="text-foreground"> LOUNGE-SHISHA-BAR</span>
          </div>

          {/* Social Links - Centered */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://www.instagram.com/fabulousloungeshishabar/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-card dark:bg-slate-800/50 border border-border dark:border-slate-700 rounded-lg hover:border-primary/50 dark:hover:border-slate-600 hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com/fabulousloungeshishabar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-card dark:bg-slate-800/50 border border-border dark:border-slate-700 rounded-lg hover:border-primary/50 dark:hover:border-slate-600 hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-xs sm:text-sm text-center md:text-right">
            © {currentYear} FABULOUS LOUNGE-SHISHA-BAR
          </p>
        </div>

        {/* Legal Links */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border dark:border-slate-800 flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground dark:text-slate-400">
          <a href="#" className="hover:text-primary transition-colors">
            Impressum
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Datenschutz
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            AGB
          </a>
        </div>

        {/* Designer Credit */}
        <div className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-muted-foreground">
          Designed by{" "}
          <a
            href="https://319Webdesign.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors font-medium"
          >
            319Webdesign
          </a>
        </div>
      </div>
    </footer>
  )
}
