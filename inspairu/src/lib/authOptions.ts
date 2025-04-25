import { v4 as uuidv4 } from "uuid";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      httpOptions: {
        timeout: 10000,
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const user = await prisma.users.findUnique({
          where: { email: credentials?.email },
        });

        if (!user) throw new Error("No user found");

        const isValid = await bcrypt.compare(
          credentials?.password || "",
          user.password
        );

        if (!isValid) throw new Error("Invalid password");

        return {
          ...user,
          id: user.id.toString(),
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, account }) {
      if (user && account?.provider !== "credentials") {
        const existingUser = await prisma.users.findUnique({
          where: { email: user.email },
          include: { accounts: true },
        });

        if (!existingUser) {
          const fullName = user.name || "";
          const [firstName = "", lastName = ""] = fullName.split(" ");
          const username = user.email?.split("@")[0];

          const newUser = await prisma.users.create({
            data: {
              uuhid: uuidv4(),
              email: user.email!,
              first_name: firstName,
              last_name: lastName,
              username,
              password: "",
              auth_key: account.provider,
              accounts: {
                create: {
                  type: account.type!,
                  provider: account.provider,
                  providerAccountId: account.providerAccountId,
                  access_token: account.access_token,
                  refresh_token: account.refresh_token,
                  expires_at: account.expires_at,
                  token_type: account.token_type,
                  id_token: account.id_token,
                },
              },
            },
          });

          token.email = newUser.email;
          token.uuhid = newUser.uuhid;
          token.userName = newUser.username;
        } else {
          const existingAccount = existingUser.accounts.find(
            (acc) => acc.provider === account.provider
          );

          if (!existingAccount) {
            await prisma.account.create({
              data: {
                userId: existingUser.id,
                type: account.type!,
                provider: account.provider,
                providerAccountId: account.providerAccountId,
                access_token: account.access_token,
                refresh_token: account.refresh_token,
                expires_at: account.expires_at,
                token_type: account.token_type,
                id_token: account.id_token,
              },
            });
          }

          token.email = existingUser.email;
          token.uuhid = existingUser.uuhid;
          token.userName = existingUser.username;
        }
      }

      if (user && account?.provider === "credentials") {
        token.email = user.email;
        token.uuhid = user.uuhid;
        token.userName = user.username;
      }

      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.email = token.email;
        session.user.uuhid = token.uuhid;
        session.user.userName = token.userName;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/auth/signin",
  },

  secret: process.env.NEXTAUTH_SECRET,
};
