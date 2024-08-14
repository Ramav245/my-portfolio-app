'use client';
import React, { useState } from 'react';
import { useTypewriter, Cursor} from 'react-simple-typewriter'
import Image from 'next/image';
import ProjectsSection from './ProjectsSection';
const HeroSection = () => {
    const [bar, setBar] = useState(true);
    const [dot, setDot] = useState(false);
  
    const handleDone = () => {
      setTimeout(() => {
        setBar(false);
      }, 2000);
      setTimeout(() => {
        setDot('.');
      }, 2500);
    };
  
    const [text] = useTypewriter({
      words: ['UI/UX Designer', 'Game Developer', 'Front End Developer'],
      loop: 1,
      onLoopDone: handleDone,
    });
  
  return (
    <section>
    <div className='flex flex-row min-h-screen justify-around place-items-start'>

        <div className="py-24 text-left">
          <h1 className='text-white font-extrabold text-6xl'>Hi, I'm Rama</h1>
          <h2 className='text-white font-extralight text-4xl'>
            <span>{text}</span>
            {bar && <Cursor cursorColor={'white'} />}
            {dot && dot}
          </h2>
          <button class="btn btn-semi-transparent btn-glow">
          <a href="/RamaResume.pdf" download="RamaResume">Download CV</a>
            </button>
        </div>
        <div className="bg-slate-300 rounded-full">
          <Image className="rounded-full" src="/rpm.png" width={300} height={300} />
        </div>

  
    </div>

    <div>
      <ProjectsSection/>
    </div>
</section>
  )


}

export default HeroSection