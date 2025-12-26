"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-25 min-h-screen flex items-center"
    >
      <div className="max-w-2xl mx-auto text-center w-full" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          className="mb-8"
        >
          <h2 className="font-mono text-green-tint text-lg mb-4">
            05. What&apos;s Next?
          </h2>
          <h3 className="text-4xl md:text-5xl font-semibold text-text-lightest-slate mb-6">
            Get In Touch
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
          className="mb-12"
        >
          <p className="text-lg text-text-slate leading-relaxed max-w-xl mx-auto">
            I&apos;m currently looking for new opportunities, and my inbox is
            always open. Whether you have a question or just want to say hi,
            I&apos;ll try my best to get back to you!
          </p>
          <p className="text-lg text-text-slate leading-relaxed max-w-xl mx-auto mt-4">
            I&apos;m always open to discussing new projects, creative ideas or
            opportunities to be part of your visions.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
          className="mb-16"
        >
          <a
            href="mailto:dilipbk.dev@gmail.com"
            className="btn-outline text-lg px-8 py-4"
          >
            Say Hello
          </a>
        </motion.div>

        {/* Additional contact methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.19, 1, 0.22, 1] }}
          className="text-center"
        >
          <p className="text-text-slate font-mono text-sm mb-6">
            Or find me on these platforms
          </p>

          <div className="flex justify-center items-center space-x-8">
            <motion.a
              href="https://github.com/dilipbk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-light-slate hover:text-green-tint transition-colors duration-250 group"
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
              </svg>
              <span className="sr-only">GitHub</span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/dilipbk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-light-slate hover:text-green-tint transition-colors duration-250 group"
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </motion.a>

            <motion.a
              href="https://x.com/Dilip_XP"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-light-slate hover:text-green-tint transition-colors duration-250 group"
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </motion.a>

            <motion.a
              href="mailto:dilipbk.dev@gmail.com"
              className="text-text-light-slate hover:text-green-tint transition-colors duration-250 group"
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="sr-only">Email</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
