import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  Eye,
  ExternalLink,
  Sun,
  Moon,
  Menu,
  X,
  Sparkles,
  Quote,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
} from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

// Assets — servis depuis /public/assets (fonctionnent aussi hors Lovable).
const jo1 = "/assets/jo/me/jo-1.jpeg";
const jo2 = "/assets/jo/me/jo-2.jpeg";
const cvStage = "/assets/jo/cv/CV_Josephine_Stage.pdf";
const cvEmploi = "/assets/jo/cv/CV_Josephine_Emploi.pdf";

const acadpayShots = [
  "/assets/jo/projects/acadpay/acadpay-1.png",
  "/assets/jo/projects/acadpay/acadpay-2.png",
  "/assets/jo/projects/acadpay/acadpay-3.png",
  "/assets/jo/projects/acadpay/acadpay-4.png",
  "/assets/jo/projects/acadpay/acadpay-5.png",
];
const institutShots = [
  "/assets/jo/projects/institut/institut-1.png",
  "/assets/jo/projects/institut/institut-2.png",
  "/assets/jo/projects/institut/institut-3.png",
];
const aqualiaShots = [
  "/assets/jo/projects/aqualia/aqualia-1.png",
  "/assets/jo/projects/aqualia/aqualia-2.png",
  "/assets/jo/projects/aqualia/aqualia-3.png",
  "/assets/jo/projects/aqualia/aqualia-4.png",
];
const edunoteShots = [
  "/assets/jo/projects/edunote/edu1.jpg",
  "/assets/jo/projects/edunote/edu2.jpg",
  "/assets/jo/projects/edunote/edu3.jpg",
];

export const Route = createFileRoute("/")({
  component: Index,
});

const WA_NUMBER = "2290154862418"; // +229 01 54 86 24 18 (indicatif + numéro)
const WA_LINK = `https://wa.me/${WA_NUMBER}`;
const PHONE_DISPLAY = "+229 01 54 86 24 18";
const EMAIL = "josephinesenou11@gmail.com";

type ProjectDef = {
  id: string;
  index: string;
  name: string;
  tagline: string;
  year: string;
  role: string;
  status?: string;
  description: string;
  stack: string[];
  highlights: string[];
  images: string[];
  links?: { label: string; href: string }[];
};

const projects: ProjectDef[] = [
  {
    id: "acadpay",
    index: "01",
    name: "AcadPay",
    tagline: "Plateforme web & mobile de gestion scolaire",
    year: "2026",
    role: "Développement fullstack — projet de fin de licence",
    description:
      "Solution complète de gestion universitaire : inscriptions, paiement des frais de scolarité et consultation des notes. Cinq portails web (étudiant, secrétaire, comptable, admin, superadmin) et une application mobile Flutter interconnectée via une API REST.",
    stack: ["PHP", "MySQL", "Flutter", "API REST", "FedaPay"],
    highlights: [
      "5 portails web métier",
      "Application mobile Flutter",
      "Paiement Mobile Money via FedaPay",
      "Projet soutenu — Mention Très Bien",
    ],
    images: acadpayShots,
  },
  {
    id: "institut",
    name: "Institut Saint-Hélier",
    index: "02",
    tagline: "Plateforme pour un institut médical",
    year: "2026",
    role: "Développement fullstack — Node.js Laravel",
    description:
      "Plateforme pour l'Institut Saint-Hélier : présentation de l'établissement, spécialités médicales, équipe de médecins et prise de rendez-vous en ligne. Interface soignée, responsive et pensée pour rassurer les patients.",
    stack: ["Node.js", "Laravel", "React"],
    highlights: [
      "Présentation des spécialités & médecins",
      "Prise de rendez-vous en ligne",
      "Design éditorial calme et responsive",
    ],
    images: institutShots,
  },
  {
    id: "aqualia",
    name: "Aqualia",
    index: "03",
    tagline: "Plateforme web autour de l'eau & du bien-être",
    year: "2026",
    role: "Développement web — front & back",
    description:
      "Projet Aqualia : plateforme web centrée sur les services liés à l'eau et au bien-être. Interface fluide, parcours utilisateur simple, et back-office pour gérer le contenu.",
    stack: ["Node.js", "Laravel", "React"],
    highlights: [
      "Front élégant et fluide",
      "Back-office de gestion",
      "Optimisation mobile",
    ],
    images: aqualiaShots,
    links: [{ label: "GitHub", href: "#contact" }],
  },
  {
    id: "edunote",
    name: "EduNote",
    index: "04",
    tagline: "Plateforme de gestion des notes — de la 6ème à la Terminale",
    year: "2026",
    role: "Développement fullstack — PHP & MySQL",
    description:
      "Plateforme de gestion des notes scolaires couvrant tout le secondaire (6ème à Terminale), avec accès multi-rôles : élève, administrateur, enseignant et comptable. L'accès au bulletin est conditionné au statut de paiement, avec un back-office complet pour la saisie des notes et le suivi des élèves.",
    stack: ["PHP", "MySQL", "Bootstrap 5"],
    highlights: [
      "Accès multi-rôles (élève, admin, enseignant, comptable)",
      "Bulletins conditionnés au paiement",
      "Couverture complète 6ème — Terminale",
    ],
    images: edunoteShots,
  },
];

