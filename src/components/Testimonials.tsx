import { useTranslation } from '../hooks/useTranslation';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

// Quote SVG Icon
const QuoteIcon = () => (
  <svg width="60" height="60" viewBox="0 0 48 48" fill="none" style={{ opacity: 0.15 }}>
    <path d="M10 20C10 14 12 8 18 8C18 14 14 14 14 20C14 23 16 24 18 24C20 24 22 22 22 20C22 16 18 12 18 8M28 20C28 14 30 8 36 8C36 14 32 14 32 20C32 23 34 24 36 24C38 24 40 22 40 20C40 16 36 12 36 8" fill="var(--gold)"/>
  </svg>
);

// Star SVG Icon
const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill={filled ? "var(--gold)" : "none"} stroke="var(--gold)" strokeWidth="1">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Testimonials = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const testimonials = [
    {
      id: 1,
      name: 'Maria Silva',
      role: 'Sommelier',
      rating: 5,
      comment: t.testimonials.testimonial1,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 2,
      name: 'João Santos',
      role: 'Empresário',
      rating: 5,
      comment: t.testimonials.testimonial2,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 3,
      name: 'Ana Costa',
      role: 'Chef de Cuisine',
      rating: 5,
      comment: t.testimonials.testimonial3,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b64c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 4,
      name: 'Carlos Mendes',
      role: 'Colecionador',
      rating: 5,
      comment: 'A curadoria de vinhos é excepcional. Cada garrafa é uma experiência única e memorável.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <StarIcon key={i} filled={i < rating} />
    ));
  };

  return (
    <section ref={sectionRef} id="testimonials" className="py-32 relative overflow-hidden" style={{ background: 'var(--warm-gray)' }}>
      {/* Floating Gold Accent with Animation */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
        style={{ background: 'var(--gradient-glow)' }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Background Decorative Elements - Cork & Glass Subtle Pattern */}
      <motion.div
        className="absolute top-20 left-10 opacity-[0.03]"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="120" height="120" viewBox="0 0 48 48" fill="none" stroke="var(--burgundy)" strokeWidth="0.5">
          <circle cx="24" cy="24" r="20" />
          <circle cx="24" cy="24" r="16" />
          <circle cx="24" cy="24" r="12" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-20 opacity-[0.03]"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <svg width="100" height="100" viewBox="0 0 48 48" fill="none" stroke="var(--burgundy)" strokeWidth="0.5">
          <path d="M14 8 L34 8 L30 24 C30 32 27 36 24 36 C21 36 18 32 18 24 Z" />
          <path d="M24 36 L24 44 M16 44 L32 44" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-10 opacity-[0.02]"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <svg width="200" height="200" viewBox="0 0 48 48" fill="none" stroke="var(--gold)" strokeWidth="0.3">
          <circle cx="24" cy="24" r="20" />
          <path d="M24 4 L24 44 M4 24 L44 24" />
          <circle cx="24" cy="24" r="15" />
          <circle cx="24" cy="24" r="10" />
        </svg>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
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
            <span className="text-[10px] uppercase tracking-[0.35em] font-light" style={{ color: 'var(--gold)' }}>
              Experiências
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
            {t.testimonials.title}
          </motion.h2>

          <motion.p
            className="text-lg font-light leading-loose max-w-2xl mx-auto"
            style={{
              color: 'var(--burgundy)',
              opacity: 0.8
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 0.8, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t.testimonials.subtitle}
          </motion.p>
        </div>

        {/* Carousel Container */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Navigation Buttons - Premium Style */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 border flex items-center justify-center backdrop-blur-md group -translate-x-20 hidden lg:flex"
            style={{ borderColor: 'var(--gold)', backgroundColor: 'rgba(12, 12, 12, 0.8)' }}
            whileHover={{
              scale: 1.1,
              backgroundColor: 'var(--gold)',
              boxShadow: '0 0 30px rgba(201, 166, 107, 0.6)'
            }}
            whileTap={{ scale: 0.9 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" className="group-hover:stroke-white transition-colors">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 border flex items-center justify-center backdrop-blur-md group translate-x-20 hidden lg:flex"
            style={{ borderColor: 'var(--gold)', backgroundColor: 'rgba(12, 12, 12, 0.8)' }}
            whileHover={{
              scale: 1.1,
              backgroundColor: 'var(--gold)',
              boxShadow: '0 0 30px rgba(201, 166, 107, 0.6)'
            }}
            whileTap={{ scale: 0.9 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" className="group-hover:stroke-white transition-colors">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>

          {/* Testimonial Card with Premium Effects */}
          <motion.div
            className="relative border backdrop-blur-md p-16 min-h-[420px] flex flex-col items-center justify-center overflow-hidden"
            style={{
              borderColor: 'var(--gold)',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(245, 243, 239, 0.85))',
              boxShadow: '0 25px 60px -15px rgba(59, 13, 17, 0.2)'
            }}
            whileHover={{
              boxShadow: '0 35px 80px -15px rgba(59, 13, 17, 0.3), 0 0 60px -10px rgba(201, 166, 107, 0.3)'
            }}
          >
            {/* Large Quote Icon Background */}
            <motion.div
              className="absolute top-8 left-8"
              animate={{ rotate: [0, 5, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <QuoteIcon />
            </motion.div>

            {/* Content - Animated with AnimatePresence */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="text-center max-w-3xl"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              >
                {/* Circular Photo with Gold Border & Glow */}
                <div className="mb-8 flex justify-center">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full blur-lg"
                      style={{
                        background: 'linear-gradient(135deg, var(--gold), var(--burgundy))',
                        transform: 'scale(1.15)'
                      }}
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="relative w-28 h-28 rounded-full object-cover border-4"
                      style={{ borderColor: 'var(--gold)' }}
                    />
                  </motion.div>
                </div>

                {/* Stars with Shimmer */}
                <motion.div
                  className="flex justify-center gap-1 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {renderStars(testimonials[currentIndex].rating)}
                </motion.div>

                {/* Comment - Styled Quote */}
                <motion.p
                  className="text-xl md:text-2xl font-light italic leading-relaxed mb-10"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: 'var(--burgundy-deep)'
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  "{testimonials[currentIndex].comment}"
                </motion.p>

                {/* Name & Role */}
                <motion.div
                  className="border-t pt-6"
                  style={{
                    borderColor: 'var(--gold)',
                    borderImage: 'linear-gradient(90deg, transparent, var(--gold), transparent) 1'
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h4
                    className="text-xl font-light tracking-wide mb-2"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: 'var(--burgundy-deep)'
                    }}
                  >
                    {testimonials[currentIndex].name}
                  </h4>
                  <p
                    className="text-xs uppercase tracking-[0.25em] font-light"
                    style={{ color: 'var(--gold)' }}
                  >
                    {testimonials[currentIndex].role}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Dots Navigation - Premium with Glow */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className="transition-all duration-500 cursor-pointer"
                style={{
                  width: currentIndex === index ? '40px' : '10px',
                  height: '10px',
                  backgroundColor: currentIndex === index ? 'var(--gold)' : 'var(--burgundy)',
                  opacity: currentIndex === index ? 1 : 0.3,
                  borderRadius: '5px',
                  boxShadow: currentIndex === index ? '0 0 15px rgba(201, 166, 107, 0.6)' : 'none'
                }}
                whileHover={{
                  scale: 1.2,
                  opacity: 0.8,
                  boxShadow: '0 0 10px rgba(201, 166, 107, 0.4)'
                }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};