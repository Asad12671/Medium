import axios from "axios";
import { Avatar } from "../components/Blogcard";
import { BACKEND_URL } from "../config";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Publish = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const navigate = useNavigate();

  const handlePublish = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    const token = localStorage.getItem("token");
    if (!token) {
      setError("You must be signed in.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/blog`,
        { title, content: desc },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      navigate(`/blog/${response.data.blog.id}`);
      setSuccess("Blog published successfully!");
    } catch (err: any) {
      if (err.response) {
        setError(err.response.data.message || "Failed to publish the blog.");
      } else if (err.request) {
        setError("Network error. Please try again.");
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4 sm:px-10 md:px-20 lg:px-36 py-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center py-4 gap-4">
        <div className="flex items-center flex-wrap gap-3">
          <Link to={`/blogs`}>
            <div className="text-3xl font-extrabold font-serif cursor-pointer">
              Medium
            </div>
          </Link>
          <div className="text-sm text-slate-700 font-normal">Drafts of Nikhil</div>
          <div className="text-sm text-slate-500 font-light">Saved</div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={handlePublish}
            disabled={loading}
            className="text-white bg-green-600 rounded-full text-sm px-4 py-2 font-medium"
          >
            {loading ? "Publishing..." : "Publish"}
          </button>

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

          <Avatar size={28} name="Nikhil Achale" />
        </div>
      </div>

      {/* Editor Section */}
      <div className="mt-6">
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="bg-slate-50 font-serif text-xl md:text-3xl text-gray-900 border-b w-full p-3 outline-none mb-4"
        />

        <textarea
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Tell your story..."
          className="bg-slate-50 font-serif text-lg md:text-2xl text-gray-900 border-b w-full h-64 p-3 outline-none resize-none"
        />
      </div>

      {/* Feedback Messages */}
      {success && (
        <div className="text-green-600 mt-4 text-sm sm:text-base">{success}</div>
      )}
      {error && (
        <div className="text-red-600 mt-4 text-sm sm:text-base">{error}</div>
      )}
    </div>
  );
};

export default Publish;