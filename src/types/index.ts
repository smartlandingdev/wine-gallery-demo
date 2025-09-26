export type Language = 'en' | 'pt';

export interface Translations {
  header: {
    title: string;
    subtitle: string;
    cta: string;
  };
  features: {
    title: string;
    premium: {
      title: string;
      description: string;
    };
    exclusive: {
      title: string;
      description: string;
    };
    tasting: {
      title: string;
      description: string;
    };
  };
  gallery: {
    title: string;
  };
  story: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    yearsExperience: string;
    wineSelection: string;
    awardTitle: string;
    awardYear: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
    testimonial1: string;
    testimonial2: string;
    testimonial3: string;
  };
  blog: {
    title: string;
    subtitle: string;
    category: string;
    readMore: string;
    article1: {
      title: string;
      excerpt: string;
    };
    article2: {
      title: string;
      excerpt: string;
    };
    article3: {
      title: string;
      excerpt: string;
    };
  };
  faq: {
    title: string;
    subtitle: string;
    question1: string;
    answer1: string;
    question2: string;
    answer2: string;
    question3: string;
    answer3: string;
    question4: string;
    answer4: string;
    question5: string;
    answer5: string;
  };
  newsletter: {
    title: string;
    subtitle: string;
    placeholder: string;
    button: string;
    success: string;
    privacy: string;
    benefit1: {
      title: string;
      description: string;
    };
    benefit2: {
      title: string;
      description: string;
    };
    benefit3: {
      title: string;
      description: string;
    };
  };
  partners: {
    title: string;
    subtitle: string;
    trust: string;
    certified: string;
    authentic: string;
    quality: string;
  };
  video: {
    title: string;
    subtitle: string;
    videoTitle: string;
    videoDuration: string;
    placeholder: string;
    close: string;
    feature1: {
      title: string;
      description: string;
    };
    feature2: {
      title: string;
      description: string;
    };
    feature3: {
      title: string;
      description: string;
    };
  };
  whatsapp: {
    message: string;
    tooltip: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    policies: string;
    contactInfo: string;
    about: string;
    wines: string;
    contact: string;
    location: string;
    privacy: string;
    terms: string;
    shipping: string;
    returns: string;
    address: string;
    hours: string;
    copyright: string;
    secure: string;
  };
  contact: {
    title: string;
    name: string;
    email: string;
    message: string;
    submit: string;
    whatsapp: string;
  };
  store: {
    title: string;
    address: string;
    hours: string;
    phone: string;
  };
}