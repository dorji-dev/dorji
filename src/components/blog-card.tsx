import Link from 'next/link';
import { format } from 'date-fns';
import { BlogPost } from '@/lib/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group animate-slide-up">
      <Link href={`/blog/${post.slug}`}>
        <div className="p-8 md:p-10 border border-gray-200/60 bg-white hover:bg-gray-25 hover:border-gray-300 hover:shadow-soft-lg transition-all duration-300 rounded-2xl shadow-soft hover:scale-[1.01] h-full flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-4 line-clamp-2 leading-tight">
                {post.title}
              </h2>
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <time dateTime={post.date}>
                  {format(new Date(post.date), 'MMM dd, yyyy')}
                </time>
                <span>•</span>
                <span>{post.readingTime}</span>
              </div>
              <p className="text-gray-600 leading-relaxed line-clamp-3 text-lg">
                {post.description || post.excerpt}
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full font-medium border border-blue-200/50 hover:border-blue-300 transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
              {post.tags.length > 3 && (
                <span className="text-xs px-3 py-1.5 bg-gray-50 text-gray-600 rounded-full font-medium border border-gray-200/50">
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