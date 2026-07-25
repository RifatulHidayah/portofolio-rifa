import { motion } from "framer-motion";

export default function SkillCard({ category }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-slate-900 border border-slate-700 hover:border-red-500 rounded-2xl p-6"
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl">
          {category.icon}
        </span>

        <h3 className="text-2xl font-semibold text-white">
          {category.title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill, index) => (
          <span
            key={index}
            className="bg-slate-800 text-red-500 px-4 py-2 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}