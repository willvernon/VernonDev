import Image from 'next/image';
import React from 'react';
import MeMoji from '../../public/avatar.jpg';
import Computer from '../../public/static/computer.png';
import Link from 'next/link';

function AboutMeDB() {
  return (
    <div className="grid grid-cols-8 grid-rows-3 w-full h-full my-12 bg-[#191919] rounded-2xl">
      {/* About Me Box */}
      <div className="row-start-1 row-span-2 col-start-1 col-span-4 m-1 rounded-xl bg-white text-center">
        <div className="w-auto h-44 bg-white mt-32  border-b border-slate-500 text-center">
          {' '}
          <p className="text-slate-500 font-mono text-center pt-4 font-black text-3xl tracking-widest">
            About Me
          </p>
        </div>
        <div className=" text-black font-bold  ">
          <p className='p-3 m-auto'>Coder-Designer-Tech-Sports</p>
        </div>
      </div>
      {/* Computer Image Box */}
      <div className="row-start-1 row-span-1 col-start-5 col-span-2 m-1 rounded-xl bg-transparent h-25 w-25 text-center">
        <Image
          src={Computer}
          alt="Box 7"
          layout="contain"
          className="rounded-xl opacity-80"
        />
      </div>
      {/* Mobile Mini Nav */}
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
      {/* Tilted Blocks My Projects */}
      <div className="row-start-2 row-span-1 col-start-5 col-span-2 m-1 rounded-xl bg-transparent h-25 w-25 text-center">
        <div className="w-auto h-14 bg-orange-400 rounded-xl text-left pl-3 pt-3 font-mono text-xs text-slate-700 font-black">
          <Link
            href="/blog"
            className="flex items-center mt-1 text-slate-800  rounded-lg hover:text-gray-800  transition-all h-6"
          >
            <>
              {'My'}
              <br />
              {'Projects'}
              <div className="ml-7 mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 ml-1"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                  />
                </svg>
              </div>
            </>
          </Link>
        </div>
        <div className="w-auto h-14 bg-white rounded-xl rotate-12 -translate-x-2 shadow-sm shadow-black text-center">
          {' '}
          <p className="text-slate-500 font-mono text-center pt-4 font-black text-lg tracking-widest">
            VernonDev
          </p>
        </div>
      </div>
      {/* Box 5 */}
      <div className="row-start-2 row-span-1 col-start-7 col-span-2 m-1 rounded-xl bg-white h-25 w-25 text-center">
        Box 5
      </div>
      {/* Box 6 */}
      <div className="row-start-3 row-span-1 col-start-1 col-span-2 m-1 rounded-xl bg-transparent h-25 w-25 text-center">
        Box 6
      </div>
      {/* MeMoji Green */}
      <div className="row-start-3 row-span-1 col-start-3 col-span-2 m-1 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-800 h-25 w-25 text-center">
        <Image
          src={MeMoji}
          alt="Box 7"
          height={200}
          width={200}
          className="m-auto h-full object-center py-5"
        />
      </div>
      {/* Box 8 */}
      <div className="row-start-3 row-span-1 col-start-5 col-span-4 m-1 rounded-xl bg-white h-25 w-25 text-left">
        <div className="flex text-black m-3 text-xs">
          <ul className="p-2">
            <h2 className="text-lg pb-2">Links</h2>
            {/* <li>
                Twitter: <a href="https://twitter.com/">@---</a>
              </li> */}
            <li className="py-1">
              GitHub: <a href="https://github.com/willvernon">@willvernon</a>
            </li>
            <li className="py-1">
              Website: <Link href="https://vernondev.com">vernondev.com</Link>
            </li>
            <li className="py-1">
              LinkedIn:{' '}
              <a href="https://www.linkedin.com/in/wmvernon/">/wmvernon</a>
            </li>
            <li className="py-1">
              ENS:{' '}
              <a href="https://app.ens.domains/name/vernondev.eth/details">
                Vernnondev.eth
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutMeDB;
