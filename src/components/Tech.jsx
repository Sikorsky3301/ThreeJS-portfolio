import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const SkillCard = ({ index, name, icon }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.05, 0.5)}
    className="skill-card flex flex-col items-center justify-center gap-2 sm:gap-3 py-4 px-4 sm:py-5 sm:px-5 min-h-[100px] sm:min-h-[110px]"
  >
    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0">
      <img
        src={icon}
        alt={name}
        className="w-full h-full object-contain"
      />
    </div>
    <span className="text-white text-xs sm:text-sm font-semibold text-center leading-tight">
      {name}
    </span>
  </motion.div>
);

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I use</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      <motion.div
        variants={staggerContainer(0.05, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-12 sm:mt-16 grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4"
      >
        {technologies.map((tech, index) => (
          <SkillCard key={tech.name} index={index} {...tech} />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
