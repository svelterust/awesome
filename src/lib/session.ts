import { createAuthClient } from "better-auth/svelte";

export function authClient(baseURL: string) {
  return createAuthClient({ baseURL });
}
