import { FaReact, FaAngular, FaVuejs, FaGit, FaDocker, FaAws } from 'react-icons/fa';
import { SiJava, SiPython, SiNodedotjs, SiPostgresql, SiMongodb, SiFirebase, SiTravisci } from 'react-icons/si';

export const Bio = {
  title: "Greetings, I am Abhishek Mishra",
  roles: [
    "App Developer",
    "Web Developer",
    "Problem Solving"
  ],
  description: "Recent graduate in Computer Science Engineering with experience in software development, particularly in web and app development. Passionate about coding and problem-solving, I have worked on various projects and participated in hackathons.",
  github: "https://github.com/abhi-mis",
  resume: "https://drive.google.com/file/d/1xyz1234567890/view", // Replace with your resume link
  linkedin: "https://www.linkedin.com/in/abhishek-mishra/",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React JS",
        image: <FaReact size={40} color="#61DAFB" />,
      },
      {
        name: "Angular",
        image: <FaAngular size={40} color="#DD0031" />,
      },
      {
        name: "Vue JS",
        image: <FaVuejs size={40} color="#4FC08D" />,
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Java",
        image: <SiJava size={40} color="#007396" />,
      },
      {
        name: "Python",
        image: <SiPython size={40} color="#306998" />,
      },
      {
        name: "Node JS",
        image: <SiNodedotjs size={40} color="#8CC84B" />,
      },
    ],
  },
  {
    title: "Database",
    skills: [
      {
        name: "PostgreSQL",
        image: <SiPostgresql size={40} color="#336791" />,
      },
      {
        name: "MongoDB",
        image: <SiMongodb size={40} color="#47A248" />,
      },
      {
        name: "Firebase",
        image: <SiFirebase size={40} color="#FFCA28" />,
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      {
        name: "Git",
        image: <FaGit size={40} color="#F05032" />,
      },
      {
        name: "Docker",
        image: <FaDocker size={40} color="#2496ED" />,
      },
      {
        name: "AWS",
        image: <FaAws size={40} color="#FF9900" />,
      },
      {
        name: "Travis CI",
        image: <SiTravisci size={40} color="#3EAAAF" />,
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "BlockFI",
    date: "June 2024 - Present",
    description: "Designed and developed features for a Decentralized Finance platform leveraging blockchain technology. Facilitated peer-to-peer financial services like lending, borrowing, and trading through smart contracts written in Solidity. Utilized stablecoins to minimize market volatility and enhance user experience within the DeFi ecosystem.",
    image: "", // Replace with the link to the project image
    tags: [
      "NextJS",
      "Tailwind CSS",
      "EthersJS",
      "NodeJS",
      "Solidity",
      "Metamask"
    ],
    category: "web",
    github: "https://github.com/abhi-mis/BlockFI",
    webapp: "https://blockfi.example.com", // Replace with the link to the live project or demo
  },
  {
    id: 2,
    title: "Pix-Mender",
    date: "February 2024",
    description: "Developed a web application using ReactJS, Express JS, Node JS, JavaScript, CSS, and Firebase that streamlines the process of uploading IDs, photos, and signatures to admission portals. Implemented a user-friendly interface where users can upload their documents all in one place. The application automatically categorizes and stores these documents in a Firebase database, organizing them into separate folders for photos, signatures, and ID documents.",
    image: "https://example.com/pix-mender-image.png", // Replace with the link to the project image
    tags: [
      "ReactJS",
      "Express JS",
      "Node JS",
      "JavaScript",
      "CSS",
      "Firebase"
    ],
    category: "web",
    github: "https://github.com/abhi-mis/PixMender",
    webapp: "https://pix-mender.example.com", // Replace with the link to the live project or demo
  },
  // Add more projects following the same structure
];
