import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Shirt,
  Sparkles,
  ShieldCheck,
  Truck,
  ChevronRight,
  Instagram,
  Facebook,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  BadgeCheck,
  Wand2,
} from "lucide-react";

/**
 * Versão com identidade visual "Personalize Jalecos".
 */

function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-brand-primary/40 bg-brand-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-brand-primary">
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
      <h2 className="text-3xl font-bold leading-tight tracking-tight text-brand-secondary sm:text-4xl">
        {title}
      </h2>
      {desc && <p className="mt-3 text-base text-brand-secondary/70">{desc}</p>}
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
    <div className="sticky top-0 z-40 border-b border-brand-complementary bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#hero" className="group inline-flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-primary text-sm font-bold text-white">
            PJ
          </div>
          <span className="text-sm font-semibold tracking-wide text-brand-secondary group-hover:text-brand-primary">
            Personalize Jalecos
          </span>
        </a>
        <nav className="hidden gap-6 md:flex">
          {navItems.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="text-sm text-brand-secondary/70 transition hover:text-brand-primary"
            >
              {i.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#contato"
            className="group inline-flex items-center gap-2 rounded-xl bg-brand-primary px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-accent"
          >
            <Phone className="h-4 w-4" />
            <span>Fale conosco</span>
            <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
        </div>
      </Container>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-brand-background via-brand-background to-brand-complementary/40"
    >
      <Container className="relative py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <Badge>Jalecos personalizados com padrão premium</Badge>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-brand-secondary sm:text-6xl">
            Visual profissional que fala por você
          </h1>
          <p className="mt-4 text-brand-secondary/70">
            Um site institucional com experiência de loja: vitrine moderna, catálogos por coleção e
            personalização de bordados — sob medida para sua marca e equipe.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#colecoes"
              className="group inline-flex items-center gap-2 rounded-2xl bg-brand-primary px-5 py-3 text-white shadow-lg transition hover:bg-brand-accent hover:shadow-xl"
            >
              <ShoppingBag className="h-5 w-5" />
              Ver catálogo
              <ArrowRight className="h-5 w-5 opacity-80 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#processo"
              className="inline-flex items-center gap-2 rounded-2xl border border-brand-primary/40 px-5 py-3 text-brand-primary transition hover:bg-brand-primary/10"
            >
              <Sparkles className="h-5 w-5" />
              Como funciona
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14 rounded-3xl border border-brand-complementary bg-white p-2 shadow-2xl"
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
      icon: <ShieldCheck className="h-6 w-6 text-brand-primary" />,
      title: "Qualidade garantida",
      desc: "Costura reforçada, tecidos premium e controle de qualidade 100% manual.",
    },
    {
      icon: <Wand2 className="h-6 w-6 text-brand-primary" />,
      title: "Personalização real",
      desc: "Bordados com seu nome, cargo e logo — alinhamento e cores fiéis.",
    },
    {
      icon: <Truck className="h-6 w-6 text-brand-primary" />,
      title: "Envio ágil",
      desc: "Do pedido ao envio com logística rastreável e prazos transparentes.",
    },
  ];
  return (
    <section className="border-t border-brand-complementary bg-brand-background py-14">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-brand-complementary bg-white p-6 shadow-sm transition hover:border-brand-primary/60 hover:shadow-lg"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/10">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-brand-secondary">{f.title}</h3>
              <p className="mt-1 text-sm text-brand-secondary/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Colecoes() {
  return (
    <section id="colecoes" className="bg-brand-background py-20">
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
              className="group overflow-hidden rounded-2xl border border-brand-complementary bg-white shadow-sm transition hover:border-brand-primary/60 hover:shadow-lg"
            >
              <div className="relative">
                <div
                  className="aspect-[4/5] w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${c.img})` }}
                />
                <div className="absolute left-3 top-3">
                  <span className="rounded-full bg-brand-primary px-2 py-1 text-xs font-semibold text-white shadow">
                    {c.tag}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-brand-secondary/60">
                  <BadgeCheck className="h-4 w-4 text-brand-primary" />
                  Produção própria
                </div>
                <h3 className="mt-1 text-lg font-semibold text-brand-secondary">{c.title}</h3>
                <p className="mt-1 text-sm text-brand-secondary/70 line-clamp-2">{c.desc}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-sm text-brand-primary transition group-hover:gap-2">
                  Solicitar orçamento <ChevronRight className="h-4 w-4" />
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
    <section className="relative bg-brand-background py-20">
      <Container>
        <div className="overflow-hidden rounded-3xl border border-brand-primary/30 bg-brand-primary p-8 text-white shadow-lg sm:p-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold">Eleve o visual da sua equipe hoje</h3>
              <p className="mt-2 text-white/90">
                Fale com um consultor para receber um orçamento com base nas suas preferências de modelo, tecido e personalização.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-brand-secondary shadow transition hover:bg-brand-complementary"
                >
                  <Phone className="h-5 w-5" /> Solicitar orçamento
                </a>
                <a
                  href="#colecoes"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/70 px-5 py-3 text-white transition hover:border-white hover:bg-white/10"
                >
                  <Shirt className="h-5 w-5" /> Ver coleções
                </a>
              </div>
            </div>
            <div className="aspect-[16/10] w-full rounded-2xl bg-[url('/placeholder/cta-jaleco.jpg')] bg-cover bg-center" />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contato" className="border-t border-brand-complementary bg-brand-background py-12">
      <Container className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary text-sm font-bold text-white">
              PJ
            </div>
            <div>
              <p className="text-base font-semibold text-brand-secondary">Personalize Jalecos</p>
              <p className="text-sm text-brand-secondary/70">Jalecos e scrubs personalizados para equipes que inspiram confiança.</p>
            </div>
          </div>
          <div className="mt-6 grid gap-3 text-sm text-brand-secondary/70">
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-brand-primary" /> (11) 99999-9999
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand-primary" /> contato@personalizejalecos.com
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand-primary" /> São Paulo, SP
            </p>
          </div>
        </div>
        <div className="grid gap-6">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-brand-secondary">Siga a Personalize</h4>
            <div className="mt-3 flex gap-3">
              <a
                href="https://instagram.com"
                className="inline-flex items-center gap-2 rounded-full border border-brand-complementary px-4 py-2 text-sm text-brand-secondary/70 transition hover:border-brand-primary/60 hover:text-brand-primary"
              >
                <Instagram className="h-4 w-4" /> Instagram
              </a>
              <a
                href="https://facebook.com"
                className="inline-flex items-center gap-2 rounded-full border border-brand-complementary px-4 py-2 text-sm text-brand-secondary/70 transition hover:border-brand-primary/60 hover:text-brand-primary"
              >
                <Facebook className="h-4 w-4" /> Facebook
              </a>
            </div>
          </div>
          <p className="text-xs text-brand-secondary/60">
            © {new Date().getFullYear()} Personalize Jalecos. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-brand-background text-brand-secondary">
      <NavBar />
      <Hero />
      <FeatureCards />
      <Colecoes />
      <CTA />
      <Footer />
    </div>
  );
}
