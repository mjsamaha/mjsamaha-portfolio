import { getProjectBySlug, getAllSlugs } from "@/src/content/projects";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { ProjectDetails } from "@/components/projects/ProjectDetails";
import { TechStackShowcase } from "@/components/projects/TechStackShowcase";
import { BackToProjects } from "@/components/projects/BackToProjects";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Projects`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8 min-h-screen">
      <BackToProjects />

      <div className="space-y-16 animate-in fade-in duration-500">
        <ProjectHero project={project} />

        <ProjectDetails project={project} />

        <div className="max-w-5xl mx-auto">
          <TechStackShowcase technicalDetails={project.technicalDetails} />
        </div>

        <div className="pt-12 border-t">
          <BackToProjects className="py-0" />
        </div>
      </div>
    </main>
  );
}
