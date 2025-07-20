import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { getBlogPost, getAllBlogPosts } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Metadata } from 'next';
import Link from 'next/link';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Dorji Tshering`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

const components = {
  h1: (props: any) => (
    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-8 font-mono" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 mt-8 font-mono" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 mt-6 font-mono" {...props} />
  ),
  p: (props: any) => (
    <p className="text-gray-700 leading-relaxed mb-4" {...props} />
  ),
  a: (props: any) => (
    <a
      className="text-blue-600 hover:text-blue-800 underline decoration-blue-400 underline-offset-2 hover:decoration-blue-800 transition-all duration-200"
      {...props}
    />
  ),
  code: (props: any) => (
    <code
      className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono"
      {...props}
    />
  ),
  pre: (props: any) => (
    <pre
      className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 text-sm font-mono"
      {...props}
    />
  ),
  ul: (props: any) => (
    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-blue-400 pl-4 py-2 bg-blue-50 text-gray-700 italic mb-6"
      {...props}
    />
  ),
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back to blog */}
        <div className="mb-12 animate-fade-in">
          <div className="flex items-center space-x-4">
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
              Home
            </a>
            <span className="text-gray-300">/</span>
            <a
              href="/blog"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
            >
              Blog
            </a>
          </div>
        </div>

        {/* Article header */}
        <header className="mb-16 animate-slide-up text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">DT</span>
                </div>
                <span>by {post.author}</span>
              </div>
              <span className="text-gray-300">•</span>
              <time dateTime={post.date}>
                {format(new Date(post.date), 'MMMM dd, yyyy')}
              </time>
              <span className="text-gray-300">•</span>
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{post.readingTime}</span>
              </div>
            </div>

            {post.tags.length > 0 && (
              <div className="flex flex-wrap justify-center gap-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full font-medium border border-blue-200/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* Article content */}
        <article className="animate-slide-up">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 md:p-12 lg:p-16 rounded-2xl shadow-soft border border-gray-200/50">
              <MDXRemote
                source={post.content}
                components={components}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [rehypeHighlight],
                  },
                }}
              />
            </div>
          </div>
        </article>

        {/* Article footer */}
        <footer className="mt-16 animate-slide-up">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 md:p-12 rounded-2xl border border-blue-200/50 shadow-soft text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Thanks for reading!</h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                I hope you found this article helpful. Feel free to reach out if you have any questions or want to discuss web development topics.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/blog"
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-full shadow-soft border border-blue-200/50 hover:shadow-soft-lg hover:border-blue-300 transition-all duration-200 hover:scale-105"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  More articles
                </a>
                <a
                  href="/#contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full shadow-soft hover:shadow-soft-lg transition-all duration-200 hover:scale-105"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
          <Link
            href="/blog"
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
            Back to blog
          </Link>
        </div>

        {/* Article header */}
        <header className="mb-12 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight font-mono">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
            <time dateTime={post.date}>
              {format(new Date(post.date), 'MMMM dd, yyyy')}
            </time>
            <span>•</span>
            <span>{post.readingTime}</span>
            <span>•</span>
            <span>by {post.author}</span>
          </div>

          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full font-medium border border-blue-200/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Article content */}
        <article className="prose prose-lg max-w-none animate-slide-up">
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-soft border border-gray-200/50">
            <MDXRemote
              source={post.content}
              components={components}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [rehypeHighlight],
                },
              }}
            />
          </div>
        </article>

        {/* Article footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200/60 animate-slide-up">
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Thanks for reading! Feel free to reach out if you have any questions.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
            >
              ← Read more posts
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}