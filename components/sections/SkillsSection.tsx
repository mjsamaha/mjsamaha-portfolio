"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { skills } from "@/src/content/skills";
import { useEffect, useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Component to animate progress bar on mount
const AnimatedProgress = ({ level }: { level: number }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(level), 500);
    return () => clearTimeout(timer);
  }, [level]);

  return <Progress value={progress} className="h-2" />;
};

export default function SkillsSection() {
  return (
    <section className="container max-w-4xl mx-auto px-4 py-16">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-12"
      >
        <motion.div variants={fadeIn} className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((category) => (
            <motion.div key={category.category} variants={fadeIn}>
              <Card className="h-full hover:shadow-md transition-shadow duration-200">
                <CardHeader>
                  <CardTitle>{category.category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2 group">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium group-hover:text-primary transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <AnimatedProgress level={skill.level ?? 0} />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
