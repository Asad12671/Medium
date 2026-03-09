const Quote = () => {
  return (
    <div className="bg-slate-200 min-h-screen flex items-center justify-center px-4 py-10">
      <div className="max-w-xl text-center">
        <h2 className="font-bold text-xl sm:text-2xl md:text-3xl leading-relaxed text-gray-800">
          “A blog is more than words; it’s a voice, a story, and a connection to the world.”
        </h2>
        <div className="text-lg sm:text-xl mt-6 font-semibold text-gray-700">
          Md Asad Nehal
        </div>
        <div className="text-sm sm:text-base font-light text-slate-500">
          CEO | Medium
        </div>
      </div>
    </div>
  );
};

export default Quote;