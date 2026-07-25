export const projects = [
  {
    id: 1,
    title: "Early Marriage Prediction using Random Forest & SVM",
    category: "Final Project",
    status: "Completed",

    images: [
        `${import.meta.env.BASE_URL}projects/early marriage/cf rf.png`,
        `${import.meta.env.BASE_URL}projects/early marriage/cf svm.png`,
        `${import.meta.env.BASE_URL}projects/early marriage/roc auc.png`,
    ],

    description:
      "Machine learning project comparing Random Forest and SVM for early marriage prediction using Susenas 2024 data.",

    technologies: [
      "Data Preprocessing",
      "EDA",
      "Machine Learning",
      "Model Evaluation",
      "Imbalanced Data Handling",
      "Python",
      "Pandas",
      "Scikit-learn",
      "Matplotlib"
    ],

  },

  {
    id: 2,
    title: "Hetero Space Catalog Website",
    category: "Web Application",
    status: "Completed",

    images: [
        `${import.meta.env.BASE_URL}projects/hetero space/hetero space.png`,
    ],

    description:
        "Developed and maintained a room information and booking website for Hetero Space Banyumas. Built room detail pages and integrated WhatsApp-based inquiries to streamline communication between visitors and administrators.",

    technologies: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
    ],

  },

  {
    id: 3,
    title: "Cekrekin.id",
    category: "Web Application",
    status: "Completed",

    images: [
        `${import.meta.env.BASE_URL}projects/cekrekin/home.png`,
        `${import.meta.env.BASE_URL}projects/cekrekin/cekrekin 1.png`,
    ],

    description:
        "Served as Project Manager and System Analyst in the development of a photo marketplace platform. Managed project requirements, designed business processes, created system documentation, and coordinated the implementation of payment and digital photo delivery features.",

    technologies: [
        "System Analysis",
        "Project Management",
        "Bussiness Process Modeling",
        "Software Testing",
    ],

  },

  {
    id: 4,
    title: "Clean Hub",
    category: "Mobile Application",
    status: "Completed",

    images: [
        `${import.meta.env.BASE_URL}projects/clean hub/clean hub.png`,
    ],

    description:
        "Developed the mobile user interface for a waste management application using Flutter. Implemented responsive screens, integrated user interactions, and collaborated with the team to deliver a seamless mobile experience.",

    technologies: [
        "Flutter",
        "Dart",
        "Mobile UI Development",
    ],

  },

  {
    id: 5,
    title: "Student Score Prediction",
    category: "Machine Learning Project",
    status: "Completed",

    images: [
        `${import.meta.env.BASE_URL}projects/student score/dibimbing 1.png`,
        `${import.meta.env.BASE_URL}projects/student score/dibimbing 2.png`,
        `${import.meta.env.BASE_URL}projects/student score/dibimbing 3.png`,
        `${import.meta.env.BASE_URL}projects/student score/dibimbing 4.png`,
    ],

    description:
        "Applied machine learning (Ranndom Forest, Decision Tree, Linear Regression) techniques to predict student scores using study hour data.",

    technologies: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "Data Visualization",
    ],

  },

  {
    id: 6,
    title: "Smoke and Fire Detection System",
    category: "Embedded System",
    status: "Completed",

    images: [
        `${import.meta.env.BASE_URL}projects/smoke & fire/iot.jpg`,
    ],

    description:
        "Designed and implemented an IoT-based smoke and fire detection system using MQ-2 and flame sensors, providing real-time alerts through LED indicators.",

    technologies: [
        "Arduino Uno",
        "Arduino IDE",
    ],

  },
];