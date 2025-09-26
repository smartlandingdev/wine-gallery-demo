import { useState } from 'react';

export const InteractiveFeatures = () => {
  const [activeTab, setActiveTab] = useState('quiz');
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [tourStep, setTourStep] = useState(0);

  const quizQuestions = [
    {
      question: "What's your preferred wine style?",
      options: ["Bold & Full-bodied", "Light & Crisp", "Sweet & Fruity", "Complex & Aged"]
    },
    {
      question: "What occasion are you shopping for?",
      options: ["Dinner Party", "Romantic Evening", "Casual Drink", "Special Celebration"]
    },
    {
      question: "What's your price range?",
      options: ["$15-30", "$30-50", "$50-100", "$100+"]
    }
  ];

  const tourImages = [
    { src: "/images/vineyard-entrance.jpg", title: "Vineyard Entrance", description: "Welcome to our historic 200-acre vineyard estate" },
    { src: "/images/grape-vines.jpg", title: "The Vines", description: "Our premium Cabernet Sauvignon and Chardonnay vines" },
    { src: "/images/wine-cellar.jpg", title: "Wine Cellar", description: "Temperature-controlled aging caves with French oak barrels" },
    { src: "/images/tasting-room.jpg", title: "Tasting Room", description: "Where every wine tells its unique story" }
  ];

  const sommelierPicks = [
    {
      name: "Reserve Cabernet 2019",
      image: "/images/wine-1.jpg",
      rating: "95 Points",
      notes: "Rich blackberry with hints of vanilla and tobacco",
      price: "$85",
      pairing: "Perfect with grilled ribeye"
    },
    {
      name: "Estate Chardonnay 2021",
      image: "/images/wine-2.jpg",
      rating: "92 Points",
      notes: "Crisp apple and pear with subtle oak finish",
      price: "$45",
      pairing: "Excellent with seafood"
    },
    {
      name: "Limited Pinot Noir 2020",
      image: "/images/wine-3.jpg",
      rating: "94 Points",
      notes: "Elegant cherry and earth tones",
      price: "$65",
      pairing: "Pairs beautifully with duck"
    }
  ];

  const handleQuizAnswer = (answer: string) => {
    const newAnswers = { ...quizAnswers, [quizStep]: answer };
    setQuizAnswers(newAnswers);

    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers({});
  };

  return (
    <section id="interactive" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Your Perfect Wine
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our interactive features to find your ideal wine experience
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 rounded-lg p-2 flex gap-2">
            <button
              onClick={() => setActiveTab('quiz')}
              className={`px-6 py-3 rounded-md transition-all ${
                activeTab === 'quiz'
                  ? 'bg-red-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              Wine Finder Quiz
            </button>
            <button
              onClick={() => setActiveTab('tour')}
              className={`px-6 py-3 rounded-md transition-all ${
                activeTab === 'tour'
                  ? 'bg-red-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              Virtual Tour
            </button>
            <button
              onClick={() => setActiveTab('sommelier')}
              className={`px-6 py-3 rounded-md transition-all ${
                activeTab === 'sommelier'
                  ? 'bg-red-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              Sommelier Picks
            </button>
          </div>
        </div>

        {/* Wine Finder Quiz */}
        {activeTab === 'quiz' && (
          <div className="bg-gray-800 rounded-2xl p-8">
            {quizStep < quizQuestions.length ? (
              <div className="text-center">
                <div className="mb-6">
                  <div className="flex justify-center mb-4">
                    {quizQuestions.map((_, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full mx-1 ${
                          index <= quizStep ? 'bg-red-600' : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-8">
                    {quizQuestions[quizStep].question}
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  {quizQuestions[quizStep].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuizAnswer(option)}
                      className="p-4 bg-gray-700 hover:bg-red-600 rounded-lg transition-all transform hover:scale-105"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-6">Your Perfect Wine Match!</h3>
                <div className="bg-gray-700 rounded-lg p-6 max-w-md mx-auto mb-6">
                  <div className="text-6xl mb-4">🍷</div>
                  <h4 className="text-xl font-bold mb-2">Premium Cabernet Sauvignon</h4>
                  <p className="text-gray-300">Based on your preferences, we recommend our bold, full-bodied wines perfect for special occasions.</p>
                </div>
                <button
                  onClick={resetQuiz}
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
                >
                  Take Quiz Again
                </button>
              </div>
            )}
          </div>
        )}

        {/* Virtual Vineyard Tour */}
        {activeTab === 'tour' && (
          <div className="bg-gray-800 rounded-2xl overflow-hidden">
            <div className="relative aspect-video">
              <img
                src={tourImages[tourStep].src}
                alt={tourImages[tourStep].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40">
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold mb-2">{tourImages[tourStep].title}</h3>
                  <p className="text-gray-200">{tourImages[tourStep].description}</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setTourStep(Math.max(0, tourStep - 1))}
                  disabled={tourStep === 0}
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
                >
                  Previous
                </button>
                <div className="flex gap-2">
                  {tourImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setTourStep(index)}
                      className={`w-3 h-3 rounded-full ${
                        index === tourStep ? 'bg-red-600' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setTourStep(Math.min(tourImages.length - 1, tourStep + 1))}
                  disabled={tourStep === tourImages.length - 1}
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Sommelier Recommendations */}
        {activeTab === 'sommelier' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sommelierPicks.map((wine, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all">
                <img
                  src={wine.image}
                  alt={wine.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{wine.name}</h3>
                    <span className="text-red-400 text-sm font-bold">{wine.rating}</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{wine.notes}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-red-400">{wine.price}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{wine.pairing}</p>
                  <button className="w-full py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};