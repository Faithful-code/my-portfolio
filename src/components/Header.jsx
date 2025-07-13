import { useEffect, useState } from "react";
import MyImage from "../assets/MyImage.webp";

export default function Header({ toggleTheme, isDark }) {
  const links = ["About", "Projects", "Skills", "Contact"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  // Handle scroll and set active link
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY + 100;

      links.forEach((link) => {
        const section = document.getElementById(link.toLowerCase());
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;

          if (scrollTop >= offsetTop && scrollTop < offsetBottom) {
            setActiveLink(link);
          }
        }
      });

      // Scroll progress bar
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / docHeight) * 100;
      document
        .getElementById("scroll-progress")
        ?.style.setProperty("width", `${scrolled}%`);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  // Smooth scroll on link click
  const handleLinkClick = (e, link) => {
    e.preventDefault();
    const section = document.getElementById(link.toLowerCase());
    section?.scrollIntoView({ behavior: "smooth" });
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 shadow-sm">
      {/* Scroll Progress Bar */}
      <div
        id="scroll-progress"
        className="h-1 bg-teal-500 transition-all duration-200 ease-linear"
        style={{ width: "0%" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="flex items-center space-x-3">
          <img
            src={MyImage}
            alt="Logo"
            className="h-10 w-10 rounded-full object-cover shadow"
          />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600">
            Johnson_Dev
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center text-base font-medium">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => handleLinkClick(e, link)}
              className={`transition-colors duration-200 ${
                activeLink === link
                  ? "text-teal-500 font-semibold"
                  : "text-zinc-800 dark:text-zinc-200 hover:text-teal-500"
              }`}
            >
              {link}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="ml-4 text-zinc-600 dark:text-zinc-300 hover:text-yellow-400 transition"
            aria-label="Toggle Theme"
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-zinc-700 dark:text-zinc-200"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed top-[68px] right-0 w-3/4 max-w-xs bg-white dark:bg-zinc-900 border-l border-zinc-200 dark:border-zinc-800 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-6 space-y-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => handleLinkClick(e, link)}
              className="text-zinc-800 dark:text-zinc-200 hover:text-teal-500 text-lg font-medium transition"
            >
              {link}
            </a>
          ))}
          <button
            onClick={() => {
              toggleTheme();
              setIsMenuOpen(false);
            }}
            className="mt-4 text-zinc-600 dark:text-zinc-300 hover:text-yellow-400 transition"
          >
            {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </nav>
      </div>
    </header>
  );
}
