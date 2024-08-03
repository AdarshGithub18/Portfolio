import React from 'react';
import MyIntro from '../components/MyIntro';
import ProjectCards from '../components/ProjectCards';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
const Home = () => {
  return (
    <>
      <motion.section
        variants={fadeIn('up', 0.5)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: true, amount: 0.7 }}
      >
        <div className="mt-6 md:mt-[50px]">
          <MyIntro />
        </div>
        <div>
          <ProjectCards />
        </div>
      </motion.section>
    </>
  );
};

export default Home;
