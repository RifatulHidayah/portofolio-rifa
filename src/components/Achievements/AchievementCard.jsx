import { motion } from "framer-motion";

export default function AchievementCard({ achievement }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-red-500 text-center"
    >
      <div className="text-5xl mb-5">
        {achievement.icon}
      </div>

      <h3 className="text-4xl font-bold text-red-400">
        {achievement.number}
      </h3>

      <h4 className="text-xl font-semibold mt-3">
        {achievement.title}
      </h4>

      <p className="text-slate-400 mt-4 leading-7">
        {achievement.description}
      </p>
    </motion.div>
  );
}