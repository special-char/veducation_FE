import axiosInstance from "@/lib/axiosInstance";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  // Configure one or more authentication providers
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
        console.log({ respose: res.data });
        const { id, email, username } = res?.data?.user;
        const userObj = { id, email, name: username };

        return userObj;
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
      console.log({ token, user, account }, "jwt");

      if (account && user) {
        return {
          ...token,
          accessToken: user?.data?.access_token,
          // roles: user?.data?.user?.roles,
        };
      }

      return token;
      // return { ...token, ...user, ...account };
    },
    session({ session, token, user }) {
      console.log({ session, token, user }, "{ session, token, user }");
      session.user.accessToken = token.accessToken || token.jti;
      session.user.roles = token.roles;
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
});
