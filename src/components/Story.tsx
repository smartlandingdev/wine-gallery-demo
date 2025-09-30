import { useTranslation } from '../hooks/useTranslation';
import { useState } from 'react';

// Award Icon SVG
const AwardIcon = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="var(--gold)" strokeWidth="1">
    <circle cx="24" cy="18" r="12" />
    <path d="M16 26 L12 42 L24 36 L36 42 L32 26" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="24" cy="18" r="6" fill="var(--gold)"/>
  </svg>
);

export const Story = () => {
  const { t } = useTranslation();
  const [hoveredYear, setHoveredYear] = useState<number | null>(null);

  const timeline = [
    {
      year: 1998,
      title: "Fundação",
      description: "Início da jornada com foco em vinhos premium",
      image: "/images/story-cellar.jpg"
    },
    {
      year: 2008,
      title: "Expansão Internacional",
      description: "Parcerias diretas com vinícolas europeias",
      image: "/images/story-cellar.jpg"
    },
    {
      year: 2018,
      title: "Reconhecimento",
      description: "Prêmio de melhor importadora nacional",
      image: "/images/story-cellar.jpg"
    },
    {
      year: 2023,
      title: "Loja do Ano",
      description: "Eleita a melhor loja de vinhos premium",
      image: "/images/story-cellar.jpg"
    }
  ];

  const stats = [
    {
      value: "25+",
      label: t.story.yearsExperience,
      icon: (
        <svg width="32" height="32" viewBox="0 0 48 48" fill="none" stroke="var(--gold)" strokeWidth="1">
          <circle cx="24" cy="24" r="20" />
          <path d="M24 8 L24 24 L34 34" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      value: "500+",
      label: t.story.wineSelection,
      icon: (
        <svg width="32" height="32" viewBox="0 0 48 48" fill="none" stroke="var(--gold)" strokeWidth="1">
          <path d="M14 8 L34 8 L30 24 C30 32 27 36 24 36 C21 36 18 32 18 24 Z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 36 L24 44 M16 44 L32 44" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      value: "2023",
      label: t.story.awardTitle,
      icon: <AwardIcon />
    }
  ];

  return (
    <section id="story" className="py-32 relative overflow-hidden" style={{ background: 'var(--off-white)' }}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.02]"
        style={{ background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-6 mb-8 animate-fade-in">
            <div className="h-px w-20 gold-line" />
            <span className="text-[10px] uppercase tracking-[0.35em] font-light" style={{ color: 'var(--gold)' }}>
              Nossa Trajetória
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
            {t.story.title}
          </h2>

          <p
            className="text-lg font-light leading-loose max-w-3xl mx-auto animate-fade-in-up"
            style={{
              color: 'var(--burgundy)',
              opacity: 0.8,
              animationDelay: '0.2s'
            }}
          >
            {t.story.paragraph1}
          </p>
        </div>

        {/* Statistics Highlight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative border p-12 text-center group hover:border-[var(--gold)] transition-all duration-700"
              style={{ borderColor: 'var(--warm-gray)', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6">
                {stat.icon}
              </div>

              {/* Value */}
              <div
                className="text-6xl font-light mb-4 transition-colors duration-500 group-hover:text-[var(--gold)]"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: 'var(--burgundy-deep)'
                }}
              >
                {stat.value}
              </div>

              {/* Label */}
              <div
                className="text-sm uppercase tracking-[0.2em] font-light"
                style={{ color: 'var(--burgundy)', opacity: 0.7 }}
              >
                {stat.label}
              </div>

              {/* Bottom gold line on hover */}
              <div
                className="absolute bottom-0 left-0 h-px transition-all duration-700"
                style={{
                  backgroundColor: 'var(--gold)',
                  width: '0%',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.width = '100%';
                }}
              />
            </div>
          ))}
        </div>

        {/* Interactive Timeline */}
        <div className="relative">
          {/* Center Timeline Line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden lg:block"
            style={{ backgroundColor: 'var(--gold)', opacity: 0.3 }}
          />

          {/* Timeline Items */}
          <div className="space-y-24">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                onMouseEnter={() => setHoveredYear(item.year)}
                onMouseLeave={() => setHoveredYear(null)}
              >
                {/* Content - alternates left/right */}
                <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:col-start-2 lg:pl-16'}`}>
                  <div
                    className="text-7xl font-light mb-4 transition-all duration-700"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: hoveredYear === item.year ? 'var(--gold)' : 'var(--burgundy-deep)',
                      opacity: hoveredYear === item.year ? 1 : 0.3
                    }}
                  >
                    {item.year}
                  </div>

                  <h3
                    className="text-3xl font-light mb-4 tracking-wide transition-colors duration-500"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: 'var(--burgundy-deep)'
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="text-base font-light leading-loose"
                    style={{
                      color: 'var(--burgundy)',
                      opacity: 0.8
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Image - Black & White to Color on Hover */}
                <div className={`relative ${index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}`}>
                  <div className="relative overflow-hidden border" style={{ borderColor: 'var(--gold)' }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[400px] object-cover transition-all duration-1000"
                      style={{
                        filter: hoveredYear === item.year ? 'grayscale(0%) sepia(10%)' : 'grayscale(100%)',
                        transform: hoveredYear === item.year ? 'scale(1.05)' : 'scale(1)'
                      }}
                    />

                    {/* Overlay gradient */}
                    <div
                      className="absolute inset-0 transition-opacity duration-700"
                      style={{
                        background: 'linear-gradient(135deg, rgba(107, 28, 35, 0.3), rgba(212, 175, 55, 0.2))',
                        opacity: hoveredYear === item.year ? 1 : 0
                      }}
                    />
                  </div>
                </div>

                {/* Timeline Dot */}
                <div
                  className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 transition-all duration-500"
                  style={{
                    backgroundColor: hoveredYear === item.year ? 'var(--gold)' : 'var(--off-white)',
                    borderColor: 'var(--gold)',
                    transform: hoveredYear === item.year ? 'translate(-50%, -50%) scale(1.5)' : 'translate(-50%, -50%) scale(1)'
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center mt-32 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="h-px w-32 mx-auto mb-8 gold-line" />
          <p
            className="text-lg font-light italic leading-loose max-w-2xl mx-auto"
            style={{
              color: 'var(--burgundy)',
              opacity: 0.8
            }}
          >
            {t.story.paragraph2}
          </p>
        </div>
      </div>
    </section>
  );
};