"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { aboutMe } from "@/src/content/resume";

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function AboutSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <motion.div 
        className="container max-w-4xl mx-auto px-4"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Avatar Placeholder - Optional */}
          {/* 
          <div className="relative w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-full overflow-hidden border-4 border-muted">
             <img src="/avatar.jpg" alt="Profile" className="object-cover w-full h-full" />
          </div> 
          */}
          
          <motion.div 
            className="flex-1 space-y-6 text-center md:text-left"
            variants={staggerContainer}
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold tracking-tight bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent"
            >
              Matthew Samaha
            </motion.h1>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-muted-foreground font-medium"
            >
              {aboutMe.tagline}
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              {aboutMe.intro}
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap justify-center md:justify-start gap-3 pt-2"
            >
              {aboutMe.highlights.map((highlight, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm"
                >
                  {highlight}
                </Badge>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
