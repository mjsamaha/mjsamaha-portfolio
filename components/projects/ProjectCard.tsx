"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, Anchor } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from "@/src/content/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isOakSignal = project.organization?.slug === "oaksignal";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300 border-slate-200 dark:border-slate-800 relative group">
        
        {/* OakSignal Badge */}
        {isOakSignal && (
          <div className="absolute top-4 right-4 z-20">
            <Badge className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm gap-1 pl-1.5 border-none">
              <Anchor className="w-3 h-3" />
              Part of OakSignal
            </Badge>
          </div>
        )}

        {/* Thumbnail Area (Placeholder or Image) */}
        <div className="relative h-48 bg-slate-100 dark:bg-slate-900 overflow-hidden border-b border-slate-100 dark:border-slate-800">
           {/* If we had images, we'd put Next/Image here. For now, solid color or pattern */}
           <div className={`absolute inset-0 bg-linear-to-br ${isOakSignal ? 'from-blue-600/10 to-slate-900/10' : 'from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900'}`} />
           
           {/* Status Badge */}
           <div className="absolute top-4 left-4 z-10">
             <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${project.statusColor}`}>
               {project.status}
             </span>
           </div>
        </div>

        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="mb-2 text-xl group-hover:text-primary transition-colors">
                <Link href={project.href} className="focus:outline-none">
                  {project.title}
                  <span className="absolute inset-0" aria-hidden="true" />
                </Link>
              </CardTitle>
              {project.category && (
                <CardDescription className="font-medium">
                  {project.category}
                </CardDescription>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent className="grow">
          <p className="text-muted-foreground line-clamp-3 mb-4">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tech.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs font-normal">
                {tech}
              </Badge>
            ))}
            {project.tech.length > 3 && (
              <Badge variant="outline" className="text-xs font-normal text-muted-foreground">
                +{project.tech.length - 3} more
              </Badge>
            )}
          </div>
        </CardContent>

        <CardFooter className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between gap-4 z-20 bg-card">
          <Button variant="ghost" size="sm" className="w-full group/btn" asChild>
            <Link href={project.href}>
              View Details 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
          
          {project.repoUrl && (
             <Button variant="ghost" size="icon" className="shrink-0" asChild>
               <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label="Github Repo">
                 <Github className="h-4 w-4" />
               </a>
             </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
