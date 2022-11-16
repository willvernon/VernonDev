import React from 'react';
import Image from 'next/image';
import resume from '../public/static/Resume.png'

function Resume() {
  return (
    <div className="w-[100%] h-[25rem] relative">
      <div className="absolute top-0 left-0 w-[100%] h-[25rem] rounded-[2rem] ">
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={resume}
          alt="/"
        />
      </div>
    </div>
  );
}

export default Resume;
