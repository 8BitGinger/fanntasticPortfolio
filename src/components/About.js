import React from 'react';

import { useInView } from 'react-intersection-observer';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section mb-20 h-fit flex-row flex" id="about" ref={ref}>
      <motion.div
        variants={fadeIn('right', 0.5)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className="container mx-auto flex justify-between items-center"
      >
        <div className="flex-row flex">
          <div className="flex-1  round bg-about bgcontain bg-no-repeat h-[430px] mix-blend-lighten bg-top w-1/3"></div>
          <div className="w-2/3">
            <h2 className="text-gradient text-3xl">About Me.</h2>
            <p className="mb-6">
              I have experience in HTML, CSS, JavaScript, jQuery, Node.js,
              Express.js, MySQL, MongoDB, React.js, Three.js and more. I'm
              always looking to learn new things and improve my skills. I'm
              currently looking for a career in Web Development.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
