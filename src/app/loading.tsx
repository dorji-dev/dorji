export default function Loading() {
  return (
    <div className="h-[100dvh] flex items-center justify-center bg-white">
      <div className="max-w-[700px] mx-auto px-6">
        <div className="space-y-8">
          {/* Hero skeleton */}
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-8 bg-gray-200 rounded w-3/4 animate-pulse"></div>
            </div>
            <div className="space-y-2">
              <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-6 bg-gray-200 rounded w-2/3 animate-pulse"></div>
            </div>
            <div className="h-10 bg-gray-200 rounded w-32 animate-pulse"></div>
          </div>

          {/* Loading indicator */}
          <div className="text-center pt-8">
            <div className="inline-flex items-center space-x-2 text-gray-600">
              <div className="w-4 h-4 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
              <span className="text-sm">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
