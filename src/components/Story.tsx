import { useTranslation } from '../hooks/useTranslation';

export const Story = () => {
  const { t } = useTranslation();

  return (
    <section id="story" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t.story.title}
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {t.story.paragraph1}
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t.story.paragraph2}
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">25+</div>
                <div className="text-gray-600">{t.story.yearsExperience}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
                <div className="text-gray-600">{t.story.wineSelection}</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/story-cellar.jpg" // Replace with your wine cellar image
              alt="Wine cellar"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-xl">🏆</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">{t.story.awardTitle}</div>
                  <div className="text-sm text-gray-600">{t.story.awardYear}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};