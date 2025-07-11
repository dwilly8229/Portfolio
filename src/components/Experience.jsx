import { motion } from "framer-motion";

export default function Experience() {
  const experience = [
    {
      title: "Frontend Developer",
      company: "Boozlo (Startup)",
      duration: "Jul 2022 - Dec 2022",
      description:
        "Developed responsive UIs using React.js and Tailwind. Managed backend product uploads and collaborated directly with brand partners.",
    },
    {
      title: "Data Analyst",
      company: "Boozlo (Startup)",
      duration: "Feb 2023 - Aug 2023",
      description:
        "Performed data analysis and reporting to optimize logistics and delivery operations using Excel and Python.",
    },
    {
      title: "Blockchain Developer",
      company: "BlockseBlock",
      duration: "May 2025 - Present",
      description:
        "Building decentralized applications (DApps) on the Internet Computer Protocol using Rust and React. Worked on CRUD DApp, learned concepts like proof of work/stake, wallet infrastructure, and smart contract deployment.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-4 bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>

        <div className="relative border-l-2 border-blue-400 dark:border-purple-500 pl-6 space-y-12">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Dot on timeline */}
              <div className="absolute -left-3.5 top-3 w-4 h-4 rounded-full bg-blue-500 dark:bg-purple-400 border-4 border-white dark:border-gray-900 z-10 shadow-lg" />

              <div className="bg-white/80 dark:bg-white/5 backdrop-blur-lg p-6 rounded-xl shadow-md transition-transform duration-300 group-hover:scale-[1.015]">
                <h3 className="text-xl font-semibold text-blue-600 dark:text-purple-400">
                  {exp.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  {exp.company}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {exp.duration}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
