import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { auth } from "$lib/auth";

export const actions: Actions = {
  default: async ({ request }) => {
    // Get form data
    const formData = await request.formData();
    const { email, password } = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    // Register user
    try {
      const data = await auth.api.signInEmail({
        body: {
          email,
          password,
          rememberMe: true,
        },
        headers: request.headers,
      });
      console.info("Logged in user:", data);
    } catch (error) {
      console.error("Login error:", error);
      return fail(500, {
        email,
        password,
        error: "Login failed. Maybe invalid credentials?",
      });
    }
    redirect(303, "/");
  },
};
