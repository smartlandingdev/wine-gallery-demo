import { useTranslation } from '../hooks/useTranslation';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface HeaderProps {
  onLearnMoreClick: () => void;
}

export const Header = ({ onLearnMoreClick }: HeaderProps) => {
  const { language, t, toggleLanguage } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  // Parallax transforms - mais intenso e sofisticado
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
  const yContent = useTransform(scrollYProgress, [0, 1], ['0%', '120%']);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);

  // Smooth spring animation
  const springConfig = { stiffness: 100, damping: 30, mass: 1 };
  const ySmooth = useSpring(yContent, springConfig);

  // Navbar scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* FLOATING NAVBAR - Premium Glass Effect */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        style={{
          backgroundColor: scrolled ? 'rgba(12, 12, 12, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201, 166, 107, 0.2)' : 'none',
          boxShadow: scrolled ? '0 10px 40px rgba(12, 12, 12, 0.5)' : 'none'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="text-2xl font-light tracking-wider"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: scrolled ? 'var(--gold)' : 'var(--burgundy-deep)'
            }}
            whileHover={{ scale: 1.05 }}
          >
            Wine Gallery
          </motion.div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-12">
            {['Coleção', 'História', 'Blog', 'Contato'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-light uppercase tracking-[0.15em] relative group"
                style={{
                  color: scrolled ? 'var(--gold-light)' : 'var(--burgundy)',
                  transition: 'color 0.3s'
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                whileHover={{ y: -2 }}
              >
                {item}
                <motion.div
                  className="absolute -bottom-1 left-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent"
                  initial={{ width: '0%', left: '50%' }}
                  whileHover={{ width: '100%', left: '0%' }}
                  transition={{ duration: 0.4 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Language Toggle - Compact */}
          <motion.button
            onClick={toggleLanguage}
            className="border px-3 py-1.5 text-xs font-light uppercase tracking-[0.2em] transition-all duration-500"
            style={{
              borderColor: scrolled ? 'var(--gold)' : 'var(--gold)',
              color: scrolled ? 'var(--gold)' : 'var(--burgundy-deep)',
              backgroundColor: scrolled ? 'transparent' : 'rgba(255,255,255,0.5)'
            }}
            whileHover={{ scale: 1.05, backgroundColor: 'var(--gold)', color: 'white' }}
            whileTap={{ scale: 0.95 }}
          >
            {language === 'en' ? 'PT' : 'EN'}
          </motion.button>
        </div>
      </motion.nav>

    <header className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'var(--off-white)' }}>
      {/* Background with Advanced Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: yBg }}
      >
        {/* Video Background - Premium */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-[0.25]"
          poster="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2070"
          style={{ filter: 'grayscale(20%) sepia(10%)' }}
        >
          <source src="/videos/wine-vineyard.mp4" type="video/mp4" />
          <source src="https://cdn.coverr.co/videos/coverr-vineyard-rows-7359/1080p.mp4" type="video/mp4" />
        </video>

        {/* Animated Background Pattern (fallback se vídeo não carregar) */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(59, 13, 17, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(201, 166, 107, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(107, 28, 35, 0.08) 0%, transparent 70%)
            `
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Gradient Overlay Premium */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--off-white)]/95 via-[var(--off-white)]/30 to-[var(--off-white)]/90" />

        {/* Floating Gold Glow */}
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] blur-3xl opacity-20"
          style={{ background: 'var(--gradient-glow)' }}
          animate={{
            scale: [1, 1.3, 1],
            x: [-50, 50, -50],
            y: [-30, 30, -30]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>


      {/* Main Content with Advanced Parallax */}
      <motion.div
        className="relative z-10 text-center max-w-5xl mx-auto px-6"
        style={{
          y: ySmooth,
          opacity: opacity,
          scale: scale
        }}
      >
        {/* Badge - 25 Anos */}
        <motion.div
          className="inline-flex items-center gap-3 border px-6 py-2 mb-12 backdrop-blur-sm"
          style={{
            borderColor: 'var(--gold)',
            backgroundColor: 'rgba(245, 243, 239, 0.6)'
          }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1">
            <circle cx="12" cy="8" r="7"/>
            <path d="M12 15l-3 9h6l-3-9z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-sm font-light tracking-wider" style={{ color: 'var(--burgundy-deep)' }}>
            25 Anos de Excelência
          </span>
        </motion.div>

        {/* Thin Gold Line */}
        <motion.div
          className="flex items-center justify-center gap-6 mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            className="h-px w-28 gold-line"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <span className="text-[10px] uppercase tracking-[0.4em] font-light" style={{ color: 'var(--gold)' }}>Premium Selection</span>
          <motion.div
            className="h-px w-28 gold-line"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Title - Ultra Elegant */}
        <motion.h1
          className="text-7xl md:text-[8rem] lg:text-[10rem] font-light mb-12 leading-[0.9] tracking-tighter"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: 'var(--burgundy-deep)',
            textShadow: '0 2px 40px rgba(59, 13, 17, 0.1)'
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {t.header.title}
        </motion.h1>

        {/* Subtitle - Espaço Generoso */}
        <motion.p
          className="text-lg md:text-2xl mb-24 leading-relaxed max-w-3xl mx-auto font-light"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: 'var(--burgundy)',
            opacity: 0.85
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
        >
          {t.header.subtitle}
        </motion.p>

        {/* CTA - Glow Dourado Premium */}
        <motion.button
          onClick={onLearnMoreClick}
          className="group relative border-2 px-16 py-5 text-sm font-light uppercase tracking-[0.3em] overflow-hidden backdrop-blur-sm"
          style={{
            borderColor: 'var(--gold)',
            color: 'var(--burgundy-deep)',
            backgroundColor: 'rgba(245, 243, 239, 0.5)',
            boxShadow: '0 0 40px rgba(201, 166, 107, 0.3)'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          whileHover={{
            scale: 1.08,
            boxShadow: '0 0 60px rgba(201, 166, 107, 0.6), 0 0 100px rgba(201, 166, 107, 0.3)'
          }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10 flex items-center gap-4 group-hover:text-white transition-colors duration-700">
            {t.header.cta}
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            >
              →
            </motion.span>
          </span>
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'var(--gradient-gold)',
              translateX: '-100%'
            }}
            whileHover={{ translateX: '0%' }}
            transition={{ duration: 0.7 }}
          />
        </motion.button>

        {/* Scroll Indicator Premium */}
        <motion.div
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{
            y: [0, 12, 0],
            opacity: 0.6
          }}
          transition={{
            y: {
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            },
            opacity: {
              duration: 0.8,
              delay: 1
            }
          }}
        >
          <span className="text-[9px] uppercase tracking-[0.3em] font-light" style={{ color: 'var(--gold)' }}>
            Scroll
          </span>
          <svg width="20" height="40" viewBox="0 0 20 40" fill="none" stroke="var(--gold)" strokeWidth="1">
            <path d="M10 2v36m0 0l-6-6m6 6l6-6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </header>
    </>
  );
};