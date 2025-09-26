import { useTranslation } from "../hooks/useTranslation";

export const Partners = () => {
  const { t } = useTranslation();

  const partners = [
    {
      id: 1,
      name: "Château Margaux",
      logo: "/images/partners/chateau-margaux.png", // Replace with actual winery logo
    },
    {
      id: 2,
      name: "Antinori",
      logo: "/images/partners/antinori.png", // Replace with actual winery logo
    },
    {
      id: 3,
      name: "Opus One",
      logo: "/images/partners/opus-one.png", // Replace with actual winery logo
    },
    {
      id: 4,
      name: "Dom Pérignon",
      logo: "/images/partners/dom-perignon.png", // Replace with actual winery logo
    },
    {
      id: 5,
      name: "Caymus",
      logo: "/images/partners/caymus.png", // Replace with actual winery logo
    },
    {
      id: 6,
      name: "Barolo",
      logo: "/images/partners/barolo.png", // Replace with actual winery logo
    },
  ];

  return (
    <section id="partners" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.partners.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.partners.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-center">
                <div className="text-sm font-medium text-gray-600 group-hover:text-red-600 transition-colors">
                  {partner.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">{t.partners.trust}</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              {t.partners.certified}
            </span>
            <span className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              {t.partners.authentic}
            </span>
            <span className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              {t.partners.quality}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
