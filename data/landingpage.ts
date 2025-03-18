import { Link } from "lucide-react";

// Landing page content configuration
export const heroContent = {
    mainHeading: "Bringing Colors to Life",
    description: "Staffordshire's premier painting and decorating service with 35+ years of expertise.",
  
    // Rotating tags for the animated text
    tags: [
      "Wallpapering",
      "Home Decorators",
      "Industrial Painters",
      "Top-Quality Materials",
      "Interior & Exterior Painting",
      "Professional Painting Services",
      "Interior Painting & Decorating",
      "Professional Decorating Services",
      "Commercial & Residential Painting",
    ],
  
    // Statistics displayed in the hero section
    stats: [
      {
        value: "35+",
        label: "Years Experience",
        color: "blue"
      },
      {
        value: "1000+",
        label: "Satisfied Clients",
        color: "yellow"
      },
      {
        value: "5 stars",
        label: "On Google",
        color: "pink"
      }
    ],
  
    // Call-to-action buttons
    cta: {
      primary: {
        text: "Get a Free Quote",
        link: "/contact"
      },
      secondary: {
        text: "View Our Work",
        href: "/projects"
      }
    },
  
    // Media content
    media: {
      compareDemo: {
        firstImage: "/images/studio/4.webp",
        secondImage: "/images/studio/4.2.webp"
      },
      video: {
        src: "/bgvideo.mp4",
        type: "video/mp4"
      }
    }
  };

  
export interface ToolsContent {
  title: string;
  subtitle: string;
  tools: {
    name: string;
    description: string;
    image: string;
  }[];
}

export const toolsContent: ToolsContent = {
  title: "Professional Tools",
  subtitle: "We use state-of-the-art equipment to ensure the highest quality finish for your project",
  tools: [
    {
      name: "Mirka 1230M",
      description: "Dustless extraction system for faster finish and dust-free sanding",
      image: "/images/tools/mirka.png"
    },
    {
      name: "Q-Tech 5 Stage HVLP",
      description: "High volume low pressure spray system for a flawless finish",
      image: "/images/tools/qtech5.png"
    },
    {
      name: "TriTech T5",
      description: "Airless spray system for faster completion on large projects",
      image: "/images/tools/tritech.png"
    }
  ]
};

export interface Hero2Content {
  heading: string;
  subheading: string;
  features: string[];
  cta: {
    text: string;
    link: string;
  };
  images: {
    teamImage: string;
    finishImage: string;
  };
}

export const hero2Content: Hero2Content = {
  heading: "What We Do",
  subheading: "Monarch Painters Limited",
  features: [
    "35+ years combined experience in professional painting",
    "Superior quality finishes for projects of any size",
    "Fair pricing with no corners cut on any job"
  ],
  cta: {
    text: "Get Started",
    link: "/contact"
  },
  images: {
    teamImage: "./images/studio/20240429_165826 (Large).webp",
    finishImage: "./images/studio/20230728_132854.webp"
  }
};

export interface ExpertiseContent {
  title: string;
  items: {
    image: string;
    title: string;
    description: string;
  }[];
}
export interface WeekendExperienceContent {
  title: string;
  titleSpan: string;
  description: string;
  backgroundImage: string;
  cta: {
    text: string;
    link: string;
  };
}

export const weekendExperienceContent: WeekendExperienceContent = {
  title: "Professional Services You Can",
  titleSpan: "Trust",
  description: "We take pride in our top-tier craftsmanship and attention to detail, ensuring every project reflects your unique style and vision. From cosy spaces to expansive properties, we approach every job with professionalism and dedication.",
  backgroundImage: "./images/studio/14.webp",
  cta: {
    text: "Explore Our Work",
    link: "/projects"
  }
};


export interface FAQContent {
  title: string;
  subtitle: string;
  faqs: {
    question: string;
    answer: string;
  }[];
  cta: {
    text: string;
    link: string;
  };
}

