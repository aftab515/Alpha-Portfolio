import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import gpt3Img from '../public/assets/projects/gpt3.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#68d8e0]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Hoo Bank UI/UX'
            backgroundImg={propertyImg}
            projectUrl='/property'
            tech='React JS / Tailwind CSS'
          />
          <ProjectItem
            title='GPT-3 UI/UX'
            backgroundImg={gpt3Img}
            projectUrl='/crypto'
            tech='React JS / Tailwind CSS'

          />
          <ProjectItem
            title='Gerlcht Restaurant UI/UX'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS / Bootstrap / Tailwind CSS'

          />
          <ProjectItem
            title='Metaverses UI'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Next JS / Framer Motion / Tailwind CSS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
