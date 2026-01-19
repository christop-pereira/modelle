import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

// Avis anonymes
const reviews = [
  {
    rating: 5,
    comment:
      "Je suis toujours ravie de passer chez Rosa ! Elle a su me conseiller une robe unique qui me va parfaitement et a ajusté quelques détails grâce à ses retouches. On se sent écoutée et choyée, c’est un vrai plaisir de revenir !",
  },
  {
    rating: 5,
    comment:
      "Boutique superbe ! L’accueil est tellement chaleureux et les conseils très personnalisés. J’ai enfin trouvé des vêtements élégants en grandes tailles qui me mettent en valeur. Merci Lurdes pour votre gentillesse !",
  },
  {
    rating: 5,
    comment:
      "Je suis tombée amoureuse de ma nouvelle tenue grâce à Lurdes ! Ses conseils sont toujours précis et l’accueil est si agréable que l’on a l’impression de discuter avec une amie. Une boutique incontournable pour toutes les femmes !",
  },
  {
    rating: 5,
    comment:
      "Une expérience exceptionnelle chez Rosa ! Elle a pris le temps d’ajuster ma blouse et m’a donné des astuces pour la porter. Le service est vraiment humain et chaque visite est un moment agréable.",
  },
];

export function ReviewsSection() {
  const averageRating =
    reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

  return (
    <section id="avis" className="py-16 md:py-24 bg-background from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre et moyenne */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-balance">
            Avis Clients
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 ${
                    i < Math.round(averageRating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-lg md:text-xl font-semibold text-gray-700">
              {averageRating.toFixed(1)} / 5
            </span>
          </div>
        </div>

        {/* Avis */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="bg-card hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-300"
            >
              <CardContent className="p-8 flex flex-col h-full justify-between">
                {/* Étoiles */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < review.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Commentaire */}
                <p className="text-sm text-gray-700 italic flex-grow">
                  "{review.comment}"
                </p>

                {/* Avatar anonyme */}
                <div className="flex items-center gap-3 mt-6">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray font-semibold">
                    C
                  </div>
                  <span className="text-sm font-medium text-gray-600">
                    Cliente Mod'Elle
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
