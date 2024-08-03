import React from 'react';
import img from '../assets/my photos/img1.jpg';
import img2 from '../assets/my photos/img2.jpg';
import img3 from '../assets/my photos/img3.jpg';

const About = () => {
  return (
    <>
      <section className="flex flex-col gap-16 md:gap-24">
        <div className="headings">
          <h1 className="text-gray-700 mt-6 md:mt-12 text-xl md:text-2xl font-semibold">
            About Me
          </h1>
          <p className="text-gray-500 text-sm">A glimpse into me.</p>
        </div>

        <div className="myphotos">
          <div class="flex gap-4">
            <div class=" w-40 h-full gap-4  flex  text-center">
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
