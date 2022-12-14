import PageContainer from 'components/PageContainer';
import Image from 'next/image';
import Container from '../../public/static/snippets/Container.jpg';

export default function reactSearch() {
  return (
    <PageContainer>
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          React Page Container Snippet
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2 mb-8">
          React Container to wrap page content around a component that includes
          the navbar mobile navbar and footer.
        </p>
        <Image
          className="rounded-3xl"
          alt={`container`}
          src={Container}
          width={2164 / 2}
          height={1546 / 2}
          priority
        />
      </article>
    </PageContainer>
  );
}
