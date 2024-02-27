import React from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

import imgSkill from '../assets/services.png';

import ResumeDoc from '../assets/files/devResume-v3-2024.pdf';

const skills = [
  {
    name: 'HTML',
    category: 'Front-End',
  },
  {
    name: 'CSS',
    category: 'Front-End',
  },
  {
    name: 'JavaScript',
    category: 'Front-End',
  },
  {
    name: 'React',
    category: 'Front-End',
  },
  {
    name: 'MySQL',
    category: 'Back-End',
  },
  {
    name: 'Sequelize',
    category: 'Back-End',
  },
  {
    name: 'APIs',
    category: 'Back-End',
  },
  {
    name: 'Node',
    category: 'Back-End',
  },
  {
    name: 'Express',
    category: 'Back-End',
  },
  {
    name: 'jQuery',
    category: 'Front-End',
  },
  {
    name: 'Tailwind',
    category: 'Front-End',
  },
  {
    name: 'Bootstrap',
    category: 'Front-End',
  },
];

const Resume = () => {
  return (
    <section className="section mt-20 mb-40" id="skills">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="lg:w-1/2 justify-center flex  align-center"
          >
            <div>
              <h2 className="text-gradient w-fit mt-10 text-3xl">
                Resume & Skills.
              </h2>
              <div className="flex-1">
                <div className="w-fit">
                  {skills.map((service, index) => {
                    const { name, category } = service;
                    return (
                      <div
                        className="border-b border-white/20 mr-6 h-fit flex "
                        key={index}
                      >
                        <div className="max-w-[476px]">
                          <ul>
                            <li className="flex skillItem flex-row">
                              <h4 className="text-2xl mr-20 font-primary">
                                {name}
                              </h4>
                              <h4 className="text-gradient opacity-60 text-1xl;">
                                {category}
                              </h4>
                            </li>
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 mb-12 lg:w-1/2"
          >
            <a
              href={ResumeDoc}
              rel="noreferrer"
              download="MyResume"
              target="_blank"
            >
              <button className="btn text-sm btn-round">
                Download<br></br>Resume
              </button>
            </a>
            <img
              className="services coder"
              alt="round skills"
              src={imgSkill}
            ></img>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
