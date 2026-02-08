"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Laptop, Camera, Rocket, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 via-purple-50/30 to-background dark:from-blue-950/20 dark:via-purple-950/10 dark:to-background -z-10" />

      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        {/* Hero Intro */}
        <div className="text-center mb-16 md:mb-24 space-y-6 md:space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <Badge variant="secondary" className="px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium border-blue-100 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 shadow-xs backdrop-blur-sm">
              Welcome to my portfolio
            </Badge>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-tight"
          >
            Computer Systems Technology <br className="hidden md:block" />
            <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Student & Bird Photographer
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4"
          >
            Passionate developer crafting exceptional digital experiences and capturing moments of nature through the lens.
          </motion.p>

          {/* Feature Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-muted-foreground text-sm md:text-base font-medium"
          >
            <div className="flex items-center gap-2 hover:text-blue-600 transition-colors cursor-default bg-white/50 dark:bg-black/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
              <Laptop className="h-4 w-4 md:h-5 md:w-5" strokeWidth={2} />
              <span>Web Development</span>
            </div>
            <div className="hidden md:block h-1.5 w-1.5 rounded-full bg-muted-foreground/30" />
            <div className="flex items-center gap-2 hover:text-green-600 transition-colors cursor-default bg-white/50 dark:bg-black/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
              <Camera className="h-4 w-4 md:h-5 md:w-5" strokeWidth={2} />
              <span>Bird Photography</span>
            </div>
            <div className="hidden md:block h-1.5 w-1.5 rounded-full bg-muted-foreground/30" />
            <div className="flex items-center gap-2 hover:text-purple-600 transition-colors cursor-default bg-white/50 dark:bg-black/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
              <Rocket className="h-4 w-4 md:h-5 md:w-5" strokeWidth={2} />
              <span>Problem Solving</span>
            </div>
          </motion.div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          {/* Left Column: Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full"
          >
            <Card className="h-full border-muted/60 bg-white/60 dark:bg-card/40 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
              <CardContent className="p-6 md:p-8 space-y-6">
                <h2 className="text-2xl font-bold flex items-center md:items-start gap-3 group-hover:text-primary transition-colors duration-300">
                  About My Journey
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-base">
                  <p>
                    I am a Computer Systems Technology student at Sheridan College with a strong foundation in <span className="text-foreground font-medium">Java, Python, and Web Development</span>. My passion lies in building efficient systems and solving complex problems through clean code.
                  </p>
                  <p>
                    As a Naval Reservist, I bring disciplined leadership and teamwork to every project. Currently, I am seeking opportunities to contribute to innovative software while continuing to grow as a developer and photographer.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column: Status & Interests */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 md:space-y-8 flex flex-col justify-center h-full"
          >
            {/* Professional Status Card */}
            <Card className="border-muted/60 bg-white/60 dark:bg-card/40 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-linear-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-4xl shadow-inner">
                    👨💻
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">Professional Status</h3>
                    <p className="text-muted-foreground font-medium">Student | Currently seeking new opportunities</p>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground pt-1">
                      <MapPin className="h-4 w-4 text-primary/70" />
                      <span>Toronto, ON • Remote Ready</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tech Interests Badge Card */}
            <Card className="border-muted/60 bg-linear-to-r from-blue-50/40 to-purple-50/40 dark:from-blue-950/20 dark:to-purple-950/20 backdrop-blur-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-6">
                <h4 className="text-center font-semibold mb-4 text-foreground/80 tracking-wide text-sm uppercase">Tech Interests</h4>
                <div className="flex flex-wrap justify-center gap-2.5">
                  {["Full Stack Development", "Bird Photography", "Open Source"].map((interest, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className={cn(
                        "px-3 py-1.5 text-sm font-medium transition-colors duration-300 cursor-default",
                        i === 0 && "bg-blue-100/50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800 hover:bg-blue-200/50 dark:hover:bg-blue-800/30",
                        i === 1 && "bg-green-100/50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800 hover:bg-green-200/50 dark:hover:bg-green-800/30",
                        i === 2 && "bg-purple-100/50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800 hover:bg-purple-200/50 dark:hover:bg-purple-800/30"
                      )}
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
