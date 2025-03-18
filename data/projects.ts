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
    '20250120_133516_Edited.webp', '20250120_133523_Edited.webp',
    '20250120_133631_Edited.webp', '20250120_133650_Edited.webp',
    '20250120_133807_Edited.webp', '20250120_141812_Edited.webp',
    '20250120_141844_Edited.webp', '20250120_141855_Edited.webp',
     '20240820_145144 (Large).webp', '20240714_154905 (Large).webp',
    '20240714_154929 (Large).webp', '20240709_130739 (Large).webp',
    '20240709_131229 (Large).webp', '20240709_133412 (Large).webp',
    '20240709_133850 (Large).webp', '20240627_133500 (Large).webp',
     '20240522_102422 (Large).webp',
    '20240514_134755 (Large).webp', '20240510_140359 (Large).webp',
    '20240510_140529 (Large).webp', '20240429_165826 (Large).webp',
    '20230919_174627.webp', '20230918_173317.webp',
    '20230831_152834.webp', '20230818_170608.webp',
    '20230815_182802.webp', '20230815_182505.webp', '20230815_182451.webp',
    '20230814_153052.webp', '20230814_110124.webp', '20230814_110116.webp',
   
    '20230728_140415.webp', '20230728_132854.webp', '20230728_121720.webp',
    '20230727_170826.webp', '20230726_141216.webp',
    '20230630_172504.webp', '20230629_104742.webp', '20230630_172454.webp', 
    '20230412_131142.webp', '20230415_162316.webp', '20230413_150648.webp',
    '20230412_131127.webp',  '20230415_162311.webp','20230406_151643.webp',
    '20230405_102226.webp', '20230405_094614.webp', '20230314_155821.webp',
    '20230307_092632.webp', '20230303_172858.webp', '20230227_103358.webp',
    '20230221_121726.webp', '20230220_094135.webp',
    '20230215_160204.webp', '20230215_160142.webp', '20230215_100652.webp', 
    '20230215_100642.webp'
  ].map(filename => ({
    category: 'interior',
    image: `/images/studio/${filename}`,
    title: 'Interior Project ' +  (filename?.split('_')[0] ?? ''), 
    description: 'Professional interior painting and renovation project'
  })),

  // Exterior category
  ...[    '20240814_140522 (Large).webp', '20240613_142118 (Large).webp', '20230529_094642.webp', '20230529_133656.webp', '20230529_173156.webp',
    'outdoor 1.webp','20240731_135609 (Large).webp'
  ].map(filename => ({
    category: 'exterior',
    image: `/images/studio/${filename}`,
    title: 'Exterior Project ' + (filename?.split('_')[0] ?? ''),
    description: 'Professional exterior painting and renovation project'
  })),

  // Commercial category
  ...[    
    '20230821_163054.webp','20250205_130818.webp','20240608_175423 (Large).webp',
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
  image: '/images/studio/20250120_133706_Edited.webp'
};

// Items per page for pagination
export const ITEMS_PER_PAGE = 9;


 // '20230731_104156.webp', '20230731_104152.webp',