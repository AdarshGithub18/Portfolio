import React, { useEffect } from 'react';

const Projects = () => {
  useEffect(() => {
    document.title = 'Projects | Adarsh Chougule';
  }, []);
  return <div className="max-w-[800px]">Projects</div>;
};

export default Projects;
