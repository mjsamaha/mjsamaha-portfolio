import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Gallery", href: "/gallery" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/mjsamaha",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/matthew-samaha-a20980a8/",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:matthewsamaha@gmail.com",
    icon: Mail,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full border-t"
      style={{
        borderColor: "var(--border-default)",
        backgroundColor: "var(--bg-secondary)",
      }}
    >
      <div className="container mx-auto px-4 max-w-7xl py-8">
        {/* Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="font-semibold mb-3 text-(--text-primary)">About</h3>
            <p className="text-sm leading-relaxed text-(--text-secondary)">
              Building software with precision and purpose
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="font-semibold mb-3 text-(--text-primary)">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-(--text-secondary) hover:text-(--text-accent) transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social/Connect Section */}
          <div>
            <h3 className="font-semibold mb-3 text-(--text-primary)">Connect</h3>
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-(--text-secondary) hover:text-(--text-accent) transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright - Centered at Bottom */}
        <div className="pt-6 border-t text-center" style={{ borderColor: "var(--border-soft)" }}>
          <p className="text-sm text-(--text-muted)">
            © {currentYear} Matthew Samaha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