export const faqContent: FAQContent = {
  title: "Frequently Asked Questions",
  subtitle: "Your trusted partner for exceptional painting services - where quality meets craftsmanship",
  faqs: [
    {
      question: "Why choose Monarch Painters Limited?",
      answer: "We take pride in our top-tier craftsmanship and attention to detail, ensuring every project reflects your unique style and vision. With over 35 years of combined experience, we deliver superior paint jobs for every project, regardless of size."
    },
    {
      question: "What areas do you serve?",
      answer: "We serve Rugeley, Lichfield, Tamworth, Sutton Coldfield, Birmingham, Cannock, Stafford, Penkridge, Derby, Wolverhampton and many more areas in Staffordshire."
    },
    {
      question: "What types of projects do you handle?",
      answer: "We specialize in both residential and commercial projects, including interior/exterior painting, industrial painting, wallpapering, and high-end developments. We use top-quality materials and the latest techniques for durable, beautiful results."
    },
    {
      question: "What makes your service different?",
      answer: "We're a family business with a 5-star Google rating, committed to sustainability and professionalism. We use advanced equipment like the Mirka 1230M dustless extraction system, QTech 5 HVLP spray system, and TriTech T5 airless spray system for flawless finishes."
    },
    {
      question: "What materials do you use?",
      answer: "We use premium products like Emperor Masonry Paint, Isomat Premium Colour, Benjamin Moore Scuff-X, Caparol Capacryl PU enamel paint, and Zinsser AllCoat for exterior woodwork, ensuring long-lasting, high-quality results."
    },
    {
      question: "How do you ensure quality?",
      answer: "We never cut corners, maintain clear communication, and deliver on every promise. Our team is fully equipped with top-tier tools and follows strict health and safety guidelines for every project."
    }
  ],
  cta: {
    text: "Get a Quote",
    link: "/contact"
  }
};

export const expertiseContent: ExpertiseContent = {
    title: "Our Expertise",
    items: [
      {
        image: "/images/studio/20240709_133850 (Large).webp",
        title: "Residential",
        description: "Expert interior & exterior home painting with meticulous attention to detail"
      },
      {
        image: "/images/studio/20240608_175423 (Large).webp",
        title: "Commercial",
        description: "Transforming workplaces with minimal downtime and maximum impact"
      },
      {
        image: "/images/studio/20230814_110116.webp",
        title: "Premium Quality",
        description: "Using top-tier products like Emperor Masonry Paint and Benjamin Moore"
      },
      {
        image: "/images/studio/techtools.webp",
        title: "Advanced Tech",
        description: "Utilising Mirka 1230M, QTech 5 HVLP spray system and Tritech T5 spray system for a flawless finish"
      }
    ]
  };

export interface Features2Content {
  title: string;
  subtitle: string;
  premiumQuality: {
    image: string;
    title: string;
    description: string;
  };
  experiencedTeam: {
    title: string;
    points: string[];
  };
  freeQuotes: {
    title: string;
    points: string[];
  };
}

export const features2Content: Features2Content = {
  title: "Why Choose Monarch Painters?",
  subtitle: "Professional painting services you can trust",
  premiumQuality: {
    image: "/images/studio/20250120_141855_Edited.webp",
    title: "Premium Quality",
    description: "We use only the highest quality paints and materials for lasting results."
  },
  experiencedTeam: {
    title: "Experienced Team",
    points: [
      "Our skilled painters have 35+ years of combined experience.",
      "We specialize in industrial painting with minimal downtime, using only the highest quality products for maximum durability."
    ]
  },
  freeQuotes: {
    title: "Free Quotes",
    points: [
      "Get a no-obligation quote for your painting project today.",
      "Our home decorators create spaces that reflect your personality while enhancing your home's aesthetics. Contact us for a personalized consultation!",
      "We're committed to excellence, delivering unparalleled quality in every project, whether it's industrial, commercial, or residential."
    ]
  }
};

export interface FeaturesContent {
  title: string;
  subtitle: string;
  services: {
    image: string;
    title: string;
    description: string;
  }[];
  paintProducts: {
    images: Array<{
      src: string;
      alt: string;
    }>;
    title: string;
    description: string;
    products: string[];
  }[];
  paintProductLinks: {
    [key: string]: string;
  };
  approach: {
    title: string;
    description: string;
  };
}

