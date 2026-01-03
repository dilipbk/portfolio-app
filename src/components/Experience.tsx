"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const experiences = [
  {
    company: "Tech Dev",
    position: "Senior Frontend Engineer (Engineering Lead) | React - Node",
    duration: "Dec 2025 - Present",
    location: "Australia",
    description: [
      "Building and optimizing Next.js, React, and Expo applications with focus on scalability and performance",
      "Scaling existing applications through code optimization, refactoring, and implementing best practices",
      "Continuously improving app architecture, load times, and overall user experience",
      "Leading technical initiatives and implementing modern development workflows",
      "Mentoring team members and establishing coding standards for better code quality",
    ],
    technologies: [
      "Next.js",
      "React",
      "Expo",
      "TypeScript",
      "Node.js",
      "Redux",
    ],
    link: "https://techdev.dev",
  },
  {
    company: "Resimator Oy",
    position: "Senior Software Engineer | React",
    duration: "Dec 2023 - Jan 2025",
    location: "Turku, Finland",
    description: [
      "Built multi-tenant startup architecture achieving less than 500ms load time with fast mobile startup",
      "Reduced app startup time to less than 2 seconds by optimizing rendering and implementing lazy loading",
      "Achieved 60 FPS UI performance with efficient animation handling and rendering improvements",
      "Refactored critical components through effective re-usable patterns and state management, improving load speed by 25%",
      "Enhanced frontend caching and state management, improving data load times by 30%",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Redux",
      "Material UI",
      "PostgreSQL",
    ],
    link: "https://resimator.fi",
  },
  {
    company: "Genius Systems",
    position: "Software Engineer | React",
    duration: "Nov 2022 - Jan 2025",
    location: "Lalitpur, Nepal",
    description: [
      "Developed responsive web apps using HTML, CSS, TypeScript, and React, improving user engagement by 20%",
      "Reduced app startup time to less than 2 seconds and achieved 60 FPS UI performance",
      "Achieved 25% faster load times across multiple client projects",
      "Optimized web performance and UI/UX, achieving 25% faster load times",
      "Collaborated on 5 projects with scalable and maintainable code",
    ],
    technologies: [
      "JavaScript",
      "React",
      "jQuery",
      "Redux",
      "MongoDB",
      "MySQL",
    ],
    link: "https://geniussystems.com.np",
  },
  {
    company: "Rolling Pvt. Ltd.",
    position: "Software Engineer | React",
    duration: "Jun 2019 - Sep 2022",
    location: "Kathmandu, Nepal",
    description: [
      "Developed responsive web apps with HTML, CSS, TypeScript, and React, reducing page load errors by 15%",
      "Optimized web performance and UI/UX, improving load speed",
      "Optimized page performance by jQuery enhancements with React; cutting page load errors by 15%",
      "Delivered major features through scalable React improvements and code enhancements",
      "Collaborated on 5 projects with scalable maintainable code",
    ],
    technologies: ["HTML", "CSS", "TypeScript", "React", "jQuery", "Redux"],
    link: "https://rollingnepal.com",
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
                    ? "text-green-tint bg-green-tint/10 border-green-tint border-b-2 md:border-b-0 md:border-l-2"
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
