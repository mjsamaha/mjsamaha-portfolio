"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Anchor, Signal } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface OrganizationHeroProps {
  onViewProjectsClick: () => void;
}

export function OrganizationHero({ onViewProjectsClick }: OrganizationHeroProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white mb-12 shadow-xl border border-slate-200 dark:border-slate-800"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-64 h-64 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl" />
      
      <div className="relative z-10 px-8 py-12 md:py-16 md:px-12 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
        <div className="flex-1 max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="outline" className="border-blue-500/30 text-blue-600 dark:text-blue-300 bg-blue-500/10 dark:bg-blue-900/30">
              <span className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400 mr-2 animate-pulse" />
              Part of OakSignal
            </Badge>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-slate-900 dark:text-white">
            OakSignal
          </h2>
          
          <p className="text-xl md:text-2xl font-light text-slate-600 dark:text-blue-100 mb-6">
            Building the digital infrastructure for cadet training
          </p>
          
          <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 leading-relaxed max-w-xl">
            OakSignal is a suite of tools designed to modernize training and operations for cadet organizations. 
            From mastering naval signals to managing equipment logistics, each product addresses real operational 
            challenges with practical, user-focused solutions.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              onClick={onViewProjectsClick}
              className="bg-blue-600 hover:bg-blue-700 text-white border-none shadow-md shadow-blue-500/20"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-blue-100 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white bg-transparent"
            >
              <Link href="https://mjsamaha.github.io/oaksignal-landing/" target="_blank" rel="noopener noreferrer">
                Visit Website
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Visual Element / Brand Representation */}
        <div className="hidden md:flex flex-col gap-4">
            <div className="p-6 rounded-2xl bg-white/60 dark:bg-white/10 backdrop-blur-sm border border-slate-200 dark:border-white/10 w-64 transform rotate-3 hover:rotate-0 transition-transform duration-300 shadow-lg dark:shadow-none">
                <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-600 rounded-lg shadow-sm">
                        <Signal className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-slate-800 dark:text-white">SignalsMaster</span>
                </div>
                <div className="w-full h-2 bg-slate-200 dark:bg-white/20 rounded-full mb-2">
                    <div className="w-3/4 h-full bg-blue-500 dark:bg-blue-400 rounded-full" />
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-300">Interactive training suite</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/60 dark:bg-white/10 backdrop-blur-sm border border-slate-200 dark:border-white/10 w-64 transform -rotate-2 hover:rotate-0 transition-transform duration-300 ml-8 shadow-lg dark:shadow-none">
                <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-indigo-600 rounded-lg shadow-sm">
                        <Anchor className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-slate-800 dark:text-white">Quartermaster</span>
                </div>
                 <div className="w-full h-2 bg-slate-200 dark:bg-white/20 rounded-full mb-2">
                    <div className="w-1/2 h-full bg-indigo-500 dark:bg-indigo-400 rounded-full" />
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-300">Logistics management</p>
            </div>
        </div>
      </div>
    </motion.div>
  );
}
