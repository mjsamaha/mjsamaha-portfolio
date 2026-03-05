import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Matthew Samaha | Software Developer",
  description: "Full-stack developer specializing in TypeScript, Angular, and Spring Boot. Naval Reservist and bird photography enthusiast.",
  authors: [{ name: "Matthew Samaha" }],
  keywords: ["Software Developer", "TypeScript", "Angular", "Spring Boot", "Full-stack Developer", "Bird Photography"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased text-(--text-primary) min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1 w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            {children}
          </div>
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
