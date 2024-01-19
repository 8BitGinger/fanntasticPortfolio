import React from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

import imgSkill from '../assets/services.png';

import ResumeDoc from '../assets/files/devResume-v3-2024.pdf';

const skills = [
  {
    name: 'HTML & CSS',
    description:
      'HTML and CSS are the foundation of any website. I have a strong understanding of both and can create a beautiful and responsive website from scratch.',
    link: 'Learn More',
  },
  {
    name: 'JavaScript',
    description:
      'JavaScript is the language of the web. I have a strong understanding of JavaScript and can create dynamic and interactive websites.',
    link: 'Learn More',
  },
  {
    name: 'React',
    description:
      'React is a powerful JavaScript library that allows you to create dynamic and responsive websites. I have a strong understanding of React and passion for learning even more',
    link: 'Learn More',
  },
  {
    name: 'MySQL and MongoDB',
    description:
      'Databases are the backbone of any website. I have a strong understanding of both MySQL and MongoDB as well as some others and can create and manage databases for many websites.',
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
            className="lg:w-2/3"
          >
            <h2 className="text-gradient w-fit mt-4 text-3xl">
              Resume & Skills.
            </h2>
            <div className="flex-1">
              <div>
                {skills.map((service, index) => {
                  const { name, description } = service;
                  return (
                    <div
                      className="border-b border-white/20 mr-6 h-fit flex "
                      key={index}
                    >
                      <div className="max-w-[476px]">
                        <h4 className="text-[20px] tracking wider font-primary font-semibold">
                          {name}
                        </h4>
                        <p
                          id="description"
                          className="font-secondary mb-2 leading-tight"
                        >
                          {description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 mb-12 lg:w-1/3"
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
