// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import { authOptions } from "@/app/lib/authoptions"; // Adjust path if needed

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
