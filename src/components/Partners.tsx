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
    <section id="partners" className="py-32 relative overflow-hidden" style={{ background: 'var(--off-white)' }}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] opacity-[0.02]"
        style={{ background: 'radial-gradient(circle, var(--burgundy) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-20">
          <motion.div
            className="flex items-center justify-center gap-6 mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="h-px w-20 gold-line" />
            <span className="text-[10px] uppercase tracking-[0.35em] font-light" style={{ color: 'var(--gold)' }}>
              Parcerias Premium
            </span>
            <div className="h-px w-20 gold-line" />
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-light leading-tight mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: 'var(--burgundy-deep)'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {t.partners.title}
          </motion.h2>

          <motion.p
            className="text-lg font-light leading-loose max-w-2xl mx-auto"
            style={{
              color: 'var(--burgundy)',
              opacity: 0.8
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.partners.subtitle}
          </motion.p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              className="border bg-white/60 backdrop-blur-sm p-8 text-center transition-all duration-500 hover:border-[var(--gold)] group"
              style={{ borderColor: 'var(--warm-gray)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <h3
                className="text-xl font-light mb-2 tracking-wide transition-colors duration-500 group-hover:text-[var(--gold)]"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: 'var(--burgundy-deep)'
                }}
              >
                {partner.name}
              </h3>

              <p
                className="text-xs uppercase tracking-[0.15em] font-light"
                style={{
                  color: 'var(--burgundy)',
                  opacity: 0.6
                }}
              >
                {partner.region}
              </p>

              {/* Bottom decoration line */}
              <div
                className="h-px mt-6 transition-all duration-700 mx-auto"
                style={{
                  backgroundColor: 'var(--gold)',
                  width: '0%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.width = '100%';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.width = '0%';
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Trust Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="h-px w-32 mx-auto mb-8 gold-line" />

          <p
            className="text-base font-light mb-8"
            style={{
              color: 'var(--burgundy)',
              opacity: 0.8
            }}
          >
            {t.partners.trust}
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: benefit.delay }}
              >
                <CheckIcon />
                <span
                  className="text-sm font-light uppercase tracking-[0.15em]"
                  style={{ color: 'var(--burgundy-deep)' }}
                >
                  {benefit.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
