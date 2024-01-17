import React from 'react';

import { FaGithub, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

const Footer = () => {
  return (
    <section id="footer" className="container footer mx-auto     ">
      <div className="footlink flex w-fit bg-black/20 backdrop-blur-2xl justify-center flex-row">
        <a className="icons" href="https://github.com/8BitGinger">
          <FaGithub />
        </a>
        <a className="icons" href="https://facebook.com/ryanfann">
          <FaFacebookF />
        </a>
        <a className="icons" href="https://www.linkedin.com/in/ryanfanntastic/">
          <FaLinkedinIn />
        </a>
      </div>
    </section>
  );
};

export default Footer;
