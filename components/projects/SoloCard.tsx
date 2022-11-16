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

export default function SoloCard({ header, link, tools, image }) {
  return (
    <div className="p-6 max-w-lg  mx-auto bg-white  flex items-center space-x-10 dark:bg-[#1b1b1b] hover:shadow-xl shadow-[0_15px_30px_-10px_rgba(0,0,0,0.3)] rounded-2xl">
      <div className="pr-[5rem]">
        <div className="text-xl flex items-center font-medium text-black dark:text-white">
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
        <p className="text-slate-400 text-xs">{tools}</p>
      </div>
      <div className="shrink-0">
        <Image
          className=" md:w-[10rem] w-[5rem] rounded-xl"
          layout=""
          objectFit="cover"
          src={image}
          alt="/"
        />
      </div>
    </div>
  );
}
