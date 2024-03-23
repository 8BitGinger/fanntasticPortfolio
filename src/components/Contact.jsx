import { React, useRef } from 'react';

import { useForm, ValidationError } from '@formspree/react';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

import contactMe from '../assets/contact.png';

const Contact = () => {
  const [state, handleSubmit, reset] = useForm('mjvnrreq');

  if (state.succeeded) {
    window.location.reload();
    return <p className="pop-up">Thanks for reaching out!</p>;
  } else {
    if (state.errors) {
      console.log(state.errors);
      return <p className="pop-up">There was an error. Please try again.</p>;
    }
  }

  return (
    <>
      <section id="contact" className="py-16 lg:section contact">
        <motion.div
          variants={fadeIn('up', 0.9)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className="container sm:min-h-[100vh] mt-50px mx-auto"
        >
          <div className=" flex mt-6 lg:flex-row flex:col">
            <div className="flex-1 flex lg:flex-row flex-col ">
              <div>
                <h2 className="text-gradient w-fit text-3xl leading-tight mb-6 mt-6">
                  Contact Me.
                </h2>
                <p className="max-w-lg mb-12 m-6 mobile-hide">
                  I'm currently looking to launch a career in Web Development.
                  If you have any questions or would like to contact me, please
                  fill out the form below and I will get back to you as soon as
                  possible.
                </p>
                <img
                  className=" w-64  hidden avatar2 lg:flex flex-1 max-w-[220px] lg:max-w-[262px] mx-auto"
                  src={contactMe}
                  alt="screenshot"
                />
              </div>
              <form
                id="contact-form"
                className=" flex-1 justify-center items-center text-center"
                onSubmit={handleSubmit}
              >
                <input
                  className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                  type="name"
                  placeholder="Your Name"
                  name="name"
                  id="name"
                  required={true}
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
                <input
                  className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  id="email"
                  required={true}
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <textarea
                  className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                  placeholder="Your Message"
                  name="message"
                  id="message"
                  required={true}
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />

                <button
                  type="submit"
                  disabled={state.submitting}
                  onClick={reset}
                  className="btn btn-round-2 mt-3 mb-20 w-fit uppercase"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
