import html from "./assets/icons/html.png";
import css from "./assets/icons/css.png";
import javascript from "./assets/icons/javascript.jpeg";
import typescript from "./assets/icons/typescript.png";
import react from "./assets/icons/react.png";
import redux from "./assets/icons/react-redux.png";
import native from "./assets/icons/react-native.png";
import tailwind from "./assets/icons/tailwind.png";
import git from "./assets/icons/git.png";

import ecommerce from "./assets/img/ecommerce.jpg";
import portfolio from "./assets/img/portfolio.jpg";
import hacker_news from "./assets/img/hacker-news.jpg";
import backroads from "./assets/img/backroads.jpg";
import grocery from "./assets/img/grocery.jpg";
import random_user from "./assets/img/random.jpg";
import cocktails from "./assets/img/cocktails.jpg";
import wikipedia from "./assets/img/wikipedia.jpg";
import expense_tracker from "./assets/img/expense-tracker.jpg";
import menu from "./assets/img/menu.jpg";
import quize from "./assets/img/quize.jpg";
import reviews from "./assets/img/reviews.jpg";
import paginate from "./assets/img/paginate.jpg";

export const projects = [
  {
    id: 1,
    title: "Comfy E-commerce",
    description: "A modern, fully responsive e-commerce website with a user-friendly interface.",
    image: ecommerce,
    demo: "https://tapu-parida2004.github.io/comfy-ecommerce/",
    code: "https://github.com/Tapu-Parida2004/comfy-ecommerce.git",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A personal portfolio showcasing skills and projects using React and Tailwind CSS.",
    image: portfolio,
    demo: "https://tapu-parida2004.github.io/portfolio/",
    code: "https://github.com/Tapu-Parida2004/portfolio.git",
    technologies: ["React", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Hacker News",
    description: "A Hacker News app with search and pagination functionality.",
    image: hacker_news,
    demo: "https://tapu-parida2004.github.io/hacker-news-react/",
    code: "https://github.com/Tapu-Parida2004/hacker-news-react.git",
    technologies: ["React"],
  },
  {
    id: 4,
    title: "Backroads",
    description: "A task management application to organize and track tasks efficiently.",
    image: backroads,
    demo: "https://tapu-parida2004.github.io/backroads-react-app/",
    code: "https://github.com/Tapu-Parida2004/backroads-react-app.git",
    technologies: ["React"],
  },
  {
    id: 5,
    title: "Grocery-bud App",
    description: "A grocery list app with features to add, edit, and delete items.",
    image: grocery,
    demo: "https://tapu-parida2004.github.io/grocery-bud/",
    code: "https://github.com/Tapu-Parida2004/grocery-bud.git",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 6,
    title: "Random User",
    description: "A random user generator showcasing user profiles with details like name, age, and address.",
    image: random_user,
    demo: "https://tapu-parida2004.github.io/random-user/",
    code: "https://github.com/Tapu-Parida2004/random-user.git",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 7,
    title: "Cocktails",
    description: "A cocktail recipe app for browsing and sharing cocktail recipes.",
    image: cocktails,
    demo: "https://tapu-parida2004.github.io/cocktails/",
    code: "https://github.com/Tapu-Parida2004/cocktails.git",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 8,
    title: "Wikipedia",
    description: "A search app fetching Wikipedia results based on user input.",
    image: wikipedia,
    demo: "https://tapu-parida2004.github.io/wikipedia/",
    code: "https://github.com/Tapu-Parida2004/wikipedia.git",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 9,
    title: "Expense Tracker",
    description: "A personal expense tracking app to manage and analyze spending.",
    image: expense_tracker,
    demo: "https://tapu-parida2004.github.io/expense-tracker/",
    code: "https://github.com/Tapu-Parida2004/expense-tracker.git",
    technologies: ["React"],
  },
  {
    id: 10,
    title: "Menu App",
    description: "A restaurant menu app that allows filtering dishes by category.",
    image: menu,
    demo: "https://tapu-parida2004.github.io/menu-app/",
    code: "https://github.com/Tapu-Parida2004/menu-app.git",
    technologies: ["React"],
  },
  {
    id: 11,
    title: "Quize App",
    description: "An interactive quiz app featuring multiple-choice questions.",
    image: quize,
    demo: "https://tapu-parida2004.github.io/quize/",
    code: "https://github.com/Tapu-Parida2004/quize.git",
    technologies: ["React"],
  },
  {
    id: 12,
    title: "Reviews",
    description: "A review app with the ability to navigate through user reviews.",
    image: reviews,
    demo: "https://tapu-parida2004.github.io/reviews/",
    code: "https://github.com/Tapu-Parida2004/reviews.git",
    technologies: ["React"],
  },
  {
    id: 13,
    title: "Paginate Website",
    description: "A website that implements seamless pagination for browsing large sets of content.",
    image: paginate,
    demo: "https://tapu-parida2004.github.io/paginate/",
    code: "https://github.com/Tapu-Parida2004/paginate.git",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];


export const skills = [
  { id: 1, name: "HTML", level: "Expert", percentage: 95, icon: html },
  { id: 2, name: "CSS", level: "Expert", percentage: 90, icon: css },
  {
    id: 3,
    name: "JavaScript",
    level: "Expert",
    percentage: 85,
    icon: javascript,
  },
  {
    id: 4,
    name: "TypeScript",
    level: "Intermediate",
    percentage: 75,
    icon: typescript,
  },
  { id: 5, name: "React.js", level: "Expert", percentage: 83, icon: react },
  {
    id: 6,
    name: "Redux.js",
    level: "Intermediate",
    percentage: 72,
    icon: redux,
  },
  {
    id: 7,
    name: "React Native",
    level: "Expert",
    percentage: 78,
    icon: native,
  },
  {
    id: 8,
    name: "Tailwind CSS",
    level: "Expert",
    percentage: 83,
    icon: tailwind,
  },
  { id: 9, name: "Git", level: "Beginner", percentage: 63, icon: git },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Brahmapur University",
    state: "Odisha",
    year: "2021 - 2024",
    grade: "8.5 CGPA",
    description:
      "During my academic journey, I developed a strong foundation in computer science concepts, including data structures, algorithms, and web development.",
  },
  {
    id: 2,
    degree: "Master of Computer Applications (MCA)",
    institution: "Biju Patnaik University of Technology (BPUT)",
    state: "Odisha",
    year: "2024 - present",
    completion: "Expected Completion: [Aug, 2026]",
    description:
      "Continuing my academic journey to further deepen my expertise in software development and advanced programming concepts.",
  },
];
