"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Gallery", href: "/gallery" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b backdrop-blur-md"
      style={{
        borderColor: "var(--border-default)",
        backgroundColor: "var(--bg-elevated-70)",
      }}
    >
      <nav className="container mx-auto px-4 md:px-6 py-4 max-w-7xl" aria-label="Global">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <div className="flex">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl text-(--text-primary) hover:text-(--text-accent) transition-colors">
                Matthew Samaha
              </span>
            </Link>
          </div>

          {/* Desktop Navigation with NavigationMenu */}
          <div className="hidden md:flex md:items-center md:gap-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                {navigation.map((item) => {
                  const isActive = pathname === item.href || 
                                  (item.href !== "/" && pathname.startsWith(item.href));
                  return (
                    <NavigationMenuItem key={item.name}>
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink 
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "transition-colors",
                            isActive
                              ? "font-semibold bg-(--state-hover-overlay) text-(--text-accent)"
                              : "text-(--text-secondary) hover:bg-(--state-hover-overlay) hover:text-(--text-accent)"
                          )}
                        >
                          {item.name}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-(--text-primary) hover:bg-(--state-hover-overlay) transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-1 border-t mt-4" style={{ borderColor: "var(--border-default)" }}>
            {navigation.map((item) => {
              const isActive = pathname === item.href || 
                              (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block px-3 py-2 text-base font-medium rounded-md transition-colors",
                    isActive
                      ? "bg-(--state-hover-overlay) text-(--text-accent) font-semibold"
                      : "text-(--text-secondary) hover:bg-(--state-hover-overlay) hover:text-(--text-primary)"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}
