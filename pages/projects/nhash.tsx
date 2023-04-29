import Link from 'next/link';
import Image from 'next/image';

import Container from 'components/PageContainer';
import sketch from '../../public/projects/nhash/sketch.png';
import login from '../../public/projects/nhash/login.png';
import hero from 'public/projects/nhash/hero.png';
import prototype from '../../public/projects/nhash/prototype.png';
import prototype2 from '../../public/projects/nhash/prototype-v2.png';

// import { BsFillXSquareFill } from 'react-icons';

export default function Project4() {
  return (
    <Container title="NHASH">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          NHASH - Bitcoin Miner
        </h1>
        <div className="w-[100%] h-[25rem] relative">
          <div className="absolute top-0 left-0 w-[100%] h-[25rem] " />
          <Image
            className="absolute z-1 rounded-[2rem]"
            layout="fill"
            objectFit="cover"
            src={hero}
            alt="/"
          />
        </div>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <div className="flex">
            <ul>
              <h2 className="text-[#e64c33]">Tools Used</h2>
              <li>NHASH</li>
              <li>Adobe XD</li>
              <li>Vanilla HTML</li>
            </ul>
          </div>
          <h1 className="text-[#e64c33]">Project Overview</h1>
          <p>
            During my Internship i was tasked with building something intuitive
            and helpful and the CEO asked for me to build some BitCoin Miners.
            He also requested a way that he could have a web app open on his
            monitor so we can see live feedback of what the miners are doing.
            <br />
            This is how I built a prototype for the App.
          </p>
          <br />
          <div className="text-center max-w-screen-lg">
            <div className="grid grid-cols-2 ">
              <div className="mx-auto ">
                <ul>
                  <h2>Category</h2>
                  <p>Web Design,Web Dev, & Hardware</p>
                </ul>
              </div>
              <div className="mx-auto  ">
                <ul>
                  <h2>Role</h2>
                  <p>UX Design & Programmer</p>
                  <p></p>
                </ul>
              </div>

              <div className="mx-auto ">
                <ul>
                  <h2>Challenge</h2>
                  <p>
                    Using Json data from NHASH programs api to display relevant
                    information for the user.
                  </p>
                </ul>
              </div>
              <div className="mx-auto ">
                <ul>
                  <h2>Category</h2>
                  <p>1. Discovery</p>
                  <p>2. Solution</p>
                  <p>3. Iteration</p>
                </ul>
              </div>
            </div>
          </div>
          <h1 className="text-[#e64c33]">Discovery Phase</h1>
          <br />
          <h3>Quantitative Research</h3>
          <p>
            I interviewed the CEO on what he wanted the final product to look
            like and since this was a service only one person was going to use i
            only need input from one person.
          </p>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h3>✅ Positives</h3>

              <li className="p-1"> CEO left lots of creative freedom</li>
              <li className="p-1">Gave me a good understanding of features</li>
              <li className="p-1">
                CEO wanted to possibly turn it into a mobile tool
              </li>
            </div>
            <div>
              <h3>❌ Negatives</h3>
              <li className="p-1">Lots of information</li>
              <li className="p-1"> Organization is sporadic </li>
            </div>
          </div>

          <h3>Recommendations</h3>

          <li className="p-1"> Clearly display the 4 miners</li>
          <li className="p-1"> Show Money made </li>
          <li className="p-1">
            Show a key of what the data is that you are looking
          </li>
          <br />
          <h1 className="text-[#e64c33]">Solution Phase</h1>
          <h2>Ideation</h2>
          <br />
          <p>
            After going through all the information and recommendations i have
            received i went along and made some rough sketches about how i think
            it should look and run:
          </p>
          <br />
          <h2>Sketches & Paper Prototypes</h2>
          <p>
            Keeping it all on one single view page with no needs to scroll was
            key in what the CEO wanted so that it can sit on a TV/Monitor and
            require no intervention to have relevant and updated information.
          </p>
          <br />
          <div className="w-[100%] h-[25rem] relative">
            <div className="absolute top-0 left-0 w-[100%] h-[25rem]  " />
            <Image
              className="absolute z-1 rounded-[2rem]"
              layout="fill"
              objectFit="cover"
              src={sketch}
              alt="Sketch"
            />
          </div>
          <br />
          <h2 className="text-[#e64c33]">Wireframes & User Flows</h2>
          <div className="grid grid-cols-2 grid-rows-1 gap-2">
            <div className="grid-cols-start-1">
              <Image
                alt="Mock"
                width={400}
                quality={100}
                src={prototype}
                className="rounded-md"
              />
            </div>
            <div className="grid-cols-start-2">
              <Image
                alt="UserFlow"
                width={300}
                quality={100}
                src={prototype2}
                className="rounded-md"
              />
            </div>
          </div>
        </div>
        <br />
        <div className="w-[100%] h-[100%] relative">
          <h2>Prototype</h2>
          <p>
            I built a clickable prototype, with Figma and started testing out
            features and with some of the team. (Had to remove the information
            in the boxes)
          </p>
          <br />
          <h1 className="text-[#e64c33]">Iteration Phase</h1>
          <h2>Testing</h2>
          <br />
          <li className="p-1">
            Reduce how long it takes to update the information
          </li>
          <li className="p-1">
            Display everything in one page and still be readable​​​​​​​​​​​​​​
          </li>
          <br />
          <h2>Iterations</h2>
          <p>Simplifying to allow consistent and smooth use process.</p>
          <br />
          <h1 className="text-[#e64c33]"> Summary </h1>
          <br />
          <h2>👎 Limitations</h2>
          <br />
          <p>
            There are limitations when it comes to building a single page app.
            Here I discuss why these solutions have its trade-offs:
          </p>
          <br />
          <li className="p-1">
            User needs to have a smartphone or device laptop with an internet
            connection otherwise this solution will not solve their organization
            and task management will only save to device till connection is
            reestablished.
          </li>
          <li className="p-1">
            You have to pick and choose what information you want to include so
            that theres no information overload
          </li>
          <li className="p-1">
            Making it easy to read without getting too technical​​​​​​​
          </li>
          <br />
          <h2>👍 Value</h2>
          <br />
          <li className="p-1">
            Making a very simplistic way to view complex data to make it easy to
            read for non-technical eyes.
          </li>
          <li className="p-1">
            Also makes it easy to view information from the rig without being
            directly next to it.
          </li>
        </div>
      </div>
    </Container>
  );
}
