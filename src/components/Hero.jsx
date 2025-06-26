import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-24 flex flex-col justify-center items-center text-center 
             bg-gradient-to-br from-blue-200 via-white to-white 
             dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 px-4"
    >
      <motion.div
        className="max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-400 dark:from-purple-500 dark:to-pink-400 bg-clip-text text-transparent">
            William Daniel
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
          A passionate Frontend Developer & Blockchain Enthusiast building clean
          UIs and web apps.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="inline-block px-6 py-3 rounded-xl text-lg font-bold 
             bg-gradient-to-r from-blue-600 to-cyan-500 
             dark:from-purple-500 dark:to-pink-400 
             bg-clip-text text-transparent border border-blue-600 
             dark:border-purple-500 hover:scale-105 transition duration-300"
          >
            View My Work
          </a>
        </div>
        <div className="flex justify-center gap-6 mt-6 text-xl text-gray-600 dark:text-gray-300">
          <a
            href="https://github.com/dwilly8229"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/williamdaniel0409"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
