import PageContainer from 'components/PageContainer';
import Image from 'next/image';
import Firebase from '../../public/static/snippets/Firebase.png';
import firebase2 from '../../public/static/snippets/firebase2.png'

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
          src={Firebase}
          width={2164 / 2}
          height={1546 / 2}
          priority
        />
        <br />
        <Image
          className="rounded-3xl"
          alt={`firebase2`}
          src={firebase2}
          width={2164 / 2}
          height={1546 / 2}
          priority
        />
      </article>
    </PageContainer>
  );
}
