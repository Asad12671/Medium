import { Link } from "react-router-dom";
import { Avatar } from "./Blogcard";

export const Appbar = () => {
    return (
        <div className="border-b border-slate-200 bg-white w-full">
            <div className="flex flex-wrap md:flex-nowrap justify-between items-center px-4 sm:px-6 md:px-10 py-3 gap-y-3">
                
                {/* Left: Logo + Search */}
                <div className="flex flex-wrap md:flex-nowrap items-center gap-4">
                    <Link to={`/blogs`}>
                        <div className="text-2xl sm:text-3xl font-extrabold font-serif text-gray-900 cursor-pointer">
                            Medium
                        </div>
                    </Link>

                    {/* Search Input */}
                    <div className="relative w-full max-w-[250px] hidden sm:block">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M21 21l-4.35-4.35M16.65 10.65a6 6 0 1 1-12 0 6 6 0 0 1 12 0z" />
                            </svg>
                        </div>
                        <input
                            type="search"
                            className="block w-full pl-10 pr-4 py-2 text-sm text-gray-900 rounded-full bg-[#F9F9F9] focus:outline-none"
                            placeholder="Search"
                        />
                    </div>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-4 sm:gap-6">
                    {/* Write Button */}
                    <Link to={`/publish`} className="flex items-center text-sm text-slate-700 hover:text-black transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                        <span className="ml-2 hidden sm:inline">Write</span>
                    </Link>

                    {/* Bell Icon */}
                    <button className="text-gray-600 hover:text-black transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                        </svg>
                    </button>

                    {/* Avatar */}
                    <Avatar size={28} name="Asad" />
                </div>
            </div>
        </div>
    );
};