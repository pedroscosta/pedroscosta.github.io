/* eslint-disable react/no-unescaped-entities */
import Link from '@/components/ui/link';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { differenceInYears } from 'date-fns';
import Link_ from 'next/link';

export default async function Home() {
  return (
    <article className="prose max-w-none py-6 dark:prose-invert">
      <h2>About me</h2>
      <p>
        My name is Pedro Costa, also known as <i>Hunt</i> or <i>Hunter</i>. I'm a developer from
        Brazil. I'm in love with programming since I was 14 (I'm{' '}
        {differenceInYears(new Date(), new Date(2000, 6, 22))} now).
        <br />
        <br />I consider myself as an general developer, I like to develop for the web (full-stack),
        tools, libs, mods, automation, data analytics, ..., it just depends on my mood.
      </p>
      <hr />
      <h2>My projects</h2>
      <div className="flex flex-col gap-8">
        <Link_
          href="https://github.com/pedroscosta/borrowr"
          className="group space-y-4 font-normal no-underline"
        >
          <div className="flex items-center gap-2">
            <span className="inline-block border-b border-current font-semibold leading-tight no-underline group-hover:-mb-[1px] group-hover:border-b-2">
              borrowr
            </span>
            <span className="rounded-full bg-blue-400 px-3 py-1 text-sm dark:bg-blue-950">
              experimental
            </span>
          </div>
          <span className="text-muted-foreground">A tool for creating 'code borrowing' CLIs</span>
        </Link_>
        <Link_
          href="https://github.com/pedroscosta/mun"
          className="group space-y-4 font-normal no-underline"
        >
          <div className="flex items-center gap-2">
            <span className="inline-block border-b border-current font-semibold leading-tight no-underline group-hover:-mb-[1px] group-hover:border-b-2">
              mun
            </span>
            <span className="rounded-full bg-purple-400 px-3 py-1 text-sm dark:bg-purple-950">
              proof-of-concept
            </span>
          </div>
          <span className="text-muted-foreground">A statically typed superset of Lua</span>
        </Link_>
        <Link_
          href="https://github.com/pedroscosta/blue-fire"
          className="group space-y-4 font-normal no-underline"
        >
          <div className="flex items-center gap-2">
            <span className="inline-block border-b border-current font-semibold leading-tight no-underline group-hover:-mb-[1px] group-hover:border-b-2">
              blue-fire
            </span>
            <span className="rounded-full bg-blue-400 px-3 py-1 text-sm dark:bg-blue-950">
              experimental
            </span>
            <span className="rounded-full bg-yellow-400 px-3 py-1 text-sm dark:bg-yellow-950">
              on-hold
            </span>
          </div>
          <span className="text-muted-foreground">
            A fully customizable integrated data analytics environment
          </span>
        </Link_>
        <Link_
          href="https://github.com/pedroscosta/react-butterfly-dag"
          className="group space-y-4 font-normal no-underline"
        >
          <div className="flex items-center gap-2">
            <span className="inline-block border-b border-current font-semibold leading-tight no-underline group-hover:-mb-[1px] group-hover:border-b-2">
              react-butterfly-dag
            </span>
            <span className="rounded-full bg-blue-400 px-3 py-1 text-sm dark:bg-blue-950">
              experimental
            </span>
            <span className="rounded-full bg-yellow-400 px-3 py-1 text-sm dark:bg-yellow-950">
              on-hold
            </span>
          </div>
          <span className="text-muted-foreground">
            A better headless React wrapper for butterfly-dag
          </span>
        </Link_>
        <Link
          href="https://github.com/pedroscosta/react-butterfly-dag"
          className="f flex w-fit items-center gap-1"
        >
          <GitHubLogoIcon /> More minor projects on my GitHub
        </Link>
      </div>
    </article>
  );
}
