import Image from 'next/image';
import React from 'react';
import netflixImg from '../public/assets/projects/netflix.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const netflix = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={netflixImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Gerlcht Restaurant UI/UX</h2>
          <h3>React JS / Bootstrap / Tailwind CSS</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          The UI/UX project Gericht_Restaurant is a cutting-edge web application that is designed to showcase the latest advancements in modern web development. At its core, the project aims to provide users with an immersive and intuitive experience when browsing and ordering from a restaurants menu.
          
          One of the standout features of Gericht_Restaurant is its clean and modern user interface, which is designed to be both visually appealing and easy to navigate. The application makes use of advanced design principles, such as a minimalist layout and thoughtful color scheme, to create an aesthetically pleasing experience for users.
          
          In addition to its design, Gericht_Restaurant also includes a range of features to help users order from a restaurants menu more efficiently. For example, the application includes an intuitive menu search functionality, which enables users to easily find the dishes they are looking for. Users can also customize their orders and view their order history, providing a seamless and personalized experience.
          
          Overall, the Gericht_Restaurant project is an exceptional example of modern web development practices, incorporating cutting-edge design elements and innovative features to provide users with an immersive and intuitive dining experience. The project is an excellent resource for developers looking to learn more about web design and development in the context of a real-world application.
          </p>
          <a
            href='https://github.com/aftab515/Projects-For-Portfolio/tree/master/gericht_restaurant'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://gerlcht-restaurant.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind CSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Routing
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> API Integration
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default netflix;
