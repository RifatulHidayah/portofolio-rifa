import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function CertificateCard({ certificate, onView }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden hover:border-red-500"
    >
      <img
        src={certificate.image}
        alt={certificate.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">
          {certificate.title}
        </h3>

        <p className="text-blue-400 mt-2">
          {certificate.issuer}
        </p>

        <p className="text-slate-400 text-sm mt-1">
          {certificate.year}
        </p>

        <button
          onClick={() => onView(certificate)}
          className="inline-flex items-center gap-2 mt-5 text-red-500 hover:text-red-500 transition"
        >
          View Certificate
          <FaArrowUpRightFromSquare size={14} />
        </button>
      </div>
    </motion.div>
  );
}