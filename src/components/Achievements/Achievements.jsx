import { motion } from "framer-motion";
import AchievementCard from "./AchievementCard";
import { achievements } from "../../data/achievements";

export default function Achievements() {
  return (
    <section
      id="achievements"
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
            Achievements &
            <span className="text-red-500">
              {" "}Leadership
            </span>
          </h2>

          <p className="text-slate-400 mt-5 text-lg max-w-3xl mx-auto">
            A summary of professional experience, leadership, technical
            achievements, and continuous learning throughout my academic
            and career journey.
          </p>

        </motion.div>

        {/* Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {achievements.map((achievement) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
            />
          ))}

        </div>

      </div>
    </section>
  );
}