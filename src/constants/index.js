import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  Mine_Wine,
  Bhatt_Estate,
} from "../assets";

import java from "../assets/tech/java.png";
import cpp from "../assets/tech/cpp.png";
import bluemercury from "../assets/bluemercury.png";

import unacademy from "../assets/company/unacademy.png";
import masai from "../assets/company/masai.png";
import monocept from "../assets/company/monocept.png";

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
    id: "skill",
    title: "Skills",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    fileName: "Manish.pdf",
    originName: "Manish.pdf",
    fileUrl: "../assets/Manish.pdf",
    title: "Resume",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "React Native",
    icon: reactjs,
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
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Java",
    icon: java,
  },
];

const experiences = [
  {
    title: "Tata  Data Visualization",
    company_name: "Tata ",
    icon: unacademy,
    iconBg: "#383E56",
    date: "Aug 2024",
    points: [
      {
        title: "Tata Data Visualization",
        value:
          "Designed meaningful data visualizations to support decision-making for Tata Consultancy Services.",
      },
      {
        title: "Maintaining data and analysis ",
        value:
          " Analysis of complex datasets to identify trends, patterns, and insights that inform business strategies.",
      },
      {
        title: "visuals for data analysis",
        value:
          " Created interactive dashboards and reports using tools like Tableau and Power BI to present data insights effectively.",
      },
    ],
  },
  {
    title: "Salesforce Development with Agentblazer",
    company_name: "Salesforce ",
    icon: masai,
    iconBg: "#E6DEDD",
    date: "Nov 2025",
    points: [
      {
        title: " Lightning Web Components (LWC) ",
        value:
          "Developed custom Lightning Web Components to enhance the user interface and functionality of Salesforce applications.",
      },
      {
        title: "Apex Programming:",
        value:
          "Wrote Apex classes and triggers to implement complex business logic and automate processes within the Salesforce platform.",
      },
      {
        title: "Salesforce Integration:",
        value:
          "Integrated Salesforce with external systems using REST and SOAP APIs to facilitate data exchange and improve workflow efficiency.",
      },
    ],
  },
  {
    title: "Software Engineer intern ",
    company_name: "JP Morgan Chase & Co",
    icon: monocept,
    iconBg: "#383E56",
    date: " june 2025",
    points: [
      
      {
        title: "UI/UX Quality Assurance:",
        value:
          "Ensured that the user interfaces and user experience of the software applications developed by me and the team met the expectations.",
      },
      {
        title: "Test Driven Development:",
        value:
          "Wrote unit tests and integration tests using Jest to ensure code quality and functionality.",
      },
      {
        title: "Rapid Technology Adaptation:",
        value:
          "Quickly adapted to new technologies, learning React Native to contribute to ongoing projects.",
      },
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  
  {
    name: "cpu Scheduling Algorithm Visualizer",
    description:
      "A web application that visually demonstrates various CPU scheduling algorithms, allowing users to understand how different algorithms manage process execution and optimize CPU utilization.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: Mine_Wine,
    source_code_link: "https://github.com/Cosmic88167/cpu_schedular",
     live_hosted_link: "https://schedulor.netlify.app/",
  },
  {
    name: " Attendance Management System using Face Recognition",
    description:
      "A web application that uses face recognition technology to manage attendance, allowing users to mark their presence by simply looking at the camera.",
   tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
      {
        name: "Streamlit",
        color: "pink-text-gradient",
      },
    ],
    image: Bhatt_Estate,
    source_code_link:
      "https://github.com/Cosmic88167/attendance-management-system-using-face-recognition-",
    // live_hosted_link: "https://bluemercury-clone-masai.netlify.app/",
  },
  
  {
    name: " Image Caption Generator using CNN and LSTM",
    description:
      "A web application that generates captions for images using convolutional neural networks and long short-term memory networks.",
    tags: [
      {
        name: "CNN",
        color: "blue-text-gradient",
      },
      {
        name: "python ",
        color: "green-text-gradient",
      },
      {
        name: "LSTM",
        color: "pink-text-gradient",
      },
    ],
    image: bluemercury,
    source_code_link: "https://github.com/Cosmic88167/image_caption_generator_using_CNN_LSTM",
     live_hosted_link: "https://huggingface.co/spaces/cosmo88167/image-caption-generator",
  },
];

export { services, technologies, experiences, testimonials, projects };
