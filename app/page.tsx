import { StickyNav } from "@/components/sticky-nav"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ReviewsSection } from "@/components/reviews-section"
import { BoutiquesSection } from "@/components/boutiques-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <StickyNav />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BoutiquesSection />
      <ReviewsSection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <img
                src="/images/logo-modelle.png"
                alt="Mod'Elle"
                className="h-8 w-auto mr-4 filter brightness-0 invert"
              />
              <p className="text-sm">© 2026 Mod'Elle. Tous droits réservés.</p>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#apropos" className="hover:text-primary transition-colors">
                À propos
              </a>
              <a href="#contact" className="hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
