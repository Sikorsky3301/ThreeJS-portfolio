import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { github } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 relative z-10`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Rishi Raj</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            AI & Full-Stack Developer building <br className='sm:block hidden' />
            LLM-driven SaaS platforms
          </p>
          <div className='mt-6 flex gap-4 relative z-10'>
            <a
              href='https://github.com/Sikorsky3301'
              target='_blank'
              rel='noopener noreferrer'
              className='w-10 h-10 rounded-full bg-tertiary flex items-center justify-center hover:opacity-80 transition-opacity pointer-events-auto'
              aria-label='GitHub'
            >
              <img src={github} alt='GitHub' className='w-6 h-6 object-contain pointer-events-none' />
            </a>
            <a
              href='https://www.linkedin.com/in/rishirajx/'
              target='_blank'
              rel='noopener noreferrer'
              className='w-10 h-10 rounded-full bg-tertiary flex items-center justify-center hover:opacity-80 transition-opacity text-white pointer-events-auto'
              aria-label='LinkedIn'
            >
              <svg className='w-5 h-5' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
                <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className='absolute inset-0 z-0'>
        <ComputersCanvas />
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
