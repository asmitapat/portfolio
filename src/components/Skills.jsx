import { motion } from 'framer-motion';

import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaGithub, FaJava } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiMysql, SiPython, SiCplusplus } from "react-icons/si";


export default function Skills() {
 const skills = [
  { name: 'React.js', Icon: FaReact, color: '#61dafb' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#f7df1e' },
  { name: 'Node.js', Icon: FaNodeJs, color: '#3c873a' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#4DB33D' },
  { name: 'MySQL', Icon: SiMysql, color: '#00758F' },
  { name: 'HTML5', Icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', Icon: FaCss3, color: '#1572B6' },
  { name: 'Java', Icon: FaJava, color: '#f89820' },
  { name: 'Python', Icon: SiPython, color: '#3776AB' },
  { name: 'C / C++', Icon: SiCplusplus, color: '#00599C' },
  { name: 'Git & GitHub', Icon: FaGithub, color: '#181717' }
  ];

  return (
    <section id="skills" className="bg-white dark:bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.Icon;
            return (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center p-4 rounded-lg bg-white/60 dark:bg-gray-800/60 border dark:border-gray-700 hover:shadow-lg"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
              >
                <div className="w-16 h-16 mb-3 flex items-center justify-center rounded-full bg-white dark:bg-gray-700">
                  <Icon size={36} color={skill.color} />
                </div>
                <div className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center">{skill.name}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
