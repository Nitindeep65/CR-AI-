"use client";
import React from "react";
import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t py-6 ">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0 text-sm text-gray-600 dark:text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} <span className="font-semibold text-blue-600 dark:text-blue-400">SmartReview AI</span>. Built with ❤️ using the MERN stack.
        </p>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          <Github size={18} />
          <span>GitHub</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
