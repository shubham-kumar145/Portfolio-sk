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
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='development'
          className='w-40 h-20 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const drivelink = "https://drive.google.com/uc?export=download&id=1z8VNt_CfTWij2pwlkMME5yswhF2nC7yI";
  const [viewwhich, setViewwhich] = useState(false);
  useEffect(() => {
    if (!stop) {
      const interval = setInterval(() => {
        setViewwhich((prev) => !prev);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [stop]);

  useEffect(() => {
    const fixBackground = setInterval(() => {
      const canvas = document
        .querySelector("spline-viewer")
        ?.shadowRoot?.querySelector("canvas");

      if (canvas) {
        canvas.style.backgroundColor = "transparent";
        clearInterval(fixBackground);
      }
    }, 100);

    return () => clearInterval(fixBackground);
  }, []);


  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} font-serif `}>Behind the Screen.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        <p className="text-lg leading-8 text-justify">
          Hello! I’m <span className="font-semibold text-yellow-300">Shubham Kumar</span>, a third-year B.Tech student in Electronics and Communication Engineering at BIT Mesra.
          I have a deep passion for <span className="font-semibold text-pink-300">web development</span> and love creating websites that are both functional and visually engaging.
        </p>
        <p className="text-lg leading-8 mt-4 text-justify">
          From interactive user experiences to clean and responsive design, I enjoy turning ideas into reality through code.
          I continuously explore new technologies, experiment with layouts, and strive to build interfaces that make an impact.
          My journey in web development is driven by curiosity, creativity, and a strong desire to grow every day.
        </p>

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
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};
export default SectionWrapper(About, "about");
