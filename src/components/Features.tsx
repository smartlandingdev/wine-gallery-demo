import { useTranslation } from '../hooks/useTranslation';
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
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
    <section ref={sectionRef} id="features" className="py-32 relative overflow-hidden" style={{ background: 'var(--off-white)' }}>
      {/* Background decoration with animation */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, var(--burgundy) 0%, transparent 70%)' }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 90, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
              Diferenciais
            </span>
            <motion.div
              className="h-px w-24 gold-line"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-light leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: 'var(--burgundy-deep)'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            {t.features.title}
          </motion.h2>
        </div>

        {/* Feature Cards with Premium Animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.4 + index * 0.15, ease: [0.34, 1.56, 0.64, 1] }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card Container - Bordô Vivo */}
              <motion.div
                className="relative h-full border-2 p-14 backdrop-blur-sm cursor-pointer overflow-hidden"
                style={{
                  borderColor: hoveredIndex === index ? '#DC143C' : '#8B0000',
                  background: hoveredIndex === index
                    ? 'linear-gradient(135deg, #6B1C23 0%, #8B0000 100%)'
                    : 'linear-gradient(135deg, #4A1419 0%, #6B1C23 100%)'
                }}
                whileHover={{
                  y: -15,
                  boxShadow: '0 40px 80px -15px rgba(220, 20, 60, 0.6), 0 0 60px -10px rgba(220, 20, 60, 0.5)'
                }}
                transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              >
                {/* Icon with Animation */}
                <motion.div
                  className="mb-10 flex justify-center"
                  animate={{
                    scale: hoveredIndex === index ? 1.15 : 1,
                    rotate: hoveredIndex === index ? 8 : 0,
                    y: hoveredIndex === index ? -5 : 0
                  }}
                  transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  {feature.icon}
                </motion.div>

                {/* Title - DOURADO */}
                <motion.h3
                  className="text-2xl font-light mb-5 text-center tracking-wide"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: hoveredIndex === index ? '#FFD700' : '#C9A66B',
                    textShadow: hoveredIndex === index ? '0 0 20px rgba(255, 215, 0, 0.6)' : 'none'
                  }}
                  animate={{
                    scale: hoveredIndex === index ? 1.05 : 1
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {feature.title}
                </motion.h3>

                {/* Description - DOURADO CLARO LEGÍVEL */}
                <motion.p
                  className="text-base leading-loose text-center font-light feature-description-gold"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: hoveredIndex === index ? '#FFFFFF' : '#E8D5A8'
                  }}
                  animate={{
                    opacity: 1
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {feature.description}
                </motion.p>

                {/* Bottom Gold Line - Grows on Hover */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[3px]"
                  style={{
                    background: 'linear-gradient(90deg, #FFD700, #FFA500, #FFD700)'
                  }}
                  animate={{
                    width: hoveredIndex === index ? '100%' : '0%'
                  }}
                  transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                />

                {/* Glow Effect on Hover - Red Glow */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    boxShadow: hoveredIndex === index
                      ? '0 0 80px rgba(220, 20, 60, 0.4) inset'
                      : '0 0 0px rgba(220, 20, 60, 0) inset'
                  }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};