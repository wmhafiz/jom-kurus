import { db } from '@/lib/db'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { type DefaultSession, type NextAuthOptions, getServerSession } from 'next-auth'
import DiscordProvider from "next-auth/providers/discord";

/**
 * Module augmentation for `next-auth` types.
 * Allows us to add custom properties to the `session` object and keep type
 * safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 **/

enum UserRole {
  ADMIN,
  USER
}
declare module "next-auth" {
    interface Session extends DefaultSession {
      user: {
        id: string;
        role: UserRole;
      } & DefaultSession["user"];
    }
    interface User {
      role: UserRole;
    }
  }
  
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/sign-in',
  },
  providers: [
    DiscordProvider({
        clientId: process.env.DISCORD_CLIENT_ID!,
        clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      }),
  ],
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user = user;
      }
      return session;
    },
    redirect() {
      return '/'
    },
  },
}

export const getAuthSession = () => getServerSession(authOptions)