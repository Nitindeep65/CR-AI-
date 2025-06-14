"use client";

import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";

export default function HomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/Dashboard");
    }
  }, [session, router]);

  if (status === "loading") {
    return <div className="text-center mt-10 text-gray-700 dark:text-gray-200">Loading...</div>;
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-6">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-900 shadow-2xl rounded-2xl p-10 text-center space-y-6 transition-all duration-300">
        <h1 className="text-5xl font-extrabold text-blue-700 dark:text-blue-400">SmartReview AI</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Get instant AI summaries of your customer reviews. Boost your productivity and gain insights effortlessly.
        </p>

        <div className="flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2972/2972492.png"
            alt="AI Summary"
            className="w-32 h-32"
          />
        </div>

        <button
          onClick={() => signIn("github")}
          className="flex items-center justify-center gap-3 px-6 py-3 mt-4 bg-black text-white rounded-lg text-lg font-medium hover:bg-gray-800 transition"
        >
          <FaGithub className="w-5 h-5" />
          Sign in with GitHub
        </button>
      </div>
    </main>
  );
}
