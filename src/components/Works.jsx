// import React from "react";
// import Tilt from "react-tilt";
// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { github } from "../assets";
// import { SectionWrapper } from "../hoc";
// import { projects } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";

// const ProjectCard = ({
//   index,
//   name,
//   description,
//   tags,
//   image,
//   source_code_link,
// }) => {
//   return (
//     <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
//       <Tilt
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className='bg-tertiary p-5 rounded-2xl w-[360px]'
//       >
//         <div className='relative w-full h-[230px]'>
//           <img
//             src={image}
//             alt='project_image'
//             className='w-full h-full object-cover rounded-2xl'
//           />

//           <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
//             <div
//               onClick={() => window.open(source_code_link, "_blank")}
//               className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
//             >
//               <img
//                 src={github}
//                 alt='source code'
//                 className='w-1/2 h-1/2 object-contain'
//               />
//             </div>
//           </div>
//         </div>

//         <div className='mt-5'>
//           <h3 className='text-white font-bold text-[24px]'>{name}</h3>
//           <p className='mt-2 text-secondary text-[14px]'>{description}</p>
//         </div>

//         <div className='mt-4 flex flex-wrap gap-2'>
//           {tags.map((tag) => (
//             <p
//               key={`${name}-${tag.name}`}
//               className={`text-[14px] ${tag.color}`}
//             >
//               #{tag.name}
//             </p>
//           ))}
//         </div>
//       </Tilt>
//     </motion.div>
//   );
// };

// const Works = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={`${styles.sectionSubText} `}>My work,</p>
//         <h2 className={`${styles.sectionHeadText} italic font-serif `}>My Journey in Code.</h2>
//       </motion.div>

//       <div className='w-full flex'>
//         <motion.p
//           variants={fadeIn("", "", 0.1, 1)}
//           className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] '
//         >
//           <p className="text-lg leading-8 text-justify font-serif">
//             I'm <span className="font-semibold font-serif text-yellow-300">Shubham Kumar</span>, a third-year B.Tech student in Electronics and Communication Engineering at BIT Mesra, with a strong passion for building seamless and engaging web experiences.
//           </p>
//           <p className="text-lg leading-8 mt-4 text-justify font-serif">
//             My journey into <span className="font-semibold font-serif text-pink-300">web development</span> is driven by a deep curiosity and love for creating things that not only work — but feel intuitive and visually compelling. From designing responsive UIs with <span className="font-semibold font-serif text-violet-300">HTML, CSS, Tailwind, and React</span> to crafting robust backend solutions with <span className="font-semibold font-serif text-green-300">Node.js, Express, and MongoDB</span>, I thrive in full-stack environments.
//           </p>
//           <p className="text-lg leading-8 mt-4 text-justify font-serif">
//             Beyond the code, I bring an eye for detail through my interest in <span className="font-semibold font-serif text-blue-300">UI/UX design</span> and <span className="font-semibold font-serif text-red-300">photography</span>, ensuring every project blends functionality with storytelling. Whether it’s a sleek portfolio, a utility-focused app, or a dynamic full-stack system, I aim to build digital experiences that leave a lasting impression.
//           </p>

//         </motion.p>
//       </div>
//         <div className='mt-20 flex overflow-x-scroll overflow-y-scroll scrollbar-none gap-7'>
//           {projects.map((project, index) => (
//             <ProjectCard key={`project-${index}`} index={index} {...project} />
//           ))}
//         </div>

//     </>
//   );
// };

// export default SectionWrapper(Works, "");





// import React from "react";
// import Tilt from "react-tilt";
// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { github } from "../assets";
// import { SectionWrapper } from "../hoc";
// import { projects } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";
// import Carousel from "./Carousel";

// const DEFAULT_ITEMS = [
//   {
//     title: "Text Animations",
//     description: "Cool text animations for your projects.",
//     id: 1,
//     icon: <FiFileText className="h-[16px] w-[16px] text-white" />,
//   },
//   {
//     title: "Animations",
//     description: "Smooth animations for your projects.",
//     id: 2,
//     icon: <FiCircle className="h-[16px] w-[16px] text-white" />,
//   },
//   {
//     title: "Components",
//     description: "Reusable components for your projects.",
//     id: 3,
//     icon: <FiLayers className="h-[16px] w-[16px] text-white" />,
//   },
//   {
//     title: "Backgrounds",
//     description: "Beautiful backgrounds and patterns for your projects.",
//     id: 4,
//     icon: <FiLayout className="h-[16px] w-[16px] text-white" />,
//   },
//   {
//     title: "Common UI",
//     description: "Common UI components are coming soon!",
//     id: 5,
//     icon: <FiCode className="h-[16px] w-[16px] text-white" />,
//   },
// ];

