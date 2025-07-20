import React from "react";

const GlobalSkeleton = () => {
  return (
    <div className="h-[100dvh] flex items-center justify-center bg-background">
      <div className="max-w-[700px] mx-auto px-6">
        <div className="space-y-12 animate-fade-in">
          {/* Hero skeleton */}
          <div className="bg-card p-8 rounded-xl border border-border/50">
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="h-14 bg-muted rounded-lg animate-pulse"></div>
                <div className="h-8 bg-muted rounded-lg w-3/4 animate-pulse"></div>
              </div>
              <div className="space-y-3">
                <div className="h-6 bg-muted rounded animate-pulse"></div>
                <div className="h-6 bg-muted rounded w-2/3 animate-pulse"></div>
              </div>
              <div className="h-12 bg-muted rounded-full w-48 animate-pulse"></div>
            </div>
          </div>

          {/* Loading indicator */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-3 text-muted-foreground bg-card px-6 py-3 rounded-full border border-border/50">
              <div className="w-5 h-5 border-2 border-muted-foreground border-t-foreground rounded-full animate-spin"></div>
              <span className="text-sm font-medium font-mono">
                Loading portfolio...
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalSkeleton;
