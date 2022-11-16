import { useRouter } from 'next/router';
import NextLink from 'next/link';
import cn from 'classnames';
import Image from 'next/image';

function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <span className="capsize">{text}</span>
    </NextLink>
  );
}

export default function SnippetsCard({ header, link, tools, image }) {
  return (
    <div className="metric-card font-mono flex text-black dark:text-white bg-white dark:bg-[#1b1b1b] hover:shadow-xl shadow-[0_15px_30px_-10px_rgba(0,0,0,0.3)] rounded-2xl">
      <div className="flex-auto p-6">
        <div className="flex space-x-4  text-sm font-medium">
          <div className="flex-auto flex space-x-4">
            <div className="text-xl flex items-center font-medium ">
              <NavItem href={link} text={header} />
              <svg
                className="h-4 w-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </div>
        </div>{' '}
        <p className="text-sm pt-3 -mb-2">{tools}</p>
      </div>
      <div className="flex-none w-[7rem] h-full relative m-auto">
        <Image
          src={image}
          alt=""
          className=" w-[7rem] object-cover rounded-lg p-4 m-auto"
          loading="lazy"
        />
      </div>
    </div>
  );
}
