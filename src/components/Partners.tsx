import { useTranslation } from "../hooks/useTranslation";
import { motion } from "framer-motion";

// Check Icon
const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Partners = () => {
  const { t } = useTranslation();

  const partners = [
    { id: 1, name: "Château Margaux", region: "Bordeaux, França" },
    { id: 2, name: "Antinori", region: "Tuscany, Itália" },
    { id: 3, name: "Opus One", region: "Napa Valley, EUA" },
    { id: 4, name: "Dom Pérignon", region: "Champagne, França" },
    { id: 5, name: "Caymus Vineyards", region: "Napa Valley, EUA" },
    { id: 6, name: "Barolo", region: "Piedmont, Itália" }
  ];

  const benefits = [
    { text: t.partners.certified, delay: 0.3 },
    { text: t.partners.authentic, delay: 0.4 },
    { text: t.partners.quality, delay: 0.5 }
  ];

  return (
    <section id="partners" className="py-32 relative overflow-hidden" style={{ background: 'var(--warm-gray)' }}>
      {/* Paper Texture Background - Same as Testimonials */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(139, 69, 19, 0.3) 1px, transparent 1px),
            radial-gradient(circle at 60% 70%, rgba(160, 82, 45, 0.25) 1px, transparent 1px),
            radial-gradient(circle at 80% 20%, rgba(101, 67, 33, 0.2) 1px, transparent 1px),
            radial-gradient(circle at 30% 80%, rgba(139, 69, 19, 0.28) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(160, 82, 45, 0.22) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px, 120px 120px, 100px 100px, 110px 110px, 90px 90px',
          backgroundPosition: '0 0, 40px 60px, 80px 20px, 30px 90px, 50px 50px'
        }}
      />

      {/* Linen Texture */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(201, 166, 107, 0.15) 1px, transparent 1px),
            linear-gradient(0deg, rgba(201, 166, 107, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}
      />

      {/* Floating Gold Accent */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
        style={{ background: 'var(--gradient-glow)' }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Layout: Partners Left, Title Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left Side - Partners Grid */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.id}
                  className="relative p-8 cursor-pointer group overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #2C0A0D 0%, #3A0E12 100%)',
                    border: '1px solid rgba(201, 166, 107, 0.2)'
                  }}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{
                    y: -6,
                    borderColor: 'rgba(201, 166, 107, 0.6)'
                  }}
                >
                  {/* Decorative Corner - Top Left */}
                  <motion.div
                    className="absolute top-0 left-0 w-12 h-12 opacity-20"
                    animate={{
                      opacity: [0.2, 0.35, 0.2]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <path d="M0 0 L48 0 L0 48 Z" fill="url(#corner-gold)" opacity="0.3"/>
                      <line x1="10" y1="0" x2="0" y2="10" stroke="var(--gold)" strokeWidth="0.5"/>
                      <line x1="20" y1="0" x2="0" y2="20" stroke="var(--gold)" strokeWidth="0.5" opacity="0.6"/>
                      <defs>
                        <linearGradient id="corner-gold" x1="0" y1="0" x2="48" y2="48">
                          <stop offset="0%" stopColor="var(--gold)" />
                          <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </motion.div>

                  {/* Wine Glass Icon - Subtle Background */}
                  <motion.div
                    className="absolute -bottom-4 -right-4 opacity-[0.04]"
                    animate={{
                      rotate: [0, 5, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                  >
                    <svg width="120" height="120" viewBox="0 0 48 48" fill="none" stroke="var(--gold)" strokeWidth="0.5">
                      <path d="M14 4 L34 4 L30 20 C30 26 27 28 24 28 C21 28 18 26 18 20 Z" />
                      <path d="M24 28 L24 40 M16 40 L32 40" />
                    </svg>
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.h3
                      className="text-xl font-light mb-2 tracking-wide"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: '#D4AF37'
                      }}
                      whileHover={{
                        color: '#FFD700'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {partner.name}
                    </motion.h3>

                    <p className="text-gold" style={{ color: '#D4AF37 !important', fontSize: '14px', fontWeight: '300' }}>
                      {partner.region}
                    </p>
                  </div>

                  {/* Top Border on Hover */}
                  <motion.div
                    className="absolute top-0 left-0 h-[2px]"
                    style={{
                      background: 'linear-gradient(90deg, var(--gold), transparent)'
                    }}
                    initial={{ width: '0%' }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Bottom Border on Hover */}
                  <motion.div
                    className="absolute bottom-0 right-0 h-[2px]"
                    style={{
                      background: 'linear-gradient(90deg, transparent, var(--gold))'
                    }}
                    initial={{ width: '0%' }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Inner Glow on Hover */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{
                      opacity: 1,
                      boxShadow: 'inset 0 0 40px rgba(201, 166, 107, 0.1)'
                    }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Benefits Section Below Grid */}
            <motion.div
              className="mt-10 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                >
                  <CheckIcon />
                  <span
                    className="text-sm font-light uppercase tracking-[0.15em]"
                    style={{ color: '#C9A66B' }}
                  >
                    {benefit.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Section Title (with right alignment) */}
          <motion.div
            className="text-right lg:pl-12"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <motion.div
              className="flex items-center justify-end gap-6 mb-8"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-[10px] uppercase tracking-[0.35em] font-light" style={{ color: 'var(--gold)' }}>
                Parcerias Premium
              </span>
              <motion.div
                className="h-px w-20 gold-line"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </motion.div>

            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: 'var(--burgundy-deep)'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.4 }}
            >
              {t.partners.title}
            </motion.h2>

            <motion.p
              className="text-lg font-light leading-relaxed mb-6"
              style={{
                color: 'var(--burgundy)',
                opacity: 0.8
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.8, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {t.partners.subtitle}
            </motion.p>

            <motion.p
              className="text-base font-light leading-relaxed"
              style={{
                color: 'var(--burgundy)',
                opacity: 0.7
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.7, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {t.partners.trust}
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
