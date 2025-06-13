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
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-600 text-lg">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="bg-white shadow-xl rounded-xl p-10 max-w-2xl w-full text-center">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-6 tracking-tight leading-tight">
          SmartReview AI
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Leverage the power of AI to automatically summarize customer reviews and gain clear insights instantly.
        </p>
        <button
          onClick={() => signIn("github")}
          className="px-6 py-3 bg-black text-white rounded-md text-lg hover:bg-gray-800 transition shadow-sm"
        >
          Sign in with GitHub
        </button>
        <p className="mt-4 text-sm text-gray-500">
          No account needed – just use your GitHub profile to get started.
        </p>
      </div>
    </div>
  );
}
