import axiosInstance from "@/lib/axiosInstance";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "scott-point",
      type: "credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const payload = {
          identifier: credentials.email,
          password: credentials.password,
        };
        const res = await axiosInstance.post("auth/local", payload);

        return {
          ...res.data.user,
          name: res.data.user.username,
          id: res.data.user.id,
          access_token: res.data.jwt,
        };
      },
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/",
  },
  callbacks: {
    jwt({ token, user, account }) {
      if (account && user) {
        return {
          ...token,
          accessToken: user?.access_token,
        };
      }

      return token;
    },
    session({ session, token, user }) {
      session.user.accessToken = token.accessToken || token.jti;
      return session;
    },
  },
  theme: {
    colorScheme: "auto", // "auto" | "dark" | "light"
    brandColor: "", // Hex color code #33FF5D
    logo: "images/sp_shop_logo.svg", // Absolute URL to image
  },
  // Enable debug messages in the console if you are having problems
  debug: process.env.NODE_ENV === "development",
};

export default NextAuth(authOptions);
