import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-white fixed top-0 left-0 w-full shadow-md z-50 py-5">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div>
                    <Link to="/" className="font-bold tracking-wide">
                        Logo
                    </Link>
                </div>
                <div className="text-black hidden md:flex items-center space-x-6">
                    <Link
                        to="/"
                        className="hover:text-green-300 transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110"
                    >
                        Home
                    </Link>
                    <Link
                        to="/products"
                        className="hover:text-green-300 transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110"
                    >
                        Products
                    </Link>
                    <Link
                        to="/services"
                        className="hover:text-green-300 transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110"
                    >
                        Services
                    </Link>
                    <Link
                        to="/become-a-partner"
                        className="hover:text-green-300 transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110"
                    >
                        Become a Partner
                    </Link>
                    <Link
                        to="/solar-calculator"
                        className="hover:text-green-300 transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110"
                    >
                        Solar Calculator
                    </Link>
                    <Link
                        to="/blog"
                        className="hover:text-green-300 transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110"
                    >
                        Blog
                    </Link>
                    <Link
                        to="/about"
                        className="hover:text-green-300 transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110"
                    >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        className="hover:text-green-300 transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110"
                    >
                        Contact Us
                    </Link>
                </div>
                <div className="font-bold px-4">
                    <Link
                        to="/login"
                    >
                        <button className="mr-2">Login</button>
                    </Link>
                    <Link
                        to="/signup"
                    >
                        <button className="mr-2">Sign Up</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
