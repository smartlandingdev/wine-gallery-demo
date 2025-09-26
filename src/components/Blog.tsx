import { useTranslation } from "../hooks/useTranslation";

export const Blog = () => {
  const { t } = useTranslation();

  const articles = [
    {
      id: 1,
      title: t.blog.article1.title,
      excerpt: t.blog.article1.excerpt,
      image: "/images/gallery/wine7.jpg", // Replace with your wine pairing image
      readTime: "5 min",
    },
    {
      id: 2,
      title: t.blog.article2.title,
      excerpt: t.blog.article2.excerpt,
      image: "/images/gallery/wine8.jpg", // Replace with your wine storage image
      readTime: "7 min",
    },
    {
      id: 3,
      title: t.blog.article3.title,
      excerpt: t.blog.article3.excerpt,
      image: "/images/gallery/images.jpeg", // Replace with your wine regions image
      readTime: "4 min",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.blog.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.blog.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-red-600 font-semibold">
                    {t.blog.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <button className="text-red-600 font-semibold hover:text-red-700 transition-colors">
                  {t.blog.readMore} →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
