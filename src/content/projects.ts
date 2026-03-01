/**
 * Projects Content Schema
 * 
 * Type-safe data structure for portfolio projects including detailed
 * information for both card views and dedicated project pages.
 */

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  executiveSummary: string;
  status: "Live" | "In Development" | "Planning";
  statusColor: string;
  tech: string[];
  href: string;
  repoUrl: string;
  demoUrl?: string; // Optional
  problem: string;
  problemDomain: {
    headline: string;
    points: string[];
  };
  outcome: string;
  solution: {
    headline: string;
    points: string[];
  };
  features: string[];
  detailedOverview: string;
  technicalDetails?: {
    frontend: string;
    backend: string;
    database: string;
    auth: string;
    storage: string;
    security: string;
    infrastructure?: string;
  };
  timeline?: {
    phase: string;
    date: string;
    details: string | string[];
  }[];
  roles?: {
    role: string;
    access: string;
  }[];
  multiTenantDetails?: {
    headline: string;
    structure: string[];
  };
  year?: number;
  category?: string;
  organization?: {
    name: string;
    slug: string;
    tagline: string;
  };
  metrics?: {
    label: string;
    value: string;
  }[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "signalsmaster",
    title: "SignalsMaster",
    description: "Multi-tenant learning management platform for sea cadet units.",
    executiveSummary: "A specialized learning management system purpose-built for sea cadets where each unit operates in its own isolated digital space with complete data separation. Think D2L/Canvas, but for maritime training.",
    status: "In Development",
    statusColor: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-500 ring-yellow-600/20",
    tech: ["Next.js", "ShadCN/UI", "Convex", "Clerk", "Multi-Tenant"],
    href: "/projects/signalsmaster",
    repoUrl: "https://github.com/mjsamaha/oaksignal-signalsmaster",
    problem: "Fragmented knowledge management and inconsistent training delivery across cadet units.",
    problemDomain: {
      headline: "The Challenge: Fragmented & Inconsistent Training",
      points: [
        "No centralized learning platform tailored to maritime cadet training.",
        "Fragmented knowledge management across drives, emails, and paper.",
        "Inconsistent training delivery across different units.",
        "No way to track cadet progress or mastery of critical skills.",
        "Limited engagement—training feels like homework rather than achievement.",
        "Legacy Ionic app had limitations—need for modern stack for better UX and maintainability."
      ]
    },
    outcome: "A modern, multi-tenant LMS providing isolated digital spaces for units with structured assessments and gamified learning.",
    solution: {
      headline: "Our Solution: Dedicated Multi-Tenant Platform",
      points: [
        "Modern Stack Migration: Re-building from Ionic to Next.js + ShadCN for better performance.",
        "Multi-Tenant Architecture: Each unit sees only their cadets, quizzes, and leaderboards.",
        "Specialized Learning Modules: Signal Flags, Points of Sail, Drill, Seamanship.",
        "Gamified Assessments: Quizzes with instant feedback, achievements, and unit leaderboards.",
        "Data Isolation & Security: Complete separation of unit data with row-level security.",
        "Offline Capability: PWA with offline mode for field training scenarios."
      ]
    },
    features: [
      "Multi-Tenant Architecture",
      "Unit-Specific Leaderboards",
      "Interactive Learning Modules",
      "Real-time Progress Tracking",
      "Role-Based Access Control",
      "Offline PWA Support"
    ],
    detailedOverview: "SignalsMaster is a specialized learning management system designed to modernize sea cadet training. Unlike generic LMS platforms, it is purpose-built for the maritime context, offering specific modules for Signal Flags, Seamanship, and Drill. The platform utilizes a multi-tenant architecture, ensuring that each cadet unit operates in a completely isolated environment—securely managing their own cadets, data, and progress tracking while benefiting from a shared, robust infrastructure. Starting with a pilot at Oakville Sea Cadets, it aims to scale to units nationwide.",
    technicalDetails: {
      frontend: "Next.js (React), TypeScript, ShadCN/UI, Tailwind CSS",
      backend: "Convex (Serverless Functions)",
      database: "Convex (Real-time Database with multi-tenant schema)",
      auth: "Clerk (Authentication and User Management)",
      storage: "Convex (File Storage)",
      security: "Convex data validation, Clerk role-based access"
    },
    timeline: [
      {
        phase: "Alpha Launch",
        date: "March 2026",
        details: "Pilot with Oakville Sea Cadets"
      },
      {
        phase: "Beta Launch",
        date: "April 2026",
        details: "Expanded testing and feature refinement"
      },
      {
        phase: "Expansion",
        date: "Q3 2026",
        details: "Rollout to future Sea Cadet units and potential Army/Air expansion"
      }
    ],
    roles: [
      {
        role: "Junior Cadets",
        access: "Access learning materials, complete assessments, view own progress"
      },
      {
        role: "Senior Cadets",
        access: "Mentor/tutor capabilities + Junior access"
      },
      {
        role: "Officers/Instructors",
        access: "Full admin—create content, manage cadets, view analytics, configure unit settings"
      }
    ],
    multiTenantDetails: {
      headline: "Isolated Digital Spaces",
      structure: [
        "Unit: Oakville Sea Cadets (Pilot) - Cadets, Officers, Modules, Data",
        "Unit: Future Units - Same structure, completely isolated data",
        "Platform Level: Shared infrastructure, expansion ready"
      ]
    },
    year: 2026,
    category: "LMS",
    organization: {
      name: "OakSignal",
      slug: "oaksignal",
      tagline: "Digital tools for cadet organizations"
    },
    metrics: [
      { label: "Active Users", value: "Pilot Phase" },
      { label: "Modules", value: "4+" },
      { label: "Platform", value: "Web & PWA" },
      { label: "Architecture", value: "Multi-Tenant" }
    ]
  },
  {
    id: 2,
    slug: "cims",
    title: "Cadet Inventory Management System",
    description: "Enterprise-grade cadet inventory and supply management system.",
    executiveSummary: "An enterprise-grade inventory and supply management system built to streamline logistics and accountability for cadet units, featuring multi-tenant data isolation and role-based permissions.",
    status: "Planning",
    statusColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 ring-blue-600/20",
    tech: ["Spring Boot", "Next.js", "Neon", "MongoDB", "Clerk", "ShadCN/UI"],
    href: "/projects/cims",
    repoUrl: "https://github.com/mjsamaha/",
    problem: "Poor inventory visibility and reliance on paper tracking leads to lost equipment and lack of accountability.",
    problemDomain: {
      headline: "The Challenge: Logistics & Accountability",
      points: [
        "Poor inventory visibility across units making resource allocation difficult.",
        "Reliance on manual or paper-based tracking which is prone to human error.",
        "Lack of clear audit trails and accountability for equipment issuance.",
        "Difficulty managing equipment distribution, returns, and maintenance schedules.",
        "No real-time insights into supply levels leading to shortages or overstocking.",
        "No system for delegating inventory tasks to senior cadets while maintaining oversight."
      ]
    },
    outcome: "Centralized system with real-time tracking, role-based permissions, audit history, and reporting for effective logistics.",
    solution: {
      headline: "Our Solution: Centralized Supply Chain Management",
      points: [
        "Multi-Tenant Design: Each unit maintains separate inventory data, users, and workflows.",
        "Real-Time Tracking: Centralized system showing current location and status of all assets.",
        "Role-Based Access Control: Granular permissions for Officers, Senior Cadets, and Junior Cadets.",
        "Digital Audit Trails: Complete accountability for every item movement.",
        "Automated Alerts: Low-stock warnings, overdue returns, and maintenance reminders.",
        "Check-In/Check-Out Workflows: Streamlined equipment sign-out with digital hand receipts."
      ]
    },
    features: [
      "Real-time Inventory Tracking",
      "Role-Based Access Control",
      "Digital Audit Trails",
      "Automated Low-Stock Alerts",
      "Equipment Maintenance Scheduling",
      "Digital Hand Receipts"
    ],
    detailedOverview: "Quartermaster is an enterprise-grade inventory management system designed to solve the logistics challenges faced by cadet units. Currently in the planning and analysis phase, it aims to replace fragmented paper-based tracking with a robust, multi-tenant digital platform. By providing each unit with its own isolated data environment, Quartermaster ensures security and autonomy while offering powerful tools for tracking uniforms, equipment, and supplies. The system emphasizes accountability through digital audit trails and simplifies operations with role-based delegation, allowing senior cadets to assist with logistics under officer supervision.",
    technicalDetails: {
      frontend: "Next.js, TypeScript, ShadCN/UI, GSAP",
      backend: "Spring Boot, Spring MVC/REST API",
      database: "Neon (Serverless PostgreSQL), and MongoDB for flexible asset documentation",
      auth: "Clerk, Spring Security",
      storage: "Cloud Storage for asset documentation",
      security: "Row-level security, audit logging, role-based permissions",
      infrastructure: "Render (Backend), Vercel (Frontend), Docker"
    },
    timeline: [
      {
        phase: "Q1 2026: Planning & Analysis",
        date: "Jan - Mar 2026",
        details: [
          "Survey existing inventory practices at Oakville Sea Cadets",
          "Analyze pain points with current manual systems",
          "Evaluate technical approaches and architecture options",
          "Select best solution strategy (build vs. adapt)"
        ]
      },
      {
        phase: "Q2 2026: Design & Validation",
        date: "Apr - Jun 2026",
        details: [
          "Finalize requirements and technical architecture",
          "Approve database schema design",
          "Create and validate UI/UX mockups with stakeholders",
          "Establish development roadmap"
        ]
      },
      {
        phase: "Q3 2026: Pre-Development",
        date: "Jul - Sep 2026",
        details: [
          "Refine multi-tenant isolation strategy",
          "Validate cross-branch applicability (Sea vs. Army)",
          "Begin preliminary development (Auth, CRUD)",
          "Incorporate lessons from SignalsMaster release"
        ]
      },
      {
        phase: "Active Development",
        date: "Q4 2026+",
        details: "Target beta deployment to Oakville Sea Cadets"
      }
    ],
    roles: [
      {
        role: "Junior Cadets",
        access: "View-only access, ability to submit equipment requests"
      },
      {
        role: "Senior Cadets",
        access: "Limited admin access for day-to-day operations, equipment issue/return"
      },
      {
        role: "Officers/Adult Staff",
        access: "Full administrative access, reporting, system configuration"
      }
    ],
    multiTenantDetails: {
      headline: "Isolated Inventory Systems",
      structure: [
        "Unit: Oakville Sea Cadets (Pilot) - Equipment, Users, Audit Logs",
        "Multi-Unit: Shared Platform Infrastructure"
      ]
    },
    year: 2026,
    category: "Inventory",
    organization: {
      name: "OakSignal",
      slug: "oaksignal",
      tagline: "Digital tools for cadet organizations"
    },
    metrics: [
      { label: "Stage", value: "Planning" },
      { label: "Exp. Launch", value: "Q4 2026" },
      { label: "Target Users", value: "50+" },
      { label: "Key Feature", value: "Audit Logs" }
    ]
  }
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get a project by its slug
 * @param slug - URL-safe project identifier
 * @returns Project object or undefined if not found
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

