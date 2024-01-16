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
        className="container m-5 flex justify-between items-center"
      >
        <div className="lg:flex-row flex-col flex">
          <div className="flex-1  round bg-about bgcontain bg-no-repeat h-[430px] mix-blend-lighten bg-top w-1/3"></div>
          <div className="lg:w-2/3 mx-auto">
            <h2 className="text-gradient mb-6 ml-3 text-3xl">About Me.</h2>
            <p className="m-5 lg:text-2xl">
              In a nutshell, I can build a site from the ground up with using
              HTML5, CSS, and JavaScript for a beautiful and modern Front End I
              will JavaScript, Node.js, Express.js, and MySQL, to name a few, to
              create and manage the Back-End.
            </p>
            <p className="m-5 lg:text-2xl">
              Being a Full Stack Web Developer allows me to harness the best of
              both Front End and Back End to create soemthing new, dynamic, and
              exciting!
            </p>
            <p className="m-5 lg:text-2xl">
              I love to spend time with my amazing girlfriend Adrian and loyal
              dog Jax, Listen to Apple Music, Play Xbox, and Code!
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
