import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import profile from "../assets/images/rifa1.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center"
    >
      <div className="max-w-10xl mx-auto px-10 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight mt-30">
            Rif'atul
            <br />
            Hidayah
          </h2>

          <div className="text-2xl lg:text-3xl font-semibold text-red-500 mt-6 h-12">
            <TypeAnimation
              sequence={[
                "Data Analytics",
                2000,
                "Bussiness Intelligence",
                2000,
                "Machine Learning",
                2000,
                "Front-End Development",
                2000,
              ]}
              repeat={Infinity}
            />
          </div>

          <p className="text-slate-300 mt-8 max-w-xl leading-8">
            Passionate about data analytics, machine learning, and front-end development. 
            Experienced in working with data, developing predictive models, and building responsive web applications. 
            I enjoy solving problems through data-driven approaches while creating interfaces 
            that are both functional and user-friendly.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <div className="relative group">
              <button
                className="bg-red-700 hover:bg-slate-500 px-6 py-3 rounded-xl flex items-center gap-2 transition"
              >
                <FaDownload />
                Download CV
              </button>

                <div className="absolute top-full left-0 hidden group-hover:block bg-white rounded-xl shadow-lg overflow-hidden pt-2">
                  <a
                    href={`${import.meta.env.BASE_URL}public\cv\CV data ML.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 hover:bg-slate-100 text-black whitespace-nowrap"
                  >
                    Data & BI Analyst / Data Scientist CV
                  </a>

                  <a
                    href={`${import.meta.env.BASE_URL}public\cv\CV developer.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 hover:bg-slate-100 text-black whitespace-nowrap"
                  >
                    Front-End / System Analyst CV
                  </a>
                </div>
            </div>
            <a
                href="#projects"
                className="border border-slate-500 hover:bg-red-700 px-6 py-3 rounded-xl transition"
            >
                View Projects
            </a>

          </div>

          <div className="flex gap-6 mt-10 text-3xl">

            <a
                href="https://github.com/RifatulHidayah"
                className="hover:text-blue-400 hover:scale-125 transition"
            >
                <FaGithub />
            </a>

            <a
                href="https://www.linkedin.com/in/rif-atul-hidayah-63201a252/"
                className="hover:text-blue-400 hover:scale-125 transition"
            >
                <FaLinkedin />
            </a>

            </div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={profile}
            alt="Rifa"
            className="relative z-10 w-85"
            style={{
            maskImage: `
              radial-gradient(
                ellipse at center,
                black 60%,
                transparent 80%
              )
            `,
            WebkitMaskImage: `
              radial-gradient(
                ellipse at center,
                black 60%,
                transparent 80%
              )
            `
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}