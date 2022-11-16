import Link from 'next/link';
import Image from 'next/image';

import Container from 'components/PageContainer';
import sketch from '../../public/projects/scientia/sketches.png';
import mock from '../../public/projects/scientia/wireframe.png';
import hero from 'public/projects/scientia/hero.png';
import user from '../../public/projects/scientia/userFlow.png';

// import { BsFillXSquareFill } from 'react-icons';

export default function Project4() {
  return (
    <Container title="Logistics Website">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Scientia - Task Tracker
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
              <li>
                ReactNative:{' '}
                <a href="https://reactnative.dev/">Check it Out!</a>
              </li>
              <li>Adobe XD</li>
            </ul>
          </div>
          <h1 className="text-[#e64c33]">Project Overview</h1>
          <p>
            I came up with the idea of a better way to track assignments given
            the very lackluster of school based organizational tools in 2018-19,
            i took matters into my own hands to come up with a app that
            specifically tailored to mine and many other college students needs
            at the time. I would go on to handle everything from design to
            development (my first time coding with React Native) and then test
            possible api features with my current school work. This is how I
            built a prototype for the App.
          </p>
          <br />
          <div className="text-center max-w-screen-lg">
            <div className="grid grid-cols-2 ">
              <div className="mx-auto ">
                <ul>
                  <h2>Category</h2>
                  <p>Mobile Design, Dev</p>
                </ul>
              </div>
              <div className="mx-auto  ">
                <ul>
                  <h2>Role</h2>
                  <p>UX Design & Developer</p>
                  <p></p>
                </ul>
              </div>

              <div className="mx-auto ">
                <ul>
                  <h2>Challenge</h2>
                  <p>
                    To improve the productivity and  organization of
                    schoolwork and assignments.
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
          <h3>Quantitative Research</h3>
          <p>
            I interviewed a few student friends of mine and learned about what
            their needs where and how they were staying organized in order to
            gather the information I needed. These students spoke to me on how
            they managed their productive strategies whether it was digital or
            pen and paper. Here are the findings:
          </p>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h3>✅ Positives</h3>

              <li className="p-1">
                Interviewees regard convenience as a priority when it comes to
                work management 
              </li>
              <li className="p-1">
                Interviewees use lots of journaling and the reminders app in
                their phone.
              </li>
              <li className="p-1">
                Interviewees also mentioned that a digital tool is much needed
              </li>
            </div>
            <div>
              <h3>❌ Negatives</h3>
              <li className="p-1">
                Interviewees mentioned that it needs to be very straight forward
                and not be added to the struggle of organization
              </li>
              <li className="p-1">
                Learning a new organization method can be time restrictive
              </li>
              <li className="p-1">
                Users of all levels of software knowledge while also staying
                feature strong
              </li>
              <li className="p-1">
                Online School systems can make organization impossible
              </li>
            </div>
          </div>
          <h3>Problem Statement</h3>
          <p>
            👉🏼 I observed that organization and assignment management is very
            important when keeping a strong academic and personal life mixture,
            having each assignment accounted for allows for better time
            management…
          </p>
          <h3>Definition</h3>
          <p>Recommendations from students</p>
          <h3>Recommendations</h3>

          <li className="p-1">
            Having a sorting system based on due date, priority, or name
          </li>
          <li className="p-1">
            Being able to connect to the online school system to download
          </li>
          <li className="p-1">
            Being able to have reminders and notes attached to each other
          </li>
          <br />
          <h1 className="text-[#e64c33]">Solution Phase</h1>
          <h2>Ideation</h2>
          <br />
          <p>
            After going through all the information and recommendations i have
            received i went along and made some rough sketches about how i think
            it should look and run:
          </p>
          <br />
          <h2>Sketches & Paper Prototypes</h2>
          <p>
            After going through a few paper sketches i came to that final design
            and went to make wireframes and user flows. My key was to keep the
            pages and navigation to a minimum to keep quickness a priority.
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
                src={mock}
                className="rounded-md"
              />
            </div>
            <div className="grid-cols-start-2">
              <Image
                alt="UserFlow"
                width={400}
                quality={100}
                src={user}
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
            features and with some of the team.
          </p>
          <br />
          <h1 className="text-[#e64c33]">Iteration Phase</h1>
          <h2>Testing</h2>
          <br />
          <li className="p-1">
            Reduce how long it takes to create new reminders 
          </li>
          <li className="p-1">
            Display Reminders earlier to make quickness priority, try condense
            Assignment information into one card
          </li>
          <li className="p-1">
            More specific and straight forward user flow through screens​​​​​​​
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
            There are limitations when it comes to building a task app. Here I
            discuss why these solutions have its trade-offs:
          </p>
          <br />
          <li className="p-1">
            User needs to have a smartphone or device laptop with an internet
            connection otherwise this solution will not solve their organization
            and task management will only save to device till connection is
            reestablished.
          </li>
          <li className="p-1">
            Takes time to establish confidence and reliance on the app.
          </li>
          <li className="p-1">
            Everyone is very different in the way they like to stay organized so
            building to include everyone can be difficult.
          </li>
          <br />
          <h2>👍 Value</h2>
          <br />
          <p>So why build an Task App?</p>
          <br />
          <li className="p-1">
            The app a way to manage the school workload that can be a lot with,
            documents, projects, and all kinds of other school materials all in
            one easy to use application.
          </li>
          <li className="p-1">
            It was only made for students specifically but could easily be
            modified to allow all kinds of task managing.
          </li>
          <li className="p-1">Convenience is a huge factor.</li>
          <li className="p-1">
            Mobile device usage in schools is only becoming more and more
            reliant on good software to support the emerging digitization of
            school.
          </li>
        </div>
      </div>
    </Container>
  );
}
