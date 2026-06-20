import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className="w-full max-w-[320px] sm:max-w-none mx-auto sm:mx-0"
    options={{ max: 12, scale: 1.02, speed: 400 }}
  >
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.6)}
      className="overview-card-border w-full h-full"
    >
      <div className="overview-card-inner py-6 px-5 sm:py-7 sm:px-8 min-h-[220px] sm:min-h-[260px] flex flex-col justify-center items-center gap-4 sm:gap-5"
      >
        <div className="overview-card-icon-wrap flex-shrink-0">
          <img
            src={icon}
            alt={title}
            className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
          />
        </div>
        <h3 className="text-white text-base sm:text-lg font-bold text-center leading-snug">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-relaxed sm:leading-[30px]"
      >
        AI Engineer with hands-on experience building production-grade Computer
        Vision, Generative AI, and full-stack applications. I develop scalable
        AI systems using FastAPI, Python, YOLO, TensorRT, and LangChain, with
        expertise in multi-camera video analytics, person re-identification,
        real-time inference pipelines, and containerized deployments. Strong
        foundation in modular architecture, dependency injection, CI/CD, and
        TDD — passionate about bridging AI research with real-world enterprise
        applications.
      </motion.p>

      <motion.div
        variants={staggerContainer(0.05, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-14 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 justify-items-center"
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
