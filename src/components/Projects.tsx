"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

// Define the project type
type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  external?: string;
  category: string;
  year: string;
  status: string;
  impact: string;
  featured: boolean;
};

const projects: Project[] = [
  {
    title: "NetTV",
    description:
      "OTT, IPTV and streaming platform with 200+ live channels, games, movies, etc. Serves 5m+ users with real-time content delivery, user management, and scalable architecture for seamless streaming experience.",
    image: "/projects/nettv.png",
    technologies: ["React", "Node.js", "MongoDB", "Redis", "AWS", "Socket.io"],
    github: "https://github.com/dilipbk",
    external: "https://nettv.com.np",
    category: "Frontend",
    year: "2024",
    status: "Live",
    impact: "5M+ users",
    featured: true,
  },
  {
    title: "Nepali Patro",
    description:
      "Developed Nepali Patro, a comprehensive Nepali calendar app with events, festivals, horoscope, news, blogs, and more, serving 10M+ monthly active users and promoting Nepali culture globally.",
    image: "/projects/nepali-patro.png",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Redux"],
    github: "https://github.com/dilipbk",
    external: "https://napalination.com",
    category: "Full Stack",
    year: "2024",
    status: "Live",
    impact: "50+ users",
    featured: true,
  },
  {
    title: "Seldio",
    description:
      "Complete restaurant solution with apps like tenant management, ordering, POS, web for real-time notifications, chat, etc. Features multi-tenant architecture, inventory management, and analytics dashboard.",
    image: "/projects/seldio.webp",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Laravel",
      "MySQL",
    ],
    github: "https://github.com/dilipbk",
    external: "https://seldio.fi",
    category: "Frontend",
    year: "2023",
    status: "Live",
    impact: "Multi-tenant",
    featured: true,
  },
  {
    title: "Myldre",
    description:
      "Developed Myldre, a secure and scalable property management system centralizing properties, tenants, owners, maintenance, employees, and finances with role-based access, real-time notifications, and streamlined operational workflows.",
    image: "/projects/myldre.png",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Material UI"],
    github: "https://github.com/dilipbk",
    external: "https://myldre.no",
    category: "Full Stack",
    year: "2023",
    status: "Live",
    impact: "Real-time",
    featured: false,
  },
  {
    title: "Params Wizard",
    description:
      "NPM package for elegant URL parameter management in JavaScript/TypeScript applications. Provides type-safe parameter parsing, validation, and serialization with zero dependencies.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&auto=format&q=80",
    technologies: ["TypeScript", "Node.js", "NPM"],
    github: "https://github.com/dilipbk/params-wizard",
    external: "https://www.npmjs.com/package/params-wizard",
    category: "Open Source",
    year: "2024",
    status: "Live",
    impact: "NPM Package",
    featured: true,
  },
  {
    title: "Munchfam",
    description:
      "Contributed to building Munchfam, an all-in-one restaurant operating platform enabling unified order management, virtual brands, ingredient sourcing, and e-commerce solutions to help restaurants scale operations and improve profitability.",
    image: "/projects/munchfam.jpeg",
    technologies: ["React", "Node.js", "MongoDB", "Redux", "Stripe"],
    github: "https://github.com/dilipbk",
    external: "https://munaffan.com",
    category: "E-commerce",
    year: "2022",
    status: "Live",
    impact: "Online store",
    featured: false,
  },
  {
    title: "Garment E-commerce",
    description:
      "Full-featured e-commerce platform for garment industry with inventory management, size variations, color options, and secure payment processing. Includes admin dashboard for order management.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&auto=format&q=80",
    technologies: ["React", "Node.js", "PostgreSQL", "Redux", "AWS"],
    category: "E-commerce",
    year: "2022",
    status: "Live",
    impact: "Online retail",
    featured: false,
  },
];

// Extract unique categories from projects
const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

