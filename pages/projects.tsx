import Link from 'next/link';

import Container from 'components/PageContainer';

import ProjectsCard from 'components/projects/project';
import SoloCard from 'components/projects/SoloCard';
import scientia from '../public/projects/scientia.png';
import nhash from '../public/projects/NHASH.png';
import linen from '../public/projects/linen.png';

export default function Dashboard() {
  return (
    <Container
      title="Dashboard – Will Vernon"
      description="My personal dashboard, built with Next.js API routes deployed as serverless functions. "
    >
      <div className="mx-auto mb-16 flex max-w-2xl flex-col items-start justify-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          Dashboard
        </h1>
        <div className="mb-8">
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            These are only a few projects, i build about 2-3 a week. I&apos;ll
            be add more and more as i go and have time to build case studies.
            Also Check out my&nbsp;
            <Link
              href="/blog"
              className="text-gray-900 underline dark:text-gray-100"
            >
              blog series.
            </Link>
          </p>
        </div>
        <div className=" w-full">
          <ProjectsCard />
        </div>

        <h2 className="mb-4 mt-16 text-3xl font-bold tracking-tight text-black dark:text-white">
          Other Projects
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          Curious what I have worked on or currently working on? Here&apos;s
          some of my projects on Github.
        </p>
        <div className="flex-col-1 left-0 my-3 flex w-full">
          <SoloCard
            header="NHASH Display"
            link="/projects/nhash"
            tools="Built w/ HTML"
            image={nhash}
          />
        </div>
        <div className="right-0 my-3 flex w-full flex-col">
          <SoloCard
            header="Custom Linen"
            link="/projects/linen"
            tools="Built w/ Vite HTML, Figma, & Tailwind"
            image={linen}
          />
        </div>
      </div>
    </Container>
  );
}
