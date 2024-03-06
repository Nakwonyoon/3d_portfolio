import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  cosmaxnbt,
  nextkernel,
  dalle,
  travel,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Front-end Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "IT Specialist",
    company_name: "Cosmax NBT",
    icon: cosmaxnbt,
    iconBg: "#E6DEDD",
    date: "March 2021 - September 2021",
    points: [
      "Developed, tracked, and reported financial budgets for IT assets, including weekly and monthly expense reports based on business objectives and changing operations, ensuring that expenses were aligned with the company's financial goals.",
      "Ensured network stability across global offices by collaborating with IT teams in Korea, leveraging Linux for server maintenance to minimize downtime.",
      "Simulated and normalized complex scenarios to understand and implement while setting target costs for the company, resulting in optimized financial planning and cost savings.",
    ],
  },
  {
    title: "Web Developer_Intern",
    company_name: "Y.H Texpert Corporation",
    icon: nextkernel,
    iconBg: "#E6DEDD",
    date: "September 2021 - March 2022",
    points: [
      "Developing and maintaining web applications using javascript and other related technologies.",

      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality e-commerce website.",

      "Implementing responsive design and ensuring cross-browser compatibility.",

      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "ERP Modules & Ecommerce Supervisor  ",
    company_name: "Y.H Texpert Corporation",
    icon: nextkernel,
    iconBg: "#383E56",
    date: "March 2022 - November 2023",
    points: [
      "Liaise extensively with various departments to understand their requirements and incorporate them into the Odoo ERP system for enhanced user convenience",

      "Collaborate with external vendors to develop ERP modules, successfully implementing major projects that significantly enhanced system functionality.",

      "Implementing responsive design and ensuring user experience",

      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];
const testimonials = [
  {

  }

]
const projects = [
  {
    name: "Artify",
    description:
      "A powerful and innovative application that leverages the capabilities of OpenAI to generate images based on user inputs, closely emulating the functionality of renowned AI image generation tools like MidJourney and DALL·E. Built with the MERN stack (MongoDB, Express.js, React, Node.js) and styled with TailwindCSS, this app offers a sleek user interface and robust backend to process and render AI-generated images",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "OpenAI API",
        color: "green-text-gradient",
      },
    ],
    image: dalle,
    source_code_link: "https://github.com/Nakwonyoon/dalle_generator",
  },
  {
    name: "Travel Responsive UI/UX Design",
    description:
      "Modern web design in the travel sector. While this version of the website doesn't include functional elements like booking or search features, it provides a comprehensive look at how a travel website could adjust its layout and content to fit various screen sizes without compromising on user experience or design quality.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: travel,
    source_code_link: "https://github.com/Nakwonyoon/travel_app",
  },
];

export { services, technologies, experiences, testimonials, projects };