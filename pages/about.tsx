import Link from 'next/link';
import Image from 'next/image';
import AboutMeDB from 'components/AboutMeDB';

import Container from 'components/PageContainer';
import avatar from '../public/MeMoji-Mac.png';
import avatarBW from 'public/avatar.jpg';
import resume from 'public/static/Resume.png';
import MyGear from 'components/MyGear';

export default function About() {
  return (
    <Container title="About – Will Vernon">
      <div className="import avatar from '../public/MeMoji-Mac.png';">
        <AboutMeDB />
        <div className="mb-8 prose dark:prose-dark leading-6 md:hidden">
          <h1 className="text-black dark:text-white">About Me</h1>
          <div className="sm:hidden">
            <Image
              alt="MeMoji-Mac"
              width={300}
              quality={100}
              src={avatar}
              className="rounded-md "
            />
          </div>
          <div className="flex">
            <ul>
              <h2>Links</h2>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                GitHub: <a href="https://github.com/willvernon">@willvernon</a>
              </li>
              <li>
                Website: <Link href="https://vernondev.com">vernondev.com</Link>
              </li>
              <li>
                LinkedIn:{' '}
                <a href="https://www.linkedin.com/in/wmvernon/">wmvernon</a>
              </li>
            </ul>
            <div className="max-sm:hidden">
              <Image
                alt="MeMoji-Mac"
                width={300}
                quality={100}
                src={avatar}
                className="rounded-md "
              />
            </div>
          </div>
        </div>
        <br />
        <MyGear />
      </div>
    </Container>
  );
}
