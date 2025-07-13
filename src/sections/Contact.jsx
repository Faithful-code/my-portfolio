import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    setLoading(true);
    try {
      const res = await fetch("https://formspree.io/f/xldnqaoz", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("🚫 Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-20 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.4 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={fadeInUp}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl font-bold text-teal-500 mb-10 text-center"
        >
          Contact Me
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <motion.div variants={fadeInUp}>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
              />
            </motion.div>

            {/* Email */}
            <motion.div variants={fadeInUp}>
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
              />
            </motion.div>

            {/* Message */}
            <motion.div variants={fadeInUp}>
              <textarea
                name="message"
                rows="5"
                required
                placeholder="Your Message"
                className="w-full p-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={fadeInUp}>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-teal-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-teal-400 transition duration-300"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}
