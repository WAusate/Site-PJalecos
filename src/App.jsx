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

const isBrowser = typeof window !== "undefined";
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

function applyTheme(config) {
  if (!isBrowser) return;

  const palette = {
    ...defaultSiteConfig.colors,
    ...(config?.colors ?? {}),
  };
  const fonts = {
    ...defaultSiteConfig.typography,
    ...(config?.typography ?? {}),
  };

  const root = document.documentElement;
  if (root) {
    root.style.setProperty("--brand-primary", palette.primary);
    root.style.setProperty("--brand-secondary", palette.secondary);
    root.style.setProperty("--brand-background", palette.background);
    root.style.setProperty("--brand-complementary", palette.complementary);
    root.style.setProperty("--brand-accent", palette.highlight);
    root.style.setProperty("--font-heading", fonts.heading);
    root.style.setProperty("--font-body", fonts.body);
  }

  if (document.body) {
    document.body.style.backgroundColor = palette.background;
    document.body.style.color = palette.secondary;
    document.body.style.fontFamily = fonts.body;
  }
}

function ConfigErrorScreen({ onReset, error }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-brand-background px-6 text-center text-brand-secondary">
      <div className="max-w-md space-y-4">
        <h1 className="text-2xl font-semibold">Não foi possível carregar as configurações personalizadas</h1>
        <p className="text-sm text-brand-secondary/70">
          Encontramos um erro ao aplicar as alterações salvas. Isso pode acontecer quando uma edição manual fica incompleta ou corrompe os dados locais.
        </p>
        {error ? (
          <pre className="whitespace-pre-wrap break-words rounded-xl bg-brand-complementary/40 p-3 text-left text-xs text-brand-secondary/80">
            {error.message}
          </pre>
        ) : null}
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-2 rounded-xl bg-brand-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-accent"
        >
          <RefreshCw className="h-4 w-4" /> Restaurar configurações padrões
        </button>
      </div>
    </div>
  );
}

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

// ... (NavBar, Hero, FeatureCards, Colecoes, CTA, Footer, AdminPanel iguais à versão Codex)

export default function App() {
  const [siteConfig, setSiteConfig] = useState(defaultSiteConfig);
  const [configError, setConfigError] = useState(null);

  useEffect(() => {
    if (!isBrowser) return;
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setSiteConfig((prev) => mergeConfig(prev, parsed));
      }
    } catch (err) {
      console.error("Não foi possível carregar a configuração salva:", err);
      if (err instanceof SyntaxError) {
        try {
          window.localStorage.removeItem(STORAGE_KEY);
        } catch (storageErr) {
          console.warn("Falha ao limpar configurações corrompidas:", storageErr);
        }
      } else {
        setConfigError(err);
      }
    }
  }, []);

  useEffect(() => {
    if (!isBrowser) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(siteConfig));
    } catch (err) {
      console.warn("Falha ao salvar as configurações locais:", err);
    }

    try {
      applyTheme(siteConfig);
    } catch (err) {
      console.error("Não foi possível aplicar o tema personalizado:", err);
      setConfigError(err);
    }
  }, [siteConfig]);

  const typography = useMemo(
    () => ({ heading: siteConfig.typography.heading, body: siteConfig.typography.body }),
    [siteConfig.typography]
  );

  const handleSaveConfig = (newConfig) => {
    setConfigError(null);
    setSiteConfig((prev) => mergeConfig(prev, newConfig));
  };

  const handleResetConfig = () => {
    setConfigError(null);
    setSiteConfig(defaultSiteConfig);
    if (isBrowser) {
      try {
        window.localStorage.removeItem(STORAGE_KEY);
      } catch (err) {
        console.warn("Não foi possível limpar o armazenamento local:", err);
      }
      applyTheme(defaultSiteConfig);
    }
  };

  if (configError) {
    return <ConfigErrorScreen error={configError} onReset={handleResetConfig} />;
  }

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
