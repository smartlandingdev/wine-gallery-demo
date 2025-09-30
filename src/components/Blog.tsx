import { useTranslation } from "../hooks/useTranslation";
import { useState, useEffect, useRef } from "react";

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
    <section id="blog" className="py-32 relative overflow-hidden" style={{ background: 'var(--off-white)' }}>
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-[0.02]"
        style={{ background: 'radial-gradient(circle, var(--burgundy) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-6 mb-8 animate-fade-in">
            <div className="h-px w-20 gold-line" />
            <span className="text-[10px] uppercase tracking-[0.35em] font-light" style={{ color: 'var(--gold)' }}>
              Conhecimento
            </span>
            <div className="h-px w-20 gold-line" />
          </div>

          <h2
            className="text-5xl md:text-7xl font-light leading-tight mb-6 animate-fade-in-up"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: 'var(--burgundy-deep)',
              animationDelay: '0.1s'
            }}
          >
            {t.blog.title}
          </h2>

          <p
            className="text-lg font-light leading-loose max-w-2xl mx-auto animate-fade-in-up"
            style={{
              color: 'var(--burgundy)',
              opacity: 0.8,
              animationDelay: '0.2s'
            }}
          >
            {t.blog.subtitle}
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {articles.map((article, index) => (
            <article
              key={article.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className="group cursor-pointer"
              style={{
                opacity: visibleCards.includes(index) ? 1 : 0,
                transform: visibleCards.includes(index) ? 'translateY(0)' : 'translateY(40px)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                transitionDelay: `${index * 0.15}s`
              }}
            >
              {/* Card Container */}
              <div className="relative border overflow-hidden transition-all duration-700 card-hover"
                style={{ borderColor: 'var(--warm-gray)', backgroundColor: 'white' }}
              >
                {/* Cover Image */}
                <div className="relative h-[280px] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
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
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <button
            className="group relative border px-12 py-4 text-sm font-light uppercase tracking-[0.25em] transition-all duration-700 hover:text-white overflow-hidden"
            style={{
              borderColor: 'var(--gold)',
              color: 'var(--burgundy-deep)'
            }}
          >
            <span className="relative z-10 flex items-center gap-3">
              Ver Todos os Artigos
              <span className="text-[10px] group-hover:translate-x-1 transition-transform duration-500">→</span>
            </span>
            <div
              className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700"
              style={{ backgroundColor: 'var(--gold)' }}
            />
          </button>
        </div>
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
