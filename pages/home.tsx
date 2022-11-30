import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

import PageContainer from '../components/PageContainer';
import BlogPostCard from '../components/BlogPostCard';

import VideoCard from '../components/ToolCard';
import Splash from 'components/Splash';

export default function Home() {
  return (
    <Suspense fallback={null}>
      <PageContainer className="">
        <div className="flex flex-col mt-6  justify-center items-start max-w-2xl border-gray-200 dark:border-slate-700 mx-auto md:pb-16 ">
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            Featured Posts
          </h3>
          <div className="flex gap-6 flex-col md:flex-row">
            <BlogPostCard
              title="What are the best security practices for a very online future."
              slug="security-standards-for-the-digital-age"
              gradient="from-[#feb4c8] to-[#818CF8]"
            />
            <BlogPostCard
              title="Working smarter not harder, a Productivity Stack for creating the Second Brain."
              slug="productivity-stack"
              gradient="from-[#946ee7] via-[#3B82F6] to-[#33aaea]"
            />
            <BlogPostCard
              title="Working with implementing CMS like Sanity inside of React & Next.JS."
              slug="content-management-system"
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
        </div>
      </PageContainer>
    </Suspense>
  );
}
