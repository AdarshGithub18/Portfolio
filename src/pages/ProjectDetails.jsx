import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      ProjectDetails
      <button
        className="bg-gray-700 p-3 text-white"
        onClick={() => navigate(-1)}
      >
        Go to previous page
      </button>
    </div>
  );
};

export default ProjectDetails;
