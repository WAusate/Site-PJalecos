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
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-brand-background via-brand-background to-brand-complementary/40">
      <Container className="relative py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-xl">
            <div className="flex justify-start">
              <Badge typography={typography}>{config.hero.badge}</Badge>
            </div>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-brand-secondary sm:text-6xl" style={{ fontFamily: typography.heading }}>
              {config.hero.title}
            </h1>
            <p className="mt-5 text-lg text-brand-secondary/70" style={{ fontFamily: typography.body }}>
              {config.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-start gap-3 sm:flex-row" style={{ fontFamily: typography.body }}>
              <a href={config.hero.primaryCta.href} className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-primary px-5 py-3 text-white shadow-lg transition hover:bg-brand-accent hover:shadow-xl">
                <ShoppingBag className="h-5 w-5" />
                {config.hero.primaryCta.label}
                <ArrowRight className="h-5 w-5 opacity-80 transition group-hover:translate-x-0.5" />
              </a>
              <a href={config.hero.secondaryCta.href} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-brand-primary/40 px-5 py-3 text-brand-primary transition hover:bg-brand-primary/10">
                <Sparkles className="h-5 w-5" />
                {config.hero.secondaryCta.label}
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-lg overflow-hidden rounded-3xl border border-brand-complementary bg-white shadow-2xl">
              {config.hero.images.map((image, index) => (
                <img key={image.src} src={image.src} alt={image.alt} className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${index === activeIndex ? "opacity-100" : "opacity-0"}`} />
              ))}
              <div className="absolute inset-x-6 bottom-6 flex items-center justify-center gap-2">
                {config.hero.images.map((_, index) => (
                  <button key={index} type="button" onClick={() => setActiveIndex(index)} className={`h-2.5 w-2.5 rounded-full border border-white/60 transition ${index === activeIndex ? "bg-brand-primary shadow" : "bg-white/50 hover:bg-white/80"}`} aria-label={`Mostrar imagem ${index + 1}`} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

// ... (FeatureCards, Colecoes, CTA, Footer iguais mas usando config+typography)

function AdminPanel({ siteConfig, onSave, onReset, typography }) {
  // (todo o código do painel que você já tinha aqui, idêntico)
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
      } catch {}
    }
  }, []);
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(siteConfig));
  }, [siteConfig]);

  const typography = useMemo(() => siteConfig.typography, [siteConfig.typography]);

  return (
    <div className="min-h-screen bg-brand-background text-brand-secondary">
      <NavBar config={siteConfig} typography={typography} />
      <Hero config={siteConfig} typography={typography} />
      <FeatureCards config={siteConfig} typography={typography} />
      <Colecoes config={siteConfig} typography={typography} />
      <CTA config={siteConfig} typography={typography} />
      <Footer config={siteConfig} typography={typography} />
      <AdminPanel siteConfig={siteConfig} onSave={(c)=>setSiteConfig(c)} onReset={()=>setSiteConfig(defaultSiteConfig)} typography={typography} />
    </div>
  );
}
