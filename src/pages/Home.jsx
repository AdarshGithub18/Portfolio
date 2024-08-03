import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { RxExternalLink } from 'react-icons/rx';
import image from '../assets/projectsImages/pp.png';

//icons

const Home = () => {
  const projects = [
    {
      title: 'Movie vault',
      description:
        'Built a React movie app with real-time data and persistent management.',
      image: image,
      github: 'https://github.com/AdarshGithub18/Movie-Vault',
      live: 'https://movie-vault-byadarsh.netlify.app/',
    },
    {
      title: 'Mega Muscle',
      description:
        'Built a React movie app with real-time data and persistent management.',
      image: image,
      github: 'https://github.com/AdarshGithub18/Movie-Vault',
      live: 'https://movie-vault-byadarsh.netlify.app/',
    },
    {
      title: 'Movie vault',
      description:
        'Built a React movie app with real-time data and persistent management.',
      image: image,
      github: 'https://github.com/AdarshGithub18/Movie-Vault',
      live: 'https://movie-vault-byadarsh.netlify.app/',
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
      link: 'https://drive.google.com/file/d/1z0oHghvIRdn-2CoPNVlV0qL8ijGkjWu7/view?usp=drive_link',
    },
  ];

  return (
    <>
      <motion.section
        variants={fadeIn('up', 0.5)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: true, amount: 0.7 }}
      >
        <div className="mt-6 md:mt-[50px]">
          <div className="max-w-[800px] flex flex-col gap-8  ">
            <h1 className="text-3xl text-gray-700 font-semibold transition-opacity duration-300">
              Hey, Adarsh here!
            </h1>
            <p className="max-w-lg text-gray-600 text-base">
              I am a frontend developer who builds for the web with a design
              oriented approach. I focus on creating visually appealing and
              intuitive user interfaces that enhance the user experience.
            </p>
            <div className="flex gap-2 text-gray-600 items-center">
              {externalLinks.map((link, idx) => {
                return (
                  <>
                    <a
                      key={idx}
                      className="hover:text-black rounded p-1 hover:bg-gray-50 flex items-center gap-1"
                      target="_blank"
                      href={link.link}
                    >
                      {link.title}
                      <span>
                        <RxExternalLink />
                      </span>
                    </a>
                  </>
                );
              })}
            </div>
          </div>
        </div>

        {/* Latest Projects section */}
        <section className="md:mt-10">
          <h4 className="text-gray-600 mt-4 mb-3  ml-1">Latest Projects</h4>
          <div className="card-container grid sm:grid-cols-1  md:grid-cols-2 gap- text-gray-600 ">
            {projects.map((project, idx) => {
              return (
                <>
                  <div className="inline-block md:max-w-[300px] f">
                    <div
                      key={idx}
                      className={`flex flex-col gap-3 p-2 cursor-pointer mt-2 md:mt-3 
                    }
                  `}
                    >
                      <div className="img">
                        <img className="w-fit" src={project.image} alt="" />
                      </div>
                      <h1 className="text-slate-950 font-semibold">
                        {project.title}
                      </h1>
                      <p className="text-sm">{project.description}</p>
                      <div className="card-btns flex gap-4">
                        <a
                          href={project.github}
                          className="flex gap-1 items-center  hover:text-black hover:bg-gray-200 rounded p-1"
                          target="_blank"
                        >
                          GitHub <RxExternalLink />
                        </a>
                        <a
                          href={project.live}
                          className="flex gap-1 items-center hover:text-black hover:bg-gray-200 rounded p-[3px]"
                          target="_blank"
                        >
                          Visit Project
                          <RxExternalLink />
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </motion.section>
    </>
  );
};

export default Home;
