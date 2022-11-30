import React from 'react';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import BigText from './BigText';
import splashblur from '../public/static/splash.4edddc9a.jpg';

function Splash() {
  return (
    <div>
      <div className="flex flex-col  sm:flex-row items-start m-auto ">
        
        <div className="flex flex-col ">
          <BigText slides={['Im Will', 'Vernon', '']} />
        </div>
      </div>
    </div>
  );
}

export default Splash;
