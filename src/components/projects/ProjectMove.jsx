import { motion } from 'framer-motion';

import { fadeIn } from '../../variants';
import { FaGithub } from 'react-icons/fa';
import ImgM from '../../assets/seo-main.png';

const titleM = 'SkyRocket SEO';
const subtitleM = 'SEO Examples';
const linkM = 'https://seoservices.onrender.com/';
const gitM = 'https://github.com/8BitGinger/seoServices';

const ProjectMove = () => {
  return (
    <>
      <motion.div
        variants={fadeIn('up', 0.3)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className="group relative  overflow-hidden border-2 border-white/50 rounded-xl lg:w-1/4   h-60"
      >
        <a target="_blank" rel="noreferrer" href={linkM}>
          <div className="group-hover:bg-black/70 w-full  h-full absolute z-40 transition-all duration-300"></div>

          <img
            className="group-hover:scale-125 transition-all duration-500 h-full w-full"
            src={ImgM}
            alt="screenshot"
          />
        </a>
        <div className=" absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
          <span className="text-gradient mb-2 text-2xl">{titleM}</span>
        </div>
        <div className=" absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
          <span className="text-1xl text-white">{subtitleM}</span>
          <a className="icon" target="_blank" rel="noreferrer" href={gitM}>
            <FaGithub />
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectMove;
