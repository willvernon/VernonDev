import PageContainer from 'components/PageContainer';
import Image from 'next/image';

export default function reactSearch() {
    return (
      <PageContainer>
        <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            React Search Snippet
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mt-2 mb-8">
            React Context hook for search values.
          </p>
          <Image
            className="rounded-3xl"
            alt={`search`}
            src="https://github.com/willvernon/VernonDev/blob/367c72b19c8ff4deb174bb1a93b1de9069287d7d/public/static/snippets-photos/react-search.png"
            width={2164 / 2}
            height={1546 / 2}
            priority
          />
        </article>
      </PageContainer>
    );
}
