import { useTranslation } from "../hooks/useTranslation";

export const Gallery = () => {
  const { t } = useTranslation();

  const wines = [
    {
      id: 1,
      name: "Château Margaux 2018",
      image: "/images/gallery/wine2.png",
      region: "Bordeaux, France",
    },
    {
      id: 2,
      name: "Barolo Riserva 2017",
      image: "/images/gallery/wine1.jpg",
      region: "Piedmont, Italy",
    },
    {
      id: 3,
      name: "Caymus Cabernet 2020",
      image: "/images/gallery/wine3.png",

      region: "Napa Valley, USA",
    },
    {
      id: 4,
      name: "Dom Pérignon 2012",
      image: "/images/gallery/wine4.png",

      region: "Champagne, France",
    },
    {
      id: 5,
      name: "Opus One 2019",
      image: "/images/gallery/wine5.png",
      region: "Napa Valley, USA",
    },
    {
      id: 6,
      name: "Brunello di Montalcino 2018",
      image: "/images/gallery/wine6.png",
      region: "Tuscany, Italy",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.gallery.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {wines.map((wine) => (
            <div
              key={wine.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={wine.image}
                  alt={wine.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-2">{wine.name}</h3>
                <p className="text-gray-200">{wine.region}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
