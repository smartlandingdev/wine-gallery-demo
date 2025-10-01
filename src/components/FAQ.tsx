import { useState, useRef } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { motion, useInView, AnimatePresence } from 'framer-motion';

// Plus/Minus Icon
const PlusMinusIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--gold)"
    strokeWidth="1.5"
    className="transition-transform duration-500"
    style={{
      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)'
    }}
  >
    <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Wine Glass Decorative Icon
const WineGlassSmall = () => (
  <svg width="20" height="20" viewBox="0 0 48 48" fill="none" stroke="var(--gold)" strokeWidth="1">
    <path d="M14 8 L34 8 L30 24 C30 32 27 36 24 36 C21 36 18 32 18 24 Z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 36 L24 44 M16 44 L32 44" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const FAQ = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const faqs = [
    {
      question: t.faq.question1,
      answer: t.faq.answer1,
      icon: "🍷"
    },
    {
      question: t.faq.question2,
      answer: t.faq.answer2,
      icon: "📦"
    },
    {
      question: t.faq.question3,
      answer: t.faq.answer3,
      icon: "🌡️"
    },
    {
      question: t.faq.question4,
      answer: t.faq.answer4,
      icon: "🚚"
    },
    {
      question: t.faq.question5,
      answer: t.faq.answer5,
      icon: "💳"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} id="faq" className="py-32 relative overflow-hidden" style={{ background: 'var(--warm-gray)' }}>
      {/* Background decoration with Animation */}
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-[0.02]"
        style={{ background: 'radial-gradient(circle, var(--burgundy) 0%, transparent 70%)' }}
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 90, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-4xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-24">
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
              Perguntas Frequentes
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
            {t.faq.title}
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
            {t.faq.subtitle}
          </motion.p>
        </div>

        {/* FAQ Accordion - Neumorphism Style with Premium Animations */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
            >
              {/* Card with Testimonials Style */}
              <motion.div
                className="relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(107, 28, 35, 0.03) 0%, rgba(201, 166, 107, 0.02) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: openIndex === index ? '1px solid rgba(201, 166, 107, 0.3)' : '1px solid rgba(201, 166, 107, 0.15)'
                }}
                whileHover={{
                  y: -4
                }}
                transition={{ duration: 0.4 }}
              >
                {/* Question Button */}
                <motion.button
                  className="w-full px-8 py-6 text-left flex items-center gap-4"
                  onClick={() => toggleFAQ(index)}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Number Badge - Neumorphic with Animation */}
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-sm font-light"
                    style={{
                      background: openIndex === index
                        ? 'var(--gold)'
                        : 'linear-gradient(145deg, #ffffff, #ede9e0)',
                      boxShadow: openIndex === index
                        ? '2px 2px 4px rgba(107, 28, 35, 0.2), -2px -2px 4px rgba(255, 255, 255, 0.8)'
                        : '3px 3px 6px rgba(107, 28, 35, 0.1), -3px -3px 6px rgba(255, 255, 255, 1)',
                      color: openIndex === index ? 'white' : 'var(--burgundy-deep)',
                      fontFamily: "'Playfair Display', serif"
                    }}
                    animate={{
                      scale: openIndex === index ? 1.05 : 1,
                      rotate: openIndex === index ? 360 : 0
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </motion.div>

                  {/* Question Text */}
                  <div className="flex-1">
                    <motion.h3
                      className="text-lg md:text-xl font-light tracking-wide"
                      style={{
                        fontFamily: "'Playfair Display', serif"
                      }}
                      animate={{
                        color: openIndex === index ? 'var(--gold)' : 'var(--burgundy-deep)'
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      {faq.question}
                    </motion.h3>
                  </div>

                  {/* Plus/Minus Icon */}
                  <div className="flex-shrink-0">
                    <PlusMinusIcon isOpen={openIndex === index} />
                  </div>
                </motion.button>

                {/* Answer Panel - Smooth Expand with AnimatePresence */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8">
                        {/* Divider Line */}
                        <motion.div
                          className="h-px mb-6"
                          style={{
                            background: 'linear-gradient(90deg, transparent, var(--gold), transparent)'
                          }}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        />

                        {/* Answer Content */}
                        <motion.div
                          className="flex gap-4"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          {/* Decorative Icon */}
                          <motion.div
                            className="flex-shrink-0 mt-1"
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                          >
                            <WineGlassSmall />
                          </motion.div>

                          {/* Text */}
                          <p
                            className="text-base font-light leading-loose flex-1"
                            style={{
                              color: 'var(--burgundy)',
                              opacity: 0.9
                            }}
                          >
                            {faq.answer}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Subtle Bottom Glow on Active */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 blur-sm"
                      style={{
                        background: 'linear-gradient(90deg, transparent, var(--gold), transparent)'
                      }}
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 0.4, scaleX: 1 }}
                      exit={{ opacity: 0, scaleX: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Below FAQ with Premium Animation */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            className="h-px w-32 mx-auto mb-8 gold-line"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.3 }}
          />
          <motion.p
            className="text-base font-light mb-6"
            style={{
              color: 'var(--burgundy)',
              opacity: 0.8
            }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.8 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            Ainda tem dúvidas? Nossa equipe está pronta para ajudar
          </motion.p>

          <motion.button
            className="relative border px-10 py-4 text-sm font-light uppercase tracking-[0.25em] overflow-hidden group"
            style={{
              borderColor: 'var(--gold)',
              color: 'var(--burgundy-deep)'
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 40px rgba(201, 166, 107, 0.4)'
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-700">
              Entre em Contato
              <motion.svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path d="M5 12h14m0 0l-7-7m7 7l-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </motion.svg>
            </span>
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: 'var(--gold)' }}
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};