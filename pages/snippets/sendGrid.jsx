import Container from 'components/Container';
import Image from 'next/image';
import reactSearchSnippet from '../../public/snippets-photos/react-search.png';
import sendGrid from '../../public/snippets-photos/sendGrid.png'

export default function reactSearch() {
  return (
    <Container>
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          SendGrid Snippet
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2 mb-8">
          Send an email to a user
        </p>
        <Image
          className="rounded-3xl"
          alt={`SendGrid`}
          src={sendGrid}
          width={2164 / 2}
          height={1546 / 2}
          priority
        />
      </article>
    </Container>
  );
}
