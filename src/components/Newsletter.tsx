import { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';

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
    <section id="newsletter" className="py-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--burgundy-deep) 0%, var(--burgundy) 100%)' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, var(--gold) 1px, transparent 1px), radial-gradient(circle at 80% 80%, var(--gold) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-6 mb-8 animate-fade-in">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
            <span className="text-[10px] uppercase tracking-[0.35em] font-light" style={{ color: 'var(--gold)' }}>
              Newsletter Exclusiva
            </span>
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
          </div>

          <h2
            className="text-5xl md:text-7xl font-light leading-tight mb-6 animate-fade-in-up"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: 'white',
              animationDelay: '0.1s'
            }}
          >
            Quero Descobrir Novos Vinhos
          </h2>

          <p
            className="text-lg font-light leading-loose max-w-2xl mx-auto animate-fade-in-up"
            style={{
              color: 'var(--gold-light)',
              animationDelay: '0.2s'
            }}
          >
            Receba recomendações personalizadas, ofertas exclusivas e conteúdo premium
          </p>
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
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Input Container */}
              <div
                className="flex items-center border bg-white/95 backdrop-blur-sm overflow-hidden transition-all duration-500"
                style={{
                  borderColor: isFocused ? 'var(--gold)' : 'transparent',
                  boxShadow: isFocused ? '0 0 30px rgba(212, 175, 55, 0.3)' : 'none'
                }}
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

                {/* Submit Button with Wine Glass */}
                <button
                  type="submit"
                  className="group relative px-8 py-5 text-sm font-light uppercase tracking-[0.2em] transition-all duration-500 overflow-hidden flex items-center gap-3 whitespace-nowrap"
                  style={{
                    backgroundColor: 'var(--gold)',
                    color: 'white'
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Inscrever-se
                    <WineGlassIcon />
                  </span>
                  <div
                    className="absolute inset-0 bg-[var(--burgundy)] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700"
                  />
                </button>
              </div>

              {/* Privacy Text */}
              <p className="text-xs font-light mt-4 text-center" style={{ color: 'var(--gold-light)', opacity: 0.8 }}>
                🔒 {t.newsletter.privacy}
              </p>
            </div>
          </form>
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
              className="border bg-white/5 backdrop-blur-sm p-8 text-center transition-all duration-500 hover:bg-white/10 hover:border-[var(--gold)] animate-fade-in-up"
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