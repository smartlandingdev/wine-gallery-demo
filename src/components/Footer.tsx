import { useTranslation } from '../hooks/useTranslation';

export const Footer = () => {
  const { t, language, toggleLanguage } = useTranslation();

  const socialLinks = [
    { name: 'Facebook', url: '#', icon: '📘' },
    { name: 'Instagram', url: '#', icon: '📷' },
    { name: 'Twitter', url: '#', icon: '🐦' },
    { name: 'LinkedIn', url: '#', icon: '💼' }
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
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">🍷 VineStore</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.policies}</h4>
            <ul className="space-y-2">
              {policies.map((policy) => (
                <li key={policy.name}>
                  <a
                    href={policy.url}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {policy.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.contactInfo}</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start">
                <span className="mr-2">📍</span>
                <span>{t.footer.address}</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📞</span>
                <a href="tel:+5511999999999" className="hover:text-white transition-colors">
                  +55 11 99999-9999
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">✉️</span>
                <a href="mailto:contact@vinestore.com" className="hover:text-white transition-colors">
                  contact@vinestore.com
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">🕒</span>
                <span>{t.footer.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            {t.footer.copyright}
          </p>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200"
            >
              🌐 {language === 'en' ? 'Português' : 'English'}
            </button>

            <div className="flex items-center text-sm text-gray-400">
              <span className="mr-2">🛡️</span>
              <span>{t.footer.secure}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};