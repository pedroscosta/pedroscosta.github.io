import { allPosts } from '@/.contentlayer/generated';
import { fontSans } from '@/app/layout';
import { cn } from '@/lib/utils';
import siteConfig from '@/siteConfig';
import { ImageResponse } from 'next/server';
import '../../globals.css';

export const size = {
  width: 1200,
  height: 630,
};

type Params = {
  slug: string[];
};

export async function generateStaticParams(): Promise<Params[]> {
  return allPosts.map((post) => ({
    slug: ['blog', ...post.slugAsParams.split('/')],
  }));
}

export async function GET(request: Request, context: { params: Params }) {
  const slugParam = context.params.slug;
  const slug = slugParam.slice(1).join('/');
  const page = allPosts.find((post) => post.slugAsParams === slug);

  return new ImageResponse(
    (
      <div
        tw={cn(
          'relative flex flex-col bg-[#09090b] text-[#fafafa] w-screen h-full font-sans antialiased items-center text-center truncate',
          fontSans.className,
        )}
        style={{
          backgroundImage: 'radial-gradient(#27272a, #09090b)',
        }}
      >
        <p tw="text-4xl border border-[#3f3f46] rounded-md mt-16 px-4 text-[#a1a1aa]">
          {siteConfig.baseUrl}
        </p>
        <div tw="flex-1 flex flex-col justify-center items-center w-full">
          <p tw="text-7xl max-w-[80%] mt-0">{page?.title}</p>
          <div tw="w-9/12 bg-[#e5e7eb] h-[1px]" />
          <p tw="text-5xl text-[#a1a1aa] max-w-[90%] text-clip h-fit ">{page?.description}</p>
        </div>
        <p
          tw="text-4xl border border-transparent rounded-md mt-16 px-4 text-[#a1a1aa]"
          style={{ opacity: 0 }}
        >
          {siteConfig.baseUrl} {/*ignore this hack because i'm lazy */}
        </p>
      </div>
    ),
    // ImageResponse options
    {
      width: 1200,
      height: 630,
    },
  );
}
