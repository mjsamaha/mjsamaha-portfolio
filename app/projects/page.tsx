import { Metadata } from "next";
import { ProjectsView } from "@/components/projects/ProjectsView";

export const metadata: Metadata = {
  title: "Projects | OakSignal & Portfolio",
  description: "Explore my portfolio of projects, including the OakSignal suite of digital tools for cadet organizations.",
};

export default function ProjectsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <ProjectsView />
    </main>
  );
}
