import Link from 'next/link';
import Image from 'next/image';

import Container from 'components/PageContainer';
import sketch from '../../public/projects/nhash/sketch.png';
import login from '../../public/projects/nhash/login.png';
import hero from 'public/projects/dennys/hero.png';
import prototype from '../../public/projects/nhash/prototype.png';
import prototype2 from '../../public/projects/nhash/prototype-v2.png';

// import { BsFillXSquareFill } from 'react-icons';

export default function Project4() {
  return (
    <Container title="Logistics Website">
      <div className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          Denny's Marina - Boat Dealership
        </h1>
        <div className="relative h-[25rem] w-[100%]">
          <div className="absolute top-0 left-0 h-[25rem] w-[100%] " />
          <Image
            className="z-1 absolute rounded-[2rem]"
            layout="fill"
            objectFit="cover"
            src={hero}
            alt="/"
          />
        </div>
        <div className="prose mb-8 leading-6 dark:prose-dark">
          <div className="flex">
            <ul>
              <h2 className="text-[#e64c33]">Tools Used</h2>
              <li>HTML</li>
              <li>SCSS</li>
              <li>Twig</li>
              <li>Figma</li>
            </ul>
          </div>
          <h1 className="text-[#e64c33]">Project Overview</h1>
          <p>
            During my Internship i was tasked with building something intuitive
            and helpful and the CEO asked for me to build some BitCoin Miners.
            He also requested a way that he could have a web app open on his
            monitor so we can see live feedback of what the miners are doing.
            <br />
            This is how I built a prototype for the App.
          </p>
          <br />
          
          
        </div>
      </div>
    </Container>
  );
}
