import React, { useRef, useEffect } from 'react';
// email.js
import emailjs, { send } from '@emailjs/browser';
// icons
import { FaLinkedinIn, FaEnvelope, FaTwitter, FaGithub } from 'react-icons/fa';
// toast
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// motion
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
const Contact = () => {
  // spcial links
  const socialLinks = [
    {
      title: 'Email',
      icon: <FaEnvelope />,
      link: 'mailto:chouguleadarsh123@gmail.com',
      target: '_self',
    },
    {
      title: 'Twitter',
      icon: <FaTwitter />,
      link: 'https://twitter.com/_adarshchougule',
      target: '_blank',
    },
    {
      title: 'LinkedIn',
      icon: <FaLinkedinIn />,
      link: 'https://www.linkedin.com/in/adarsh-chougule-2041b622b',
      target: '_blank',
    },
    {
      title: 'Github',
      icon: <FaGithub />,
      link: 'https://github.com/Adarsh18',
      target: '_blank',
    },
  ];
  // changin page title
  useEffect(() => {
    document.title = 'Contact | Adarsh Chougule';
  }, []);

  // emailjs
  const form = useRef();
  const notify = () =>
    toast.success('Message sent successfully!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
    });

  const handleError = () => {
    toast.error('Failed to send message. Please try again later.', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
    });
  };

  // function for handeling emails
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_29pv7b8', 'template_aboynt2', form.current, {
        publicKey: 'mdTccNdxx2h-0rSc9',
      })
      .then(
        () => {
          notify();
          e.target.reset();
        },
        (error) => {
          handleError();
        }
      );
  };

  return (
    <>
      <section className=" mt-6 md:mt-12 mx-auto h-screen max-w-[500px] ">
        <motion.h1
          variants={fadeIn('up', 0.1)}
          initial="hidden"
          animate={'show'}
          viewport={{ once: true, amount: 0.1 }}
          className="text-gray-700 dark:text-gray-100 text-2xl md:text-3xl font-semibold "
        >
          Get in touch{' '}
        </motion.h1>
        <motion.p
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate={'show'}
          viewport={{ once: true, amount: 0.2 }}
          className=" my-8 text-gray-600 dark:text-gray-200 sm:text-sm"
        >
          I'd love to hear from you! Whether you have a question or just want to
          say hi, feel free to drop a message.
        </motion.p>

        <motion.form
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          animate={'show'}
          viewport={{ once: true, amount: 0.3 }}
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-4 justify-center mt-12 md:mt-14  "
        >
          <input
            type="text"
            required
            name="user_name"
            placeholder="Enter your name"
            className="p-3 outline-none bg-gray-50 dark:bg-neutral-800 rounded-md dark:text-gray-100 text-gray-700 mb-2 text-sm"
          />
          <input
            type="email"
            required
            name="user_email"
            placeholder="Enter your email"
            className="outline-none p-3 bg-gray-50 rounded-md dark:text-gray-100 dark:bg-neutral-800 text-gray-700 mb-2 text-sm"
          />
          <textarea
            name="message"
            id=""
            required
            placeholder="Enter your message"
            className="outline-none p-3 dark:bg-neutral-800 dark:text-gray-100 bg-gray-50 rounded-md text-gray-700 mb-2 text-sm"
          ></textarea>
          <motion.button
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.4 }}
            type="submit"
            className="bg-gray-600 text-white p-2 dark:bg-gray-100 dark:text-gray-600 font-medium hover:bg-gray-800 rounded-md "
          >
            Send
          </motion.button>
        </motion.form>
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          animate={'show'}
          viewport={{ once: true, amount: 0.5 }}
          className="links flex text-gray-600 text-2xl dark:text-gray-300 md:text-3xl gap-4 mt-14 "
        >
          {socialLinks.map((link, idx) => {
            return (
              <>
                <div key={idx}>
                  <a href={link.link} target={link.target}>
                    <span>{link.icon}</span>
                  </a>
                </div>
              </>
            );
          })}
        </motion.div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Contact;
