import { useTranslation } from "../hooks/useTranslation";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

export const Gallery = () => {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
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
    <section ref={sectionRef} id="gallery" className="py-32 relative overflow-hidden" style={{ background: 'var(--warm-gray)' }}>
      {/* Floating Gold Accent */}
      <motion.div
        className="absolute top-20 right-20 w-[400px] h-[400px] rounded-full blur-3xl opacity-20"
        style={{ background: 'var(--gradient-glow)' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-[1600px] mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-20">
          <motion.div
            className="flex items-center justify-center gap-6 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="h-px w-24 gold-line"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <span className="text-[10px] uppercase tracking-[0.4em] font-light" style={{ color: 'var(--gold)' }}>
              Coleção Premium
            </span>
            <motion.div
              className="h-px w-24 gold-line"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-light leading-tight mb-16"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: 'var(--burgundy-deep)'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            {t.gallery.title}
          </motion.h2>

          {/* Smart Filters - Premium Style */}
          <motion.div
            className="flex items-center justify-center gap-6 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {countries.map((country, index) => (
              <motion.button
                key={country}
                onClick={() => setSelectedCountry(country)}
                className="relative px-8 py-3 text-xs font-light uppercase tracking-[0.25em] border overflow-hidden"
                style={{
                  color: selectedCountry === country ? 'white' : 'var(--burgundy)',
                  borderColor: selectedCountry === country ? 'var(--gold)' : 'transparent',
                  backgroundColor: selectedCountry === country ? 'var(--gold)' : 'rgba(255, 255, 255, 0.7)',
                  boxShadow: selectedCountry === country ? '0 0 30px rgba(201, 166, 107, 0.5)' : 'none'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: selectedCountry !== country ? '0 0 20px rgba(201, 166, 107, 0.3)' : '0 0 40px rgba(201, 166, 107, 0.6)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">
                  {country === "all" ? "Todos" : country}
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Horizontal Slider */}
        <div className="relative">
          {/* Navigation Buttons - Premium Style */}
          <motion.button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 border flex items-center justify-center backdrop-blur-md group"
            style={{
              borderColor: 'var(--gold)',
              backgroundColor: 'rgba(12, 12, 12, 0.8)'
            }}
            whileHover={{
              scale: 1.1,
              backgroundColor: 'var(--gold)',
              boxShadow: '0 0 30px rgba(201, 166, 107, 0.6)'
            }}
            whileTap={{ scale: 0.9 }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" className="group-hover:stroke-white transition-colors">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>

          <motion.button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 border flex items-center justify-center backdrop-blur-md group"
            style={{
              borderColor: 'var(--gold)',
              backgroundColor: 'rgba(12, 12, 12, 0.8)'
            }}
            whileHover={{
              scale: 1.1,
              backgroundColor: 'var(--gold)',
              boxShadow: '0 0 30px rgba(201, 166, 107, 0.6)'
            }}
            whileTap={{ scale: 0.9 }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" className="group-hover:stroke-white transition-colors">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-10 overflow-x-auto scrollbar-hide py-8 px-16"
            style={{ scrollbarWidth: 'none' }}
          >
            <AnimatePresence mode="wait">
              {filteredWines.map((wine, index) => (
                <motion.div
                  key={wine.id}
                  className="flex-shrink-0 w-[340px]"
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredId(wine.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* 3D Card Container - Premium */}
                  <motion.div
                    className="relative h-[520px] border overflow-hidden cursor-pointer"
                    style={{
                      borderColor: hoveredId === wine.id ? 'var(--gold)' : 'rgba(201, 166, 107, 0.2)',
                      background: hoveredId === wine.id
                        ? 'linear-gradient(135deg, rgba(245, 243, 239, 1), rgba(232, 227, 218, 0.95))'
                        : 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(10px)'
                    }}
                    whileHover={{
                      y: -12,
                      rotateY: 5,
                      boxShadow: '0 50px 100px -20px rgba(59, 13, 17, 0.4), 0 0 80px -15px rgba(201, 166, 107, 0.5)'
                    }}
                    transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                  >
                    {/* Limited Edition Tag - Premium Gold */}
                    {wine.limited && (
                      <motion.div
                        className="absolute top-5 right-5 z-10 px-4 py-1.5 text-[9px] uppercase tracking-[0.25em] font-light border backdrop-blur-sm"
                        style={{
                          backgroundColor: 'rgba(201, 166, 107, 0.95)',
                          color: 'white',
                          borderColor: 'var(--gold-light)',
                          boxShadow: '0 4px 15px rgba(201, 166, 107, 0.4)'
                        }}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        Edição Limitada
                      </motion.div>
                    )}

                    {/* Wine Image with Hover Effect */}
                    <div className="h-[340px] flex items-center justify-center p-10 overflow-hidden">
                      <motion.img
                        src={wine.image}
                        alt={wine.name}
                        className="h-full w-auto object-contain"
                        animate={{
                          scale: hoveredId === wine.id ? 1.18 : 1,
                          y: hoveredId === wine.id ? -12 : 0
                        }}
                        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                        style={{
                          filter: hoveredId === wine.id
                            ? 'drop-shadow(0 25px 40px rgba(59, 13, 17, 0.4))'
                            : 'drop-shadow(0 10px 20px rgba(59, 13, 17, 0.15))'
                        }}
                      />
                    </div>

                    {/* Wine Details - Premium Design */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 p-7 backdrop-blur-md"
                      style={{
                        backgroundColor: hoveredId === wine.id
                          ? 'rgba(59, 13, 17, 0.98)'
                          : 'rgba(245, 243, 239, 0.95)',
                        borderTop: hoveredId === wine.id ? '1px solid var(--gold)' : '1px solid transparent'
                      }}
                      animate={{
                        backgroundColor: hoveredId === wine.id
                          ? 'rgba(59, 13, 17, 0.98)'
                          : 'rgba(245, 243, 239, 0.95)'
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.h3
                        className="text-xl font-light mb-2 tracking-wide"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          color: hoveredId === wine.id ? 'var(--gold)' : 'var(--burgundy-deep)'
                        }}
                        animate={{
                          color: hoveredId === wine.id ? 'var(--gold)' : 'var(--burgundy-deep)'
                        }}
                      >
                        {wine.name}
                      </motion.h3>

                      <motion.p
                        className="text-xs mb-4 font-light"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          color: hoveredId === wine.id ? 'var(--gold-light)' : 'var(--burgundy)',
                          opacity: 0.85
                        }}
                      >
                        {wine.region}, {wine.country}
                      </motion.p>

                      <div className="flex items-center justify-between">
                        <motion.span
                          className="text-2xl font-light tracking-wide"
                          style={{
                            fontFamily: "'Playfair Display', serif",
                            color: hoveredId === wine.id ? 'white' : 'var(--burgundy-deep)'
                          }}
                          animate={{
                            scale: hoveredId === wine.id ? 1.05 : 1
                          }}
                        >
                          {wine.price}
                        </motion.span>

                        {/* View Details Button */}
                        <motion.button
                          className="text-xs uppercase tracking-[0.2em] font-light flex items-center gap-2 border px-4 py-2"
                          style={{
                            color: hoveredId === wine.id ? 'var(--gold)' : 'transparent',
                            borderColor: hoveredId === wine.id ? 'var(--gold)' : 'transparent',
                            backgroundColor: hoveredId === wine.id ? 'rgba(201, 166, 107, 0.1)' : 'transparent'
                          }}
                          animate={{
                            opacity: hoveredId === wine.id ? 1 : 0,
                            x: hoveredId === wine.id ? 0 : -10
                          }}
                          whileHover={{
                            backgroundColor: 'var(--gold)',
                            color: 'white',
                            scale: 1.05
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          Ver mais
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M5 12h14m0 0l-7-7m7 7l-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </motion.button>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
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
