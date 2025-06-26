import React from "react";

const projects = [
  {
    title: "🛠 CRUD (Rust+React)",
    description:
      "Decentralized app performing Create, Read, Update, Delete using Rust backend and React frontend on the Internet Computer.",
    tech: ["Reactjs", "Rust", "Tailwind CSS", "ICP", "Candid", "Vite"],
    link: "https://github.com/dwilly8229/crudop.git",
  },
  {
    title: "🎥 Netflix Clone",
    description:
      "A responsive Netflix UI built using React and TailwindCSS. Includes homepage, login UI, and trailer previews.",
    tech: ["Reactjs", "Tailwind CSS", "TMDB API", "Axios", "Firebase"],
    link: "https://netflixclone-gamma-plum.vercel.app",
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
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 px-4 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          Here are a few projects I've worked on recently:
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Projects →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
