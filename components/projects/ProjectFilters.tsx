"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type FilterType = "all" | "oaksignal" | "independent";

interface ProjectFiltersProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  counts: {
    all: number;
    oaksignal: number;
    independent: number;
  };
  className?: string;
}

export function ProjectFilters({ 
  activeFilter, 
  onFilterChange, 
  counts,
  className 
}: ProjectFiltersProps) {
  
  const filters: { id: FilterType; label: string }[] = [
    { id: "all", label: "All Projects" },
    { id: "oaksignal", label: "OakSignal" },
    { id: "independent", label: "Independent" },
  ];

  return (
    <div className={cn("flex flex-wrap gap-2 justify-center mb-10", className)}>
      <div className="bg-slate-100 dark:bg-slate-900/50 p-1.5 rounded-full inline-flex md:gap-1 shadow-inner overflow-hidden">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className={cn(
              "relative px-4 py-2 rounded-full text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring z-10",
              activeFilter === filter.id 
                ? "text-primary-foreground" 
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {activeFilter === filter.id && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-primary rounded-full -z-10 shadow-sm"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {filter.label}
              <span className={cn(
                "text-[10px] px-1.5 py-0.5 rounded-full bg-black/10 dark:bg-white/10",
                 activeFilter === filter.id ? "text-primary-foreground/90" : "text-muted-foreground/80"
              )}>
                {counts[filter.id]}
              </span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
