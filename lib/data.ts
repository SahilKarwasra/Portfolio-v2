export const site = {
  name: "Sahil Karwasra",
  firstName: "SAHIL",
  lastName: "KARWASRA",
  role: "SOFTWARE ENGINEER",
  subRole: "FULL-STACK MOBILE",
  location: "LONDON, UNITED KINGDOM",
  coords: "51.5072° N / 0.1276° W",
  timezoneLabel: "LON",
  email: "sahilkarwasra11@gmail.com",
  heroIntro:
    "Android-first engineer shipping fintech super apps, live-streaming platforms and the real-time systems behind them. Currently leading mobile development at SDLC Corp.",
  url: "https://sahilkarwasra.app",
};

export const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "STACK", href: "#stack" },
  { label: "CONTACT", href: "#contact" },
];

export const marqueeTop = [
  "ANDROID",
  "KOTLIN",
  "JETPACK COMPOSE",
  "FLUTTER",
  "FIREBASE",
  "REAL-TIME",
  "FINTECH",
  "CLEAN ARCHITECTURE",
];

export const marqueeAvailability = [
  "OPEN TO SENIOR ROLES",
  "LONDON",
  "REMOTE",
  "ON-SITE",
  "LET'S TALK",
];

export const aboutStatement =
  "I build software people carry in their pockets. Fintech super apps. Live-streaming platforms. Real-time everything. From first commit to production release I own the full stack — Kotlin on the surface, cloud underneath, clean architecture holding it all together.";

export const aboutMeta = [
  { k: "CURRENTLY", v: "SOFTWARE ENGINEER @ SDLC CORP." },
  { k: "BASED IN", v: "LONDON, UNITED KINGDOM" },
  { k: "FOCUS", v: "ANDROID / FULL-STACK MOBILE" },
  { k: "EDUCATION", v: "B.S. COMPUTER APPLICATION — PANJAB UNIVERSITY" },
];

export const stats = [
  { value: 2, suffix: "+", label: "YEARS WRITING PRODUCTION CODE" },
  { value: 8, suffix: "+", label: "APPS SHIPPED — ANDROID, IOS & WEB" },
  { value: 5, suffix: "", label: "USER ROLES IN ONE RBAC SYSTEM" },
  { value: 4, suffix: "", label: "INDUSTRIES — FINTECH TO GAMING" },
];

export const capabilities = [
  {
    index: "A",
    title: "ANDROID ENGINEERING",
    desc: "Native apps in Kotlin and Jetpack Compose — clean architecture, multi-module builds, made to scale past v1.",
  },
  {
    index: "B",
    title: "CROSS-PLATFORM",
    desc: "Flutter and KMP when one codebase makes sense. The same quality bar on both platforms.",
  },
  {
    index: "C",
    title: "BACKEND & REAL-TIME",
    desc: "Firebase, Node.js and Go services. Sockets, WebRTC and push — for products that update live.",
  },
  {
    index: "D",
    title: "TEAM LEADERSHIP",
    desc: "Standards, code review and mentoring. I've led the Android team and kept the codebase honest.",
  },
];

export type Job = {
  tag: string;
  company: string;
  role: string;
  period: string;
  points: string[];
  tech: string[];
};

export const experience: Job[] = [
  {
    tag: "RELEASE_03",
    company: "SDLC CORP.",
    role: "SOFTWARE ENGINEER",
    period: "AUG 2025 — PRESENT",
    points: [
      "Led the architectural overhaul of a legacy fintech app — migrated to Jetpack Compose and clean architecture across multiple business verticals.",
      "Designed a role-based access system for 5+ user types and shipped integrated payments, e-commerce and taxi-booking modules end to end.",
      "Lead the Android team: coding standards, reviews and CI/CD. Migrated the networking layer from Retrofit to Ktor.",
    ],
    tech: ["Kotlin", "Compose", "Ktor", "Hilt", "Room", "WorkManager", "Stripe", "FCM"],
  },
  {
    tag: "RELEASE_02",
    company: "NS VENTURES",
    role: "SOFTWARE ENGINEER",
    period: "FEB 2025 — AUG 2025",
    points: [
      "Owned end-to-end delivery of 4 mobile apps (Android + iOS) and 2 web apps — requirements through deployment.",
      "Built native Compose apps and Flutter cross-platform products; architected Firebase backends with Node.js Cloud Functions.",
      "Integrated AI/ML features alongside backend engineers; technical liaison for international clients in Sweden.",
    ],
    tech: ["Flutter", "Kotlin", "Compose", "Firebase", "Node.js", "Maps SDK"],
  },
  {
    tag: "RELEASE_01",
    company: "TECHNIA INFOTECH",
    role: "SOFTWARE DEVELOPER",
    period: "JAN 2024 — FEB 2025",
    points: [
      "Architected a live-streaming social gaming platform — broadcasts, real-time chat, emotes and voice-call rewards.",
      "Built the streaming infrastructure and engagement systems with MVI + clean architecture; Socket.IO and WebRTC underneath.",
      "Integrated Razorpay to monetise creator–viewer interactions; refactored legacy code for real-time performance.",
    ],
    tech: ["Kotlin", "Compose", "MVI", "WebRTC", "Socket.IO", "Razorpay"],
  },
];

export const stack: { category: string; items: string[]; dashed?: boolean }[] = [
  { category: "LANGUAGES", items: ["Kotlin", "Dart", "Go", "Java", "TypeScript"] },
  { category: "MOBILE", items: ["Jetpack Compose", "Android SDK", "Flutter", "KMP", "Material 3"] },
  { category: "ARCHITECTURE", items: ["MVI", "MVVM", "Clean Architecture", "Multi-module", "SOLID"] },
  { category: "NETWORK & REAL-TIME", items: ["Ktor", "Retrofit", "WebSockets", "Socket.IO", "WebRTC", "REST"] },
  { category: "BACKEND & CLOUD", items: ["Firebase", "Gin", "FastAPI", "Node.js", "Postgresql", "MongoDB", "Room"] },
  { category: "WEB", items: ["Flutter Web", "HTML", "CSS"] },
  { category: "PAYMENTS & SERVICES", items: ["Stripe", "Razorpay", "FCM", "Google Maps SDK"] },
  { category: "TOOLING", items: ["Git", "GitHub Actions", "CI/CD", "Gradle", "Figma"] },
  { category: "CURRENTLY EXPLORING", items: ["Go Lang", "Swift", "Cloud architecture"], dashed: true },
];

export const socials = [
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/sahilkarwasra/" },
  { label: "GITHUB", href: "https://github.com/sahilkarwasra" },
  { label: "RESUME", href: "/resume.pdf" },
  { label: "EMAIL", href: "mailto:sahilkarwasra11@gmail.com" },
];
