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
  c,
  cpp,
  python,
  threejs,
  threejsmobile,
  logo_sk,

  codeforce,
  codechef,
  geeksforgeeks,
  leetcode,

  firstphoto

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
    title: " MERN Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Photographer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
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
    name: "Three JS",
    icon: threejs,
    mobileIcon: threejsmobile,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "c",
    icon: c,
  },
  {
    name: "c++",
    icon: cpp,
  },
  {
    name: "python",
    icon: python,
  },
];





const experiences = [
  {
    title: "Looking Forward to My First Industry Internship",
    company_name: "",
    icon: logo_sk,
    iconBg: "#383E56",
    date: "Present",
    points: [
      "While I haven’t had a formal internship yet, I’ve been actively working on real-world projects to strengthen my development skills. From building responsive UIs to developing full-stack applications using React, Node.js, and MongoDB — I’m preparing myself to contribute meaningfully to a team. I’m excited and open to internship opportunities where I can learn, grow, and create impactful solutions."
    ],
  },
  // {
  //   title: "r",
  //   company_name: "shubham company",
  //   icon: logo_sk,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [ "hwfh w4f g3  fg34 g 4thg 4h5t g45 g45g4 5g4 5g 45g4t5  h544 5h 56h 53h 45 h5 h 5yh "],
  // },
];






const CodingProfile = [
  {
    name: "CodeForce",
    username: "shubham-kumar145",
    link: "https://codeforces.com/profile/shubham-kumar145",
    image: codeforce,
  },
  {
    name: "LeetCode",
    username: "shubham-kumar145",
    link: "https://leetcode.com/u/shubham-kumar145/",
    image: leetcode,
  },
  {
    name: "GeeksForGeeks",
    username: "shubhamkr145",
    link: "https://www.geeksforgeeks.org/user/shubhamkr145/",
    image: geeksforgeeks,
  },
  {
    name: "CodeChef",
    username: "shubham_kr145",
    link: "https://www.codechef.com/users/shubham_kr145",
    image: codechef,
  },
]


const MyclickPhoto = [
  {
    date: "12/05/2023",
    place: "balachadi",
    image: firstphoto,
  },
  {
    date: "19/09/2023",
    place: "bangalore",
    image: "https://res.cloudinary.com/dejblby8o/image/upload/v1753784646/IMG_20231002_175757_wp6xmv.jpg",
  },
  {
    date: "12/05/2023",
    place: "bit mesra",
    image: "https://res.cloudinary.com/dejblby8o/image/upload/v1753784624/IMG_20230921_212134_skf2pr.jpg",

  },
  {
    date: "25/05/2022",
    place: "bit mesra",
    image: "https://res.cloudinary.com/dejblby8o/image/upload/v1753784586/IMG_20230905_214140_o6zrer.jpg",
  },
  {
    date: "12/01/2023",
    place: "balachadi",
    image: "https://res.cloudinary.com/dejblby8o/image/upload/v1753784505/IMG_20230226_083423_snustn.jpg",
  },
  {
    date: "12/05/2023",
    place: "balachadi",
    image: "https://res.cloudinary.com/dejblby8o/image/upload/v1753784466/IMG_20230208_080628_yssife.jpg",
  },

]












