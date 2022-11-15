import Link from 'next/link';


import Container from 'components/Container';

import ProjectsCard from 'components/projects/project';
import SoloCard from 'components/projects/SoloCard';
import scientia from '../public/projects/scientia.png';
import nhash from '../public/projects/NHASH.png';
import linen from '../public/projects/linen.png';

export default function Dashboard() {
  return (
    <Container
      title="Dashboard – Will Vernon"
      description="My personal dashboard, built with Next.js API routes deployed as serverless functions."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Dashboard
        </h1>
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This is my personal dashboard, To see my top Projects check the
            pinned tabs at the top. I&apos;ll be add more and more as i go and
            have time to build case studies.Also Check out my&nbsp;
            <Link
              href="/blog"
              className="text-gray-900 dark:text-gray-100 underline"
            >
              blog series.
            </Link>
          </p>
        </div>
        <div className=" w-full">
          <ProjectsCard />
        </div>

        <h2 className="font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          Other Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Curious what I have worked on or currently working on? Here&apos;s
          some of my projects on Github.
        </p>
        <div className="flex flex-col-1 w-full my-3">
          <SoloCard
            header="NHASH"
            link="/projects/nhash"
            tools="Built w/ HTML"
            image={nhash}
          />
        </div>
        <div className="flex flex-col w-full my-3">
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
