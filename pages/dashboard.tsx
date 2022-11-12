import Link from 'next/link';

// import Analytics from 'components/projects/Analytics';
import Container from 'components/Container';
// import GitHub from 'components/projects/Github';
// import Unsplash from 'components/projects/Unsplash';
import ProjectsCard from 'components/projects/project';
import MetricCard from 'components/projects/Card';
import SoloCard from 'components/projects/SoloCard';
import scientia from '../public/projects/scientia.png';

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
        <div className="flex flex-col w-full">
          <ProjectsCard />
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
          {/* <GitHub /> */}
          {/* <Analytics /> */}
          {/* <Unsplash /> */}
        </div>
        <h2 className="font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Curious what I have worked on or currently working on? Here&apos;s
          some of my projects on Github.
        </p>
        <div className="flex flex-col-1 w-full my-3">
          <SoloCard
            header="project5"
            link="/projects/project5"
            tools="Built w/ React, Figma, &"
            image={scientia}
          />
        </div>
        <div className="flex flex-col w-full my-3">
          <SoloCard
            header="project5"
            link="/projects/project5"
            tools="Built w/ React, Figma, &"
            image={scientia}
          />
        </div>
        <div className="flex flex-col w-full my-3">
          <SoloCard
            header="project5"
            link="/projects/project5"
            tools="Built w/ React, Figma, &"
            image={scientia}
          />
        </div>
      </div>
    </Container>
  );
}
