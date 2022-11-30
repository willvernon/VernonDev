import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

import PageContainer from '../components/PageContainer';
import BlogPostCard from '../components/BlogPostCard';

import VideoCard from '../components/ToolCard';
import Loading from '../components/Loading';
import Splash from '../components/Splash';
import AboutMeDB from 'components/AboutMeDB';
import BigText from 'components/BigText';



export default function Home() {
  return (
    <div>
      <Suspense fallback={null}>
        <PageContainer className="">
          <div className="flex flex-col mt-6  justify-center items-start max-w-2xl border-gray-200 dark:border-slate-700 mx-auto md:pb-16 ">
            <div className="h-screen mx-auto">
              <Splash />
              {/* <BigText slides={['Welcome!', 'Im Will', 'Vernon']} /> */}
            </div>
            <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white z-10">
              Featured Posts
            </h3>
            <div className="flex gap-6 flex-col md:flex-row">
              <BlogPostCard
                title="What are the best security practices for a very online future."
                slug="/"
                gradient="from-[#feb4c8] to-[#818CF8]"
              />
              <BlogPostCard
                title="Working smarter not harder, a Productivity Stack for creating the Second Brain."
                slug="/"
                gradient="from-[#946ee7] via-[#3B82F6] to-[#33aaea]"
              />
              <BlogPostCard
                title="Working with implementing CMS like Sanity inside of React & Next.JS."
                slug="/"
                gradient="from-[#8afdea] via-[#FCA5A5] to-[#FECACA]"
              />
            </div>
            <Link
              href="/blog"
              className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
            >
              <>
                {'Read all posts'}
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
              </>
            </Link>

            <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-40 text-black dark:text-white">
              My Favorite Developer Tools
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              What i use in the day-to-day organizing and creating Ideas,
              Designs, Code, and Notes. The best productivity & tools can take a
              project from good to great.
            </p>
            <VideoCard
              index="01"
              href="https://tailwindcss.com"
              length="Tailwind"
              title="A utility-first CSS framework"
            />
            <VideoCard
              index="02"
              href="https://www.figma.com"
              length="Figma"
              title="UX Design, App Structure, Planning"
            />
            <VideoCard
              index="03"
              href="https://www.notion.so/"
              length="Notion"
              title="Work Dashboard & Data"
            />
            <VideoCard
              index="04"
              href="https://sanity.io"
              length="Sanity"
              title="The CMS I Have Been Using"
            />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="/about"
              className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
            >
              Other Tools
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
            </a>
            <span className="h-16" />
          </div>
        </PageContainer>
      </Suspense>

      {/* <Splash />
      <Loading /> */}
    </div>
  );
}
