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
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back to home link */}
        <div className="mb-8 animate-fade-in">
          <a
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
          >
            <svg
              className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to home
          </a>
        </div>

        {/* Hero section */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Thoughts, tutorials, and insights about web development, programming, and technology.
          </p>
          {posts.length > 0 && (
            <div className="mt-8 inline-flex items-center space-x-2 text-sm text-gray-500 bg-white px-4 py-2 rounded-full shadow-soft border border-gray-200/50">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>{posts.length} {posts.length === 1 ? 'article' : 'articles'}</span>
            </div>
          )}
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20">
            <div className="bg-white p-12 rounded-2xl shadow-soft border border-gray-200/50 max-w-md mx-auto">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">No posts yet</h2>
              <p className="text-gray-600 leading-relaxed">
                Check back soon for new content!
              </p>
            </div>
          </div>
        ) : (
          <div className="grid gap-8 md:gap-12">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}

        {/* Newsletter signup placeholder */}
        {posts.length > 0 && (
          <div className="mt-20 text-center animate-slide-up">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 md:p-12 rounded-2xl border border-blue-200/50 shadow-soft">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Get notified when I publish new articles about web development and programming.
              </p>
              <div className="text-sm text-gray-500">
                Newsletter coming soon!
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}