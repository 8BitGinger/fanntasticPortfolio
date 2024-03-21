import React from 'react';
import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

import Project1 from './projects/Project1';
import Project2 from './projects/Project2';
import Projects3456 from './projects/Projects3456';
import Projects78910 from './projects/Projects78910';

const Projects = () => {
  return (
    <section className="section flex justify-center mb-20" id="work">
      <div className="container w-fit mx-auto>">
        <div className="project">
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className="flex w-full flex-col"
          >
            <h2 className="text-gradient w-fit text-3xl leading-tight mt-50">
              My Portfolio.
            </h2>
            <p className=" w-full mt-6 mb-12 ">
              I have experience in HTML, CSS, JavaScript, jQuery, Node.js,
              Express.js, MySQL, MongoDB, React.js, Next.js and more. Always
              looking for the next Web Development challenge!
            </p>
          </motion.div>
          <div className="flex-1 w-lg-max  flex lg:flex-row flex-wrap flex-col gap-x-3 gap-y-3">
            <Project1 />
            <Project2 />
            <Projects3456 />
            <Projects78910 />
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
