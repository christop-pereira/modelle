import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Scissors, Sparkles, ShoppingBag, Clock, Euro } from "lucide-react"

const services = [
  {
    icon: ShoppingBag,
    title: "Prêt-à-Porter Féminin",
    description: "Une sélection soignée de vêtements pour toutes les occasions",
    items: [
      "Collections saisonnières",
      "Marques soigneusement sélectionnées",
      "Pièces tendance et intemporelles",
      "Accessoires et bijoux assortis",
    ],
    price: "en boutique",
    delay: "immédiat",
  },
  {
    icon: Scissors,
    title: "Retouches",
    description: "Service de retouches sur vos achats en boutique ou de l'extérieur",
    items: [
      "Ourlets pantalons et robes",
      "Ajustement taille et hanches",
      "Raccourcissement manches",
      "Réparations et reprises",
    ],
    price: "dès 20 CHF",
    delay: "7 jours",
  },
  {
    icon: Sparkles,
    title: "Créations Uniques",
    description: "Des vêtements réalisés avec passion, pour révéler votre style et votre personnalité",
    items: [
      "Pièces originales",
      "Modèles uniques en boutique",
      "Finitions artisanales",
      "Exemplaires limités",
    ],
    price: "en boutique",
    delay: "selon disponibilité",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-12 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Nos Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Prêt-à-porter féminin, retouches professionnelles et créations uniques sous un même toit
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6 text-sm">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Euro className="h-4 w-4 mr-1" />
                    {service.price}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {service.delay}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