/**
 * Get projects filtered by status
 * @param status - Project status to filter by
 * @returns Array of projects matching the status
 */
export function getProjectsByStatus(status: Project["status"]): readonly Project[] {
  return projects.filter(project => project.status === status);
}

/**
 * Generate a URL-safe slug from a title
 * @param title - Project title
 * @returns URL-safe slug (lowercase, hyphenated)
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Get all project slugs (useful for static site generation)
 * @returns Array of all project slugs
 */
export function getAllSlugs(): readonly string[] {
  return projects.map(project => project.slug);
}

/**
 * Get projects filtered by category
 * @param category - Project category to filter by
 * @returns Array of projects matching the category
 */
export function getProjectsByCategory(category: NonNullable<Project["category"]>): readonly Project[] {
  return projects.filter(project => project.category === category);
}

/**
 * Get projects filtered by organization slug
 * @param orgSlug - Organization slug to filter by (e.g. "oaksignal")
 * @returns Array of projects belonging to the organization
 */
export function getProjectsByOrg(orgSlug: string): readonly Project[] {
  return projects.filter(project => project.organization?.slug === orgSlug);
}

// ============================================================================
// TYPE EXPORTS
// ============================================================================

/**
 * Type of the projects array (inferred from const assertion)
 */
export type ProjectsData = typeof projects;

/**
 * Individual project type (extracted from array)
 */
export type ProjectItem = ProjectsData[number];

export default projects;
