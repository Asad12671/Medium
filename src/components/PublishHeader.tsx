import { Avatar } from "./Blogcard";

const PublishHeader = () => {
  return (
    <div className="border-b border-slate-200 bg-white">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 sm:px-8 md:px-16 py-4 gap-4">
        
        {/* Left section */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <div className="text-2xl sm:text-3xl font-extrabold font-serif text-gray-900">Medium</div>
          <div className="text-sm sm:text-base text-slate-700 font-normal">Drafts of Asad</div>
          <div className="text-sm text-slate-500 font-light">Saved</div>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-4 flex-wrap">
          {/* Publish button */}
          <button
            type="button"
            className="text-white bg-green-600 font-medium rounded-full text-sm px-4 py-1.5 hover:bg-green-700 transition-colors"
          >
            Publish
          </button>

          {/* Bell Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>

          {/* Avatar */}
          <Avatar size={28} name="Nikhil Achale" />
        </div>
      </div>
    </div>
  );
};

export default PublishHeader;