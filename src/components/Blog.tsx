import { useTranslation } from "../hooks/useTranslation";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

// Clock Icon for Read Time
const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Arrow Icon
const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M5 12h14m0 0l-7-7m7 7l-7 7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Blog = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  const articles = [
    {
      id: 1,
      title: t.blog.article1.title,
      excerpt: t.blog.article1.excerpt,
      image: "/images/gallery/wine7.jpg",
      readTime: "5 min",
      date: "15 Mar 2024",
      category: "Harmonização"
    },
    {
      id: 2,
      title: t.blog.article2.title,
      excerpt: t.blog.article2.excerpt,
      image: "/images/gallery/wine8.jpg",
      readTime: "7 min",
      date: "12 Mar 2024",
      category: "Armazenamento"
    },
    {
      id: 3,
      title: t.blog.article3.title,
      excerpt: t.blog.article3.excerpt,
      image: "/images/gallery/images.jpeg",
      readTime: "4 min",
      date: "08 Mar 2024",
      category: "Regiões"
    },
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1 && !visibleCards.includes(index)) {
              setVisibleCards((prev) => [...prev, index]);
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visibleCards]);

  return (
    <section ref={sectionRef} id="blog" className="py-32 relative overflow-hidden" style={{ background: 'var(--off-white)' }}>
      {/* Background decoration with animation */}
      <motion.div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, var(--burgundy) 0%, transparent 70%)' }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-28">
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
              Conhecimento
            </span>
            <motion.div
              className="h-px w-24 gold-line"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-light leading-tight mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: 'var(--burgundy-deep)'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            {t.blog.title}
          </motion.h2>

          <motion.p
            className="text-lg font-light leading-loose max-w-2xl mx-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: 'var(--burgundy)',
              opacity: 0.8
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 0.8, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t.blog.subtitle}
          </motion.p>
        </div>

        {/* Blog Cards Grid - Premium Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.5 + index * 0.15, ease: [0.34, 1.56, 0.64, 1] }}
              onMouseEnter={() => setHoveredId(article.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Card Container */}
              <motion.div
                className="relative border overflow-hidden backdrop-blur-sm"
                style={{
                  borderColor: hoveredId === article.id ? 'var(--gold)' : 'rgba(201, 166, 107, 0.2)',
                  backgroundColor: 'white'
                }}
                whileHover={{
                  y: -12,
                  boxShadow: '0 40px 80px -15px rgba(59, 13, 17, 0.3), 0 0 60px -10px rgba(201, 166, 107, 0.4)'
                }}
                transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              >
                {/* Cover Image */}
                <div className="relative h-[280px] overflow-hidden">
                  <motion.img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredId === article.id ? 1.12 : 1
                    }}
                    transition={{ duration: 0.7 }}
                  />

                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0 transition-opacity duration-700"
                    style={{
                      background: 'linear-gradient(180deg, transparent 0%, rgba(74, 14, 19, 0.7) 100%)',
                      opacity: 0.6
                    }}
                  />

                  {/* Category Badge */}
                  <div
                    className="absolute top-4 left-4 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-light border backdrop-blur-sm"
                    style={{
                      backgroundColor: 'rgba(212, 175, 55, 0.9)',
                      borderColor: 'var(--gold-light)',
                      color: 'white'
                    }}
                  >
                    {article.category}
                  </div>

                  {/* Date Badge */}
                  <div
                    className="absolute bottom-4 right-4 px-3 py-1 text-[10px] uppercase tracking-[0.15em] font-light backdrop-blur-sm border"
                    style={{
                      backgroundColor: 'rgba(250, 247, 242, 0.9)',
                      borderColor: 'var(--gold)',
                      color: 'var(--burgundy-deep)'
                    }}
                  >
                    {article.date}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Read Time */}
                  <div className="flex items-center gap-2 mb-4" style={{ color: 'var(--gold)' }}>
                    <ClockIcon />
                    <span className="text-xs uppercase tracking-[0.15em] font-light">
                      {article.readTime} leitura
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-2xl font-light mb-4 leading-tight tracking-wide transition-colors duration-500 group-hover:text-[var(--gold)]"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: 'var(--burgundy-deep)'
                    }}
                  >
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p
                    className="text-sm font-light leading-loose mb-6"
                    style={{
                      color: 'var(--burgundy)',
                      opacity: 0.8
                    }}
                  >
                    {article.excerpt}
                  </p>

                  {/* Read More Button */}
                  <div className="flex items-center gap-2 group/btn">
                    <span
                      className="text-xs uppercase tracking-[0.2em] font-light transition-colors duration-500 group-hover/btn:text-[var(--gold)]"
                      style={{ color: 'var(--burgundy-deep)' }}
                    >
                      {t.blog.readMore}
                    </span>
                    <div className="transition-all duration-500 group-hover/btn:translate-x-2" style={{ color: 'var(--gold)' }}>
                      <ArrowIcon />
                    </div>
                  </div>

                  {/* Bottom gold line on hover */}
                  <div
                    className="absolute bottom-0 left-0 h-px transition-all duration-700"
                    style={{
                      backgroundColor: 'var(--gold)',
                      width: '0%',
                    }}
                  />
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>

        {/* View All Button - Premium */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.button
            className="group relative border-2 px-16 py-5 text-sm font-light uppercase tracking-[0.3em] overflow-hidden backdrop-blur-sm"
            style={{
              borderColor: 'var(--gold)',
              color: 'var(--burgundy-deep)',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              boxShadow: '0 0 30px rgba(201, 166, 107, 0.2)'
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 50px rgba(201, 166, 107, 0.5)'
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-700">
              Ver Todos os Artigos
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
            <motion.div
              className="absolute inset-0"
              style={{ background: 'var(--gradient-gold)', translateX: '-100%' }}
              whileHover={{ translateX: '0%' }}
              transition={{ duration: 0.7 }}
            />
          </motion.button>
        </motion.div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};
