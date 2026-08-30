import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon, ArrowDownTrayIcon, SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "@/context/ThemeContext";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "OrderFlow", href: "#orderflow", highlight: true },
  { name: "Engineering", href: "#engineering" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Teaching", href: "#teaching" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "dark:bg-black/90 bg-white/90 backdrop-blur-md border-b dark:border-neutral-800/80 border-slate-200 py-3 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Personal Brand */}
        <a
          href="#hero"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-mono font-bold text-sm shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            AK
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wider dark:text-neutral-100 text-slate-900 font-outfit group-hover:text-blue-500 transition-colors">
              ANIL KUMAR RANA
            </span>
            <span className="text-[10px] font-mono dark:text-neutral-400 text-slate-500 tracking-tight">
              SENIOR SOFTWARE ENGINEER
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 dark:bg-neutral-900/80 bg-slate-100/80 p-1.5 rounded-full border dark:border-neutral-800/80 border-slate-200 backdrop-blur-md">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                item.highlight
                  ? "text-blue-500 hover:text-blue-600 dark:hover:text-white dark:bg-blue-900/30 bg-blue-50 border border-blue-500/30"
                  : "dark:text-neutral-300 text-slate-700 dark:hover:text-white hover:text-slate-900 dark:hover:bg-neutral-800/60 hover:bg-slate-200/60"
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Action CTAs: Theme Toggle & Resume */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Dark / Light Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg dark:bg-neutral-900 bg-slate-100 border dark:border-neutral-800 border-slate-200 text-neutral-400 dark:hover:text-amber-400 hover:text-indigo-600 transition-colors focus:outline-none"
            aria-label="Toggle Theme Mode"
            title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
          >
            {theme === "dark" ? (
              <SunIcon className="w-4 h-4 text-amber-400" />
            ) : (
              <MoonIcon className="w-4 h-4 text-indigo-600" />
            )}
          </button>

          <a
            href="https://drive.google.com/file/d/1z94SpgAE9w-950xogS74NxzpgCRpod7N/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium dark:text-neutral-200 text-slate-700 dark:bg-neutral-900 bg-white hover:bg-slate-50 dark:hover:bg-neutral-800 border dark:border-neutral-700/80 border-slate-200 rounded-lg transition-all focus:outline-none"
          >
            <ArrowDownTrayIcon className="w-3.5 h-3.5 text-blue-500" />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg dark:bg-neutral-900 bg-slate-100 border dark:border-neutral-800 border-slate-200 dark:text-neutral-300 text-slate-700 hover:text-blue-500 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden dark:bg-black/95 bg-white/95 border-b dark:border-neutral-800 border-slate-200 backdrop-blur-xl px-4 pt-3 pb-6 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    item.highlight
                      ? "text-blue-500 dark:bg-blue-900/40 bg-blue-50 border border-blue-500/30"
                      : "dark:text-neutral-300 text-slate-700 dark:hover:text-white hover:text-slate-900 dark:hover:bg-neutral-900 hover:bg-slate-100"
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2 border-t dark:border-neutral-800/80 border-slate-200 mt-2 flex flex-col gap-2">
                <a
                  href="https://drive.google.com/file/d/1z94SpgAE9w-950xogS74NxzpgCRpod7N/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center px-4 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center justify-center gap-2"
                >
                  <ArrowDownTrayIcon className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
