import Image from 'next/image';
import React from 'react';
import MeMoji from '../../public/avatar.jpg';
import Computer from '../../public/static/computer.png';
import Link from 'next/link';

function AboutMeDB() {
  return (
    <div className="grid grid-cols-8 grid-rows-3 w-full h-full bg-[#191919] rounded-2xl">
      <div className="row-start-1 row-span-2 col-start-1 col-span-4 m-1 rounded-xl bg-white text-center">
        <h1 className="text-black">About Me</h1>
      </div>
      <div className="row-start-1 row-span-1 col-start-5 col-span-2 m-1 rounded-xl bg-transparent h-25 w-25 text-center">
        <Image
          src={Computer}
          alt="Box 7"
          layout="contain"
          className="rounded-xl opacity-80"
        />
      </div>
      <div className="row-start-1 row-span-1 col-start-7 col-span-2 m-1 rounded-xl bg-transparent h-25 w-25 text-center">
        <ul className="flex flex-col absolute py-10">
          <li
            className="text-gray-100 text-sm font-semibold pl-3"
            style={{ transitionDelay: '175ms' }}
          >
            <Link href="#Resume" className="flex w-auto pb-4">
              Resume
            </Link>
          </li>
          <li
            className="text-gray-100 text-sm font-semibold pl-3"
            style={{ transitionDelay: '200ms' }}
          >
            <Link href="#MyGear" className="flex w-auto pb-4">
              My Gear
            </Link>
          </li>
          <li
            className="text-gray-100 text-sm font-semibold pl-3"
            style={{ transitionDelay: '250ms' }}
          >
            <Link href="/dashboard" className="flex w-auto pb-4">
              Projects
            </Link>
          </li>
          <li
            className="text-gray-100 text-sm font-semibold pl-3"
            style={{ transitionDelay: '150ms' }}
          >
            <Link href="/contact" className="flex w-auto pb-4">
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
      <div className="row-start-2 row-span-1 col-start-5 col-span-2 m-1 rounded-xl bg-transparent h-25 w-25 text-center">
        <div className="w-auto h-14 bg-orange-400 rounded-xl text-left pl-20 pt-3 font-mono text-xs text-slate-700 font-black"><p>My <br /> Projects</p></div>
        <div className="w-auto h-14 bg-white rounded-xl rotate-12 -translate-x-2 shadow-sm shadow-black text-center"> <p className='text-slate-500 font-mono text-center pt-4 font-black text-lg tracking-widest'>VernonDev</p></div>
        <div></div>
      </div>
      <div className="row-start-2 row-span-1 col-start-7 col-span-2 m-1 rounded-xl bg-white h-25 w-25 text-center">
        Box 5
      </div>
      <div className="row-start-3 row-span-1 col-start-1 col-span-2 m-1 rounded-xl bg-transparent h-25 w-25 text-center">
        Box 6
      </div>
      <div className="row-start-3 row-span-1 col-start-3 col-span-2 m-1 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-800 h-25 w-25 text-center">
        <Image
          src={MeMoji}
          alt="Box 7"
          height={200}
          width={200}
          className="m-auto h-full object-center py-5"
        />
      </div>
      <div className="row-start-3 row-span-1 col-start-5 col-span-4 m-1 rounded-xl bg-white h-25 w-25 text-center">
        Box 8
      </div>
    </div>
  );
}

export default AboutMeDB;
