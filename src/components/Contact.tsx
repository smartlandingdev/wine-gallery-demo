import { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { motion } from 'framer-motion';

// Icons
const UserIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MessageIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleWhatsApp = () => {
    const phoneNumber = '5511123456789';
    const message = encodeURIComponent('Olá! Tenho interesse na coleção de vinhos premium.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden" style={{ background: 'var(--warm-gray)' }}>
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-[0.02]"
        style={{ background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)' }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
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
              Fale Conosco
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
            {t.contact.title}
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
            Entre em contato e descubra sua próxima garrafa perfeita
          </motion.p>
        </div>

        {isSubmitted ? (
          <motion.div
            className="border bg-white/60 backdrop-blur-sm p-12 max-w-md mx-auto text-center"
            style={{ borderColor: 'var(--gold)' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1" className="mx-auto">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
            <h3 className="text-2xl font-light mb-3" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--burgundy-deep)' }}>
              Mensagem Enviada!
            </h3>
            <p className="text-sm font-light" style={{ color: 'var(--burgundy)', opacity: 0.8 }}>
              Entraremos em contato em breve
            </p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="space-y-6">
              {/* Name Input */}
              <div className="relative">
                <div
                  className="flex items-center border bg-white/95 backdrop-blur-sm transition-all duration-500"
                  style={{
                    borderColor: focusedField === 'name' ? 'var(--gold)' : 'var(--warm-gray)',
                    boxShadow: focusedField === 'name' ? '0 0 20px rgba(212, 175, 55, 0.2)' : 'none'
                  }}
                >
                  <div className="pl-6 pr-4">
                    <UserIcon />
                  </div>
                  <input
                    type="text"
                    placeholder={t.contact.name}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="flex-1 py-4 text-base font-light bg-transparent focus:outline-none"
                    style={{ color: 'var(--burgundy-deep)' }}
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="relative">
                <div
                  className="flex items-center border bg-white/95 backdrop-blur-sm transition-all duration-500"
                  style={{
                    borderColor: focusedField === 'email' ? 'var(--gold)' : 'var(--warm-gray)',
                    boxShadow: focusedField === 'email' ? '0 0 20px rgba(212, 175, 55, 0.2)' : 'none'
                  }}
                >
                  <div className="pl-6 pr-4">
                    <MailIcon />
                  </div>
                  <input
                    type="email"
                    placeholder={t.contact.email}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="flex-1 py-4 text-base font-light bg-transparent focus:outline-none"
                    style={{ color: 'var(--burgundy-deep)' }}
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div className="relative">
                <div
                  className="border bg-white/95 backdrop-blur-sm transition-all duration-500"
                  style={{
                    borderColor: focusedField === 'message' ? 'var(--gold)' : 'var(--warm-gray)',
                    boxShadow: focusedField === 'message' ? '0 0 20px rgba(212, 175, 55, 0.2)' : 'none'
                  }}
                >
                  <div className="flex items-start p-6 pb-0">
                    <div className="pr-4 pt-1">
                      <MessageIcon />
                    </div>
                    <textarea
                      placeholder={t.contact.message}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={5}
                      className="flex-1 text-base font-light bg-transparent focus:outline-none resize-none"
                      style={{ color: 'var(--burgundy-deep)' }}
                    />
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <motion.button
                  type="submit"
                  className="group relative border px-8 py-4 text-sm font-light uppercase tracking-[0.2em] transition-all duration-700 hover:text-white overflow-hidden"
                  style={{
                    borderColor: 'var(--gold)',
                    color: 'var(--burgundy-deep)'
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">{t.contact.submit}</span>
                  <div
                    className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700"
                    style={{ backgroundColor: 'var(--gold)' }}
                  />
                </motion.button>

                <motion.button
                  type="button"
                  onClick={handleWhatsApp}
                  className="group relative border px-8 py-4 text-sm font-light uppercase tracking-[0.2em] transition-all duration-700 hover:text-white overflow-hidden flex items-center justify-center gap-2"
                  style={{
                    borderColor: '#25D366',
                    color: '#25D366'
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <WhatsAppIcon />
                    WhatsApp
                  </span>
                  <div
                    className="absolute inset-0 bg-[#25D366] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700"
                  />
                </motion.button>
              </div>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
};