export const featuresContent: FeaturesContent = {
  title: "Staffordshire's Premier Painters",
  subtitle: "Serving Rugeley, Lichfield, Tamworth, Sutton Coldfield, Birmingham, and beyond",
  services: [
    {
      image: "/images/studio/20250205_130818.webp",
      title: "Commercial Painting",
      description: "Boosting productivity & brand image"
    },
    {
      image: "/images/studio/20230630_172504.webp",
      title: "Residential Decorating",
      description: "Bringing your vision to life"
    },
    {
      image: "/images/studio/outdoor 1.webp",
      title: "Exterior Solutions",
      description: "Durable & weather-resistant finishes"
    }
  ],
  paintProducts: [
    {
      images: [
        { src: '/images/paints/24.webp', alt: 'Emperor Masonry Paint' },
        { src: '/images/paints/25.webp', alt: 'Wethertex AP77' },
        { src: '/images/paints/26.webp', alt: 'Dulux Weathershield' }
      ],
      title: 'Exterior Masonry',
      description: 'Premium choices:',
      products: ['Emperor Masonry Paint', 'Wethertex AP77', 'Dulux Weathershield']
    },
    {
      images: [
        { src: '/images/paints/27.webp', alt: 'Isomat Premium Colour' },
        { src: '/images/paints/28.webp', alt: 'Crown Trade Clean Extreme' },
        { src: '/images/paints/29.webp', alt: 'Benjamin Moore Scuff-X' }
      ],
      title: 'Interior Walls',
      description: 'Recommended products:',
      products: ['Isomat Premium Colour', 'Crown Trade Clean Extreme', 'Benjamin Moore Scuff-X']
    },
    {
      images: [
        { src: '/images/paints/30.webp', alt: 'Zinsser AllCoat' },
        { src: '/images/paints/31.webp', alt: 'Caparol PU System' },
        { src: '/images/paints/32.webp', alt: 'Sikkens HLS Plus' }
      ],
      title: 'Woodwork',
      description: 'Professional finishes:',
      products: ['Zinsser AllCoat', 'Caparol PU System', 'Sikkens HLS Plus']
    }
  ],
  paintProductLinks: {
    'Emperor Masonry Paint': 'https://emperorpaint.co.uk/product/emperor-masonry-paint/',
    'Wethertex AP77': 'https://www.wethertex.co.uk/systems/exteriorpaints/ap77-flexible-smooth-masonry-paint/',
    'Dulux Weathershield': 'https://www.dulux.co.uk/en/dulux-weathershield',
    'Isomat Premium Colour': 'https://isomat.co.uk/product/isomat-premium-color/',
    'Crown Trade Clean Extreme': 'https://www.crowndecoratingcentres.co.uk/paints/specialist/scrubbable/crown-trade-clean-extreme-scrubbable-matt/14832',
    'Benjamin Moore Scuff-X': 'https://www.benjaminmoorepaint.co.uk/products/scuff-x/',
    'Zinsser AllCoat': 'https://www.zinsseruk.com/product/allcoat-exterior/',
    'Caparol PU System': 'https://www.caparol.co.uk/products/technical-information/enamels/capacryl-pu-satin',
    'Sikkens HLS Plus': 'https://www.duluxdecoratorcentre.co.uk/sikkens-cetol-hls'
  },
  approach: {
    title: "Our Approach",
    description: "We take a meticulous and quality-driven approach to interior painting. Our team collaborates with you to craft a colour palette that enhances and complements your home’s unique character. By using Monarch Painters and only the finest paints, we ensure a finish that is not only visually stunning but also long-lasting and durable."
  }
};

export interface FooterContent {
    companyDescription: string;
    socialLinks: {
      facebook: string;
      twitter: string;
      instagram: string;
      youtube: string;
      tiktok: string;
      
    };
    
    companyLinks: Array<{
      name: string;
      path: string;
    }>;
    contact: {
      address: string[];
      phone: string;
      href: string;
      email: string;
    };
    logo: {
      src: string;
      alt: string;
    };
    legalLinks: Array<{
      name: string;
      path: string;
    }>;
  }
  
  export const footerContent: FooterContent = {
    companyDescription: "Transforming spaces with creativity and precision since 2022.",
    socialLinks: {
      facebook: "https://www.facebook.com/monarchpainterslimited",
      twitter: "https://twitter.com/MonarchPainters",
      instagram: "https://www.instagram.com/monarchpainter5/",
      youtube: "https://www.youtube.com/channel/UCYNEaGq-om5mCIr5kglKMEQ",
      tiktok: "http://www.tiktok.com/@monarchpainters",
      
    },
    
    companyLinks: [
      { name: "About Us", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Projects", path: "/projects" },
      { name: "Contact", path: "/contact" }
    ],
    contact: {
      address: [
        "6 Hill Top View, Handsacre,",
        " Rugeley WS15 4DG, UK"
      ],
      href: "tel:07437531733",
      phone: "07437 531733",
      email: "info@monarchpainters.co.uk"
    },
    logo: {
      src: "/images/logo/logo.webp",
      alt: "Monarch Painters Logo"
    },
    legalLinks: [
      { name: "Privacy Policy", path: "#" },
      { name: "Terms of Service", path: "#" },
      
    ]
  };
  