import React from 'react';

import { FaGithub, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

const Footer = () => {
  return (
    <section id="footer" className="container mx-auto mb-20 footer">
      <div className="flex text-[40px] gap-x-6 max-w-max mx-auto lg:mx-0 justify-center text-4xl">
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
