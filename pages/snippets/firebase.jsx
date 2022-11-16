import PageContainer from 'components/PageContainer';
import Image from 'next/image';


export default function reactSearch() {
  return (
    <PageContainer>
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Firebase Snippet
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2 mb-8">
          Read data from Realtime Database.
        </p>
        <Image
          className="rounded-3xl"
          alt={`firebase`}
          src="https://github.com/willvernon/VernonDev/blob/367c72b19c8ff4deb174bb1a93b1de9069287d7d/public/static/snippets-photos/Firebase.png"
          width={2164 / 2}
          height={1546 / 2}
          priority
        />
        <br />
        <Image
          className="rounded-3xl"
          alt={`firebase2`}
          src="https://github.com/willvernon/VernonDev/blob/367c72b19c8ff4deb174bb1a93b1de9069287d7d/public/static/snippets-photos/firebase2.png"
          width={2164 / 2}
          height={1546 / 2}
          priority
        />
      </article>
    </PageContainer>
  );
}
