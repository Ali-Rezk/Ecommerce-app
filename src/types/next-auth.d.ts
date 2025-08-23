import NextAuth, { User } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */

  interface User {
    user: { name: string; email: string; role: string };
    token: string;
  }

  interface Session {
    user: User["user"];
  }

  declare module "next-auth/jwt" {
    /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface JWT extends User {}
  }
}
