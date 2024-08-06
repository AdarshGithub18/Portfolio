import React, { useRef, useEffect } from 'react';
// email.js
import emailjs, { send } from '@emailjs/browser';
// icons
import { FaLinkedinIn, FaEnvelope, FaTwitter, FaGithub } from 'react-icons/fa';
// toast
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <section className=" mt-6 md:mt-12 mx-auto  max-w-[500px] ">
        <h1 className="text-gray-700 text-2xl md:text-3xl font-semibold ">
          Get in touch{' '}
        </h1>
        <p className=" my-8 text-gray-600 sm:text-sm">
          I'd love to hear from you! Whether you have a question or just want to
          say hi, feel free to drop a message.
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-4 justify-center mt-12 md:mt-14  "
        >
          <input
            type="text"
            required
            name="user_name"
            placeholder="Enter your name..."
            className="p-3 outline-none bg-gray-50 rounded-md text-gray-700 mb-2 text-sm"
          />
          <input
            type="email"
            required
            name="user_email"
            placeholder="Enter your email..."
            className="outline-none p-3 bg-gray-50 rounded-md  text-gray-700 mb-2 text-sm"
          />
          <textarea
            name="message"
            id=""
            required
            placeholder="Enter your message..."
            className="outline-none p-3  bg-gray-50 rounded-md text-gray-700 mb-2 text-sm"
          ></textarea>
          <button
            type="submit"
            className="bg-gray-600 text-white p-2 font-semibold hover:bg-gray-800 rounded-md "
          >
            Send
          </button>
        </form>
        <div className="links flex text-gray-600 text-2xl md:text-3xl gap-4 mt-14 ">
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
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Contact;
