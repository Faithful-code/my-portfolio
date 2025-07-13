import { motion } from "framer-motion";
import MyImage from "../assets/MyImage.webp"; // ✅ Correct path to image

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 bg-white text-zinc-800 dark:bg-zinc-900 dark:text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.4 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          variants={childVariants}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-teal-500 mb-10 text-center"
        >
          About Me
        </motion.h2>

        {/* Content */}
        <motion.div
          variants={childVariants}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col-reverse md:flex-row items-center gap-10"
        >
          {/* Text */}
          <motion.div
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:w-1/2 text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed"
          >
            <p>
              I'm a{" "}
              <span className="text-teal-500 font-semibold">
                Frontend Developer
              </span>{" "}
              passionate about creating elegant, performant, and accessible web
              applications using tools like <strong>React</strong>,{" "}
              <strong>Tailwind CSS</strong>, and modern{" "}
              <strong>JavaScript</strong>.
            </p>
            <br />
            <p>
              I enjoy clean code, component-based architecture, and micro
              animations that make interfaces feel alive. Whether it's a landing
              page, dashboard, or portfolio — I bring creativity to code.
            </p>
          </motion.div>
          {/* Image */}
          <motion.div
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:w-1/2 w-full flex justify-center"
          >
            <motion.div
              variants={childVariants}
              className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 overflow-hidden rounded-xl shadow-2xl bg-white dark:bg-zinc-800"
            >
              <motion.img
                src={MyImage}
                alt="Fidelis Johnson"
                className="w-full h-full object-contain p-2"
                variants={childVariants}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
