import React from 'react';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';

function Splash() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start h-screen m-auto mt-20">
        <div className="md:w-[13rem]  max-sm:hidden relative mr-12">
          <Image
            alt="Will Vernon"
            height={176}
            width={176}
            src="/avatar.jpg"
            sizes="30vw"
            priority
            className="rounded-full filter  md:h-[12rem] md:w-[15rem]"
          />
        </div>
        <div className="flex flex-col ">
          <h1 className="font-bold  text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
            Hi! I&apos;m {''}
            <br /> <span className="text-[#e64c33]">Will Vernon</span>
          </h1>
          <h2 className="text-gray-700 dark:text-gray-200 font-mono h-[3rem]">
            Front End Developer & Designer{' '}
            {/* <span className="font-semibold">Company</span> */}
          </h2>
          <Typewriter
            options={{
              strings: [
                'Welcome!',
                'Learn about me under the About-Tab',
                'Checkout my Dashboard for projects',
                'Find cool & helpful snippets',
                'This is Built with Next.js & Sanity',
                'I love to code.'
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 10,
              cursor: '<',
              delay: 100
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Splash;
