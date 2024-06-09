import { allPosts } from '@/.contentlayer/generated';
import Link from '@/components/ui/link';
import { format, parseISO } from 'date-fns';

export default function Blog() {
  return (
    <div className="prose mt-6 max-w-none space-y-12 dark:prose-invert">
      {allPosts.map((post) => (
        <div key={post._id} className="flex flex-col">
          <div className="flex items-baseline">
            <h2 className="m-0">
              <Link href={post.slug}>{post.title}</Link>
            </h2>
            <p className="mb-4 ml-4 text-muted-foreground">
              {format(parseISO(post.date.slice(0, -1)), 'dd/MM/yyyy')}
            </p>
          </div>

          {post.description && <p className="m-0">{post.description}</p>}
        </div>
      ))}
    </div>
  );
}
