import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";

export default function ProjectCard({ title, description, link, tech, image }) {
  const [showImage, setShowImage] = useState(false);

  // Escape key closes modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setShowImage(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (showImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showImage]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-zinc-50 dark:bg-zinc-800 rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 cursor-pointer group"
      >
        {image && (
          <motion.img
            src={image}
            alt={`${title} screenshot`}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            onClick={() => setShowImage(true)}
            whileHover={{ scale: 1.03 }}
          />
        )}

        <div className="p-6">
          <h3 className="text-xl font-bold text-teal-500 dark:text-teal-400 mb-2">
            {title}
          </h3>
          <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-4">
            {description}
          </p>

          {Array.isArray(tech) && tech.length > 0 && (
            <ul className="flex flex-wrap gap-2 mb-4 text-xs">
              {tech.map((item, i) => (
                <li
                  key={i}
                  className="bg-zinc-100 dark:bg-zinc-700 text-zinc-800 dark:text-white px-2 py-1 rounded-md"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-teal-600 dark:text-teal-400 hover:text-teal-400 dark:hover:text-teal-300 transition-colors"
          >
            View Project <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </motion.div>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {showImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowImage(false)}
          >
            <motion.div
              className="relative max-w-4xl w-full mx-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, type: "spring" }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={image}
                alt={`${title} full screenshot`}
                className="w-full rounded-lg shadow-xl"
              />
              <button
                onClick={() => setShowImage(false)}
                className="absolute top-3 right-3 text-white hover:text-red-400 transition"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
