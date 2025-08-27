import config from "../master.css";
import { render } from "@master/css-server";
import { auth } from "$lib/auth";
import { svelteKitHandler } from "better-auth/svelte-kit";
import { building } from "$app/environment";
import { sequence } from "@sveltejs/kit/hooks";
import type { Handle } from "@sveltejs/kit";

const cssHandler: Handle = async ({ event, resolve }) => {
  return await resolve(event, {
    transformPageChunk: ({ html }: { html: string }) => render(html, config).html,
  });
};

const authHandler: Handle = async ({ event, resolve }) => {
  // Make session and user available on server
  const session = await auth.api.getSession({
    headers: event.request.headers,
  });
  if (session) {
    event.locals.session = session.session;
    event.locals.user = session.user;
  }
  return svelteKitHandler({ event, resolve, auth, building });
};

export const handle = sequence(authHandler, cssHandler);
