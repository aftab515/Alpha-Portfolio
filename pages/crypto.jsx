import Image from 'next/image';
import React from 'react';
import gpt3Img from '../public/assets/projects/gpt3.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const gpt3 = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={gpt3Img}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>GPT-3 UI/UX</h2>
          <h3>React JS / Tailwind</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          I build the UI/UX project GPT-3 which is comprehensive that demonstrates the use of various technologies and design principles. The project is centered around React functional components, which showcase their reusability and efficiency in creating complex UI. The file and folder structure of the application adheres to best practices, making it easier to navigate and maintain.
          
          The project also focuses on mastering fundamental CSS properties such as flex and grid, which allow for responsive and dynamic layouts. The CSS BEM model is used to ensure consistency and modularity throughout the applications styles.
          
          The application also includes soft and pleasant animations, as well as complex gradients, which enhance the user experience and create a visually appealing interface. Furthermore, the use of perfectly placed media queries ensures satisfactory responsiveness across a wide range of devices.
          
          Overall, the  GPT-3 UI/UX project is a prime example of modern web development practices, incorporating the latest technologies and design principles to create an intuitive and engaging user interface. The attention to detail and adherence to best practices make this project a valuable asset for anyone looking to improve their web development skills.
          </p>
          <a
            href='https://github.com/aftab515/Projects-For-Portfolio/tree/master/gpt3_alpha'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://gpt-alpha-aftab515.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> CSS BEM Model
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> API Integration
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Web-vitals
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

export default gpt3;
