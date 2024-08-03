import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/A.png';
import logo2 from '../assets/A2.png';

// icons
import { IoSunnyOutline } from 'react-icons/io5';
import { PiMoonLight } from 'react-icons/pi';
import { RiMenu3Fill } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';

const Header = ({ dark, handleTheme }) => {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }

  function closeManu() {
    setToggle(false);
  }

  const navLinks = [
    { title: ' ', to: '/' },
    { title: 'About', to: '/about' },
    { title: 'Projects', to: '/projects' },
    { title: 'Contact', to: '/contact' },
  ];

  return (
    <header className={`md:mt-4`}>
      <nav className=" relative max-w-[800px] flex justify-between items-center gap-3 py-3 ">
        <NavLink to={'/'} className=" w-14 ">
          <img src={dark ? logo2 : logo} alt="nav-logo" onClick={closeManu} />
        </NavLink>
        <ul className="navlinks hidden text-gray-600 md:flex gap-6   ">
          {navLinks.map((link, idx) => {
            return (
              <NavLink
                className={'hover:bg-gray-100 hover:text-black rounded-sm px-1'}
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
              className="text-3xl  hover:text-black "
              onClick={handleTheme}
            >
              {dark ? <IoSunnyOutline /> : <PiMoonLight />}
            </button>
          </div>

          <div
            className="mobileMenu  md:hidden text-3xl z-10 "
            onClick={handleToggle}
          >
            <button className="hover:text-black">
              {toggle ? <AiOutlineClose /> : <RiMenu3Fill />}
            </button>
          </div>
        </div>

        {/* mobile menu */}

        <ul
          className={`${toggle ? 'md:hidden opacity-100' : ' hidden'}
        flex flex-col bg-white absolute right-0 z-10 w-40 top-16 gap-2 origin-top-right overflow-auto rounded-xl p-2 text-base shadow-md transition-opacity duration-300`}
        >
          {navLinks.map((link, idx) => {
            return (
              <NavLink
                className={'hover:bg-gray-100 hover:text-black rounded-sm px-1'}
                key={idx}
                to={link.to}
              >
                {link.title}
              </NavLink>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
