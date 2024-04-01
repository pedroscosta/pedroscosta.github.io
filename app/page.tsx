import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { differenceInYears } from 'date-fns';
import Link from 'next/link';

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
        <Link
          href="https://github.com/pedroscosta/borrowr"
          className="space-y-4 font-normal no-underline"
        >
          <div className="flex items-center gap-2">
            <span className="font-semibold underline underline-offset-4">Borrowr</span>
            <span className="rounded-full bg-blue-400 px-3 py-1 text-sm dark:bg-blue-950">
              experimental
            </span>
          </div>
          <span className="text-muted-foreground">A tool for creating 'code borrowing' CLIs</span>
        </Link>
        <Link
          href="https://github.com/pedroscosta/mun"
          className="space-y-4 font-normal no-underline"
        >
          <div className="flex items-center gap-2">
            <span className="font-semibold underline underline-offset-4">Mun</span>
            <span className="rounded-full bg-purple-400 px-3 py-1 text-sm dark:bg-purple-950">
              proof-of-concept
            </span>
          </div>
          <span className="text-muted-foreground">A statically typed superset of Lua</span>
        </Link>
        <Link
          href="https://github.com/pedroscosta/blue-fire"
          className="space-y-4 font-normal no-underline"
        >
          <div className="flex items-center gap-2">
            <span className="font-semibold underline underline-offset-4">BlueFire</span>
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
        </Link>
        <Link
          href="https://github.com/pedroscosta/react-butterfly-dag"
          className="space-y-4 font-normal no-underline"
        >
          <div className="flex items-center gap-2">
            <span className="font-semibold underline underline-offset-4">react-butterfly-dag</span>
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
        </Link>
        <Link
          href="https://github.com/pedroscosta/react-butterfly-dag"
          className="flex items-center gap-1 space-y-4 font-normal underline-offset-4"
        >
          <GitHubLogoIcon /> More minor projects on my GitHub
        </Link>
      </div>
    </article>
  );
}
