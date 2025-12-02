import Tilt from "react-tilt";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{ max: 45, scale: 1, speed: 450 }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img src={icon} alt='development' className='w-40 h-20 object-contain' />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const drivelink =
    "https://drive.google.com/uc?export=download&id=1YNwlGpK6VJuf9NiQf8d2Gje8QZlyDy42";

  const [viewwhich, setViewwhich] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewwhich((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full flex flex-col lg:flex-row justify-between  gap-10">

      {/* ================= LEFT TEXT SECTION ================= */}
      <div className="flex-1">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>INTRODUCTION</p>
          <h2 className={`${styles.sectionHeadText} font-serif`}>
            Behind the Screen.
          </h2>
        </motion.div>
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] w-full leading-[30px]"
        >
          {/* FLEX ROW: TEXT + IMAGE SIDE BY SIDE */}
          <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-6">

            {/* LEFT TEXT BLOCK (65% WIDTH) */}
            <div className="w-full lg:w-[65%] pr-0">

              <p className="text-lg leading-8 text-justify">
                Hi, I’m <span className="font-semibold text-yellow-300">Shubham Kumar</span> —
                a web development enthusiast and a third-year Electronics and Communication Engineering
                student at BIT Mesra. I enjoy creating modern, responsive, and user-focused web applications
                that deliver meaningful digital experiences.
              </p>

              <p className="text-lg leading-8 mt-4 text-justify">
                I love designing clean interfaces, crafting smooth interactions, and building products
                that feel intuitive and enjoyable to use. My work ranges from frontend development using
                React and Tailwind CSS to exploring backend fundamentals and API integrations.
              </p>

              <p className="text-lg leading-8 mt-4 text-justify">
                I constantly learn, experiment, and refine my skills to become a stronger developer every day.
                My journey is driven by passion, creativity, and a deep interest in solving real-world problems
                through code.
              </p>

              {/* DOWNLOAD BUTTON */}
              <div className="mt-6 flex justify-start">
                <a
                  href={drivelink}
                  target="_blank"
                  className="min-w-52 inline-block bg-primary hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded transition duration-200"
                >
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={viewwhich ? "download" : "view"}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      Download Resume
                    </motion.span>
                  </AnimatePresence>
                </a>
              </div>
            </div>

            {/* RIGHT IMAGE BLOCK (35% WIDTH) */}
            <div className="hidden lg:flex w-full lg:w-[35%] justify-end items-center m-0 p-0">
              <img
                src="/profile.png"
                alt="Shubham Profile"
                className="w-[320px] h-auto object-cover rounded-2xl select-none m-0 p-0"
              />
            </div>

          </div>
        </motion.div>
        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");