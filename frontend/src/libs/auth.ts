import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import axios, { AxiosError } from "axios";
import api from "@utils/api";
import { jwtDecode } from "jwt-decode";
import { Jwt } from "jsonwebtoken";
import { log } from "@components/helpers";
import dayjs from "dayjs";

declare module "next-auth" {
  interface User {
    id?: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    accessToken?: string | null;
    refreshToken?: string | null;
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async ({ email, password }) => {
        if (email === null && password === null) {
          return null;
        }

        try {
          const response = await axios.post(api("/v1/auth/login"), {
            email,
            password,
          });

          const res = await response.data;

          if (!res) {
            return null;
          }
          const accessToken = res.data.access_token;
          const refreshToken = res.data.refresh_token;

          const useInfo = {
            name: "test01",
            email: email as string,
          };
          return {
            accessToken,
            refreshToken,
            role: "user",
            name: useInfo.name,
            email: useInfo.email,
          };
        } catch (error) {
          if (error instanceof AxiosError) {
            log(`Error api login: ${JSON.stringify(error)}`);
          }
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, account, user }) => {
      if (token?.accessToken) {
        const decodeToken = jwtDecode(token.accessToken as string);
        token.accessTokenExpires = (decodeToken?.exp as number) * 1000;
      }

      if (account && user) {
        return {
          ...token,
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
          user,
        };
      }

      if (token?.accessTokenExpires) {
        const accessTokenExpire = token.accessTokenExpires as number;
        log(`Access Token: DateNow("${dayjs(Date.now()).format("DD-MM-YYYY HH:mm:ss")}") - ExpireDate("${dayjs(accessTokenExpire).format("DD-MM-YYYY HH:mm:ss")}")`);

        if (Date.now() < accessTokenExpire) {
          log(
            `Returning previous token "${dayjs(Date.now()).format("DD-MM-YYYY HH:mm:ss")}" < "${dayjs(accessTokenExpire).format("DD-MM-YYYY HH:mm:ss")}"`
          );
          return token;
        }
      }
      log("Refresh-Token now.");
      return refreshAccessToken(token);
    },
    session: async ({ session, token }) => {
      log(`Callback session: User "${token.name}"`);
      if (token) {
        return {
          ...session,
          user: token.user as User,
        };
      }

      return session;
    },
  },
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET ?? "terces-htua-u4nnif",
});

async function refreshAccessToken(token: Jwt | any) {
  try {
    const response = await axios.post(api("/v1/auth/refresh-token"), {
      refresh_token: `${process.env.NEXT_PUBLIC_AUTH_SECRET} ${token.refreshToken}`,
    });
    const new_token = await response.data;
    if (!new_token) {
      return null;
    }
    return {
      ...token,
      accessToken: new_token.data.access_token,
      refreshToken: new_token.data.refresh_token,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(`RefresAccessTokenError - ${error.message}`);
    }
    return null;
  }
}
