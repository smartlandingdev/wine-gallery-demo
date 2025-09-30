import { useTranslation } from '../hooks/useTranslation';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  onLearnMoreClick: () => void;
}

export const Header = ({ onLearnMoreClick }: HeaderProps) => {
  const { language, t, toggleLanguage } = useTranslation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'var(--off-white)' }}>
      {/* Subtle Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-[0.08]"
        poster="/images/hero-background.jpg"
      >
        <source src="/videos/wine-vineyard.mp4" type="video/mp4" />
      </video>

      {/* Minimal Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2] via-transparent to-[#FAF7F2]/80" />

      {/* Language Toggle - Minimal Gold with Motion */}
      <motion.button
        onClick={toggleLanguage}
        className="absolute top-12 right-12 z-50 border px-4 py-2 text-xs font-light uppercase tracking-[0.2em] transition-all duration-500 hover:bg-[var(--gold)] hover:text-white"
        style={{
          borderColor: 'var(--gold)',
          color: 'var(--burgundy-deep)'
        }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {language === 'en' ? 'PT' : 'EN'}
      </motion.button>

      {/* Floating Badge - Minimal Luxury with Motion */}
      <motion.div
        className="absolute top-12 left-12 z-50 border px-6 py-3 backdrop-blur-sm"
        style={{
          borderColor: 'var(--gold)',
          backgroundColor: 'rgba(250, 247, 242, 0.7)',
          transform: `translateY(${scrollY * 0.05}px)`
        }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center gap-3">
          {/* Thin line icon instead of emoji */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1">
            <path d="M12 15l-3-3m0 0l3-3m-3 3h12.5M12 3v2m0 14v2m-7-7H3m18 0h2M7.05 7.05L5.636 5.636m12.728 0L19.778 7.05M7.05 16.95l-1.414 1.414m12.728 0l1.414-1.414" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div>
            <p className="font-light text-sm leading-tight" style={{ color: 'var(--burgundy)' }}>25 anos</p>
            <p className="text-[10px] uppercase tracking-[0.15em]" style={{ color: 'var(--burgundy)', opacity: 0.6 }}>de tradição</p>
          </div>
        </div>
      </motion.div>


      {/* Main Content - Maximum Breathing Space with Framer Motion */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Thin Gold Line */}
        <motion.div
          className="flex items-center justify-center gap-6 mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="h-px w-24 gold-line"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <span className="text-[10px] uppercase tracking-[0.35em] font-light" style={{ color: 'var(--gold)' }}>Premium Selection</span>
          <motion.div
            className="h-px w-24 gold-line"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        {/* Title - Minimal & Elegant with Motion */}
        <motion.h1
          className="text-7xl md:text-9xl font-light mb-10 leading-[0.95] tracking-tight"
          style={{
            fontFamily: "'Playfair Display', 'Georgia', serif",
            color: 'var(--burgundy-deep)'
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {t.header.title}
        </motion.h1>

        {/* Subtitle - Lots of Space with Motion */}
        <motion.p
          className="text-lg md:text-xl mb-20 leading-loose max-w-2xl mx-auto font-light"
          style={{
            color: 'var(--burgundy)',
            opacity: 0.8
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {t.header.subtitle}
        </motion.p>

        {/* CTA - Minimal Gold Button with Motion */}
        <motion.button
          onClick={onLearnMoreClick}
          className="group relative border px-12 py-4 text-sm font-light uppercase tracking-[0.25em] transition-all duration-700 hover:text-white overflow-hidden"
          style={{
            borderColor: 'var(--gold)',
            color: 'var(--burgundy-deep)'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10 flex items-center gap-3">
            {t.header.cta}
            <motion.span
              className="text-[10px]"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </span>
          <div
            className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700"
            style={{ backgroundColor: 'var(--gold)' }}
          />
        </motion.button>

        {/* Minimal Scroll Indicator with Motion */}
        <motion.div
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="16" height="32" viewBox="0 0 16 32" fill="none" stroke="var(--gold)" strokeWidth="1">
            <path d="M8 2v28m0 0l-4-4m4 4l4-4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </header>
  );
};