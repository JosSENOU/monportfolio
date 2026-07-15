# Portfolio — Josephine Senou

Portfolio personnel de **Josephine Senou**, développeuse web & mobile junior basée à Abomey-Calavi Zogbadjè, Bénin — étudiante en Licence Professionnelle SIL (HECM Calavi).

Site vitrine one-page présentant son profil, ses compétences, ses projets (AcadPay, Institut Saint-Hélier, Aqualia, EduNote), son parcours et un formulaire de contact.

## Stack technique

- **[TanStack Start](https://tanstack.com/start)** — framework fullstack React (SSR)
- **[TanStack Router](https://tanstack.com/router)** — routing file-based
- **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** (style *new-york*) — composants basés sur Radix UI
- **lucide-react** — icônes
- **Vite** — bundler & dev server

## Structure du projet

```
src/
├── routes/
│   ├── __root.tsx        # Layout racine, <head>, meta tags, favicon
│   ├── index.tsx         # Page unique du portfolio (Hero, Projets, Contact...)
│   └── sitemap[.]xml.ts  # Génération du sitemap
├── components/ui/        # Composants shadcn/ui
├── hooks/
│   ├── use-theme.tsx     # Gestion thème clair/sombre
│   └── use-mobile.tsx    # Détection responsive
├── lib/utils.ts          # Helpers (cn, etc.)
├── styles.css            # Variables de thème (couleurs, tokens)
├── router.tsx             # Config du router
├── server.ts / start.ts   # Entrées serveur TanStack Start
public/
└── assets/
    ├── jo/me/             # Photos de profil
    ├── jo/cv/              # CV (emploi / stage) en PDF
    ├── jo/projects/        # Captures d'écran par projet (acadpay, institut, aqualia, edunote)
    └── icons/               # Favicon / icônes du site
```

## Prérequis

- **Node.js** ≥ 18
- **npm** (ou pnpm/yarn, en adaptant les commandes)

## Installation

```bash
npm install
```

## Scripts disponibles

| Commande            | Description                                  |
|---------------------|-----------------------------------------------|
| `npm run dev`        | Démarre le serveur de développement (Vite)   |
| `npm run build`       | Build de production                          |
| `npm run build:dev`   | Build en mode développement                  |
| `npm run preview`     | Prévisualise le build de production          |
| `npm run lint`         | Vérifie le code avec ESLint                  |
| `npm run format`       | Formate le code avec Prettier                |

## Développement

```bash
npm install
npm run dev
```

Le site est ensuite accessible sur `http://localhost:3000` (ou le port affiché dans le terminal).

## Build & déploiement

```bash
npm run build
npm run preview   # pour tester le build localement
```

Le dossier de sortie (`.output/`) peut être déployé sur n'importe quel hébergeur compatible Node.js (Vercel, Netlify, Render, VPS...).

## Mettre à jour le contenu

- **Projets** : tableau `projects` dans `src/routes/index.tsx` (id, nom, tagline, stack, description, images, liens).
- **Images de projets** : à placer dans `public/assets/jo/projects/<nom-du-projet>/` puis référencer le chemin dans le tableau `projects`.
- **CV** : fichiers PDF dans `public/assets/jo/cv/` (consultables via les boutons "CV (emploi)" / "CV (stage)" — ouverture en nouvel onglet, pas de téléchargement forcé).
- **Photos de profil** : `public/assets/jo/me/`.
- **Favicon / icônes** : `public/favicon.ico` et `public/assets/icons/`.
- **Métadonnées SEO** (titre, description, Open Graph) : `src/routes/__root.tsx`.

## Fonctionnalités

- Design éditorial "papier" (typographie serif + texture grain), thème clair/sombre.
- Galerie d'images par projet avec **lightbox** (clic pour agrandir, navigation clavier ← →, Échap pour fermer).
- Formulaire de contact.
- Sitemap généré automatiquement (`sitemap.xml`).
- Entièrement responsive (mobile / tablette / desktop).

## Auteure

**Josephine Senou** — Développeuse Web & Mobile

## Déploiement sur Render (Bun)

Ce projet utilise **Bun** comme gestionnaire de paquets (`bun.lock` committé pour figer les versions exactes qui fonctionnent).

Paramètres du service Render :
- **Build Command** : `bun install && bun run build`
- **Start Command** : `bun run start`

Le build produit un serveur Node.js standard dans `.output/server/` (preset Nitro `node-server`, configuré dans `vite.config.ts`), compatible avec Render.

⚠️ Si `bun.lock` est régénéré un jour et qu'un futur `bun update` casse le build (ex. montée de version majeure de `zod` ou `@tanstack/*`), revenir à la version committée du lockfile plutôt que de relancer un install "à blanc".