type LightboxState = { images: string[]; index: number } | null;

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  useEffect(() => {
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "smooth";
    return () => {
      html.style.scrollBehavior = prev;
    };
  }, []);

  const openLightbox = (images: string[], index: number) => setLightbox({ images, index });
  const closeLightbox = () => setLightbox(null);
  const navigateLightbox = (index: number) =>
    setLightbox((lb) => (lb ? { ...lb, index } : lb));

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/25 selection:text-foreground">
      {/* Grain / paper texture overlay */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.05] mix-blend-multiply dark:mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' /%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='0.7'/%3E%3C/svg%3E\")",
        }}
      />

      <NavBar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        theme={theme}
        toggleTheme={toggleTheme}
        mounted={mounted}
      />

      <main className="relative z-10">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects onImageClick={openLightbox} />
        <Experience />
        <Contact />
      </main>

      <Footer />

      <Lightbox lightbox={lightbox} onClose={closeLightbox} onNavigate={navigateLightbox} />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Lightbox                                                                   */
/* -------------------------------------------------------------------------- */

function Lightbox({
  lightbox,
  onClose,
  onNavigate,
}: {
  lightbox: LightboxState;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const isOpen = !!lightbox;

  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!lightbox) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") {
        onNavigate((lightbox.index + 1) % lightbox.images.length);
      }
      if (e.key === "ArrowLeft") {
        onNavigate((lightbox.index - 1 + lightbox.images.length) % lightbox.images.length);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, onClose, onNavigate]);

  if (!lightbox) return null;
  const { images, index } = lightbox;
  const hasMultiple = images.length > 1;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Fermer"
        className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full border border-background/30 text-background hover:bg-background/10 transition-colors"
      >
        <X className="w-5 h-5" />
      </button>

      {hasMultiple && (
        <div className="absolute top-5 left-5 text-xs uppercase tracking-[0.3em] text-background/70">
          {index + 1} / {images.length}
        </div>
      )}

      {hasMultiple && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((index - 1 + images.length) % images.length);
          }}
          aria-label="Image précédente"
          className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full border border-background/30 text-background hover:bg-background/10 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}

      <img
        src={images[index]}
        alt=""
        onClick={(e) => e.stopPropagation()}
        className="max-w-[90vw] max-h-[85vh] object-contain rounded-2xl shadow-2xl select-none"
      />

      {hasMultiple && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((index + 1) % images.length);
          }}
          aria-label="Image suivante"
          className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full border border-background/30 text-background hover:bg-background/10 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* NavBar                                                                     */
/* -------------------------------------------------------------------------- */

