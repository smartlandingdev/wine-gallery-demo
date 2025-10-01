import { useState, useRef } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { motion, useInView } from 'framer-motion';

// Email Icon
const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 6l10 7 10-7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Wine Glass Icon
const WineGlassIcon = () => (
  <svg width="24" height="24" viewBox="0 0 48 48" fill="none" stroke="var(--gold)" strokeWidth="1">
    <path d="M14 8 L34 8 L30 24 C30 32 27 36 24 36 C21 36 18 32 18 24 Z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 36 L24 44 M16 44 L32 44" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Gift Icon
const GiftIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1">
    <rect x="3" y="8" width="18" height="12" rx="1" />
    <path d="M12 8v12M3 12h18" strokeLinecap="round"/>
    <path d="M8.5 8a2.5 2.5 0 012.5-2.5c1.5 0 2 1.5 1 3M15.5 8A2.5 2.5 0 0013 5.5c-1.5 0-2 1.5-1 3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Bell Icon
const BellIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1">
    <path d="M18 8A6 6 0 106 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Newsletter = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section ref={sectionRef} id="newsletter" className="py-40 relative overflow-hidden" style={{ background: 'var(--gradient-luxury)' }}>
      {/* Animated Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, var(--gold) 2px, transparent 2px), radial-gradient(circle at 80% 80%, var(--gold) 2px, transparent 2px)',
          backgroundSize: '60px 60px'
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Floating Gold Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl"
        style={{ background: 'var(--gradient-glow)' }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            className="flex items-center justify-center gap-6 mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="h-px w-28 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            />
            <span className="text-[10px] uppercase tracking-[0.4em] font-light" style={{ color: 'var(--gold)' }}>
              Newsletter Exclusiva
            </span>
            <motion.div
              className="h-px w-28 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </motion.div>

          <motion.h2
            className="text-6xl md:text-8xl font-light leading-tight mb-8"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: 'white',
              textShadow: '0 4px 40px rgba(201, 166, 107, 0.3)'
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Quero Descobrir Novos Vinhos
          </motion.h2>

          <motion.p
            className="text-xl font-light leading-relaxed max-w-3xl mx-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: 'var(--gold-light)'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.5 }}
          >
            Receba recomendações personalizadas, ofertas exclusivas e conteúdo premium
          </motion.p>
        </div>

        {/* Form */}
        {isSubmitted ? (
          <div className="border bg-white/10 backdrop-blur-sm p-10 max-w-md mx-auto text-center animate-fade-in"
            style={{ borderColor: 'var(--gold)' }}
          >
            <div className="mb-6">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1" className="mx-auto">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-2xl font-light mb-2" style={{ fontFamily: "'Playfair Display', serif", color: 'white' }}>
              Bem-vindo à Família!
            </h3>
            <p className="text-sm font-light" style={{ color: 'var(--gold-light)' }}>
              {t.newsletter.success}
            </p>
          </div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative">
              {/* Input Container - Premium Glow */}
              <motion.div
                className="flex items-center border-2 bg-white/98 backdrop-blur-md overflow-hidden"
                style={{
                  borderColor: isFocused ? 'var(--gold)' : 'rgba(201, 166, 107, 0.3)'
                }}
                animate={{
                  boxShadow: isFocused
                    ? '0 0 50px rgba(201, 166, 107, 0.6), 0 0 100px rgba(201, 166, 107, 0.3)'
                    : '0 10px 40px rgba(201, 166, 107, 0.2)'
                }}
                transition={{ duration: 0.5 }}
              >
                {/* Email Icon */}
                <div className="pl-6 pr-4">
                  <EmailIcon />
                </div>

                {/* Input */}
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="seu@email.com"
                  required
                  className="flex-1 py-5 text-base font-light bg-transparent focus:outline-none"
                  style={{ color: 'var(--burgundy-deep)' }}
                />

                {/* Submit Button - Premium Glow */}
                <motion.button
                  type="submit"
                  className="group relative px-12 py-6 text-sm font-light uppercase tracking-[0.25em] overflow-hidden flex items-center gap-3 whitespace-nowrap"
                  style={{
                    background: 'var(--gradient-gold)',
                    color: 'white'
                  }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 0 60px rgba(201, 166, 107, 0.8)'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Inscrever-se
                    <WineGlassIcon />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-[var(--burgundy-deep)]"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '0%' }}
                    transition={{ duration: 0.7 }}
                  />
                </motion.button>
              </motion.div>

              {/* Privacy Text */}
              <motion.p
                className="text-sm font-light mt-6 text-center"
                style={{ color: 'var(--gold-light)', opacity: 0.9 }}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 0.9 } : {}}
                transition={{ delay: 0.9 }}
              >
                🔒 {t.newsletter.privacy}
              </motion.p>
            </div>
          </motion.form>
        )}

        {/* Benefits - Icon Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <BellIcon />,
              title: t.newsletter.benefit1.title,
              description: t.newsletter.benefit1.description
            },
            {
              icon: <GiftIcon />,
              title: t.newsletter.benefit2.title,
              description: t.newsletter.benefit2.description
            },
            {
              icon: <WineGlassIcon />,
              title: t.newsletter.benefit3.title,
              description: t.newsletter.benefit3.description
            }
          ].map((benefit, index) => (
            <div
              key={index}
              className="border bg-white/5 backdrop-blur-sm p-8 text-center transition-all duration-500 hover:bg-white/10 hover:border-[var(--gold)] animate-fade-in-up scale-hover liquid-hover"
              style={{
                borderColor: 'rgba(212, 175, 55, 0.2)',
                animationDelay: `${0.4 + index * 0.1}s`
              }}
            >
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>

              <h3
                className="text-lg font-light mb-3 tracking-wide"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: 'white'
                }}
              >
                {benefit.title}
              </h3>

              <p
                className="text-sm font-light leading-loose"
                style={{ color: 'var(--gold-light)', opacity: 0.9 }}
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};