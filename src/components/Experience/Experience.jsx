import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "../../data/experiences";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl font-bold">
            Work <span className="text-red-500">Experience</span>
          </h2>

          <p className="text-slate-400 mt-5 text-lg">
            Experiences that shaped my skills, knowledge, and professional growth.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative">

          {/* Vertical Line */}

          <div className="absolute left-7 top-0 bottom-0 w-[3px] bg-slate-700"></div>

          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="relative pl-20 mb-14"
            >
              {/* Timeline Dot */}

              <div className="absolute left-0 top-10">

                <div className="w-14 h-14 rounded-full bg-bred-500 border-4 border-slate-950 shadow-lg shadow-red-500/40"></div>

              </div>

              {/* Card */}

              <ExperienceCard experience={experience} />

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}