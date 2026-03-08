import type { CSSProperties } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

type ColorToken = {
  name: string;
  description: string;
};

const colorTokenGroups: Array<{ title: string; tokens: ColorToken[] }> = [
  {
    title: "Background Surfaces",
    tokens: [
      { name: "--bg-primary", description: "Main page background" },
      { name: "--bg-secondary", description: "Card or section surface" },
      { name: "--bg-tertiary", description: "Accent surface" },
      { name: "--bg-elevated-solid", description: "Solid fallback for alpha surfaces" },
    ],
  },
  {
    title: "Text and Accent",
    tokens: [
      { name: "--text-primary", description: "Primary readable text" },
      { name: "--text-secondary", description: "Supporting text" },
      { name: "--text-muted", description: "Muted metadata" },
      { name: "--text-accent", description: "Accent text" },
      { name: "--accent-primary", description: "Primary CTA color" },
      { name: "--accent-primary-hover", description: "Primary CTA hover" },
      { name: "--accent-subtle", description: "Low emphasis accent" },
    ],
  },
  {
    title: "Borders, Status, and Glow",
    tokens: [
      { name: "--border-default", description: "Default border" },
      { name: "--border-soft", description: "Subtle border" },
      { name: "--border-strong", description: "High emphasis border" },
      { name: "--status-active-bg", description: "Status background" },
      { name: "--status-active-text", description: "Status text" },
      { name: "--status-active-ring", description: "Status ring" },
      { name: "--glow-cyan", description: "Primary glow tint" },
      { name: "--glow-blue", description: "Secondary glow tint" },
      { name: "--focus-ring", description: "Focus ring color" },
    ],
  },
];

const gradientStyle: CSSProperties = {
  backgroundImage:
    "linear-gradient(135deg, var(--surface-gradient-from), var(--surface-gradient-via), var(--surface-gradient-to))",
};

const glowStyle: CSSProperties = {
  boxShadow: "var(--shadow-glow-primary)",
};

