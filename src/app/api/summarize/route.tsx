// src/app/api/summarize/route.ts

export async function POST(req: Request) {
  const { review } = await req.json();
  const API_KEY = process.env.GEMINI_API_KEY;

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

  const payload = {
    contents: [
      {
        parts: [{ text: `Summarize this review:\n\n${review}` }],
      },
    ],
  };

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error?.message || "Gemini API Error");
    }

    const summary =
      data?.candidates?.[0]?.content?.parts?.[0]?.text || "No summary generated";

    return Response.json({ summary });
  } catch (error: unknown) {
    console.error("Gemini API Error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return Response.json({ error: errorMessage }, { status: 500 });
  }
}
