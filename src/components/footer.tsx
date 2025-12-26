"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { name: "Home", href: "/" },
      { name: "Projects", href: "/projects" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Social",
    links: [
      { name: "GitHub", href: "https://github.com" },
      { name: "Twitter", href: "https://twitter.com" },
      { name: "LinkedIn", href: "https://linkedin.com" },
      { name: "Instagram", href: "https://instagram.com" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="group relative inline-block">
              <motion.div
                className="absolute -inset-2 rounded-lg bg-gradient-to-r from-primary-500/20 to-accent-500/20 opacity-0 blur transition group-hover:opacity-100"
                initial={false}
                animate={{
                  background: [
                    "linear-gradient(45deg, var(--primary-500-rgb, 0.2), var(--accent-500-rgb, 0.2))",
                    "linear-gradient(180deg, var(--primary-500-rgb, 0.2), var(--accent-500-rgb, 0.2))",
                    "linear-gradient(45deg, var(--primary-500-rgb, 0.2), var(--accent-500-rgb, 0.2))",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <span className="relative text-2xl font-bold tracking-tighter text-gradient">
                DK
              </span>
            </Link>
            <p className="text-sm text-foreground/80">
              Full-stack developer and designer passionate about creating
              beautiful, functional web applications.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground/60">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-foreground/80 transition-colors hover:text-primary-500"
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-foreground/60 md:flex-row">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p>
            Made with{" "}
            <motion.span
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="inline-block text-red-500"
            >
              ❤️
            </motion.span>{" "}
            using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
