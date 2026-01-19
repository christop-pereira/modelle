import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <section id="accueil" className="relative min-h-[calc(100vh-64px)] md:min-h-screen flex items-center justify-center bg-background pt-20 md:pt-16 pb-8">
      {/* Content */}
      <div className="relative z-10 text-center text-foreground max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <img
            src="/images/logo-modelle.png"
            alt="Mod'Elle"
            className="h-16 sm:h-20 md:h-24 w-auto mx-auto mb-4 md:mt-8 px-10 sm:px-0"
          />
          <img
            src="/images/femme-modelle.png"
            alt="Mod'Elle"
            className="h-48 w-auto mx-auto mb-6"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Votre boutique de prêt-à-porter Féminin</h1>

        <p className="text-xl md:text-2xl mb-8 text-balance text-muted-foreground">
          Mode féminine, retouches professionnelles et créations uniques
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-3" asChild>
            <a href="#services">Nos services</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-3 border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
            asChild
          >
            <a href="#boutiques">
              <MapPin className="mr-2 h-5 w-5" />
              Nous Trouver
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
