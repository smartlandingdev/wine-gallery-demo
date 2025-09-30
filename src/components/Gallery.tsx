import { useTranslation } from "../hooks/useTranslation";
import { useState, useRef } from "react";

export const Gallery = () => {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedCountry, setSelectedCountry] = useState<string>("all");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const wines = [
    {
      id: 1,
      name: "Château Margaux 2018",
      image: "/images/gallery/wine2.png",
      region: "Bordeaux",
      country: "França",
      price: "€ 850",
      limited: true,
    },
    {
      id: 2,
      name: "Barolo Riserva 2017",
      image: "/images/gallery/wine1.jpg",
      region: "Piedmont",
      country: "Itália",
      price: "€ 420",
      limited: false,
    },
    {
      id: 3,
      name: "Caymus Cabernet 2020",
      image: "/images/gallery/wine3.png",
      region: "Napa Valley",
      country: "EUA",
      price: "$ 380",
      limited: false,
    },
    {
      id: 4,
      name: "Dom Pérignon 2012",
      image: "/images/gallery/wine4.png",
      region: "Champagne",
      country: "França",
      price: "€ 950",
      limited: true,
    },
    {
      id: 5,
      name: "Opus One 2019",
      image: "/images/gallery/wine5.png",
      region: "Napa Valley",
      country: "EUA",
      price: "$ 680",
      limited: true,
    },
    {
      id: 6,
      name: "Brunello di Montalcino 2018",
      image: "/images/gallery/wine6.png",
      region: "Tuscany",
      country: "Itália",
      price: "€ 520",
      limited: false,
    },
    {
      id: 7,
      name: "Vega Sicilia Único 2015",
      image: "/images/gallery/wine2.png",
      region: "Ribera del Duero",
      country: "Espanha",
      price: "€ 780",
      limited: true,
    },
    {
      id: 8,
      name: "Pingus 2018",
      image: "/images/gallery/wine1.jpg",
      region: "Ribera del Duero",
      country: "Espanha",
      price: "€ 1,200",
      limited: true,
    },
  ];

  const countries = ["all", "França", "Itália", "EUA", "Espanha"];

  const filteredWines = selectedCountry === "all"
    ? wines
    : wines.filter(wine => wine.country === selectedCountry);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="gallery" className="py-32 relative overflow-hidden" style={{ background: 'var(--warm-gray)' }}>
      <div className="max-w-[1600px] mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-6 mb-8 animate-fade-in">
            <div className="h-px w-20 gold-line" />
            <span className="text-[10px] uppercase tracking-[0.35em] font-light" style={{ color: 'var(--gold)' }}>
              Coleção Premium
            </span>
            <div className="h-px w-20 gold-line" />
          </div>

          <h2
            className="text-5xl md:text-7xl font-light leading-tight mb-12 animate-fade-in-up"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: 'var(--burgundy-deep)',
              animationDelay: '0.1s'
            }}
          >
            {t.gallery.title}
          </h2>

          {/* Smart Filters */}
          <div className="flex items-center justify-center gap-6 flex-wrap animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {countries.map((country) => (
              <button
                key={country}
                onClick={() => setSelectedCountry(country)}
                className="relative px-6 py-2 text-sm font-light uppercase tracking-[0.2em] transition-all duration-500 overflow-hidden group"
                style={{
                  color: selectedCountry === country ? 'white' : 'var(--burgundy)',
                  borderBottom: selectedCountry === country ? '1px solid var(--gold)' : '1px solid transparent',
                }}
              >
                {/* Active background */}
                <div
                  className="absolute inset-0 transition-transform duration-500"
                  style={{
                    backgroundColor: 'var(--gold)',
                    transform: selectedCountry === country ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left'
                  }}
                />

                {/* Hover background */}
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    backgroundColor: 'var(--burgundy)',
                    opacity: selectedCountry !== country ? 0 : 0
                  }}
                />

                <span className="relative z-10 group-hover:text-[var(--gold)]">
                  {country === "all" ? "Todos" : country}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Horizontal Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 border flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:bg-[var(--gold)] hover:border-[var(--gold)] group"
            style={{ borderColor: 'var(--gold)', backgroundColor: 'rgba(250, 247, 242, 0.9)' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--burgundy)" strokeWidth="1" className="group-hover:stroke-white transition-colors">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 border flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:bg-[var(--gold)] hover:border-[var(--gold)] group"
            style={{ borderColor: 'var(--gold)', backgroundColor: 'rgba(250, 247, 242, 0.9)' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--burgundy)" strokeWidth="1" className="group-hover:stroke-white transition-colors">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide py-8 px-16"
            style={{ scrollbarWidth: 'none' }}
          >
            {filteredWines.map((wine, index) => (
              <div
                key={wine.id}
                className="flex-shrink-0 w-[320px] animate-fade-in-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                onMouseEnter={() => setHoveredId(wine.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* 3D Card Container */}
                <div
                  className="relative h-[500px] border bg-white/60 backdrop-blur-sm overflow-hidden transition-all duration-700 group"
                  style={{
                    borderColor: hoveredId === wine.id ? 'var(--gold)' : 'var(--warm-gray)',
                    transform: hoveredId === wine.id ? 'perspective(1000px) rotateY(5deg) scale(1.05)' : 'perspective(1000px) rotateY(0deg) scale(1)',
                    boxShadow: hoveredId === wine.id ? '0 30px 60px -15px rgba(107, 28, 35, 0.3)' : '0 10px 30px -10px rgba(107, 28, 35, 0.1)'
                  }}
                >
                  {/* Limited Edition Tag */}
                  {wine.limited && (
                    <div
                      className="absolute top-4 right-4 z-10 px-3 py-1 text-[9px] uppercase tracking-[0.2em] font-light border animate-parallax-slide"
                      style={{
                        backgroundColor: 'var(--gold)',
                        color: 'white',
                        borderColor: 'var(--gold-light)',
                      }}
                    >
                      Edição Limitada
                    </div>
                  )}

                  {/* Wine Image */}
                  <div className="h-[320px] flex items-center justify-center p-8 overflow-hidden">
                    <img
                      src={wine.image}
                      alt={wine.name}
                      className="h-full w-auto object-contain transition-all duration-700"
                      style={{
                        transform: hoveredId === wine.id ? 'scale(1.15) translateY(-10px)' : 'scale(1) translateY(0)',
                        filter: hoveredId === wine.id ? 'drop-shadow(0 20px 30px rgba(107, 28, 35, 0.3))' : 'none'
                      }}
                    />
                  </div>

                  {/* Wine Details */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-500"
                    style={{
                      backgroundColor: hoveredId === wine.id ? 'rgba(107, 28, 35, 0.95)' : 'rgba(250, 247, 242, 0.95)',
                    }}
                  >
                    <h3
                      className="text-xl font-light mb-2 tracking-wide transition-colors duration-500"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: hoveredId === wine.id ? 'var(--gold)' : 'var(--burgundy-deep)'
                      }}
                    >
                      {wine.name}
                    </h3>

                    <p
                      className="text-xs mb-3 font-light transition-colors duration-500"
                      style={{
                        color: hoveredId === wine.id ? 'var(--gold-light)' : 'var(--burgundy)',
                        opacity: 0.8
                      }}
                    >
                      {wine.region}, {wine.country}
                    </p>

                    <div className="flex items-center justify-between">
                      <span
                        className="text-lg font-light tracking-wide transition-colors duration-500"
                        style={{
                          color: hoveredId === wine.id ? 'white' : 'var(--burgundy-deep)'
                        }}
                      >
                        {wine.price}
                      </span>

                      {/* View Details on Hover */}
                      <button
                        className="text-xs uppercase tracking-[0.15em] font-light transition-all duration-500 flex items-center gap-2"
                        style={{
                          color: hoveredId === wine.id ? 'var(--gold)' : 'transparent',
                          opacity: hoveredId === wine.id ? 1 : 0
                        }}
                      >
                        Ver detalhes
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1">
                          <path d="M5 12h14m0 0l-7-7m7 7l-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hide scrollbar CSS */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};
