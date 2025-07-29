'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import clsx from 'clsx';
import { useTheme } from 'next-themes';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Upcoming Events', href: '/events' },
  { name: 'Donations', href: '/donation' },
  { name: 'About', href: '/about' },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    if (!mounted) return;
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="w-full fixed top-0 z-50 bg-white dark:bg-black shadow-sm transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
            EYRN
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 items-center">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}

            {/* Desktop Dark Mode Toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
                aria-label="Toggle Dark Mode"
              >
                {resolvedTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
          </nav>

          {/* Mobile Controls: Theme Toggle + Menu */}
          <div className="flex items-center gap-4 md:hidden">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="text-gray-700 dark:text-gray-300"
                aria-label="Toggle Dark Mode"
              >
                {resolvedTheme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white dark:bg-black px-4 pb-4"
          >
            <ul className="flex flex-col gap-4 pt-2">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
