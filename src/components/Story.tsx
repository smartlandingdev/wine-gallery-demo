import { useTranslation } from '../hooks/useTranslation';
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const timeline = [
    {
      year: 1998,
      title: "Fundação",
      description: "Início da jornada com foco em vinhos premium",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7X20XtjJMAe20q0Q1heZkznTNs1CbRNA6acvtSPJ_IKTigTU0LcUCt33uD-K9zdthxSt6HxiE3Mv3LNdVzfQ-xRr5z0G4Pzgth-cjV0uo2Y_IyF9WzTRlgQ9DsJM1QiqLEQQdo77N010V/w1200-h630-p-k-no-nu/rua+paracatu+1998.jpg"
    },
    {
      year: 2008,
      title: "Expansão Internacional",
      description: "Parcerias diretas com vinícolas europeias",
      image: "https://midias.nosnochile.com.br/wp-content/uploads/2025/02/Imagen-08-01-25-a-las-10.42%E2%80%AFa.m-scaled-4.jpeg.webp"
    },
    {
      year: 2018,
      title: "Reconhecimento",
      description: "Prêmio de melhor importadora nacional",
      image: "https://www.guatambuvinhos.com.br/wp-content/uploads/2021/10/1.png"
    },
    {
      year: 2023,
      title: "Loja do Ano",
      description: "Eleita a melhor loja de vinhos premium",
      image: "https://midias.correiobraziliense.com.br/_midias/jpg/2023/08/23/1000x1000/1_01_premio_worlds_best_vineyards_melhores_vinicolas_do_mundo_instagram__duriguttiwinemakers-29108044.jpg?20230823142212?20230823142212"
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
    <section ref={sectionRef} id="story" className="py-32 relative overflow-hidden" style={{ background: 'var(--off-white)' }}>
      {/* Background decoration with Animation */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.02]"
        style={{ background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)' }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
          y: [0, 30, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
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
              Nossa Trajetória
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
            {t.story.title}
          </motion.h2>

          <motion.p
            className="text-lg font-light leading-loose max-w-3xl mx-auto"
            style={{
              color: 'var(--burgundy)',
              opacity: 0.8
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 0.8, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t.story.paragraph1}
          </motion.p>
        </div>

        {/* Statistics Highlight with Premium Animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative border p-12 text-center group cursor-pointer overflow-hidden"
              style={{ borderColor: 'var(--warm-gray)', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.5 + index * 0.15, ease: [0.34, 1.56, 0.64, 1] }}
              whileHover={{
                borderColor: 'var(--gold)',
                y: -8,
                boxShadow: '0 30px 60px -15px rgba(59, 13, 17, 0.25), 0 0 40px -10px rgba(201, 166, 107, 0.3)'
              }}
            >
              {/* Icon with Rotation on Hover */}
              <motion.div
                className="flex justify-center mb-6"
                whileHover={{ scale: 1.15, rotate: 12 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {stat.icon}
              </motion.div>

              {/* Value with Counter Effect */}
              <motion.div
                className="text-6xl font-light mb-4 group-hover:text-[var(--gold)] transition-colors duration-500"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: 'var(--burgundy-deep)'
                }}
                whileHover={{ scale: 1.05 }}
              >
                {stat.value}
              </motion.div>

              {/* Label */}
              <div
                className="text-sm uppercase tracking-[0.2em] font-light"
                style={{ color: 'var(--burgundy)', opacity: 0.7 }}
              >
                {stat.label}
              </div>

              {/* Bottom gold line on hover */}
              <motion.div
                className="absolute bottom-0 left-0 h-px"
                style={{ backgroundColor: 'var(--gold)' }}
                initial={{ width: '0%' }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.6 }}
              />

              {/* Gold glow on hover */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at center, rgba(201, 166, 107, 0.15), transparent 70%)',
                  opacity: 0
                }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Interactive Timeline with Animations */}
        <div className="relative">
          {/* Center Timeline Line with Gradient */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden lg:block"
            style={{
              background: 'linear-gradient(180deg, transparent, var(--gold), var(--gold), transparent)',
              opacity: 0.4
            }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.8 }}
          />

          {/* Timeline Items */}
          <div className="space-y-24">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.9 + index * 0.2, ease: [0.34, 1.56, 0.64, 1] }}
                onMouseEnter={() => setHoveredYear(item.year)}
                onMouseLeave={() => setHoveredYear(null)}
              >
                {/* Content - alternates left/right - TUDO DOURADO */}
                <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:col-start-2 lg:pl-16'}`}>
                  <motion.div
                    className="text-7xl font-light mb-4"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: hoveredYear === item.year ? '#FFD700' : '#C9A66B',
                      textShadow: hoveredYear === item.year ? '0 0 30px rgba(255, 215, 0, 0.6)' : 'none'
                    }}
                    animate={{
                      scale: hoveredYear === item.year ? 1.05 : 1,
                      x: hoveredYear === item.year ? (index % 2 === 0 ? -5 : 5) : 0
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    {item.year}
                  </motion.div>

                  <motion.h3
                    className="text-3xl font-light mb-4 tracking-wide"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: '#C9A66B'
                    }}
                    animate={{
                      color: hoveredYear === item.year ? '#FFD700' : '#C9A66B',
                      textShadow: hoveredYear === item.year ? '0 0 20px rgba(255, 215, 0, 0.4)' : 'none'
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    {item.title}
                  </motion.h3>

                  <p
                    className="text-base font-light leading-loose"
                    style={{
                      color: '#E8D5A8'
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Image - Black & White to Color on Hover */}
                <div className={`relative ${index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}`}>
                  <motion.div
                    className="relative overflow-hidden border"
                    style={{ borderColor: 'var(--gold)' }}
                    whileHover={{
                      boxShadow: '0 30px 60px -15px rgba(59, 13, 17, 0.3), 0 0 50px -10px rgba(201, 166, 107, 0.4)'
                    }}
                  >
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[400px] object-cover"
                      animate={{
                        filter: hoveredYear === item.year ? 'grayscale(0%) sepia(10%)' : 'grayscale(100%)',
                        scale: hoveredYear === item.year ? 1.08 : 1
                      }}
                      transition={{ duration: 0.7 }}
                    />

                    {/* Overlay gradient */}
                    <motion.div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(135deg, rgba(107, 28, 35, 0.3), rgba(212, 175, 55, 0.2))'
                      }}
                      animate={{ opacity: hoveredYear === item.year ? 1 : 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>
                </div>

                {/* Timeline Dot with Pulse Effect */}
                <motion.div
                  className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 z-10"
                  style={{
                    backgroundColor: hoveredYear === item.year ? 'var(--gold)' : 'var(--off-white)',
                    borderColor: 'var(--gold)',
                    boxShadow: hoveredYear === item.year ? '0 0 20px rgba(201, 166, 107, 0.8)' : 'none'
                  }}
                  animate={{
                    scale: hoveredYear === item.year ? 1.8 : 1
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <motion.div
          className="text-center mt-32"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <motion.div
            className="h-px w-32 mx-auto mb-8 gold-line"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.9 }}
          />
          <motion.p
            className="text-lg font-light italic leading-loose max-w-2xl mx-auto"
            style={{
              color: 'var(--burgundy)',
              opacity: 0.8
            }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.8 } : {}}
            transition={{ duration: 0.8, delay: 2 }}
          >
            {t.story.paragraph2}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};