import { motion } from 'framer-motion';
import { SiGithub } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';
import fallback1 from '../assets/projects/project1.svg';
import fallback2 from '../assets/projects/project2.svg';
import fallback3 from '../assets/projects/project3.svg';

export default function Projects() {
  // By default, try to load project screenshots from `public/images/projects/`.
  // Users can drop images there (e.g. project1.jpg) to replace placeholders.
  const projects = [
  {
    title: 'Real-time Collaborative Todo Dashboard',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.IO'],
    desc: 'Smart Assign, drag-and-drop, conflict handling, real-time updates.',
    image: '/images/project1.png',
    fallback: fallback1,
    demo: 'https://todo-dashboard-beta.vercel.app/login',
    code: 'https://github.com/asmitapat/TODO-Dashboard'
  },
  {
    title: 'Face Tracking + Recording App',
    tech: ['React', 'Next.js', 'face-api.js'],
    desc: 'Real-time face detection and local video recording.',
    image: '/images/project2.png',
    fallback: fallback2,
    demo: 'https://face-tracking-app-mauve.vercel.app/',
    code: 'https://github.com/asmitapat/face-tracking-app'
  },
  {
    title: 'Touch, Select and Dine System',
    tech: ['React', 'Node.js', 'Database'],
    desc: 'Tablet-based restaurant ordering with real-time management.',
    image: '/images/project3.png',
    fallback: fallback3,
    demo: '#',
    code: '#'
  }
];


  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            className="rounded-lg overflow-hidden glass border dark:border-gray-700 hover:shadow-2xl transition transform"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={p.img}
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = p.fallback; }}
                  alt={p.title}
                  className="w-full h-48 object-cover md:h-full"
                />
              </div>
              <div className="p-6 md:w-1/2">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{p.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full dark:bg-indigo-800/30 dark:text-indigo-200">{t}</span>
                  ))}
                </div>
                <p className="mb-4 text-gray-800 dark:text-gray-200">{p.desc}</p>

                <div className="flex space-x-3">
                  {p.demo && p.demo !== '#' && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
                      Demo <FiExternalLink />
                    </a>
                  )}

                  {p.code && p.code !== '#' && (
                    <a href={p.code} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-indigo-600 text-indigo-600 px-4 py-2 rounded hover:bg-indigo-50 dark:text-indigo-300">
                      <SiGithub />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
