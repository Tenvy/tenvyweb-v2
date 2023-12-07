import prisma from "@/utils/db";
import { SessionStrategy } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";

interface Credentials {
  username: string;
  password: string;
}

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
      strategy: 'jwt' as SessionStrategy
    },
    pages: {
      signIn: "/signin"
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          username: { label: "Username", type: "text", placeholder: "username" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials: Credentials, req: any) {
          const { username, password } = credentials;
  
          const user = await prisma.users.findUnique({
            where: {
              username: username,
            },
          });
          if (!user) {
            return null;
          }
  
          const confirmPass = await bcrypt.compare(password, user?.password);
  
          if (confirmPass) {
            return user;
          }
          return null;
        },
      } as any),
    ],
  
    callbacks: {
      async jwt({ token, session, trigger, user }: any) {
        if (user) {
          if (trigger === "update") {
            // if (session && session.uuid && session.username && session.role && session.profileImage) {
              return {
                ...token,
                ...session.uuid,
                ...session.username,
                ...session.role,
                ...session.profileImage,
              // };
            }
          }
          return {
            ...token,
            uuid: user.uuid,
            username: user.username,
            role: user.role,
            profileImage: user.profileImage
          }
        }
        return token
      },
      async session({ session, token, user }) {
        return {
          ...session,
          user: {
            ...session.user,
            uuid: token.uuid,
            username: token.username,
            role: token.role,
            profileImage: token.profileImage
          }
        }
  
      }
    }
  }