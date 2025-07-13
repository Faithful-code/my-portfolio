import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Load saved theme preference on first mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") setDarkMode(false);
    if (savedTheme === "dark") setDarkMode(true);
  }, []);

  // Apply theme class and persist preference
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Smooth scroll behavior for anchor links
  useEffect(() => {
    const smoothScroll = (e) => {
      const href = e.currentTarget.getAttribute("href");
      if (href.startsWith("#")) {
        e.preventDefault();
        const section = document.querySelector(href);
        section?.scrollIntoView({ behavior: "smooth" });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => link.addEventListener("click", smoothScroll));
    return () =>
      links.forEach((link) => link.removeEventListener("click", smoothScroll));
  }, []);

  return (
    <div className="bg-white font-inter text-zinc-900 dark:bg-zinc-900 dark:text-white transition-colors duration-300">
      <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
      <Header toggleTheme={() => setDarkMode(!darkMode)} isDark={darkMode} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
