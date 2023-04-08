import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import NextLink from 'next/link';
import cn from 'classnames';
import Footer from 'components/Footer';
import MobileMenu from 'components/MobileMenu';

import { MoonIcon } from './Theme/Moon';
import { SunIcon } from './Theme/Sun';

function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink
      href={href}
      className={cn(
        isActive
          ? 'font-semibold text-gray-800 dark:text-gray-200'
          : 'font-normal text-gray-600 dark:text-gray-400',
        'hidden rounded-lg p-1 transition-all hover:bg-gray-200 dark:hover:bg-gray-800 sm:px-3 sm:py-2 md:inline-block'
      )}
    >
      <span className="capsize">{text}</span>
    </NextLink>
  );
}

export default function PageContainer(props) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Will Vernon – Developer, Designer, creator.',
    description: `Front-end developer, Designer, Apple Fan.`,
    image: '/',
    type: 'website',
    ...customMeta
  };

  return (
    <div className="bg-gray-50 text-black dark:bg-gray-900 dark:text-white ">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://vernondev.com${router.asPath}`}
        />
        <link rel="canonical" href={`https://vernondev.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Will Vernon" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <div className="flex flex-col justify-center px-8 ">
        <nav className="relative z-10 mx-auto flex w-full max-w-2xl items-center justify-between border-gray-200 bg-transparent bg-opacity-60 pt-8 pb-8  font-mono text-gray-900 dark:border-gray-700 dark:text-gray-100 sm:pb-16">
          <div className="ml-[-0.60rem] ">
            <MobileMenu />
            <NavItem href="/" text="Home" />
            <NavItem href="/about" text="About" />
            <NavItem href="/projects" text="Projects" />
            <NavItem href="/blog" text="Blog" />
            <NavItem href="/snippets" text="Snippets" />
          </div>

          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-200 pt-[0.3rem] pl-[0.3rem] ring-gray-300  transition-all hover:ring-2  dark:bg-[#4273d52c] "
            onClick={() =>
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="h-5 w-5 text-gray-800 dark:text-gray-200"
              >
                {resolvedTheme === 'dark' ? <MoonIcon /> : <SunIcon />}
              </svg>
            )}
          </button>
        </nav>
      </div>
      <main
        id="skip"
        className="flex flex-col justify-center bg-gray-50 px-8 font-mono dark:bg-gray-900"
      >
        {children}
        <Footer />
      </main>
    </div>
  );
}
