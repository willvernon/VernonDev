import React from 'react';
import FadeIn from 'react-fade-in';
import Lottie from 'react-lottie';
import ReactLoading from 'react-loading';
import * as Astro from '../public/Astro.json';
import * as Coffee from '../public/Coffee.json';
import LoadingSpinner from './LoadingSpinner';

import Image from 'next/image';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';

import VideoCard from '../components/ToolCard';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Coffee.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: undefined,
      done: undefined
    };
  }
  componentDidMount() {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
          this.setState({ loading: true });
          setTimeout(() => {
            this.setState({ done: true });
          }, 1000);
        });
    }, 1200);
  }
  render() {
    return (
      <div>
        {!this.state.done ? (
          <div class="flex justify-center items-center h-screen fixed left-0 right-0 bottom-0 w-full z-50 overflow-hidden">
            <span class="visually-hidden">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <FadeIn>
                <Lottie options={defaultOptions} height="50%" width="50%" />
              </FadeIn>
            </span>
          </div>
        ) : (
          <Container className="font-mono">
            <div className="flex flex-col mt-6 justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto md:pb-16">
              <div className="flex flex-col sm:flex-row items-start">
                <div className="flex flex-col md:pr-4 md:mr-16">
                  <h1 className="font-bold  text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                    Hi! I&apos;m {''}
                    <br /> <span className="text-[#e64c33]">Will Vernon</span>
                  </h1>
                  <h2 className="text-gray-700 dark:text-gray-200 font-mono h-[3rem]">
                    Front End Developer & Designer -{' '}
                    <span className="font-semibold">Company</span>
                  </h2>

                  <div className="h-[9rem] text-gray-600 dark:text-gray-400 md:mb-16 mt-4">
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
                <div className="md:w-[13rem]  invisible sm:visible relative mb-8 sm:mb-0 mr-auto">
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
              </div>

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

              <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-40 text-black dark:text-white">
                My Favorite Developer Tools
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                What i use in the day-to-day organizing and creating Ideas,
                Designs, Code, and Notes. The best productivity & tools can take
                a project from good to great.
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
                href="/"
                className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
              >
                All Tools
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
          </Container>
        )}
      </div>
    );
  }
}
