import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    title: "🎥 Netflix Clone",
    description:
      "A responsive Netflix UI built using React and TailwindCSS. Includes homepage, login UI, and trailer previews.",
    tech: ["Reactjs", "Tailwind CSS", "TMDB API", "Axios", "Firebase"],
    link: "https://netflixclone-gamma-plum.vercel.app",
    image: "/NET.jpg",
  },
  {
    title: "🌐 On-Chain Social Media DApp",
    description:
      "A decentralized activist social media platform built on the Internet Computer. Features include zero-knowledge-based system.",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Rust",
      "Internet Computer",
      "zk-SNARKs",
      "Canisters",
      "ICP",
    ],
    link: "https://github.com/dwilly8229/activist-social-media",
    image: "/OCSM1.jpg",
  },
  {
    title: "🛠 CRUD (Rust+React)",
    description:
      "Decentralized app performing Create, Read, Update, Delete using Rust backend and React frontend on the Internet Computer.",
    tech: ["Reactjs", "Rust", "Tailwind CSS", "ICP", "Candid", "Vite"],
    link: "https://github.com/dwilly8229/crudop.git",
    image: "/crud1.jpg",
  },
  {
    title: "🎵 Spotify Clone",
    description:
      "A music player built using React, Vite, and Tailwind with playlist support and dynamic UI.",
    tech: [
      "Reactjs",
      "Tailwind CSS",
      "Vite",
      "Context API",
      "LocalStorage",
      "SessionStorage",
      "Colorthief",
    ],
    link: "https://incspotiy.vercel.app/",
    image: "/spotify (1).jpg",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 px-4 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          Here are a few projects I've worked on recently:
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {projects.map((project, index) => {
            const ref = useRef(null);
            const inView = useInView(ref, { once: true, amount: 0.6 });

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={
                  inView
                    ? {
                        scale: 1,
                        opacity: 1,
                        transition: {
                          duration: 0.3,
                          delay: index * 0.1,
                          ease: "easeOut",
                        },
                      }
                    : {}
                }
                whileHover={{
                  scale: 1.07,
                }}
                className={`w-[270px] transition-all duration-300 p-4 flex flex-col items-start space-y-3 rounded-2xl
                       bg-white dark:bg-gray-800
                      ${
                        inView
                          ? "shadow-xl dark:shadow-purple-500/70" // when visible, stronger glow
                          : "shadow-md dark:shadow-purple-500/30"
                      } // when hidden, soft shadow
                `}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl w-full object-cover max-h-[150px]"
                  loading="lazy"
                />
                <h3 className="text-lg font-semibold text-blue-600 dark:text-purple-400">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-sm font-medium bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-700 transition"
                >
                  Live Demo ↗
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
