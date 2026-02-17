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
    longName: 'Pod Descartável V-MIX 40K - 40000 Puffs | - 50mg/mL',
    brand: 'Ignite',
    price: 200.00,
    image: 'https://i.postimg.cc/bN7t04mn/Chat-GPT-Image-12-de-fev-de-2026-16-57-36.png',
    images: [
      'https://i.postimg.cc/bN7t04mn/Chat-GPT-Image-12-de-fev-de-2026-16-57-36.png',
      'https://i.postimg.cc/mD7Ls6QY/Chat-GPT-Image-12-de-fev-de-2026-17-02-15.png'
    ],
    flavors: [
      "Icy Mint / Peach Grape",
      "Orange Ice / Strawberry",
      "Peach Watermelon / Mango Ice",
      "Strawberry Mango Ice / Banana Ice",
      "Blueberry Ice / Raspberry BlackBerry",
      "Watermelon Grape Ice / Açaí Ice",
      "Grape Ice / Watermelon Ice",
      "Apple Ice / Strawberry Watermelon",
      "Mighty Melon / Menthol",
      "Passion Fruit Sour Kiwi / Pineapple Ice",
      "Watermelon Ice / Cherry Ice"
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
    id: '7',
    name: 'Magic Maze 2.0',
    longName: 'Pod Descartável Magic Maze 2.0 com 30000 puffs | OXBAR - 50mg/mL',
    brand: 'Oxbar',
    price: 130.00,
    image: 'https://i.postimg.cc/28pNNhzS/OXBAR-G30K.jpg',
    images: [
      'https://i.postimg.cc/28pNNhzS/OXBAR-G30K.jpg',
      'https://i.postimg.cc/BnGFFLNM/oxbar-g30k-pro-black-lemon-ice.jpg'
    ],
    flavors: [
      "Blackcurrant Lemon Ice"
    ],
    description: `DESCRIÇÃO

O Pod Descartável Magic Maze 2.0 da OXBAR representa um avanço significativo no mercado de vapes descartáveis, unindo tecnologia de ponta com um design elegante e funcional. Com uma incrível capacidade de mais de 30.000 puffs, este dispositivo é perfeito para usuários que desejam uma experiência de vaping duradoura e consistente. Equipado com uma bateria recarregável de 900mAh e a inovadora tecnologia Unione™ Dual Mesh Coil, o Magic Maze 2.0 proporciona nuvens densas e um sabor excepcional, garantindo sessões de vaping intensas e gratificantes.

O design compacto e ergonômico do Magic Maze 2.0 facilita seu transporte e uso em qualquer situação. O dispositivo conta com uma tela LED de alta resolução que fornece informações importantes como nível de bateria, potência ajustável entre 12W e 28W, além do modo de utilização selecionado, seja Restricted Direct Lung (RDL) ou Mouth-to-Lung (MTL). Essa adaptabilidade permite que os usuários personalizem sua experiência de acordo com suas preferências individuais, assegurando tragadas sempre suaves e satisfatórias.

Além das características técnicas impressionantes, o Magic Maze 2.0 prioriza a segurança do usuário ao incluir uma trava de proteção infantil integrada, prevenindo usos acidentais e oferecendo tranquilidade adicional. Disponível em uma variedade de sabores cuidadosamente formulados, cada opção entrega uma experiência de sabor rica e envolvente que atende aos paladares mais exigentes.

ESPECIFICAÇÕES

- Teor de nicotina: 50 mg/mL;
- Capacidade de puffs: 30000 puffs;
- Capacidade de líquido: - mL;
- Capacidade da bateria: 900 mAh
- É um descartável, jogue-o fora após o uso
- É vendido por unidade individual`,
    category: 'Descartáveis'
  },
  {
    id: '8',
    name: 'MO20000 Pro',
    longName: 'Pod Descartável MO20000 Pro com 20000 puffs | Lost Mary - 50mg/mL',
    brand: 'Lost Mary',
    price: 120.00,
    image: 'https://i.postimg.cc/sDBdtKdR/pod-descartavel-mo20000-elfbar-68cea180c30fc.webp',
    images: [
      'https://i.postimg.cc/sDBdtKdR/pod-descartavel-mo20000-elfbar-68cea180c30fc.webp',
      'https://i.postimg.cc/k5m0Rm2T/lost-mary-mo20000-pro.webp'
    ],
    flavors: [
      "Lime GrapeFruit",
      "Pure Ice",
      "Peppermint",
      "Pear Drop"
    ],
    description: `DESCRIÇÃO

O MO 20000 Pro é a evolução do Lost Mary 10000 é uma novidade no setor de pods descartáveis, proporcionando uma mistura única de resistência, performance e design. Este aparelho foi desenvolvido para oferecer até 20.000 tragadas, assegurando um vaping prolongado e satisfatório sem a necessidade de trocas frequentes.

O pod descartável MO 20000 Pro, com uma bateria de 800 mAh recarregável e uma entrada USB-C de carregamento, permite que você desfrute suas sessões de vape sem interrupções prolongadas. Uma tela de animação HD, a maior da indústria, complementa a bateria de longa duração, exibindo em tempo real informações detalhadas como nível de suco, status da bateria, potência e quantidade de vaporadas.

O modelo MO 20000 Pro vem com uma bobina de malha dupla de 0.9 ohms, garantindo uma vaporização eficaz e produzindo vapor denso e saboroso, bem como seu antecessor. Esta tecnologia avançada de bobina garante que cada tragada seja suave e satisfatória, destacando os sabores intensos do juice. Adicionalmente, o aparelho possibilita ajustes de potência variáveis de 13W a 25W, proporcionando versatilidade para personalizar a experiência de vape conforme as escolhas pessoais.

Design com tela LED incorporada

O Pod Descartável MO 20000 Pro da Lost Mary se destaca não só por sua excelente capacidade e performance, mas também por seu design inovador, com uma tela LED HD integrada. Este monitor é um dos maiores disponíveis, oferecendo uma exibição nítida e detalhada de dados importantes durante a utilização.

A tela LED mostra várias funções em tempo real, tais como o nível de Juice, a condição da bateria, a potência ajustada e a contagem de puffs. Essa ferramenta possibilita aos usuários acompanharem e gerenciarem sua prática de vaping de forma simples e precisa, certificando-se de que todas as preferências estejam ajustadas para uma experiência agradável.

Funções do MO 20000 Pro

É importante mencionar que o pod descartável MO 20000 Pro tem uma função de controle de temperatura semelhante à de um vape, porém é fácil ajustá-la. Para modificar as potências, é preciso pressionar repetidamente o botão principal, clique após clique. Após realizar essa ação, ele pode variar de 13W a 25W. Uma outra característica do pod é o seu LED, que, além de exibir as informações mencionadas anteriormente, também apresenta uma animação de vapor e o tempo de duração da tragada.

ESPECIFICAÇÕES

- Teor de nicotina: 50 mg/mL;
- Capacidade de puffs: 20000 puffs;
- Capacidade de líquido: 18 mL;
- Capacidade da bateria: 800 mAh
- É um descartável, jogue-o fora após o uso
- É vendido por unidade individual`,
    category: 'Descartáveis'
  },
  {
    id: '9',
    name: 'BC45K Pro',
    longName: 'Pod Descartável Elf Bar BC45K Pro – 45.000 puffs',
    brand: 'Elfbar',
    price: 220.00,
    image: 'https://i.postimg.cc/fW8SHWZc/15425726390-elfbar-bc-45k-pro-principal.jpg',
    images: [
      'https://i.postimg.cc/fW8SHWZc/15425726390-elfbar-bc-45k-pro-principal.jpg',
      'https://i.postimg.cc/XqbLQjbW/4785d442-676a-494a-b55c-04aaffde7857.webp'
    ],
    flavors: [
      "Blueberry Strawberry Coconut Ice",
      "Watermelon Peach Frost",
      "Pineapple Pom",
      "Tropical Baja",
      "Mango Magic",
      "Kiwi Passion Fruit Guava"
    ],
    description: `DESCRIÇÃO

O Pod Descartável Elf Bar BC45K Pro é uma solução prática e elegante para quem busca uma experiência de vape saborosa e acessível. Com aproximadamente 45.000 puffs, este dispositivo oferece longa duração, ideal para quem deseja conveniência e variedade em um só produto. Sua variedade de sabores intensifica a experiência, garantindo opções que agradam tanto aos fãs de frutas quanto aos que preferem um toque refrescante.

Este modelo se destaca pela facilidade de uso e pelo design compacto, perfeito para vapers de todos os níveis, especialmente para quem procura praticidade sem abrir mão de uma vaporização consistente e agradável.

Perfil e Características

O Elf Bar BC45K Pro entrega um vapor denso com boa intensidade de sabor, aliado a uma doçura equilibrada e um frescor suave que varia conforme a opção escolhida. O throat hit é suave a moderado, garantindo uma sensação agradável e descontraída, ideal para um uso prolongado ao longo do dia. Além disso, a diversidade de sabores permite encontrar facilmente o perfil preferido, desde os mais adocicados até os mentolados, todos com consistência na entrega do sabor.

Benefícios e Diferenciais

- Extensa duração com cerca de 45.000 puffs.
- Variedade rica de sabores para todos os gostos.
- Fácil manuseio e praticidade para uso diário.
- Design compacto e portátil, ideal para transportar e usar a qualquer momento.
- Marca reconhecida pela confiabilidade e qualidade na entrega do sabor.

Como Usar

Utilize o Pod Descartável Elf Bar BC45K Pro conforme as orientações do fabricante. Ele é pronto para uso e dispensa recargas ou ajustes. Mantenha armazenado em local fresco e longe da exposição direta ao sol, para preservar a qualidade do produto.

Por que escolher o Pod Descartável Elf Bar BC45K Pro?

- Experiência de vape prolongada graças à sua quantidade de puffs.
- Variedade para agradar diferentes paladares e preferências.
- Praticidade e portabilidade para facilitar o uso diário.
- Sabor consistente e vapor denso para uma experiência satisfatória.
- Confiabilidade da marca Elf Bar, referência na categoria.`,
    category: 'Descartáveis'
  },
  {
    id: '10',
    name: 'V300',
    longName: 'Pod Descartável V300 | Ignite - 50mg/mL',
    brand: 'Ignite',
    price: 160.00,
    image: 'https://i.postimg.cc/Bbf3pKb4/CAIXA-IGNITE-V300-BLACK.png',
    images: [
      'https://i.postimg.cc/Bbf3pKb4/CAIXA-IGNITE-V300-BLACK.png',
      'https://i.postimg.cc/Hn0ghk89/pod-ignite-v300-30000-puffs.webp',
      'https://i.postimg.cc/RCw4FXpG/d1860d2c7f097873231aa9d28f8e6b90-68763b8d133c4.webp'
    ],
    flavors: [
      "Banana Coconut Water",
      "Cactus Lime Soda",
      "Dragon Fruit Watermelon",
      "Strawberry Banana",
      "Pineapple Ice",
      "Banana Ice",
      "Blueberry Strawberry Coconut"
    ],
    description: `DESCRIÇÃO

O Ignite V300 se destaca entre os dispositivos descartáveis por sua impressionante autonomia de até 30.000 puffs, oferecendo uma experiência consistente, prática e duradoura. Projetado para usuários que valorizam conveniência sem abrir mão de desempenho, esse pod combina grande capacidade com visual moderno e fácil usabilidade.

Seu design ergonômico garante conforto nas mãos e portabilidade para o dia a dia, enquanto o acabamento premium reforça a qualidade do produto. Compatível com sabores frutados marcantes — como Apple, Strawberry Banana e Dragon Fruit Watermelon — o V300 entrega uma jornada personalizada e rica em aroma, sem a necessidade de configurações ou recargas manuais.

Alta durabilidade e recarga rápida

Construído com materiais resistentes e estrutura sólida, o V300 foi feito para suportar o uso contínuo. Sua bateria recarregável de 800 mAh, com porta USB-C, proporciona energia suficiente para milhares de tragadas antes de exigir substituição. Essa autonomia reduz o custo a longo prazo e garante sessões prolongadas sem interrupções.

Tanque interno com grande volume de juice

Com 18 ml de e-líquido contendo nicotina do tipo nic salt, o dispositivo assegura uma absorção eficiente e um sabor uniforme do começo ao fim. Essa capacidade elevada dispensa reabastecimento, mantendo a praticidade como um dos principais diferenciais.

Desempenho suave e vapor estável

O V300 proporciona tragadas suaves e fluxo de ar equilibrado, graças ao sistema interno que evita falhas como dry hits ou encharcamento. A consistência na produção de vapor torna cada uso mais agradável, com entrega estável de nicotina e aroma intenso, mesmo após longos períodos de utilização.

Destaques do Ignite V300

- Até 30 mil puffs: uso prolongado com menor necessidade de substituição.
- Porta USB-C: recarga prática e rápida para sua rotina.
- Capacidade de 18 ml: mais juice, menos preocupação com reabastecimento.
- Design reforçado: ideal para o transporte e uso diário sem riscos.
- Sabores frutados variados: combina frescor e intensidade com alto nível de qualidade.

Em conclusão, o Pod Descartável V300 da Ignite é uma excelente escolha para quem busca alto rendimento, sabores marcantes e a praticidade de um pod completo. Seu conjunto robusto e a capacidade estendida tornam esse dispositivo uma opção superior dentro da categoria de pods descartáveis.

ESPECIFICAÇÕES

- Teor de nicotina: 50 mg/mL;
- Capacidade de puffs: 30000 puffs;
- Capacidade de líquido: 18 mL;
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