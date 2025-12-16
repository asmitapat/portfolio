import { SiLinkedin, SiGithub } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';
import { FiPhone } from 'react-icons/fi';

export default function Contact() {
  const email = 'patilasmita2701@gmail.com';
  const phone = '+919970354833';
  const linkedIn = 'https://www.linkedin.com/in/asmita-patil-2a253228b';
  const github = 'https://github.com/asmitapat';

  return (
    <section id="contact" className="bg-gradient-to-r from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Contact</h2>

        <address className="not-italic">
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li>
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label={`Send an email to ${email}`}
              >
                <HiOutlineMail size={20} aria-hidden="true" />
                <span className="font-medium">Email</span>
                <span className="ml-auto text-sm text-gray-600 dark:text-gray-400">{email}</span>
              </a>
            </li>

            <li>
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label={`Call ${phone}`}
              >
                <FiPhone size={18} aria-hidden="true" />
                <span className="font-medium">Phone</span>
                <span className="ml-auto text-sm text-gray-600 dark:text-gray-400">{phone}</span>
              </a>
            </li>

            <li>
              <a
                href={linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Open LinkedIn profile in a new tab"
              >
                <SiLinkedin size={18} aria-hidden="true" />
                <span className="font-medium">LinkedIn</span>
                <span className="ml-auto text-sm text-gray-600 dark:text-gray-400">View profile</span>
              </a>
            </li>

            <li>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Open GitHub profile in a new tab"
              >
                <SiGithub size={18} aria-hidden="true" />
                <span className="font-medium">GitHub</span>
                <span className="ml-auto text-sm text-gray-600 dark:text-gray-400">View profile</span>
              </a>
            </li>
          </ul>
        </address>
      </div>
    </section>
  );
}
