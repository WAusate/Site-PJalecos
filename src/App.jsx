import React, { useEffect, useMemo, useState } from "react";
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
  Lock,
  LogOut,
  Save,
  RefreshCw,
} from "lucide-react";
import defaultSiteConfig from "./config/defaultSiteConfig";

const STORAGE_KEY = "personalize-jalecos-site-config";
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || "personalize-admin";

const iconMap = {
  ShieldCheck,
  Wand2,
  Truck,
  Sparkles,
  ShoppingBag,
  Shirt,
  BadgeCheck,
  Phone,
};

function mergeConfig(base, override) {
  if (Array.isArray(base)) {
    return Array.isArray(override) ? override : base;
  }

  if (typeof base === "object" && base !== null) {
    const result = { ...base };
    if (override && typeof override === "object") {
      for (const key of Object.keys(override)) {
        result[key] = mergeConfig(base[key], override[key]);
      }
    }
    return result;
  }

  return override === undefined ? base : override;
}

function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

function Badge({ children, typography }) {
  return (
    <span
      className="inline-flex items-center rounded-full border border-brand-primary/40 bg-brand-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-brand-primary"
      style={{ fontFamily: typography?.body }}
    >
      {children}
    </span>
  );
}

function SectionTitle({ eyebrow, title, desc, typography }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <div className="mb-3">
          <Badge typography={typography}>{eyebrow}</Badge>
        </div>
      )}
      <h2
        className="text-3xl font-bold leading-tight tracking-tight text-brand-secondary sm:text-4xl"
        style={{ fontFamily: typography?.heading }}
      >
        {title}
      </h2>
      {desc && (
        <p className="mt-3 text-base text-brand-secondary/70" style={{ fontFamily: typography?.body }}>
          {desc}
        </p>
      )}
    </div>
  );
}

function IconRenderer({ name, className }) {
  const IconComponent = iconMap[name] || Sparkles;
  return <IconComponent className={className} />;
}

