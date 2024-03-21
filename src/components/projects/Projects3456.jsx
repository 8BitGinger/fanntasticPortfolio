import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { FaGithub } from 'react-icons/fa';

import Img3 from '../../assets/seo-main.png';
import Img4 from '../../assets/WeeklyMoodal.png';
import Img5 from '../../assets/quizzed.png';
import Img6 from '../../assets/noteTaker-double-screenshot.png';

const title3 = 'SkyRocket SEO';
const subtitle3 = 'SEO Examples';
const link3 = 'https://seoservices.onrender.com/';
const git3 = 'https://github.com/8BitGinger/seoServices';

const title4 = 'Weekly Moodal';
const subtitle4 = 'jQuery, 3rd-Party APIs';
const link4 = 'https://github.com/jameslwilson364/weeklyMoodal';
const git4 = 'https://github.com/jameslwilson364/weeklyMoodal';

const title5 = 'Quizzed';
const subtitle5 = 'Vanilla JS';
const link5 = 'https://8bitginger.github.io/quizzed/';
const git5 = 'https://github.com/8BitGinger/quizzed';

const title6 = 'Note Taker';
const subtitle6 = 'Express.js';
const link6 = 'https://nodenotes-js-8e31ec34cd5f.herokuapp.com/';
const git6 = 'https://github.com/8BitGinger/noteTaker';

const Projects456 = () => {
  return (
    <>
      <motion.div
        variants={fadeIn('up', 0.7)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className="group relative overflow-hidden border-2 border-white/50 rounded-xl lg:w-1/5 h-60"
      >
        <a target="_blank" rel="noreferrer" href={git3}>
          <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
          <img
            className="group-hover:scale-125 transition-all duration-500 h-full w-full"
            src={Img3}
            alt="screenshot"
          />
        </a>
        <div className=" absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
          <span className="text-gradient text-2xl">{title3} </span>
        </div>
        <div className=" absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
          <span className="text-1xl text-white">{subtitle3} </span>
          <a className="icon" target="_blank" rel="noreferrer" href={link3}>
            <FaGithub />
          </a>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn('up', 0.7)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className="group relative overflow-hidden border-2 border-white/50 rounded-xl lg:w-1/5 h-60"
      >
        <a target="_blank" rel="noreferrer" href={link4}>
          <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
          <img
            className="group-hover:scale-125 transition-all duration-500 h-full w-full"
            src={Img4}
            alt="screenshot"
          />
        </a>
        <div className=" absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
          <span className="text-gradient text-2xl">{title4} </span>
        </div>
        <div className=" absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
          <span className="text-1xl text-white">{subtitle4}</span>
          <a className="icon" target="_blank" rel="noreferrer" href={git4}>
            <FaGithub />
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn('up', 0.7)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className="group relative overflow-hidden border-2 border-white/50 rounded-xl lg:w-1/5 h-60"
      >
        <a target="_blank" rel="noreferrer" href={link5}>
          <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
          <img
            className="group-hover:scale-125 h-full w-full transition-all duration-500"
            src={Img5}
            alt="screenshot"
          />
        </a>
        <div className=" absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
          <span className="text-gradient text-2xl">{title5} </span>
        </div>
        <div className=" absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
          <span className="text-1xl text-white">{subtitle5}</span>
          <a className="icon" target="_blank" rel="noreferrer" href={git5}>
            <FaGithub />
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn('up', 0.7)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className="group relative overflow-hidden border-2 border-white/50 rounded-xl lg:w-1/5 h-60"
      >
        <a target="_blank" rel="noreferrer" href={link6}>
          <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
          <img
            className="group-hover:scale-125 transition-all duration-500 h-full w-full"
            src={Img6}
            alt="screenshot"
          />
        </a>
        <div className=" absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
          <span className="text-gradient text-2xl">{title6} </span>
        </div>
        <div className=" absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
          <span className="text-1xl text-white">{subtitle6}</span>
          <a className="icon" target="_blank" rel="noreferrer" href={git6}>
            <FaGithub />
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default Projects456;
