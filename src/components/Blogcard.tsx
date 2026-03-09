import { Link } from "react-router-dom";

interface BlogcardProps {
  id: number;
  authorName: string;
  title: string;
  content: string;
  publishDate: string;
}

export const Blogcard = ({ id, authorName, title, content, publishDate }: BlogcardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="border-b border-slate-200 px-4 py-5 cursor-pointer hover:bg-gray-50 transition-colors">
        
        {/* Author Info */}
        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600 mb-2">
          <div className="flex items-center gap-2">
            <Avatar size={20} name={authorName} />
            <span className="font-medium">{authorName}</span>
          </div>
          <Circle />
          <span className="text-slate-500">{publishDate}</span>
        </div>

        {/* Title */}
        <div className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
          {title}
        </div>

        {/* Content Preview */}
        <div className="text-sm sm:text-base text-slate-700 font-light line-clamp-2">
          {content.slice(0, 100)}...
        </div>

        {/* Read Time */}
        <div className="text-xs text-slate-500 font-light pt-2">
          {`${Math.ceil(content.length / 100)} min read`}
        </div>
      </div>
    </Link>
  );
};

export function Avatar({ name, size }: { name: string; size: number }) {
  return (
    <div
      className="inline-flex items-center justify-center rounded-full bg-gray-500 text-white"
      style={{ width: `${size}px`, height: `${size}px`, fontSize: `${size / 2}px` }}
    >
      <span>{name[0]}</span>
    </div>
  );
}

const Circle = () => {
  return <div className="w-1 h-1 rounded-full bg-gray-400"></div>;
};