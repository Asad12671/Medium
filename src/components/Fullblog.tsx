import { BlogTypes } from "../hooks/useBlogs";
import { Avatar } from "./Blogcard";

export const Fullblog = ({ blog }: { blog: BlogTypes }) => {
  return (
    <div className="flex justify-center items-start bg-white">
      <div className="w-full max-w-screen-lg px-4 sm:px-6 md:px-10 pt-10 md:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Blog Content */}
          <div className="md:col-span-8 flex flex-col">
            <div className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              {blog.title}
            </div>
            <div className="text-sm sm:text-base text-slate-500 pt-2">
              Posted on 24 Feb 2024
            </div>
            <div className="pt-4 text-justify text-base leading-relaxed text-slate-800">
              {blog.content}
            </div>
          </div>

          {/* Author Section */}
          <div className="md:col-span-4 text-slate-700 text-base">
            <div className="font-medium mb-2 text-slate-600">Author</div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <Avatar size={36} name={blog.author.name || "Unknown"} />
              <div>
                <div className="text-lg font-bold text-gray-900">
                  {blog.author.name || "Unknown"}
                </div>
                <div className="pt-1 text-sm text-slate-600">
                  Designs generated from v0.dev — an AI service by Vercel that lets you generate frontends.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Fullblog;