export const site = {
  name: "Sahil Karwasra",
  firstName: "Sahil",
  lastName: "Karwasra",
  role: "Software Engineer",
  subRole: "Backend(GoLang) & Mobile Developer(Android/iOS)",
  location: "Norwich, United Kingdom",
  shortLocation: "Norwich, UK",
  email: "sahilkarwasra11@gmail.com",
  url: "https://sahilkarwasra.vercel.app",
  status: "Open to new roles",
  heroIntro:
    "I build high-performance backend systems and APIs in Go (Golang), paired with production mobile apps. Specialised in concurrent services, real-time WebSockets, and clean architecture behind fintech and live platforms. Currently pursuing an MSc in Advanced Computing Science at the University of East Anglia, and open to new roles.",
  resumePath: "/resume.pdf",
  github: "https://github.com/sahilkarwasra",
  linkedin: "https://www.linkedin.com/in/sahilkarwasra/",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  // { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
];

export const marqueeItems = [
  "Go (Golang)",
  "Backend & APIs",
  "Concurrent Systems",
  "WebSockets",
  "Microservices",
  "Android & iOS",
  "Kotlin",
  "Jetpack Compose",
  "Flutter",
  "Fintech",
  "Clean Architecture",
  "Open to new roles",
];

export const aboutLede = "Go developer with scalable backend and full-stack mobile engineering expertise.";

export const aboutStatement =
  "I design and build resilient backend services in Go, high-concurrency systems, and the client applications that rely on them. From concurrent Go microservices and WebSocket hubs to production mobile apps, I focus on performance, clean architecture, and systems that scale effortlessly under load.";

export const aboutMeta: { k: string; v: string; highlight?: boolean }[] = [
  { k: "Status", v: "Actively looking for new roles", highlight: true },
  { k: "Now", v: "MSc Advanced Computing Science, University of East Anglia" },
  { k: "Previously", v: "Software Engineer at SDLC Corp." },
  { k: "Based in", v: "Norwich, United Kingdom" },
  { k: "Focus", v: "Go backend & distributed systems (with mobile)" },
];

export const stats: { value: number; decimals?: number; suffix: string; label: string; color: "sun" | "sky" | "violet" | "droid" }[] = [
  { value: 3, suffix: "+", label: "years writing production code", color: "sun" },
  { value: 8, suffix: "+", label: "services and apps shipped across backend, mobile & web", color: "sky" },
  { value: 5, suffix: "", label: "user roles in one access-control system", color: "violet" },
  { value: 4, suffix: "", label: "industries, from gaming to fintech", color: "droid" },
];

export type Capability = {
  title: string;
  desc: string;
  icon: "phone" | "layers" | "bolt" | "people";
  color: "sun" | "sky" | "violet" | "droid";
};

export const capabilities: Capability[] = [
  {
    title: "Go & Backend Engineering",
    desc: "High-performance services and APIs written in Go (Golang). Concurrency with goroutines and channels, RESTful APIs, Gin, clean architecture, and database persistence with PostgreSQL & MongoDB.",
    icon: "bolt",
    color: "sun",
  },
  {
    title: "Real-time & Distributed Systems",
    desc: "Low-latency systems, WebSocket hubs, and event-driven pipelines. Built to power real-time chat, live streaming, and high-frequency updates.",
    icon: "layers",
    color: "sky",
  },
  {
    title: "Mobile App Development",
    desc: "Production native Android (Kotlin & Jetpack Compose) and cross-platform (Flutter). Clean architecture, offline caching, and robust API integrations.",
    icon: "phone",
    color: "droid",
  },
  {
    title: "Architecture & Leadership",
    desc: "Coding standards, code reviews, and architecture leadership. Experienced leading engineering teams and owning full delivery from design to production.",
    icon: "people",
    color: "violet",
  },
];

export type Job = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  points: string[];
  tech: string[];
};

