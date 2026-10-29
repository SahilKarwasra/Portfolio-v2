import {
  siAndroid,
  siClaude,
  siDart,
  siDocker,
  siFastapi,
  siFirebase,
  siFlutter,
  siGin,
  siGit,
  siGithubactions,
  siGo,
  siGooglecloud,
  siHuggingface,
  siJetpackcompose,
  siKotlin,
  siKtor,
  siKubernetes,
  siLangchain,
  siMaterialdesign,
  siModelcontextprotocol,
  siMongodb,
  siNodedotjs,
  siOllama,
  siOpenai,
  siOpenjdk,
  siPostgresql,
  siPython,
  siPytorch,
  siRazorpay,
  siRust,
  siSocketdotio,
  siStripe,
  siTypescript,
  siWebrtc,
  type SimpleIcon,
} from "simple-icons";

const icons: Record<string, SimpleIcon> = {
  android: siAndroid,
  claude: siClaude,
  dart: siDart,
  docker: siDocker,
  fastapi: siFastapi,
  firebase: siFirebase,
  flutter: siFlutter,
  gin: siGin,
  git: siGit,
  githubactions: siGithubactions,
  go: siGo,
  googlecloud: siGooglecloud,
  huggingface: siHuggingface,
  jetpackcompose: siJetpackcompose,
  kotlin: siKotlin,
  ktor: siKtor,
  kubernetes: siKubernetes,
  langchain: siLangchain,
  materialdesign: siMaterialdesign,
  modelcontextprotocol: siModelcontextprotocol,
  mongodb: siMongodb,
  nodedotjs: siNodedotjs,
  ollama: siOllama,
  openai: siOpenai,
  openjdk: siOpenjdk,
  postgresql: siPostgresql,
  python: siPython,
  pytorch: siPytorch,
  razorpay: siRazorpay,
  rust: siRust,
  socketdotio: siSocketdotio,
  stripe: siStripe,
  typescript: siTypescript,
  webrtc: siWebrtc,
};

/** Brand mark from Simple Icons, or a neutral glyph when there is no official mark. */
export default function TechIcon({ slug, className = "h-5 w-5" }: { slug?: string; className?: string }) {
  const icon = slug ? icons[slug] : undefined;
  if (!icon) {
    // Concepts and tools without an official mark get a quiet node glyph.
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v4M12 17v4M3 12h4M17 12h4" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d={icon.path} />
    </svg>
  );
}
