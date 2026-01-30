/**
 * Resume Content Schema
 * 
 * Type-safe data structure for portfolio resume information including
 * work experience, education, skills, and contact information.
 */

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

/**
 * Type of experience entry
 */
export type ExperienceType = "work" | "education";

/**
 * Skill proficiency level (0-100)
 */
export type SkillLevel = number;

/**
 * Individual experience entry (work or education)
 */
export interface Experience {
  readonly id: string;
  readonly type: ExperienceType;
  readonly title: string;
  readonly organization: string;
  readonly location: string;
  readonly startDate: string;
  readonly endDate: string | "Present";
  readonly description: string;
  readonly technologies?: readonly string[];
}

/**
 * Individual skill with proficiency level
 */
export interface Skill {
  readonly name: string;
  readonly level: SkillLevel;
  readonly description?: string;
}

/**
 * Skills grouped by category
 */
export interface SkillCategory {
  readonly category: string;
  readonly skills: readonly Skill[];
}

/**
 * Contact information
 */
export interface ContactInfo {
  readonly email?: string;
  readonly linkedin?: string;
  readonly github?: string;
  readonly location?: string;
}

/**
 * Complete resume data structure
 */
export interface Resume {
  readonly experience: readonly Experience[];
  readonly skills: readonly SkillCategory[];
  readonly contact?: ContactInfo;
}

// ============================================================================
// DATA
// ============================================================================

export const resume = {
  experience: [
    // Education
    {
      id: "edu-sheridan",
      type: "education" as const,
      title: "Computer Systems Technology",
      organization: "Sheridan College",
      location: "Ontario, Canada",
      startDate: "2024",
      endDate: "2027",
      description: "Advanced diploma program focusing on software development, system architecture, and modern web technologies.",
      technologies: [
        "Software Engineering",
        "Web Development",
        "Database Design",
        "System Architecture"
      ]
    },

    // Work Experience
    {
      id: "work-naval-reservist",
      type: "work" as const,
      title: "Naval Reservist",
      organization: "Canadian Armed Forces",
      location: "Canada",
      startDate: "2022",
      endDate: "Present" as const,
      description: "Part-time service member contributing to naval operations and training exercises. Demonstrates leadership, teamwork, and adaptability in dynamic environments.",
      technologies: []
    },
    {
      id: "work-volunteer-instructor",
      type: "work" as const,
      title: "Volunteer Instructor",
      organization: "Community Education",
      location: "Ontario, Canada",
      startDate: "2023",
      endDate: "Present" as const,
      description: "Teaching and mentoring students in technology and programming concepts. Developing curriculum and providing hands-on guidance to learners of various skill levels.",
      technologies: [
        "Teaching",
        "Curriculum Development",
        "Mentorship"
      ]
    }
  ],

  skills: [
    {
      category: "Frontend",
      skills: [
        {
          name: "HTML",
          level: 90,
          description: "Semantic markup and modern HTML5 features"
        },
        {
          name: "Angular",
          level: 75,
          description: "Component-based applications with TypeScript"
        },
        {
          name: "Thymeleaf",
          level: 70,
          description: "Server-side template engine for Java applications"
        },
        {
          name: "Tailwind CSS",
          level: 85,
          description: "Utility-first CSS framework for rapid UI development"
        }
      ]
    },
    {
      category: "Backend",
      skills: [
        {
          name: "Node.js",
          level: 80,
          description: "Server-side JavaScript runtime and API development"
        },
        {
          name: "Spring Boot",
          level: 75,
          description: "Java framework for building enterprise applications"
        }
      ]
    },
    {
      category: "Database",
      skills: [
        {
          name: "MongoDB",
          level: 75,
          description: "NoSQL database for flexible document storage"
        },
        {
          name: "PostgreSQL",
          level: 80,
          description: "Relational database with advanced features"
        },
        {
          name: "H2",
          level: 70,
          description: "Embedded database for testing and development"
        }
      ]
    },
    {
      category: "Tools & DevOps",
      skills: [
        {
          name: "Docker",
          level: 75,
          description: "Containerization for consistent deployment"
        },
        {
          name: "Git",
          level: 85,
          description: "Version control and collaborative development"
        },
        {
          name: "Linear",
          level: 80,
          description: "Project management and issue tracking"
        }
      ]
    }
  ],

  contact: {
    location: "Ontario, Canada"
  }
} as const satisfies Resume;

// ============================================================================
// HELPER TYPES & EXPORTS
// ============================================================================

/**
 * Type of the resume data (inferred from const assertion)
 */
export type ResumeData = typeof resume;

/**
 * Helper to extract work experience only
 */
export type WorkExperience = Extract<ResumeData['experience'][number], { type: 'work' }>;

/**
 * Helper to extract education only
 */
export type EducationExperience = Extract<ResumeData['experience'][number], { type: 'education' }>;

export default resume;