export const now = {
  label: "Now",
  period: "Sep 2026 to present",
  title: "MSc Advanced Computing Science, University of East Anglia",
  desc: "Full-time postgraduate study in Norwich while actively interviewing for Go, backend and software engineering roles across the UK, remote or hybrid.",
};

export const experience: Job[] = [
  {
    company: "SDLC Corp.",
    role: "Software Engineer",
    period: "Aug 2025 to Aug 2026",
    location: "Noida, India",
    summary: "Full-stack mobile engineering on a fintech super app, plus leading the Android team.",
    points: [
      "Led the complete architectural overhaul of a legacy fintech app, migrating it to Jetpack Compose and clean architecture so one codebase could support multiple business verticals.",
      "Designed and built a role-based access system for 5+ user types (distributor, merchant, sub-distributor, individual user, selling-point manager), each with its own feature set and permissions.",
      "Owned end-to-end delivery of the integrated payments, e-commerce and taxi-booking modules, coordinating with backend and design teams for a seamless cross-module experience.",
      "Led the Android team: coding standards, architecture guidelines, review process and CI/CD. Migrated the networking layer from Retrofit to Ktor Client.",
      "Cut crashes and improved responsiveness by optimising critical rendering paths and state management.",
    ],
    tech: ["Go Lang", "Kotlin", "Jetpack Compose", "Ktor", "Dagger Hilt", "Room", "WorkManager", "Stripe", "FCM", "CI/CD"],
  },
  {
    company: "NS Ventures",
    role: "Software Engineer",
    period: "Feb 2025 to Aug 2025",
    location: "Stockholm, Sweden",
    summary: "Owned delivery of six products for international clients, from requirements to deployment.",
    points: [
      "Owned end-to-end development of 4 mobile apps (Android and iOS) and 2 web apps: client requirements, architecture, implementation and deployment.",
      "Built native Compose apps and Flutter cross-platform products, with Firebase backends on Node.js Cloud Functions for auth, real-time data and storage.",
      "Worked alongside Python backend and AI/ML engineers to integrate intelligent features, and acted as technical liaison for clients in Sweden.",
    ],
    tech: ["Flutter", "Kotlin", "Jetpack Compose", "Firebase", "Node.js", "Cloud Functions", "Google Maps SDK", "AI integration"],
  },
  {
    company: "Technia Infotech",
    role: "Software Developer",
    period: "Jan 2024 to Feb 2025",
    location: "Gurgaon, India",
    summary: "Architected a live-streaming social gaming platform from the ground up.",
    points: [
      "Architected and built a live-streaming platform where creators broadcast gameplay, chat with viewers in real time and run interactive sessions with voice-call rewards.",
      "Implemented the video streaming infrastructure, live comment system, onboarding and engagement features with Jetpack Compose, MVI and clean architecture.",
      "Integrated Razorpay to monetise creator and viewer interactions and handle in-app transactions.",
      "Refactored the legacy codebase and optimised real-time data flows for smooth performance under live load.",
    ],
    tech: ["Kotlin", "Jetpack Compose", "MVI", "Clean Architecture", "Socket.IO", "WebRTC", "Video streaming", "Razorpay"],
  },
];

export type School = {
  institution: string;
  degree: string;
  period: string;
  location: string;
  status: "In progress" | "Completed";
  color: "violet" | "sun";
  note: string;
};

export const education: School[] = [
  {
    institution: "University of East Anglia",
    degree: "MSc Advanced Computing Science",
    period: "Sep 2026 to Sep 2027",
    location: "Norwich, United Kingdom",
    status: "In progress",
    color: "violet",
    note: "Postgraduate study across advanced software engineering, systems and computing science, building on three years in industry.",
  },
  {
    institution: "Panjab University",
    degree: "BS in Computer Application",
    period: "May 2021 to May 2024",
    location: "Chandigarh, India",
    status: "Completed",
    color: "sun",
    note: "Final-year project: Rewatch, a video streaming app built with Jetpack Compose and Firebase.",
  },
];

