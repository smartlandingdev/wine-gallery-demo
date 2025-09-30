import { useTranslation } from '../hooks/useTranslation';
import { useState } from 'react';

// Minimal SVG Icons
const GrapeIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="var(--gold)" strokeWidth="1">
    <circle cx="24" cy="30" r="5" />
    <circle cx="18" cy="22" r="4.5" />
    <circle cx="30" cy="22" r="4.5" />
    <circle cx="24" cy="14" r="4" />
    <circle cx="16" cy="32" r="4" />
    <circle cx="32" cy="32" r="4" />
    <path d="M24 14 L24 2 M22 4 L24 2 L26 4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SparkleIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="var(--gold)" strokeWidth="1">
    <path d="M24 4 L24 44 M4 24 L44 24 M10 10 L38 38 M38 10 L10 38" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="24" cy="24" r="3" fill="var(--gold)"/>
  </svg>
);

const WineGlassIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="var(--gold)" strokeWidth="1">
    <path d="M14 4 L34 4 L30 20 C30 26 27 28 24 28 C21 28 18 26 18 20 Z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 28 L24 40 M16 40 L32 40" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 4 L32 4" strokeLinecap="round"/>
  </svg>
);

export const Features = () => {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    {
      icon: <GrapeIcon />,
      title: t.features.premium.title,
      description: t.features.premium.description,
      detail: "Vinhos selecionados de vinícolas renomadas mundialmente"
    },
    {
      icon: <SparkleIcon />,
      title: t.features.exclusive.title,
      description: t.features.exclusive.description,
      detail: "Importações diretas e edições limitadas"
    },
    {
      icon: <WineGlassIcon />,
      title: t.features.tasting.title,
      description: t.features.tasting.description,
      detail: "Análise sensorial completa para cada garrafa"
    },
  ];

  return (
    <section id="features" className="py-32 relative overflow-hidden" style={{ background: 'var(--off-white)' }}>
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, var(--burgundy) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-6 mb-8 animate-fade-in">
            <div className="h-px w-20 gold-line" />
            <span className="text-[10px] uppercase tracking-[0.35em] font-light" style={{ color: 'var(--gold)' }}>
              Diferenciais
            </span>
            <div className="h-px w-20 gold-line" />
          </div>

          <h2
            className="text-5xl md:text-7xl font-light leading-tight animate-fade-in-up"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: 'var(--burgundy-deep)',
              animationDelay: '0.1s'
            }}
          >
            {t.features.title}
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative card-hover animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card Container */}
              <div className="relative h-full border bg-white/40 backdrop-blur-sm p-12 transition-all duration-700"
                style={{
                  borderColor: hoveredIndex === index ? 'var(--gold)' : 'var(--warm-gray)',
                }}
              >
                {/* Icon */}
                <div className="mb-8 transition-transform duration-700 flex justify-center"
                  style={{
                    transform: hoveredIndex === index ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)'
                  }}
                >
                  {feature.icon}
                </div>

                {/* Title */}
                <h3
                  className="text-2xl font-light mb-4 text-center tracking-wide transition-colors duration-500"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: hoveredIndex === index ? 'var(--gold)' : 'var(--burgundy-deep)'
                  }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-loose text-center font-light transition-all duration-500"
                  style={{
                    color: 'var(--burgundy)',
                    opacity: hoveredIndex === index ? 0 : 0.7,
                    transform: hoveredIndex === index ? 'translateY(-10px)' : 'translateY(0)'
                  }}
                >
                  {feature.description}
                </p>

                {/* Hover Detail - appears on hover */}
                <div
                  className="absolute inset-0 flex items-center justify-center p-12 transition-all duration-500"
                  style={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    pointerEvents: hoveredIndex === index ? 'auto' : 'none'
                  }}
                >
                  <p
                    className="text-sm leading-loose text-center font-light italic"
                    style={{ color: 'var(--burgundy-deep)' }}
                  >
                    {feature.detail}
                  </p>
                </div>

                {/* Bottom decoration line */}
                <div
                  className="absolute bottom-0 left-0 h-px transition-all duration-700"
                  style={{
                    backgroundColor: 'var(--gold)',
                    width: hoveredIndex === index ? '100%' : '0%'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};