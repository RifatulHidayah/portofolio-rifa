import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaLaptopCode, FaCertificate } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity:0,y:30 }}
          whileInView={{ opacity:1,y:0 }}
          transition={{ duration:.6 }}
          viewport={{ once:true }}
          className="text-center mb-16"
        >

          <h2 className="text-5xl font-bold">
            About <span className="text-red-500">Me</span>
          </h2>

          <p className="text-slate-400 mt-5">
            Get to know me better.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT */}

          <motion.div
            initial={{ opacity:0,x:-50 }}
            whileInView={{ opacity:1,x:0 }}
            transition={{ duration:.7 }}
            viewport={{ once:true }}
          >

            <p className="text-slate-300 leading-9 text-lg">
              I am a graduate of Informatics Engineering from Telkom University
              with experience in processing and analysing 99.000+ records from 
              the Susenas dataset to develop machine learning classification models 
              using Random Forest and SVM, and front-end web development through 
              internship project.
            </p>

            <p className="text-slate-300 leading-9 text-lg mt-6">
              Demonstrated leadership as a Project Manager in a web development project
              and strong ability to collaborate in multidisciplinary teams. 
              Proficient in Python, SQL, data preprocessing, data visualization, 
              and data-driven problem solving.
            </p>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity:0,x:50 }}
            whileInView={{ opacity:1,x:0 }}
            transition={{ duration:.7 }}
            viewport={{ once:true }}
            className="grid grid-cols-2 gap-6"
          >

            <div className="bg-slate-900 rounded-2xl p-7 border border-slate-800 hover:border-red-500 transition">

              <FaGraduationCap className="text-3xl text-red-500 mb-4"/>

              <h4 className="font-semibold text-xl">
                Education
              </h4>

              <p className="text-slate-400 mt-2">
                Bachelor Informatics
                Telkom University
              </p>

            </div>

            <div className="bg-slate-900 rounded-2xl p-7 border border-slate-800 hover:border-red-500 transition">

              <FaBriefcase className="text-3xl text-red-500 mb-4"/>

              <h4 className="font-semibold text-xl">
                Experience
              </h4>

              <p className="text-slate-400 mt-2">
                Internship Experience
              </p>

            </div>

            <div className="bg-slate-900 rounded-2xl p-7 border border-slate-800 hover:border-red-500 transition">

              <FaLaptopCode className="text-3xl text-red-500 mb-4"/>

              <h4 className="font-semibold text-xl">
                Projects
              </h4>

              <p className="text-slate-400 mt-2">
                5+ Projects
              </p>

            </div>

            <div className="bg-slate-900 rounded-2xl p-7 border border-slate-800 hover:border-red-500 transition">

              <FaCertificate className="text-3xl text-red-500 mb-4"/>

              <h4 className="font-semibold text-xl">
                Certificates
              </h4>

              <p className="text-slate-400 mt-2">
                5 Certificates
              </p>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}