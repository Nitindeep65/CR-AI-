/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Sparkles } from "lucide-react";

export default function SubmitReviewPage() {
  const [review, setReview] = useState("");
  const [error, setError] = useState("");
  const [aiSummary, setAiSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!review.trim()) {
      setError("Please enter your review before submitting.");
      return;
    }

    setLoading(true);
    setError("");
    setAiSummary("");

    try {
      const response = await axios.post("/api/summarize", { review });

      if (response.status === 200 && response.data.summary) {
        setAiSummary(response.data.summary);
      } else {
        setError(response.data.error || "AI did not return a summary.");
      }
    } catch (err: any) {
      console.error(err);
      setError(
        err?.response?.data?.error || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (aiSummary && summaryRef.current) {
      summaryRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [aiSummary]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 py-12">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 text-center">
          Submit a Review
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
          Share your experience. Our AI will summarize it instantly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            aria-label="Review text"
            className="w-full h-40 p-4 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            placeholder="Write your review here..."
            value={review}
            onChange={(e) => {
              setReview(e.target.value);
              setError("");
            }}
          />
          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center items-center bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-200 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? (
              <span className="animate-pulse">Summarizing...</span>
            ) : (
              "Submit Review"
            )}
          </button>
        </form>

        {aiSummary && (
          <div
            ref={summaryRef}
            className="mt-8 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-800 border-l-4 border-blue-500 dark:border-blue-400 rounded-xl p-6 shadow-md transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="text-blue-500 dark:text-blue-300 w-6 h-6" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                AI Summary
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-200 text-base leading-relaxed">
              {aiSummary}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
