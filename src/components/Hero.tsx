"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useCallback } from "react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Use spring physics for smooth mouse following
  const springX = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 150 });

  // Throttle mouse movement for better performance
  const rafRef = useRef<number | undefined>(undefined);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      });
    },
    [mouseX, mouseY]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleMouseMove]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Optimized background effect */}
      <motion.div
        className="fixed pointer-events-none z-0 opacity-60"
        style={{
          left: springX,
          top: springY,
          x: "-50%",
          y: "-50%",
          background:
            "radial-gradient(300px circle at center, rgba(100, 255, 218, 0.08), transparent 70%)",
          width: "600px",
          height: "600px",
        }}
      />

      {/* Fixed sidebars */}
      <div className="fixed left-8 bottom-0 hidden lg:flex flex-col items-center z-10">
        <div className="flex flex-col space-y-6 mb-8">
          <motion.a
            href="https://github.com/dilipbkrestha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-light-slate hover:text-green-tint transition-colors duration-250 hover:-translate-y-1 transform"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                clipRule="evenodd"
              />
            </svg>
          </motion.a>

          <motion.a
            href="https://www.instagram.com/dilipbkrestha/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-light-slate hover:text-green-tint transition-colors duration-250 hover:-translate-y-1 transform"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </motion.a>

          <motion.a
            href="https://twitter.com/dilipbkrestha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-light-slate hover:text-green-tint transition-colors duration-250 hover:-translate-y-1 transform"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/dilipbkrestha/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-light-slate hover:text-green-tint transition-colors duration-250 hover:-translate-y-1 transform"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                clipRule="evenodd"
              />
            </svg>
          </motion.a>
        </div>

        <div className="w-px h-24 bg-text-light-slate"></div>
      </div>

      <div className="fixed right-8 bottom-0 hidden lg:flex flex-col items-center z-10">
        <motion.a
          href="mailto:dilipbkrestha@gmail.com"
          className="text-text-light-slate hover:text-green-tint font-mono text-sm tracking-widest transition-colors duration-250 hover:-translate-y-1 transform"
          style={{ writingMode: "vertical-rl" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          dilipbkrestha@gmail.com
        </motion.a>
        <div className="w-px h-24 bg-text-light-slate mt-8"></div>
      </div>

      {/* Main content area with two-column layout */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-screen">
        {/* Left Content */}
        <div className="lg:col-span-7 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            <motion.p
              className="font-mono text-green-tint text-base md:text-lg mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Hi, my name is
            </motion.p>

            <motion.h1
              className="heading-giant"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Dilip B K.
            </motion.h1>

            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-light-slate mt-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              I build things for the web.
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-text-slate max-w-2xl leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              I&apos;m a software engineer specializing in building (and
              occasionally designing) exceptional digital experiences.
              Currently, I&apos;m focused on building accessible, human-centered
              products at{" "}
              <a
                href="https://spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-tint hover:underline"
              >
                Spotify
              </a>
              .
            </motion.p>

            <motion.a
              href="#projects"
              className="btn-outline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Check out my work!
            </motion.a>
          </motion.div>
        </div>

        {/* Right Content - Professional Stats/Features */}
        <div className="lg:col-span-5 z-10">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            {/* Technology Stack Card */}
            <motion.div
              className="bg-navy-dark/30 backdrop-blur-sm border border-navy-medium/30 rounded-lg p-6 hover:border-green-tint/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <h3 className="text-green-tint font-mono text-sm mb-4">
                &bsol;&bsol; Current Tech Stack
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="text-text-lightest-slate text-sm">
                    Frontend
                  </div>
                  <div className="text-text-slate text-xs">
                    React, Next.js, TypeScript
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-text-lightest-slate text-sm">
                    Backend
                  </div>
                  <div className="text-text-slate text-xs">
                    Node.js, Python, PostgreSQL
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Status Card */}
            <motion.div
              className="bg-navy-dark/30 backdrop-blur-sm border border-navy-medium/30 rounded-lg p-6 hover:border-green-tint/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <h3 className="text-green-tint font-mono text-sm mb-4">
                &bsol;&bsol; Current Status
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-tint rounded-full animate-pulse"></div>
                  <span className="text-text-lightest-slate text-sm">
                    Available for freelance
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-text-lightest-slate text-sm">
                    Open to opportunities
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <span className="text-text-lightest-slate text-sm">
                    Learning Web3
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              className="bg-navy-dark/30 backdrop-blur-sm border border-navy-medium/30 rounded-lg p-6 hover:border-green-tint/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <h3 className="text-green-tint font-mono text-sm mb-4">
                &bsol;&bsol; Quick Stats
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-text-lightest-slate text-sm">
                    Years Experience
                  </span>
                  <span className="text-2xl font-bold text-text-lightest-slate">
                    3+
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-lightest-slate text-sm">
                    Projects Built
                  </span>
                  <span className="text-2xl font-bold text-text-lightest-slate">
                    50+
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-lightest-slate text-sm">
                    Technologies
                  </span>
                  <span className="text-2xl font-bold text-text-lightest-slate">
                    15+
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-lightest-slate text-sm">
                    Coffee Powered
                  </span>
                  <span className="text-2xl font-bold text-text-lightest-slate">
                    24/7
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
