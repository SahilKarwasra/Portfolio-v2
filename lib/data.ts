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
  headline: ["Go backend engineer building real-time systems,", "and the mobile apps that run on them."],
  tagline:
    "Concurrent services, WebSocket hubs and fintech-grade APIs in Go, with Rust and AI in the toolkit. MSc Advanced Computing Science at UEA.",
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

export const companies: { name: string; kind: string }[] = [
  { name: "SDLC Corp.", kind: "Fintech" },
  { name: "NS Ventures", kind: "Client products" },
  { name: "Technia Infotech", kind: "Live streaming" },
  { name: "University of East Anglia", kind: "MSc" },
];

export const aboutStatement = [
  "I design and build resilient backend services in Go, and the client applications that rely on them.",
  "From concurrent Go microservices and WebSocket hubs to production mobile apps and LLM-powered features, I care about performance, clean architecture and systems that hold up under load.",
];

export const aboutMeta: { k: string; v: string; highlight?: boolean }[] = [
  { k: "Status", v: "Actively looking for new roles", highlight: true },
  { k: "Now", v: "MSc Advanced Computing Science, University of East Anglia" },
  { k: "Previously", v: "Software Engineer at SDLC Corp." },
  { k: "Based in", v: "Norwich, United Kingdom" },
  { k: "Focus", v: "Go backend & distributed systems (with mobile)" },
];

export const stats: { value: number; decimals?: number; suffix: string; label: string }[] = [
  { value: 3, suffix: "+", label: "years writing production code" },
  { value: 8, suffix: "+", label: "services and apps shipped across backend, mobile & web" },
  { value: 5, suffix: "", label: "user roles in one access-control system" },
  { value: 4, suffix: "", label: "industries, from gaming to fintech" },
];

export type Capability = {
  title: string;
  desc: string;
  visual: "goroutines" | "realtime" | "ai" | "mobile" | "review";
  span: "wide" | "narrow";
};

export const capabilities: Capability[] = [
  {
    title: "Go & backend.",
    desc: "High-performance services and REST APIs in Go: goroutines, channels and worker pools on Gin, with clean architecture over PostgreSQL & MongoDB.",
    visual: "goroutines",
    span: "wide",
  },
  {
    title: "Real-time.",
    desc: "WebSocket hubs and event-driven pipelines behind live chat, streaming and high-frequency updates.",
    visual: "realtime",
    span: "narrow",
  },
  {
    title: "AI-native.",
    desc: "LLM features wired into real products: RAG, tool calling and MCP servers, with Claude, OpenAI and local models.",
    visual: "ai",
    span: "narrow",
  },
  {
    title: "Mobile.",
    desc: "Production Android in Kotlin & Jetpack Compose, cross-platform in Flutter, offline-first.",
    visual: "mobile",
    span: "narrow",
  },
  {
    title: "Leadership.",
    desc: "Coding standards, code review and architecture ownership from design to production.",
    visual: "review",
    span: "narrow",
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

export type StackItem = { name: string; icon?: string };

/** `icon` is a Simple Icons slug, resolved in components/TechIcon.tsx. */
export const stack: { category: string; items: StackItem[] }[] = [
  {
    category: "Languages",
    items: [
      { name: "Go", icon: "go" },
      { name: "Rust", icon: "rust" },
      { name: "Kotlin", icon: "kotlin" },
      { name: "Python", icon: "python" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Dart", icon: "dart" },
      { name: "Java", icon: "openjdk" },
      { name: "SQL" },
    ],
  },
  {
    category: "AI & LLMs",
    items: [
      { name: "Claude API", icon: "claude" },
      { name: "OpenAI API", icon: "openai" },
      { name: "LangChain", icon: "langchain" },
      { name: "MCP", icon: "modelcontextprotocol" },
      { name: "Ollama", icon: "ollama" },
      { name: "Hugging Face", icon: "huggingface" },
      { name: "PyTorch", icon: "pytorch" },
      { name: "RAG pipelines" },
    ],
  },
  {
    category: "Backend & Data",
    items: [
      { name: "Gin", icon: "gin" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Node.js", icon: "nodedotjs" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Firebase", icon: "firebase" },
    ],
  },
  {
    category: "Real-time",
    items: [
      { name: "WebSockets" },
      { name: "Socket.IO", icon: "socketdotio" },
      { name: "WebRTC", icon: "webrtc" },
      { name: "Ktor", icon: "ktor" },
      { name: "REST" },
    ],
  },
  {
    category: "Mobile",
    items: [
      { name: "Jetpack Compose", icon: "jetpackcompose" },
      { name: "Android SDK", icon: "android" },
      { name: "Flutter", icon: "flutter" },
      { name: "Kotlin Multiplatform", icon: "kotlin" },
      { name: "Material 3", icon: "materialdesign" },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "Git", icon: "git" },
      { name: "Google Cloud", icon: "googlecloud" },
      { name: "AWS" },
    ],
  },
  {
    category: "Payments & Services",
    items: [
      { name: "Stripe", icon: "stripe" },
      { name: "Razorpay", icon: "razorpay" },
      { name: "FCM", icon: "firebase" },
    ],
  },
  {
    category: "Architecture",
    items: [
      { name: "Clean Architecture" },
      { name: "Microservices" },
      { name: "Concurrency" },
      { name: "Distributed Systems" },
      { name: "Multi-module" },
      { name: "MVI" },
      { name: "MVVM" },
    ],
  },
];

export const contact = {
  headline: ["Let’s build something", "people actually use."],
  sub: "Open to Go developer, backend and software engineering roles. UK based, happy to work remote, hybrid or on-site.",
};

export const socials = [
  { label: "LinkedIn", href: site.linkedin, external: true },
  { label: "GitHub", href: site.github, external: true },
  { label: "Resume", href: site.resumePath, external: true },
  { label: "Email", href: `mailto:${site.email}`, external: false },
];
