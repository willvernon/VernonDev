import Container from 'components/PageContainer';
import Image from 'next/image';
import resume from 'public/static/Resume.png';
import Link from 'next/link';
import avatar from '../public/MeMoji-Mac.png';

export default function Uses() {
  return (
    <article className="mx-auto mt-16 mb-16 flex w-full max-w-2xl flex-col items-start justify-center">
      <Image
        className="rounded-3xl"
        src={resume}
        alt="/"
        width={2164 / 2}
        height={1546 / 2}
        priority
      />
      <br />
      <br />
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
        My Gear
      </h1>
      <p className="mt-2 mb-8 text-gray-700 dark:text-gray-200">
        Here&apos;s what tech I&apos;m currently using for coding, work, and
        life in general. It changes and adapts widely based on learning new tech
        and my love for learning new things to maximize quality of life and
        productivity.
      </p>

      <Image
        className="rounded-lg"
        alt={`My computer desk`}
        src={`/static/images/setup.png`}
        width={2164 / 2}
        height={1546 / 2}
        priority
      />
      <div className="prose w-full dark:prose-dark">
        <h3 id="computer-office">Computer / Office</h3>
        <ul>
          <li>14&quot; Macbook Pro M3-Max</li>
          <li>12.9&quot; iPad Pro M4</li>
          <li>32&quot; Dell 4k HDR Curved Monitor</li>
          <li>Logitech MX Master 3 Mouse</li>
          <li>NuPhy Air 75 Mechanical Keyboard **</li>
          <li>Apple Magic Trackpad</li>
        </ul>
        <h3 id="coding">Coding</h3>
        <ul>
          <li>Editor: Nvim</li>
          <li>Theme: My Modded Monokai Soda</li>
          <li>Terminal: Ghostty / Fish</li>
        </ul>
        <h3 id="software">Software</h3>
        <ul>
          <li>BitWarden</li>
          <li>Proton </li>
          <li>Brave</li>
          <li>Eagle</li>
          
          <li>Raycast</li>
          <li>Obsidian</li>
        </ul>
        <h3 id="other-tech">Other Tech</h3>
        <ul>
          <li>Nothing Open Ear Headphones</li>
        </ul>
      </div>
    </article>
  );
}