export type Project = {
  name: string;
  tagline: string;
  desc: string;
  tech: string[];
  color: "sky" | "pink" | "droid" | "violet";
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    name: "TextNow",
    tagline: "Real-time messaging with a Go backend",
    desc: "A chat app split into a Kotlin and Jetpack Compose client with feature-first clean architecture and Room for offline messages, and a Go backend on Gin with a Gorilla WebSocket hub, MongoDB, JWT and OTP auth, Firebase push notifications and call signalling.",
    tech: ["Kotlin", "Jetpack Compose", "Room", "Go", "Gin", "WebSocket", "MongoDB", "JWT", "FCM"],
    color: "sky",
    links: [
      { label: "Android app", href: "https://github.com/SahilKarwasra/TextNowJetpackCompose" },
      { label: "Go backend", href: "https://github.com/SahilKarwasra/TextNowGoBackend" },
    ],
  },
  {
    name: "Rewatch",
    tagline: "A YouTube-style streaming app",
    desc: "Stream, upload, like, comment and subscribe. Deep links open specific videos directly. Firebase Authentication, Firestore and Storage underneath. Built as my final-year graduation project.",
    tech: ["Kotlin", "Jetpack Compose", "Firebase Auth", "Firestore", "Firebase Storage", "NavDeepLink"],
    color: "pink",
    links: [{ label: "View code", href: "https://github.com/SahilKarwasra/Re-watchui" }],
  },
  {
    name: "Social",
    tagline: "Minimal photo sharing in Flutter",
    desc: "An Instagram-style feed with follow and unfollow, profiles and photo posts, in light and dark themes. Bloc for state, Firebase for auth and data, Supabase for secure media storage.",
    tech: ["Flutter", "Dart", "Bloc", "Firebase", "Supabase"],
    color: "droid",
    links: [{ label: "View code", href: "https://github.com/SahilKarwasra/Social" }],
  },
  {
    name: "CryptoTracker",
    tagline: "Live crypto prices with hand-drawn charts",
    desc: "Real-time prices, favourites, search and dark mode, with interactive price graphs drawn from scratch on Canvas. Koin for dependency injection, Ktor Client for networking and adaptive layouts for tablets.",
    tech: ["Kotlin", "Jetpack Compose", "Ktor", "Koin", "Canvas", "Adaptive layouts"],
    color: "violet",
    links: [{ label: "View code", href: "https://github.com/SahilKarwasra/CryptoTracker" }],
  },
];

export const stack: { category: string; items: string[]; exploring?: boolean }[] = [
  { category: "Languages", items: ["Go (Golang)", "Kotlin", "Java", "Dart", "TypeScript", "SQL"] },
  { category: "Backend & Systems", items: ["Gin", "Distributed Systems", "PostgreSQL", "MongoDB", "Node.js", "Firebase", "FastAPI"] },
  { category: "Real-time & Network", items: ["WebSockets", "Socket.IO", "WebRTC", "Ktor", "Retrofit", "REST"] },
  { category: "Architecture", items: ["Clean Architecture", "Distributed Systems", "Concurrency", "Microservices", "Multi-module", "MVI", "MVVM"] },
  { category: "Mobile", items: ["Jetpack Compose", "Android SDK", "Flutter", "Kotlin Multiplatform", "Material 3"] },
  { category: "DevOps & Cloud", items: ["Docker", "Kubernetes", "Cloud Architecture", "Git", "GitHub Actions"] },
  { category: "Payments & Services", items: ["Stripe", "Razorpay", "FCM", "Google Cloud", "AWS"] },
  { category: "Currently exploring", items: ["Rust"], exploring: true },
];

export const contact = {
  headline: "Let's build something people actually use.",
  sub: "Open to Go developer, backend and software engineering roles. UK based, happy to work remote, hybrid or on-site.",
};

export const socials = [
  { label: "LinkedIn", href: site.linkedin, external: true },
  { label: "GitHub", href: site.github, external: true },
  { label: "Resume", href: site.resumePath, external: true },
  { label: "Email", href: `mailto:${site.email}`, external: false },
];
