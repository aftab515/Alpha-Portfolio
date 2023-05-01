import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Aftab Sadiq | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='../public/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Aftab Sadiq</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/aftab-sadiq-alpha0009/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/aftab515'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> RESTAPI
            <span className='px-2'>|</span> MongoDB
            <span className='px-2'>|</span> Node.js
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            NETIXSOL PVT LTD
            </span>
            <span className='px-2'>|</span>Contract, FSD
          </p>
          <p className='py-1 italic'>Front End Web Developer & Web Master (DEC 2021 - OCT 2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              GEMICA CLOUD
            </span>
            <span className='px-2'>|</span>Internship, FSD
          </p>
          <p className='py-1 italic'>Front End Web Developer, Practice (JUN 2021 - AUG 2021)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Created site layout and user interface using HTML/CSS/JS.
            </li>
            <li>
            I created websites UIs and assisted Backend dev. 
            </li>
            <li>
            Gathered CRs and consulted with them while working in Agile environment.
            </li>
          </ul>
        </div>

        {/*  
      <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5>
      
         Experience 
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Name of city, Abb of city</span>
            <span className='px-2'>|</span>city, abb of city
          </p>
          <p className='py-1 italic'>Position Title (Date)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              
            </li>
            <li>
             
            </li>
            <li>
              
            </li>
            <li>
             
            </li>
            <li>
              
            </li>
          </ul>
        </div>
*/}
      </div>
    </>
  );
};

export default resume;
