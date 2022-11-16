import PageContainer from 'components/PageContainer';
import Image from 'next/image';
import mobile from '../../public/static/snippets-photos/mobile.png';
import css from '../../public/static/snippets-photos/mobile-css.png';

export default function reactSearch() {
  return (
    <PageContainer>
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
        <br />
        <p>Mobile Nav .Module.css</p>
        <Image
          className="rounded-3xl"
          alt='Mobile Nav CSS'
          src={css}
          width={2164 / 2}
          height={1546 / 2}
          priority
        />

      </article>
    </PageContainer>
  );
}
