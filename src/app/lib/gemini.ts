import { GoogleGenerativeAI } from "@google/generative-ai";

// Make sure your GEMINI_API_KEY is defined in .env.local
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

export default genAI;
