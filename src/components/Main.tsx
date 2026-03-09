import { useNavigate } from "react-router-dom";

const Main = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-[#F7F4ED] border-b">
            <div className="grid grid-cols-1 md:grid-cols-12 px-6 md:px-36 py-16 md:py-44 gap-10">
                {/* Left Text Section */}
                <div className="md:col-span-8 flex flex-col justify-center">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-semibold leading-tight text-gray-900">
                        Human <br className="hidden md:block" /> stories & ideas
                    </h1>

                    <h2 className="text-lg sm:text-xl md:text-2xl py-6 font-light text-gray-700 max-w-xl">
                        A place to read, write, and deepen your understanding. Explore a world of thoughts, knowledge, and voices.
                    </h2>

                    <button
                        onClick={() => navigate('/signin')}
                        type="button"
                        className="text-white bg-black rounded-full font-light cursor-pointer text-base md:text-lg px-6 md:px-7 py-2 w-fit transition-all hover:scale-105"
                    >
                        Start reading
                    </button>
                </div>

                {/* Right Image Section - Hidden on Small Devices */}
                <div className="hidden md:flex md:col-span-4 items-end justify-end">
                    <img
                        src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png"
                        alt="Medium Banner"
                        className="w-full max-w-[300px] lg:max-w-[460px] h-auto object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default Main;