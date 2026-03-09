import { Link } from "react-router-dom";
import { Avatar } from "./Blogcard";

interface SideBlogCardProps {
  id: number;
  authorName: string;
  title: string;
}

export const SideBlogCard = ({ id, authorName, title }: SideBlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="py-3 cursor-pointer">
        {/* Author Info */}
        <div className="flex items-center gap-2">
          <Avatar size={20} name={authorName} />
          <div className="text-xs sm:text-sm text-black font-light truncate max-w-[150px]">
            {authorName}
          </div>
        </div>

        {/* Blog Title */}
        <h3 className="text-sm sm:text-base pt-2 font-semibold text-gray-900 leading-snug">
          {title}
        </h3>

        {/* Time Metadata */}
        <div className="text-xs sm:text-sm pt-1 text-slate-500 font-light">
          2d ago
        </div>
      </div>
    </Link>
  );
};