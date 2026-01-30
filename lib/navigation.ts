import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react";

/**
 * Navigation Configuration
 * 
 * Centralized navigation and social link configuration for the portfolio.
 * Used by Header and Footer components to ensure consistency.
 */

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

/**
 * Main navigation item type definition
 */
export interface NavigationItem {
  /** Unique identifier (lowercase, used for keys) */
  name: string;
  /** Display text (shown in UI) */
  label: string;
  /** Route path or URL */
  href: string;
  /** Optional icon component */
  icon?: LucideIcon;
}

/**
 * Social link type definition
 */
export interface SocialLink {
  /** Unique identifier (lowercase, used for keys) */
  name: string;
  /** Display text and accessibility label */
  label: string;
  /** External URL or mailto link */
  href: string;
  /** Icon component (required for social links) */
  icon: LucideIcon;
}

// ============================================================================
// NAVIGATION DATA
// ============================================================================

/**
 * Main navigation items for header and footer
 * 
 * These appear in the main navigation menu and footer quick links.
 */
export const navigationItems: NavigationItem[] = [
  {
    name: "home",
    label: "Home",
    href: "/",
  },
  {
    name: "projects",
    label: "Projects",
    href: "/projects",
  },
  {
    name: "gallery",
    label: "Gallery",
    href: "/gallery",
  },
];

/**
 * Social media and contact links for footer
 * 
 * These appear in the footer social links section with icons.
 */
export const socialLinks: SocialLink[] = [
  {
    name: "github",
    label: "GitHub",
    href: "https://github.com/mjsamaha",
    icon: Github,
  },
  {
    name: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/matthew-samaha",
    icon: Linkedin,
  },
  {
    name: "email",
    label: "Email",
    href: "mailto:your.email@example.com",
    icon: Mail,
  },
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get a navigation item by name
 * @param name - The unique identifier of the navigation item
 * @returns Navigation item or undefined if not found
 */
export function getNavigationItem(name: string): NavigationItem | undefined {
  return navigationItems.find((item) => item.name === name);
}

/**
 * Get a social link by name
 * @param name - The unique identifier of the social link
 * @returns Social link or undefined if not found
 */
export function getSocialLink(name: string): SocialLink | undefined {
  return socialLinks.find((link) => link.name === name);
}
