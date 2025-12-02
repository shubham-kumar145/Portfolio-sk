import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto">

      {/* TEXT SECTION */}
      <div
        className={`relative top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-3">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} font-serif text-yellow-100`}>
            Hi, I'm{" "}
            <span className="text-yellow-400 text-shadow-gold uppercase italic font-serif">
              SHUBHAM
            </span>
          </h1>

          <p className={`${styles.heroSubText} font-serif mt-2 text-white-100`}>
            Welcome to my digital space. <br className="sm:block hidden" />
            Explore my journey, projects, and passion for building meaningful
            web experiences.
          </p>
        </div>
      </div>

      {/* COMPUTER IMAGE / 3D MODEL BELOW TEXT */}
      <div className="relative w-full flex justify-center mt-10 sm:mt-0">
        <ComputersCanvas />
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute xs:bottom-5 bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

    </section>
  );
};

export default Hero;
