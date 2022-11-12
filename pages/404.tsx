import Link from 'next/link';
import Image from 'next/image';
import Travolta from '../public/TravoltaLost.gif';
import Container from 'components/Container';

export default function NotFound() {
  return (
    <Container title="404 – Will Vernon">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 text-center">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          404 – You Seem Lost
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          It seems you&apos;ve found something that used to exist, or you are
          trying to time travel to a page that doesn&apos;t quite exist yet.
        </p>
        <div className="m-auto mb-10">
          {/* <Image
            src={Travolta}
            alt="Travolta"
            width={400}
            height={100}
            quality={100}
            className="rounded-full"
          /> */}
          <Image
            src="https://tenor.com/Ra1M.gif"
            alt="404"
            width={400}
            height={100}
            quality={100}
            className="rounded-full"
          />
        </div>
        <Link
          href="/"
          className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-200 dark:bg-gray-800 text-center rounded-md text-black dark:text-white"
        >
          Return Home
        </Link>
      </div>
    </Container>
  );
}
