"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">SmartReview AI</h1>
      <div className="flex space-x-4">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <Link href="/submit" className="hover:text-blue-600">Submit Review</Link>
        <Link href="/Signup" className="hover:text-blue-600">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
