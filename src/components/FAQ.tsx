import { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';

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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
    <section id="faq" className="py-32 relative overflow-hidden" style={{ background: 'var(--warm-gray)' }}>
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-[0.02]"
        style={{ background: 'radial-gradient(circle, var(--burgundy) 0%, transparent 70%)' }}
      />

      <div className="max-w-4xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-6 mb-8 animate-fade-in">
            <div className="h-px w-20 gold-line" />
            <span className="text-[10px] uppercase tracking-[0.35em] font-light" style={{ color: 'var(--gold)' }}>
              Perguntas Frequentes
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
            {t.faq.title}
          </h2>

          <p
            className="text-lg font-light leading-loose max-w-2xl mx-auto animate-fade-in-up"
            style={{
              color: 'var(--burgundy)',
              opacity: 0.8,
              animationDelay: '0.2s'
            }}
          >
            {t.faq.subtitle}
          </p>
        </div>

        {/* FAQ Accordion - Neumorphism Style */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="relative animate-fade-in-up"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Neumorphic Card */}
              <div
                className="relative overflow-hidden transition-all duration-700"
                style={{
                  background: openIndex === index
                    ? 'linear-gradient(145deg, #ffffff, #f5f2ed)'
                    : '#FAF7F2',
                  boxShadow: openIndex === index
                    ? 'inset 4px 4px 8px rgba(107, 28, 35, 0.08), inset -4px -4px 8px rgba(255, 255, 255, 0.9)'
                    : hoveredIndex === index
                    ? '6px 6px 12px rgba(107, 28, 35, 0.1), -6px -6px 12px rgba(255, 255, 255, 0.9)'
                    : '4px 4px 8px rgba(107, 28, 35, 0.08), -4px -4px 8px rgba(255, 255, 255, 0.9)',
                  borderRadius: '0px',
                  border: openIndex === index ? '1px solid var(--gold)' : '1px solid transparent'
                }}
              >
                {/* Question Button */}
                <button
                  className="w-full px-8 py-6 text-left flex items-center gap-4 transition-all duration-500"
                  onClick={() => toggleFAQ(index)}
                >
                  {/* Number Badge - Neumorphic */}
                  <div
                    className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-sm font-light transition-all duration-500"
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
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Question Text */}
                  <div className="flex-1">
                    <h3
                      className="text-lg md:text-xl font-light tracking-wide transition-colors duration-500"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: openIndex === index ? 'var(--gold)' : 'var(--burgundy-deep)'
                      }}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  {/* Plus/Minus Icon */}
                  <div className="flex-shrink-0">
                    <PlusMinusIcon isOpen={openIndex === index} />
                  </div>
                </button>

                {/* Answer Panel - Smooth Expand */}
                <div
                  className="overflow-hidden transition-all duration-700 ease-in-out"
                  style={{
                    maxHeight: openIndex === index ? '500px' : '0px',
                    opacity: openIndex === index ? 1 : 0
                  }}
                >
                  <div className="px-8 pb-8">
                    {/* Divider Line */}
                    <div
                      className="h-px mb-6 transition-all duration-700"
                      style={{
                        background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
                        opacity: openIndex === index ? 1 : 0,
                        transform: openIndex === index ? 'scaleX(1)' : 'scaleX(0)'
                      }}
                    />

                    {/* Answer Content */}
                    <div className="flex gap-4">
                      {/* Decorative Icon */}
                      <div className="flex-shrink-0 mt-1">
                        <WineGlassSmall />
                      </div>

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
                    </div>
                  </div>
                </div>

                {/* Subtle Bottom Glow on Active */}
                {openIndex === index && (
                  <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 blur-sm transition-opacity duration-700"
                    style={{
                      background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
                      opacity: 0.3
                    }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Below FAQ */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="h-px w-32 mx-auto mb-8 gold-line" />
          <p
            className="text-base font-light mb-6"
            style={{
              color: 'var(--burgundy)',
              opacity: 0.8
            }}
          >
            Ainda tem dúvidas? Nossa equipe está pronta para ajudar
          </p>

          <button
            className="border px-10 py-4 text-sm font-light uppercase tracking-[0.25em] transition-all duration-700 hover:text-white overflow-hidden group"
            style={{
              borderColor: 'var(--gold)',
              color: 'var(--burgundy-deep)'
            }}
          >
            <span className="relative z-10 flex items-center gap-3">
              Entre em Contato
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M5 12h14m0 0l-7-7m7 7l-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <div
              className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700"
              style={{ backgroundColor: 'var(--gold)' }}
            />
          </button>
        </div>
      </div>
    </section>
  );
};