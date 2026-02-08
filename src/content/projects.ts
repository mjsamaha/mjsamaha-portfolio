/**
 * Projects Content Schema
 * 
 * Type-safe data structure for portfolio projects including detailed
 * information for both card views and dedicated project pages.
 */

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

/**
 * Project development status
 */
export type ProjectStatus = "In Development" | "Completed" | "Planning";

/**
 * Project category/type
 */
export type ProjectCategory = "LMS" | "Inventory" | "Web App" | "Tool" | "Other";

/**
 * Problem domain description
 */
export interface ProblemDomain {
  readonly headline: string;
  readonly points: readonly string[];
}

/**
 * Solution description
 */
export interface Solution {
  readonly headline: string;
  readonly points: readonly string[];
}

/**
 * Technical implementation details
 */
export interface TechnicalDetails {
  readonly frontend: string;
  readonly backend: string;
  readonly database: string;
  readonly auth: string;
  readonly storage: string;
  readonly security: string;
}

/**
 * Organization metadata
 */
export interface Organization {
  readonly name: string;
  readonly slug: string;
  readonly tagline: string;
}

/**
 * Timeline phase (details can be string or array)
 */
export interface TimelinePhase {
  readonly phase: string;
  readonly date: string;
  readonly details: string | readonly string[];
}

/**
 * User role and access level
 */
export interface ProjectRole {
  readonly role: string;
  readonly access: string;
}

/**
 * Multi-tenant architecture details
 */
export interface MultiTenantDetails {
  readonly headline: string;
  readonly structure: readonly string[];
}

/**
 * Complete project data structure
 */
export interface Project {
  readonly id: number;
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly executiveSummary: string;
  readonly status: ProjectStatus;
  readonly statusColor: string;
  readonly tech: readonly string[];
  readonly href: string;
  readonly repoUrl: string;
  readonly problem: string;
  readonly problemDomain: ProblemDomain;
  readonly outcome: string;
  readonly solution: Solution;
  readonly features: readonly string[];
  readonly detailedOverview: string;
  readonly technicalDetails: TechnicalDetails;
  readonly timeline: readonly TimelinePhase[];
  readonly roles: readonly ProjectRole[];
  readonly multiTenantDetails: MultiTenantDetails;
  readonly year?: number;
  readonly category?: ProjectCategory;
  readonly thumbnail?: string;
  readonly organization?: Organization;
  readonly metrics?: readonly { label: string; value: string }[];
  readonly liveUrl?: string;
}

// ============================================================================
// DATA
// ============================================================================

export const projects = [
  {
    id: 1,
    slug: "signalsmaster",
    title: "SignalsMaster",
    description: "Multi-tenant learning management platform for sea cadet units.",
    executiveSummary: "A specialized learning management system purpose-built for sea cadets where each unit operates in its own isolated digital space with complete data separation. Think D2L/Canvas, but for maritime training.",
    status: "In Development" as const,
    statusColor: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-500 ring-yellow-600/20",
    tech: ["Next.js", "ShadCN/UI", "PostgreSQL", "Multi-Tenant", "OAuth2"],
    href: "/projects/signalsmaster",
    repoUrl: "https://github.com/mjsamaha/signalsmaster",
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
      backend: "Node.js/Express or Next.js API routes",
      database: "PostgreSQL with multi-tenant schema (unit_id scoping)",
      auth: "Microsoft Azure AD OAuth2 + JWT tokens",
      storage: "Cloud-based storage for learning materials (images, videos, PDFs)",
      security: "Row-level security, email domain validation, encrypted traffic"
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
    category: "LMS" as const,
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
    slug: "quartermaster",
    title: "Quartermaster",
    description: "Enterprise-grade cadet inventory and supply management system.",
    executiveSummary: "An enterprise-grade inventory and supply management system built to streamline logistics and accountability for cadet units, featuring multi-tenant data isolation and role-based permissions.",
    status: "Planning" as const,
    statusColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 ring-blue-600/20",
    tech: ["Multi-Tenant", "Inventory Tracking", "Audit Logging", "Role-Based Access"],
    href: "/projects/quartermaster",
    repoUrl: "https://github.com/mjsamaha/quartermaster",
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
      frontend: "Next.js (React), TypeScript, ShadCN/UI",
      backend: "Node.js/Express or Next.js API routes",
      database: "PostgreSQL with multi-tenant schema",
      auth: "Microsoft Azure AD OAuth2 + JWT tokens",
      storage: "Cloud Storage for asset documentation",
      security: "Row-level security, audit logging, role-based permissions"
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
    category: "Inventory" as const,
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
] as const satisfies readonly Project[];

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
export function getProjectsByStatus(status: ProjectStatus): readonly Project[] {
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
export function getProjectsByCategory(category: ProjectCategory): readonly Project[] {
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
