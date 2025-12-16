import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    try {
      if (dark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    } catch (e) {}
  }, [dark]);

  return (
    <nav className={`fixed w-full z-50 transition ${scrolled ? 'backdrop-blur bg-white/70 dark:bg-gray-900/60 shadow' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl">Asmita Manik Patil</h1>
        <div className="flex items-center space-x-4 font-medium">
          <div className="space-x-4 hidden md:block">
            <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-300">About</a>
            <a href="#skills" className="hover:text-indigo-600 dark:hover:text-indigo-300">Skills</a>
            <a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-300">Projects</a>
            <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-300">Contact</a>
          </div>

          <button
            onClick={() => setDark(d => !d)}
            aria-label="Toggle theme"
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-sm"
          >
            {dark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
}
