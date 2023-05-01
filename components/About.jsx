import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#68d8e0]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          As a highly skilled front end developer, I have a passion for creating visually stunning and user-friendly websites and applications. With over 2 years of experience in the industry, I have a proven track record of delivering top-quality projects on time and within budget, I have a strong foundation in HTML, CSS, and JavaScript, and I am proficient in a variety of front end frameworks such as React. I also have experience working with back end technologies such as React and Node.js, allowing me to provide end-to-end solutions for my clients. I am a detail-oriented and solutions-driven individual, always striving to learn and improve my skills. I am confident in my ability to provide value to your team and help bring your projects to the next level.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
