export interface ActiveProjectSpotlightConfig {
  slug: string;
  displayTitle: string;
  eyebrow: string;
  missionLabel: string;
  description: string;
  audienceLabel: string;
  progressLabel: string;
  completedInitiatives: number;
  totalInitiatives: number;
  progressFootnote: string;
}

export const activeProjectSpotlight: ActiveProjectSpotlightConfig = {
  slug: "signalsmaster",
  displayTitle: "Signals Master",
  eyebrow: "OakSignal Priority Project",
  missionLabel: "Mission-Critical Active Build",
  description:
    "Educational naval training application helping sea cadets master maritime signal flags and pennants through structured, practical learning.",
  audienceLabel: "Sea Cadet Audience",
  progressLabel: "Major initiatives completed",
  completedInitiatives: 2,
  totalInitiatives: 5,
  progressFootnote:
    "Focused on high-impact training workflows for cadet communication readiness.",
};
