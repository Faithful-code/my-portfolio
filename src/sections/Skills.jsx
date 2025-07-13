import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "HTML", emoji: "📄" },
    { name: "CSS", emoji: "🎨" },
    { name: "JavaScript", emoji: "🧠" },
    { name: "React", emoji: "⚛️" },
    { name: "Tailwind CSS", emoji: "💅" },
    { name: "Vite", emoji: "⚡" },
    { name: "Git & GitHub", emoji: "🔧" },
    { name: "Framer Motion", emoji: "🎞️" },
  ];

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <motion.section
      id="skills"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white py-20 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-6 text-teal-500 dark:text-teal-400"
          variants={item}
        >
          Tech Stack & Tools
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-zinc-600 dark:text-zinc-400 mb-10 max-w-xl mx-auto text-sm sm:text-base"
          variants={item}
        >
          These are the technologies I use daily to build responsive, scalable,
          and modern web experiences.
        </motion.p>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
          variants={container}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.07 }}
              className="flex items-center gap-3 bg-zinc-100 dark:bg-zinc-800 p-4 rounded-xl shadow-md hover:shadow-teal-500/30 hover:ring-2 hover:ring-teal-400 transition-all duration-300 group"
            >
              <span className="text-2xl group-hover:animate-pulse min-w-[1.75rem]">
                {skill.emoji}
              </span>
              <span className="font-medium text-sm sm:text-base text-zinc-800 dark:text-zinc-200">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
