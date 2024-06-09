import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

import { metadata } from '@/app/layout';
import { size } from '@/app/og/[...slug]/route';
import { Mdx } from '@/components/mdx-components';
import { format, parseISO } from 'date-fns';
import { Metadata } from 'next';

export interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostProps['params']) {
  const slug = params?.slug?.join('/');
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  const url = `/blog/${post.slugAsParams}`;

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      siteName: metadata.title,
      url,
      images: [
        {
          alt: post.title,
          type: 'image/png',
          url: `/og/${url}`,
          ...size,
        },
      ],
    },
    twitter: {
      title: post.title,
      description: post.description,
      site: metadata.title,
      card: 'summary_large_image',
      images: [
        {
          alt: post.title,
          type: 'image/png',
          url: `/og/${url}`,
          ...size,
        },
      ],
    },
  };
}

export async function generateStaticParams(): Promise<PostProps['params'][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split('/'),
  }));
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <article className="prose max-w-none py-6 dark:prose-invert">
      <h1 className="mb-2">{post.title}</h1>
      {post.description && (
        <span className="mt-0 flex justify-between text-lg text-slate-600 dark:text-slate-400">
          {post.description}
        </span>
      )}
      <p className="m-0 w-full text-right text-slate-600 dark:text-slate-400">
        {format(parseISO(post.date.slice(0, -1)), 'dd/MM/yyyy')}
      </p>
      <hr className="my-4" />
      <Mdx code={post.body.code} />
    </article>
  );
}
