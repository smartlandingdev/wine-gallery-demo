import { useTranslation } from '../hooks/useTranslation';

export const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: '🍇',
      title: t.features.premium.title,
      description: t.features.premium.description,
    },
    {
      icon: '✨',
      title: t.features.exclusive.title,
      description: t.features.exclusive.description,
    },
    {
      icon: '🍷',
      title: t.features.tasting.title,
      description: t.features.tasting.description,
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.features.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};