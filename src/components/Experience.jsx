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
      className="py-16 px-4 bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Experience</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          Here's a summary of the roles I've held and the value I brought.
        </p>

        <div className="space-y-8 text-left">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                {exp.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-200 font-medium">
                {exp.company}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {exp.duration}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
