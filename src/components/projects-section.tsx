"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A modern web application built with Next.js, TypeScript, and Tailwind CSS. Features real-time data synchronization and beautiful animations.",
    image: "/project1.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://project1.com",
    github: "https://github.com/username/project1",
  },
  {
    title: "Project Two",
    description:
      "An e-commerce platform with advanced filtering, search, and cart functionality. Built with React and Node.js.",
    image: "/project2.jpg",
    tags: ["React", "Node.js", "PostgreSQL", "Redux"],
    link: "https://project2.com",
    github: "https://github.com/username/project2",
  },
  {
    title: "Project Three",
    description:
      "A real-time chat application with video calling capabilities. Uses WebRTC and Socket.io for seamless communication.",
    image: "/project3.jpg",
    tags: ["WebRTC", "Socket.io", "Express", "MongoDB"],
    link: "https://project3.com",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-lg border border-border bg-background">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden sm:h-64">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            width={500}
            height={500}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>

        {/* Project Content */}
        <div className="relative p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <div className="flex gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-2 text-foreground/60 transition-colors hover:bg-primary-500/10 hover:text-foreground"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                  </svg>
                </a>
              )}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-foreground/60 transition-colors hover:bg-primary-500/10 hover:text-foreground"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3"
                  />
                </svg>
              </a>
            </div>
          </div>

          <p className="mt-3 text-foreground/80">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-primary-500/10 px-2.5 py-0.5 text-xs font-medium text-primary-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-accent-500/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section className="relative py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-foreground/80">
            A selection of my recent work, showcasing my expertise in web
            development, design, and problem-solving.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
