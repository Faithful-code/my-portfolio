import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { SiTiktok } from "react-icons/si"; // TikTok icon

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-white text-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 py-8"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm">© 2025 Fidelis. All rights reserved.</p>

        <div className="mt-4 flex justify-center gap-6">
          {/* LinkedIn */}
          <motion.a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="hover:text-teal-500 transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="hover:text-teal-500 transition"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </motion.a>

          {/* Twitter */}
          <motion.a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="hover:text-teal-500 transition"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </motion.a>

          {/* TikTok */}
          <motion.a
            href="https://www.tiktok.com/@yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="hover:text-teal-500 transition"
            aria-label="TikTok"
          >
            <SiTiktok className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
}
