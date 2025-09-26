import { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';

export const Newsletter = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy submit handler
    console.log('Newsletter signup:', email);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section id="newsletter" className="py-20 bg-red-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.newsletter.title}
          </h2>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            {t.newsletter.subtitle}
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-green-600 text-white p-6 rounded-lg max-w-md mx-auto">
            <div className="text-2xl mb-2">✅</div>
            <div className="font-semibold">{t.newsletter.success}</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.newsletter.placeholder}
                required
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="bg-white text-red-900 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-300 whitespace-nowrap"
              >
                {t.newsletter.button}
              </button>
            </div>
            <p className="text-sm text-red-200 mt-4">
              {t.newsletter.privacy}
            </p>
          </form>
        )}

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl mb-2">📧</div>
            <div className="font-semibold mb-1">{t.newsletter.benefit1.title}</div>
            <div className="text-red-200 text-sm">{t.newsletter.benefit1.description}</div>
          </div>
          <div>
            <div className="text-3xl mb-2">🎉</div>
            <div className="font-semibold mb-1">{t.newsletter.benefit2.title}</div>
            <div className="text-red-200 text-sm">{t.newsletter.benefit2.description}</div>
          </div>
          <div>
            <div className="text-3xl mb-2">🍷</div>
            <div className="font-semibold mb-1">{t.newsletter.benefit3.title}</div>
            <div className="text-red-200 text-sm">{t.newsletter.benefit3.description}</div>
          </div>
        </div>
      </div>
    </section>
  );
};