

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
  linkedin: "https://www.linkedin.com/in/abhiconnect/",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React JS",
        image: "./images/react.png", // Your local image path
      },
      {
        name: "Angular",
        image: "./images/angular.png", // Replace with your Angular local image
      },
      {
        name: "Vue JS",
        image: "./images/vue.png", // Replace with your Vue.js local image
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Java",
        image: "./images/java.png", // Replace with your Java local image
      },
      {
        name: "Python",
        image: "./images/python.png", // Replace with your Python local image
      },
      {
        name: "Node JS",
        image: "./images/node.png", // Replace with your Node.js local image
      },
    ],
  },
  {
    title: "Database",
    skills: [
      {
        name: "PostgreSQL",
        image: "./images/postgresql.png", // Replace with your PostgreSQL local image
      },
      {
        name: "MongoDB",
        image: "./images/mongodb.png", // Replace with your MongoDB local image
      },
      {
        name: "Firebase",
        image: "./images/firebase.png", // Replace with your Firebase local image
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      {
        name: "Git",
        image: "./images/git.png", // Replace with your Git local image
      },
      {
        name: "Docker",
        image: "./images/docker.png", // Replace with your Docker local image
      },
      {
        name: "AWS",
        image: "./images/aws.png", // Replace with your AWS local image
      },
      {
        name: "Travis CI",
        image: "./images/travisci.png", // Replace with your Travis CI local image
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
