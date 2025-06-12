"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">SmartReview AI</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Home
            </Link>
            <Link href="/submit" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Submit Review
            </Link>
            <Link href="/Signup" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Sign Up
            </Link>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col px-6 py-4 space-y-2">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/submit" className="text-gray-700 hover:text-blue-600 font-medium transition" onClick={toggleMenu}>
              Submit Review
            </Link>
            <Link href="/Signup" className="text-gray-700 hover:text-blue-600 font-medium transition" onClick={toggleMenu}>
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
