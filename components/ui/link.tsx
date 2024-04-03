import { cn } from '@/lib/utils';
import { default as Link_, LinkProps as _LinkProps } from 'next/link';

type LinkProps = React.HTMLAttributes<HTMLAnchorElement> & _LinkProps;

const Link = ({ className, ...props }: LinkProps) => {
  return (
    <Link_
      className={cn(
        'mb-[3px] inline-block border-b border-current leading-tight no-underline hover:mb-[2px] hover:border-b-2',
        className,
      )}
      {...props}
    />
  );
};

export default Link;