const FloatingFilter = ({
  activeCategory,
  setActiveCategory,
  sectionRef,
}: {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  sectionRef: React.RefObject<HTMLElement | null>;
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const isInView = useInView(sectionRef, {
    margin: "-10% 0px -10% 0px",
    amount: 0.1,
  });

  // Auto-hide filter when scrolling out of projects section
  useEffect(() => {
    if (!isInView && isFilterOpen) {
      setIsFilterOpen(false);
    }
  }, [isInView, isFilterOpen]);

  // Block scrolling when filter is open
  useEffect(() => {
    if (isFilterOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isFilterOpen]);

  return (
    <>
      {/* Filter Toggle Button */}
      <motion.div
        className="fixed top-1/2 right-4 md:right-8 transform -translate-y-1/2 z-50"
        initial={{ opacity: 0, x: 100 }}
        animate={{
          opacity: isInView ? 1 : 0,
          x: isInView ? 0 : 100,
          pointerEvents: isInView ? "auto" : "none",
        }}
        transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
      >
        <motion.button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="group relative bg-navy-dark/90 backdrop-blur-md border-2 border-green-tint/50 rounded-full p-4 shadow-2xl hover:border-green-tint hover:shadow-green-tint/25 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: isFilterOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg
              className="w-6 h-6 text-green-tint"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
              />
            </svg>
          </motion.div>

          {/* Active Category Indicator */}
          {activeCategory !== "All" && (
            <motion.div
              className="absolute left-1/2 top-2/3 transform !-translate-y-1/2 !-translate-x-1/2 bg-green-tint text-navy-darkest text-xs font-mono px-2 py-1 rounded-full whitespace-nowrap shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              {activeCategory}
            </motion.div>
          )}
        </motion.button>
      </motion.div>

      {/* Filter Panel */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-navy-darkest/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
            />

            {/* Filter Panel */}
            <motion.div
              className="fixed bottom-0 right-4 md:right-8 transform -translate-y-1/2 bg-navy-dark/95 backdrop-blur-xl border-2 border-green-tint/30 rounded-2xl p-6 shadow-2xl z-50 min-w-80 max-w-sm max-h-[85vh] overflow-y-auto"
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 100, scale: 0.9 }}
              transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-text-lightest-slate">
                  Filter Projects
                </h3>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="text-text-slate hover:text-green-tint transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="space-y-3">
                {categories.map((category, index) => {
                  const projectCount =
                    category === "All"
                      ? projects.length
                      : projects.filter((p) => p.category === category).length;

                  return (
                    <motion.button
                      key={category}
                      onClick={() => {
                        setActiveCategory(category);
                        setIsFilterOpen(false);
                      }}
                      className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${
                        activeCategory === category
                          ? "bg-green-tint/10 border-green-tint/30 text-green-tint"
                          : "bg-navy-medium/20 border-navy-medium/30 text-text-slate hover:border-green-tint/50 hover:text-green-tint"
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            activeCategory === category
                              ? "bg-green-tint"
                              : "bg-text-slate/30"
                          }`}
                        />
                        <span className="font-mono font-medium">
                          {category}
                        </span>
                      </div>
                      <span
                        className={`text-sm font-mono ${
                          activeCategory === category
                            ? "text-green-tint/70"
                            : "text-text-slate/60"
                        }`}
                      >
                        {projectCount}
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Results Summary */}
              <div className="mt-6 pt-6 border-t border-navy-medium/30">
                <div className="text-center">
                  <div className="text-sm text-text-slate font-mono">
                    Showing{" "}
                    <span className="text-green-tint font-semibold">
                      {activeCategory === "All"
                        ? projects.length
                        : projects.filter((p) => p.category === activeCategory)
                            .length}
                    </span>{" "}
                    {activeCategory !== "All" &&
                      `${activeCategory.toLowerCase()} `}
                    project
                    {(activeCategory === "All"
                      ? projects.length
                      : projects.filter((p) => p.category === activeCategory)
                          .length) !== 1
                      ? "s"
                      : ""}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

const FeaturedProject = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isReversed = index % 2 === 1;

  return (
    <motion.div
      ref={ref}
      className={`group relative grid md:grid-cols-12 gap-8 items-center mb-24 ${
        isReversed ? "md:text-right" : ""
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.19, 1, 0.22, 1],
      }}
      layout
    >
      {/* Project Image */}
      <div
        className={`md:col-span-7 ${
          isReversed ? "md:col-start-6" : ""
        } relative`}
      >
        <motion.div
          className="relative overflow-hidden rounded-lg shadow-2xl"
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={project.image}
            alt={project.title}
            className="w-full h-64 md:h-96 object-cover transition-all duration-700 group-hover:scale-105"
            width={500}
            height={500}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-darkest/80 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-green-tint/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Status Badge */}
          <div
            className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-mono backdrop-blur-sm ${
              project.status === "Live"
                ? "bg-green-500/20 border border-green-500/50 text-green-400"
                : project.status === "Featured"
                ? "bg-blue-500/20 border border-blue-500/50 text-blue-400"
                : "bg-gray-500/20 border border-gray-500/50 text-gray-400"
            }`}
          >
            {project.status}
          </div>
        </motion.div>
      </div>

      {/* Project Info */}
      <div
        className={`md:col-span-5 ${
          isReversed ? "md:col-start-1 md:row-start-1" : ""
        } space-y-6`}
      >
        <div className={`space-y-3 ${isReversed ? "md:text-right" : ""}`}>
          <motion.p
            className="font-mono text-green-tint text-sm tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
          >
            Featured Project
          </motion.p>

          <motion.h3
            className="text-3xl font-bold text-text-lightest-slate group-hover:text-green-tint transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
          >
            <a
              href={project.external ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-tint transition-colors duration-300"
            >
              {project.title}
            </a>
          </motion.h3>
        </div>

        <motion.div
          className="relative bg-navy-dark/90 backdrop-blur-sm border border-navy-medium/50 rounded-lg p-6 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
          whileHover={{ y: -4 }}
        >
          <p
            className={`text-text-light-slate leading-relaxed text-lg ${
              isReversed ? "text-right" : ""
            }`}
          >
            {project.description}
          </p>
        </motion.div>

        <motion.div
          className={`flex flex-wrap gap-3 ${
            isReversed ? "md:justify-end" : ""
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
        >
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="font-mono text-sm text-text-slate px-3 py-1 bg-navy-medium/30 rounded-full border border-navy-medium/20 hover:border-green-tint/50 hover:text-green-tint transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        <motion.div
          className={`flex items-center gap-6 ${
            isReversed ? "md:justify-end" : ""
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-slate hover:text-green-tint transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
            </svg>
          </a>
          {project?.external && (
            <a
              href={project.external}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-slate hover:text-green-tint transition-colors duration-300"
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

const ProjectGrid = ({ projects }: { projects: Project[] }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      layout
    >
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          className="group relative bg-navy-dark/40 backdrop-blur-sm border border-navy-medium/30 rounded-xl p-8 hover:border-green-tint/50 transition-all duration-500"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ y: -8 }}
          layout
        >
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-tint/10 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-tint"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-green-tint font-mono text-xs px-3 py-1 bg-green-tint/10 rounded-full border border-green-tint/20">
                {project.year}
              </span>
              <div className="flex items-center gap-3">
                {project?.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-slate hover:text-green-tint transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                    </svg>
                  </motion.a>
                )}
                {project?.external && (
                  <motion.a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-slate hover:text-green-tint transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </motion.a>
                )}
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-text-lightest-slate mb-4 group-hover:text-green-tint transition-colors duration-300">
            <a
              href={project.external}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.title}
            </a>
          </h3>

          <p className="text-text-light-slate leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs text-text-slate px-2 py-1 bg-navy-medium/30 rounded border border-navy-medium/20"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="font-mono text-xs text-text-slate px-2 py-1 bg-navy-medium/30 rounded border border-navy-medium/20">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-green-tint font-mono text-xs px-2 py-1 bg-green-tint/10 rounded border border-green-tint/20">
              {project.category}
            </span>
            <span
              className={`text-xs font-mono px-2 py-1 rounded ${
                project.status === "Live"
                  ? "bg-green-500/20 text-green-400"
                  : project.status === "Featured"
                  ? "bg-blue-500/20 text-blue-400"
                  : "bg-gray-500/20 text-gray-400"
              }`}
            >
              {project.status}
            </span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

const ProjectStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { label: "Projects Built", value: "15+", icon: "🚀" },
    { label: "Technologies", value: "20+", icon: "⚡" },
    { label: "Total Users", value: "100K+", icon: "👥" },
    { label: "Lines of Code", value: "∞", icon: "💻" },
  ];

  return (
    <motion.div
      ref={ref}
      className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="text-center p-6 bg-navy-dark/30 backdrop-blur-sm border border-navy-medium/30 rounded-lg hover:border-green-tint/30 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
          whileHover={{ y: -5 }}
        >
          <div className="text-2xl mb-2">{stat.icon}</div>
          <div className="text-2xl font-bold text-green-tint mb-1">
            {stat.value}
          </div>
          <div className="text-text-slate font-mono text-xs">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // Separate featured and other projects
  const featuredProjects = filteredProjects.filter(
    (project) => project.featured
  );
  const otherProjects = filteredProjects.filter((project) => !project.featured);

  // Only show "Other Projects" section if there are more than 4 projects total
  const shouldShowOtherSection =
    filteredProjects.length > 4 && otherProjects.length > 0;

  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-25 relative"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header - Following same pattern as other sections */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          className="mb-20 relative"
        >
          <h2 className="heading-medium text-text-lightest-slate font-mono mb-2">
            <span className="text-green-tint text-lg mr-2">04.</span>
            Some Things I&apos;ve Built
          </h2>
          <div className="w-80 h-px bg-navy-medium mt-4"></div>
        </motion.div>

        {/* Floating Filter */}
        <FloatingFilter
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          sectionRef={sectionRef}
        />

        {/* Featured Projects */}
        <AnimatePresence mode="wait">
          {featuredProjects.length > 0 && (
            <motion.div
              key={`featured-${activeCategory}`}
              className="mb-32"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {featuredProjects.map((project, index) => (
                <FeaturedProject
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Other Projects - Only show if more than 4 projects total */}
        <AnimatePresence mode="wait">
          {shouldShowOtherSection && (
            <motion.div
              key={`other-${activeCategory}`}
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h3
                className="text-2xl font-semibold text-text-lightest-slate mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {activeCategory === "All"
                  ? "Other Noteworthy Projects"
                  : `Other ${activeCategory} Projects`}
              </motion.h3>
              <ProjectGrid projects={otherProjects} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* No Results State */}
        <AnimatePresence>
          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-text-lightest-slate mb-2">
                No projects found
              </h3>
              <p className="text-text-slate">
                No projects match the selected category. Try a different filter.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats Section */}
        <ProjectStats />
      </div>
    </section>
  );
}
