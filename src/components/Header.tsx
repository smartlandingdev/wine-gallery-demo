import { useTranslation } from '../hooks/useTranslation';

interface HeaderProps {
  onLearnMoreClick: () => void;
}

export const Header = ({ onLearnMoreClick }: HeaderProps) => {
  const { language, t, toggleLanguage } = useTranslation();

  return (
    <header className="relative min-h-screen bg-gradient-to-r from-red-900 to-red-700 flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('/images/hero-background.jpg')" // Replace with your wine cellar image
        }}
      />

      <button
        onClick={toggleLanguage}
        className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg font-semibold uppercase tracking-wider hover:bg-white/30 transition-all duration-300"
      >
        {language === 'en' ? 'PT' : 'EN'}
      </button>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          {t.header.title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto">
          {t.header.subtitle}
        </p>
        <button
          onClick={onLearnMoreClick}
          className="bg-white text-red-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          {t.header.cta}
        </button>
      </div>
    </header>
  );
};