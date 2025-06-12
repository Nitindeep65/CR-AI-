"use client";
import React from "react";
import { Sparkles, Wand2, SearchCheck } from "lucide-react"; // Optional: for clean modern icons

const HowItWorks = () => {
  const steps = [
    {
      title: "Submit",
      description: "Write your review — product, service, or experience.",
      icon: <Sparkles className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Summarize",
      description: "Let our AI generate an instant summary.",
      icon: <Wand2 className="h-6 w-6 text-purple-600" />,
    },
    {
      title: "Discover",
      description: "Read powerful insights, without the noise.",
      icon: <SearchCheck className="h-6 w-6 text-green-600" />,
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 text-center">
      <h3 className="text-3xl font-semibold mb-12 text-gray-800">
        How It Works
      </h3>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="p-8 bg-white rounded-xl border hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex justify-center mb-4">{step.icon}</div>
            <h4 className="text-lg font-medium text-gray-900 mb-2">
              {idx + 1}. {step.title}
            </h4>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
