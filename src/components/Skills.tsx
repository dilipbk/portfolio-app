"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "TypeScript", level: 95 },
      { name: "JavaScript", level: 95 },
      { name: "Python", level: 75 },
      { name: "Rust", level: 65 },
      { name: "Java", level: 70 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Material UI", level: 90 },
      { name: "Redux", level: 92 },
      { name: "React Query", level: 88 },
      { name: "Zustand", level: 85 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 92 },
      { name: "Express", level: 90 },
      { name: "MongoDB", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "Redis", level: 80 },
      { name: "Prisma", level: 85 },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "AWS", level: 82 },
      { name: "GitHub Actions", level: 88 },
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 70 },
      { name: "Webpack", level: 85 },
      { name: "Babel", level: 80 },
    ],
  },
];

const SkillBar = ({
  name,
  level,
  index,
}: {
  name: string;
  level: number;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.19, 1, 0.22, 1],
      }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-text-light-slate font-mono text-sm">{name}</span>
        <span className="text-green-tint font-mono text-xs">{level}%</span>
      </div>
      <div className="w-full bg-navy-medium/30 rounded-full h-1.5 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-green-tint to-green-bright rounded-full relative"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.3 + index * 0.1,
            ease: [0.19, 1, 0.22, 1],
          }}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-green-tint/50 blur-sm rounded-full"></div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const SkillCategory = ({
  category,
  index,
}: {
  category: (typeof skillCategories)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="space-y-6"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        ease: [0.19, 1, 0.22, 1],
      }}
    >
      <h3 className="heading-small text-text-lightest-slate font-mono">
        {category.title}
      </h3>
      <div className="space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            index={skillIndex}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6 md:px-25">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          className="mb-16"
        >
          <h2 className="heading-medium text-text-lightest-slate font-mono mb-2">
            <span className="text-green-tint text-lg mr-2">02.</span>
            Skills & Technologies
          </h2>
          <div className="w-80 h-px bg-navy-medium mt-4"></div>
        </motion.div>

        <motion.p
          className="body-normal max-w-2xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
        >
          Over the years, I&apos;ve worked with a wide range of technologies and
          tools. Here are some of the technologies I&apos;m most proficient
          with:
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
