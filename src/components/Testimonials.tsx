import { useTranslation } from '../hooks/useTranslation';
import { useState, useEffect } from 'react';

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
    <section id="testimonials" className="py-32 relative overflow-hidden" style={{ background: 'var(--warm-gray)' }}>
      {/* Background Decorative Elements - Cork & Glass Subtle Pattern */}
      <div className="absolute top-20 left-10 opacity-[0.03] animate-float">
        <svg width="120" height="120" viewBox="0 0 48 48" fill="none" stroke="var(--burgundy)" strokeWidth="0.5">
          <circle cx="24" cy="24" r="20" />
          <circle cx="24" cy="24" r="16" />
          <circle cx="24" cy="24" r="12" />
        </svg>
      </div>

      <div className="absolute bottom-32 right-20 opacity-[0.03] animate-float" style={{ animationDelay: '2s' }}>
        <svg width="100" height="100" viewBox="0 0 48 48" fill="none" stroke="var(--burgundy)" strokeWidth="0.5">
          <path d="M14 8 L34 8 L30 24 C30 32 27 36 24 36 C21 36 18 32 18 24 Z" />
          <path d="M24 36 L24 44 M16 44 L32 44" />
        </svg>
      </div>

      <div className="absolute top-1/2 right-10 opacity-[0.02]">
        <svg width="200" height="200" viewBox="0 0 48 48" fill="none" stroke="var(--gold)" strokeWidth="0.3">
          <circle cx="24" cy="24" r="20" />
          <path d="M24 4 L24 44 M4 24 L44 24" />
          <circle cx="24" cy="24" r="15" />
          <circle cx="24" cy="24" r="10" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-6 mb-8 animate-fade-in">
            <div className="h-px w-20 gold-line" />
            <span className="text-[10px] uppercase tracking-[0.35em] font-light" style={{ color: 'var(--gold)' }}>
              Experiências
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
            {t.testimonials.title}
          </h2>

          <p
            className="text-lg font-light leading-loose max-w-2xl mx-auto animate-fade-in-up"
            style={{
              color: 'var(--burgundy)',
              opacity: 0.8,
              animationDelay: '0.2s'
            }}
          >
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 border flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:bg-[var(--gold)] hover:border-[var(--gold)] group -translate-x-20 hidden lg:flex"
            style={{ borderColor: 'var(--gold)', backgroundColor: 'rgba(250, 247, 242, 0.9)' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--burgundy)" strokeWidth="1" className="group-hover:stroke-white transition-colors">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 border flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:bg-[var(--gold)] hover:border-[var(--gold)] group translate-x-20 hidden lg:flex"
            style={{ borderColor: 'var(--gold)', backgroundColor: 'rgba(250, 247, 242, 0.9)' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--burgundy)" strokeWidth="1" className="group-hover:stroke-white transition-colors">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Testimonial Card */}
          <div className="relative border bg-white/60 backdrop-blur-sm p-16 min-h-[420px] flex flex-col items-center justify-center overflow-hidden"
            style={{ borderColor: 'var(--gold)' }}
          >
            {/* Large Quote Icon Background */}
            <div className="absolute top-8 left-8">
              <QuoteIcon />
            </div>

            {/* Content - Animated */}
            <div
              key={currentIndex}
              className="text-center max-w-3xl animate-fade-in"
            >
              {/* Circular Photo with Gold Border */}
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-full blur-md"
                    style={{
                      background: 'linear-gradient(135deg, var(--gold), var(--burgundy))',
                      transform: 'scale(1.1)'
                    }}
                  />
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="relative w-24 h-24 rounded-full object-cover border-4"
                    style={{ borderColor: 'var(--gold)' }}
                  />
                </div>
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {renderStars(testimonials[currentIndex].rating)}
              </div>

              {/* Comment - Styled Quote */}
              <p
                className="text-xl md:text-2xl font-light italic leading-relaxed mb-8"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: 'var(--burgundy-deep)'
                }}
              >
                "{testimonials[currentIndex].comment}"
              </p>

              {/* Name & Role */}
              <div className="border-t pt-6" style={{ borderColor: 'var(--gold)', opacity: 0.3 }}>
                <h4
                  className="text-lg font-light tracking-wide mb-1"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: 'var(--burgundy-deep)'
                  }}
                >
                  {testimonials[currentIndex].name}
                </h4>
                <p
                  className="text-sm uppercase tracking-[0.2em] font-light"
                  style={{
                    color: 'var(--gold)'
                  }}
                >
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="transition-all duration-500"
                style={{
                  width: currentIndex === index ? '40px' : '10px',
                  height: '10px',
                  backgroundColor: currentIndex === index ? 'var(--gold)' : 'var(--burgundy)',
                  opacity: currentIndex === index ? 1 : 0.3,
                  borderRadius: '5px'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};