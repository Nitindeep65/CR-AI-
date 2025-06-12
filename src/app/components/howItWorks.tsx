"use client";
import React from "react";
import { Sparkles, Wand2, SearchCheck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Submit",
      description: "Write your review — product, service, or experience.",
      icon: (
        <div className="bg-gradient-to-br from-blue-500 to-blue-300 p-4 rounded-full shadow-lg">
          <Sparkles className="h-6 w-6 text-white" />
        </div>
      ),
    },
    {
      title: "Summarize",
      description: "Let our AI generate an instant summary.",
      icon: (
        <div className="bg-gradient-to-br from-purple-500 to-purple-300 p-4 rounded-full shadow-lg">
          <Wand2 className="h-6 w-6 text-white" />
        </div>
      ),
    },
    {
      title: "Discover",
      description: "Read powerful insights, without the noise.",
      icon: (
        <div className="bg-gradient-to-br from-green-500 to-green-300 p-4 rounded-full shadow-lg">
          <SearchCheck className="h-6 w-6 text-white" />
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 text-center">
      <h3 className="text-4xl font-bold mb-12 text-gray-800 dark:text-white">
        How It Works
      </h3>
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition duration-300"
          >
            <div className="flex justify-center mb-6">{step.icon}</div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {idx + 1}. {step.title}
            </h4>
            <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
