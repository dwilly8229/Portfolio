export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-24 flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 px-4"
    >
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
          Hi, I'm{" "}
          <span className="text-blue-600 dark:text-blue-400">
            William Daniel
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
          A passionate Frontend Developer & Blockchain Enthusiast building clean
          UIs and web apps.
        </p>
        <a
          href="#projects"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-500 transition duration-300"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
