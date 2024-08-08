import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Error404 = () => {
  useEffect(() => {
    document.title = 'Error Page Not Found ';
  }, []);
  const naviagte = useNavigate();
  return (
    <>
      <div className="mx-auto max-w-[700px] px-6 pb-24 pt-16 md:pb-44 md:pt-20 h-screen">
        <div className="flex flex-col gap-4 ">
          <h1 className="text-black text-3xl font-bold dark:text-gray-100">
            404
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-sm">
            Uh oh! This page does not exist. Maybe you clicked an old link or
            misspelled the URL. <br /> Please try again…
          </p>
          <button
            className="underline p-1 mt-6 w-fit rounded-md dark:bg-neutral-800 dark:text-gray-300 px-2 bg-gray-100"
            onClick={() => naviagte('/')}
          >
            return To Home
          </button>
        </div>
      </div>
    </>
  );
};

export default Error404;
