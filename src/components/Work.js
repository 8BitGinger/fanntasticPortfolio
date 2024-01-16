import React from 'react';
import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

import Img1 from '../assets/modal-screenshot.png';
import Img2 from '../assets/logo-screenshot.png';
import Img3 from '../assets/readMe-Screenshot.png';
import Img4 from '../assets/javaquizScreenshot.jpg';
import Img5 from '../assets/noteTaker-double-screenshot.png';
import Img6 from '../assets/Weather-Live-Screenshot.png';

const Work = () => {
  return (
    <section className="section mt-20" id="work">
      <div className="container mx-auto>">
        <div className="project">
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col"
          >
            <h2 className="text-gradient text-3xl leading-tight mt-50">
              My Portfolio.
            </h2>
            <p className=" max-w-lg mt-6 mb-12 ">
              I have experience in HTML, CSS, JavaScript, jQuery, Node.js,
              Express.js, MySQL, MongoDB, React.js, Three.js and more. I'm
              currently looking to launch a career in Web Development.
            </p>
            <button className="btn btn-sm w-fit mb-6">View All Projects</button>
          </motion.div>
          <div className="flex-1 flex lg:flex-row flex-wrap flex-col gap-x-3 gap-y-3">
            <motion.div
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl lg:w-1/4   h-60"
            >
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500 h-full w-full"
                src={Img1}
                alt="screenshot"
              />
              <div className=" absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient text-2xl">Weekly Moodal </span>
              </div>
              <div className=" absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-1xl text-white">
                  Collobrative Project
                </span>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.5 }}
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl lg:w-1/4 h-60"
            >
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500 h-full w-full"
                src={Img2}
                alt="screenshot"
              />
              <div className=" absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient text-2xl">
                  Workforce Manager{' '}
                </span>
              </div>
              <div className=" absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-1xl text-white">BackEnd CRM</span>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl lg:w-1/4 h-60"
            >
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500 h-full w-full"
                src={Img3}
                alt="screenshot"
              />
              <div className=" absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient text-2xl">ReadMe Maker </span>
              </div>
              <div className=" absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-1xl text-white">Node.js</span>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl lg:w-1/4 h-60"
            >
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500 h-full w-full"
                src={Img4}
                alt="screenshot"
              />
              <div className=" absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient text-2xl">JS Coding Quiz </span>
              </div>
              <div className=" absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-1xl text-white">JavaScript</span>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl lg:w-1/4 h-60"
            >
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 h-full w-full transition-all duration-500"
                src={Img5}
                alt="screenshot"
              />
              <div className=" absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient text-2xl">Note Taker </span>
              </div>
              <div className=" absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-1xl text-white">Express.js Backend</span>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl lg:w-1/4 h-60"
            >
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500 h-full w-full"
                src={Img6}
                alt="screenshot"
              />
              <div className=" absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient text-2xl">5 Day Forecast </span>
              </div>
              <div className=" absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-1xl text-white">3rd Party API</span>
              </div>
            </motion.div>
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
    </section>
  );
};

export default Work;
