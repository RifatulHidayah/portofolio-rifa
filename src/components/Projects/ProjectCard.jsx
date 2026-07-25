import { motion } from "framer-motion";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-red-500 duration-300"
    >
      {/* IMAGE */}

      {project.images.length > 1 ? (
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          className="h-75"
        >
          {project.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={project.title}
                className="w-full h-75 object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-75 object-cover"
        />
      )}

      {/* CONTENT */}

      <div className="p-6">
        <div className="flex justify-between items-center">
          <span className="text-red-500 text-sm">
            {project.category}
          </span>

          <span className="text-xs bg-red-500/20 text-red-500 px-3 py-1 rounded-full">
            {project.status}
          </span>
        </div>

        <h3 className="text-2xl font-bold mt-4">
          {project.title}
        </h3>

        <p className="text-slate-400 mt-4">
          {project.description}
        </p>

        {/* TECH */}

        <div className="flex flex-wrap gap-2 mt-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full bg-slate-800 text-red-500 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </motion.div>
  );
}