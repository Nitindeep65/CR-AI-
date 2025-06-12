"use client";
import React from "react";
import { MessageSquareQuote } from "lucide-react";

const summaries = [
  {
    text: "Customers love the intuitive interface and fast delivery times.",
    source: "UI/UX Feedback",
  },
  {
    text: "Support is helpful but response times could be improved.",
    source: "Customer Support",
  },
  {
    text: "Great value for price — especially on annual plans.",
    source: "Pricing Insights",
  },
];

const LatestSummaries = () => {
  return (
    <section className="py-24 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        Latest Customer Insights
      </h3>

      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
        {summaries.map((summary, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="flex items-start gap-4">
              <MessageSquareQuote className="h-7 w-7 text-blue-600 dark:text-blue-400 mt-1 shrink-0" />
              <div>
                <p className="text-gray-700 dark:text-gray-200 text-base leading-relaxed">
                  {summary.text}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 italic">
                  — {summary.source}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestSummaries;
