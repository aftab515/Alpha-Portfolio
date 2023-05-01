import Image from 'next/image';
import React from 'react';
import twitchImg from '../public/assets/projects/twitch.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const twitch = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={twitchImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Metaverses UI</h2>
          <h3>Next JS / Framer Motion / Tailwind CSS / React</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          The Metaverses UI/UX project is an innovative web application that showcases the latest advancements in virtual reality and immersive experiences. At its core, the project aims to provide users with a unique and engaging way to explore and interact with virtual worlds.
          
          One of the standout features of Metaverses is its cutting-edge design and user interface. The application makes use of advanced design principles, such as 3D modeling, dynamic lighting, and realistic textures, to create an immersive and visually stunning experience for users. The interface is designed to be intuitive and easy to navigate, allowing users to quickly and easily move between different virtual environments.
          
          In addition to its design, Metaverses also includes a range of features to enhance the user experience. For example, the application incorporates advanced physics engines, allowing users to interact with virtual objects and environments in a realistic way. Users can also customize their avatars and socialize with other users, creating a dynamic and engaging community.
          
          Metaverses also incorporates advanced security measures to protect users sensitive information and prevent unauthorized access. This includes advanced encryption techniques and multi-factor authentication, ensuring that users can explore virtual worlds with confidence.
          
          Overall, the Metaverses UI/UX project is an exceptional example of the latest advancements in virtual reality and immersive experiences. The project incorporates cutting-edge design elements and innovative features to provide users with a unique and engaging way to explore and interact with virtual worlds. The project is an excellent resource for developers looking to learn more about virtual reality and immersive experiences in the context of a real-world application.
          </p>
          <a
            href='https://metaverses-aftab515.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </a>
          <a
            href='https://github.com/aftab515/Projects-For-Portfolio/tree/master/metaverses'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Code</button>
          </a>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Next.JS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind CSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Next Auth
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Github Auth
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> API Integration
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React JS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Framer Motion
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

export default twitch;
