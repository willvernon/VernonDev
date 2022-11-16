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

export default function MetricCard({ header, link, tools, image }) {
  return (
    <div className="font-mono flex  bg-white  dark:bg-[#111111] hover:shadow-xl shadow-[0_15px_30px_-10px_rgba(0,0,0,0.3)] rounded-2xl">
      <form className="flex-auto p-6">
        <div className="pl-2 mb-3">
          <h2>{header}</h2>
          <p>{tools}</p>
        </div>
        <div className="flex space-x-4  text-sm font-medium">
          <div className="flex-auto flex space-x-4">
            <div className="h-7 px-3 flex items-center font-semibold rounded-full bg-[#F12307] text-white">
              <NavItem href={link} text="CaseStudy" />
            </div>
            <div className="h-7 px-3 flex items-center font-semibold rounded-full border bg-slate-200 text-slate-700">
              <NavItem href="https://github.com/willvernon/" text="GitHub" />
            </div>
          </div>
        </div>
      </form>
      <div className="flex-none w-[5rem] relative">
        <Image
          src={image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
          loading="lazy"
        />
      </div>
    </div>
  );
}
