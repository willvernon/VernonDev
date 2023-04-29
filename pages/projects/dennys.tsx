import Link from 'next/link';
import Image from 'next/image';

import Container from 'components/PageContainer';
import hero from 'public/projects/dennys/hero.png';
import full from 'public/projects/dennys/full.png';

// import { BsFillXSquareFill } from 'react-icons';

export default function Project4() {
  return (
    <Container title="Dennys Marina">
      <div className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          Denny&apos;s Marina - Boat Dealership
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
            For Denny&apos;s website modern marina dealership features a
            clean, intuitive design with a focus on high-quality visuals such as
            images and videos of boats and the marina. The website has easy
            navigation with clear calls-to-action buttons for users to browse inventory,
            schedule appointments, and request information. It also
            includes a responsive design that adapts to different screen sizes,
            as well as fast loading times to ensure a seamless user experience.
            Additionally, the website has a robust CMS (content management
            system) to easily update inventory and pricing, and text throughout the website. Added with
            social media and email marketing links for effective promotion
            and lead generation.
            <br />
            This is how I built a prototype for the App.
          </p>
          <br />
          <div className="relative h-[100rem] w-[100%]">
            <div className="absolute top-0 left-0 h-[100rem] w-[100%] ">
              <Image
                className="z-1 absolute rounded-[2rem]"
                layout="fill"
                objectFit="cover"
                src={full}
                alt="/"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
