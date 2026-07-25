import { useState } from "react";
import { motion } from "framer-motion";
import CertificateCard from "./CertificateCard";
import { certificates } from "../../data/certificates";

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section
      id="certificates"
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
            Certifications
          </h2>

          <p className="text-slate-400 mt-5 text-lg">
           A collection of certifications demonstrating my commitment to continuous
           learning in data analytics, programming, and machine learning
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              onView={setSelectedCertificate}
            />
          ))}
        </div>

      </div>

      {/* ================= MODAL ================= */}

      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
          onClick={() => setSelectedCertificate(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-red-400 transition"
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              className="w-full max-h-[85vh] object-contain rounded-xl"
            />
          </motion.div>
        </div>
      )}

    </section>
  );
}