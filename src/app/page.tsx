"use client";

import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/Dashboard");
    }
  }, [session, router]);

  if (status === "loading") {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">Welcome to SmartReview AI</h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-lg">
        Summarize your customer reviews using AI for faster insights and better decisions.
      </p>
      <button
        onClick={() => signIn("github")}
        className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition"
      >
        Sign in with GitHub
      </button>
    </div>
  );
}
