import React from 'react';
import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';

const Work = () => {
  return (
    <section className="section mt-20" id="work">
      <div className="container mx-auto>">
        <div>
          <div className="flex-1 flex flex-col">
            <div>
              <h2 className="text-gradient text-3xl leading-tight mt-100">
                My Portfolio.
              </h2>
              <p className=" max-w-sm mb-12 ">
                Lorem, ipusom dolor sit amet consectetur adipis elit miroes,
                quia quo epexita dfhasldk dhdkd hie hdkak; dhainfn dkdk thee
              </p>
              <button className="btn btn-sm mb-6">View All Projects</button>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl lg:w-1/3">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt="screenshot"
              />
              <div className=" absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design </span>
              </div>
              <div className=" absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
          </div>
          <div>2</div>
        </div>
      </div>
    </section>
  );
};

export default Work;
