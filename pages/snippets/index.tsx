import Container from 'components/Container';

import SnippetsCard from 'components/SnippetsCard';

import tailwind from '../../public/tailwindLogo.png';
import react from '../../public/react.png';
import sendGrid from '../../public/sendgrid.png';
import firebase from '../../public/firebase.png';

export default function Snippets() {
  return (
    <Container
      title="Code Snippets – Will Vernon"
      description="A collection of code snippets – including serverless functions, Node.js scripts, and CSS tricks."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Code Snippets
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          These are a collection of code snippets I&apos;ve used in the past
          and saved. Some are Serverless Functions, which include set up
          instructions. Others are anything from random CSS snippets to Node.js
          scripts.
        </p>
        <div className="grid w-full grid-cols-1 gap-4 my-2 mt-4 sm:grid-cols-2">
          <SnippetsCard
            header="Search"
            link="/snippets/reactSearch"
            tools="React Context hook for search values"
            image={react}
          />
          <SnippetsCard
            header="Container"
            link="/snippets/container"
            tools="Nav and Fotter Container"
            image={react}
          />
          <SnippetsCard
            header="Mobile Nav"
            link="/snippets/mobileNav"
            tools="full screen side nav"
            image={react}
          />
          <SnippetsCard
            header="SendGrid"
            link="/snippets/sendGrid"
            tools="Send an email to a user"
            image={sendGrid}
          />
          <SnippetsCard
            header="Firebase"
            link="/snippets/firebase"
            tools="Read data from Realtime Database"
            image={firebase}
          />
          
        </div>
      </div>
    </Container>
  );
}
