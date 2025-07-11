import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const [isDark, setIsDark] = useState(false);

  // Watch for dark mode class changes on <html>
  useEffect(() => {
    const checkTheme = () => {
      const htmlClassList = document.documentElement.classList;
      setIsDark(htmlClassList.contains("dark"));
    };

    // Initial theme check
    checkTheme();

    // MutationObserver to watch for class changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* 🎥 Switch video based on theme */}
      <video
        key={isDark ? "dark" : "light"} // Ensures re-render on theme change
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src={isDark ? "/night-hill1.mp4" : "/day-sky.mp4"}
          type="video/mp4"
        />
      </video>

      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/30 dark:bg-black/50 z-10" />

      <motion.div
        className="relative z-20 max-w-3xl px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            William Daniel
          </span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-6">
          A passionate Frontend Developer & Blockchain Enthusiast building clean
          UIs and web apps.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="inline-block px-6 py-3 rounded-xl text-lg font-bold 
             bg-gradient-to-r from-blue-600 to-cyan-500 
             dark:from-purple-500 dark:to-pink-400 
             bg-clip-text text-transparent border border-white hover:scale-105 transition"
          >
            View My Work
          </a>
        </div>
        <div className="flex justify-center gap-6 mt-6 text-xl text-white">
          <a
            href="https://github.com/dwilly8229"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/williamdaniel0409"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
