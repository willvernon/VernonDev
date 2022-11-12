import Container from 'components/Container';
import Image from 'next/image';

export default function Uses() {
  return (
    <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        ---My Gear
      </h1>
      <p className="text-gray-700 dark:text-gray-300 mt-2 mb-8">
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
      <div className="prose dark:prose-dark w-full">
        <h3 id="computer-office">Computer / Office</h3>
        <ul>
          <li>16&quot; Macbook Pro M1pro</li>
          <li>12.9&quot; iPad Pro M1</li>
          <li>32&quot; Dell 4k HDR Curved Monitor</li>
          <li>Vertical Asus Gaming Monitor</li>
          <li>Logitech MX Master 3 Mouse</li>
          <li>Apple Magic Keyboard</li>
          <li>Apple HomePod Mini</li>
        </ul>
        <h3 id="coding">Coding</h3>
        <ul>
          <li>Editor: VSCode</li>
          <li>Theme: Bearded Theme Will</li>
          <li>Terminal: Hyper / zsh</li>
        </ul>
        <h3 id="software">Software</h3>
        <ul>
          <li>BitWarden</li>
          <li>Proton</li>
          <li>CleanMyMac X</li>
          <li>Brave Browser</li>
          <li>Workana</li>
          <li>Todoist</li>
          <li>Raycast</li>
          <li>Notion</li>
        </ul>
        <h3 id="other-tech">Other Tech</h3>
        <ul>
          <li>Apple Airpods Pro</li>
          <li>Apple Watch</li>
          <li>Apple iPhone</li>
          <li>Lacie USB-C External HDD</li>
        </ul>
      </div>
    </article>
  );
}
