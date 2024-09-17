import React, { useEffect } from 'react';
//my photos
import img from '../assets/my photos/about-min.png';
import img2 from '../assets/my photos/about2.png';

// icons
import { FaLinkedinIn, FaEnvelope, FaTwitter, FaGithub } from 'react-icons/fa';
import { GoArrowUpRight } from 'react-icons/go';
import { IoSchoolSharp } from 'react-icons/io5';

// skills imgs
import skills1 from '../assets/skills icons/html.svg';
import skills2 from '../assets/skills icons/css.svg';
import skills3 from '../assets/skills icons/js.svg';
import skills4 from '../assets/skills icons/react.svg';
import skills5 from '../assets/skills icons/tailwind.svg';
import skills6 from '../assets/skills icons/github.svg';

// motion
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  useEffect(() => {
    document.title = 'About | Adarsh Chougule';
  }, []);

  const skills = [
    { title: 'HTML', icon: skills1 },
    { title: 'CSS', icon: skills2 },
    { title: 'JS', icon: skills3 },
    { title: 'React', icon: skills4 },
    { title: 'Tailwind', icon: skills5 },
    { title: 'Github', icon: skills6 },
  ];

  const socialLinks = [
    {
      title: 'Email',
      icon: <FaEnvelope />,
      link: 'mailto:chouguleadarsh123@gmail.com',
      target: '_blank',
      arrow: <GoArrowUpRight />,
    },
    {
      title: 'Twitter',
      icon: <FaTwitter />,
      link: 'https://twitter.com/_adarshchougule',
      target: '_blank',
      arrow: <GoArrowUpRight />,
    },
    {
      title: 'LinkedIn',
      icon: <FaLinkedinIn />,
      link: 'https://www.linkedin.com/in/adarsh-chougule-2041b622b',
      target: '_blank',
      arrow: <GoArrowUpRight />,
    },
    {
      title: 'Github',
      icon: <FaGithub />,
      link: 'https://github.com/Adarsh18',
      target: '_blank',
      arrow: <GoArrowUpRight />,
    },
  ];

  const educationDetails = [
    {
      degree: 'Bsc-IT',
      college: 'BK Birla College Kalyan',
      year: '2021-2024',
      icon: <IoSchoolSharp />,
    },
    {
      degree: 'Secodary',
      college: 'Mahatma Gandhi College',
      year: '2019-2021',
      icon: <IoSchoolSharp />,
    },
    {
      degree: 'Primary',
      college: 'Queens Mary English School',
      year: '2009-2019',
      icon: <IoSchoolSharp />,
    },
  ];

  return (
    <>
      <section className="flex flex-col gap-16 md:gap-24 max-w-[800px] mx-auto ">
        <div className="headings">
          <motion.h1
            variants={fadeIn('up', 0.1)}
            initial="hidden"
            animate={'show'}
            viewport={{ once: true, amount: 0.1 }}
            className="text-gray-700 dark:text-gray-50 mt-6 md:mt-12 text-xl md:text-2xl font-semibold"
          >
            About Me
          </motion.h1>
          <motion.p
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate={'show'}
            viewport={{ once: true, amount: 0.2 }}
            className="text-gray-500 dark:text-gray-200 text-sm"
          >
            A glimpse into me.
          </motion.p>
        </div>

        {/* photos */}

        <div className="photo-container flex flex-wrap gap-4 ">
          <div className="flex justify-center hover:scale-105 ease-in duration-200">
            <motion.img
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              animate={'show'}
              viewport={{ once: true, amount: 0.3 }}
              loading="lazy"
              src={img}
              className="w-[80%] hidden md:block drop-shadow-md"
              alt="my-photo"
            />
            <motion.img
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              animate={'show'}
              viewport={{ once: true, amount: 0.3 }}
              src={img2}
              className="w-[80%] md:hidden drop-shadow-md block"
              alt="my-photo"
            />
          </div>
        </div>
        {/* about me */}

        <div className=" flex flex-col md:flex-row gap-2 md:gap-9 ">
          <motion.h2
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate={'show'}
            viewport={{ once: true, amount: 0.4 }}
            className="shrink-0 md:w-32 text-gray-600 dark:text-gray-300"
          >
            About
          </motion.h2>
          <div className="flex flex-col gap-6 text-gray-600 text-wrap dark:text-gray-200 ">
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate={'show'}
              viewport={{ once: true, amount: 0.4 }}
            >
              Hi, I’m Adarsh Chougule! I have a Bachelor's degree in Information
              Technology from{' '}
              <a
                href="https://www.bkbirlacollegekalyan.com"
                className="underline"
              >
                BK Birla College
              </a>
              &nbsp;and specialize in front-end development. I’m passionate
              about creating engaging, user-friendly web applications.
            </motion.p>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              animate={'show'}
              viewport={{ once: true, amount: 0.5 }}
            >
              When I'm not at my desk, I’m probably lifting weights, playing
              cricket, enjoying a game of chess, or relaxing at a local coffee
              shop
            </motion.p>
          </div>
        </div>

        {/* skills */}
        <div className=" flex flex-col md:flex-row gap-2 md:gap-9  ">
          <motion.h2
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            animate={'show'}
            viewport={{ once: true, amount: 0.5 }}
            className="shrink-0 md:w-32 text-gray-600 dark:text-gray-300"
          >
            Skills
          </motion.h2>
          <motion.div
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            animate={'show'}
            viewport={{ once: true, amount: 0.5 }}
            className="skills-container grid grid-cols-2 md:grid-cols-4 gap-8 "
          >
            {skills.map((skill, idx) => {
              return (
                <div className="px-4 py-3  flex items-center justify-center gap-3 flex-col shadow-md dark:bg-neutral-800 rounded-xl hover:scale-105 ease-in duration-200 ">
                  <img
                    loading="lazy"
                    src={skill.icon}
                    height={64}
                    width={64}
                    key={idx}
                    alt=""
                    className="rounded-md hover:scale-105 ease-in duration-100"
                  />
                  <p className="text-sm font-bold text-center dark:text-gray-300 text-gray-600 mt-auto ">
                    {skill.title}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* connect */}

        <div className=" flex flex-col md:flex-row gap-2 md:gap-9 ">
          <motion.h2
            variants={fadeIn('right', 0.6)}
            initial="hidden"
            animate={'show'}
            viewport={{ once: true, amount: 0.6 }}
            className="shrink-0 md:w-32 text-gray-600 dark:text-gray-300 "
          >
            connect
          </motion.h2>
          <motion.ul
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            animate={'show'}
            viewport={{ once: true, amount: 0.6 }}
            className=" w-full  gap-4 md:gap-2"
          >
            <li className=" grid grid-cols-1 md:grid-cols-2 gap-4 ">
              {socialLinks.map((link, idx) => {
                return (
                  <>
                    <a
                      className="w-full rounded-md p-4 bg-gray-100 dark:bg-neutral-800 flex  items-center justify-center gap-2 hover:scale-105 ease-in duration-200 "
                      href={link.link}
                      target={link.target}
                      key={idx}
                    >
                      <span className="flex w-full items-center gap-3 mx-2 text-gray-700 dark:text-gray-50 ">
                        <span className="text-xl ">{link.icon}</span>
                        {link.title}
                      </span>
                      <span className="text-xl dark:text-white">
                        {link.arrow}
                      </span>
                    </a>
                  </>
                );
              })}
            </li>
          </motion.ul>
        </div>

        {/* Education */}

        <div className=" flex flex-col  md:flex-row gap-2 md:gap-9 ">
          <motion.h2
            variants={fadeIn('right', 0.7)}
            initial="hidden"
            animate={'show'}
            viewport={{ once: true, amount: 0.7 }}
            className="shrink-0 md:w-32 text-gray-600 dark:text-gray-300"
          >
            Education
          </motion.h2>
          <div className="flex flex-col  w-full gap-8 ">
            <motion.ul
              variants={fadeIn('up', 0.8)}
              initial="hidden"
              animate={'show'}
              viewport={{ once: true, amount: 0.8 }}
              className="flex flex-col gap-8 "
            >
              <li>
                {educationDetails.map((edu, idx) => {
                  return (
                    <div
                      key={idx}
                      className="flex gap-4 w-full px-1 py-2 items-center  hover:scale-105 ease-in duration-200"
                    >
                      <div className="flex items-center gap-4 text-xl dark:text-gray-100">
                        {edu.icon}
                      </div>
                      <div className="flex flex-col gap-px">
                        <p className="text-gray-800 dark:text-gray-100">
                          {edu.college}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                          {edu.degree}
                        </p>
                      </div>
                      <time className="text-gray-600 dark:text-gray-300 ml-auto">
                        {edu.year}
                      </time>
                    </div>
                  );
                })}
              </li>
            </motion.ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
