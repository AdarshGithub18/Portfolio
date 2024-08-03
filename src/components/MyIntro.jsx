import React from 'react';
import { RxExternalLink } from 'react-icons/rx';

const MyIntro = () => {
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
    </>
  );
};

export default MyIntro;
