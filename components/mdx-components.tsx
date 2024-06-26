import { cn } from '@/lib/utils';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image, { ImageProps } from 'next/image';

const components = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <h1 className="text-3xl font-bold" {...props}></h1>
  ),
  p: ({ ...props }: React.HTMLAttributes<HTMLElement>) => (
    <p className="text-justify" {...props}></p>
  ),
  Image: (props: ImageProps) => <Image {...props} />,
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn('relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm', className)}
      {...props}
    />
  ),
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <pre
      className={cn(
        'mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900',
        className,
      )}
      {...props}
    />
  ),
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