function NavBar({
  menuOpen,
  setMenuOpen,
  theme,
  toggleTheme,
  mounted,
}: {
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
  theme: string;
  toggleTheme: () => void;
  mounted: boolean;
}) {
  const links = [
    { href: "#about", label: "À propos" },
    { href: "#skills", label: "Compétences" },
    { href: "#projects", label: "Projets" },
    { href: "#experience", label: "Parcours" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2 group">
          <span className="font-serif text-xl md:text-2xl tracking-tight">Josephine</span>
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground hidden sm:inline">
            Senou
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-foreground/80 hover:text-primary transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label="Basculer le thème"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-border/70 hover:bg-secondary transition-colors"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            Me contacter
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-border/70"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur">
          <div className="px-5 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="py-1.5 text-sm text-foreground/80 hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-full"
            >
              Me contacter <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/* Hero                                                                       */
/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <section id="top" className="relative pt-16 md:pt-24 pb-16 md:pb-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-7 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary mb-6">
            <span className="w-8 h-px bg-primary" />
            Portfolio · 2026
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] leading-[1.02] tracking-tight">
            Josephine
            <br />
            <span className="italic text-primary">Senou</span>
            <span className="text-accent">.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-xl leading-relaxed">
            Développeuse <span className="font-serif italic">Web & Mobile</span> junior.
            Je conçois des interfaces claires et des systèmes robustes, du site vitrine
            aux plateformes métier — au Bénin, avec rigueur et attention au détail.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-medium hover:bg-primary transition-colors"
            >
              Voir mes projets
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </a>
            <a
              href={cvEmploi}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-full font-medium hover:bg-secondary transition-colors"
            >
              <Eye className="w-4 h-4" />
              CV (emploi)
            </a>
            <a
              href={cvStage}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-full font-medium hover:bg-secondary transition-colors"
            >
              <Eye className="w-4 h-4" />
              CV (stage)
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl">
            <Stat kpi="Très Bien" label="Mention Licence" />
            <Stat kpi="2" label="Stages Beta2" />
            <Stat kpi="4+" label="Projets livrés" />
            <Stat kpi="Bénin" label="Basée à Abomey-Calavi Zogbadjè" />
          </div>
        </div>

        {/* Portrait */}
        <div className="lg:col-span-5 order-1 lg:order-2">
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-accent/40 blur-2xl" />
            <div className="absolute -bottom-8 -right-6 w-32 h-32 rounded-full bg-primary/30 blur-3xl" />

            <div className="relative rounded-[2rem] overflow-hidden border border-border shadow-2xl aspect-[3/4]">
              <img
                src={jo1}
                alt="Portrait de Josephine Senou, développeuse web & mobile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/25 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="absolute -bottom-4 -left-4 md:-left-8 bg-background border border-border rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
              </span>
              <div className="text-xs">
                <div className="font-semibold">Disponible</div>
                <div className="text-muted-foreground">pour stage & emploi</div>
              </div>
            </div>

            <div className="hidden md:flex absolute -top-4 -right-4 bg-background border border-border rounded-full px-3 py-2 items-center gap-2 shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium">HECM · 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ kpi, label }: { kpi: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-3xl md:text-4xl text-primary">{kpi}</div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
        {label}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Marquee                                                                    */
/* -------------------------------------------------------------------------- */

function Marquee() {
  const words = [
    "PHP",
    "Laravel",
    "React",
    "MySQL",
    "Flutter",
    "Android",
    "HTML · CSS",
    "API REST",
    "Tailwind",
    "UI soignée",
  ];
  return (
    <section
      aria-hidden
      className="relative border-y border-border bg-surface/60 py-4 overflow-hidden"
    >
      <div className="flex whitespace-nowrap animate-marquee gap-10 font-serif text-2xl md:text-3xl italic text-foreground/70">
        {[...words, ...words, ...words].map((w, i) => (
          <span key={i} className="flex items-center gap-10">
            {w}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .animate-marquee { animation: marquee 40s linear infinite; }
      `}</style>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* About                                                                      */
/* -------------------------------------------------------------------------- */

function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-4 lg:sticky lg:top-24">
          <SectionLabel index="01" label="À propos" />
          <div className="mt-8 rounded-3xl overflow-hidden border border-border aspect-[4/5]">
            <img src={jo2} alt="Josephine Senou" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="lg:col-span-8">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
            Une <span className="italic text-primary">développeuse</span> attentive à
            chaque détail — du <span className="italic">pixel</span> à la{" "}
            <span className="italic">base de données</span>.
          </h2>

          <div className="mt-8 space-y-5 text-lg text-foreground/85 leading-relaxed">
            <p>
              Diplômée en <strong>Systèmes Informatiques & Logiciels</strong> à HECM
              (Haute École de Commerce et de Management) avec la mention{" "}
              <strong className="text-primary">Très Bien</strong>, je conçois et développe
              des applications web et mobiles pensées pour être utilisées, pas seulement
              présentées.
            </p>
            <p>
              Deux stages chez <strong>Beta2 Afrique Technologie</strong> m'ont formée au
              travail en équipe, à la gestion de vraies bases de données et à la
              livraison de projets qui passent en production. Mon projet de fin
              d'études, <em>AcadPay</em>, illustre le mieux ma démarche : cinq portails,
              une app mobile, un système de paiement — pensés ensemble.
            </p>
            <p>
              Ce que je cherche : une équipe où l'on prend soin du code comme du produit,
              et où l'exigence est un plaisir partagé.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            <InfoCard label="Formation" value="Licence SIL — HECM (2023–2026)" />
            <InfoCard label="Localisation" value="Abomey-Calavi Zogbadjè, Bénin" />
            <InfoCard label="Langues" value="Français · Fon · Goun · Anglais (déb.)" />
            <InfoCard label="Disponibilité" value="Stage & premier emploi" />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card/60 backdrop-blur p-5">
      <div className="text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
      <div className="mt-1 font-medium">{value}</div>
    </div>
  );
}

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-serif text-2xl text-primary">{index}</span>
      <span className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
        {label}
      </span>
      <span className="flex-1 h-px bg-border" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Skills                                                                     */
/* -------------------------------------------------------------------------- */

function Skills() {
  const groups = [
    {
      title: "Front-end",
      items: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
    },
    {
      title: "Back-end",
      items: ["PHP", "Laravel", "API REST", "Node basics"],
    },
    {
      title: "Mobile",
      items: ["Android Studio (Java)", "Flutter (intégration)"],
    },
    {
      title: "Bases de données",
      items: ["MySQL", "PostgreSQL (init.)"],
    },
    {
      title: "Outils",
      items: ["Git & GitHub", "VS Code", "Postman"],
    },
    {
      title: "Soft skills",
      items: ["Rigueur", "Esprit d'équipe", "Curiosité", "Autonomie"],
    },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 bg-surface/50 border-y border-border">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionLabel index="02" label="Compétences" />
        <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl max-w-3xl">
          Une <span className="italic text-primary">boîte à outils</span> pensée pour
          livrer des produits complets.
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g) => (
            <div
              key={g.title}
              className="group relative rounded-3xl border border-border bg-card/70 backdrop-blur p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-2xl">{g.title}</h3>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {String(groups.indexOf(g) + 1).padStart(2, "0")}
                </span>
              </div>
              <ul className="mt-5 space-y-2">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-center gap-2 text-sm text-foreground/85"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Projects                                                                   */
/* -------------------------------------------------------------------------- */

function Projects({
  onImageClick,
}: {
  onImageClick: (images: string[], index: number) => void;
}) {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionLabel index="03" label="Projets" />
        <div className="mt-6 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl max-w-3xl">
            Sélection de <span className="italic text-primary">travaux</span> livrés &
            en cours.
          </h2>
          <p className="text-muted-foreground max-w-md">
            Des projets qui résument bien ma manière de travailler : penser le
            produit, soigner l'interface, livrer proprement.
          </p>
        </div>

        <div className="mt-20 space-y-32">
          {projects.map((p, i) => (
            <ProjectBlock
              key={p.id}
              project={p}
              reverse={i % 2 === 1}
              onImageClick={onImageClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectBlock({
  project,
  reverse,
  onImageClick,
}: {
  project: ProjectDef;
  reverse: boolean;
  onImageClick: (images: string[], index: number) => void;
}) {
  return (
    <article className="grid lg:grid-cols-12 gap-10 items-center">
      <div
        className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""} space-y-4`}
      >
        <ImageStack images={project.images} onImageClick={onImageClick} />
      </div>

      <div className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
        <div className="flex items-baseline gap-4">
          <span className="font-serif text-5xl md:text-6xl text-accent/70">
            {project.index}
          </span>
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {project.year} · {project.role}
          </span>
        </div>

        <h3 className="mt-3 font-serif text-3xl md:text-4xl">
          {project.name}
          <span className="text-primary">.</span>
        </h3>
        <p className="mt-2 font-serif italic text-lg text-primary/90">
          {project.tagline}
        </p>

        <p className="mt-5 text-foreground/85 leading-relaxed">
          {project.description}
        </p>

        <ul className="mt-5 space-y-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-foreground/85">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="text-xs px-3 py-1 rounded-full border border-border bg-secondary/60 text-foreground/80"
            >
              {s}
            </span>
          ))}
        </div>

        {project.links && project.links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-4">
            {project.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4"
              >
                {l.label}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

function ImageStack({
  images,
  onImageClick,
}: {
  images: string[];
  onImageClick: (images: string[], index: number) => void;
}) {
  const [main, ...rest] = images;
  return (
    <div className="space-y-3">
      <button
        type="button"
        onClick={() => onImageClick(images, 0)}
        aria-label="Agrandir l'image"
        className="group relative block w-full rounded-3xl overflow-hidden border border-border shadow-xl bg-surface cursor-zoom-in"
      >
        <img
          src={main}
          alt=""
          loading="lazy"
          className="w-full h-auto object-cover aspect-[16/10] transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity w-11 h-11 rounded-full bg-background/90 flex items-center justify-center">
            <ZoomIn className="w-5 h-5 text-foreground" />
          </span>
        </div>
      </button>
      {rest.length > 0 && (
        <div
          className="grid gap-3"
          style={{ gridTemplateColumns: `repeat(${Math.min(rest.length, 4)}, minmax(0, 1fr))` }}
        >
          {rest.map((src, i) => (
            <button
              type="button"
              key={i}
              onClick={() => onImageClick(images, i + 1)}
              aria-label="Agrandir l'image"
              className="group relative block rounded-2xl overflow-hidden border border-border bg-surface cursor-zoom-in"
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity w-8 h-8 rounded-full bg-background/90 flex items-center justify-center">
                  <ZoomIn className="w-3.5 h-3.5 text-foreground" />
                </span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Experience / Timeline                                                      */
/* -------------------------------------------------------------------------- */

function Experience() {
  const items = [
    {
      period: "Fév. 2026 — Mai 2026",
      title: "Stage — Développement Web",
      org: "Beta2 Afrique Technologie",
      desc: "Développement d'applications web avec HTML, CSS, PHP, MySQL. Conception et gestion de bases de données pour des projets clients.",
    },
    {
      period: "Juil. 2025 — Août 2025",
      title: "Stage — Développement Web & Mobile",
      org: "Beta2 Afrique Technologie",
      desc: "Applications web et mobiles avec HTML, CSS, PHP, MySQL, Android Studio & Java. Premiers projets en équipe.",
    },
    {
      period: "2023 — 2026",
      title: "Licence — Systèmes Informatiques & Logiciels",
      org: "HECM · Haute École de Commerce et de Management",
      desc: "Formation complète en développement, bases de données, réseaux. Projet de fin d'études : AcadPay. Mention Très Bien.",
    },
    {
      period: "2020 — 2023",
      title: "DT-IMI",
      org: "Lycée Technique et Professionnel de P/N",
      desc: "Diplôme de Technicien en Informatique de gestion et Maintenance Informatique.",
    },
  ];
  return (
    <section id="experience" className="py-24 md:py-32 bg-surface/50 border-y border-border">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionLabel index="04" label="Parcours" />
        <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl max-w-3xl">
          Une <span className="italic text-primary">trajectoire</span> qui alterne
          école, stages et projets réels.
        </h2>

        <ol className="mt-14 relative border-l border-border pl-8 space-y-12">
          {items.map((it, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-[42px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary" />
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                {it.period}
              </div>
              <h3 className="mt-1 font-serif text-2xl md:text-3xl">{it.title}</h3>
              <div className="text-primary italic font-serif">{it.org}</div>
              <p className="mt-3 text-foreground/80 max-w-2xl">{it.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Contact                                                                    */
/* -------------------------------------------------------------------------- */

function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionLabel index="05" label="Contact" />

        <div className="mt-8 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05]">
              Discutons de votre
              <br />
              <span className="italic text-primary">prochain projet</span>
              <span className="text-accent">.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/80 max-w-xl">
              Ouverte aux opportunités de stage, de premier emploi et aux
              collaborations freelance. Je réponds en général sous 24 heures.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-medium hover:bg-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                Écrire un email
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-full font-medium hover:bg-secondary transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-3">
            <ContactRow
              icon={<Mail className="w-4 h-4" />}
              label="Email"
              value={EMAIL}
              href={`mailto:${EMAIL}`}
            />
            <ContactRow
              icon={<Phone className="w-4 h-4" />}
              label="Téléphone"
              value={PHONE_DISPLAY}
              href={`tel:+2290154862418`}
            />
            <ContactRow
              icon={<MessageCircle className="w-4 h-4" />}
              label="WhatsApp"
              value={PHONE_DISPLAY}
              href={WA_LINK}
              external
            />
            <ContactRow
              icon={<Linkedin className="w-4 h-4" />}
              label="LinkedIn"
              value="Josephine SENOU"
              href= {<https://www.linkedin.com/in/josephine-senou-936b17421>},
            />
            <ContactRow
              icon={<MapPin className="w-4 h-4" />}
              label="Localisation"
              value="Abomey-Calavi Zogbadjè, Bénin"
            />

            <div className="mt-6 rounded-3xl border border-border bg-card/60 backdrop-blur p-6">
              <Quote className="w-5 h-5 text-primary mb-3" />
              <p className="font-serif italic text-lg leading-relaxed">
                « Le vrai luxe d'un projet, c'est qu'on ait pris le temps de bien le
                faire. »
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const inner = (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-card/60 backdrop-blur px-5 py-4 hover:border-primary/60 transition-colors">
      <div className="flex items-center gap-4 min-w-0">
        <span className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
          {icon}
        </span>
        <div className="min-w-0">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">
            {label}
          </div>
          <div className="truncate font-medium">{value}</div>
        </div>
      </div>
      {href && <ArrowUpRight className="w-4 h-4 text-muted-foreground shrink-0" />}
    </div>
  );
  if (!href) return inner;
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="block"
    >
      {inner}
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/* Footer                                                                     */
/* -------------------------------------------------------------------------- */

function Footer() {
  return (
    <footer className="relative z-10 border-t border-border py-10 mt-8">
      <div className="mx-auto max-w-7xl px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="font-serif">
          © 2026 <span className="italic text-foreground">Josephine Senou</span> — Tous
          droits réservés
        </div>
        <div className="flex items-center gap-5">
          <a href={`mailto:${EMAIL}`} className="hover:text-primary transition-colors">
            Email
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            WhatsApp
          </a>
          <a href="#top" className="hover:text-primary transition-colors">
            Retour en haut ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
