import { useTranslation } from "../hooks/useTranslation";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

// Clock Icon for Read Time - Bright Gold
const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Arrow Icon - Bright Gold
const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="1.5">
    <path d="M5 12h14m0 0l-7-7m7 7l-7 7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Blog = () => {
  const { t, language } = useTranslation();
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
      category: t.blog.categoryPairing
    },
    {
      id: 2,
      title: t.blog.article2.title,
      excerpt: t.blog.article2.excerpt,
      image: "/images/gallery/wine8.jpg",
      readTime: "7 min",
      date: "12 Mar 2024",
      category: t.blog.categoryStorage
    },
    {
      id: 3,
      title: t.blog.article3.title,
      excerpt: t.blog.article3.excerpt,
      image: "/images/gallery/images.jpeg",
      readTime: "4 min",
      date: "08 Mar 2024",
      category: t.blog.categoryRegions
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
      {/* Gold Shimmer Wave - Same as Story */}
      <motion.div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          background: 'linear-gradient(120deg, transparent 0%, rgba(201, 166, 107, 0.6) 45%, rgba(212, 175, 55, 0.4) 55%, transparent 100%)',
          filter: 'blur(50px)'
        }}
        animate={{
          x: ['-100%', '200%']
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Burgundy Flow - Same as Story */}
      <motion.div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          background: 'linear-gradient(-60deg, transparent 0%, rgba(107, 28, 35, 0.5) 50%, transparent 100%)',
          filter: 'blur(60px)'
        }}
        animate={{
          x: ['100%', '-100%', '100%'],
          y: [0, 60, 0]
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating Orb - Gold */}
      <motion.div
        className="absolute top-[20%] left-[10%] w-[450px] h-[450px] rounded-full opacity-[0.11]"
        style={{
          background: 'radial-gradient(circle, rgba(201, 166, 107, 0.7) 0%, rgba(212, 175, 55, 0.4) 40%, transparent 70%)',
          filter: 'blur(45px)'
        }}
        animate={{
          y: [0, -70, 0],
          x: [0, 40, 0],
          scale: [1, 1.25, 1]
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating Orb - Warm Bronze */}
      <motion.div
        className="absolute bottom-[10%] right-[15%] w-[550px] h-[550px] rounded-full opacity-[0.1]"
        style={{
          background: 'radial-gradient(circle, rgba(160, 82, 45, 0.6) 0%, rgba(139, 69, 19, 0.3) 40%, transparent 70%)',
          filter: 'blur(50px)'
        }}
        animate={{
          y: [0, 90, 0],
          x: [0, -50, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 26,
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
              {t.blog.knowledgeLabel}
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

        {/* Blog Cards Grid - Redesigned from Scratch */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              onMouseEnter={() => setHoveredId(article.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <motion.div
                className="relative h-full flex flex-col overflow-hidden"
                style={{
                  backgroundColor: '#2C0A0D',
                  border: '1px solid rgba(201, 166, 107, 0.2)'
                }}
                whileHover={{
                  y: -6,
                  borderColor: 'rgba(201, 166, 107, 0.5)'
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Image Section */}
                <div className="relative h-[240px] overflow-hidden">
                  <motion.img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                    style={{
                      filter: 'brightness(0.75)'
                    }}
                    whileHover={{
                      scale: 1.05
                    }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Category Badge */}
                  <div
                    className="absolute top-3 left-3 px-3 py-1"
                    style={{
                      backgroundColor: '#C9A66B',
                      color: '#1A0508',
                      fontSize: '9px',
                      fontWeight: '600',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase'
                    }}
                  >
                    {article.category}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-1.5">
                      <ClockIcon />
                      <span style={{ color: '#E8D5A8', fontSize: '11px', fontWeight: '600', letterSpacing: '0.05em' }}>
                        {article.readTime} {t.blog.readTimeLabel}
                      </span>
                    </div>
                    <span style={{ color: '#E8D5A8', fontSize: '11px', fontWeight: '600' }}>
                      {article.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '22px',
                      fontWeight: '400',
                      lineHeight: '1.3',
                      color: '#F5E6B3',
                      marginBottom: '12px'
                    }}
                  >
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <span
                    style={{
                      color: '#c9a66b',
                      fontSize: '14px',
                      fontWeight: '500',
                      lineHeight: '1.6',
                      marginBottom: '16px',
                      flex: 1
                    }}
                  >
                    {article.excerpt}
                  </span>

                  {/* Read More Link */}
                  <motion.div
                    className="flex items-center gap-2 mt-auto"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span
                      style={{
                        color: '#F5E6B3',
                        fontSize: '11px',
                        fontWeight: '700',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase'
                      }}
                    >
                      {t.blog.readMore}
                    </span>
                    <ArrowIcon />
                  </motion.div>
                </div>

                {/* Bottom Gold Accent */}
                <motion.div
                  className="absolute bottom-0 left-0"
                  style={{
                    height: '2px',
                    backgroundColor: '#C9A66B',
                    width: hoveredId === article.id ? '100%' : '0%'
                  }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </motion.article>
          ))}
        </div>

        {/* View All Button - Clean & Readable */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.button
            className="group relative px-12 py-4 overflow-hidden"
            style={{
              background: 'rgba(201, 166, 107, 0.15)',
              border: '1px solid rgba(201, 166, 107, 0.4)'
            }}
            whileHover={{
              backgroundColor: 'rgba(201, 166, 107, 0.25)',
              borderColor: 'rgba(201, 166, 107, 0.6)',
              y: -2
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative z-10 flex items-center gap-3">
              <span
                className="text-sm font-semibold uppercase tracking-[0.25em]"
                style={{
                  color: '#E8D5A8',
                  fontFamily: "'Inter', sans-serif"
                }}
              >
                {t.blog.viewAllArticles}
              </span>
              <motion.svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#E8D5A8"
                strokeWidth="2.5"
                animate={{
                  x: [0, 3, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <path d="M5 12h14m0 0l-7-7m7 7l-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </motion.svg>
            </div>
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
