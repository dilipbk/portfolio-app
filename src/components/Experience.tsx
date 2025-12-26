"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const experiences = [
  {
    company: "Spotify",
    position: "Senior Software Engineer",
    duration: "2022 - Present",
    location: "Remote",
    description: [
      "Lead development of user-facing features for 400M+ monthly active users",
      "Built and maintained scalable React applications with TypeScript and Next.js",
      "Collaborated with design and product teams to deliver accessible, inclusive experiences",
      "Mentored junior developers and contributed to technical documentation",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Node.js",
      "GraphQL",
      "AWS",
    ],
    link: "https://spotify.com",
  },
  {
    company: "Upstatement",
    position: "Software Engineer",
    duration: "2020 - 2022",
    location: "Boston, MA",
    description: [
      "Developed custom web applications for high-profile clients including Harvard and Koala Health",
      "Built responsive, performant frontends using modern JavaScript frameworks",
      "Collaborated with designers to create pixel-perfect, accessible user interfaces",
      "Implemented backend APIs and database solutions for various client projects",
    ],
    technologies: [
      "JavaScript",
      "React",
      "Vue.js",
      "Node.js",
      "Python",
      "PostgreSQL",
    ],
    link: "https://upstatement.com",
  },
  {
    company: "Scout Studio",
    position: "Full Stack Developer",
    duration: "2019 - 2020",
    location: "Boston, MA",
    description: [
      "Built and shipped digital products for early-stage startups and established companies",
      "Worked directly with clients to understand requirements and deliver solutions",
      "Developed both frontend and backend components using modern web technologies",
      "Participated in the full product development lifecycle from concept to deployment",
    ],
    technologies: ["JavaScript", "React", "Express", "MongoDB", "Firebase"],
    link: "https://scout.camd.northeastern.edu",
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6 md:px-25">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          className="mb-16"
        >
          <h2 className="heading-medium text-text-lightest-slate font-mono mb-2">
            <span className="text-green-tint text-lg mr-2">03.</span>
            Where I&apos;ve Worked
          </h2>
          <div className="w-80 h-px bg-navy-medium mt-4"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Company tabs - vertical on desktop, horizontal on mobile */}
          <motion.div
            className="flex md:flex-col overflow-x-auto md:overflow-x-visible"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
          >
            {experiences.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActiveIndex(index)}
                className={`relative flex-shrink-0 px-6 py-3 text-left font-mono text-sm transition-all duration-250 whitespace-nowrap md:whitespace-normal ${
                  activeIndex === index
                    ? "text-green-tint bg-green-tint/10 border-l-2 border-green-tint md:border-l-2 md:border-b-0 border-b-2 border-l-0"
                    : "text-text-slate hover:text-green-tint hover:bg-green-tint/5"
                }`}
              >
                {exp.company}
              </button>
            ))}
          </motion.div>

          {/* Experience content */}
          <motion.div
            key={activeIndex}
            className="flex-1 min-h-[400px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
          >
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-text-lightest-slate mb-1">
                {experiences[activeIndex].position}
                <span className="text-green-tint font-mono ml-2">
                  @
                  <a
                    href={experiences[activeIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {experiences[activeIndex].company}
                  </a>
                </span>
              </h3>
              <div className="text-text-slate font-mono text-sm mb-6">
                {experiences[activeIndex].duration} •{" "}
                {experiences[activeIndex].location}
              </div>
            </div>

            <ul className="space-y-4 mb-6">
              {experiences[activeIndex].description.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start text-text-slate leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 + index * 0.1,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                >
                  <span className="text-green-tint mr-4 mt-2 flex-shrink-0">
                    ▹
                  </span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              {experiences[activeIndex].technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-green-tint/10 text-green-tint text-xs font-mono rounded border border-green-tint/20 hover:bg-green-tint/20 transition-colors duration-250"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
