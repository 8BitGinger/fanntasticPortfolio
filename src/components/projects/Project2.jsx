import { motion } from 'framer-motion';

import { fadeIn } from '../../variants';
import { FaGithub } from 'react-icons/fa';
import Img2 from '../../assets/socialEyes.png';

const title2 = 'Social Eyes: Anti-Social Media';
const subtitle2 = 'MERNg Stack, Framer, JWT';
const link2 = 'https://antisocialeyes.onrender.com/';
const git2 = 'https://github.com/8BitGinger/antiSocialMedia';

const Project2 = () => {
  return (
    <>
      <motion.div
        variants={fadeIn('up', 0.5)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.5 }}
        className="group relative overflow-hidden border-2 border-white/50 rounded-xl lg:w-1/5 h-60"
      >
        <a target="_blank" rel="noreferrer" href={link2}>
          <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
          <img
            className="group-hover:scale-125 transition-all duration-500 h-full w-full"
            src={Img2}
            alt="screenshot"
          />
        </a>
        <div className=" absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
          <span className="text-gradient text-2xl">{title2}</span>
        </div>
        <div className=" absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
          <span className="text-1xl text-white">{subtitle2}</span>
          <a className="icon" target="_blank" rel="noreferrer" href={git2}>
            <FaGithub />
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default Project2;
