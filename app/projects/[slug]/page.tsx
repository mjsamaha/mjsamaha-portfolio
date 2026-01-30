import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Format slug for display: "lms-platform" → "LMS Platform"
  const formatSlug = (slug: string) => {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      {/* Back Button */}
      <div className="mb-6">
        <Button variant="ghost" asChild>
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>

      {/* Breadcrumb */}
      <div className="mb-8">
        <p className="text-sm text-muted-foreground">
          Projects / {formatSlug(slug)}
        </p>
      </div>

      {/* Content */}
      <div>
        <h1 className="text-4xl font-bold mb-4">
          Project: {formatSlug(slug)}
        </h1>
        <p className="text-lg text-muted-foreground">
          Project details will be displayed here
        </p>
      </div>
    </main>
  );
}
