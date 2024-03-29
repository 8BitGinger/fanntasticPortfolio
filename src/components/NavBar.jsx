import React, { useState } from 'react';

import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquareText } from 'react-icons/bs';
import { Link, ActiveLink } from 'react-scroll';
// import { ActiveLink } from 'react-scroll/modules/mixins/scroller';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');

  return (
    <nav className="fixed top-2 lg:top-2 overflow-hidden z-50 w-full">
      <div className="container mx-auto md:*:w-auto">
        <nav className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-white/50 items-center lg:gap-x-8">
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-150}
            onClick={setActiveLink}
            className="cursor-pointer navLink w-[60px] h-[60px] flex items-center justify-center"
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-50}
            onClick={setActiveLink}
            className="cursor-pointer text-center navLink w-[60px] h-[60px] flex items-center justify-center"
          >
            <BiUser />
          </Link>
          <Link
            to="skills"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-40}
            onClick={setActiveLink}
            className="cursor-pointer navLink w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsClipboardData />
          </Link>
          <Link
            to="work"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-190}
            onClick={setActiveLink}
            className="cursor-pointer navLink w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsBriefcase />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-100}
            onClick={setActiveLink}
            className="cursor-pointer navLink w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsChatSquareText />
          </Link>
        </nav>
      </div>
    </nav>
  );
};

export default NavBar;