export default function ThemeVerificationPage() {
  return (
    <main className="min-h-screen py-10 md:py-14">
      <section className="mx-auto max-w-6xl space-y-8">
        <header
          className="rounded-3xl border p-6 md:p-8"
          style={{
            borderColor: "var(--border-default)",
            backgroundColor: "var(--bg-elevated-70)",
          }}
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-3">
              <p
                className="text-xs font-semibold uppercase tracking-[0.18em]"
                style={{ color: "var(--text-accent)" }}
              >
                Internal QA Route
              </p>
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl" style={{ color: "var(--text-primary)" }}>
                Dark Theme Verification
              </h1>
              <p className="max-w-3xl text-sm leading-relaxed md:text-base" style={{ color: "var(--text-secondary)" }}>
                This route is the Batch 1.5 visual regression surface. Validate token mapping,
                component states, readability, and contrast here before propagating theme updates.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button asChild variant="outline">
                <Link href="/">Back to Portfolio</Link>
              </Button>
            </div>
          </div>
        </header>

        <section className="space-y-5">
          <h2 className="text-xl font-semibold" style={{ color: "var(--text-primary)" }}>
            Token Swatches
          </h2>
          <div className="grid gap-5">
            {colorTokenGroups.map((group) => (
              <div key={group.title} className="space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em]" style={{ color: "var(--text-accent)" }}>
                  {group.title}
                </h3>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {group.tokens.map((token) => (
                    <article
                      key={token.name}
                      className="rounded-2xl border p-3"
                      style={{ borderColor: "var(--border-soft)", backgroundColor: "var(--bg-secondary)" }}
                    >
                      <div className="mb-2 h-14 rounded-xl border" style={{ backgroundColor: `var(${token.name})`, borderColor: "var(--border-default)" }} />
                      <p className="font-mono text-xs" style={{ color: "var(--text-primary)" }}>
                        {token.name}
                      </p>
                      <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                        {token.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <Card className="border" style={{ borderColor: "var(--border-default)", backgroundColor: "var(--bg-secondary)" }}>
            <CardHeader>
              <CardTitle style={{ color: "var(--text-primary)" }}>Typography Hierarchy</CardTitle>
              <CardDescription style={{ color: "var(--text-muted)" }}>
                Validate hierarchy and readability on dark surfaces.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
                Primary Heading Sample
              </p>
              <p className="text-base" style={{ color: "var(--text-secondary)" }}>
                Secondary paragraph text for body copy and section descriptions.
              </p>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                Muted metadata, helper text, and non-critical labels.
              </p>
              <p className="text-sm font-semibold" style={{ color: "var(--text-accent)" }}>
                Accent text used for eyebrow labels and callouts.
              </p>
            </CardContent>
          </Card>

          <Card className="border" style={{ borderColor: "var(--border-default)", backgroundColor: "var(--bg-secondary)" }}>
            <CardHeader>
              <CardTitle style={{ color: "var(--text-primary)" }}>Surface and Glow</CardTitle>
              <CardDescription style={{ color: "var(--text-muted)" }}>
                Gradient, elevated cards, and glow behavior in one place.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-2xl border p-4" style={{ ...gradientStyle, borderColor: "var(--border-default)" }}>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  CTA gradient surface sample
                </p>
              </div>
              <div
                className="rounded-2xl border p-4"
                style={{ borderColor: "var(--border-strong)", backgroundColor: "var(--bg-elevated-60)", ...glowStyle }}
              >
                <p className="text-sm" style={{ color: "var(--text-primary)" }}>
                  Elevated translucent surface with tokenized glow
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <Card className="border" style={{ borderColor: "var(--border-default)", backgroundColor: "var(--bg-secondary)" }}>
            <CardHeader>
              <CardTitle style={{ color: "var(--text-primary)" }}>Buttons and Badges</CardTitle>
              <CardDescription style={{ color: "var(--text-muted)" }}>
                Hover, focus, active, and disabled checks for key controls.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button>Default</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button disabled>Disabled</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge className="ring-1" style={{ backgroundColor: "var(--status-active-bg)", color: "var(--status-active-text)", boxShadow: "inset 0 0 0 1px var(--status-active-ring)" }}>
                  Active Status
                </Badge>
              </div>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                Keyboard test: tab through controls and confirm focus ring visibility.
              </p>
            </CardContent>
          </Card>

          <Card className="border" style={{ borderColor: "var(--border-default)", backgroundColor: "var(--bg-secondary)" }}>
            <CardHeader>
              <CardTitle style={{ color: "var(--text-primary)" }}>Forms and Progress</CardTitle>
              <CardDescription style={{ color: "var(--text-muted)" }}>
                Validate input readability, placeholders, and progress contrast.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Name" />
              <Input placeholder="Email" type="email" />
              <Textarea placeholder="Message" rows={4} />
              <div className="space-y-2">
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  Progress at 68%
                </p>
                <Progress value={68} className="h-2.5" />
              </div>
              <div className="rounded-lg border p-3" style={{ borderColor: "var(--border-soft)", backgroundColor: "var(--state-hover-overlay)" }}>
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                  State overlay token preview (`--state-hover-overlay`)
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-xs" style={{ color: "var(--text-muted)", opacity: "var(--state-disabled-opacity)" }}>
                Disabled opacity token preview
              </p>
            </CardFooter>
          </Card>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold" style={{ color: "var(--text-primary)" }}>
            Overlay and Modal Simulation
          </h2>
          <div className="relative overflow-hidden rounded-2xl border p-6" style={{ borderColor: "var(--border-default)", backgroundColor: "var(--bg-primary)" }}>
            <div className="absolute inset-0" style={{ backgroundColor: "var(--bg-elevated-70)" }} />
            <div className="relative mx-auto max-w-md rounded-xl border p-4" style={{ borderColor: "var(--border-strong)", backgroundColor: "var(--bg-secondary)", boxShadow: "var(--shadow-elevated)" }}>
              <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                Modal Surface
              </p>
              <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>
                This panel approximates lightbox/dialog treatment with tokenized backdrop and borders.
              </p>
              <div className="mt-3 flex gap-2">
                <Button size="sm">Confirm</Button>
                <Button size="sm" variant="outline">
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
