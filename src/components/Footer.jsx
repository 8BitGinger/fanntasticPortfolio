import React from 'react';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <section id="footer" className="container footer mx-auto     ">
        <motion.div
          variants={fadeIn('right', 0.9)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className="container mx-auto"
        >
          <div className="footlink flex w-fit bg-black/20 backdrop-blur-2xl justify-center flex-row">
            <a className="icons " href="https://github.com/8BitGinger">
              <FaGithub />
            </a>
            <a className="icons" href="https://twitter.com/the8bitginger">
              <FaTwitter />
            </a>
            <a
              className="icons"
              href="https://www.linkedin.com/in/ryanfanntastic/"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Footer;
