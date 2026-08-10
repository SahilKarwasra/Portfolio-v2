import type Lenis from "lenis";

/** Module-level handle so any component can pause/resume smooth scroll. */
export const lenisRef: { current: Lenis | null } = { current: null };
