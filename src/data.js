import html from "./assets/icons/html.png";
import css from "./assets/icons/css.png";
import javascript from "./assets/icons/javascript.jpeg";
import typescript from "./assets/icons/typescript.png";
import react from "./assets/icons/react.png";
import redux from "./assets/icons/react-redux.png";
import native from "./assets/icons/react-native.png";
import tailwind from "./assets/icons/tailwind.png";
import git from "./assets/icons/git.png";

import courseAppImage from "./assets/img/courseAppImage.jpg";
import inventoryImage from "./assets/img/inventoryImage.jpg";
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
    title: "Course App",
    description:
      "A web application for showcasing a list of courses with details, a student dashboard, and real-time API connections. Users can explore courses, track progress, and access updated data dynamically.",
    image: courseAppImage,
    demo: "https://tapu-parida2004.github.io/course-app/",
    code: "https://github.com/Tapu-Parida2004/course-app.git",
    technologies: ["React/Redux", "Tailwind CSS", "Firebase"],
  },
  {
    id: 2,
    title: "Comfy E-commerce",
    description:
      "A modern, fully responsive e-commerce website with a user-friendly interface. Users can browse products, view details, and experience smooth navigation across devices for an optimized shopping experience.",
    image: ecommerce,
    demo: "https://tapu-parida2004.github.io/comfy-ecommerce/",
    code: "https://github.com/Tapu-Parida2004/comfy-ecommerce.git",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing skills and projects using React and Tailwind CSS. Users can explore past work, detailed project descriptions, and navigate a well-structured, visually appealing website.",
    image: portfolio,
    demo: "https://tapu-parida2004.github.io/portfolio/",
    code: "https://github.com/Tapu-Parida2004/portfolio.git",
    technologies: ["React", "Tailwind CSS"],
  },
  {
    id: 4,
    title: "Dynamic Inventory Management",
    description:
      "This is an inventory management application built with React. This app allows users to manage items, add new items, edit existing items, and delete items. The inventory can also be filtered by category and sorted by quantity.",
    image: inventoryImage,
    demo: "https://tapu-parida2004.github.io/inventory-management/",
    code: "https://github.com/Tapu-Parida2004/inventory-management.git",
    technologies: ["React"],
  },
  {
    id: 5,
    title: "Hacker News",
    description: `The React app provides a seamless experience for searching articles, with a user-friendly interface. It includes a search function that filters results based on keywords. Pagination is integrated with "Next" and "Previous" buttons to navigate through search results. `,
    image: hacker_news,
    demo: "https://tapu-parida2004.github.io/hacker-news-react/",
    code: "https://github.com/Tapu-Parida2004/hacker-news-react.git",
    technologies: ["React"],
  },
  {
    id: 6,
    title: "Backroads",
    description: `"BackRoads App" is a React-based travel website with a stunning hero section featuring a scenic mountain background. It includes a modern navbar with links to Home, About, Services, and Tours, along with social media icons. A call-to-action button invites users to explore available tours.`,
    image: backroads,
    demo: "https://tapu-parida2004.github.io/backroads-react-app/",
    code: "https://github.com/Tapu-Parida2004/backroads-react-app.git",
    technologies: ["React"],
  },
  {
    id: 7,
    title: "Grocery-bud App",
    description:
      "A grocery list app with features to add, edit, and delete items. Users can easily manage their shopping lists by adding new items, modifying existing ones, and removing unnecessary entries for a simple and organized experience.",
    image: grocery,
    demo: "https://tapu-parida2004.github.io/grocery-bud/",
    code: "https://github.com/Tapu-Parida2004/grocery-bud.git",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 8,
    title: "Random User",
    description:
      "A random user generator showcasing user profiles with details like name, age, and address. Users can generate different profiles instantly, exploring various details in an interactive and simple interface.",
    image: random_user,
    demo: "https://tapu-parida2004.github.io/random-user/",
    code: "https://github.com/Tapu-Parida2004/random-user.git",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 9,
    title: "Cocktails",
    description: `This app allows you to search for your favorite cocktail using the Cocktail API. It provides a list of cocktail names, such as "Ace", "ABC", "Melya", "imosa", and more, to explore detailed recipes and ingredients.`,
    image: cocktails,
    demo: "https://tapu-parida2004.github.io/cocktails/",
    code: "https://github.com/Tapu-Parida2004/cocktails.git",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 10,
    title: "Wikipedia",
    description:
      "A search app fetching Wikipedia results based on user input. Users can enter queries, retrieve real-time data from the API, browse summaries, and access full articles, making information retrieval quick and efficient.",
    image: wikipedia,
    demo: "https://tapu-parida2004.github.io/wikipedia/",
    code: "https://github.com/Tapu-Parida2004/wikipedia.git",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 11,
    title: "Expense Tracker",
    description:
      "A personal expense tracking app to manage and analyze spending. Users can add income and expenses, view total balance, and categorize transactions. Helps track financial habits and maintain budget effectively.",
    image: expense_tracker,
    demo: "https://tapu-parida2004.github.io/expense-tracker/",
    code: "https://github.com/Tapu-Parida2004/expense-tracker.git",
    technologies: ["React"],
  },
  {
    id: 12,
    title: "Menu App",
    description:
      "A React-based restaurant menu app that lets users filter dishes by category, such as breakfast, lunch, and shakes. It features a visually appealing UI with images, descriptions, and prices for each dish.",
    image: menu,
    demo: "https://tapu-parida2004.github.io/menu-app/",
    code: "https://github.com/Tapu-Parida2004/menu-app.git",
    technologies: ["React"],
  },
  {
    id: 13,
    title: "Quize App",
    description: `The quiz app provides a customizable experience where users can choose the number of questions (10), select the category (Sports), and set the difficulty level to "Easy." After configuring these preferences, users can start the quiz and challenge their knowledge on sports-related topics,answering questions to test`,
    image: quize,
    demo: "https://tapu-parida2004.github.io/quize/",
    code: "https://github.com/Tapu-Parida2004/quize.git",
    technologies: ["React"],
  },
  {
    id: 14,
    title: "Reviews",
    description:
      "This is a 'Reviews App' that displays user testimonials. It includes navigation buttons (Next, Prev) to browse through reviews and a 'Surprise Me' button that randomly selects a review. The app is built with React and styled for a clean UI, making it an engaging way to showcase feedback dynamically.",
    image: reviews,
    demo: "https://tapu-parida2004.github.io/reviews/",
    code: "https://github.com/Tapu-Parida2004/reviews.git",
    technologies: ["React"],
  },
  {
    id: 15,
    title: "Paginate Website",
    description:
      "This is a Pagination App that displays a list of users with profile links. It allows navigation through multiple pages using Prev and Next buttons. Each page contains a fixed number of users, ensuring smooth browsing. Built with JavaScript, it manages data dynamically, fetching and displaying user details efficiently.",
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
