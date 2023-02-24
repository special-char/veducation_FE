// "use client";
// import { createContext } from "react";

// export const AuthContext = createContext();

// const AuthContextProvider = ({ children }) => {
//   return <AuthContext.Provider>{children}</AuthContext.Provider>;
// };

// export default AuthContextProvider;
"use client";

import { SessionProvider } from "next-auth/react";

export default function AuthContext({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
