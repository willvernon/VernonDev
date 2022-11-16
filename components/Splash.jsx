import React from 'react';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';


//issues with height

function Splash() {
  return (
    <div className=''>
      <div className="flex justify-center text-center  items-center m-auto w-screen h-full mt-32">
        <div className="text-2xl tracking-wider h-auto w-full text-gray-600 dark:text-gray-400 ">
          <Typewriter
            options={{
              strings: [
                'Welcome!',
                'Click the button to start',
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
      <div className="flex flex-col justify-center items-start mt-20">
        <div className="m-auto">
          <button className="bg-white p-2 rounded-xl">
            <Link href="/home"> Enter Here </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Splash;
