import "./App.css";
import { Header } from "./components/Header";
import { Features } from "./components/Features";
import { Gallery } from "./components/Gallery";
import { Story } from "./components/Story";
import { Testimonials } from "./components/Testimonials";
import { Blog } from "./components/Blog";
import { Partners } from "./components/Partners";
import { FAQ } from "./components/FAQ";
import { Newsletter } from "./components/Newsletter";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { TranslationProvider } from "./contexts/TranslationContext.tsx";

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleLearnMoreClick = () => {
    scrollToSection('features');
  };

  return (
    <TranslationProvider>
      <div className="min-h-screen">
        <Header onLearnMoreClick={handleLearnMoreClick} />
        <Features />
        <Gallery />
        <Story />
        <Testimonials />
        <Blog />
        <Partners />
        <Newsletter />
        <Footer />
        <FloatingWhatsApp />
      </div>
    </TranslationProvider>
  );
}

export default App;
