// Project types
export type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
};

// Gallery images data
export const galleryImages = [
  // Interior category
  ...[    
    '20250120_133516_Edited.jpg', '20250120_133523_Edited.jpg',
    '20250120_133631_Edited.jpg', '20250120_133650_Edited.jpg',
    '20250120_133807_Edited.jpg', '20250120_141812_Edited.jpg',
    '20250120_141844_Edited.jpg', '20250120_141855_Edited.jpg',
    '20240814_140522 (Large).jpg', '20240820_145144 (Large).jpg',
    '20240731_135609 (Large).jpg', '20240714_154905 (Large).jpg',
    '20240714_154929 (Large).jpg', '20240709_130739 (Large).jpg',
    '20240709_131229 (Large).jpg', '20240709_133412 (Large).jpg',
    '20240709_133850 (Large).jpg', '20240627_133500 (Large).jpg',
    '20240613_142118 (Large).jpg', '20240522_102422 (Large).jpg',
    '20240514_134755 (Large).jpg', '20240510_140359 (Large).jpg',
    '20240510_140529 (Large).jpg', '20240429_165826 (Large).jpg',
    '20230919_174627.jpg', '20230918_173317.jpg',
    '20230831_152834.jpg', '20230818_170608.jpg',
    '20230815_182802.jpg', '20230815_182505.jpg', '20230815_182451.jpg',
    '20230814_153052.jpg', '20230814_110124.jpg', '20230814_110116.jpg',
    '20230731_104156.jpg', '20230731_104152.jpg',
    '20230728_140415.jpg', '20230728_132854.jpg', '20230728_121720.jpg',
    '20230727_170826.jpg', '20230726_141216.jpg',
    '20230630_172504.jpg', '20230630_172454.jpg', '20230629_104742.jpg',
    '20230415_162316.jpg', '20230415_162311.jpg', '20230413_150648.jpg',
    '20230412_131142.jpg', '20230412_131127.jpg', '20230406_151643.jpg',
    '20230405_102226.jpg', '20230405_094614.jpg', '20230314_155821.jpg',
    '20230307_092632.jpg', '20230303_172858.jpg', '20230227_103358.jpg',
    '20230221_121726.jpg', '20230220_094135.jpg',
    '20230215_160204.jpg', '20230215_160142.jpg', '20230215_100652.jpg', 
    '20230215_100642.jpg'
  ].map(filename => ({
    category: 'interior',
    image: `/images/studio/${filename}`,
    title: 'Interior Project ' +  (filename?.split('_')[0] ?? ''), 
    description: 'Professional interior painting and renovation project'
  })),

  // Exterior category
  ...[    '20230529_094642.jpg', '20230529_133656.jpg', '20230529_173156.jpg',
    '20230728_133414.jpg',
  ].map(filename => ({
    category: 'exterior',
    image: `/images/studio/${filename}`,
    title: 'Exterior Project ' + (filename?.split('_')[0] ?? ''),
    description: 'Professional exterior painting and renovation project'
  })),

  // Commercial category
  ...[    
    '20230821_163054.jpg', '20230828_125308.jpg',
  ].map(filename => ({
    category: 'commercial',
    image: `/images/studio/${filename}`,
    title: 'Commercial Project ' + (filename?.split('_')[0] ?? ''),
    description: 'Professional commercial space renovation and painting'
  }))
].map((item, index) => ({ ...item, id: index + 1 }));

// Categories data
export const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'interior', label: 'Interior' },
  { id: 'exterior', label: 'Exterior' },
  { id: 'commercial', label: 'Commercial' }
];

// Hero section content
export const heroContent = {
  title: 'Our Projects',
  description: 'Discover our portfolio of exceptional painting and decorating work',
  image: '/images/studio/20250120_133706_Edited.jpg'
};

// Items per page for pagination
export const ITEMS_PER_PAGE = 9;