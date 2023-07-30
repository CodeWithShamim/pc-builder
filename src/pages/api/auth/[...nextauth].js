import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      // redirectUri: "http://localhost:3000/api/auth/callback/google",
    }),
  ],
  pages: {
    signIn: `${process.env.NEXTAUTH_URL}/login`,
  },
};

export default NextAuth(authOptions);
