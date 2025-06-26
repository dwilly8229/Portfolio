const skills = [
  "React.js",
  "JavaScript (ES6+)",
  "HTML5 & CSS3",
  "Tailwind CSS",
  "Redux",
  "Vite",
  "Rust",
  "MongoDB",
  "Node.js",
  "Git & GitHub",
  "Blockchain Basics",
  "Smart Contracts",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 px-4 bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-white"
    >
      <div className="max-w-5xl m-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Skills</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10">
          Here are some of the technologies and tools I've been working with:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-sm rounded-xl px-4 py-3 text-sm font-medium text-blue-700 dark:text-blue-400 border border-gray-200 dark:border-gray-700 hover:shadow-md transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
