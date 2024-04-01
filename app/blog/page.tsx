import { allPosts } from '@/.contentlayer/generated';
import Link from '@/components/ui/link';

export default function Blog() {
  return (
    <div className="prose dark:prose-invert">
      {allPosts.map((post) => (
        <article key={post._id}>
          <h2>
            <Link href={post.slug}>{post.title}</Link>
          </h2>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </div>
  );
}
