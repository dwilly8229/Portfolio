export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 px-4 bg-white text-gray-800 dark:bg-gray-900 dark:text-white"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10">
          Feel free to reach out to me for collaborations, project ideas, or
          just to say hi. I'm open to new opportunities!
        </p>

        <form
          action="https://formspree.io/f/manjlejk"
          method="POST"
          className="space-y-6 text-left"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Name
            </label>
            <input
              id="name" // ✅ Added id
              type="text"
              name="name"
              required
              className="mt-1 w-full border border-gray-300 dark:border-gray-700 rounded-lg p-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              id="email" // ✅ Added id
              type="email"
              name="email"
              required
              className="mt-1 w-full border border-gray-300 dark:border-gray-700 rounded-lg p-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message" // ✅ Added id
              name="message"
              rows="5"
              required
              className="mt-1 w-full border border-gray-300 dark:border-gray-700 rounded-lg p-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 text-center space-y-2 text-gray-600 dark:text-gray-400">
          <p>
            Email:{" "}
            <a
              href="mailto:danielwilliam491999@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              danielwilliam491999@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+919650563886"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              +91 96505 63886
            </a>
          </p>
          <p>
            GitHub:{" "}
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
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/william-daniel-975a74114/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              linkedin.com/in/williamdaniel0409
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
