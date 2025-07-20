import { getAllBlogPosts } from '@/lib/blog';
import BlogCard from '@/components/blog-card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Dorji Tshering',
  description: 'Thoughts, tutorials, and insights about web development, programming, and technology.',
  openGraph: {
    title: 'Blog | Dorji Tshering',
    description: 'Thoughts, tutorials, and insights about web development, programming, and technology.',
    type: 'website',
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[700px] mx-auto px-6 py-20">
        <div className="mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-mono">
            blog
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Thoughts, tutorials, and insights about web development, programming, and technology.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-white p-8 rounded-xl shadow-soft border border-gray-200/50">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">No posts yet</h2>
              <p className="text-gray-600">
                Check back soon for new content!
              </p>
            </div>
          </div>
        ) : (
          <div className="grid gap-8">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}