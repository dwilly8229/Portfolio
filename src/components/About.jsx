export default function About() {
  return (
    <section
      id="about"
      className="py-16 px-4 bg-white text-gray-800 dark:bg-gray-900 dark:text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
          About Me
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          I'm{" "}
          <span className="text-blue-600 dark:text-blue-400 font-medium">
            William Daniel
          </span>
          , a frontend developer with a deep interest in building user-friendly
          web apps and exploring emerging technologies like blockchain. I enjoy
          turning complex problems into elegant, accessible designs. Recently,
          I've worked on projects involving React, Tailwind CSS, Rust, and smart
          contracts.
        </p>
        <div className="mt-8">
          <p className="text-gray-600 dark:text-gray-400">
            I'm currently focused on mastering fullstack development and
            creating real-world applications that are both scalable and
            maintainable. I'm always open to learning new tools, collaborating
            on exciting ideas, and building software that makes a difference.
          </p>
        </div>
      </div>
    </section>
  );
}
