import Link from 'next/link';
import Image from 'next/image';

import Container from 'components/PageContainer';
import avatar from '../../public/MeMoji-Mac.png';
import avatarBW from 'public/avatar.jpg';
import sketch from '../../public/projects/Inner-Mngt/UserFlow.png';
import mock from '../../public/projects/Inner-Mngt/Sketches.png';
import Demo from 'public/projects/Demo.png';
import wire1 from '../../public/projects/Inner-Mngt/WireFrame1.png';
import wire2 from '../../public/projects/Inner-Mngt/WireFrame2.png';

// import { BsFillXSquareFill } from 'react-icons';

export default function InnerMgnt() {
  return (
    <Container title="Intranet">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Intranet Management
        </h1>
        <div className="w-[100%] h-[31rem] relative">
          <div className="absolute top-0 left-0 w-[100%] h-[25rem] rounded-[2rem] " />
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={Demo}
            alt="/"
          />

          <div className="absolute top-[80%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2"></div>
        </div>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h1 className="text-[#e64c33]">Intranet Management App</h1>
          <h2>Job Title</h2>
          <p>Developer & Designer Contractor---</p>
          <div className="text-center max-w-screen-lg">
            <div className="grid grid-cols-2 ">
              <div className="mx-auto ">
                <ul>
                  <h2>Category</h2>
                  <p>iOS Mobile App</p>
                </ul>
              </div>
              <div className="mx-auto  ">
                <ul>
                  <h2>Role</h2>
                  <p>Design & Development</p>
                  <p></p>
                </ul>
              </div>

              <div className="mx-auto ">
                <ul>
                  <h2>Challenge</h2>
                  <p>
                    To digitally improve the productivity  & organization of the
                    company.
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
            Over the weekend, I interviewed multiple contractors and learned
            about what their needs where and how they were staying organized in
            order to gather the information I needed. These adults spoke to me
            on a 1:1 user research where I had a pre-written questions. Here are
            the findings:
          </p>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h3>✅ Positives</h3>
              <ul>
                <li className="p-2">
                  Interviewees regard convenience as a priority when it comes to
                  Task management
                </li>
                <li className="p-2">
                  Interviewees use apps and websites daily and have experience
                  in using digital task and organizational products  and/or
                  services
                </li>
                <li className="p-2">
                  Interviewees commented that Security is very important
                </li>
                <li className="p-2">
                  The majority of interviewees established many
                  different systems to organize invoices, receipts, and job
                  details.
                </li>
              </ul>
            </div>
            <div>
              <h3>❌ Negatives</h3>
              <ul>
                <li className="p-2">
                  Interviewees regarded added an extra step could turn them away
                  from utilizing the system
                </li>
                <li className="p-2">
                  Learning a new intranet system from the ground up is time
                  extensive
                </li>
                <li className="p-2">
                  Catering to all levels of tech knowledge while also staying
                  effective
                </li>
                <li className="p-2">
                  Two interviewees find the system confusing i.e. uploading
                  documents and pictures
                </li>
              </ul>
            </div>
          </div>
          <h3>Problem Statement</h3>
          <p>
            👉🏼 We have observed that organization and task management is a must
            have when   running a smooth operation, having each contractor use
            their own methods of   organization lead to lots of
            misunderstandings and loss of job details…
          </p>
          <h3>Definition</h3>
          <p>Recommendations from contractors and the CEO</p>
          <h3>Recommendations</h3>
          <ul>
            <li>
              Develop a System that allows contractors to access travel
              information, plan their jobs and search for the nearest points of
              interest
            </li>
            <li>
              Develop a Task Manager that can tell users relevant information
              regarding jobs and company updates.
            </li>
            <li>
              Develop an app that shows contractor profiles with skills,
              availability, and CVI.
            </li>
          </ul>
          <br />
          <h1 className="text-[#e64c33]">Solution Phase</h1>
          <h2>Ideation</h2>
          <p>
            After deciding to build a Intranet, I proceed to do some rough
            sketches including the overall user flow - this is important as I
            wanted the platform to perform without information overload on each
            screen especially when dealing with high volumes of information
            <br />
            input: (Many of the in depth screens have been removed per NDA)
          </p>
          <h2>Sketches & Paper Prototypes</h2>
          <p>
            With the first round of usability tests completed using the paper
            prototype, I moved on to creating refined wireframes & user flows
            with annotated wireframes.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div className="">
              <Image
                alt="Sketch"
                width={400}
                quality={100}
                src={sketch}
                className="rounded-md"
              />
            </div>
            <div className="">
              <Image
                alt="Mock"
                width={400}
                quality={100}
                src={mock}
                className="rounded-md"
              />
            </div>
          </div>
          <h2>Wireframes & User Flows</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="">
              <Image
                alt="Sketch"
                width={400}
                quality={100}
                src={wire1}
                className="rounded-md"
              />
            </div>
            <div className="">
              <Image
                alt="Mock"
                width={400}
                quality={100}
                src={wire2}
                className="rounded-md"
              />
            </div>
          </div>
          <h2>Prototype</h2>
          <p>
            I built a clickable prototype, with Figma and started testing out
            features
          </p>
          <br />
          <h1 className="text-[#e64c33]">Iteration Phase</h1>
          <h2>Testing</h2>
          <li>Fixing usability issues</li>
          <li>Reduce steps to upload documents - currently 5 steps</li>
          <li>
            Display Tasks earlier to provide value sooner, try condensing job
            information into one card
          </li>
          <li>
            More specific and straight forward directions and steps to edit job
            screen
          </li>
          <li>
            Start with Tasks with more accurate notifications of new tasks and
            jobs.
          </li>
          <li>
            One common feedback is how they liked the simple apps on the home
            screen so theres no scrolling or hunting for what they needed to
            find.
          </li>
          <br />
          <h2>Iterations</h2>
          <p>Simplifying to allow consistent information and usability.</p>
          <br />
          <h1 className="text-[#e64c33]"> Summary </h1>
          <h2>👎 Limitations</h2>
          <p>
            There are limitations when it comes to building a intranet. Here I
            discuss why these solutions have its trade-offs:
          </p>
          <ul>
            <li>
              User needs to have a smartphone or device laptop with an internet
              connection otherwise this solution will not solve their
              organization and task management.
            </li>
            <li>
              Takes time to establish familiarity and directions for users to
              use the system confidently.
            </li>
            <li>
              Using the task platform provides a wide range of limitations (and
              value, discussed below), for example, limited interaction and
              communication to provide a accurate information, limited
              usability without a good cell connection, and so on.
            </li>
            <li>
              No advanced filtering options that some power users might be
              familiar with, especially with other Organization apps
              specifically because the Admin required the ability to control who
              has access to what information.
            </li>
          </ul>
          <h2>👍 Value</h2>
          <p>
            So why build an Intranet and not some other digital solution to
            solve the problem?
          </p>
          <ul>
            <li>
              The Intranet  is a great way to manage people, document, projects,
              and all kinds of other business materials all in one easy to use
              and secure application.
            </li>
            <li>
              The solution was designed for mobile and web so it does not need
              take into account older versions of iOS or Android thus limiting
              the number of requirements.
            </li>
            <li>
              Convenience is a huge factor when deciding whether or not to use a
              Intranet versus any other traditional organizational tools. Most
              people have had experience with corporate intranet thus making
              adoption pretty easy.
            </li>
            <li>
              Mobile device usage has taken over, By leveraging existing
              behavior on their devices, we know that majority of users can
              easily use a mobile app rather than requiring them to use only
              desktop.
            </li>
          </ul>
          <h2>Next Steps</h2>
          <p>
            Utilizing everything learned to put the final touches on the app and
            smooth out any of the rough edges to make it a easy and straight
            forward solution.
          </p>
          <p>1. Build all interactions</p>
          <p>
            The prototype was very limited and did not show the full range of
            the design solution thus requiring a lot of imagination from the
            user.
          </p>
          <p>2. Increase fidelity of the prototype</p>
          <p>
            Making the experience feel natural and making sure that the testers
            and users know that we want them to find issues so that we can
            properly fix and adapt to needs and wants.
          </p>
        </div>
      </div>
    </Container>
  );
}
