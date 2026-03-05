import { cn } from "@/lib/utils";

interface NavalGridBackgroundProps {
  className?: string;
}

export function NavalGridBackground({ className }: NavalGridBackgroundProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      <div className="absolute inset-0 opacity-35 bg-[linear-gradient(to_right,rgba(3,105,161,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(3,105,161,0.18)_1px,transparent_1px)] bg-size-[28px_28px] dark:bg-[linear-gradient(to_right,rgba(56,189,248,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.16)_1px,transparent_1px)]" />

      <div className="absolute inset-0 bg-radial from-cyan-300/15 via-transparent to-transparent dark:from-cyan-400/10" />

      <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-cyan-300/25 blur-3xl animate-pulse dark:bg-cyan-500/20" />
      <div className="absolute -bottom-24 -left-8 h-64 w-64 rounded-full bg-blue-300/25 blur-3xl animate-pulse dark:bg-blue-500/20" />

      <div className="absolute inset-y-0 -left-1/4 w-1/2 -rotate-12 bg-linear-to-r from-transparent via-cyan-200/20 to-transparent dark:via-cyan-300/15" />
      <div className="absolute inset-y-0 right-[-20%] w-1/3 rotate-12 bg-linear-to-r from-transparent via-sky-300/15 to-transparent dark:via-sky-400/15" />
    </div>
  );
}
