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
    <section className="py-20 px-6 bg-gray-50">
      <h3 className="text-3xl font-semibold text-center mb-10 text-gray-800">
        Latest Customer Insights
      </h3>
      <div className="max-w-4xl mx-auto space-y-6">
        {summaries.map((summary, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
          >
            <div className="flex items-start gap-3">
              <MessageSquareQuote className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <p className="text-gray-700 text-base">{summary.text}</p>
                <p className="text-sm text-gray-400 mt-2">— {summary.source}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestSummaries;
