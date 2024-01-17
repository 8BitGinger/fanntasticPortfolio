import React from 'react';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

import contactMe from '../assets/contact.png';

const Contact = () => {
  return (
    <section className="py-16 lg:section" id="contact">
      <motion.div
        variants={fadeIn('up', 0.9)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className="container mx-auto"
      >
        <div className=" flex lg:flex-row flex:col">
          <div className="flex-1 flex lg:flex-row flex-col ">
            <div>
              <h2 className="text-gradient text-3xl leading-tight mb-6">
                Contact Me.
              </h2>
              <p className="max-w-lg mb-12 m-6">
                I'm currently looking to launch a career in Web Development. If
                you have any questions or would like to contact me, please fill
                out the form below and I will get back to you as soon as
                possible.
              </p>
              <img
                className=" w-64  hidden avatar2 lg:flex flex-1 max-w-[220px] lg:max-w-[262px] mx-auto"
                src={contactMe}
                alt="screenshot"
              />
            </div>
            <form className="flex-1 justify-center items-center text-center">
              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                type="type"
                placeholder="Your Name"
              />
              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                type="email"
                placeholder="Your Email"
              />
              <textarea
                className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                placeholder="Your Message"
              ></textarea>
              <button
                type="submit"
                className="btn btn-round-2 mt-3 mb-20 w-fit uppercase"
              >
                <a href="mailto: ryan.fann@gmail.com?subject=Nice Portfolio">
                  Submit
                </a>
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