// const ProjectCard = ({
//   items,
//   index,
//   name,
//   description,
//   tags,
//   image,
//   source_code_link,
// }) => {
//   return (
//     <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
//       <Tilt
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className='bg-tertiary p-5 rounded-2xl w-[360px]'
//       >
//         <div className='relative w-full h-[230px]'>
//           <div style={{ height: '600px', position: 'relative' }}>
//             <Carousel
//               items={items}
//               baseWidth={300}
//               autoplay={true}
//               autoplayDelay={3000}
//               pauseOnHover={true}
//               loop={true}
//               round={false}

//             />
//           </div>
//           <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
//             <div
//               onClick={() => window.open(source_code_link, "_blank")}
//               className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
//             >
//               <img
//                 src={github}
//                 alt='source code'
//                 className='w-1/2 h-1/2 object-contain'
//               />
//             </div>
//           </div>
//         </div>

//         <div className='mt-5'>
//           <h3 className='text-white font-bold text-[24px]'>{name}</h3>
//           <p className='mt-2 text-secondary text-[14px]'>{description}</p>
//         </div>

//         <div className='mt-4 flex flex-wrap gap-2'>
//           {tags.map((tag) => (
//             <p
//               key={`${name}-${tag.name}`}
//               className={`text-[14px] ${tag.color}`}
//             >
//               #{tag.name}
//             </p>
//           ))}
//         </div>
//       </Tilt>
//     </motion.div>
//   );
// };

// const Works = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={`${styles.sectionSubText} `}>My work,</p>
//         <h2 className={`${styles.sectionHeadText} italic font-serif `}>My Journey in Code.</h2>
//       </motion.div>

//       <div className='w-full flex'>
//         <motion.p
//           variants={fadeIn("", "", 0.1, 1)}
//           className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] '
//         >
//           <p className="text-lg leading-8 text-justify font-serif">
//             I'm <span className="font-semibold font-serif text-yellow-300">Shubham Kumar</span>, a third-year B.Tech student in Electronics and Communication Engineering at BIT Mesra, with a strong passion for building seamless and engaging web experiences.
//           </p>
//           <p className="text-lg leading-8 mt-4 text-justify font-serif">
//             My journey into <span className="font-semibold font-serif text-pink-300">web development</span> is driven by a deep curiosity and love for creating things that not only work — but feel intuitive and visually compelling. From designing responsive UIs with <span className="font-semibold font-serif text-violet-300">HTML, CSS, Tailwind, and React</span> to crafting robust backend solutions with <span className="font-semibold font-serif text-green-300">Node.js, Express, and MongoDB</span>, I thrive in full-stack environments.
//           </p>
//           <p className="text-lg leading-8 mt-4 text-justify font-serif">
//             Beyond the code, I bring an eye for detail through my interest in <span className="font-semibold font-serif text-blue-300">UI/UX design</span> and <span className="font-semibold font-serif text-red-300">photography</span>, ensuring every project blends functionality with storytelling. Whether it’s a sleek portfolio, a utility-focused app, or a dynamic full-stack system, I aim to build digital experiences that leave a lasting impression.
//           </p>

//         </motion.p>
//       </div>
//       <div className='mt-20 flex overflow-x-scroll overflow-y-scroll scrollbar-none gap-7'>
//         {projects.map((project, index) => (
//           <ProjectCard key={`project-${index}`} index={index} items={DEFAULT_ITEMS} {...project} />
//         ))}
//       </div>

//     </>
//   );
// };

// export default SectionWrapper(Works, "");

// =====================================


// import React from "react";
// import Tilt from "react-tilt";
// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { github } from "../assets";
// import { SectionWrapper } from "../hoc";
// import { projects } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";
// import Carousel from "./Carousel";

// const ProjectCard = ({
//   items,
//   index,
//   name,
//   description,
//   tags,
//   source_code_link,
// }) => {
//   return (
//     <motion.div variants={fadeIn("up", "spring",0.5, 0.75)}>
//       <Tilt
//         options={{ max: 45, scale: 1, speed: 450 }}
//         className="bg-tertiary p-5 rounded-2xl w-[360px]"
//       >
//         <div className="relative w-full bg-black/25 flex justify-center rounded-3xl">
//             <Carousel
//               items={items}
//               baseWidth={320}
//               autoplay={true}
//               autoplayDelay={3000}
//               pauseOnHover={true}
//               loop={true}
//               round={false}
//             />

//           <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
//             <div
//               onClick={() => window.open(source_code_link, "_blank")}
//               className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
//             >
//               <img
//                 src={github}
//                 alt="source code"
//                 className="w-1/2 h-1/2 object-contain"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="mt-2">
//           <h3 className="text-white font-bold text-[24px] font-serif">{name}</h3>
//           <p className="mt-2 text-secondary text-[14px] font-serif">{description}</p>
//         </div>

//         <div className="mt-4 flex flex-wrap gap-2">
//           {tags.map((tag) => (
//             <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
//               #{tag.name}
//             </p>
//           ))}
//         </div>
//       </Tilt>
//     </motion.div>
//   );
// };

