"use client";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function ReviewSuccessPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-6 text-center">
      <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Review Submitted!</h1>
      <p className="text-gray-600 mb-6 max-w-md">
        Your review has been successfully submitted. Our AI will now analyze and summarize the insights.
        Thank you for your contribution!
      </p>
      <Link
        href="/"
        className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition duration-200"
      >
        Go to Home
      </Link>
    </div>
  );
}
