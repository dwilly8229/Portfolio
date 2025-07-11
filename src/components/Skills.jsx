import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiRedux,
  SiVite,
  SiRust,
  SiMongodb,
  SiNodedotjs,
  SiGithub,
  SiEthereum,
  SiSolidity,
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { icon: <SiReact />, name: "React.js" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiHtml5 />, name: "HTML5" },
  { icon: <SiCss3 />, name: "CSS3" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <SiRedux />, name: "Redux" },
  { icon: <SiVite />, name: "Vite" },
  { icon: <SiRust />, name: "Rust" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <SiGithub />, name: "GitHub" },
  { icon: <SiEthereum />, name: "Blockchain" },
  { icon: <SiSolidity />, name: "Solidity" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-4 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 bg-repeat pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold mb-4">Skills</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10">
          Tools & technologies I enjoy working with:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="flex flex-col items-center gap-2 p-5 bg-white/70 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:scale-105 hover:shadow-purple-500/40 dark:hover:shadow-pink-400/40 transition"
            >
              <div className="text-3xl text-blue-600 dark:text-purple-400">
                {skill.icon}
              </div>
              <span className="text-sm font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
