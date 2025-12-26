"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const technologies = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Node.js",
  "Next.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-24 px-6 md:px-25"
    >
      <div className="max-w-4xl mx-auto w-full" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          className="mb-12"
        >
          <h2 className="heading-medium text-text-lightest-slate font-mono mb-2">
            <span className="text-green-tint text-lg mr-2">01.</span>
            About Me
          </h2>
          <div className="w-80 h-px bg-navy-medium mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Text Content */}
          <motion.div
            className="md:col-span-2 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
          >
            <div className="body-normal space-y-4">
              <p>
                Hello! My name is Dilip and I enjoy creating things that live on
                the internet. My interest in web development started back in
                2012 when I decided to try editing custom Tumblr themes — turns
                out hacking together a custom reblog button taught me a lot
                about HTML &amp; CSS!
              </p>

              <p>
                Fast-forward to today, and I&apos;ve had the privilege of
                working at{" "}
                <a
                  href="https://us.mullenlowe.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-tint hover:text-green-bright transition-colors duration-250 relative group"
                >
                  an advertising agency
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-tint group-hover:w-full transition-all duration-300" />
                </a>
                ,{" "}
                <a
                  href="https://starry.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-tint hover:text-green-bright transition-colors duration-250 relative group"
                >
                  a start-up
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-tint group-hover:w-full transition-all duration-300" />
                </a>
                ,{" "}
                <a
                  href="https://www.apple.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-tint hover:text-green-bright transition-colors duration-250 relative group"
                >
                  a huge corporation
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-tint group-hover:w-full transition-all duration-300" />
                </a>
                , and{" "}
                <a
                  href="https://scout.camd.northeastern.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-tint hover:text-green-bright transition-colors duration-250 relative group"
                >
                  a student-led design studio
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-tint group-hover:w-full transition-all duration-300" />
                </a>
                . My main focus these days is building accessible, inclusive
                products and digital experiences at{" "}
                <a
                  href="https://upstatement.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-tint hover:text-green-bright transition-colors duration-250 relative group"
                >
                  Upstatement
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-tint group-hover:w-full transition-all duration-300" />
                </a>{" "}
                for a variety of clients.
              </p>

              <p>
                I also recently{" "}
                <a
                  href="https://www.newline.co/courses/build-a-spotify-connected-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-tint hover:text-green-bright transition-colors duration-250 relative group"
                >
                  launched a course
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-tint group-hover:w-full transition-all duration-300" />
                </a>{" "}
                that covers everything you need to build a web app with the
                Spotify API using Node &amp; React.
              </p>

              <p>
                Here are a few technologies I&apos;ve been working with
                recently:
              </p>
            </div>

            <motion.ul
              className="grid grid-cols-2 gap-2 text-sm font-mono"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {technologies.map((tech, index) => (
                <motion.li
                  key={tech}
                  className="flex items-center text-text-slate"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.5 + index * 0.05,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                >
                  <span className="text-green-tint mr-3">▹</span>
                  {tech}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
          >
            <div className="relative max-w-xs mx-auto">
              {/* Image container */}
              <div className="relative z-10">
                <div className="relative overflow-hidden rounded border-2 border-green-tint/20 transition-all duration-300 group-hover:border-green-tint/40">
                  <Image
                    src="/dilip.jpeg"
                    alt="Dilip B K"
                    className="w-full h-auto object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                    width={500}
                    height={500}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-green-tint mix-blend-multiply opacity-30 hover:opacity-0 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Background square */}
              <div className="absolute top-4 left-4 w-full h-full border-2 border-green-tint rounded -z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
