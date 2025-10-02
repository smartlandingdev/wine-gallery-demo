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
      detail: t.features.premium.detail
    },
    {
      icon: <SparkleIcon />,
      title: t.features.exclusive.title,
      description: t.features.exclusive.description,
      detail: t.features.exclusive.detail
    },
    {
      icon: <WineGlassIcon />,
      title: t.features.tasting.title,
      description: t.features.tasting.description,
      detail: t.features.tasting.detail
    },
  ];

  return (
    <section ref={sectionRef} id="features" className="py-32 relative overflow-hidden" style={{ background: 'var(--off-white)' }}>
      {/* Elegant Flowing Waves - Burgundy */}
      <motion.div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          background: 'linear-gradient(135deg, transparent 0%, rgba(107, 28, 35, 0.4) 50%, transparent 100%)',
          filter: 'blur(40px)'
        }}
        animate={{
          x: ['-50%', '50%', '-50%'],
          y: [0, 50, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Elegant Flowing Waves - Gold */}
      <motion.div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          background: 'linear-gradient(-45deg, transparent 0%, rgba(201, 166, 107, 0.5) 50%, transparent 100%)',
          filter: 'blur(50px)'
        }}
        animate={{
          x: ['50%', '-50%', '50%'],
          y: [0, -40, 0]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating Orb - Gold Top */}
      <motion.div
        className="absolute top-[10%] right-[15%] w-[500px] h-[500px] rounded-full opacity-[0.12]"
        style={{
          background: 'radial-gradient(circle, rgba(201, 166, 107, 0.7) 0%, rgba(212, 175, 55, 0.4) 40%, transparent 70%)',
          filter: 'blur(40px)'
        }}
        animate={{
          y: [0, -60, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating Orb - Burgundy Bottom */}
      <motion.div
        className="absolute bottom-[15%] left-[10%] w-[600px] h-[600px] rounded-full opacity-[0.1]"
        style={{
          background: 'radial-gradient(circle, rgba(107, 28, 35, 0.6) 0%, rgba(139, 0, 0, 0.3) 40%, transparent 70%)',
          filter: 'blur(50px)'
        }}
        animate={{
          y: [0, 80, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Asymmetric Layout: Title Left, Cards Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Side - Title Section */}
          <motion.div
            className="lg:pr-12"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
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
                {t.features.label}
              </span>
            </motion.div>

            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8"
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

            <motion.p
              className="text-lg font-light leading-relaxed"
              style={{ color: 'var(--burgundy)', opacity: 0.8 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 0.8, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {t.features.subtitle}
            </motion.p>
          </motion.div>

          {/* Right Side - Compact Feature Cards */}
          <div className="grid grid-cols-1 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, x: 60, scale: 0.95 }}
                animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.6 + index * 0.15, ease: [0.34, 1.56, 0.64, 1] }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Compact Card - Horizontal Layout */}
                <motion.div
                  className="relative border-2 p-8 backdrop-blur-sm cursor-pointer overflow-hidden flex items-center gap-6"
                  style={{
                    borderColor: hoveredIndex === index ? '#DC143C' : '#8B0000',
                    background: hoveredIndex === index
                      ? 'linear-gradient(135deg, #6B1C23 0%, #8B0000 100%)'
                      : 'linear-gradient(135deg, #4A1419 0%, #6B1C23 100%)'
                  }}
                  whileHover={{
                    y: -8
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Icon - Smaller, Left Side */}
                  <motion.div
                    className="flex-shrink-0"
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                      rotate: hoveredIndex === index ? 8 : 0
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div style={{ transform: 'scale(0.75)' }}>
                      {feature.icon}
                    </div>
                  </motion.div>

                  {/* Content - Right Side */}
                  <div className="flex-1">
                    <motion.h3
                      className="text-xl font-light mb-2 tracking-wide"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: hoveredIndex === index ? '#FFD700' : '#C9A66B',
                        textShadow: hoveredIndex === index ? '0 0 15px rgba(255, 215, 0, 0.5)' : 'none'
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      {feature.title}
                    </motion.h3>

                    <motion.p
                      className="text-sm leading-relaxed font-light"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: hoveredIndex === index ? '#FFFFFF' : '#E8D5A8'
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      {feature.description}
                    </motion.p>
                  </div>

                  {/* Bottom Gold Line - Grows on Hover - INSIDE ONLY */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px]"
                    style={{
                      background: 'linear-gradient(90deg, #FFD700, #FFA500, #FFD700)'
                    }}
                    animate={{
                      width: hoveredIndex === index ? '100%' : '0%'
                    }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Inner Glow Effect - CONTAINED INSIDE */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      boxShadow: hoveredIndex === index
                        ? 'inset 0 0 60px rgba(220, 20, 60, 0.3)'
                        : 'inset 0 0 0px rgba(220, 20, 60, 0)'
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};