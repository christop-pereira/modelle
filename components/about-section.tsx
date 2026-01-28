export function AboutSection() {
  return (
    <section id="apropos" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Texte */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-balance">
              À Propos de Mod&apos;Elle
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="text-balance">
                Depuis 2013, Mod&apos;Elle est bien plus qu&apos;une boutique de prêt-à-porter féminin : 
                c&apos;est un lieu de confiance, de proximité et de partage. Fondée par deux sœurs, Rosa et Lurdes, 
                Mod&apos;Elle est née d&apos;une passion commune pour la mode féminine 
                et d&apos;un savoir-faire transmis de mère en fille. Leur maman, couturière, 
                leur a légué l&apos;amour du travail bien fait et de l&apos;attention portée aux détails.
              </p>

              <p className="text-balance">
                Mod&apos;Elle propose une sélection de vêtements soigneusement choisis pour sublimer 
                toutes les silhouettes, y compris les grandes tailles. 
                Chaque pièce allie élégance, confort et modernité afin que chaque femme puisse se sentir 
                belle et sûre d&apos;elle, quelle que soit l&apos;occasion.
              </p>

              <p className="text-balance">
                Chez Mod&apos;Elle, chaque visite est une véritable expérience. On prend le temps de vous écouter, 
                de vous conseiller avec bienveillance et de vous accompagner dans le choix des coupes, 
                des matières et des styles qui vous mettent en valeur. Ici, l&apos;accueil est chaleureux, 
                les conseils sont sincères et l&apos;on se sent rapidement comme chez soi.
              </p>

              <p className="text-balance">
                Vous pouvez retrouver Rosa à Grand-Lancy (Genève) et 
                Lurdes au centre commercial de Budé, au Petit-Saconnex. 
                Deux boutiques, un même esprit : celui d&apos;un commerce de proximité où l&apos;humain, 
                le savoir-faire et la passion sont au cœur de chaque rencontre.
              </p>
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:max-w-lg sm:mx-auto">

            {/* Budé */}
            <div className="space-y-2">
              <h3 className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-gray-500 text-center">
                Petit-Saconnex
              </h3>

              <div className="space-y-2">
                <div className="aspect-[3/4] sm:translate-x-2 sm:rotate-[1deg]">
                  <img
                    src="/boutique-bude1.jpeg"
                    className="w-full h-full object-cover rounded-md shadow-sm"
                  />
                </div>

                <div className="aspect-[3/4] sm:translate-x-1 sm:rotate-[-0.5deg]">
                  <img
                    src="/boutique-bude2.jpeg"
                    className="w-full h-full object-cover rounded-md shadow-sm"
                  />
                </div>
              </div>
            </div>

            {/* Grand-Lancy */}
            <div className="space-y-2 sm:pt-6">
              <h3 className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-gray-500 text-center">
                Grand-Lancy
              </h3>

              <div className="space-y-2">
                <div className="aspect-[3/4] sm:translate-x-[-2] sm:rotate-[-1deg]">
                  <img
                    src="/boutique-grandlancy1.jpeg"
                    className="w-full h-full object-cover rounded-md shadow-sm"
                  />
                </div>

                <div className="aspect-[3/4] sm:translate-x-[-1] sm:rotate-[0.5deg]">
                  <img
                    src="/boutique-grandlancy2.jpeg"
                    className="w-full h-full object-cover rounded-md shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
