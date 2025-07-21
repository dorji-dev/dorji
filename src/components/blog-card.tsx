import Link from "next/link";
import { format } from "date-fns";
import { BlogPost } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="p-4 sm:p-6 border border-border bg-card hover:bg-muted/50 transition-colors duration-200 rounded-lg h-full flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1 min-w-0">
              <h2 className="font-bold text-foreground group-hover:text-primary transition-colors duration-200 mb-2">
                {post.title}
              </h2>
              <div className="flex flex-wrap items-center gap-2 text-muted-foreground mb-2">
                <time dateTime={post.date}>
                  {format(new Date(post.date), "MMM dd, yyyy")}
                </time>
                <span>•</span>
                <span>{post.readingTime}</span>
              </div>
              <p className="text-muted-foreground line-clamp-3">
                {post.description || post.excerpt}
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4 pt-4 border-t border-border/50">
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 sm:px-3 py-1 sm:py-1.5 bg-muted text-muted-foreground rounded-md font-medium"
                >
                  {tag}
                </span>
              ))}
              {post.tags.length > 3 && (
                <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-muted text-muted-foreground/70 rounded-md font-medium">
                  +{post.tags.length - 3}
                </span>
              )}
            </div>
            <div className="flex items-center text-primary group-hover:text-primary/80 transition-colors duration-200 font-medium">
              <span className="mr-2">Read more</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
