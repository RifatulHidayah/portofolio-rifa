import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { skillCategories } from "../../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold">
            Technical <span className="text-red-500">Skills</span>
          </h2>

          <p className="text-slate-400 mt-5 text-lg">
            A collection of technical skills, tools, and technologies gained through
            academic projects, internships, and hands-on experience
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <SkillCard
              key={category.id}
              category={category}
            />
          ))}
        </div>

      </div>
    </section>
  );
}