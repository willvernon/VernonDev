import useSWR from 'swr';
import MetricCard from 'components/projects/Card';

import demo from '../../public/projects/Demo.png';
import bblgx from '../../public/projects/bblgx.png';
import sneakerx from '../../public/projects/Sneakerx.png';
import scientia from '../../public/projects/scientia.png';

export default function ProjectsCard() {
  const link = '..';

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
      <MetricCard
        header="Logistics Website"
        link="/projects/project5"
        tools="Built w/ React, Figma, &"
        image={bblgx}
      />
      <MetricCard
        header="Inner Management App"
        link="/portfolio"
        tools="Built w/ Swift & Figma"
        image={demo}
      />
      <MetricCard
        header="SneakerX"
        link="/projects/project5"
        tools="Built w/ HTML, CSS, & Figma"
        image={sneakerx}
      />
      <MetricCard
        header="Scientia"
        link="/projects/project5"
        tools="Built w/ ReactNative"
        image={scientia}
      />
    </div>
  );
}
