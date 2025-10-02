import { useTranslation } from '../hooks/useTranslation';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Header = () => {
  const { language, t, toggleLanguage } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  // Parallax transforms - mais intenso e sofisticado
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);

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
          {/* Logo - SEMPRE DOURADO */}
          <motion.div
            className="text-2xl font-light tracking-wider logo-gold"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: '#C9A66B !important',
              textShadow: scrolled ? '0 0 20px rgba(201, 166, 107, 0.5)' : 'none'
            }}
            whileHover={{
              scale: 1.05,
              textShadow: '0 0 30px rgba(201, 166, 107, 0.8)'
            }}
          >
            Wine Gallery
          </motion.div>

          {/* Nav Links - SEMPRE DOURADO */}
          <div className="hidden md:flex items-center gap-12">
            {[
              { label: t.header.nav.collection, href: '#gallery' },
              { label: t.header.nav.story, href: '#story' },
              { label: t.header.nav.blog, href: '#blog' },
              { label: t.header.nav.contact, href: '#contact' }
            ].map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-sm font-light uppercase tracking-[0.15em] relative group nav-link-gold"
                style={{
                  color: '#C9A66B !important',
                  transition: 'color 0.3s'
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                whileHover={{
                  y: -2,
                  color: '#D4AF37',
                  textShadow: '0 0 15px rgba(201, 166, 107, 0.6)'
                }}
              >
                {item.label}
                <motion.div
                  className="absolute -bottom-1 left-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent"
                  initial={{ width: '0%', left: '50%' }}
                  whileHover={{ width: '100%', left: '0%' }}
                  transition={{ duration: 0.4 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Language Toggle - SEMPRE DOURADO */}
          <motion.button
            onClick={toggleLanguage}
            className="border px-3 py-1.5 text-xs font-light uppercase tracking-[0.2em] transition-all duration-500 btn-lang-gold"
            style={{
              borderColor: '#C9A66B',
              color: '#C9A66B !important',
              backgroundColor: scrolled ? 'rgba(201, 166, 107, 0.1)' : 'rgba(255,255,255,0.3)'
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor: '#C9A66B',
              color: 'white',
              borderColor: '#C9A66B',
              boxShadow: '0 0 20px rgba(201, 166, 107, 0.5)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            {language === 'en' ? 'PT' : 'EN'}
          </motion.button>
        </div>
      </motion.nav>

    <header className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'var(--off-white)', zIndex: 1 }}>
      {/* Background with Advanced Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: yBg }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url(https://media.istockphoto.com/id/1468165452/pt/foto/glass-of-red-wine-on-the-hills-of-tuscany-in-italy.jpg?s=612x612&w=0&k=20&c=VhNOMHIlub7cPyrVQGBT98NBPgxAbAnFAKOYWlDc-XA=)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.25,
            filter: 'grayscale(20%) sepia(10%)'
          }}
        />

        {/* Animated Background Pattern */}
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

        {/* Gradient Overlay Premium - Preto no topo, transparente embaixo */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/20 to-transparent" />

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
        className="relative z-50 text-center max-w-5xl mx-auto px-6 pt-32"
      >
        {/* Elegant Top Ornament */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          <motion.div
            className="h-px w-16"
            style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          />
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="0.5">
            <circle cx="12" cy="12" r="8"/>
            <circle cx="12" cy="12" r="4"/>
          </svg>
          <motion.div
            className="h-px w-16"
            style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          />
        </motion.div>

        {/* Title - Ultra Elegant */}
        <motion.h1
          className="text-6xl md:text-[7rem] lg:text-[9rem] font-light mb-10 leading-[0.9] tracking-tighter"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: 'var(--burgundy-deep)',
            textShadow: '0 2px 40px rgba(59, 13, 17, 0.1)'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.2 }}
        >
          {t.header.title}
        </motion.h1>

        {/* Elegant Divider */}
        <motion.div
          className="flex items-center justify-center gap-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 3 }}
        >
          <motion.div
            className="h-px w-20"
            style={{ background: 'var(--gold)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 3.3 }}
          />
          <motion.svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="var(--gold)"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <path d="M8 0 L10 6 L16 8 L10 10 L8 16 L6 10 L0 8 L6 6 Z"/>
          </motion.svg>
          <motion.div
            className="h-px w-20"
            style={{ background: 'var(--gold)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 3.3 }}
          />
        </motion.div>

        {/* Subtitle - Espaço Generoso */}
        <motion.p
          className="text-lg md:text-xl mb-16 leading-relaxed max-w-3xl mx-auto font-light"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: 'var(--burgundy)',
            opacity: 0.85
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ duration: 2, delay: 2.5 }}
        >
          {t.header.subtitle}
        </motion.p>

        {/* Bottom Elegant Ornament */}
        <motion.div
          className="flex items-center justify-center gap-3 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 5 }}
        >
          <motion.div
            style={{
              width: '32px',
              height: '32px',
              border: '1px solid var(--gold)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <div
              style={{
                width: '16px',
                height: '16px',
                border: '1px solid var(--gold)',
                borderRadius: '50%',
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </header>
    </>
  );
};