const projects = [
  //  1
  {
    name: "Portfolio Website",
    description:
      "Designed and developed a fully responsive personal portfolio website using React and Tailwind CSS. Showcased projects, resume, and profile with a clean UI and smooth user experience. Integrated interactive 3D elements using Three.js to enhance visual engagement and demonstrate modern frontend development skills.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "TAILWIND",
        color: "green-text-gradient",
      },
      {
        name: "THREE JS",
        color: "pink-text-gradient",
      },
      {
        name: "REACT",
        color: "orange-text-gradient",
      },
    ],
    item: [
      {
        id: 1,
        img: "https://res.cloudinary.com/dejblby8o/image/upload/v1753783511/profile2_kqkxil.png",
      },
      {
        id: 2,
        img: "https://res.cloudinary.com/dejblby8o/image/upload/v1753783509/profile3_ne54gu.png",
      },
      {
        id: 3,
        img: "https://res.cloudinary.com/dejblby8o/image/upload/v1753783509/profile1_bvsebo.png",
      },
      {
        id: 4,
        img: "https://res.cloudinary.com/dejblby8o/image/upload/v1753783821/profile4_nrhyx3.png",
      },
    ],
    source_code_link: "https://github.com/shubham-kumar145/Portfolio-sk",
  },
  // 2
  {
    name: "CODE PRACTICE (CodeBeast)",
    description:
      "Built a coding platform with secure JWT-based authentication and role-based access (admin/user). Admins can manage problems; users can run and submit code with real-time feedback via Judge0 API. Integrated a chatbot for support, gated premium video solutions for paid users, and implemented seamless payment processing.",

    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "TAILWIND",
        color: "green-text-gradient",
      },
      {
        name: "REACT",
        color: "yellow-text-gradient",
      },
    ],
    item: [
      {
        id: 1,
        img: "https://res.cloudinary.com/dejblby8o/image/upload/v1753786384/Screenshot_2025-07-29_161554_enr9uk.png",
      },
      {
        id: 2,
        img: "https://res.cloudinary.com/dejblby8o/image/upload/v1753786383/Screenshot_2025-07-29_161517_ezzkzu.png",
      },
      {
        id: 3,
        img: "https://res.cloudinary.com/dejblby8o/image/upload/v1753786384/Screenshot_2025-07-29_161622_hou4bo.png",
      },
    ],
    source_code_link: "https://github.com/shubham-kumar145/CodeBeast-sk",
  },
  //3
  {
    name: "E Commerce Website (Smartstocker)",
    description:
      "Developed a full-stack E-Commerce platform with JWT and cookie-based authentication, featuring separate admin and user panels. Admins can add, update, and manage products in real-time. Integrated a secure login system, role-based access, and a responsive UI for seamless inventory and user management.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "TAILWIND",
        color: "green-text-gradient",
      },
      {
        name: "REACT",
        color: "yellow-text-gradient",
      },
    ],
    item: [
      {
        id: 1,
        img: "https://res.cloudinary.com/dejblby8o/image/upload/v1753788080/Screenshot_2025-07-29_164512_ktl9ej.png",
      },
      {
        id: 2,
        img: "https://res.cloudinary.com/dejblby8o/image/upload/v1753788079/Screenshot_2025-07-29_164538_ekcpdu.png",
      },
      {
        id: 3,
        img: "https://res.cloudinary.com/dejblby8o/image/upload/v1753788078/Screenshot_2025-07-29_164600_h3v6uk.png",
      },
      {
        id: 4,
        img: "https://res.cloudinary.com/dejblby8o/image/upload/v1753788078/Screenshot_2025-07-29_164617_vm3boi.png",
      },
      {
        id: 5,
        img: "https://res.cloudinary.com/dejblby8o/image/upload/v1753788078/Screenshot_2025-07-29_164854_uggkge.png",
      },
      {
        id: 6,
        img: "https://res.cloudinary.com/dejblby8o/image/upload/v1753788078/Screenshot_2025-07-29_164812_og8ves.png",
      },
    ],
    source_code_link: "https://github.com/shubham-kumar145/Smartstocker-sk",
  },
  //4
  {
    name: "weather webside",
    description:
      "Built a real-time weather application using OpenWeatherMap API that displays current weather conditions, temperature, and location-based data. Integrated dynamic UI updates and responsive design with React and Tailwind CSS. Enables users to search cities worldwide and view live forecasts with icons, humidity, and wind speed indicators.",

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
        name: "JAVASCRIPT",
        color: "pink-text-gradient",
      },
    ],
    item: [
      {
        id: 1,
        img: "https://res.cloudinary.com/dejblby8o/image/upload/v1753783810/weather1_f5znfg.png",
      },
      {
        id: 2,
        img: "https://res.cloudinary.com/dejblby8o/image/upload/v1753783809/weather2_tdszgv.png",
      },
    ],
    source_code_link: "https://github.com/shubham-kumar145/Weather-sk",
  },
  //5
  {
    name: "Astrolgy",
    description:
      "Astrology web app where users enter their name and birthdate to discover their zodiac sign and receive personalized predictions. Features real-time zodiac calculation, a responsive interface, and a cosmic-themed design. Strengthened core frontend skills through dynamic content updates, and intuitive user experience.",

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
        name: "JAVASCRIPT",
        color: "pink-text-gradient",
      },
    ],
    item: [
      {
        id: 1,
        img: "https://res.cloudinary.com/dejblby8o/image/upload/v1753783760/astrology1_ifdqps.png",
      },
      {
        id: 2,
        img: "https://res.cloudinary.com/dejblby8o/image/upload/v1753783764/astrology2_gbqzub.png",
      },
    ],
    source_code_link: "https://github.com/shubham-kumar145/astrolgy-sk",
  },
  // 6
  {
    name: "Tic Tac toe",
    description:
      "A classic Tic Tac Toe game built with HTML, CSS, and JavaScript. Features real-time gameplay, turn-based logic, win/tie detection, and a reset option. Designed with a clean and responsive UI for smooth user interaction. Strengthened logical thinking and DOM manipulation through hands-on game development.",
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
        name: "JAVASCRIPT",
        color: "pink-text-gradient",
      },
    ],
    item: [
      {
        id: 1,
        img: "https://res.cloudinary.com/dejblby8o/image/upload/v1753784217/tic3_kmgyju.png",
      },
      {
        id: 2,
        img: "https://res.cloudinary.com/dejblby8o/image/upload/v1753784218/tic1_drzrm0.png",
      },
      {
        id: 3,
        img: "https://res.cloudinary.com/dejblby8o/image/upload/v1753784217/tic2_qzwdih.png",
      },
    ],
    source_code_link: "https://github.com/shubham-kumar145/Tic-Tak-Toe-sk",
  },

];

export { services, technologies, experiences, CodingProfile, MyclickPhoto, projects };
