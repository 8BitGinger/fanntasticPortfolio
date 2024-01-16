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
              HTML5, CSS, JavaScript, and React for a beautiful and modern Front
              End. I also have experience with Node, Express, Next.js, and
              MySQL, just to name a few, to create and manage an effecient
              Back-End.
            </p>
            <p className="m-5 lg:text-2xl">
              Being a Full Stack Web Developer allows me to harness the best of
              both Front End and Back End development to create soemthing new,
              dynamic, and exciting!
            </p>
            <p className="m-5 lg:text-2xl">
              When I'm not coding I love to spend time with my amazing
              girlfriend Adrian, energetic bird Brody and loyal dog Jax. I enjoy
              playing video games on my Xbox, Listening to Apple Music, and
              streaming my favorite Sci-Fi shows!
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
