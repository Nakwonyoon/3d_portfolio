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
  nextkernel,
  dalle,
  travel,
  redux,
  urbanista,
  memories,
  mui,
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
    name: "Git",
    icon: git,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Mui",
    icon: mui,
  },
];

const experiences = [
  {
    title: "IT Support",
    company_name: "NextKernel Inc.",
    icon: nextkernel,
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
    icon: urbanista,
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
    icon: urbanista,
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
        name: "express",
        color: "yellow-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "cloudinary",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "openai api",
        color: "green-text-gradient",
      },
    ],
    image: dalle,
    source_code_link: "https://github.com/Nakwonyoon/dalle_generator",
  },
  {
    name: "Responsive UI/UX Design",
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
  {
    name: "Memories...",
    description:
      "My Memories app, built with React, Express, MongoDB, and MUI, offers a platform for users to create, update, delete, and like memories. Leveraging Redux for state management, it ensures a smooth user experience. With a focus on simplicity and efficiency, this app combines modern design with robust functionality, allowing users to easily document and share their life's moments. It's an ideal solution for personal memory curation and interaction.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "mongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "purple-text-gradient",
      },
    ],
    image: memories,
    source_code_link: "https://github.com/Nakwonyoon/memories_app",
  },
];

export { services, technologies, experiences, testimonials, projects };
