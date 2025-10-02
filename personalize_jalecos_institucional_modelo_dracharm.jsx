import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Shirt, Sparkles, ShieldCheck, Truck, ChevronRight, ChevronDown, Instagram, Facebook, Phone, Mail, MapPin, ArrowRight, BadgeCheck, Wand2 } from "lucide-react";

/**
 * Versão inicial restaurada do site institucional com vibe e-commerce.
 */

function Container({ children, className = "" }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide backdrop-blur-md">
      {children}
    </span>
  );
}

function SectionTitle({ eyebrow, title, desc }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <div className="mb-3">
          <Badge>{eyebrow}</Badge>
        </div>
      )}
      <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
        {title}
      </h2>
      {desc && <p className="mt-3 text-base text-white/70">{desc}</p>}
    </div>
  );
}

const navItems = [
  { label: "Início", href: "#hero" },
  { label: "Coleções", href: "#colecoes" },
  { label: "Personalização", href: "#processo" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const colecoes = [
  {
    title: "Clássicos Premium",
    tag: "Best‑seller",
    img: "/placeholder/colecao-1.jpg",
    desc: "Jalecos sob medida com caimento impecável e tecidos resistentes.",
  },
  {
    title: "Linha Cirúrgica",
    tag: "Novo",
    img: "/placeholder/colecao-2.jpg",
    desc: "Modelos pensados para longos turnos: leves, respiráveis e seguros.",
  },
  {
    title: "Academia e Estágio",
    tag: "Popular",
    img: "/placeholder/colecao-3.jpg",
    desc: "Opções acessíveis para quem está começando com estilo profissional.",
  },
  {
    title: "Scrubs & Conjuntos",
    tag: "Trend",
    img: "/placeholder/colecao-4.jpg",
    desc: "Conjuntos confortáveis com estética clean e toque macio.",
  },
];

function NavBar() {
  return (
    <div className="sticky top-0 z-40 border-b border-white/10 bg-gradient-to-b from-black/60 to-transparent backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <a href="#hero" className="group inline-flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-black font-bold">PJ</div>
          <span className="text-sm font-semibold tracking-wide opacity-90 group-hover:opacity-100">Personalize Jalecos</span>
        </a>
        <nav className="hidden gap-6 md:flex">
          {navItems.map((i) => (
            <a key={i.href} href={i.href} className="text-sm text-white/80 hover:text-white">
              {i.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#contato"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm hover:bg-white/10"
          >
            <Phone className="h-4 w-4"/>
            <span>Fale conosco</span>
            <ChevronRight className="h-4 w-4 opacity-60 group-hover:translate-x-0.5 transition"/>
          </a>
        </div>
      </Container>
    </div>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <Container className="relative py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <Badge>Jalecos personalizados com padrão premium</Badge>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            Visual profissional que fala por você
          </h1>
          <p className="mt-4 text-white/80">
            Um site institucional com experiência de loja: vitrine moderna, catálogos por coleção e
            personalização de bordados — sob medida para sua marca e equipe.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#colecoes"
              className="group inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-black font-semibold shadow-lg hover:shadow-xl"
            >
              <ShoppingBag className="h-5 w-5"/>
              Ver catálogo
              <ArrowRight className="h-5 w-5 opacity-70 group-hover:translate-x-0.5 transition"/>
            </a>
            <a
              href="#processo"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-5 py-3 text-white hover:bg-white/10"
            >
              <Sparkles className="h-5 w-5"/>
              Como funciona
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/0 p-2 shadow-2xl"
        >
          <div className="aspect-[16/8] w-full rounded-2xl bg-[url('/placeholder/hero-jalecos.jpg')] bg-cover bg-center" />
        </motion.div>
      </Container>
    </section>
  );
}

function FeatureCards() {
  const features = [
    {
      icon: <ShieldCheck className="h-6 w-6"/>,
      title: "Qualidade garantida",
      desc: "Costura reforçada, tecidos premium e controle de qualidade 100% manual.",
    },
    {
      icon: <Wand2 className="h-6 w-6"/>,
      title: "Personalização real",
      desc: "Bordados com seu nome, cargo e logo — alinhamento e cores fiéis.",
    },
    {
      icon: <Truck className="h-6 w-6"/>,
      title: "Envio ágil",
      desc: "Do pedido ao envio com logística rastreável e prazos transparentes.",
    },
  ];
  return (
    <section className="border-t border-white/10 bg-white/5 py-14">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-6 shadow-lg hover:shadow-xl"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Colecoes() {
  return (
    <section id="colecoes" className="py-20">
      <Container>
        <SectionTitle
          eyebrow="Catálogo"
          title="Coleções que definem sua presença"
          desc="Um catálogo com experiência de e‑commerce, mantendo foco institucional e consultivo."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {colecoes.map((c, i) => (
            <motion.a
              key={c.title}
              href="#contato"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg"
            >
              <div className="relative">
                <div className="aspect-[4/5] w-full bg-center bg-cover" style={{ backgroundImage: `url(${c.img})`}} />
                <div className="absolute left-3 top-3">
                  <span className="rounded-full bg-white text-black px-2 py-1 text-xs font-semibold shadow">{c.tag}</span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <BadgeCheck className="h-4 w-4"/>
                  Produção própria
                </div>
                <h3 className="mt-1 text-lg font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-white/70 line-clamp-2">{c.desc}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-sm text-white/80 group-hover:gap-2 transition-all">
                  Solicitar orçamento <ChevronRight className="h-4 w-4"/>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative py-20">
      <Container>
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-white/10 to-transparent p-8 sm:p-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold">Eleve o visual da sua equipe hoje</h3>
              <p className="mt-2 text-white/80">
                Fale com um consultor para receber um orçamento com base nas suas preferências de
                modelo, tecido e personalização.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#contato" className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-black font-semibold shadow">
                  <Phone className="h-5 w-5"/> Solicitar orçamento
                </a>
                <a href="#colecoes" className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-5 py-3 hover:bg-white/10">
                  <Shirt className="h-5 w-5"/> Ver coleções
                </a>
              </div>
            </div>
            <div className="aspect-[16/10] w-full rounded-2xl bg-[url('/placeholder/cta-jaleco.jpg')] bg-cover bg-center"/>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function App() {
  React.useEffect(() => {
    document.documentElement.classList.add("bg-black", "text-white");
  }, []);

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(10,12,18,1)_40%,rgba(12,14,22,1)_100%)]">
      <NavBar />
      <Hero />
      <FeatureCards />
      <Colecoes />
      <CTA />
    </div>
  );
}
