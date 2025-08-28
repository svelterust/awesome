import { db } from "$lib/database";
import { env } from "$env/dynamic/private";
import { getRequestEvent } from "$app/server";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { sveltekitCookies } from "better-auth/svelte-kit";

export const auth = betterAuth({
  baseURL: env.ORIGIN ?? "http://localhost:5173",
  database: drizzleAdapter(db, {
    provider: "sqlite",
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [sveltekitCookies(getRequestEvent)],
});
