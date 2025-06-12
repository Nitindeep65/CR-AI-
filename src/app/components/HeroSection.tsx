"use client";
import React from "react";

const HeroSection = () => {
  return (
    <section className="text-center py-20 px-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">
      <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
        AI-Powered Review Summaries
      </h2>

      <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-4">
        Instantly understand what your customers are saying —
        clean, concise, and insightful summaries powered by
      </p>

      <span className="block font-mono text-5xl text-blue-600 dark:text-blue-400 mb-8 transition-all hover:scale-105">
        AI
      </span>

      <a
        href="/submit"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition duration-200"
      >
        Submit a Review
      </a>
    </section>
  );
};

export default HeroSection;
