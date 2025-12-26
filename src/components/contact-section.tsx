"use client";

import * as React from "react";
import { motion } from "framer-motion";

export function ContactSection() {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after showing success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section className="relative py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-accent-500/5 to-transparent" />
      </div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-foreground/80">
            Have a project in mind or just want to chat? Feel free to reach out.
            I&apos;m always open to discussing new opportunities and ideas.
          </p>
        </motion.div>

        <div className="mx-auto max-w-xl">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground/80"
              >
                Name
              </label>
              <motion.div
                className="mt-1"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="block w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder-foreground/60 shadow-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  placeholder="John Doe"
                  required
                />
              </motion.div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground/80"
              >
                Email
              </label>
              <motion.div
                className="mt-1"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="block w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder-foreground/60 shadow-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  placeholder="john@example.com"
                  required
                />
              </motion.div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground/80"
              >
                Message
              </label>
              <motion.div
                className="mt-1"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  className="block w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder-foreground/60 shadow-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  placeholder="Your message here..."
                  required
                />
              </motion.div>
            </div>

            <motion.div
              className="flex items-center justify-end"
              initial={false}
              animate={
                isSubmitted
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 10, scale: 0.95 }
              }
            >
              {isSubmitted && (
                <p className="text-sm text-primary-500">
                  Thanks for your message! I&apos;ll get back to you soon.
                </p>
              )}
            </motion.div>

            <motion.button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className="relative w-full rounded-lg bg-primary-500 px-6 py-3 text-center text-sm font-medium text-white shadow-lg transition-colors hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span
                className={`absolute inset-0 flex items-center justify-center transition-opacity ${
                  isSubmitting ? "opacity-100" : "opacity-0"
                }`}
              >
                <svg
                  className="h-5 w-5 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              </span>
              <span
                className={`transition-opacity ${
                  isSubmitting ? "opacity-0" : "opacity-100"
                }`}
              >
                Send Message
              </span>
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex flex-col items-center justify-center gap-6 text-center"
          >
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <a
                href="mailto:contact@example.com"
                className="text-foreground/80 transition-colors hover:text-primary-500"
              >
                contact@example.com
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Follow Me</h3>
              <div className="mt-2 flex gap-4">
                {[
                  {
                    name: "GitHub",
                    href: "https://github.com",
                    icon: (
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                    ),
                  },
                  {
                    name: "Twitter",
                    href: "https://twitter.com",
                    icon: (
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    ),
                  },
                  {
                    name: "LinkedIn",
                    href: "https://linkedin.com",
                    icon: (
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    ),
                  },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full p-2 text-foreground/60 transition-colors hover:bg-primary-500/10 hover:text-foreground"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="sr-only">{social.name}</span>
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {social.icon}
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
