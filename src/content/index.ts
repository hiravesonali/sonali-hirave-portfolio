// =====================================================================
// CONTENT STORE — single source of truth for all copy (EN + DE)
// Sonali can edit any string here without touching component code.
// =====================================================================

export type Locale = "en" | "de";

export interface Experience {
  company: string;
  url?: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface Project {
  name: string;
  year: string;
  stack: string[];
  description: string;
  url?: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  period: string;
}

export interface LangItem {
  name: string;
  level: string;
}

export interface ContentShape {
  meta: { title: string; description: string };
  nav: {
    home: string;
    about: string;
    skills: string;
    experience: string;
    projects: string;
    contact: string;
  };
  hero: {
    chapter: string;
    name: string;
    title: string;
    tagline: string;
    description: string;
    ctaWork: string;
    ctaContact: string;
    location: string;
    availability: string;
  };
  about: {
    chapter: string;
    heading: string;
    paragraphs: string[];
    facts: { label: string; value: string }[];
  };
  skills: {
    chapter: string;
    heading: string;
    intro: string;
    groups: SkillGroup[];
  };
  experience: {
    chapter: string;
    heading: string;
    intro: string;
    items: Experience[];
  };
  projects: {
    chapter: string;
    heading: string;
    intro: string;
    items: Project[];
  };
  education: {
    heading: string;
    items: EducationItem[];
    languagesHeading: string;
    languages: LangItem[];
    workAuthHeading: string;
    workAuth: string[];
  };
  contact: {
    chapter: string;
    heading: string;
    intro: string;
    emailLabel: string;
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    githubLabel: string;
    linkedinLabel: string;
    phoneLabel: string;
  };
  footer: {
    built: string;
    rights: string;
  };
}

// ---------------------------------------------------------------------
// ENGLISH
// ---------------------------------------------------------------------
const en: ContentShape = {
  meta: {
    title: "Sonali Hirave — Frontend Engineer",
    description:
      "Frontend Engineer with 5+ years building scalable, high-performance web apps with React, Vue, Next.js, Nuxt.js and TypeScript.",
  },
  nav: {
    home: "Home",
    about: "Story",
    skills: "Tech Stack",
    experience: "Journey",
    projects: "Work",
    contact: "Contact",
  },
  hero: {
    chapter: "Chapter 01 — Hello",
    name: "Sonali Hirave",
    title: "Frontend Engineer",
    tagline: "From pixel to production — interfaces that scale.",
    description:
      "Frontend Engineer with 5+ years building scalable, high-performance web applications with React, Vue.js, Next.js, Nuxt.js and TypeScript. I specialise in frontend architecture, server-side rendering, SEO and responsive interfaces for e-commerce platforms serving 5M+ users across 20+ countries.",
    ctaWork: "See my work",
    ctaContact: "Let's talk",
    location: "Ingolstadt, Germany",
    availability: "Full work authorization · No visa sponsorship needed",
  },
  about: {
    chapter: "Chapter 02 — The Story",
    heading: "Building for millions, one component at a time",
    paragraphs: [
      "I'm a frontend engineer who loves turning complex product ideas into fast, accessible, and maintainable interfaces. Over the past five years I've shipped features used by millions — from multilingual e-commerce storefronts to content workflows and finance dashboards.",
      "My happy place is the seam between design and engineering: reusable component systems, server-side rendering, performance budgets, and SEO that actually moves the needle. I care about clean architecture, but I care more about what users feel when a page loads in a blink.",
      "Today I'm building Doratics, an SEO-first website platform, while staying hands-on with the React and Vue ecosystems I've grown up with.",
    ],
    facts: [
      { label: "Years of experience", value: "5+" },
      { label: "Users reached", value: "5M+" },
      { label: "Countries served", value: "20+" },
      { label: "Load time cut", value: "10s → 2-3s" },
    ],
  },
  skills: {
    chapter: "Chapter 03 — The Toolkit",
    heading: "What I build with",
    intro:
      "A frontend-first stack, backed by enough backend and tooling to ship end-to-end.",
    groups: [
      {
        label: "Frontend",
        items: [
          "React",
          "Next.js",
          "Vue.js",
          "Nuxt.js",
          "TypeScript",
          "JavaScript (ES6+)",
          "React Hooks",
          "Context API",
          "Pinia",
          "Vuex",
          "Tailwind CSS",
          "HTML5",
          "CSS3",
          "Responsive Design",
        ],
      },
      {
        label: "Backend & Databases",
        items: [
          "Node.js",
          "Nitro.js",
          "REST APIs",
          "GraphQL",
          "MySQL",
          "PostgreSQL",
          "Prisma",
          "Drizzle ORM",
        ],
      },
      {
        label: "Tools & Workflow",
        items: ["Git", "Jest", "Cypress", "Turborepo", "Datadog", "Figma"],
      },
      {
        label: "Performance & SEO",
        items: [
          "Server-Side Rendering (SSR)",
          "SEO Optimization",
          "Performance Optimization",
        ],
      },
      {
        label: "AI-assisted Development",
        items: ["ChatGPT", "Cursor", "Claude"],
      },
    ],
  },
  experience: {
    chapter: "Chapter 04 — The Journey",
    heading: "Where I've built",
    intro: "Five years, three companies, millions of users.",
    items: [
      {
        company: "Doratics",
        url: "https://doratics.com",
        role: "Founder & Full-Stack Engineer",
        period: "Oct 2025 — Present",
        location: "SEO-first website builder",
        bullets: [
          "Building a production-ready, SEO-first website platform with Nuxt.js, Tailwind CSS, Nitro.js, Drizzle ORM and Cloudflare (Pages, D1, R2).",
          "Improving frontend performance, SEO and scalable content generation through SSR, caching strategies and efficient rendering.",
          "Architecting a modern monorepo to improve maintainability, scalability and developer productivity.",
        ],
      },
      {
        company: "Expondo GmbH",
        url: "https://www.expondo.de",
        role: "Frontend Engineer",
        period: "Mar 2022 — Mar 2025",
        location: "Berlin, Germany",
        bullets: [
          "Developed and optimized scalable, multilingual e-commerce platforms with Vue.js, Nuxt.js and TypeScript for 5M+ users across 20+ countries.",
          "Cut load times from ~10s to 2–3s through SSR, caching strategies and GraphQL API optimization.",
          "Built reusable components and scalable frontend architectures for international web applications.",
          "Delivered core product features in close collaboration with design, backend and product teams.",
          "Ensured high software quality through code reviews, automated testing with Jest and Cypress, and agile processes.",
        ],
      },
      {
        company: "WittyPen Pvt. Ltd.",
        url: "https://wittypen.com",
        role: "Junior Full-Stack Developer",
        period: "Jul 2020 — Feb 2022",
        location: "India · Remote from Germany",
        bullets: [
          "Delivered end-to-end product features for a content-creation platform with Vue.js, Tailwind CSS, Laravel REST APIs and MySQL in an early-stage startup.",
          "Modernized the platform UI by migrating existing Bootstrap components to Tailwind CSS.",
          "Built Kanban-based content workflows and extended the TinyMCE editor with commenting and inline-editing features.",
          "Redesigned and built the company website from design to production, plus a dedicated careers page for job listings and applications.",
        ],
      },
    ],
  },
  projects: {
    chapter: "Chapter 05 — Selected Work",
    heading: "Things I've made",
    intro: "A few projects that show how I think and build.",
    items: [
      {
        name: "Full-Stack Finance Dashboard",
        year: "2025",
        stack: ["Next.js", "React", "TypeScript", "PostgreSQL"],
        description:
          "A full-stack finance dashboard built with the Next.js App Router and Server Actions — featuring authentication, analytics dashboards, search and pagination, backed by PostgreSQL with reusable, responsive UI components in Tailwind CSS.",
      },
      {
        name: "Doratics — SEO-First Website Builder",
        year: "2025",
        stack: ["Nuxt.js", "Nitro.js", "Drizzle ORM", "Cloudflare"],
        description:
          "A production-ready platform for SEO-optimized websites, built on a modern monorepo with SSR, smart caching and scalable content generation on Cloudflare Pages, D1 and R2.",
        url: "https://doratics.com",
      },
      {
        name: "Multilingual E-Commerce Platform",
        year: "2022–2025",
        stack: ["Vue.js", "Nuxt.js", "TypeScript", "GraphQL"],
        description:
          "Scalable, multilingual storefronts serving 5M+ users across 20+ countries — load times cut from ~10s to 2–3s through SSR, caching and GraphQL optimization.",
        url: "https://www.expondo.de",
      },
    ],
  },
  education: {
    heading: "Education",
    items: [
      {
        degree: "Diploma in Graphic Design & Web Development",
        school: "Arena Animation, Pune, India",
        period: "Jun 2015 — Dec 2018",
      },
      {
        degree: "Diploma in Electronics & Telecommunication",
        school: "University of Mumbai, India",
        period: "Jan 2012 — Apr 2015",
      },
    ],
    languagesHeading: "Languages",
    languages: [
      { name: "English", level: "Fluent" },
      { name: "German", level: "B1 (Integration course completed)" },
      { name: "Hindi", level: "Native" },
    ],
    workAuthHeading: "Work Authorization",
    workAuth: [
      "Unrestricted work permit for Germany",
      "No visa sponsorship required",
    ],
  },
  contact: {
    chapter: "Chapter 06 — Say Hello",
    heading: "Let's build something meaningful",
    intro:
      "Open to frontend and full-stack roles where performance, clean architecture and great user experience matter. Drop me a line — I'd love to hear what you're building.",
    emailLabel: "Email",
    email: "hiravesonali@gmail.com",
    phone: "+49 15145093853",
    github: "https://github.com/hiravesonali",
    linkedin: "https://www.linkedin.com/in/sonali-hirave-a03a96131",
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",
    phoneLabel: "Phone",
  },
  footer: {
    built: "Built with Next.js, TypeScript & Framer Motion.",
    rights: "All rights reserved.",
  },
};

// ---------------------------------------------------------------------
// GERMAN
// ---------------------------------------------------------------------
const de: ContentShape = {
  meta: {
    title: "Sonali Hirave — Frontend Engineer",
    description:
      "Frontend Engineer mit über 5 Jahren Erfahrung in der Entwicklung skalierbarer, leistungsstarker Webanwendungen mit React, Vue, Next.js, Nuxt.js und TypeScript.",
  },
  nav: {
    home: "Start",
    about: "Story",
    skills: "Tech-Stack",
    experience: "Weg",
    projects: "Arbeiten",
    contact: "Kontakt",
  },
  hero: {
    chapter: "Kapitel 01 — Hallo",
    name: "Sonali Hirave",
    title: "Frontend Engineer",
    tagline: "Vom Pixel zur Produktion — Interfaces, die skalieren.",
    description:
      "Frontend Engineer mit über 5 Jahren Erfahrung in der Entwicklung skalierbarer und leistungsstarker Webanwendungen mit React, Vue.js, Next.js, Nuxt.js und TypeScript. Spezialisiert auf Frontend-Architekturen, Server-Side Rendering (SSR), SEO und responsive Benutzeroberflächen für E-Commerce-Plattformen mit mehr als 5 Millionen Nutzern in über 20 Ländern.",
    ctaWork: "Meine Arbeit ansehen",
    ctaContact: "Sprechen wir",
    location: "Ingolstadt, Deutschland",
    availability: "Uneingeschränkte Arbeitserlaubnis · Keine Visumsunterstützung nötig",
  },
  about: {
    chapter: "Kapitel 02 — Die Story",
    heading: "Für Millionen entwickeln — Komponente für Komponente",
    paragraphs: [
      "Ich bin Frontend Engineer und liebe es, komplexe Produktideen in schnelle, zugängliche und wartbare Interfaces zu verwandeln. In den letzten fünf Jahren habe ich Features ausgeliefert, die von Millionen genutzt werden — von mehrsprachigen E-Commerce-Storefronts über Content-Workflows bis hin zu Finanz-Dashboards.",
      "Mein Lieblingsort ist die Nahtstelle zwischen Design und Engineering: wiederverwendbare Komponentensysteme, Server-Side Rendering, Performance-Budgets und SEO, das wirklich etwas bewegt. Saubere Architektur ist mir wichtig — noch wichtiger ist mir, was Nutzer fühlen, wenn eine Seite im Bruchteil einer Sekunde lädt.",
      "Heute baue ich Doratics, eine SEO-First Website-Plattform, und bleibe gleichzeitig hands-on im React- und Vue-Ökosystem, mit dem ich groß geworden bin.",
    ],
    facts: [
      { label: "Jahre Erfahrung", value: "5+" },
      { label: "Erreichte Nutzer", value: "5 Mio.+" },
      { label: "Länder", value: "20+" },
      { label: "Ladezeit reduziert", value: "10s → 2-3s" },
    ],
  },
  skills: {
    chapter: "Kapitel 03 — Das Werkzeug",
    heading: "Womit ich arbeite",
    intro:
      "Ein Frontend-First-Stack, gestützt durch genug Backend und Tooling, um End-to-End auszuliefern.",
    groups: [
      {
        label: "Frontend",
        items: [
          "React",
          "Next.js",
          "Vue.js",
          "Nuxt.js",
          "TypeScript",
          "JavaScript (ES6+)",
          "React Hooks",
          "Context API",
          "Pinia",
          "Vuex",
          "Tailwind CSS",
          "HTML5",
          "CSS3",
          "Responsive Design",
        ],
      },
      {
        label: "Backend & Datenbanken",
        items: [
          "Node.js",
          "Nitro.js",
          "REST APIs",
          "GraphQL",
          "MySQL",
          "PostgreSQL",
          "Prisma",
          "Drizzle ORM",
        ],
      },
      {
        label: "Tools & Entwicklung",
        items: ["Git", "Jest", "Cypress", "Turborepo", "Datadog", "Figma"],
      },
      {
        label: "Performance & SEO",
        items: [
          "Server-Side Rendering (SSR)",
          "SEO-Optimierung",
          "Performance-Optimierung",
        ],
      },
      {
        label: "KI-gestützte Entwicklung",
        items: ["ChatGPT", "Cursor", "Claude"],
      },
    ],
  },
  experience: {
    chapter: "Kapitel 04 — Der Weg",
    heading: "Wo ich entwickelt habe",
    intro: "Fünf Jahre, drei Unternehmen, Millionen von Nutzern.",
    items: [
      {
        company: "Doratics",
        url: "https://doratics.com",
        role: "Gründerin & Full-Stack Engineer",
        period: "Okt 2025 — Heute",
        location: "SEO-optimierter Website-Builder",
        bullets: [
          "Entwicklung einer produktionsreifen SEO-First Website-Plattform mit Nuxt.js, Tailwind CSS, Nitro.js, Drizzle ORM und Cloudflare (Pages, D1, R2).",
          "Verbesserung von Frontend-Performance, SEO und skalierbarer Content-Generierung durch SSR, Caching-Strategien und effiziente Rendering-Prozesse.",
          "Aufbau einer modernen Monorepo-Architektur zur Verbesserung von Wartbarkeit, Skalierbarkeit und Entwicklerproduktivität.",
        ],
      },
      {
        company: "Expondo GmbH",
        url: "https://www.expondo.de",
        role: "Frontend Engineer",
        period: "Mär 2022 — Mär 2025",
        location: "Berlin, Deutschland",
        bullets: [
          "Entwicklung und Optimierung skalierbarer, mehrsprachiger E-Commerce-Plattformen mit Vue.js, Nuxt.js und TypeScript für mehr als 5 Millionen Nutzer in über 20 Ländern.",
          "Verbesserung der Ladezeiten von ca. 10 Sekunden auf 2–3 Sekunden durch SSR, Caching-Strategien und die Optimierung von GraphQL-APIs.",
          "Entwicklung wiederverwendbarer Komponenten und skalierbarer Frontend-Architekturen für internationale Webanwendungen.",
          "Umsetzung zentraler Produktfeatures in enger Zusammenarbeit mit Design-, Backend- und Produktteams.",
          "Sicherstellung hoher Softwarequalität durch Code Reviews, automatisierte Tests mit Jest und Cypress sowie agile Entwicklungsprozesse.",
        ],
      },
      {
        company: "WittyPen Pvt. Ltd.",
        url: "https://wittypen.com",
        role: "Junior Full-Stack Developer",
        period: "Jul 2020 — Feb 2022",
        location: "Indien · Remote aus Deutschland",
        bullets: [
          "Umsetzung von End-to-End-Produktfunktionen für eine Content-Creation-Plattform mit Vue.js, Tailwind CSS, Laravel REST APIs und MySQL in einem Early-Stage-Startup.",
          "Neugestaltung und Modernisierung der Plattform-Oberfläche durch die Migration bestehender Bootstrap-Komponenten zu Tailwind CSS.",
          "Entwicklung Kanban-basierter Content-Workflows sowie Erweiterung des TinyMCE-Editors um Kommentierungs- und Inline-Editing-Funktionen.",
          "Neugestaltung und Entwicklung der Unternehmenswebsite von der Designphase bis zur Produktivsetzung sowie Aufbau einer dedizierten Karriereseite.",
        ],
      },
    ],
  },
  projects: {
    chapter: "Kapitel 05 — Ausgewählte Arbeiten",
    heading: "Dinge, die ich gebaut habe",
    intro: "Ein paar Projekte, die zeigen, wie ich denke und entwickle.",
    items: [
      {
        name: "Full-Stack-Finanzdashboard",
        year: "2025",
        stack: ["Next.js", "React", "TypeScript", "PostgreSQL"],
        description:
          "Ein Full-Stack-Finanzdashboard mit Next.js App Router und Server Actions — mit Authentifizierung, Analyse-Dashboards, Suchfunktionen und Pagination, gestützt auf PostgreSQL mit wiederverwendbaren, responsiven UI-Komponenten in Tailwind CSS.",
      },
      {
        name: "Doratics — SEO-First Website-Builder",
        year: "2025",
        stack: ["Nuxt.js", "Nitro.js", "Drizzle ORM", "Cloudflare"],
        description:
          "Eine produktionsreife Plattform für SEO-optimierte Websites, gebaut auf einem modernen Monorepo mit SSR, intelligentem Caching und skalierbarer Content-Generierung auf Cloudflare Pages, D1 und R2.",
        url: "https://doratics.com",
      },
      {
        name: "Mehrsprachige E-Commerce-Plattform",
        year: "2022–2025",
        stack: ["Vue.js", "Nuxt.js", "TypeScript", "GraphQL"],
        description:
          "Skalierbare, mehrsprachige Storefronts für mehr als 5 Millionen Nutzer in über 20 Ländern — Ladezeiten von ca. 10s auf 2–3s reduziert durch SSR, Caching und GraphQL-Optimierung.",
        url: "https://www.expondo.de",
      },
    ],
  },
  education: {
    heading: "Ausbildung",
    items: [
      {
        degree: "Diplom in Grafikdesign und Webentwicklung",
        school: "Arena Animation, Pune, Indien",
        period: "Jun 2015 — Dez 2018",
      },
      {
        degree: "Diplom in Elektronik und Telekommunikation",
        school: "University of Mumbai, Indien",
        period: "Jan 2012 — Apr 2015",
      },
    ],
    languagesHeading: "Sprachen",
    languages: [
      { name: "Englisch", level: "Fließend" },
      { name: "Deutsch", level: "B1 (Integrationskurs abgeschlossen)" },
      { name: "Hindi", level: "Muttersprache" },
    ],
    workAuthHeading: "Arbeitsberechtigung",
    workAuth: [
      "Uneingeschränkte Arbeitserlaubnis für Deutschland",
      "Keine Visumsunterstützung erforderlich",
    ],
  },
  contact: {
    chapter: "Kapitel 06 — Hallo sagen",
    heading: "Lass uns etwas Sinnvolles bauen",
    intro:
      "Offen für Frontend- und Full-Stack-Rollen, in denen Performance, saubere Architektur und großartige User Experience zählen. Schreib mir — ich freue mich zu hören, was du baust.",
    emailLabel: "E-Mail",
    email: "hiravesonali@gmail.com",
    phone: "+49 15145093853",
    github: "https://github.com/hiravesonali",
    linkedin: "https://www.linkedin.com/in/sonali-hirave-a03a96131",
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",
    phoneLabel: "Telefon",
  },
  footer: {
    built: "Gebaut mit Next.js, TypeScript & Framer Motion.",
    rights: "Alle Rechte vorbehalten.",
  },
};

export const content: Record<Locale, ContentShape> = { en, de };
