import Link from 'next/link';
import Image from 'next/image';

import Container from 'components/PageContainer';
import hero from 'public/projects/boswells/hero.png';
import full from 'public/projects/boswells/full.png';

// import { BsFillXSquareFill } from 'react-icons';

export default function Project4() {
  return (
    <Container title="Boswells Golf">
      <div className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          Boswell&apos;s Golf - Golf Cart Dealership
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
            Boswell&apos;s asked to have a clean and modern web design with a
            white background and black text. I then added website features that
            include a prominent double layer header with a center logo and has
            mid CTA&apos;s for quick navigation. The homepage also includes
            sections for featured products, side tab brand showcase, and text
            synced to a CMS that allows the owners to adjust web text without
            requiring assistance from devs. The overall layout is organized and
            easy to navigate, with a consistent color scheme and typography
            throughout the site.
            <br />
            Below is a screenshot of the full homepage.
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
