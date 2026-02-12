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
    name: 'V-MIX 40K',
    brand: 'Ignite',
    price: 135.00,
    image: 'https://i.postimg.cc/bN7t04mn/Chat-GPT-Image-12-de-fev-de-2026-16-57-36.png',
    images: [
      'https://i.postimg.cc/bN7t04mn/Chat-GPT-Image-12-de-fev-de-2026-16-57-36.png',
      'https://i.postimg.cc/mD7Ls6QY/Chat-GPT-Image-12-de-fev-de-2026-17-02-15.png'
    ],
    flavors: [
      "Menthol", 
      "Watermelon Ice", 
      "Grape Ice", 
      "Strawberry Kiwi", 
      "Blueberry Ice", 
      "Mango Peach",
      "Cool Mint",
      "Green Apple"
    ],
    description: `DESCRIÇÃO

V-Mix é a personalização de sabores. O usuário pode optar por ativar apenas um lado, alternar entre eles ou até mesmo combiná-los, criando experiências diferenciadas. Os modos de potência — Eco e Boost — permitem ajustar intensidade e produção de vapor. Essas opções aparecem no visor LED, junto com indicadores de bateria e nível de juice de cada compartimento.

Os dois botões atuam separadamente: cada um aciona um tanque, além de permitir a escolha entre Eco e Boost. Dessa forma, é possível misturar os sabores, intensificar um deles ou manter apenas um ativo. Essa liberdade de configuração torna o V-Mix um dos pods mais versáteis da categoria.

Fluxo de ar regulável

Outro recurso presente é o ajuste de airflow, que pode ser totalmente fechado, semiaberto ou aberto. Isso garante mais controle sobre a densidade do vapor e a intensidade do sabor, atendendo diferentes preferências em cada sessão.

Autonomia

O V-Mix 40K oferece até 40.000 puffs, garantindo longa duração para usuários que valorizam conveniência. No entanto, vale destacar: ao utilizar o modo Boost, esse número pode cair pela metade. Para aproveitar ao máximo a autonomia, recomenda-se priorizar o modo Eco.

Passo a passo de uso

1. Remova os lacres de segurança e carregue o dispositivo completamente antes do primeiro uso.
2. Ajuste o fluxo de ar superior conforme sua preferência.
3. Pressione o botão preto para ligar o dispositivo.
4. Selecione o modo desejado (Eco ou Boost) para cada sabor usando os botões laterais.
5. Certifique-se de ativar pelo menos um dos sabores, caso contrário, não haverá produção de vapor.

ESPECIFICAÇÕES

- Teor de nicotina: 50 mg/mL;
- Capacidade de puffs: 40.000 puffs;
- Capacidade de líquido: - mL;
- Capacidade da bateria: 800 mAh
- É um descartável, jogue-o fora após o uso
- É vendido por unidade individual`,
    category: 'Descartáveis'
  },
  {
    id: '2',
    name: 'Magic Maze Pro',
    brand: 'Oxbar',
    price: 110.00,
    image: 'https://picsum.photos/seed/vape2/600/800',
    images: [
      'https://picsum.photos/seed/vape2/600/800',
      'https://picsum.photos/seed/vape2_screen/600/800',
      'https://picsum.photos/seed/vape2_back/600/800',
      'https://picsum.photos/seed/vape2_box/600/800'
    ],
    flavors: ["Strawberry", "Blue Razz", "Sakura Grape"],
    description: 'Magic Maze Pro com controle de fluxo de ar e visor de bateria. Sabor intenso de frutas vermelhas.',
    category: 'Pod System'
  },
  {
    id: '3',
    name: 'BC10000 Touch',
    brand: 'Elfbar',
    price: 125.00,
    image: 'https://picsum.photos/seed/vape3/600/800',
    images: [
      'https://picsum.photos/seed/vape3/600/800',
      'https://picsum.photos/seed/vape3_side/600/800',
      'https://picsum.photos/seed/vape3_top/600/800',
      'https://picsum.photos/seed/vape3_detail/600/800'
    ],
    flavors: ["Touch Menthol", "Touch Berry", "Touch Mango"],
    description: 'Tecnologia Touch inovadora. O BC10000 entrega consistência do início ao fim.',
    category: 'Descartáveis'
  },
  {
    id: '4',
    name: 'MO5000',
    brand: 'Lost Mary',
    price: 95.00,
    image: 'https://picsum.photos/seed/vape4/600/800',
    images: [
      'https://picsum.photos/seed/vape4/600/800',
      'https://picsum.photos/seed/vape4_back/600/800',
      'https://picsum.photos/seed/vape4_side/600/800',
      'https://picsum.photos/seed/vape4_fit/600/800'
    ],
    flavors: ["Pineapple Apple Pear", "Cherry Lemon", "Grape"],
    description: 'Design elegante e compacto. O MO5000 oferece uma experiência suave com mesh coil.',
    category: 'Descartáveis'
  },
  {
    id: '5',
    name: 'Ignite V80',
    brand: 'Ignite',
    price: 130.00,
    image: 'https://picsum.photos/seed/vape5/600/800',
    images: [
      'https://picsum.photos/seed/vape5/600/800',
      'https://picsum.photos/seed/vape5_b/600/800',
      'https://picsum.photos/seed/vape5_c/600/800',
      'https://picsum.photos/seed/vape5_d/600/800'
    ],
    flavors: ["Strawberry", "Watermelon"],
    description: 'A evolução do V50. Mais bateria, mais sabor e design exclusivo Ignite.',
    category: 'Descartáveis'
  },
  {
    id: '6',
    name: 'G8000',
    brand: 'Oxbar',
    price: 90.00,
    image: 'https://picsum.photos/seed/vape6/600/800',
    images: [
      'https://picsum.photos/seed/vape6/600/800',
      'https://picsum.photos/seed/vape6_open/600/800',
      'https://picsum.photos/seed/vape6_back/600/800',
      'https://picsum.photos/seed/vape6_hood/600/800'
    ],
    flavors: ["Mad Blue", "Cool Mint", "Double Apple"],
    description: 'G8000 traz um corpo transparente e lanyard incluso. Estilo e praticidade.',
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
    image: 'https://i.postimg.cc/xjbFwd8n/banner-pods3.jpg',
    title: "ESSENCIAIS",
    subtitle: "USO DIÁRIO"
  }
];