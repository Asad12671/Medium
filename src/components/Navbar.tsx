import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="bg-[#F7F4ED] w-full">
            <div className="border-b flex justify-between items-center py-5 px-6 md:px-36">
                <Link to={`/blogs`}>
                    <div className="text-3xl cursor-pointer font-extrabold font-serif">Medium</div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-5">
                    {/* <div className="text-sm font-light">Our Story</div>
                    <div className="text-sm font-light">Membership</div>
                    <div className="text-sm font-light">Write</div>
                    <div className="text-sm font-light">Signin</div> */}
                    <button
                        onClick={() => navigate('/signup')}
                        type="button"
                        className="text-white bg-blue-500 font-medium rounded-full cursor-pointer text-sm px-4 py-2"
                    >
                        Get Started
                    </button>
                </div>

                {/* Hamburger Icon for Mobile */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden bg-[#F7F4ED] px-6 py-4 border-t flex flex-col items-end text-right space-y-3">
                    {/* <div className="text-sm font-light">Our Story</div>
                    <div className="text-sm font-light">Membership</div>
                    <div className="text-sm font-light">Write</div>
                    <div className="text-sm font-light">Signin</div> */}
                    <button
                        onClick={() => {
                            setMenuOpen(false);
                            navigate('/signup');
                        }}
                        type="button"
                        className="text-white bg-black font-medium rounded-full cursor-pointer text-sm px-4 py-2"
                    >
                        Get Started
                    </button>
                </div>
            )}
        </div>
    );
};

export default Navbar;