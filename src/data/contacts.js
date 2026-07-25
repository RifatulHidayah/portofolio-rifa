import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

export const contacts = [
  {
    id: 1,
    icon: MdEmail,
    title: "Email",
    value: "hidayahrieva@gmail.com",
    link: "mailto:hidayahrieva@gmail.com",
  },

  {
    id: 2,
    icon: FaWhatsapp,
    title: "WhatsApp",
    value: "+62 822-1980-0195",
    link: "https://wa.me/6282219800195",
  },

  {
    id: 3,
    icon: FaLinkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/rif-atul-hidayah-63201a252",
    link: "https://www.linkedin.com/in/rif-atul-hidayah-63201a252/",
  },

  {
    id: 4,
    icon: FaGithub,
    title: "GitHub",
    value: "github.com/RifatulHidayah",
    link: "https://github.com/RifatulHidayah",
  },
];