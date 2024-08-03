import React, { useState } from 'react';
import image from '../assets/projectsImages/pp.png';

//icons
import { RxExternalLink } from 'react-icons/rx';

const ProjectCards = () => {
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
  return (
    <>
      <section className="md:mt-10">
        <h4 className="text-gray-600 mt-4 mb-3  ml-1">Pinned Projects</h4>
        <div className="card-container grid sm:grid-cols-1  md:grid-cols-2 gap- text-gray-600 ">
          {projects.map((project, idx) => {
            return (
              <>
                <div key={idx} className="inline-block md:max-w-[300px] f">
                  <div
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
    </>
  );
};

export default ProjectCards;
