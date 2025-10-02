const defaultSiteConfig = {
  brand: {
    name: "Personalize Jalecos",
    initials: "PJ",
    tagline: "Jalecos personalizados com padrão premium",
  },
  colors: {
    primary: "#74B3A4",
    secondary: "#2E2E2E",
    background: "#FFFFFF",
    complementary: "#E0E0E0",
    highlight: "#4C8C82",
  },
  typography: {
    heading: "'Poppins', sans-serif",
    body: "'Inter', sans-serif",
  },
  navigation: {
    items: [
      { label: "Início", href: "#hero" },
      { label: "Coleções", href: "#colecoes" },
      { label: "Personalização", href: "#processo" },
      { label: "Depoimentos", href: "#depoimentos" },
      { label: "Contato", href: "#contato" },
    ],
    contactCta: {
      label: "Fale conosco",
      href: "#contato",
    },
  },
  hero: {
    badge: "Jalecos personalizados com padrão premium",
    title: "Visual profissional que fala por você",
    subtitle:
      "Um site institucional com experiência de loja: vitrine moderna, catálogos por coleção e personalização de bordados — sob medida para sua marca e equipe.",
    primaryCta: {
      label: "Ver catálogo",
      href: "#colecoes",
    },
    secondaryCta: {
      label: "Como funciona",
      href: "#processo",
    },
    images: [
      {
        src: "/placeholder/hero-jalecos.jpg",
        alt: "Modelos de jalecos personalizados em manequins",
      },
      {
        src: "/placeholder/cta-jaleco.jpg",
        alt: "Detalhes de bordado personalizado em jaleco",
      },
      {
        src: "/placeholder/colecao-1.jpg",
        alt: "Equipe de saúde usando jalecos personalizados",
      },
    ],
  },
  features: [
    {
      icon: "ShieldCheck",
      title: "Qualidade garantida",
      description: "Costura reforçada, tecidos premium e controle de qualidade 100% manual.",
    },
    {
      icon: "Wand2",
      title: "Personalização real",
      description: "Bordados com seu nome, cargo e logo — alinhamento e cores fiéis.",
    },
    {
      icon: "Truck",
      title: "Envio ágil",
      description: "Do pedido ao envio com logística rastreável e prazos transparentes.",
    },
  ],
  collections: {
    eyebrow: "Catálogo",
    title: "Coleções que definem sua presença",
    description:
      "Um catálogo com experiência de e‑commerce, mantendo foco institucional e consultivo.",
    items: [
      {
        title: "Clássicos Premium",
        tag: "Best‑seller",
        img: "/placeholder/colecao-1.jpg",
        description: "Jalecos sob medida com caimento impecável e tecidos resistentes.",
      },
      {
        title: "Linha Cirúrgica",
        tag: "Novo",
        img: "/placeholder/colecao-2.jpg",
        description: "Modelos pensados para longos turnos: leves, respiráveis e seguros.",
      },
      {
        title: "Academia e Estágio",
        tag: "Popular",
        img: "/placeholder/colecao-3.jpg",
        description: "Opções acessíveis para quem está começando com estilo profissional.",
      },
      {
        title: "Scrubs & Conjuntos",
        tag: "Trend",
        img: "/placeholder/colecao-4.jpg",
        description: "Conjuntos confortáveis com estética clean e toque macio.",
      },
    ],
  },
  cta: {
    title: "Eleve o visual da sua equipe hoje",
    description:
      "Fale com um consultor para receber um orçamento com base nas suas preferências de modelo, tecido e personalização.",
    primaryCta: {
      label: "Solicitar orçamento",
      href: "#contato",
    },
    secondaryCta: {
      label: "Ver coleções",
      href: "#colecoes",
    },
    image: "/placeholder/cta-jaleco.jpg",
  },
  contact: {
    phone: "(11) 99999-9999",
    email: "contato@personalizejalecos.com",
    location: "São Paulo, SP",
    social: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Facebook", href: "https://facebook.com" },
    ],
  },
};

export default defaultSiteConfig;
