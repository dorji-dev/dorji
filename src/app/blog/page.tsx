import { getAllBlogPosts } from "@/lib/blog";
import BlogCard from "@/components/blog-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Dorji Tshering",
  description:
    "Thoughts, tutorials, and insights about web development, programming, and technology.",
  openGraph: {
    title: "Blog | Dorji Tshering",
    description:
      "Thoughts, tutorials, and insights about web development, programming, and technology.",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Hero section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          Blog
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
          Thoughts and insights about web development, programming, and
          technology.
        </p>
        {posts.length > 0 && (
          <div className="inline-flex items-center space-x-2 text-sm text-muted-foreground bg-muted px-4 py-2 rounded-lg border border-border">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            <span>
              {posts.length} {posts.length === 1 ? "article" : "articles"}
            </span>
          </div>
        )}
      </div>

      {/* Content section */}
      {posts.length === 0 ? (
        <div className="text-center py-20">
          <div className="bg-muted p-12 rounded-lg border border-border max-w-md mx-auto">
            <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              No posts yet
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Check back soon for new content!
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
