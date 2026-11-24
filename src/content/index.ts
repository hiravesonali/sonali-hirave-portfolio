// =====================================================================
// CONTENT STORE — single source of truth for all copy (EN + DE)
// Edit any string here without touching component code.
// =====================================================================

export type Locale = 'en' | 'de';

export interface Experience {
  company: string;
  url?: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  stack: string[];
}

export interface Project {
  name: string;
  /** Short category shown on the card, e.g. "AI" or "Web". */
  kind: string;
  year: string;
  stack: string[];
  description: string;
  /** Live site or demo. */
  url?: string;
  /** Source code repository. */
  repoUrl?: string;
}

export type FeatureStatus = 'live' | 'building' | 'roadmap';

export interface FeaturedProject {
  name: string;
  tagline: string;
  year: string;
  description: string;
  url: string;
  stack: string[];
  featuresHeading: string;
  features: { title: string; detail: string; status: FeatureStatus }[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Capability {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export interface Certification {
  issuer: string;
  name: string;
  verifyUrl: string;
}

export interface EducationItem {
  degree: string;
  school: string;
  period: string;
  current?: boolean;
}

export interface LangItem {
  name: string;
  level: string;
}

export interface TraceStep {
  /** Function-style name shown in monospace, e.g. "retrieve". */
  tool: string;
  label: string;
  detail: string;
}

export interface ContentShape {
  meta: { title: string; description: string };
  nav: {
    about: string;
    capabilities: string;
    experience: string;
    projects: string;
    background: string;
    contact: string;
    menu: string;
    language: string;
  };
  hero: {
    status: string;
    name: string;
    role: string;
    headlineLead: string;
    headlineAccent: string;
    description: string;
    ctaWork: string;
    ctaContact: string;
    location: string;
    availability: string;
    stats: { label: string; value: string }[];
  };
  trace: {
    title: string;
    badge: string;
    promptLabel: string;
    prompt: string;
    steps: TraceStep[];
    awaiting: string;
    approve: string;
    edit: string;
    approved: string;
    outputLabel: string;
    caption: string;
  };
  about: {
    label: string;
    heading: string;
    paragraphs: string[];
    nowLabel: string;
    now: { title: string; detail: string }[];
    photoAlt: string;
  };
  capabilities: {
    label: string;
    heading: string;
    intro: string;
    items: Capability[];
    stackHeading: string;
    groups: SkillGroup[];
  };
  experience: {
    label: string;
    heading: string;
    intro: string;
    items: Experience[];
  };
  projects: {
    label: string;
    heading: string;
    intro: string;
    featuredLabel: string;
    visitLabel: string;
    demoLabel: string;
    codeLabel: string;
    statusLabels: Record<FeatureStatus, string>;
    featured: FeaturedProject;
    moreHeading: string;
    items: Project[];
  };
  background: {
    label: string;
    heading: string;
    educationHeading: string;
    education: EducationItem[];
    currentLabel: string;
    certificationsHeading: string;
    certifications: Certification[];
    verifyLabel: string;
    languagesHeading: string;
    languages: LangItem[];
    workAuthHeading: string;
    workAuth: string[];
  };
  contact: {
    label: string;
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

// Shared, language-independent values
const EMAIL = 'hiravesonali@gmail.com';
const PHONE = '+49 15145093853';
const GITHUB = 'https://github.com/hiravesonali';
const LINKEDIN = 'https://www.linkedin.com/in/sonali-hirave';
const REACT_CERT_URL =
  'https://www.coursera.org/account/accomplishments/verify/3IFWLELH8AAB';

const DORATICS_STACK = [
  'Nuxt.js',
  'Vue.js',
  'TypeScript',
  'Nitro.js',
  'Drizzle ORM',
  'SQLite (D1)',
  'Cloudflare',
  'LLM APIs (OpenAI / Anthropic)',
];
const EXPONDO_STACK = [
  'Vue.js 3',
  'Nuxt.js',
  'TypeScript',
  'Tailwind CSS',
  'GraphQL',
  'Vue Storefront',
  'CommerceTools',
];
const WITTYPEN_STACK = [
  'Vue.js',
  'Tailwind CSS',
  'Laravel',
  'REST API',
  'MySQL',
  'Docker',
  'GitHub Actions',
];
const HOOT_STACK = [
  'Python',
  'Streamlit',
  'OpenRouter (Claude / GPT)',
  'Pydantic',
  'SQLAlchemy',
  'PostgreSQL',
  'pytest',
];
const ANKOMMEN_STACK = [
  'Python',
  'LangChain',
  'LangSmith',
  'Chroma',
  'BM25',
  'OpenAI API',
  'Ragas',
  'Streamlit',
];
const ANKOMMEN_URL = 'https://expat-assistant.streamlit.app/';
const HOOT_URL = 'https://hoot-interview-prep-app.streamlit.app/';
const HOOT_REPO = 'https://github.com/hiravesonali/Interview-prep-app';
const ENTHRALL_STACK = ['HTML', 'CSS', 'JavaScript', 'UI & Graphic Design'];

const SKILL_ITEMS = {
  ai: [
    'LLM APIs (OpenAI / Anthropic)',
    'Prompt Engineering',
    'Structured Outputs',
    'RAG',
    'Tool-Calling Agents',
    'LangChain',
    'LangSmith',
    'Evals',
    'Python',
  ],
  frontend: [
    'TypeScript',
    'React',
    'Next.js',
    'Vue.js',
    'Nuxt.js',
    'Tailwind CSS',
    'SSR',
    'Pinia',
    'Vite',
  ],
  backend: [
    'Node.js',
    'Nitro.js',
    'REST APIs',
    'GraphQL',
    'PostgreSQL',
    'MySQL',
    'SQLite (D1)',
    'Drizzle ORM',
    'Prisma',
  ],
  infra: [
    'Cloudflare (Pages, D1, R2)',
    'Docker',
    'GitHub Actions',
    'GitLab CI/CD',
    'Turborepo',
    'pnpm',
    'Jest',
    'Vitest',
    'Cypress',
    'Datadog',
  ],
};

/*
 * ADDING A PROJECT (e.g. a Turing College sprint project)
 * Add an entry like this to `projects.items` in BOTH `en` and `de`:
 *
 *   {
 *     name: 'Project name',
 *     kind: 'AI',
 *     year: '2026',
 *     stack: ['Python', 'OpenAI API', 'FastAPI'],
 *     description: 'One or two sentences: what it does and what you built.',
 *     url: 'https://your-live-demo.example',          // optional
 *     repoUrl: 'https://github.com/hiravesonali/your-repo', // optional
 *   },
 */

// ---------------------------------------------------------------------
// ENGLISH
// ---------------------------------------------------------------------
const en: ContentShape = {
  meta: {
    title: 'Sonali Hirave — Full-Stack AI Engineer',
    description:
      'Full-Stack AI Engineer in Munich. 5+ years shipping high-performance web products, now building LLM features end to end: prompts, structured outputs, RAG, agents, evals and the UI on top.',
  },
  nav: {
    about: 'About',
    capabilities: 'Capabilities',
    experience: 'Experience',
    projects: 'Projects',
    background: 'Background',
    contact: 'Contact',
    menu: 'Menu',
    language: 'Switch language',
  },
  hero: {
    status: 'Open to AI engineering roles',
    name: 'Sonali Hirave',
    role: 'Full-Stack AI Engineer',
    headlineLead: 'I build LLM-powered products,',
    headlineAccent: 'end to end.',
    description:
      'Full-Stack AI Engineer with 5+ years of experience shipping scalable, high-performance web products. Now building LLM features from prompts, structured outputs, RAG and tool-calling agents to evaluation and the streaming UI on top.',
    ctaWork: 'See my work',
    ctaContact: 'Get in touch',
    location: 'Munich, Germany',
    availability: 'No visa sponsorship needed',
    stats: [
      { label: 'Years shipping web products', value: '5+' },
      { label: 'Users served', value: '5M+' },
      { label: 'Countries', value: '20+' },
      { label: 'Page load time', value: '~10s → 2–3s' },
    ],
  },
  trace: {
    title: 'doratics / content-pipeline',
    badge: 'Illustrative run',
    promptLabel: 'task',
    prompt: 'Generate an FAQ page for a bakery in Munich',
    steps: [
      {
        tool: 'retrieve',
        label: 'Ground in business data',
        detail: 'menu · price list · opening hours',
      },
      {
        tool: 'generate',
        label: 'Draft content with an LLM',
        detail: 'service page · meta tags · FAQs',
      },
      {
        tool: 'structure',
        label: 'Emit validated JSON-LD',
        detail: 'FAQPage · LocalBusiness',
      },
      {
        tool: 'evaluate',
        label: 'Score content quality',
        detail: 'grounding · relevance · tone',
      },
      {
        tool: 'approve',
        label: 'Human-in-the-loop review',
        detail: 'nothing ships without sign-off',
      },
    ],
    awaiting: 'Awaiting approval',
    approve: 'Approve',
    edit: 'Edit',
    approved: 'Approved',
    outputLabel: 'output',
    caption:
      'A simplified view of the content pipeline I am building at Doratics.',
  },
  about: {
    label: 'About',
    heading:
      'A product engineer moving into AI, with the shipping habits intact.',
    paragraphs: [
      'I have spent 5+ years building web products that have to be fast and reliable for a lot of people, including multilingual e-commerce platforms serving 5M+ users across 20+ countries.',
      'Now I build LLM-powered features end to end: prompts, structured outputs, RAG and tool-calling agents, the evals that tell you whether they work, and the streaming interface users actually touch.',
      'My background in frontend architecture, SSR and performance carries over directly to the latency, cost and UX problems that decide whether an AI product is usable.',
    ],
    nowLabel: 'Currently',
    now: [
      {
        title: 'Turing College — AI Engineering',
        detail: 'Python, LLM APIs, LangChain, RAG, agents, and evals with LangSmith.',
      },
      {
        title: 'Doratics — AI layer',
        detail:
          'Applying it to an SEO-first website builder for local businesses.',
      },
    ],
    photoAlt: 'Portrait of Sonali Hirave',
  },
  capabilities: {
    label: 'Capabilities',
    heading: 'The whole path from prompt to product.',
    intro:
      'An LLM feature is only as good as the system around it. These are the pieces I work on.',
    items: [
      {
        id: 'llm',
        title: 'LLM features',
        description:
          'Prompt design and LLM API integration for content generation: service pages, meta tags and FAQs.',
        tags: ['OpenAI', 'Anthropic', 'Prompting'],
      },
      {
        id: 'structured',
        title: 'Structured outputs',
        description:
          'Schema-constrained generation with validation, such as LocalBusiness and FAQ JSON-LD that has to be correct.',
        tags: ['JSON Schema', 'JSON-LD', 'Validation'],
      },
      {
        id: 'rag',
        title: 'Retrieval (RAG)',
        description:
          'Grounding generated content in real business data like menus and price lists instead of guesses.',
        tags: ['Embeddings', 'Chunking', 'Retrieval'],
      },
      {
        id: 'agents',
        title: 'Tool-calling agents',
        description:
          'Agents that take actions through tools, with human-in-the-loop approval before anything is applied.',
        tags: ['LangChain', 'Tool use', 'Human-in-the-loop'],
      },
      {
        id: 'evals',
        title: 'Evals',
        description:
          'Automated checks on content quality, so changes to prompts and models are measured, not guessed.',
        tags: ['LangSmith', 'Quality scoring', 'Regression checks'],
      },
      {
        id: 'ui',
        title: 'AI product UI',
        description:
          'Streaming responses and fast, server-rendered interfaces — where five years of frontend work pays off.',
        tags: ['Streaming', 'SSR', 'Performance'],
      },
    ],
    stackHeading: 'Stack',
    groups: [
      { label: 'AI', items: SKILL_ITEMS.ai },
      { label: 'Frontend', items: SKILL_ITEMS.frontend },
      { label: 'Backend & data', items: SKILL_ITEMS.backend },
      { label: 'Infra & tooling', items: SKILL_ITEMS.infra },
    ],
  },
  experience: {
    label: 'Experience',
    heading: 'Where I have delivered.',
    intro: 'E-commerce at scale, an early-stage startup, and my own product.',
    items: [
      {
        company: 'Doratics',
        url: 'https://doratics.com',
        role: 'Full-Stack AI Engineer & Founder',
        period: 'Apr 2026 — Present',
        location: 'Munich, Germany',
        bullets: [
          'Built a production-ready, SEO-first website platform for local businesses with Nuxt.js, TypeScript, Tailwind CSS, Nitro.js, Drizzle ORM and Cloudflare (Pages, D1, R2).',
          'Built AI page generation that turns a blank new page into a ready-to-edit draft: SEO-optimized copy, meta tags and FAQs, produced with LLM structured outputs and validated before they reach the page.',
          "Built an organizational brain: a vector-database RAG knowledge base of Doratics' product information, development standards and website-building standards that grounds the AI's output.",
          'Improved performance and SEO through server-side rendering, caching and efficient rendering, and set up a monorepo architecture (Turborepo, pnpm) for maintainability.',
        ],
        stack: DORATICS_STACK,
      },
      {
        company: 'Expondo GmbH',
        url: 'https://www.expondo.de',
        role: 'Frontend Engineer',
        period: 'Mar 2022 — Mar 2026',
        location: 'Berlin, Germany',
        bullets: [
          'Developed and optimized scalable, multilingual e-commerce platforms with Vue.js, Nuxt.js, TypeScript and Tailwind CSS, serving 5M+ users across 20+ countries.',
          'Reduced page load times from ~10 seconds to 2–3 seconds through SSR, caching strategies and GraphQL API optimization.',
          'Built reusable UI components and scalable frontend architectures for complex international web applications.',
          'Delivered key product features with design, backend and cross-functional product teams in an agile setup.',
          'Ensured quality through code reviews and automated testing with Jest and Cypress.',
        ],
        stack: EXPONDO_STACK,
      },
      {
        company: 'WittyPen Pvt. Ltd.',
        url: 'https://wittypen.com',
        role: 'Junior Full-Stack Developer',
        period: 'Jul 2020 — Feb 2022',
        location: 'India · Remote from Germany',
        bullets: [
          'Built end-to-end features for a content creation platform with Vue.js, Tailwind CSS, Laravel REST APIs, MySQL and Docker in an early-stage startup.',
          'Modernized the platform UI by migrating Bootstrap components to Tailwind CSS.',
          'Built Kanban-based content workflows and extended the TinyMCE editor with commenting and inline editing.',
          'Designed and developed the company website from concept to production, including a careers page.',
        ],
        stack: WITTYPEN_STACK,
      },
      {
        company: 'Enthralltech Pvt. Ltd.',
        url: 'https://enthral.ai',
        role: 'Graphic Designer & Web Developer',
        period: 'May 2016 — Mar 2018',
        location: 'India',
        bullets: [
          'Created e-learning content, interactive training materials and digital media for international companies, including Microsoft and PepsiCo.',
          'Developed interactive learning modules with HTML, CSS and JavaScript, and designed UI elements and graphics for online learning platforms.',
        ],
        stack: ENTHRALL_STACK,
      },
    ],
  },
  projects: {
    label: 'Projects',
    heading: 'Selected work.',
    intro:
      'A platform whose AI layer I built, two AI apps I built and deployed, and the web platforms that taught me how to ship.',
    featuredLabel: 'Featured · AI',
    visitLabel: 'Visit',
    demoLabel: 'Live demo',
    codeLabel: 'Code',
    statusLabels: {
      live: 'Live',
      building: 'In progress',
      roadmap: 'Roadmap',
    },
    featured: {
      name: 'Doratics',
      tagline: 'SEO-first website builder for local businesses',
      year: '2026 — Present',
      description:
        'A production platform that lets local businesses launch fast, search-optimized websites. I built the platform and its AI layer, which drafts each new page and grounds it in a RAG knowledge base.',
      url: 'https://doratics.com',
      stack: DORATICS_STACK,
      featuresHeading: 'Platform & AI layer',
      features: [
        {
          title: 'Website platform',
          detail:
            'SSR, caching and a Turborepo monorepo on Cloudflare Pages, D1 and R2.',
          status: 'live',
        },
        {
          title: 'AI page generation',
          detail:
            'New pages are filled with SEO-optimized copy, meta tags and FAQs.',
          status: 'live',
        },
        {
          title: 'Structured outputs with validation',
          detail: 'LLM output is schema-checked before it reaches the page.',
          status: 'live',
        },
        {
          title: 'Organizational brain (RAG)',
          detail:
            'A vector knowledge base of product info and build standards grounds the output.',
          status: 'live',
        },
        {
          title: 'SEO audit agent',
          detail: 'Suggests fixes, applies them only after human approval.',
          status: 'roadmap',
        },
        {
          title: 'Automated evals',
          detail: 'Content quality scoring.',
          status: 'roadmap',
        },
      ],
    },
    moreHeading: 'More projects',
    items: [
      {
        name: 'Ankommen — Expat Guide to Germany',
        kind: 'AI',
        year: '2026',
        stack: ANKOMMEN_STACK,
        description:
          'A RAG assistant that helps expats in Germany with registration, residence permits, renting, family benefits, health insurance and taxes, by text or voice, in English or German. It answers only from official German sources with clickable citations, rewrites English questions to search German texts, combines vector and BM25 search, and calls tested tools for deadlines and benefit estimates. On a 32-question holdout set it scored 0.96 for correctness, against 0.86 for a naive RAG baseline. Built in the Turing College AI Engineering program.',
        url: ANKOMMEN_URL,
      },
      {
        name: 'Hoot — AI Interview Prep',
        kind: 'AI',
        year: '2026',
        stack: HOOT_STACK,
        description:
          'An AI interview coach for technical roles: guided or mock practice sessions with scored feedback, a job-description analyzer that produces a prep plan and the interviewer’s rubric, and a resume builder that tailors a resume to a job. Every prompt passes a security guard (rules, an LLM classifier and output checks) with per-user spend caps. Built in the Turing College AI Engineering program.',
        url: HOOT_URL,
        repoUrl: HOOT_REPO,
      },
      {
        name: 'Expondo — Multilingual E-Commerce Platform',
        kind: 'Web',
        year: '2022 — 2026',
        stack: ['Vue 3', 'Nuxt.js', 'TypeScript', 'GraphQL', 'CommerceTools'],
        description:
          'Multilingual storefronts serving 5M+ users across 20+ countries. Load times cut from ~10s to 2–3s through SSR, caching and GraphQL optimization.',
        url: 'https://www.expondo.de',
      },
      {
        name: 'Findesk — Full-Stack Finance Dashboard',
        kind: 'Web',
        year: '2026',
        stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
        description:
          'A finance dashboard on the Next.js App Router and Server Actions with authentication, analytics, search and pagination, backed by PostgreSQL.',
        url: 'https://findsk.vercel.app',
      },
      {
        name: 'WittyPen — Content Creation Platform',
        kind: 'Web',
        year: '2020 — 2022',
        stack: ['Vue.js', 'Tailwind CSS', 'Laravel', 'MySQL', 'Docker'],
        description:
          'End-to-end features for a content platform: Kanban content workflows, an extended TinyMCE editor with commenting, and a Bootstrap-to-Tailwind migration.',
        url: 'https://wittypen.com',
      },
    ],
  },
  background: {
    label: 'Background',
    heading: 'Education and credentials.',
    educationHeading: 'Education',
    education: [
      {
        degree: 'AI Engineering Program',
        school: 'Turing College',
        period: '2026 — Present',
        current: true,
      },
      {
        degree: 'Diploma in Graphic Design & Web Development',
        school: 'Arena Animation, Pune, India',
        period: 'Jun 2015 — Dec 2017',
      },
      {
        degree: 'Diploma in Electronics & Telecommunication',
        school: 'University of Mumbai, India',
        period: 'Jan 2012 — Apr 2015',
      },
    ],
    currentLabel: 'In progress',
    certificationsHeading: 'Certifications',
    certifications: [
      {
        issuer: 'Meta via Coursera',
        name: 'Meta React Specialization',
        verifyUrl: REACT_CERT_URL,
      },
    ],
    verifyLabel: 'Verify',
    languagesHeading: 'Languages',
    languages: [
      { name: 'English', level: 'Fluent' },
      { name: 'German', level: 'B1 (Integration course completed)' },
      { name: 'Hindi', level: 'Native' },
    ],
    workAuthHeading: 'Work authorization',
    workAuth: [
      'Unrestricted work permit for Germany',
      'No visa sponsorship required',
    ],
  },
  contact: {
    label: 'Contact',
    heading: 'Building something with LLMs? Let’s talk.',
    intro:
      'I am open to AI engineering and full-stack AI roles where the model, the product and the user experience all matter.',
    emailLabel: 'Email',
    email: EMAIL,
    phone: PHONE,
    github: GITHUB,
    linkedin: LINKEDIN,
    githubLabel: 'GitHub',
    linkedinLabel: 'LinkedIn',
    phoneLabel: 'Phone',
  },
  footer: {
    built: 'Built with Next.js, TypeScript and Tailwind CSS.',
    rights: 'All rights reserved.',
  },
};

// ---------------------------------------------------------------------
// GERMAN
// ---------------------------------------------------------------------
const de: ContentShape = {
  meta: {
    title: 'Sonali Hirave — Full-Stack AI Engineer',
    description:
      'Full-Stack AI Engineer in München. Über 5 Jahre Erfahrung mit performanten Webprodukten, jetzt LLM-Features end-to-end: Prompts, Structured Outputs, RAG, Agents, Evals und das UI darüber.',
  },
  nav: {
    about: 'Über mich',
    capabilities: 'Kompetenzen',
    experience: 'Erfahrung',
    projects: 'Projekte',
    background: 'Werdegang',
    contact: 'Kontakt',
    menu: 'Menü',
    language: 'Sprache wechseln',
  },
  hero: {
    status: 'Offen für AI-Engineering-Rollen',
    name: 'Sonali Hirave',
    role: 'Full-Stack AI Engineer',
    headlineLead: 'Ich baue LLM-gestützte Produkte,',
    headlineAccent: 'end-to-end.',
    description:
      'Full-Stack AI Engineer mit über 5 Jahren Erfahrung in der Entwicklung skalierbarer, performanter Webprodukte. Heute baue ich LLM-Features von Prompts, Structured Outputs, RAG und Tool-Calling-Agents bis zu Evaluation und dem Streaming-UI darüber.',
    ctaWork: 'Meine Arbeit ansehen',
    ctaContact: 'Kontakt aufnehmen',
    location: 'München, Deutschland',
    availability: 'Keine Visumsunterstützung nötig',
    stats: [
      { label: 'Jahre Erfahrung mit Webprodukten', value: '5+' },
      { label: 'Nutzer erreicht', value: '5 Mio.+' },
      { label: 'Länder', value: '20+' },
      { label: 'Ladezeit', value: '~10s → 2–3s' },
    ],
  },
  trace: {
    title: 'doratics / content-pipeline',
    badge: 'Beispielhafter Ablauf',
    promptLabel: 'task',
    prompt: 'Erstelle eine FAQ-Seite für eine Bäckerei in München',
    steps: [
      {
        tool: 'retrieve',
        label: 'Auf Unternehmensdaten stützen',
        detail: 'Speisekarte · Preisliste · Öffnungszeiten',
      },
      {
        tool: 'generate',
        label: 'Inhalte mit einem LLM entwerfen',
        detail: 'Leistungsseite · Meta-Tags · FAQs',
      },
      {
        tool: 'structure',
        label: 'Validiertes JSON-LD ausgeben',
        detail: 'FAQPage · LocalBusiness',
      },
      {
        tool: 'evaluate',
        label: 'Inhaltsqualität bewerten',
        detail: 'Faktentreue · Relevanz · Tonalität',
      },
      {
        tool: 'approve',
        label: 'Human-in-the-Loop-Prüfung',
        detail: 'nichts geht ohne Freigabe live',
      },
    ],
    awaiting: 'Wartet auf Freigabe',
    approve: 'Freigeben',
    edit: 'Bearbeiten',
    approved: 'Freigegeben',
    outputLabel: 'output',
    caption:
      'Vereinfachte Darstellung der Content-Pipeline, die ich bei Doratics baue.',
  },
  about: {
    label: 'Über mich',
    heading:
      'Product Engineer auf dem Weg in die KI, mit Shipping-Erfahrung im Gepäck.',
    paragraphs: [
      'Seit über 5 Jahren entwickle ich Webprodukte, die für viele Menschen schnell und zuverlässig funktionieren müssen, darunter mehrsprachige E-Commerce-Plattformen für mehr als 5 Millionen Nutzer in über 20 Ländern.',
      'Heute baue ich LLM-gestützte Features end-to-end: Prompts, Structured Outputs, RAG und Tool-Calling-Agents, die Evals, die zeigen, ob sie funktionieren, und das Streaming-Interface, das Nutzer tatsächlich bedienen.',
      'Meine Erfahrung in Frontend-Architektur, SSR und Performance lässt sich direkt auf die Latenz-, Kosten- und UX-Fragen übertragen, die darüber entscheiden, ob ein KI-Produkt nutzbar ist.',
    ],
    nowLabel: 'Aktuell',
    now: [
      {
        title: 'Turing College — AI Engineering',
        detail: 'Python, LLM-APIs, LangChain, RAG, Agents und Evals mit LangSmith.',
      },
      {
        title: 'Doratics — KI-Layer',
        detail:
          'Angewendet auf einen SEO-First Website-Builder für lokale Unternehmen.',
      },
    ],
    photoAlt: 'Porträt von Sonali Hirave',
  },
  capabilities: {
    label: 'Kompetenzen',
    heading: 'Der ganze Weg vom Prompt zum Produkt.',
    intro:
      'Ein LLM-Feature ist nur so gut wie das System drumherum. An diesen Bausteinen arbeite ich.',
    items: [
      {
        id: 'llm',
        title: 'LLM-Features',
        description:
          'Prompt-Design und LLM-API-Integration für Content-Generierung: Leistungsseiten, Meta-Tags und FAQs.',
        tags: ['OpenAI', 'Anthropic', 'Prompting'],
      },
      {
        id: 'structured',
        title: 'Structured Outputs',
        description:
          'Schema-gebundene Generierung mit Validierung, etwa LocalBusiness- und FAQ-JSON-LD, das korrekt sein muss.',
        tags: ['JSON Schema', 'JSON-LD', 'Validierung'],
      },
      {
        id: 'rag',
        title: 'Retrieval (RAG)',
        description:
          'Generierte Inhalte stützen sich auf echte Unternehmensdaten wie Speisekarten und Preislisten statt auf Vermutungen.',
        tags: ['Embeddings', 'Chunking', 'Retrieval'],
      },
      {
        id: 'agents',
        title: 'Tool-Calling-Agents',
        description:
          'Agents, die über Tools handeln, mit Human-in-the-Loop-Freigabe, bevor etwas angewendet wird.',
        tags: ['LangChain', 'Tool Use', 'Human-in-the-Loop'],
      },
      {
        id: 'evals',
        title: 'Evals',
        description:
          'Automatisierte Prüfungen der Inhaltsqualität, damit Änderungen an Prompts und Modellen gemessen statt geschätzt werden.',
        tags: ['LangSmith', 'Quality Scoring', 'Regressionstests'],
      },
      {
        id: 'ui',
        title: 'UI für KI-Produkte',
        description:
          'Streaming-Antworten und schnelle, serverseitig gerenderte Interfaces — hier zahlen sich fünf Jahre Frontend-Arbeit aus.',
        tags: ['Streaming', 'SSR', 'Performance'],
      },
    ],
    stackHeading: 'Stack',
    groups: [
      { label: 'KI', items: SKILL_ITEMS.ai },
      { label: 'Frontend', items: SKILL_ITEMS.frontend },
      { label: 'Backend & Daten', items: SKILL_ITEMS.backend },
      { label: 'Infra & Tooling', items: SKILL_ITEMS.infra },
    ],
  },
  experience: {
    label: 'Erfahrung',
    heading: 'Wo ich Wirkung erzielt habe.',
    intro:
      'E-Commerce im großen Maßstab, ein Early-Stage-Startup und mein eigenes Produkt.',
    items: [
      {
        company: 'Doratics',
        url: 'https://doratics.com',
        role: 'Full-Stack AI Engineer & Gründerin',
        period: 'Apr 2026 — Heute',
        location: 'München, Deutschland',
        bullets: [
          'Entwicklung einer produktionsreifen SEO-First Website-Plattform für lokale Unternehmen mit Nuxt.js, TypeScript, Tailwind CSS, Nitro.js, Drizzle ORM und Cloudflare (Pages, D1, R2).',
          'Entwicklung einer KI-Seitengenerierung, die aus einer leeren neuen Seite einen direkt bearbeitbaren Entwurf macht: SEO-optimierte Texte, Meta-Tags und FAQs, erzeugt mit LLM Structured Outputs und validiert, bevor sie auf die Seite gelangen.',
          'Aufbau eines „Organizational Brain“: eine RAG-Wissensbasis in einer Vektordatenbank mit Produktinformationen, Entwicklungs- und Website-Standards von Doratics, auf die sich die KI-Ausgaben stützen.',
          'Verbesserung von Performance und SEO durch Server-Side Rendering, Caching und effizientes Rendering sowie Aufbau einer Monorepo-Architektur (Turborepo, pnpm) für bessere Wartbarkeit.',
        ],
        stack: DORATICS_STACK,
      },
      {
        company: 'Expondo GmbH',
        url: 'https://www.expondo.de',
        role: 'Frontend Engineer',
        period: 'Mär 2022 — Mär 2026',
        location: 'Berlin, Deutschland',
        bullets: [
          'Entwicklung und Optimierung skalierbarer, mehrsprachiger E-Commerce-Plattformen mit Vue.js, Nuxt.js, TypeScript und Tailwind CSS für mehr als 5 Millionen Nutzer in über 20 Ländern.',
          'Reduzierung der Ladezeiten von ca. 10 Sekunden auf 2–3 Sekunden durch SSR, Caching-Strategien und die Optimierung von GraphQL-APIs.',
          'Entwicklung wiederverwendbarer UI-Komponenten und skalierbarer Frontend-Architekturen für komplexe internationale Webanwendungen.',
          'Umsetzung zentraler Produktfeatures mit Design-, Backend- und cross-funktionalen Produktteams in einem agilen Umfeld.',
          'Qualitätssicherung durch Code Reviews und automatisierte Tests mit Jest und Cypress.',
        ],
        stack: EXPONDO_STACK,
      },
      {
        company: 'WittyPen Pvt. Ltd.',
        url: 'https://wittypen.com',
        role: 'Junior Full-Stack Developer',
        period: 'Jul 2020 — Feb 2022',
        location: 'Indien · Remote aus Deutschland',
        bullets: [
          'Umsetzung von End-to-End-Features für eine Content-Creation-Plattform mit Vue.js, Tailwind CSS, Laravel REST APIs, MySQL und Docker in einem Early-Stage-Startup.',
          'Modernisierung der Plattform-Oberfläche durch die Migration von Bootstrap-Komponenten zu Tailwind CSS.',
          'Entwicklung Kanban-basierter Content-Workflows und Erweiterung des TinyMCE-Editors um Kommentar- und Inline-Editing-Funktionen.',
          'Konzeption und Entwicklung der Unternehmenswebsite von der Idee bis zur Produktion, inklusive Karriereseite.',
        ],
        stack: WITTYPEN_STACK,
      },
      {
        company: 'Enthralltech Pvt. Ltd.',
        url: 'https://enthral.ai',
        role: 'Graphic Designer & Web Developer',
        period: 'Mai 2016 — Mär 2018',
        location: 'Indien',
        bullets: [
          'Erstellung von E-Learning-Inhalten, interaktiven Trainingsmaterialien und digitalen Medien für internationale Unternehmen, darunter Microsoft und PepsiCo.',
          'Entwicklung interaktiver Lernmodule mit HTML, CSS und JavaScript sowie Gestaltung von UI-Elementen und Grafiken für Online-Lernplattformen.',
        ],
        stack: ENTHRALL_STACK,
      },
    ],
  },
  projects: {
    label: 'Projekte',
    heading: 'Ausgewählte Arbeiten.',
    intro:
      'Eine Plattform, deren KI-Layer ich gebaut habe, zwei KI-Apps, die ich gebaut und deployt habe, und die Webplattformen, an denen ich gelernt habe, wie man ausliefert.',
    featuredLabel: 'Im Fokus · KI',
    visitLabel: 'Ansehen',
    demoLabel: 'Live-Demo',
    codeLabel: 'Code',
    statusLabels: {
      live: 'Live',
      building: 'In Arbeit',
      roadmap: 'Roadmap',
    },
    featured: {
      name: 'Doratics',
      tagline: 'SEO-First Website-Builder für lokale Unternehmen',
      year: '2026 — Heute',
      description:
        'Eine produktive Plattform, mit der lokale Unternehmen schnelle, suchmaschinenoptimierte Websites starten. Ich habe die Plattform und ihren KI-Layer gebaut, der jede neue Seite entwirft und sich dabei auf eine RAG-Wissensbasis stützt.',
      url: 'https://doratics.com',
      stack: DORATICS_STACK,
      featuresHeading: 'Plattform & KI-Layer',
      features: [
        {
          title: 'Website-Plattform',
          detail:
            'SSR, Caching und ein Turborepo-Monorepo auf Cloudflare Pages, D1 und R2.',
          status: 'live',
        },
        {
          title: 'KI-Seitengenerierung',
          detail:
            'Neue Seiten werden mit SEO-optimierten Texten, Meta-Tags und FAQs gefüllt.',
          status: 'live',
        },
        {
          title: 'Structured Outputs mit Validierung',
          detail:
            'LLM-Ausgaben werden gegen ein Schema geprüft, bevor sie auf die Seite gelangen.',
          status: 'live',
        },
        {
          title: 'Organizational Brain (RAG)',
          detail:
            'Eine Vektor-Wissensbasis mit Produktinfos und Standards fundiert die Ausgaben.',
          status: 'live',
        },
        {
          title: 'SEO-Audit-Agent',
          detail:
            'Schlägt Korrekturen vor und wendet sie erst nach Freigabe an.',
          status: 'roadmap',
        },
        {
          title: 'Automatisierte Evals',
          detail: 'Bewertung der Inhaltsqualität.',
          status: 'roadmap',
        },
      ],
    },
    moreHeading: 'Weitere Projekte',
    items: [
      {
        name: 'Ankommen — Expat-Guide für Deutschland',
        kind: 'AI',
        year: '2026',
        stack: ANKOMMEN_STACK,
        description:
          'Ein RAG-Assistent, der Expats in Deutschland bei Anmeldung, Aufenthaltstitel, Miete, Familienleistungen, Krankenversicherung und Steuern hilft, per Text oder Sprache, auf Englisch oder Deutsch. Er antwortet ausschließlich auf Basis offizieller deutscher Quellen mit anklickbaren Zitaten, übersetzt englische Fragen für die Suche in deutschen Texten, kombiniert Vektor- und BM25-Suche und nutzt getestete Tools für Fristen und Leistungsschätzungen. Auf einem Holdout-Set mit 32 Fragen erreichte er 0,96 bei der Korrektheit, gegenüber 0,86 für eine einfache RAG-Baseline. Entstanden im AI-Engineering-Programm des Turing College.',
        url: ANKOMMEN_URL,
      },
      {
        name: 'Hoot — KI-Interviewvorbereitung',
        kind: 'AI',
        year: '2026',
        stack: HOOT_STACK,
        description:
          'Ein KI-Interviewcoach für technische Rollen: geführte oder simulierte Übungsinterviews mit bewertetem Feedback, ein Stellenanzeigen-Analyzer mit Vorbereitungsplan und Bewertungsraster der Interviewer sowie ein Resume-Builder, der den Lebenslauf auf eine Stelle zuschneidet. Jeder Prompt durchläuft einen Security Guard (Regeln, LLM-Klassifikator und Output-Prüfung) mit Ausgabenlimits pro Nutzer. Entstanden im AI-Engineering-Programm des Turing College.',
        url: HOOT_URL,
        repoUrl: HOOT_REPO,
      },
      {
        name: 'Expondo — Mehrsprachige E-Commerce-Plattform',
        kind: 'Web',
        year: '2022 — 2026',
        stack: ['Vue 3', 'Nuxt.js', 'TypeScript', 'GraphQL', 'CommerceTools'],
        description:
          'Mehrsprachige Storefronts für mehr als 5 Millionen Nutzer in über 20 Ländern. Ladezeiten von ca. 10s auf 2–3s reduziert durch SSR, Caching und GraphQL-Optimierung.',
        url: 'https://www.expondo.de',
      },
      {
        name: 'Findesk — Full-Stack-Finanzdashboard',
        kind: 'Web',
        year: '2026',
        stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
        description:
          'Ein Finanzdashboard mit Next.js App Router und Server Actions: Authentifizierung, Analysen, Suche und Pagination auf Basis von PostgreSQL.',
        url: 'https://findsk.vercel.app',
      },
      {
        name: 'WittyPen — Content-Creation-Plattform',
        kind: 'Web',
        year: '2020 — 2022',
        stack: ['Vue.js', 'Tailwind CSS', 'Laravel', 'MySQL', 'Docker'],
        description:
          'End-to-End-Features für eine Content-Plattform: Kanban-Workflows, ein erweiterter TinyMCE-Editor mit Kommentaren und die Migration von Bootstrap zu Tailwind.',
        url: 'https://wittypen.com',
      },
    ],
  },
  background: {
    label: 'Werdegang',
    heading: 'Ausbildung und Nachweise.',
    educationHeading: 'Ausbildung',
    education: [
      {
        degree: 'AI Engineering Program',
        school: 'Turing College',
        period: '2026 — Heute',
        current: true,
      },
      {
        degree: 'Diplom in Grafikdesign und Webentwicklung',
        school: 'Arena Animation, Pune, Indien',
        period: 'Jun 2015 — Dez 2017',
      },
      {
        degree: 'Diplom in Elektronik und Telekommunikation',
        school: 'University of Mumbai, Indien',
        period: 'Jan 2012 — Apr 2015',
      },
    ],
    currentLabel: 'Laufend',
    certificationsHeading: 'Zertifikate',
    certifications: [
      {
        issuer: 'Meta via Coursera',
        name: 'Meta React Spezialisierung',
        verifyUrl: REACT_CERT_URL,
      },
    ],
    verifyLabel: 'Verifizieren',
    languagesHeading: 'Sprachen',
    languages: [
      { name: 'Englisch', level: 'Fließend' },
      { name: 'Deutsch', level: 'B1 (Integrationskurs abgeschlossen)' },
      { name: 'Hindi', level: 'Muttersprache' },
    ],
    workAuthHeading: 'Arbeitsberechtigung',
    workAuth: [
      'Uneingeschränkte Arbeitserlaubnis für Deutschland',
      'Keine Visumsunterstützung erforderlich',
    ],
  },
  contact: {
    label: 'Kontakt',
    heading: 'Sie bauen etwas mit LLMs? Sprechen wir.',
    intro:
      'Ich bin offen für AI-Engineering- und Full-Stack-AI-Rollen, in denen Modell, Produkt und User Experience gleichermaßen zählen.',
    emailLabel: 'E-Mail',
    email: EMAIL,
    phone: PHONE,
    github: GITHUB,
    linkedin: LINKEDIN,
    githubLabel: 'GitHub',
    linkedinLabel: 'LinkedIn',
    phoneLabel: 'Telefon',
  },
  footer: {
    built: 'Gebaut mit Next.js, TypeScript und Tailwind CSS.',
    rights: 'Alle Rechte vorbehalten.',
  },
};

export const content: Record<Locale, ContentShape> = { en, de };
