"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-4 backdrop-blur-md bg-navy-darkest/90 shadow-lg"
            : "py-6 bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <motion.a
            href="/"
            className="relative z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <div className="w-12 h-12 border-2 border-green-tint rounded flex items-center justify-center font-mono text-green-tint text-lg font-bold hover:bg-green-tint/10 transition-all duration-250">
              D
            </div>
          </motion.a>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="nav-link"
                style={{ "--item": index + 1 } as React.CSSProperties}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 + index * 0.1,
                  duration: 0.6,
                  ease: [0.19, 1, 0.22, 1],
                }}
              >
                {item.label}
              </motion.a>
            ))}

            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline ml-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.6,
                ease: [0.19, 1, 0.22, 1],
              }}
            >
              Resume
            </motion.a>
          </nav>

          <motion.button
            className={`md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center ${
              isMenuOpen ? "space-y-0" : "space-y-1"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span
              className={`block w-6 h-0.5 bg-green-tint transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-0.5" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-green-tint transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-green-tint transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </motion.button>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navItems={navItems}
      />
    </>
  );
}
