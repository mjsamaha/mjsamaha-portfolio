"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-16 bg-linear-to-r from-primary/10 to-accent/10">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Want to see more of my work?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div whileHover={{ y: -2 }}>
              <Button asChild size="lg">
                <Link href="/projects">View Projects</Link>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ y: -2 }}>
              <Button asChild variant="outline" size="lg">
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
