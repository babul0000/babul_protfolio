"use client";

export default function SkeletonLoader() {
  return (
    <div className="min-h-screen bg-themeBg text-themeText font-sans transition-colors duration-300 p-6 md:p-12 max-w-7xl mx-auto space-y-12">
      {/* Header / Nav Skeleton */}
      <div className="flex items-center justify-between h-16 w-full px-6 rounded-full border border-themeBorder bg-themeCard/50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg skeleton-shimmer shrink-0" />
          <div className="w-20 h-4 rounded-md skeleton-shimmer" />
        </div>
        <div className="hidden md:flex items-center gap-3">
          <div className="w-16 h-6 rounded-full skeleton-shimmer" />
          <div className="w-16 h-6 rounded-full skeleton-shimmer" />
          <div className="w-16 h-6 rounded-full skeleton-shimmer" />
          <div className="w-16 h-6 rounded-full skeleton-shimmer" />
        </div>
        <div className="w-20 h-9 rounded-xl skeleton-shimmer" />
      </div>

      {/* Main Grid: Hero Section Skeleton */}
      <div className="grid lg:grid-cols-12 gap-12 items-center pt-8">
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="w-40 h-8 rounded-full skeleton-shimmer" />
          <div className="w-24 h-4 rounded-md skeleton-shimmer" />
          <div className="space-y-3">
            <div className="w-full h-12 md:h-16 rounded-2xl skeleton-shimmer" />
            <div className="w-3/4 h-12 md:h-16 rounded-2xl skeleton-shimmer" />
          </div>
          <div className="w-11/12 h-16 rounded-2xl skeleton-shimmer" />
          <div className="flex flex-wrap items-center gap-4">
            <div className="w-32 h-12 rounded-xl skeleton-shimmer" />
            <div className="w-32 h-12 rounded-xl skeleton-shimmer" />
            <div className="w-11 h-11 rounded-xl skeleton-shimmer" />
            <div className="w-11 h-11 rounded-xl skeleton-shimmer" />
          </div>
        </div>

        {/* Right Column Profile Image Box */}
        <div className="lg:col-span-5 relative">
          <div className="relative w-full aspect-[4/5] max-w-[320px] mx-auto rounded-[3rem] border border-themeBorder skeleton-shimmer" />
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-themeBorder">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="p-6 border border-themeBorder bg-themeCard rounded-3xl space-y-3">
            <div className="w-16 h-8 rounded-lg skeleton-shimmer" />
            <div className="w-24 h-3 rounded-md skeleton-shimmer" />
          </div>
        ))}
      </div>

      {/* Ecosystem strip skeleton */}
      <div className="h-20 w-full rounded-2xl border border-themeBorder bg-themeCard/30 skeleton-shimmer" />

      {/* Skills layout skeleton */}
      <div className="space-y-6">
        <div className="flex flex-col items-center space-y-3 text-center">
          <div className="w-20 h-4 rounded-full skeleton-shimmer" />
          <div className="w-48 h-8 rounded-xl skeleton-shimmer" />
        </div>
        <div className="flex justify-center gap-3">
          <div className="w-24 h-9 rounded-full skeleton-shimmer" />
          <div className="w-24 h-9 rounded-full skeleton-shimmer" />
          <div className="w-24 h-9 rounded-full skeleton-shimmer" />
          <div className="w-24 h-9 rounded-full skeleton-shimmer" />
        </div>
        <div className="max-w-3xl mx-auto p-8 border border-themeBorder bg-themeCard rounded-3xl space-y-4">
          <div className="w-40 h-6 rounded-md skeleton-shimmer" />
          <div className="grid sm:grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="p-4 border border-themeBorder bg-themeBg rounded-2xl h-14 skeleton-shimmer" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
