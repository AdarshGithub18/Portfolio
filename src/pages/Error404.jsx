import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error404 = () => {
  const naviagte = useNavigate();
  return (
    <>
      <div className="mx-auto max-w-[700px] px-6 pb-24 pt-16 md:pb-44 md:pt-20">
        <div className="flex flex-col gap-4 ">
          <h1 className="text-black text-3xl font-bold">404</h1>
          <p className="text-gray-600 max-w-sm">
            Uh oh! This page does not exist. Maybe you clicked an old link or
            misspelled the URL. <br /> Please try again…
          </p>
          <button
            className="underline p-2 mt-6 w-fit rounded-md bg-gray-100"
            onClick={() => naviagte('/')}
          >
            Go To Home
          </button>
        </div>
      </div>
    </>
  );
};

export default Error404;
