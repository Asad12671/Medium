import { Appbar } from "../components/Appbar";
import { Blogcard } from "../components/Blogcard";
import { BlogcardSkeleton } from "../components/BlogSkeleton";
import { SideBlogCard } from "../components/Sideblogcard";
import { Link } from "react-router-dom";
import { useBlogs } from "../hooks/useBlogs";
import RecommendedTopics from "../components/RecommendedTopics";
import Blogbar from "../components/Blogbar";

export const Blogs = () => {
    const { loading, blogs } = useBlogs();

    if (loading) {
        return <div><BlogcardSkeleton /></div>;
    }

    if (!blogs || blogs.length === 0) {
        return <div>No blogs found.</div>;
    }

    return (
        <div>
            <Appbar />

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] items-start max-w-7xl mx-auto gap-10 px-4 md:px-10 lg:px-6 py-8">

                {/* Main Blog Section */}
                <div>
                    <div className="mb-6">
                        <Blogbar />
                    </div>

                    <div className="flex flex-col space-y-6">
                        {blogs.map((blog, index) => (
                            <Blogcard
                                key={index}
                                id={blog.id}
                                authorName={blog?.author?.name || "Unknown"}
                                title={blog?.title || "No Title"}
                                content={blog?.content || "No Content Available"}
                                publishDate={"10 Feb 2025"}
                            />
                        ))}
                    </div>
                </div>

                {/* Sidebar Section */}
                <div className="border-t lg:border-t-0 lg:border-l border-slate-200 pt-8 lg:pt-0 lg:pl-6">
                    <div className="space-y-8">
                        {/* Staff Picks */}
                        <div>
                            <div className="text-base font-medium font-sans mb-2">Staff Picks</div>
                            <div className="space-y-4">
                                {blogs.slice(0, 3).map((blog, index) => (
                                    <SideBlogCard
                                        key={index}
                                        id={blog.id}
                                        authorName={blog?.author?.name || "Unknown"}
                                        title={blog?.title || "No Title"}
                                    />
                                ))}
                            </div>
                            <Link to={`/blogs`}>
                                <div className="text-sm pt-2 text-black font-light hover:underline">
                                    See full list
                                </div>
                            </Link>
                        </div>

                        {/* Recommended Topics */}
                        <div>
                            <div className="text-base font-medium font-sans mb-3">Recommended Topics</div>
                            <RecommendedTopics />
                            <Link to={`/blogs`}>
                                <div className="text-sm pt-2 text-black font-light hover:underline">
                                    See more topics
                                </div>
                            </Link>
                        </div>

                        {/* Reading List */}
                        <div>
                            <div className="text-base font-medium font-sans mb-3">Reading list</div>
                            <div className="text-sm text-black font-light">
                                Click the ⭐ on any story to easily add it to your reading list or a custom list you can share.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;