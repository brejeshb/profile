'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, 

  // FaPhone
} from 'react-icons/fa';
// import BearScene from './BearScene';
import Image from 'next/image'; 

const AboutMe = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const words = ['Software Developer', 'Data Analyst', 'Amateur Cook'];
  const totalWords = words.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalWords);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval); // Clear the interval when component unmounts
  }, []);

  const contactInfo = [
    { icon: <FaEnvelope className="text-2xl" />, text: 'Email', link: 'mailto:brejeshb.2023@scis.smu.edu.sg' },
    { icon: <FaGithub className="text-2xl" />, text: 'Github', link: 'https://github.com/brejeshb' },
    { icon: <FaLinkedin className="text-2xl" />, text: 'LinkedIn', link: 'https://linkedin.com/in/brejesh-bhaskaran' }
  ];

  return (
    <section className="max-w-7xl mx-auto p-8">
      {/* Hero Section */}
      <div className="relative mb-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1">
            <h1 className="text-6xl font-bold mb-6 relative">
              <span className="block text-8xl mt-2">Brejesh</span>
            </h1>
            <div className="relative h-12 overflow-hidden mt-2">
              {words.map((word, index) => (
                <span
                  key={index}
                  className={`absolute left-0 w-full font-medium text-4xl transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                  {word}
                </span>
              ))}
            </div>
            <div className="bg-main p-6 border-4 border-border shadow-light max-w-xl">
              <p className="text-xl mb-4">
                I enjoy building products and deriving actionable insights.
              </p>
              <button className="bg-white px-8 py-3 border-4 border-border font-bold shadow-light hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200">
                Let&apos;s Connect
              </button>

              {/* Contact Info */}
              <div className="mt-8 flex flex-wrap gap-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-center gap-2 bg-white p-3 border-2 border-black hover:bg-gray-50 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-1 transition-all duration-200"
                  >
                    {item.icon}
                    <span className="text-sm font-medium truncate">{item.text}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          
          <div className="flex flex-col items-center w-[40%]">
            {/* <div className=" border-4 border-border shadow-light w-[60%]">
              <div className='h-[50vh] w-[50vh]'>
                <BearScene />
              </div> */}

            <div className="border-4 border-black rounded-xl overflow-hidden" style={{ boxShadow: '8px 8px 0px 0px #000' }}>
              {/* Mac-style title bar — gallery flavour */}
              <div className="bg-[#e8e8e8] border-b-4 border-black px-4 py-3 flex items-center gap-4">
                {/* Traffic lights */}
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f57] border-2 border-black" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#febc2e] border-2 border-black" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#28c840] border-2 border-black" />
                </div>
                {/* Filename-style title */}
                <div className="flex-1 text-sm font-mono font-semibold text-gray-600 text-center pr-10">
                  brejesh_profile.jpg
                </div>
              </div>

              {/* Image content */}
              <Image
                src="/images/profilepage.jpeg"
                className="w-full h-auto object-contain block"
                alt="Profile"
              />

              {/* Caption bar at the bottom */}
              <div className="bg-[#e8e8e8] border-t-4 border-black px-4 py-3 text-sm font-mono text-gray-600 text-center">
                Information Systems &amp; Business Penultimate · Singapore Management University
              </div>
            </div>
          </div>


          </div>
        </div>
      {/* </div> */}

      
    </section>

    
  );
};

export default AboutMe;
