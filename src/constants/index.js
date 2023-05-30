import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  CodeRVA,
  OpenAI,
  Gear,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Ap Computer Science Student",
    icon: web,
  },
  {
    title: "Python Student",
    icon: mobile,
  },
  {
    title: "Artificial Intelligence Study",
    icon: backend,
  },
  {
    title: "The Future is bright?",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Ap Computer Science Student",
    company_name: "CodeRVA",
    icon: CodeRVA,
    iconBg: "#383E56",
    date: "August 2020 - June 2021",
    points: [
      "Studying and applying fundamental principles of computer science, algorithms, and data structures.",
      "Writing and debugging programs in Java to solve various computational problems.",
      "Participating in coding competitions and projects to enhance problem-solving skills.",
      "Collaborating with fellow students and instructors to develop software applications.",
      "Analyzing and optimizing algorithms for efficiency and performance.",
    ],
  },
  {
    title: "Python Student",
    company_name: "CodeRVA",
    icon: CodeRVA,
    iconBg: "#E6DEDD",
    date: "August 2021 - June 2022",
    points: [
      "Studying and applying fundamental principles of programming using Python.",
      "Writing Python programs to solve various computational problems and automate tasks.",
      "Exploring different Python libraries and frameworks for web development, data analysis, and scientific computing.",
      "Collaborating with fellow students and instructors to work on Python projects.",
      "Participating in coding challenges and competitions to enhance Python coding skills.",
    ],
  },
  {
    title: "Artificial Intelligence Study",
    company_name: "Free Roam",
    icon: OpenAI,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Studying various Artificial Intelligence concepts and algorithms, including object detection using YOLO (You Only Look Once).",
      "Exploring Google's COCO (Common Objects in Context) model set to understand and apply pre-trained models for image recognition tasks.",
      "Experimenting with Stable Diffusion, a technique for image generation and manipulation using deep learning.",
      "Applying AI tools and techniques to develop innovative solutions for competitions like the Imagine Cup Junior and Congressional App Challenge.",
      "Collaborating with team members to design and implement AI-powered applications, leveraging neural networks and machine learning algorithms.",
    ],
  },
  {
    title: "The Future is . . .?",
    company_name: " . . . ",
    icon: Gear,
    iconBg: "#E6DEDD",
    date: "Present - Onwards",
    points: [
      "Continuing to explore and advance knowledge in Artificial Intelligence, focusing on areas such as computer vision, natural language processing, and deep learning.",
      "Utilizing AI tools and frameworks, including YOLO, Google's COCO model set, Stable Diffusion, and other emerging technologies, to develop intelligent and innovative solutions.",
      "Collaborating with experts and researchers in the AI community to stay updated on the latest advancements and contribute to cutting-edge projects.",
      "Participating in AI competitions and challenges to showcase skills and gain recognition for AI-based projects, such as the Imagine Cup Junior and other prestigious events.",
      "Contributing to the development of AI-driven applications that have a positive impact on industries such as healthcare, finance, and education.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Nothing yet . . . ",
  },
  {
    testimonial:
      "Nothing yet . . . ",
  },
  {
    testimonial:
      "Nothing yet . . . ",
  },
];

const projects = [
  {
    name: "Sprint 1",
    description:
      "Sprint one was my data team experience, during this time I gathered data of potential festival goers and created user stories for other teams to use.",
    tags: [

    ],
    image: carrent,
    source_code_link: "https://docs.google.com/spreadsheets/d/1aXg5eKadgNw0ByIuY9c2c8p6mmNpUTBG1eTgKBBxkr8/edit?usp=sharing",
  },
  {
    name: "Sprint 2",
    description:
      "Sprint two was where I put my skills to work during the sprint I worked as a data team member. Using my knowledge of javaScript and a Python library called flask I brought are webapp to the next level.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://replit.com/@OwenSheffield/sprint-2-Zukify-Wrapped-flasked#main.py",
  },
  {
    name: "Sprint 3",
    description:
      "And lastly sprint 3 I worked as a Design team member. Use the user stories that we made at the start and other stories that data team made after to make a deisgn template for the app.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
