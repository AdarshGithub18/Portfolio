import React, { useEffect } from 'react';
import { RxExternalLink } from 'react-icons/rx';
import img from '../assets/projectsImages/Movie-vault.png';
import img2 from '../assets/projectsImages/search-countries.png';
import img3 from '../assets/projectsImages/urban-cart.png';
import { motion } from 'framer-motion';

import { fadeIn } from '../variants';
//icons

const Home = () => {
  const projects = [
    {
      title: 'Movie vault',

      description:
        'Built a React movie app with real-time data and persistent management.',
      image: img,
      github: 'https://github.com/AdarshGithub18/Movie-Vault',
      live: 'https://movie-vault-byadarsh.netlify.app/',
    },
    {
      title: 'Search Countries',
      description:
        'Built a responsive Search Countries app with React, Tailwind CSS, and REST API.',
      github: 'https://github.com/AdarshGithub18/Search-Country',
      live: 'https://countries-info-by-adarsh.vercel.app/',
      image: img2,
    },
    {
      title: 'Urban Cart',
      description:
        'Built a responsive e-commerce site with React and Tailwind CSS for seamless browsing and purchasing.',
      github: 'https://github.com/AdarshGithub18/E-commerce',
      live: 'https://urbancart-by-adarsh.vercel.app/',
      image: img3,
    },
  ];

  // changing  page title
  useEffect(() => {
    document.title = 'Adarsh Chougule';
  }, []);

  const externalLinks = [
    {
      title: 'linkedIn',
      link: 'https://www.linkedin.com/in/adarsh-chougule-2041b622b/',
    },
    { title: 'Github', link: 'https://github.com/AdarshGithub18' },
    {
      title: 'Resume',
      link: 'https://drive.google.com/file/d/1KGg4UVi4zJGpVmlw87rQPhRm3C6j7pEa/view?usp=sharing',
    },
  ];

  return (
    <>
      <section>
        <div className="mt-6 md:mt-[50px]">
          <div className="max-w-[800px] flex flex-col gap-3  ">
            <motion.h1
              variants={fadeIn('up', 0.1)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true, amount: 0.1 }}
              className="text-2xl md:text-3xl text-gray-700 dark:text-white font-semibold transition-opacity duration-300"
            >
              Hey, Adarsh here!
            </motion.h1>
            <motion.p
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true, amount: 0.2 }}
              className="max-w-lg text-gray-600 text-sm  md:text-base dark:text-gray-300"
            >
              I am a frontend developer who builds for the web with a design
              oriented approach. I focus on creating visually appealing and
              intuitive user interfaces that enhance the user experience.
            </motion.p>
            <div className="flex gap-2 text-gray-600 items-center">
              {externalLinks.map((link, idx) => {
                return (
                  <>
                    <motion.a
                      variants={fadeIn('up', 0.3)}
                      initial="hidden"
                      whileInView={'show'}
                      viewport={{ once: true, amount: 0.4 }}
                      key={idx}
                      className="hover:text-black dark:hover:bg-neutral-900  dark:text-gray-200 rounded-xl p-1 hover:bg-gray-50 flex items-center gap-1"
                      target="_blank"
                      href={link.link}
                    >
                      {link.title}
                      <span>
                        <RxExternalLink />
                      </span>
                    </motion.a>
                  </>
                );
              })}
            </div>
          </div>
        </div>

        {/* Latest Projects section */}
        <section className=" md:mt-10">
          <motion.h4
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.4 }}
            className="text-gray-600 mt-9 mb-3 dark:text-gray-200  ml-1"
          >
            Pinned Projects
          </motion.h4>
          <motion.div
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            animate={'show'}
            viewport={{ once: false, amount: 0.5 }}
            className="card-container grid sm:grid-cols-1  md:grid-cols-2 gap-1 text-gray-600 "
          >
            {projects.map((project, idx) => {
              return (
                <>
                  <div
                    key={idx}
                    className="inline-block md:max-w-[300px] hover:scale-105
                     ease-in duration-200 rounded-lg gap-4"
                  >
                    <div className="flex flex-col gap-3 p-2 cursor-pointer  dark:text-gray-200 mt-2 md:mt-3">
                      <div className="img bg-gray-50 dark:bg-neutral-900 p-3 rounded-md  overflow-hidden">
                        <img
                          className="rounded-md shadow-lg w-full h-full object-cover"
                          src={project.image}
                          alt=""
                          loading="lazy"
                        />
                      </div>
                      <h1 className="text-slate-950 dark:text-gray-100 font-semibold">
                        {project.title}
                      </h1>
                      <p className="text-sm">{project.description}</p>
                      <div className="card-btns flex gap-4">
                        <a
                          href={project.github}
                          className="flex gap-1 items-center dark:hover:text-gray-200 dark:hover:bg-neutral-800  hover:text-black hover:bg-gray-200 rounded p-1"
                          target="_blank"
                        >
                          GitHub <RxExternalLink />
                        </a>
                        <a
                          href={project.live}
                          className="flex gap-1 items-center dark:hover:text-gray-300 hover:text-black dark:hover:bg-neutral-800 hover:bg-gray-200 rounded p-[3px]"
                          target="_blank"
                        >
                          Live
                          <RxExternalLink />
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </motion.div>
        </section>
      </section>
    </>
  );
};

export default Home;
