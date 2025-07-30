// import React from "react";

// import { BallCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";

// const Tech = () => {
//   return (
//     <div className='flex flex-row flex-wrap justify-center gap-10'>
//       {technologies.map((technology) => (
//         <div className='w-28 h-28' key={technology.name} title={technology.name} >
//           <BallCanvas icon={technology.icon} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SectionWrapper(Tech, "");
import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div
          className='w-28 h-28 relative group cursor-pointer'
          key={technology.name}
        >
          <BallCanvas icon={technology.icon} />
          {/* Custom Tooltip */}
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

  );
};

export default SectionWrapper(Tech, "");
