export default function Loading() {
  return (
    <div className="h-[100dvh] flex items-center justify-center bg-gray-50">
      <div className="max-w-[700px] mx-auto px-6">
        <div className="space-y-12 animate-fade-in">
          {/* Hero skeleton */}
          <div className="bg-white p-8 rounded-xl border border-gray-200/50">
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="h-14 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg animate-pulse"></div>
                <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg w-3/4 animate-pulse"></div>
              </div>
              <div className="space-y-3">
                <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse"></div>
                <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-2/3 animate-pulse"></div>
              </div>
              <div className="h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full w-48 animate-pulse"></div>
            </div>
          </div>

          {/* Loading indicator */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-3 text-gray-600 bg-white px-6 py-3 rounded-full border border-gray-200/50">
              <div className="w-5 h-5 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
              <span className="text-sm font-medium font-mono">
                Loading portfolio...
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
