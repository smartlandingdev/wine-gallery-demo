import { useState, useRef } from 'react';

// Wine Glass Icon
const WineGlassIcon = () => (
  <svg width="32" height="32" viewBox="0 0 48 48" fill="none" stroke="var(--gold)" strokeWidth="1">
    <path d="M14 8 L34 8 L30 24 C30 32 27 36 24 36 C21 36 18 32 18 24 Z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 36 L24 44 M16 44 L32 44" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Tour 360 Icon
const Tour360Icon = () => (
  <svg width="32" height="32" viewBox="0 0 48 48" fill="none" stroke="var(--gold)" strokeWidth="1">
    <circle cx="24" cy="24" r="20" />
    <path d="M24 4 L24 44 M4 24 L44 24" />
    <path d="M12 12 L36 36 M36 12 L12 36" strokeLinecap="round"/>
  </svg>
);

// Star Icon
const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--gold)" stroke="var(--gold)" strokeWidth="1">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export const InteractiveFeatures = () => {
  const [activeTab, setActiveTab] = useState('quiz');
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [tourStep, setTourStep] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hoveredOption, setHoveredOption] = useState<number | null>(null);

  const quizQuestions = [
    {
      question: "Qual seu estilo de vinho favorito?",
      options: [
        { label: "Encorpado & Intenso", emoji: "💪", desc: "Taninos robustos" },
        { label: "Leve & Refrescante", emoji: "🌊", desc: "Acidez vibrante" },
        { label: "Doce & Frutado", emoji: "🍇", desc: "Notas adocicadas" },
        { label: "Complexo & Envelhecido", emoji: "⏳", desc: "Maturado em barricas" }
      ]
    },
    {
      question: "Para qual ocasião?",
      options: [
        { label: "Jantar Formal", emoji: "🍽️", desc: "Elegância refinada" },
        { label: "Noite Romântica", emoji: "💕", desc: "Momento especial" },
        { label: "Celebração", emoji: "🎊", desc: "Brinde memorável" },
        { label: "Casual", emoji: "😊", desc: "Descontraído" }
      ]
    },
    {
      question: "Qual sua faixa de preço?",
      options: [
        { label: "€ 30-50", emoji: "💵", desc: "Qualidade acessível" },
        { label: "€ 50-100", emoji: "💶", desc: "Premium selecionado" },
        { label: "€ 100-200", emoji: "💷", desc: "Reserva especial" },
        { label: "€ 200+", emoji: "💎", desc: "Edição limitada" }
      ]
    }
  ];

  const tourImages = [
    {
      src: "/images/story-cellar.jpg",
      title: "Entrada da Adega",
      description: "Bem-vindo ao nosso espaço premium de 2000m² dedicado aos melhores vinhos",
      location: "Sala Principal"
    },
    {
      src: "/images/gallery/wine1.jpg",
      title: "Coleção Premium",
      description: "Mais de 500 rótulos cuidadosamente selecionados das melhores vinícolas",
      location: "Setor A"
    },
    {
      src: "/images/gallery/wine2.png",
      title: "Câmara Climatizada",
      description: "Temperatura controlada a 15°C para preservação perfeita",
      location: "Setor B"
    },
    {
      src: "/images/gallery/wine3.png",
      title: "Sala de Degustação",
      description: "Espaço exclusivo onde cada vinho conta sua história única",
      location: "Setor VIP"
    }
  ];

  const sommelierPicks = [
    {
      name: "Château Margaux 2018",
      image: "/images/gallery/wine2.png",
      rating: "98",
      notes: "Taninos sedosos, frutas negras, notas de carvalho francês e especiarias",
      price: "€ 850",
      pairing: "Perfeito com cordeiro assado",
      region: "Bordeaux, França",
      limited: true
    },
    {
      name: "Dom Pérignon 2012",
      image: "/images/gallery/wine4.png",
      rating: "96",
      notes: "Bolhas finas, aromas cítricos, brioche e mel, final prolongado",
      price: "€ 950",
      pairing: "Excelente com caviar",
      region: "Champagne, França",
      limited: true
    },
    {
      name: "Opus One 2019",
      image: "/images/gallery/wine5.png",
      rating: "95",
      notes: "Elegante, frutas vermelhas maduras, chocolate e café",
      price: "$ 680",
      pairing: "Harmoniza lindamente com filé mignon",
      region: "Napa Valley, EUA",
      limited: true
    }
  ];

  const handleQuizAnswer = (answer: string) => {
    const newAnswers = { ...quizAnswers, [quizStep]: answer };
    setQuizAnswers(newAnswers);

    if (quizStep < quizQuestions.length - 1) {
      setTimeout(() => setQuizStep(quizStep + 1), 300);
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers({});
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 360;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="interactive" className="py-32 relative overflow-hidden" style={{ background: 'var(--off-white)' }}>
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] opacity-[0.02]"
        style={{ background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-6 mb-8 animate-fade-in">
            <div className="h-px w-20 gold-line" />
            <span className="text-[10px] uppercase tracking-[0.35em] font-light" style={{ color: 'var(--gold)' }}>
              Ferramentas Interativas
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
            Experiência Personalizada
          </h2>

          <p
            className="text-lg font-light leading-loose max-w-2xl mx-auto animate-fade-in-up"
            style={{
              color: 'var(--burgundy)',
              opacity: 0.8,
              animationDelay: '0.2s'
            }}
          >
            Descubra seu vinho ideal através de ferramentas exclusivas
          </p>
        </div>

        {/* Elegant Tab Navigation */}
        <div className="flex justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="flex gap-2 border p-2" style={{ borderColor: 'var(--gold)', backgroundColor: 'white' }}>
            <button
              onClick={() => setActiveTab('quiz')}
              className="relative px-8 py-4 text-xs font-light uppercase tracking-[0.2em] transition-all duration-500 overflow-hidden group"
              style={{
                color: activeTab === 'quiz' ? 'white' : 'var(--burgundy-deep)'
              }}
            >
              <div
                className="absolute inset-0 transition-transform duration-500"
                style={{
                  backgroundColor: 'var(--gold)',
                  transform: activeTab === 'quiz' ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'left'
                }}
              />
              <span className="relative z-10 flex items-center gap-2">
                <WineGlassIcon />
                Wine Finder
              </span>
            </button>

            <button
              onClick={() => setActiveTab('tour')}
              className="relative px-8 py-4 text-xs font-light uppercase tracking-[0.2em] transition-all duration-500 overflow-hidden group"
              style={{
                color: activeTab === 'tour' ? 'white' : 'var(--burgundy-deep)'
              }}
            >
              <div
                className="absolute inset-0 transition-transform duration-500"
                style={{
                  backgroundColor: 'var(--gold)',
                  transform: activeTab === 'tour' ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'left'
                }}
              />
              <span className="relative z-10 flex items-center gap-2">
                <Tour360Icon />
                Tour 360°
              </span>
            </button>

            <button
              onClick={() => setActiveTab('sommelier')}
              className="relative px-8 py-4 text-xs font-light uppercase tracking-[0.2em] transition-all duration-500 overflow-hidden group"
              style={{
                color: activeTab === 'sommelier' ? 'white' : 'var(--burgundy-deep)'
              }}
            >
              <div
                className="absolute inset-0 transition-transform duration-500"
                style={{
                  backgroundColor: 'var(--gold)',
                  transform: activeTab === 'sommelier' ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'left'
                }}
              />
              <span className="relative z-10 flex items-center gap-2">
                <StarIcon />
                Sommelier Picks
              </span>
            </button>
          </div>
        </div>

        {/* QUIZ - Gamified Cards */}
        {activeTab === 'quiz' && (
          <div className="border bg-white/60 backdrop-blur-sm p-12 animate-fade-in" style={{ borderColor: 'var(--gold)' }}>
            {quizStep < quizQuestions.length ? (
              <div>
                {/* Progress Dots */}
                <div className="flex justify-center gap-3 mb-12">
                  {quizQuestions.map((_, index) => (
                    <div
                      key={index}
                      className="transition-all duration-500"
                      style={{
                        width: index === quizStep ? '40px' : '12px',
                        height: '12px',
                        backgroundColor: index <= quizStep ? 'var(--gold)' : 'var(--warm-gray)',
                        borderRadius: '6px'
                      }}
                    />
                  ))}
                </div>

                {/* Question */}
                <h3
                  className="text-4xl font-light mb-12 text-center leading-tight"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: 'var(--burgundy-deep)'
                  }}
                >
                  {quizQuestions[quizStep].question}
                </h3>

                {/* Choice Cards - Gamified */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {quizQuestions[quizStep].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuizAnswer(option.label)}
                      onMouseEnter={() => setHoveredOption(index)}
                      onMouseLeave={() => setHoveredOption(null)}
                      className="relative border p-8 text-left transition-all duration-700 group"
                      style={{
                        borderColor: hoveredOption === index ? 'var(--gold)' : 'var(--warm-gray)',
                        backgroundColor: hoveredOption === index ? 'var(--gold)' : 'white',
                        transform: hoveredOption === index ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                        boxShadow: hoveredOption === index ? '0 20px 40px -10px rgba(212, 175, 55, 0.3)' : 'none'
                      }}
                    >
                      {/* Emoji */}
                      <div className="text-4xl mb-4 transition-transform duration-500"
                        style={{
                          transform: hoveredOption === index ? 'scale(1.2) rotate(10deg)' : 'scale(1) rotate(0deg)'
                        }}
                      >
                        {option.emoji}
                      </div>

                      {/* Label */}
                      <h4
                        className="text-xl font-light mb-2 tracking-wide transition-colors duration-500"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          color: hoveredOption === index ? 'white' : 'var(--burgundy-deep)'
                        }}
                      >
                        {option.label}
                      </h4>

                      {/* Description */}
                      <p
                        className="text-sm font-light transition-colors duration-500"
                        style={{
                          color: hoveredOption === index ? 'rgba(255,255,255,0.9)' : 'var(--burgundy)',
                          opacity: hoveredOption === index ? 1 : 0.6
                        }}
                      >
                        {option.desc}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center max-w-2xl mx-auto">
                <div className="mb-8">
                  <WineGlassIcon />
                </div>

                <h3
                  className="text-4xl font-light mb-6"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: 'var(--burgundy-deep)'
                  }}
                >
                  Seu Vinho Perfeito!
                </h3>

                <div className="border p-8 mb-8" style={{ borderColor: 'var(--gold)', backgroundColor: 'white' }}>
                  <img
                    src="/images/gallery/wine2.png"
                    alt="Recomendação"
                    className="h-48 mx-auto mb-6"
                  />
                  <h4 className="text-2xl font-light mb-4" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--burgundy-deep)' }}>
                    Château Margaux 2018
                  </h4>
                  <p className="text-sm font-light leading-loose" style={{ color: 'var(--burgundy)', opacity: 0.8 }}>
                    Baseado nas suas preferências, recomendamos este vinho excepcional com taninos sedosos e notas complexas.
                  </p>
                </div>

                <button
                  onClick={resetQuiz}
                  className="border px-10 py-4 text-sm font-light uppercase tracking-[0.2em] transition-all duration-700 hover:text-white overflow-hidden group"
                  style={{ borderColor: 'var(--gold)', color: 'var(--burgundy-deep)' }}
                >
                  <span className="relative z-10">Refazer Quiz</span>
                  <div
                    className="absolute inset-0 bg-[var(--gold)] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700"
                  />
                </button>
              </div>
            )}
          </div>
        )}

        {/* VIRTUAL TOUR - 360° */}
        {activeTab === 'tour' && (
          <div className="border bg-white overflow-hidden animate-fade-in" style={{ borderColor: 'var(--gold)' }}>
            <div className="relative aspect-[16/9]">
              <img
                src={tourImages[tourStep].src}
                alt={tourImages[tourStep].title}
                className="w-full h-full object-cover transition-all duration-700"
                style={{
                  filter: 'sepia(15%)'
                }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--burgundy-deep)] via-transparent to-transparent opacity-70" />

              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                {/* Location Badge */}
                <div
                  className="inline-block px-4 py-2 mb-4 text-[10px] uppercase tracking-[0.2em] font-light border"
                  style={{
                    backgroundColor: 'var(--gold)',
                    borderColor: 'var(--gold-light)',
                    color: 'white'
                  }}
                >
                  {tourImages[tourStep].location}
                </div>

                <h3
                  className="text-4xl font-light mb-3"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: 'white'
                  }}
                >
                  {tourImages[tourStep].title}
                </h3>

                <p className="text-base font-light leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.9)' }}>
                  {tourImages[tourStep].description}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="p-6 flex justify-between items-center" style={{ backgroundColor: 'var(--off-white)' }}>
              <button
                onClick={() => setTourStep(Math.max(0, tourStep - 1))}
                disabled={tourStep === 0}
                className="border px-6 py-3 text-xs font-light uppercase tracking-[0.15em] transition-all duration-500 hover:bg-[var(--gold)] hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[var(--burgundy-deep)]"
                style={{ borderColor: 'var(--gold)', color: 'var(--burgundy-deep)' }}
              >
                ← Anterior
              </button>

              {/* Dots */}
              <div className="flex gap-3">
                {tourImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setTourStep(index)}
                    className="transition-all duration-500"
                    style={{
                      width: index === tourStep ? '40px' : '12px',
                      height: '12px',
                      backgroundColor: index === tourStep ? 'var(--gold)' : 'var(--warm-gray)',
                      borderRadius: '6px'
                    }}
                  />
                ))}
              </div>

              <button
                onClick={() => setTourStep(Math.min(tourImages.length - 1, tourStep + 1))}
                disabled={tourStep === tourImages.length - 1}
                className="border px-6 py-3 text-xs font-light uppercase tracking-[0.15em] transition-all duration-500 hover:bg-[var(--gold)] hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[var(--burgundy-deep)]"
                style={{ borderColor: 'var(--gold)', color: 'var(--burgundy-deep)' }}
              >
                Próximo →
              </button>
            </div>
          </div>
        )}

        {/* SOMMELIER PICKS - Horizontal Scroll */}
        {activeTab === 'sommelier' && (
          <div className="relative animate-fade-in">
            {/* Navigation Buttons */}
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-20 w-14 h-14 border flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:bg-[var(--gold)] hover:border-[var(--gold)] group"
              style={{ borderColor: 'var(--gold)', backgroundColor: 'rgba(250, 247, 242, 0.9)' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--burgundy)" strokeWidth="1" className="group-hover:stroke-white transition-colors">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-20 w-14 h-14 border flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:bg-[var(--gold)] hover:border-[var(--gold)] group"
              style={{ borderColor: 'var(--gold)', backgroundColor: 'rgba(250, 247, 242, 0.9)' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--burgundy)" strokeWidth="1" className="group-hover:stroke-white transition-colors">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Scrollable Container */}
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide py-4"
              style={{ scrollbarWidth: 'none' }}
            >
              {sommelierPicks.map((wine, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[350px] border bg-white overflow-hidden transition-all duration-700 card-hover group"
                  style={{ borderColor: 'var(--warm-gray)' }}
                >
                  {/* Limited Badge */}
                  {wine.limited && (
                    <div
                      className="absolute top-4 right-4 z-10 px-3 py-1 text-[9px] uppercase tracking-[0.2em] font-light border"
                      style={{
                        backgroundColor: 'var(--gold)',
                        color: 'white',
                        borderColor: 'var(--gold-light)',
                      }}
                    >
                      Edição Limitada
                    </div>
                  )}

                  {/* Image */}
                  <div className="h-64 flex items-center justify-center p-8 overflow-hidden" style={{ backgroundColor: 'var(--warm-gray)' }}>
                    <img
                      src={wine.image}
                      alt={wine.name}
                      className="h-full w-auto object-contain transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <StarIcon />
                      <span className="text-sm font-light" style={{ color: 'var(--gold)' }}>
                        {wine.rating} Pontos
                      </span>
                    </div>

                    {/* Name */}
                    <h3
                      className="text-xl font-light mb-2 tracking-wide"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: 'var(--burgundy-deep)'
                      }}
                    >
                      {wine.name}
                    </h3>

                    {/* Region */}
                    <p className="text-xs mb-4 font-light uppercase tracking-[0.15em]" style={{ color: 'var(--burgundy)', opacity: 0.6 }}>
                      {wine.region}
                    </p>

                    {/* Notes */}
                    <p className="text-sm font-light leading-loose mb-4" style={{ color: 'var(--burgundy)', opacity: 0.8 }}>
                      {wine.notes}
                    </p>

                    {/* Pairing */}
                    <p className="text-xs italic mb-6 font-light" style={{ color: 'var(--gold)' }}>
                      {wine.pairing}
                    </p>

                    {/* Price & Action */}
                    <div className="flex items-center justify-between">
                      <span
                        className="text-2xl font-light tracking-wide"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          color: 'var(--burgundy-deep)'
                        }}
                      >
                        {wine.price}
                      </span>

                      <button
                        className="border px-6 py-2 text-xs font-light uppercase tracking-[0.15em] transition-all duration-500 hover:bg-[var(--gold)] hover:text-white"
                        style={{ borderColor: 'var(--gold)', color: 'var(--burgundy-deep)' }}
                      >
                        Comprar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Hide scrollbar CSS */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};
