import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="text-gray-600 dark:text-gray-300 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Reach out for collaboration, ideas, or just a quick hello!
        </motion.p>

        <motion.form
          action="https://formspree.io/f/manjlejk"
          method="POST"
          className="bg-white/80 dark:bg-white/5 backdrop-blur-md p-6 rounded-xl space-y-4 text-left shadow-md"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {[
            { label: "Name", name: "name", type: "text" },
            { label: "Email", name: "email", type: "email" },
          ].map((field) => (
            <div key={field.name}>
              <label htmlFor={field.name} className="block text-sm font-medium">
                {field.label}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                required
                className="mt-1 w-full rounded-md p-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          ))}

          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="mt-1 w-full rounded-md p-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-md font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 transition"
          >
            🚀 Send Message
          </button>
        </motion.form>

        <motion.div
          className="mt-10 space-y-1 text-sm text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>
            📧 Email:{" "}
            <a
              href="mailto:danielwilliam491999@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              danielwilliam491999@gmail.com
            </a>
          </p>
          <p>
            📞 Phone:{" "}
            <a
              href="tel:+919650563886"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              +91 96505 63886
            </a>
          </p>
          <p>
            💻 GitHub:{" "}
            <a
              href="https://github.com/dwilly8229"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              github.com/dwilly8229
            </a>
          </p>
          <p>
            👔 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/williamdaniel0409"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              linkedin.com/in/williamdaniel0409
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
