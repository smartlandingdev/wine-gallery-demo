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
      image: "https://ingavinhos.vtexassets.com/arquivos/ids/160018/Vinho-Quinta-do-Morgado-Tinto-Suave-1-0-L.png?v=637879652998670000",
      region: "Bordeaux",
      country: "França",
      price: "€ 850",
      limited: true,
    },
    {
      id: 2,
      name: "Barolo Riserva 2017",
      image: "https://vinhosjolimont.vtexassets.com/arquivos/ids/156659-800-auto?v=638639203632370000&width=800&height=auto&aspect=true",
      region: "Piedmont",
      country: "Itália",
      price: "€ 420",
      limited: false,
    },
    {
      id: 3,
      name: "Caymus Cabernet 2020",
      image: "https://cdn.sistemawbuy.com.br/arquivos/86047262e471906a773af26d54e02a3a/produtos/KIO6ZOU2/vinho_periquita_tinto-60b58516838ed_mini.png",
      region: "Napa Valley",
      country: "EUA",
      price: "$ 380",
      limited: false,
    },
    {
      id: 4,
      name: "Dom Pérignon 2012",
      image: "https://phygital-files.mercafacil.com/catalogo/uploads/produto/vinho_brasileiro_tinto_seco_campo_largo_serra_ga_cha_garrafa_750ml_d878d0e6-b399-4afa-bc4f-189970a6acbc.png",
      region: "Champagne",
      country: "França",
      price: "€ 950",
      limited: true,
    },
    {
      id: 5,
      name: "Opus One 2019",
      image: "https://casaflora.vtexassets.com/arquivos/ids/158774-800-auto?v=638881856928000000&width=800&height=auto&aspect=true",
      region: "Napa Valley",
      country: "EUA",
      price: "$ 680",
      limited: true,
    },
    {
      id: 6,
      name: "Brunello di Montalcino 2018",
      image: "https://assets.betalabs.net/production/casageraldo/item-images/f9b0f5d1f30643628951cd05c5861f1f.png",
      region: "Tuscany",
      country: "Itália",
      price: "€ 520",
      limited: false,
    },
    {
      id: 7,
      name: "Vega Sicilia Único 2015",
      image: "https://www.wine.com.br/cdn-cgi/image/f=png,h=611,q=99/assets-images/produtos/31526-01.png",
      region: "Ribera del Duero",
      country: "Espanha",
      price: "€ 780",
      limited: true,
    },
    {
      id: 8,
      name: "Pingus 2018",
      image: "https://www.grandcru.com.br/media/catalog/product/cache/c654e2e74f68eb18cfab7a80423f7271/f/r/frpat0149a15.png",
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
      {/* Paper Texture Background - More Visible */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(139, 69, 19, 0.3) 1px, transparent 1px),
            radial-gradient(circle at 60% 70%, rgba(160, 82, 45, 0.25) 1px, transparent 1px),
            radial-gradient(circle at 80% 20%, rgba(101, 67, 33, 0.2) 1px, transparent 1px),
            radial-gradient(circle at 30% 80%, rgba(139, 69, 19, 0.28) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(160, 82, 45, 0.22) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px, 120px 120px, 100px 100px, 110px 110px, 90px 90px',
          backgroundPosition: '0 0, 40px 60px, 80px 20px, 30px 90px, 50px 50px'
        }}
      />

      {/* Linen Texture - More Visible */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(201, 166, 107, 0.15) 1px, transparent 1px),
            linear-gradient(0deg, rgba(201, 166, 107, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}
      />

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

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title - Aligned with other sections */}
        <div className="mb-20">
          <motion.div
            className="flex items-center gap-6 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="h-px w-20 gold-line"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <span className="text-[10px] uppercase tracking-[0.4em] font-light" style={{ color: 'var(--gold)' }}>
              Coleção Premium
            </span>
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

          {/* Elegant Filters - More Visible */}
          <motion.div
            className="flex items-center gap-3 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {countries.map((country, index) => (
              <motion.button
                key={country}
                onClick={() => setSelectedCountry(country)}
                className="relative px-6 py-2.5 text-xs font-medium uppercase tracking-[0.2em]"
                style={{
                  color: selectedCountry === country ? 'var(--burgundy-deep)' : 'var(--burgundy)',
                  backgroundColor: selectedCountry === country ? 'rgba(201, 166, 107, 0.25)' : 'rgba(201, 166, 107, 0.08)',
                  borderBottom: selectedCountry === country ? '2px solid var(--gold)' : '2px solid rgba(139, 69, 19, 0.2)'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{
                  color: 'var(--burgundy-deep)',
                  backgroundColor: 'rgba(201, 166, 107, 0.18)',
                  borderBottom: '2px solid rgba(201, 166, 107, 0.5)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                {country === "all" ? "Todos" : country}
              </motion.button>
            ))}
          </motion.div>
        </div>

      {/* Horizontal Draggable Slider - FULL Screen Width */}
      <div className="relative w-screen -ml-[50vw] left-[50%]">
        {/* Scrollable Container - Full Width with Drag */}
        <div
          ref={scrollRef}
          className="flex gap-2 overflow-x-auto scrollbar-hide py-8 px-4 cursor-grab active:cursor-grabbing select-none"
          style={{ scrollbarWidth: 'none' }}
            onMouseDown={(e) => {
              const slider = scrollRef.current;
              if (!slider) return;

              const startX = e.pageX - slider.offsetLeft;
              const scrollLeft = slider.scrollLeft;

              const handleMouseMove = (e: MouseEvent) => {
                const x = e.pageX - slider.offsetLeft;
                const walk = (x - startX) * 2;
                slider.scrollLeft = scrollLeft - walk;
              };

              const handleMouseUp = () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
              };

              document.addEventListener('mousemove', handleMouseMove);
              document.addEventListener('mouseup', handleMouseUp);
            }}
          >
            <AnimatePresence mode="wait">
              {filteredWines.map((wine, index) => (
                <motion.div
                  key={wine.id}
                  className="flex-shrink-0"
                  style={{ width: 'calc(100vw / 4.5)' }}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  onMouseEnter={() => setHoveredId(wine.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Minimal Card with Border on Entire Card */}
                  <motion.div
                    className="relative cursor-pointer h-full p-6"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.03)'
                    }}
                    animate={{
                      backgroundColor: hoveredId === wine.id
                        ? 'rgba(255, 255, 255, 0.06)'
                        : 'rgba(255, 255, 255, 0.03)'
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Border on Entire Card appears on hover - NO external glow */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      animate={{
                        opacity: hoveredId === wine.id ? 1 : 0,
                        boxShadow: hoveredId === wine.id
                          ? 'inset 0 0 0 2px rgba(201, 166, 107, 0.8)'
                          : 'inset 0 0 0 0px transparent'
                      }}
                      transition={{ duration: 0.4 }}
                    />

                    {/* Limited Edition Tag */}
                    {wine.limited && (
                      <motion.div
                        className="absolute top-3 right-3 px-3 py-1 text-[8px] uppercase tracking-[0.2em] font-light z-10"
                        style={{
                          backgroundColor: 'rgba(201, 166, 107, 0.95)',
                          color: 'white'
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        Limited
                      </motion.div>
                    )}

                    {/* Wine Image with rustic filter and subtle background */}
                    <div className="relative h-[350px] mb-4 overflow-hidden">
                      <motion.img
                        src={wine.image}
                        alt={wine.name}
                        className="w-full h-full object-contain pointer-events-none"
                        animate={{
                          scale: hoveredId === wine.id ? 1.05 : 1
                        }}
                        transition={{ duration: 0.5 }}
                        style={{
                          filter: hoveredId === wine.id
                            ? 'contrast(1.15) saturate(0.88) brightness(0.95) sepia(0.15) hue-rotate(-5deg) drop-shadow(0 20px 40px rgba(201, 166, 107, 0.3))'
                            : 'contrast(1.12) saturate(0.85) brightness(0.92) sepia(0.2) hue-rotate(-5deg) drop-shadow(0 5px 15px rgba(0, 0, 0, 0.1))'
                        }}
                      />
                    </div>

                    {/* Minimal Description Below */}
                    <div className="space-y-1">
                      <motion.h3
                        className="text-base font-light tracking-wide"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          color: 'var(--burgundy-deep)'
                        }}
                      >
                        {wine.name}
                      </motion.h3>

                      <p
                        className="text-xs font-light"
                        style={{
                          color: 'var(--burgundy)',
                          opacity: 0.7
                        }}
                      >
                        {wine.region}, {wine.country}
                      </p>

                      <motion.div
                        className="text-lg font-light pt-1"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          color: hoveredId === wine.id ? 'var(--gold)' : 'var(--burgundy-deep)'
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {wine.price}
                      </motion.div>
                    </div>
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
