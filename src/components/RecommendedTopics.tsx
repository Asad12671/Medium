export default function RecommendedTopics() {
  const topics = [
    "Data Science",
    "Self Improvement",
    "Relationships",
    "Writing",
    "Technology",
    "Cryptocurrency",
    "Politics",
  ];

  return (
    <div className="flex flex-wrap gap-3 px-2 sm:px-0">
      {topics.map((topic, index) => (
        <button
          key={index}
          type="button"
          className="text-black bg-[#f2f2f2] font-light rounded-full cursor-pointer text-sm sm:text-base px-4 py-2 transition-colors hover:bg-[#e2e2e2]"
        >
          {topic}
        </button>
      ))}
    </div>
  );
}