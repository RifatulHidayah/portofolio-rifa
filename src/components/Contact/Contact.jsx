import { motion } from "framer-motion";
import ContactCard from "./ContactCard";
import { contacts } from "../../data/contacts";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold">
            Get In
            <span className="text-red-500"> Touch</span>
          </h2>

          <p className="text-slate-400 mt-5 text-lg max-w-2xl mx-auto leading-8">
            I'm open to opportunities in data analytics,
            business intelligence, front-end development,
            and collaborative technology projects. Feel free to reach out
            for discussions, networking, or potential collaborations.
          </p>

        </motion.div>

        {/* Contact Cards */}

        <div className="grid md:grid-cols-2 gap-8">

          {contacts.map((contact) => (
            <ContactCard
              key={contact.id}
              contact={contact}
            />
          ))}

        </div>

      </div>
    </section>
  );
}