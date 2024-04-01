import { Analytics } from '@/components/analytics';
import { ModeToggle } from '@/components/mode-toggle';
import { ThemeProvider } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata = {
  title: 'Pedro Costa',
  description: "Pedro Costa's blog and site",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-background font-sans antialiased', inter.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="mx-auto max-w-3xl px-4 py-10">
            <header>
              <div className="flex items-center justify-between">
                <Button variant="ghost" asChild className="text-lg font-semibold">
                  <Link href="/">Pedro Costa</Link>
                </Button>
                <nav className="flex items-center space-x-2 text-sm font-medium">
                  <Button variant="ghost" asChild>
                    <Link href="/blog">Blog</Link>
                  </Button>
                  <Button variant="ghost" asChild className="h-9 w-9 p-1" aria-label="Twitter">
                    <Link href="https://x.com/pedroscosta_">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-4 w-4 fill-current"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </Link>
                  </Button>
                  <Button variant="ghost" asChild className="h-9 w-9 p-1" aria-label="Github">
                    <Link href="https://github.com/pedroscosta">
                      <GitHubLogoIcon />
                    </Link>
                  </Button>
                  <ModeToggle />
                </nav>
              </div>
            </header>
            <main>{children}</main>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
