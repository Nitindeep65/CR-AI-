"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-center py-6 border-t mt-10 text-sm text-gray-500">
      &copy; {new Date().getFullYear()} SmartReview AI | Built with ❤️ in MERN |{" "}
      <a href="https://github.com" className="text-blue-500 hover:underline">GitHub</a>
    </footer>
  );
};

export default Footer;
