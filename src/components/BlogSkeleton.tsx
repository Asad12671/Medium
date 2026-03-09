// Skeleton Loader Component
export const BlogcardSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Appbar Skeleton */}
      <div className="border-b border-slate-200 py-4 px-4 sm:px-6 md:px-10 flex flex-wrap justify-between items-center gap-4">
        {/* Left section: Logo + Search bar */}
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <div className="h-6 w-24 bg-gray-300 rounded"></div>
          <div className="h-8 w-full sm:w-64 bg-gray-300 rounded-full"></div>
        </div>

        {/* Right section: Avatar */}
        <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 md:grid-cols-[65%_35%] items-start max-w-7xl mx-auto gap-6 md:gap-10 px-4 sm:px-6 md:px-10 mt-6">
        
        {/* Main Blog Section Skeleton */}
        <div>
          <div className="h-6 w-32 bg-gray-300 rounded mb-4"></div>
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="mb-6 p-4 border border-gray-200 rounded-lg space-y-2"
            >
              <div className="h-6 w-3/5 bg-gray-300 rounded"></div>
              <div className="h-4 w-1/3 bg-gray-300 rounded"></div>
              <div className="h-16 w-full bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>

        {/* Sidebar Skeleton */}
        <div className="border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0 md:pl-6">
          <div className="space-y-4">
            <div className="h-6 w-32 bg-gray-300 rounded"></div>
            {[...Array(3)].map((_, index) => (
              <div key={index} className="h-12 w-full bg-gray-300 rounded"></div>
            ))}
            <div className="h-4 w-24 bg-gray-300 rounded mt-4"></div>

            <div className="h-6 w-32 bg-gray-300 rounded mt-6"></div>
            <div className="h-8 w-full bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};