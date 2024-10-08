import React, { useEffect } from 'react';

// projects images
import img from '../assets/projectsImages/Movie-vault.png';
import img2 from '../assets/projectsImages/designboot.png';
import img3 from '../assets/projectsImages/search-countries.png';
import img4 from '../assets/projectsImages/urban-cart.png';

import { GoArrowUpRight } from 'react-icons/go';

//motion
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
const Projects = () => {
  const projects = [
    {
      name: 'Movie Watchlist App',
      description:
        'A movie watchlist app using React and Tailwind CSS with TMDb API integration.',
      github: 'https://github.com/AdarshGithub18/Movie-Vault',
      live: 'https://movie-vault-byadarsh.netlify.app/',
      image: img,
      arrow: <GoArrowUpRight />,
    },

    {
      name: 'Designboot',
      description:
        'A website for an interior design firm, created with html,css and javascript.',
      github: 'https://github.com/yourusername/interior-design-firm-website',
      live: 'https://designbootstudio.com/',
      image: img2,
      arrow: <GoArrowUpRight />,
    },
    {
      name: 'Search Countries',
      description:
        'Built a responsive Search Countries app with React, Tailwind CSS, and REST API, featuring search, filters, dark mode, and country info cards."',
      github: 'https://github.com/AdarshGithub18/Search-Country',
      live: 'https://countries-info-by-adarsh.vercel.app/',
      image: img3,
      arrow: <GoArrowUpRight />,
    },
    {
      name: 'Urban Cart',
      description:
        'Developed a responsive e-commerce website using React and Tailwind CSS, featuring a user-friendly interface for browsing and purchasing products',
      github: 'https://github.com/AdarshGithub18/E-commerce',
      live: 'https://urbancart-by-adarsh.vercel.app/',
      image: img4,
      arrow: <GoArrowUpRight />,
    },
  ];

  useEffect(() => {
    document.title = 'Projects | Adarsh Chougule';
  }, []);
  return (
    <section className=" mt-3 md:mt-4 py-5">
      <div className="headings flex flex-col gap-2">
        <motion.h1
          variants={fadeIn('up', 0.1)}
          initial="hidden"
          animate={'show'}
          viewport={{ once: true, amount: 0.1 }}
          className="text-gray-600 dark:text-gray-200 text-xl md:text-2xl font-semibold"
        >
          Projects
        </motion.h1>
        <motion.p
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate={'show'}
          viewport={{ once: true, amount: 0.2 }}
          className="text-gray-600  sm:text-balance dark:text-gray-300"
        >
          Showcasing My Journey Through Code and Creativity
        </motion.p>
      </div>

      {/* projects cards */}
      <div className=" flex items-center flex-col gap-4  mt-8 ">
        <motion.ul
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          animate={'show'}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-7 "
        >
          {projects.map((project, idx) => {
            return (
              <li key={idx}>
                <div className="py-4 flex  items-center flex-col px-2 rounded-lg relative border  dark:border-gray-600 border-gray-300 md:flex-row gap-4 md:gap-6 cursor-pointer hover:scale-105 ease-in duration-200 bg-white dark:bg-neutral-900">
                  <div className="card-img md:w-2/5 w-full select-none relative drop-shadow-sm">
                    <img
                      src={project.image}
                      className="rounded-lg"
                      alt="project-image"
                    />
                  </div>
                  <div className="project-info w-full md:w-3/5 space-y-3">
                    <div className="gap-3 flex flex-col">
                      <p className="md:max-w-[30ch]  dark:text-gray-100 text-gray-700 font-semibold">
                        {project.name}
                      </p>
                      <p className=" max-w-[450px] text-wrap dark:text-gray-300 ">
                        {project.description}
                      </p>
                      <div className="buttons flex gap-3 items-center dark:text-gray-200">
                        <a
                          href={project.github}
                          className="flex gap-2 hover:bg-gray-100  dark:hover:bg-neutral-800 px-1 rounded-md"
                        >
                          Github{' '}
                          <span className="flex items-center">
                            {project.arrow}
                          </span>
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          className="flex dark:hover:bg-neutral-800 hover:bg-gray-100 px-1 rounded-md gap-2"
                        >
                          Live{' '}
                          <span className="flex items-center">
                            {project.arrow}
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
};

export default Projects;
