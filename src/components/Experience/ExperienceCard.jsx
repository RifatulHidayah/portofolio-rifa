import { motion } from "framer-motion";

export default function ExperienceCard({ experience }) {

    const Icon = experience.icon;

    return (

        <motion.div

            initial={{opacity:0,x:-60}}

            whileInView={{opacity:1,x:0}}

            viewport={{once:true}}

            transition={{duration:.7}}

            className="relative bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-red-500 hover:-translate-y-2 transition-all duration-300 shadow-lg"

        >

            {/* Year */}

            <span className="text-red-500 font-semibold">

                {experience.year}

            </span>

            {/* Header */}

            <div className="flex items-center gap-4 mt-4">

                <div className="w-14 h-14 rounded-xl bg-red-500 flex items-center justify-center text-2xl">

                    <Icon />

                </div>

                <div>

                    <h3 className="text-2xl font-bold">

                        {experience.title}

                    </h3>

                    <p className="text-slate-400">

                        {experience.company}

                    </p>

                </div>

            </div>

            {/* Type */}

            <span className="inline-block mt-4 px-4 py-1 rounded-full bg-red-500/20 text-red-500 text-sm">

                {experience.type}

            </span>

            {/* Description */}

            <ul className="mt-6 space-y-3">

                {experience.description.map((item,index)=>(

                    <li key={index} className="flex text-slate-300">

                        <span className="text-red-500 mr-3">

                            •

                        </span>

                        {item}

                    </li>

                ))}

            </ul>

            {/* Skills */}

            <div className="flex flex-wrap gap-3 mt-8">

                {experience.skills.map((skill,index)=>(

                    <span

                        key={index}

                        className="px-4 py-2 rounded-full bg-slate-800 text-red-500 border border-slate-600 text-sm"

                    >

                        {skill}

                    </span>

                ))}

            </div>

        </motion.div>

    );

}