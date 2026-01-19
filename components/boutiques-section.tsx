import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Clock, Navigation } from "lucide-react"

const boutiques = [
  {
    name: "Boutique Grand-Lancy",
    address: "72 Avenue des Communes-Réunies, 1212 Grand-Lancy",
    phone: "022 794 00 01",
    hours: ["Lundi: Fermé", "Mar-Sam: 9h00-12h00 / 14h00-19h00", "Dimanche: Fermé"],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762.894!2d6.120437!3d46.172767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c7b6993686913%3A0x9cd8e14768293635!2sBoutique%20Mod%27Elle!5e0!3m2!1sfr!2sch!4v1700000000000!5m2!1sfr!2sch",
  },
  {
    name: "Boutique Centre commercial de Budé",
    address: "15 Avenue de Budé, 1202 Genève",
    phone: "022 910 45 55",
    hours: ["Lundi: Fermé", "Mar-Ven: 10h00-18h30", "Samedi: 10h00-17h00", "Dimanche: Fermé"],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.27!2d6.128769!3d46.224973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c64ee546ffa59%3A0x1d34c7239049a950!2sAv.%20De-Bud%C3%A9%2015%2C%201202%20Gen%C3%A8ve!5e0!3m2!1sfr!2sch!4v1700000000000!5m2!1sfr!2sch",
  },
]

export function BoutiquesSection() {
  return (
    <section id="boutiques" className="py-12 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Nos Boutiques</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Deux adresses à Genève pour vous accueillir et vous conseiller
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {boutiques.map((boutique, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-muted">
                <iframe
                  src={boutique.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Carte ${boutique.name}`}
                ></iframe>
              </div>

              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  {boutique.name}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Adresse</p>
                  <p className="font-medium">{boutique.address}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">Horaires</p>
                  <div className="space-y-1">
                    {boutique.hours.map((hour, hourIndex) => (
                      <p key={hourIndex} className="text-sm flex items-center gap-2">
                        <Clock className="h-3 w-3 text-muted-foreground" />
                        {hour}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button size="sm" asChild>
                    <a href={`tel:${boutique.phone}`}>
                      <Phone className="h-4 w-4 mr-2" />
                      Appeler
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(boutique.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Navigation className="h-4 w-4 mr-2" />
                      Itinéraire
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
