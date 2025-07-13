import { motion } from "framer-motion";

export default function Hero() {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="hero"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.6 }}
      className="relative h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white flex items-center justify-center px-6"
    >
      <div className="text-center max-w-2xl">
        {/* Name & Title */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight text-teal-500 dark:text-teal-400"
        >
          Hey, I’m Johnson 👋
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 mb-8"
        >
          I write clean code, build modern UIs, and enjoy turning wild ideas
          into digital experiences.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          href="#projects"
          className="inline-block bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-3 rounded-full text-sm sm:text-base font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
        >
          View My Work
        </motion.a>
      </div>

      {/* Floating Rocket Animation */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-8xl pointer-events-none select-none"
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 0.08,
          y: [0, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        🚀
      </motion.div>
    </motion.section>
  );
}
