import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <div>
      <div className="flex justify-center mb-10 px-4 sm:px-6 lg:px-8">
        <h1 className={` ${styles.sectionHeadText} font-serif tracking-wide py-3 px-6 shadow-lg`}>
          Tech I Used So Far
        </h1>
      </div>

      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div
            className="relative group cursor-pointer flex items-center justify-center"
            key={technology.name}
          >
            {/* <BallCanvas icon={technology.icon} /> */}
            <BallCanvas
              icon={technology.icon}
              mobileIcon={technology.mobileIcon}
            />

            <div
              className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
      bg-[#915EFF] text-white text-xs px-2 py-1 rounded shadow-lg 
      opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10
      pointer-events-none whitespace-nowrap"
            >
              {technology.name}
            </div>
          </div>
        ))}

      </div>
    </div>

  );
};

export default SectionWrapper(Tech, "");
