import React from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const skills = [
  {
    name: 'HTML & CSS',
    description:
      'Lorem, ipusom dolor sit amet consectetur adipis elit miroes, quia quo epexita dfhasldk dhdkd hie hdkak; dhainfn dkdk thee;',
    link: 'Learn More',
  },
  {
    name: 'JavaScript',
    description:
      'Lorem, ipusom dolor sit amet consectetur adipis elit miroes, quia quo epexita dfhasldk dhdkd hie hdkak; dhainfn dkdk thee;',
    link: 'Learn More',
  },
  {
    name: 'React',
    description:
      'Lorem, ipusom dolor sit amet consectetur adipis elit miroes, quia quo epexita dfhasldk dhdkd hie hdkak; dhainfn dkdk thee;',
    link: 'Learn More',
  },
];

const Skills = () => {
  return (
    <section className="section mt-20 mb-40" id="skills">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 h-[70vh]"
          >
            <button className="btn btn-round">
              <a href="#work">
                See<br></br> My <br></br>Work
              </a>
            </button>
          </motion.div>
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="text-gradient text-3xl">Key Skills.</h2>
            <div className="flex-1">
              <div>
                {skills.map((service, index) => {
                  const { name, description } = service;
                  return (
                    <div
                      className="border-b border-white/20 h-[146px] flex "
                      key={index}
                    >
                      <div className="max-w-[476px]">
                        <h4 className="text-[20px] tracking wider font-primary font-semibold">
                          {name}
                        </h4>
                        <p
                          id="description"
                          className="font-secondary leading-tight"
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
        </div>
      </div>
    </section>
  );
};

export default Skills;