// const Works = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={`${styles.sectionSubText}`}>My work,</p>
//         <h2 className={`${styles.sectionHeadText} italic font-serif`}>
//           My Journey in Code.
//         </h2>
//       </motion.div>

//       <div className="w-full flex">
//         <motion.div
//           variants={fadeIn("", "", 0.1, 1)}
//           className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
//         >
//           <p className="text-lg leading-8 text-justify font-serif">
//             I'm <span className="font-semibold text-yellow-300">Shubham Kumar</span>,
//             a third-year B.Tech student in Electronics and Communication Engineering
//             at BIT Mesra, with a strong passion for building seamless and engaging
//             web experiences.
//           </p>
//           <p className="text-lg leading-8 mt-4 text-justify font-serif">
//             My journey into <span className="font-semibold text-pink-300">web development</span>
//             is driven by a deep curiosity and love for creating things that not only
//             work — but feel intuitive and visually compelling. From designing responsive UIs with{" "}
//             <span className="font-semibold text-violet-300">HTML, CSS, Tailwind, and React</span> to
//             crafting robust backend solutions with{" "}
//             <span className="font-semibold text-green-300">Node.js, Express, and MongoDB</span>, I
//             thrive in full-stack environments.
//           </p>
//           <p className="text-lg leading-8 mt-4 text-justify font-serif">
//             Beyond the code, I bring an eye for detail through my interest in{" "}
//             <span className="font-semibold text-blue-300">UI/UX design</span> and{" "}
//             <span className="font-semibold text-red-300">photography</span>, ensuring every project
//             blends functionality with storytelling.
//           </p>
//         </motion.div>
//       </div>

//       <div className=" relative mt-20 flex overflow-y-scroll scrollbar-none  gap-7">
//         {projects.map((project, index) => (
//           <ProjectCard
//             key={`project-${index}`}
//             index={index}
//             items={project.item}
//             {...project}
//           />
//         ))}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(Works, "");

import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Carousel from "./Carousel";
import { useRef } from "react";



const ProjectCard = ({
  items,
  index,
  name,
  description,
  tags,
  source_code_link,
}) => {
  return (
    <div className="bg-tertiary p-5 rounded-2xl w-[360px] h-auto flex flex-col justify-between min-h-[480px]">
      <div>
        <div className="relative w-full bg-black/25 flex justify-center rounded-3xl overflow-hidden">
          <Carousel
            items={items}
            baseWidth={320}
            autoplay={true}
            autoplayDelay={3000}
            pauseOnHover={true}
            loop={true}
            round={false}
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-2">
          <h3 className="text-white font-bold text-[24px] font-serif uppercase">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] font-serif">{description}</p>
        </div>
      </div>

      {/* Tags section at the bottom */}
      <div className="mt-4 flex flex-wrap gap-2 uppercase">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );
};

const Works = () => {

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work,</p>
        <h2 className={`${styles.sectionHeadText} italic font-serif`}>
          My Journey in Code.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          <p className="text-lg leading-8 text-justify font-serif">
            I'm <span className="font-semibold text-yellow-300">Shubham Kumar</span>,
            a third-year B.Tech student in Electronics and Communication Engineering
            at BIT Mesra, with a strong passion for building seamless and engaging
            web experiences.
          </p>
          <p className="text-lg leading-8 mt-4 text-justify font-serif">
            My journey into <span className="font-semibold text-pink-300">web development</span>
            is driven by a deep curiosity and love for creating things that not only
            work — but feel intuitive and visually compelling. From designing responsive UIs with{" "}
            <span className="font-semibold text-violet-300">HTML, CSS, Tailwind, and React</span> to
            crafting robust backend solutions with{" "}
            <span className="font-semibold text-green-300">Node.js, Express, and MongoDB</span>, I
            thrive in full-stack environments.
          </p>
          <p className="text-lg leading-8 mt-4 text-justify font-serif">
            Beyond the code, I bring an eye for detail through my interest in{" "}
            <span className="font-semibold text-blue-300">UI/UX design</span> and{" "}
            <span className="font-semibold text-red-300">photography</span>, ensuring every project
            blends functionality with storytelling.
          </p>
        </motion.div>
      </div>
      <div className="flex items-center relative">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="text-white text-3xl px-3 py-1 rounded-full bg-black/40 hover:bg-black/70 transition z-10"
        >
          &#8249;
        </button>

        {/* Scrollable Project Cards */}
        <div
          ref={scrollRef}
          className="relative mt-20 flex overflow-x-auto scrollbar-none gap-7 px-2"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              items={project.item}
              {...project}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="text-white text-3xl px-3 py-1 rounded-full bg-black/40 hover:bg-black/70 transition z-10"
        >
          &#8250;
        </button>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
