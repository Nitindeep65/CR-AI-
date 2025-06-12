"use client";
import React from "react";

const HeroSection = () => {
  return (
    <section className="text-center py-20 px-4 bg-white text-gray-800">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        AI-Powered Review Summaries
      </h2>
      <p className="text-base md:text-lg max-w-xl mx-auto mb-6 text-gray-600">
        Instantly understand what your customers are saying — clean, concise, and insightful summaries powered by AI.
      </p>
      <a
        href="/submit"
        className="inline-block bg-gray-800 text-white px-5 py-2 rounded-md hover:bg-gray-700 transition"
      >
        Submit a Review
      </a>
    </section>
  );
};

export default HeroSection;
