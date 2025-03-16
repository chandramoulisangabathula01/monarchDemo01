// About page content configuration

export interface TeamSection {
  title: string;
  teamImage: string;
  whoWeAre: {
    title: string;
    description: string[];
  };
}

export interface WhatWeDoSection {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string;
}

export interface CTASection {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
}

export interface AboutPageData {
  teamSection: TeamSection;
  whatWeDoSection: WhatWeDoSection;
  ctaSection: CTASection;
}

export const aboutPageData: AboutPageData = {
  teamSection: {
    title: "More Than Just Painters.\nWe're Your Decoration Partners.",
    teamImage: "/images/studio/20250120_141855_Edited.jpg",
    whoWeAre: {
      title: "Who We Are",
      description: [
        "At Monarch Painters, our team of exceptional painters and decorators brings a distinctive touch to every project. We pour our passion, intellect, and extensive experience into crafting spaces that not only mirror your unique preferences but also elevate your property's aesthetics to new heights.",
        "With over three decades of experience in all facets of commercial and residential painting and decorating, we excel in high-end development projects. We pledge to complete our work to an exceptionally high standard, on budget, and within the stipulated time frame."
      ]
    }
  },
  whatWeDoSection: {
    title: "What We Do",
    description: "We provide top-quality painting solutions tailored to meet your specific needs, regardless of the project's scope or scale. Our services cater to both residential and commercial clients, offering fresh painting for new constructions or repainting for renovations, covering both interior and exterior applications.",
    buttonText: "View Our Services",
    buttonLink: "/services",
    image: "/images/studio/20230630_172504.jpg"
  },
  ctaSection: {
    title: "Transform Your Space with Monarch Painters",
    subtitle: "Serving Rugeley, Lichfield, Tamworth, Sutton Coldfield, Birmingham, and beyond.",
    buttonText: "Get a Free Quote",
    buttonLink: "/contact",
    backgroundImage: "/images/studio/outdoor 1.jpg"
  }
};