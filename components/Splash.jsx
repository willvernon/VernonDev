import React from 'react';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import BigText from './BigText';

function Splash() {
  return (
    <div className="flex flex-col sm:flex-row items-start m-auto ">
      <div className="md:w-[13rem]  max-sm:hidden relative mr-12">
        <Image
          alt="Will Vernon"
          height={176}
          width={176}
          src="/avatar.jpg"
          sizes="30vw"
          priority
          className="rounded-full "
        />
      </div>
      <div className="flex flex-col ">
        <BigText slides={['Im Will', 'Vernon', '']} />
      </div>
    </div>
  );
}

export default Splash;
