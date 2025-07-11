import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 relative bg-white dark:bg-gray-900 overflow-hidden"
    >
      {/* 🌈 Decorative Glows */}
      <div className="absolute -top-20 -left-32 w-96 h-96 rounded-full bg-purple-400 opacity-10 blur-3xl z-0" />
      <div className="absolute -bottom-20 -right-32 w-96 h-96 rounded-full bg-cyan-400 opacity-10 blur-3xl z-0" />

      <motion.div
        className="max-w-4xl mx-auto relative z-10 text-center backdrop-blur-md bg-white/70 dark:bg-white/5 p-10 rounded-3xl shadow-xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-500 dark:from-purple-400 dark:to-pink-500 bg-clip-text text-transparent">
          About Me
        </h2>

        <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
          I'm{" "}
          <span className="font-semibold text-blue-600 dark:text-purple-400">
            William Daniel
          </span>
          , a creative frontend developer passionate about building seamless
          user experiences and exploring futuristic tech like{" "}
          <span className="font-medium text-pink-500 dark:text-pink-400">
            blockchain & smart contracts
          </span>
          . I transform ideas into fluid, scalable, and aesthetic web
          interfaces.
        </p>

        <p className="mt-6 text-gray-600 dark:text-gray-400 text-base md:text-lg">
          Currently mastering{" "}
          <span className="text-cyan-600 dark:text-cyan-400 font-medium">
            fullstack development
          </span>{" "}
          with a focus on real-world DApps, learning Rust for smart contracts,
          and contributing to impactful open-source projects.
        </p>
      </motion.div>
    </section>
  );
}
