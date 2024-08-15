import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/A.png';
import logo2 from '../assets/A2.png';

// motion
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

// icons
import { IoSunnyOutline } from 'react-icons/io5';
import { PiMoonLight } from 'react-icons/pi';
import { RiMenu3Fill } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';

const Header = ({ theme, setTheme, handleTheme }) => {
  // toggle for navigation
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }

  function closeMenu() {
    setToggle(false);
  }

  const navLinks = [
    { title: ' ', to: '/' },
    { title: 'About', to: '/about' },
    { title: 'Projects', to: '/projects' },
    { title: 'Contact', to: '/contact' },
  ];

  return (
    <header className="">
      <nav className=" relative  max-w-[800px] flex justify-between items-center gap-3 py-3 ">
        <NavLink to={'/'} className=" w-14 ">
          <img
            src={theme === 'dark' ? logo2 : logo}
            alt="nav-logo"
            onClick={closeMenu}
          />
        </NavLink>
        <ul className="navlinks  hidden text-gray-600 md:flex gap-6   ">
          {navLinks.map((link, idx) => {
            return (
              <NavLink
                className={
                  'hover:bg-gray-100 dark:text-gray-300 hover:text-black rounded-sm  dark:hover:bg-neutral-900 px-2'
                }
                key={idx}
                to={link.to}
              >
                {link.title}
              </NavLink>
            );
          })}
        </ul>
        <div className="flex items-center gap-3 text-gray-600">
          <div className="themeBtn flex items-center  ">
            <button
              className="text-3xl  hover:text-black dark:text-gray-300 "
              onClick={handleTheme}
            >
              {theme === 'light' ? <PiMoonLight /> : <IoSunnyOutline />}
            </button>
          </div>

          <div
            className="toggleMenus  md:hidden text-3xl z-10 "
            onClick={handleToggle}
          >
            <button className="hover:text-black dark:text-gray-300">
              {toggle ? <AiOutlineClose /> : <RiMenu3Fill />}
            </button>
          </div>
        </div>

        {/* mobile menu */}

        <motion.ul
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          animate={'show'}
          viewport={{ once: true, amount: 0.3 }}
          className={`${toggle ? 'md:hidden opacity-100' : ' hidden'}
        flex flex-col bg-white dark:bg-black dark:text-gray-300 absolute right-0 z-10 w-40 top-16 gap-2 origin-top-right overflow-auto rounded-xl p-2 text-base shadow-md transition-opacity `}
        >
          {navLinks.map((link, idx) => {
            return (
              <NavLink
                className={
                  'hover:bg-gray-100 hover:text-black rounded-sm px-1  '
                }
                key={idx}
                to={link.to}
              >
                {link.title}
              </NavLink>
            );
          })}
        </motion.ul>
      </nav>
    </header>
  );
};

export default Header;
