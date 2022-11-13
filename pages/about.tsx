import Link from 'next/link';
import Image from 'next/image';
import AboutMeDB from 'components/About/AboutMeDB';
import Uses from './uses';

import Container from 'components/Container';
import avatar from '../public/MeMoji-Mac.png';
import avatarBW from 'public/avatar.jpg';
import resume from 'public/static/Resume.png';

export default function About() {
  return (
    <Container title="About – Will Vernon">
      <div className="flex flex-col justify-center items-start max-w-4xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <AboutMeDB />
        <div className="mb-8 prose dark:prose-dark leading-6">
          <div className="flex">
            <ul>
              <h2>Links</h2>
              {/* <li>
                Twitter: <a href="https://twitter.com/">@---</a>
              </li> */}
              <li>
                GitHub: <a href="https://github.com/willvernon">@willvernon</a>
              </li>
              <li>
                Website:{' '}
                <Link href="https://vernondev.com">https://vernondev.com</Link>
              </li>
              <li>
                LinkedIn:{' '}
                <a href="https://www.linkedin.com/in/wmvernon/">
                  https://www.linkedin.com/in/wmvernon
                </a>
              </li>
            </ul>
            <div className=" -mr-12 space-x-8">
              <a href="/avatar.jpg">
                <Image
                  alt="MeMoji-Mac"
                  width={400}
                  quality={100}
                  src={avatar}
                  className="rounded-md "
                />
              </a>
            </div>
          </div>
          <div className="w-[100%] h-[55rem] my-[5rem] rounded-3xl relative">
            <Image
              className="absolute z-1 rounded-3xl"
              layout="fill"
              objectFit="cover"
              src={resume}
              alt="/"
            />
          </div>
        </div>
        <br />
        <Uses />
      </div>
    </Container>
  );
}
