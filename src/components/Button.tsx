export const Button = ({ btn }: { btn: string }) => {
  return (
    <button
      type="button"
      className="text-white bg-green-700 font-medium rounded-full text-sm md:text-base px-4 md:px-6 py-2 md:py-2.5 text-center mb-2 transition-colors hover:bg-green-800"
    >
      {btn}
    </button>
  );
};

export default Button;