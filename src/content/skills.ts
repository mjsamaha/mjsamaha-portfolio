export interface Skill {
  name: string;
  level?: number;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", level: 95 },
      { name: "Next.js", level: 85 },
      { name: "Angular", level: 85 },
      { name: "Tailwind CSS", level: 88 }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Spring Boot", level: 75 },
      { name: "Node.js", level: 85 }
    ]
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", level: 70 },
      { name: "PostgreSQL", level: 75 },
      { name: "MySQL", level: 70 }
    ]
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Docker", level: 75 },
      { name: "Git", level: 90 },
      { name: "Linear", level: 80 },
      { name: "Postman", level: 85 }
    ]
  }
];
