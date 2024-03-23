import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { FaGithub } from 'react-icons/fa';

import Img7 from '../../assets/silverKnight.png';
import Img8 from '../../assets/PasswordGen.png';
import Img9 from '../../assets/myCal - main.png';
import Img10 from '../../assets/ticTacTypescript.png';

const title7 = 'Silver Knight RPG';
const subtitle7 = 'Node.js, Inquirer';
const link7 = 'https://8bitginger.github.io/silverKnightRPG/';
const git7 = 'https://github.com/8BitGinger/silverKnightRPG';

const title8 = 'Password Generator';
const subtitle8 = 'JS Logic';
const link8 = 'https://8bitginger.github.io/passwordGenerator/';
const git8 = 'https://github.com/8BitGinger/passwordGenerator';

const title9 = 'myCal';
const subtitle9 = 'Dynamic Calendar';
const link9 = 'https://8bitginger.github.io/myCal/';
const git9 = 'https://github.com/8BitGinger/myCal';

const title10 = 'TicTacToe';
const subtitle10 = 'Typescript';
const link10 = 'https://tictactypscript-5cd5d0597c27.herokuapp.com/';
const git10 = 'https://github.com/8BitGinger/tictactoe';

const Projects78910 = () => {
  return (
    <>
      <motion.div
        variants={fadeIn('up', 0.7)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className="group relative overflow-hidden border-2 border-white/50 rounded-xl lg:w-1/3 h-60"
      >
        <a target="_blank" rel="noreferrer" href={link7}>
          <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-700"></div>
          <img
            className="group-hover:scale-125 transition-all duration-500 h-full w-full"
            src={Img7}
            alt="screenshot"
          />
        </a>
        <div className=" absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
          <span className="text-gradient text-2xl">{title7} </span>
        </div>
        <div className=" absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
          <span className="text-1xl text-white">{subtitle7} </span>
          <a className="icon" target="_blank" rel="noreferrer" href={git7}>
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
        <a target="_blank" rel="noreferrer" href={link8}>
          <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
          <img
            className="group-hover:scale-125 transition-all duration-500 h-full w-full"
            src={Img8}
            alt="screenshot"
          />
        </a>
        <div className=" absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
          <span className="text-gradient text-2xl">{title8} </span>
        </div>
        <div className=" absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
          <span className="text-1xl text-white">{subtitle8}</span>
          <a className="icon" target="_blank" rel="noreferrer" href={git8}>
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
        <a target="_blank" rel="noreferrer" href={link9}>
          <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
          <img
            className="group-hover:scale-125 h-full w-full transition-all duration-500"
            src={Img9}
            alt="screenshot"
          />
        </a>
        <div className=" absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
          <span className="text-gradient text-2xl">{title9} </span>
        </div>
        <div className=" absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
          <span className="text-1xl text-white">{subtitle9}</span>
          <a className="icon" target="_blank" rel="noreferrer" href={git9}>
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
        <a target="_blank" rel="noreferrer" href={link10}>
          <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
          <img
            className="group-hover:scale-125 transition-all duration-500 h-full w-full"
            src={Img10}
            alt="screenshot"
          />
        </a>
        <div className=" absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
          <span className="text-gradient text-2xl">{title10} </span>
        </div>
        <div className=" absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
          <span className="text-1xl text-white">{subtitle10}</span>
          <a className="icon" target="_blank" rel="noreferrer" href={git10}>
            <FaGithub />
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default Projects78910;
