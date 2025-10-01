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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <StarIcon key={i} filled={i < rating} />
    ));
  };

  return (
    <section ref={sectionRef} id="testimonials" className="py-32 relative overflow-hidden" style={{ background: 'var(--warm-gray)' }}>
      {/* Paper Texture Background - Same as Gallery */}
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

      {/* Linen Texture - Same as Gallery */}
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

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Layout: Testimonials Left, Title Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left Side - Testimonials Carousel */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            {/* Impressive Testimonial Card - Redesigned */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.95, rotateY: 10 }}
                transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
                className="relative p-14 overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(107, 28, 35, 0.03) 0%, rgba(201, 166, 107, 0.02) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(201, 166, 107, 0.15)'
                }}
              >
                {/* Decorative Gold Corner Accent - Top Left */}
                <motion.div
                  className="absolute top-0 left-0 w-24 h-24 opacity-40"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 2, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg width="96" height="96" viewBox="0 0 96 96" fill="none">
                    <path d="M0 0 L96 0 L0 96 Z" fill="url(#gold-gradient)" opacity="0.15"/>
                    <line x1="20" y1="0" x2="0" y2="20" stroke="var(--gold)" strokeWidth="0.5"/>
                    <line x1="40" y1="0" x2="0" y2="40" stroke="var(--gold)" strokeWidth="0.5" opacity="0.6"/>
                    <line x1="60" y1="0" x2="0" y2="60" stroke="var(--gold)" strokeWidth="0.5" opacity="0.3"/>
                    <defs>
                      <linearGradient id="gold-gradient" x1="0" y1="0" x2="96" y2="96">
                        <stop offset="0%" stopColor="var(--gold)" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>

                {/* Decorative Gold Corner Accent - Bottom Right */}
                <motion.div
                  className="absolute bottom-0 right-0 w-24 h-24 opacity-40 rotate-180"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [180, 182, 180]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                >
                  <svg width="96" height="96" viewBox="0 0 96 96" fill="none">
                    <path d="M0 0 L96 0 L0 96 Z" fill="url(#gold-gradient-2)" opacity="0.15"/>
                    <line x1="20" y1="0" x2="0" y2="20" stroke="var(--gold)" strokeWidth="0.5"/>
                    <line x1="40" y1="0" x2="0" y2="40" stroke="var(--gold)" strokeWidth="0.5" opacity="0.6"/>
                    <line x1="60" y1="0" x2="0" y2="60" stroke="var(--gold)" strokeWidth="0.5" opacity="0.3"/>
                    <defs>
                      <linearGradient id="gold-gradient-2" x1="0" y1="0" x2="96" y2="96">
                        <stop offset="0%" stopColor="var(--gold)" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>

                {/* Large Decorative Quote Mark */}
                <motion.div
                  className="absolute -top-4 -left-2 opacity-[0.08]"
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, 3, 0]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg width="180" height="180" viewBox="0 0 48 48" fill="var(--gold)">
                    <path d="M10 20C10 14 12 8 18 8C18 14 14 14 14 20C14 23 16 24 18 24C20 24 22 22 22 20C22 16 18 12 18 8M28 20C28 14 30 8 36 8C36 14 32 14 32 20C32 23 34 24 36 24C38 24 40 22 40 20C40 16 36 12 36 8"/>
                  </svg>
                </motion.div>

                {/* Testimonial Comment - Elegant Typography */}
                <motion.p
                  className="text-2xl font-light leading-relaxed mb-12 relative z-10"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: 'var(--burgundy-deep)',
                    fontStyle: 'italic'
                  }}
                >
                  {testimonials[currentIndex].comment}
                </motion.p>

                {/* Stars Rating with Glow */}
                <motion.div
                  className="flex gap-2 mb-10 relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {renderStars(testimonials[currentIndex].rating)}
                </motion.div>

                {/* Author Section - Sophisticated Layout */}
                <div className="flex items-center gap-5 relative z-10">
                  {/* Photo with Gold Ring */}
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'linear-gradient(135deg, var(--gold), var(--burgundy))',
                        transform: 'scale(1.15)',
                        filter: 'blur(8px)',
                        opacity: 0.4
                      }}
                      animate={{
                        rotate: [0, 360]
                      }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="relative w-20 h-20 rounded-full object-cover"
                      style={{
                        border: '3px solid rgba(201, 166, 107, 0.4)'
                      }}
                    />
                  </motion.div>

                  {/* Vertical Divider - Elegant Gold Line */}
                  <motion.div
                    className="w-px h-16 bg-gradient-to-b from-transparent via-[var(--gold)] to-transparent opacity-40"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  />

                  {/* Name & Role */}
                  <div>
                    <motion.h4
                      className="text-xl font-light tracking-wide mb-1"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: 'var(--burgundy-deep)'
                      }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      {testimonials[currentIndex].name}
                    </motion.h4>
                    <motion.p
                      className="text-xs uppercase tracking-[0.25em] font-light"
                      style={{
                        color: 'var(--gold)',
                        opacity: 0.9
                      }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 0.9, x: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      {testimonials[currentIndex].role}
                    </motion.p>
                  </div>
                </div>

                {/* Inner Border Glow on Hover */}
                <motion.div
                  className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-500"
                  style={{
                    boxShadow: 'inset 0 0 60px rgba(201, 166, 107, 0.1)'
                  }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots - Elegant Design */}
            <div className="flex justify-start gap-3 mt-10">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="relative transition-all cursor-pointer"
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div
                    className="rounded-full"
                    style={{
                      width: index === currentIndex ? '40px' : '10px',
                      height: '10px',
                      backgroundColor: index === currentIndex ? 'var(--gold)' : 'rgba(201, 166, 107, 0.25)'
                    }}
                    animate={{
                      width: index === currentIndex ? '40px' : '10px',
                      boxShadow: index === currentIndex
                        ? '0 0 20px rgba(201, 166, 107, 0.5)'
                        : 'none'
                    }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Section Title (with right alignment) */}
          <motion.div
            className="text-right lg:pl-12"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <motion.div
              className="flex items-center justify-end gap-6 mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-[10px] uppercase tracking-[0.35em] font-light" style={{ color: 'var(--gold)' }}>
                Experiências
              </span>
              <motion.div
                className="h-px w-20 gold-line"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </motion.div>

            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: 'var(--burgundy-deep)'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.4 }}
            >
              {t.testimonials.title}
            </motion.h2>

            <motion.p
              className="text-lg font-light leading-relaxed"
              style={{
                color: 'var(--burgundy)',
                opacity: 0.8
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 0.8, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {t.testimonials.subtitle}
            </motion.p>
          </motion.div>

        </div>

        {/* OLD Carousel - REMOVED */}
        <motion.div
          className="relative hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
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