function NavBar({ config, typography }) {
  return (
    <div className="sticky top-0 z-40 border-b border-brand-complementary bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#hero" className="group inline-flex items-center gap-2" style={{ fontFamily: typography.body }}>
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-primary text-sm font-bold text-white">
            {config.brand.initials}
          </div>
          <span className="text-sm font-semibold tracking-wide text-brand-secondary group-hover:text-brand-primary">
            {config.brand.name}
          </span>
        </a>
        <nav className="hidden gap-6 md:flex" style={{ fontFamily: typography.body }}>
          {config.navigation.items.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-brand-secondary/70 transition hover:text-brand-primary">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={config.navigation.contactCta.href}
            className="group inline-flex items-center gap-2 rounded-xl bg-brand-primary px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-accent"
            style={{ fontFamily: typography.body }}
          >
            <Phone className="h-4 w-4" />
            <span>{config.navigation.contactCta.label}</span>
            <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
        </div>
      </Container>
    </div>
  );
}

function Hero({ config, typography }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % config.hero.images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [config.hero.images.length]);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-brand-background via-brand-background to-brand-complementary/40"
    >
      <Container className="relative py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <div className="flex justify-start">
              <Badge typography={typography}>{config.hero.badge}</Badge>
            </div>
            <h1
              className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-brand-secondary sm:text-6xl"
              style={{ fontFamily: typography.heading }}
            >
              {config.hero.title}
            </h1>
            <p className="mt-5 text-lg text-brand-secondary/70" style={{ fontFamily: typography.body }}>
              {config.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-start gap-3 sm:flex-row" style={{ fontFamily: typography.body }}>
              <a
                href={config.hero.primaryCta.href}
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-primary px-5 py-3 text-white shadow-lg transition hover:bg-brand-accent hover:shadow-xl"
              >
                <ShoppingBag className="h-5 w-5" />
                {config.hero.primaryCta.label}
                <ArrowRight className="h-5 w-5 opacity-80 transition group-hover:translate-x-0.5" />
              </a>
              <a
                href={config.hero.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-brand-primary/40 px-5 py-3 text-brand-primary transition hover:bg-brand-primary/10"
              >
                <Sparkles className="h-5 w-5" />
                {config.hero.secondaryCta.label}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative mx-auto aspect-[4/5] w-full max-w-lg overflow-hidden rounded-3xl border border-brand-complementary bg-white shadow-2xl">
              {config.hero.images.map((image, index) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
                    index === activeIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-x-6 bottom-6 flex items-center justify-center gap-2">
                {config.hero.images.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 w-2.5 rounded-full border border-white/60 transition ${
                      index === activeIndex ? "bg-brand-primary shadow" : "bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={`Mostrar imagem ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function FeatureCards({ config, typography }) {
  return (
    <section className="border-t border-brand-complementary bg-brand-background py-14">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {config.features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group rounded-2xl border border-brand-complementary bg-white p-6 shadow-sm transition hover:border-brand-primary/60 hover:shadow-lg"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                <IconRenderer name={feature.icon} className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-brand-secondary" style={{ fontFamily: typography.heading }}>
                {feature.title}
              </h3>
              <p className="mt-1 text-sm text-brand-secondary/70" style={{ fontFamily: typography.body }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Colecoes({ config, typography }) {
  return (
    <section id="colecoes" className="bg-brand-background py-20">
      <Container>
        <SectionTitle
          eyebrow={config.collections.eyebrow}
          title={config.collections.title}
          desc={config.collections.description}
          typography={typography}
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {config.collections.items.map((collection, index) => (
            <motion.a
              key={collection.title}
              href={config.hero.primaryCta.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-brand-complementary bg-white shadow-sm transition hover:border-brand-primary/60 hover:shadow-lg"
            >
              <div className="relative">
                <div
                  className="aspect-[4/5] w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${collection.img})` }}
                />
                <div className="absolute left-3 top-3">
                  <span className="rounded-full bg-brand-primary px-2 py-1 text-xs font-semibold text-white shadow">
                    {collection.tag}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-brand-secondary/60" style={{ fontFamily: typography.body }}>
                  <BadgeCheck className="h-4 w-4 text-brand-primary" />
                  Produção própria
                </div>
                <h3 className="mt-1 text-lg font-semibold text-brand-secondary" style={{ fontFamily: typography.heading }}>
                  {collection.title}
                </h3>
                <p className="mt-1 text-sm text-brand-secondary/70 line-clamp-2" style={{ fontFamily: typography.body }}>
                  {collection.description}
                </p>
                <div className="mt-3 inline-flex items-center gap-1 text-sm text-brand-primary transition group-hover:gap-2" style={{ fontFamily: typography.body }}>
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

function CTA({ config, typography }) {
  return (
    <section className="relative bg-brand-background py-20">
      <Container>
        <div className="overflow-hidden rounded-3xl border border-brand-primary/30 bg-brand-primary p-8 text-white shadow-lg sm:p-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold" style={{ fontFamily: typography.heading }}>
                {config.cta.title}
              </h3>
              <p className="mt-2 text-white/90" style={{ fontFamily: typography.body }}>
                {config.cta.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-3" style={{ fontFamily: typography.body }}>
                <a
                  href={config.cta.primaryCta.href}
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-brand-secondary shadow transition hover:bg-brand-complementary"
                >
                  <Phone className="h-5 w-5" /> {config.cta.primaryCta.label}
                </a>
                <a
                  href={config.cta.secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/70 px-5 py-3 text-white transition hover:border-white hover:bg-white/10"
                >
                  <Shirt className="h-5 w-5" /> {config.cta.secondaryCta.label}
                </a>
              </div>
            </div>
            <div
              className="aspect-[16/10] w-full rounded-2xl bg-cover bg-center"
              style={{ backgroundImage: `url(${config.cta.image})` }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Footer({ config, typography }) {
  return (
    <footer id="contato" className="border-t border-brand-complementary bg-brand-background py-12">
      <Container className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="flex items-center gap-2" style={{ fontFamily: typography.body }}>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary text-sm font-bold text-white">
              {config.brand.initials}
            </div>
            <div>
              <p className="text-base font-semibold text-brand-secondary" style={{ fontFamily: typography.heading }}>
                {config.brand.name}
              </p>
              <p className="text-sm text-brand-secondary/70">{config.brand.tagline}</p>
            </div>
          </div>
          <div className="mt-6 grid gap-3 text-sm text-brand-secondary/70" style={{ fontFamily: typography.body }}>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-brand-primary" /> {config.contact.phone}
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand-primary" /> {config.contact.email}
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand-primary" /> {config.contact.location}
            </p>
          </div>
        </div>
        <div className="grid gap-6">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-brand-secondary" style={{ fontFamily: typography.heading }}>
              Siga a Personalize
            </h4>
            <div className="mt-3 flex gap-3" style={{ fontFamily: typography.body }}>
              {config.contact.social.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  className="inline-flex items-center gap-2 rounded-full border border-brand-complementary px-4 py-2 text-sm text-brand-secondary/70 transition hover:border-brand-primary/60 hover:text-brand-primary"
                >
                  {social.label === "Instagram" ? <Instagram className="h-4 w-4" /> : <Facebook className="h-4 w-4" />}
                  {social.label}
                </a>
              ))}
            </div>
          </div>
          <p className="text-xs text-brand-secondary/60" style={{ fontFamily: typography.body }}>
            © {new Date().getFullYear()} {config.brand.name}. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}

function AdminPanel({ siteConfig, onSave, onReset, typography }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [draft, setDraft] = useState(JSON.stringify(siteConfig, null, 2));
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      setDraft(JSON.stringify(siteConfig, null, 2));
    }
  }, [isAuthenticated, siteConfig]);

  const closePanel = () => {
    setIsOpen(false);
    setError("");
    setFeedback("");
    setPassword("");
  };

  const handleAuth = (event) => {
    event.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Senha inválida. Tente novamente.");
    }
  };

  const handleSave = () => {
    try {
      const parsed = JSON.parse(draft);
      onSave(parsed);
      setFeedback("Configurações atualizadas com sucesso!");
      setTimeout(() => setFeedback(""), 3000);
    } catch (err) {
      setError("JSON inválido. Verifique a formatação e tente novamente.");
    }
  };

  const handleReset = () => {
    onReset();
    setDraft(JSON.stringify(defaultSiteConfig, null, 2));
    setFeedback("Configurações restauradas para o padrão.");
    setTimeout(() => setFeedback(""), 3000);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-brand-secondary px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-brand-primary"
        style={{ fontFamily: typography.body }}
      >
        <Lock className="h-4 w-4" /> Área Administrativa
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
          <div className="w-full max-w-3xl rounded-3xl bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-brand-secondary" style={{ fontFamily: typography.heading }}>
                Painel administrativo
              </h2>
              <button
                type="button"
                onClick={() => {
                  if (!isAuthenticated) {
                    closePanel();
                  } else {
                    setIsAuthenticated(false);
                    setDraft(JSON.stringify(siteConfig, null, 2));
                  }
                }}
                className="inline-flex items-center gap-1 rounded-full border border-brand-complementary px-3 py-1 text-xs text-brand-secondary/70 transition hover:border-brand-primary/60 hover:text-brand-primary"
                style={{ fontFamily: typography.body }}
              >
                <LogOut className="h-3.5 w-3.5" />
                {isAuthenticated ? "Sair" : "Fechar"}
              </button>
            </div>

            {!isAuthenticated ? (
              <form onSubmit={handleAuth} className="mt-6 space-y-4" style={{ fontFamily: typography.body }}>
                <p className="text-sm text-brand-secondary/80">
                  Informe a senha administrativa para liberar a edição das informações do site.
                </p>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Senha administrativa"
                  className="w-full rounded-xl border border-brand-complementary px-4 py-3 text-sm outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/30"
                />
                {error && <p className="text-sm text-red-500">{error}</p>}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-xl bg-brand-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-accent"
                  >
                    <Lock className="h-4 w-4" /> Entrar
                  </button>
                </div>
              </form>
            ) : (
              <div className="mt-6 space-y-4" style={{ fontFamily: typography.body }}>
                <p className="text-sm text-brand-secondary/80">
                  Edite o JSON abaixo para atualizar textos, cores, fontes e imagens. As alterações são salvas localmente no navegador e aplicadas imediatamente.
                </p>
                <textarea
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  className="h-72 w-full rounded-2xl border border-brand-complementary bg-brand-background px-4 py-3 font-mono text-xs text-brand-secondary outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
                />
                {error && <p className="text-sm text-red-500">{error}</p>}
                {feedback && <p className="text-sm text-brand-primary">{feedback}</p>}
                <div className="flex flex-wrap justify-end gap-2">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 rounded-xl border border-brand-complementary px-4 py-2 text-sm text-brand-secondary transition hover:border-brand-primary/60 hover:text-brand-primary"
                  >
                    <RefreshCw className="h-4 w-4" /> Restaurar padrão
                  </button>
                  <button
                    type="button"
                    onClick={handleSave}
                    className="inline-flex items-center gap-2 rounded-xl bg-brand-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-accent"
                  >
                    <Save className="h-4 w-4" /> Salvar alterações
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default function App() {
  const [siteConfig, setSiteConfig] = useState(defaultSiteConfig);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setSiteConfig((prev) => mergeConfig(prev, parsed));
      } catch (err) {
        console.warn("Não foi possível carregar a configuração salva:", err);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(siteConfig));

    const root = document.documentElement;
    root.style.setProperty("--brand-primary", siteConfig.colors.primary);
    root.style.setProperty("--brand-secondary", siteConfig.colors.secondary);
    root.style.setProperty("--brand-background", siteConfig.colors.background);
    root.style.setProperty("--brand-complementary", siteConfig.colors.complementary);
    root.style.setProperty("--brand-accent", siteConfig.colors.highlight);
    root.style.setProperty("--font-heading", siteConfig.typography.heading);
    root.style.setProperty("--font-body", siteConfig.typography.body);

    document.body.style.backgroundColor = siteConfig.colors.background;
    document.body.style.color = siteConfig.colors.secondary;
    document.body.style.fontFamily = siteConfig.typography.body;
  }, [siteConfig]);

  const typography = useMemo(
    () => ({ heading: siteConfig.typography.heading, body: siteConfig.typography.body }),
    [siteConfig.typography]
  );

  const handleSaveConfig = (newConfig) => {
    setSiteConfig((prev) => mergeConfig(prev, newConfig));
  };

  const handleResetConfig = () => {
    setSiteConfig(defaultSiteConfig);
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  };

  return (
    <div className="min-h-screen bg-brand-background text-brand-secondary">
      <NavBar config={siteConfig} typography={typography} />
      <Hero config={siteConfig} typography={typography} />
      <FeatureCards config={siteConfig} typography={typography} />
      <Colecoes config={siteConfig} typography={typography} />
      <CTA config={siteConfig} typography={typography} />
      <Footer config={siteConfig} typography={typography} />
      <AdminPanel siteConfig={siteConfig} onSave={handleSaveConfig} onReset={handleResetConfig} typography={typography} />
    </div>
  );
}
