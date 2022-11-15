import Container from 'components/Container';
import Image from 'next/image';
import mobile from '../../public/snippets-photos/mobile.png';

export default function reactSearch() {
  return (
    <Container>
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          React Mobile Nav
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2 mb-8">
          React Mobile Nave that has a full screen slide in side nav.
        </p>
        <Image
          className="rounded-3xl"
          alt='Mobile Nav'
          src={mobile}
          width={2164 / 2}
          height={1546 / 2}
          priority
        />
      </article>
    </Container>
  );
}
