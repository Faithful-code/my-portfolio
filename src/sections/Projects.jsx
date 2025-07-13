import { motion } from "framer-motion";
import LoginFormApp from "../assets/login-app-form.webp";
import PricingTable from "../assets/priciing-tablee.webp";
import TodoList from "../assets/todo-list-appppp.webp";
import DeviceShopCheckout from "../assets/deviceshopcheckoutt.webp";
import ProjectCard from "../components/ProjectCard";

// Animation configs
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  const projects = [
    {
      title: "Login Form App",
      description:
        "A clean and responsive login form UI built with React, Tailwind CSS, and Vite. It demonstrates modern form layout and animations.",
      link: "https://login-app-form.netlify.app/",
      image: LoginFormApp, // ✅ use the imported image
      tech: ["React", "Vite", "Tailwind"],
    },
    {
      title: "Todo List",
      description:
        "A simple and intuitive todo list app to track daily tasks. Built with React and Tailwind CSS, it has smooth UI transitions.",
      link: "https://todo-list-appppp.netlify.app/",
      image: TodoList,
      tech: ["React", "Vite", "Tailwind"],
    },
    {
      title: "Device Shop Checkout",
      description:
        "A minimalistic device checkout page interface using HTML and CSS, focusing on layout design and checkout user flow.",
      link: "https://deviceshopcheckoutt.netlify.app/",
      image: DeviceShopCheckout,
      tech: ["HTML", "CSS"],
    },
    {
      title: "Pricing Table",
      description:
        "A sleek pricing table UI component crafted with HTML and CSS, perfect for SaaS product plans or landing pages.",
      link: "https://priciing-tablee.netlify.app/",
      image: PricingTable,
      tech: ["HTML", "CSS"],
    },
  ];

  return (
    <motion.section
      id="projects"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      className="py-20 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-teal-500 dark:text-teal-400"
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div key={index} variants={fadeUp}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
