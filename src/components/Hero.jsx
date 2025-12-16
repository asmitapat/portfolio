import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section
      className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-pink-50 dark:from-indigo-900 dark:via-gray-900 dark:to-pink-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-600 dark:from-indigo-300 dark:to-pink-300"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          Hi, I'm Asmita Patil 👋
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-6 text-gray-700 dark:text-gray-300 max-w-xl mx-auto"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Full Stack Developer building responsive UIs and scalable backends. I enjoy
          crafting interactive experiences with React, Node.js and modern tools.
        </motion.p>

        <motion.div
          className="space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a
            href="#projects"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:scale-105 transform transition dark:bg-indigo-500"
          >
            View Projects
          </a>

          <a
            href="/Asmita_Patil_Resume.pdf"
            download
            className="inline-block border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 dark:text-indigo-300"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
