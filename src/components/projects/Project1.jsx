import { motion } from 'framer-motion';

import { fadeIn } from '../../variants';
import { FaGithub } from 'react-icons/fa';
import Img1 from '../../assets/gumshoe-home1-rm.png';

const title1 = 'Gumshoe RPG';
const subtitle1 = 'React, Html2Canvas, Spline';
const link1 = 'https://gumshoe.vercel.app/';
const git1 = 'https://github.com/8BitGinger/GumshoeReact';

const Project1 = () => {
  return (
    <>
      <motion.div
        variants={fadeIn('up', 0.3)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className="group relative  overflow-hidden border-2 border-white/50 rounded-xl lg:w-1/2   h-60"
      >
        <a target="_blank" rel="noreferrer" href={link1}>
          <div className="group-hover:bg-black/70 w-full  h-full absolute z-40 transition-all duration-300"></div>

          <img
            className="group-hover:scale-125 transition-all duration-500 h-full w-full"
            src={Img1}
            alt="screenshot"
          />
        </a>
        <div className=" absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
          <span className="text-gradient mb-2 text-2xl">{title1}</span>
        </div>
        <div className=" absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
          <span className="text-1xl text-white">{subtitle1}</span>
          <a className="icon" target="_blank" rel="noreferrer" href={git1}>
            <FaGithub />
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default Project1;
