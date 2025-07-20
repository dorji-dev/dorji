import Link from "next/link";
import { format } from "date-fns";
import { BlogPost } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group">
      <Link href={`/blog/${post.slug}`}>
        <div className="p-4 sm:p-6 md:p-8 border border-border bg-card hover:bg-muted/50 transition-colors duration-200 rounded-lg h-full flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-4 sm:mb-6">
            <div className="flex-1 min-w-0">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground group-hover:text-blue-600 transition-colors duration-200 mb-3 sm:mb-4 line-clamp-2 leading-tight">
                {post.title}
              </h2>
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm text-muted-foreground mb-3 sm:mb-4">
                <time dateTime={post.date}>
                  {format(new Date(post.date), "MMM dd, yyyy")}
                </time>
                <span className="hidden sm:inline">•</span>
                <span>{post.readingTime}</span>
              </div>
              <p className="text-muted-foreground leading-relaxed line-clamp-3 text-base sm:text-lg">
                {post.description || post.excerpt}
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border/50">
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 sm:px-3 py-1 sm:py-1.5 bg-muted text-muted-foreground rounded-md font-medium"
                >
                  {tag}
                </span>
              ))}
              {post.tags.length > 3 && (
                <span className="text-xs px-2 sm:px-3 py-1 sm:py-1.5 bg-muted text-muted-foreground/70 rounded-md font-medium">
                  +{post.tags.length - 3}
                </span>
              )}
            </div>
            <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors duration-200 font-medium">
              <span className="text-sm font-medium mr-2">Read more</span>
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
