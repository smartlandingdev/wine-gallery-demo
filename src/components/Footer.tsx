import { useTranslation } from '../hooks/useTranslation';

// Social Media Icons - Outline Style
const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

export const Footer = () => {
  const { t, language, toggleLanguage } = useTranslation();

  const socialLinks = [
    { name: 'Facebook', url: '#', icon: <FacebookIcon /> },
    { name: 'Instagram', url: '#', icon: <InstagramIcon /> },
    { name: 'Twitter', url: '#', icon: <TwitterIcon /> },
    { name: 'LinkedIn', url: '#', icon: <LinkedInIcon /> }
  ];

  const quickLinks = [
    { name: t.footer.about, url: '#story' },
    { name: t.footer.wines, url: '#gallery' },
    { name: t.footer.contact, url: '#contact' },
    { name: t.footer.location, url: '#store-info' }
  ];

  const policies = [
    { name: t.footer.privacy, url: '#' },
    { name: t.footer.terms, url: '#' },
    { name: t.footer.shipping, url: '#' },
    { name: t.footer.returns, url: '#' }
  ];

  return (
    <footer className="relative overflow-hidden" style={{ background: '#0A0A0A' }}>
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle at 30% 50%, var(--gold) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Company Info - Larger Column */}
          <div className="lg:col-span-5">
            <div className="mb-6">
              <h3
                className="text-4xl font-light mb-4 tracking-wide"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: 'var(--gold)'
                }}
              >
                Wine Gallery
              </h3>
              <div className="h-px w-24 bg-gradient-to-r from-[var(--gold)] to-transparent mb-6" />
            </div>

            <p className="text-base font-light leading-loose mb-8" style={{ color: '#C9C9C9' }}>
              {t.footer.description}
            </p>

            {/* Social Links - Elegant Outline */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-11 h-11 border flex items-center justify-center transition-all duration-500 hover:bg-[var(--gold)] hover:border-[var(--gold)] group"
                  style={{
                    borderColor: 'rgba(212, 175, 55, 0.3)',
                    color: 'var(--gold)'
                  }}
                  aria-label={social.name}
                >
                  <span className="group-hover:text-black transition-colors duration-500">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4
              className="text-lg font-light mb-6 uppercase tracking-[0.2em]"
              style={{ color: 'var(--gold)' }}
            >
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-sm font-light transition-colors duration-300 hover:text-[var(--gold)]"
                    style={{ color: '#C9C9C9' }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div className="lg:col-span-2">
            <h4
              className="text-lg font-light mb-6 uppercase tracking-[0.2em]"
              style={{ color: 'var(--gold)' }}
            >
              {t.footer.policies}
            </h4>
            <ul className="space-y-3">
              {policies.map((policy) => (
                <li key={policy.name}>
                  <a
                    href={policy.url}
                    className="text-sm font-light transition-colors duration-300 hover:text-[var(--gold)]"
                    style={{ color: '#C9C9C9' }}
                  >
                    {policy.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4
              className="text-lg font-light mb-6 uppercase tracking-[0.2em]"
              style={{ color: 'var(--gold)' }}
            >
              {t.footer.contactInfo}
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <LocationIcon />
                <span className="text-sm font-light" style={{ color: '#C9C9C9' }}>
                  {t.footer.address}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon />
                <a
                  href="tel:+5511999999999"
                  className="text-sm font-light hover:text-[var(--gold)] transition-colors"
                  style={{ color: '#C9C9C9' }}
                >
                  +55 11 99999-9999
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MailIcon />
                <a
                  href="mailto:contact@winegallery.com"
                  className="text-sm font-light hover:text-[var(--gold)] transition-colors"
                  style={{ color: '#C9C9C9' }}
                >
                  contact@winegallery.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <ClockIcon />
                <span className="text-sm font-light" style={{ color: '#C9C9C9' }}>
                  {t.footer.hours}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps - Minimalist Embed */}
        <div className="mb-16">
          <h4
            className="text-2xl font-light mb-8 text-center tracking-wide"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: 'var(--gold)'
            }}
          >
            Visite Nossa Loja
          </h4>

          <div className="border overflow-hidden" style={{ borderColor: 'rgba(212, 175, 55, 0.2)', height: '400px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1974714348154!2d-46.65882668502205!3d-23.56138068468093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1sen!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) contrast(90%) brightness(90%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wine Gallery Location"
            />
          </div>
        </div>

        {/* Divider Line */}
        <div className="h-px mb-8" style={{ background: 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.3), transparent)' }} />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-light" style={{ color: '#888' }}>
            {t.footer.copyright}
          </p>

          <div className="flex items-center gap-6">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="border px-6 py-2 text-xs font-light uppercase tracking-[0.15em] transition-all duration-500 hover:bg-[var(--gold)] hover:text-black"
              style={{
                borderColor: 'rgba(212, 175, 55, 0.3)',
                color: 'var(--gold)'
              }}
            >
              {language === 'en' ? 'PT' : 'EN'}
            </button>

            {/* Secure Badge */}
            <div className="flex items-center gap-2 text-xs font-light" style={{ color: '#888' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0110 0v4"/>
              </svg>
              <span>{t.footer.secure}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
