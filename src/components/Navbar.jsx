import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scroll
          ? "bg-slate-900/90 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >

      <div className="max-w-7xl mx-auto flex justify-between items-cemter py-5 px-10">

        <div className="text-1xl font-bold tracking-[0.25em] text-red-500">
          Rifa.<span className="text-slate-200">co</span>
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-2xl"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <AnimatePresence>
      {menuOpen && (
        <>
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setMenuOpen(false)}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
        />

        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 h-screen w-72 bg-slate-950 z-50 md:hidden"
        >
          <ul className="flex flex-col items-center gap-6 py-6 text-white">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="experience"
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
              >
                Experiences
              </Link>
            </li>

            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
              >
                Skills
              </Link>
            </li>

            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
          </motion.div>
        </>
      )}
      </AnimatePresence>

        <ul className="hidden md:flex gap-8 text-white font-medium">

          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-red-500 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-red-500 transition"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-red-500 transition"
            >
              Experience
            </Link>
          </li>

          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-red-500 transition"
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-red-500 transition"
            >
              Skills
            </Link>
          </li>

          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-red-500 transition"
            >
              Contact
            </Link>
          </li>

        </ul>

      </div>
    </nav>
  );
}