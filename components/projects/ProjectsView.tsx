"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "@/src/content/projects";
import { OrganizationHero } from "./OrganizationHero";
import { ProjectCard } from "./ProjectCard";
import { ProjectFilters, FilterType } from "./ProjectFilters";

export function ProjectsView() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const projectsGridRef = useRef<HTMLDivElement>(null);

  // Filter Logic
  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "oaksignal") return project.organization?.slug === "oaksignal";
    if (activeFilter === "independent") return !project.organization;
    return true;
  });

  // Calculate Counts
  const counts = {
    all: projects.length,
    oaksignal: projects.filter(p => p.organization?.slug === "oaksignal").length,
    independent: projects.filter(p => !p.organization).length,
  };

  const scrollToRef = (ref: React.RefObject<HTMLDivElement | null>) => { // Adjusted type to allow null
    if (ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleHeroCta = () => {
    setActiveFilter("oaksignal");
    // Small delay to allow state update before scrolling (though react batches, it's safer for UX flow)
    setTimeout(() => scrollToRef(projectsGridRef), 50); 
  };
  
  // Custom type guard or adjustment for ref type compatibility isn't strictly needed if we just cast or use simple ref object.
  // The RefObject<HTMLDivElement> is standard.

  return (
    <div className="space-y-12">
      {/* OakSignal Hero Section */}
      <OrganizationHero onViewProjectsClick={handleHeroCta} />

      {/* Main Content Area */}
      <div ref={projectsGridRef} className="scroll-mt-24">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">All Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
             A collection of tools, applications, and experiments.
          </p>
        </div>

        {/* Filters */}
        <ProjectFilters 
            activeFilter={activeFilter} 
            onFilterChange={setActiveFilter} 
            counts={counts} 
        />
        
        {/* Projects Grid */}
        <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
            <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
            </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-dashed border-slate-200 dark:border-slate-800"
            >
                <p className="text-muted-foreground">No projects found for this filter.</p>
                <button 
                    onClick={() => setActiveFilter("all")}
                    className="mt-4 text-primary hover:underline text-sm font-medium"
                >
                    Clear filters
                </button>
            </motion.div>
        )}
      </div>
    </div>
  );
}
