import { Brand, Product } from './types';

export const BRANDS: Brand[] = [
  { id: 'ignite', name: 'Ignite', logo: 'https://i.postimg.cc/CLmyQD33/ignite-logo.png' },
  { id: 'oxbar', name: 'Oxbar', logo: 'https://i.postimg.cc/26pgZxWj/logo-oxbar.webp' },
  { id: 'elfbar', name: 'Elfbar', logo: 'https://i.postimg.cc/tJpfrC2b/elfbar-logo.png' },
  { id: 'lostmary', name: 'Lost Mary', logo: 'https://i.postimg.cc/nr2WNbP0/lost-mary-logo.png' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Ignite V50 Menthol',
    brand: 'Ignite',
    price: 85.00,
    image: 'https://picsum.photos/seed/vape1/600/800',
    images: [
      'https://picsum.photos/seed/vape1/600/800',
      'https://picsum.photos/seed/vape1_side/600/800',
      'https://picsum.photos/seed/vape1_detail/600/800',
      'https://picsum.photos/seed/vape1_pkg/600/800'
    ],
    description: 'O clássico V50 com sabor refrescante de menta. Design ergonômico e acabamento premium.',
    sizes: ['5000 Puffs'],
    category: 'Descartáveis'
  },
  {
    id: '2',
    name: 'Oxbar Magic Maze Pro',
    brand: 'Oxbar',
    price: 110.00,
    image: 'https://picsum.photos/seed/vape2/600/800',
    images: [
      'https://picsum.photos/seed/vape2/600/800',
      'https://picsum.photos/seed/vape2_screen/600/800',
      'https://picsum.photos/seed/vape2_back/600/800',
      'https://picsum.photos/seed/vape2_box/600/800'
    ],
    description: 'Magic Maze Pro com controle de fluxo de ar e visor de bateria. Sabor intenso de frutas vermelhas.',
    sizes: ['10000 Puffs'],
    category: 'Pod System'
  },
  {
    id: '3',
    name: 'Elfbar BC10000 Touch',
    brand: 'Elfbar',
    price: 125.00,
    image: 'https://picsum.photos/seed/vape3/600/800',
    images: [
      'https://picsum.photos/seed/vape3/600/800',
      'https://picsum.photos/seed/vape3_side/600/800',
      'https://picsum.photos/seed/vape3_top/600/800',
      'https://picsum.photos/seed/vape3_detail/600/800'
    ],
    description: 'Tecnologia Touch inovadora. O BC10000 entrega consistência do início ao fim.',
    sizes: ['10000 Puffs'],
    category: 'Descartáveis'
  },
  {
    id: '4',
    name: 'Lost Mary MO5000',
    brand: 'Lost Mary',
    price: 95.00,
    image: 'https://picsum.photos/seed/vape4/600/800',
    images: [
      'https://picsum.photos/seed/vape4/600/800',
      'https://picsum.photos/seed/vape4_back/600/800',
      'https://picsum.photos/seed/vape4_side/600/800',
      'https://picsum.photos/seed/vape4_fit/600/800'
    ],
    description: 'Design elegante e compacto. O MO5000 oferece uma experiência suave com mesh coil.',
    sizes: ['5000 Puffs'],
    category: 'Descartáveis'
  },
  {
    id: '5',
    name: 'Ignite V80 Strawberry',
    brand: 'Ignite',
    price: 130.00,
    image: 'https://picsum.photos/seed/vape5/600/800',
    images: [
      'https://picsum.photos/seed/vape5/600/800',
      'https://picsum.photos/seed/vape5_b/600/800',
      'https://picsum.photos/seed/vape5_c/600/800',
      'https://picsum.photos/seed/vape5_d/600/800'
    ],
    description: 'A evolução do V50. Mais bateria, mais sabor e design exclusivo Ignite.',
    sizes: ['8000 Puffs'],
    category: 'Descartáveis'
  },
  {
    id: '6',
    name: 'Oxbar G8000',
    brand: 'Oxbar',
    price: 90.00,
    image: 'https://picsum.photos/seed/vape6/600/800',
    images: [
      'https://picsum.photos/seed/vape6/600/800',
      'https://picsum.photos/seed/vape6_open/600/800',
      'https://picsum.photos/seed/vape6_back/600/800',
      'https://picsum.photos/seed/vape6_hood/600/800'
    ],
    description: 'G8000 traz um corpo transparente e lanyard incluso. Estilo e praticidade.',
    sizes: ['8000 Puffs'],
    category: 'Descartáveis'
  }
];

export const BANNERS = [
  {
    id: 1,
    image: 'https://i.postimg.cc/tT27T718/banner-ignite.webp',
    title: "NOVA COLEÇÃO",
    subtitle: "VANGUARDA URBANA"
  },
  {
    id: 2,
    image: 'https://i.postimg.cc/brS8hv1x/oxbar-banner.webp',
    title: "LANÇAMENTO DE VERÃO",
    subtitle: "EDIÇÃO LIMITADA"
  },
  {
    id: 3,
    image: 'https://picsum.photos/seed/banner3/1920/800',
    title: "ESSENCIAIS",
    subtitle: "USO DIÁRIO"
  }
];