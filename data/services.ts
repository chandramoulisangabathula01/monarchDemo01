// Services page content configuration

export const services = [
  {
    title: 'Interior Painting & Decorating',
    description: 'Transform your indoor spaces with our expert interior painting and decorating services. We excel at enhancing every room with precision and care.',
    features: [
      'Professional dustless extraction systems',
      'Meticulous surface preparation',
      'Premium quality paints and materials',
      'Wallpapering services'
    ],
    image: '/images/studio/20250120_141844_Edited.webp'
  },
  {
    title: 'Commercial & Residential',
    description: 'Revitalize your business space with our commercial and industrial painting services. We minimize downtime while maximizing quality.',
    features: [
      'Office space transformation',
      'Industrial facility painting',
      'Minimal business disruption',
      'Health & safety compliant'
    ],
    image: '/images/studio/20240613_142118 (Large).webp'
  },
  {
    title: 'Exterior Painting',
    description: "Enhance your property's curb appeal with our expert exterior painting services using premium weather-resistant materials.",
    features: [
      'Weather-resistant paints',
      'Complete surface preparation',
      'Professional equipment',
      'Long-lasting finish'
    ],
    image: '/images/studio/20230821_163054.webp'
  }
];

export const professionalTools = {
  title: "Professional Tools",
  subtitle: "We use state-of-the-art equipment to ensure the highest quality finish for your project",
  tools: [
    {
      name: 'Mirka 1230M',
      description: 'Dustless extraction system for faster finish and dust-free sanding',
      image: '/images/tools/mirka.png'
    },
    {
      name: 'Q-Tech 5 Stage HVLP',
      description: 'High volume low pressure spray system for a flawless finish',
      image: '/images/tools/qtech5.png'
    },
    {
      name: 'TriTech T5',
      description: 'Airless spray system for faster completion on large projects',
      image: '/images/tools/tritech.png'
    }
  ]
};

export const serviceAreas = {
  title: "Areas We Serve",
  subtitle: "Delivering exceptional painting services across the West Midlands with precision and passion",
  backgroundImage: "/images/studio/17.webp",
  areas: [
    'Stafford',
    'Rugeley',
    'Lichfield',
    'Tamworth',
    'Sutton Coldfield',
    'Birmingham',
    'Cannock',
    'Walsall'
  ],
  ctaText: "Not in our service area?",
  ctaLink: {
    text: "Contact us",
    url: "/contact"
  },
  ctaDescription: "to discuss your project"
};

export const premiumMaterials = {
  title: "Premium Materials",
  subtitle: "Experience excellence with our carefully selected premium paints",
  materials: [
    {
      name: 'Emperor Masonry Paint',
      description: 'Superior exterior protection with enhanced durability',
      image: '/images/paints/24.webp',
      features: ['Weather-resistant', '10-year lifespan', 'UV protection']
    },
    {
      name: 'Wethertex AP77',
      description: 'Advanced weather-resistant coating for lasting finish',
      image: '/images/paints/25.webp',
      features: ['Self-cleaning', 'Breathable coating', 'Anti-crack']
    },
    {
      name: 'Dulux Weathershield',
      description: 'Premium all-weather protection for exterior surfaces',
      image: '/images/paints/26.webp',
      features: ['All-season protection', 'Color-lock technology', 'Mold resistant']
    }
  ]
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
      image: "/images/studio/20240608_175423 (Large).webp",
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
    description: "Transform your interiors with our artistic approach to painting. We don’t just apply paint; we curate a bespoke colour palette that harmonizes with your home’s essence, bringing its unique character to life. With a team of masterful painters and the finest quality paints, we create finishes that are both strikingly beautiful and built to stand the test of time."
  }
};