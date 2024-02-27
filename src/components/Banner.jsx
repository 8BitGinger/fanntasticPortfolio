import { React } from 'react';
import Image from '../assets/8bit-avatar-noBG.png';

import { TypeAnimation } from 'react-type-animation';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

import sound from '../assets/rockNroll.mp3';

const Banner = () => {
  function play() {
    const song = new Audio(sound);
    song.volume = 0.4;
    song.play();
  }

  return (
    <section
      className="min-h-[85vh] mt-20 lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto mt-7">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] text-orange-500 font-bold leading-[0.8] lg:text-[110px]"
            >
              Ryan <span>Fann</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              classame="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-3xl mr-2 mt-3 font-semibold uppercase">
                I am a
              </span>
              <TypeAnimation
                sequence={[
                  'Developer',
                  2000,
                  'Designer',
                  2000,
                  'Student',
                  2000,
                ]}
                speed={50}
                className="text-5xl font-bold text-blue-400 uppercase my-4"
                wrapper="span"
                repeat={Infinity}
              />
              <motion.p
                variants={fadeIn('up', 0.5)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                className="mb-8 mt-8 max-w-lg lg:mx-0 text-2xl"
              >
                Being a Full Stack Web Developer allows me to harness the best
                of both Front End and Back End development to create something
                new, dynamic, and exciting!
              </motion.p>
              <motion.div
                variants={fadeIn('up', 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
              >
                <a href="#work">
                  <button onClick={play} className="btn btn-sm">
                    My Portfolio
                  </button>
                </a>
                <a href="#contact">
                  <button onClick={play} className="btn btn-sm">
                    Work with me
                  </button>
                </a>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn('down', 0)}
            initial="hidden"
            whileInView={'show'}
          >
            <img
              className="hidden avatar lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto"
              src={Image}
              alt="Avatar"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
