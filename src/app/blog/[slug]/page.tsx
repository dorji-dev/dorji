import { notFound } from "next/navigation";
import { format } from "date-fns";
import { getBlogPost, getAllBlogPosts } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Metadata } from "next";
import Link from "next/link";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import BlogComments from "@/components/blog-comments";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Dorji Tshering`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="text-3xl md:text-4xl font-bold text-foreground mb-6 mt-8"
      {...props}
    />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="text-2xl md:text-3xl font-semibold text-foreground mb-4 mt-8"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="text-xl md:text-2xl font-semibold text-foreground mb-3 mt-6"
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-muted-foreground leading-relaxed mb-4" {...props} />
  ),
  a: (props: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-blue-600 hover:text-blue-800 underline decoration-blue-400 underline-offset-2 hover:decoration-blue-800 transition-colors duration-200"
      {...props}
    />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="bg-muted text-foreground px-2 py-1 rounded text-sm font-mono"
      {...props}
    />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="bg-card text-foreground p-4 rounded-lg overflow-x-auto mb-6 text-sm font-mono border border-border"
      {...props}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="list-disc list-inside text-muted-foreground mb-4 space-y-2"
      {...props}
    />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="list-decimal list-inside text-muted-foreground mb-4 space-y-2"
      {...props}
    />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-border pl-4 py-2 bg-muted/30 text-muted-foreground italic mb-6"
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
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Article header */}
      <header className="mb-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground mb-6">
            <span className="font-medium text-foreground hover:text-foreground/80 transition-colors duration-200">
              {post.author}
            </span>
            <span className="text-muted-foreground/40">|</span>
            <time
              dateTime={post.date}
              className="font-medium hover:text-foreground/80 transition-colors duration-200"
            >
              {format(new Date(post.date), "MMM d, yyyy")}
            </time>
            <span className="text-muted-foreground/40">|</span>
            <div className="flex items-center space-x-1">
              <svg
                className="w-4 h-4 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-medium hover:text-foreground/80 transition-colors duration-200">
                {post.readingTime}
              </span>
            </div>
          </div>

          {post.tags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm px-4 py-2 bg-muted text-muted-foreground rounded-md font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Article content */}
      <article>
        <div className="max-w-3xl mx-auto">
          <div className=" border-y py-4 border-border">
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

      <BlogComments />

      {/* Article footer */}
      <footer className="mt-16 py-8 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-muted text-foreground font-semibold rounded-xl shadow-sm hover:bg-muted-foreground hover:text-background hover:shadow transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
            >
              Back to Home
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-border text-foreground font-semibold rounded-xl hover:bg-muted hover:border-muted-foreground/50 hover:shadow transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
