import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { auth } from "$lib/auth";

export const actions: Actions = {
  default: async ({ request }) => {
    // Get form data
    const formData = await request.formData();
    const { name, email, password } = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      password: string;
    };

    // Register user
    try {
      const data = await auth.api.signUpEmail({
        body: {
          name,
          email,
          password,
        },
      });
      console.info("Created user:", data);
    } catch (error) {
      console.error("Sign up error:", error);
      return fail(500, {
        name,
        email,
        password,
        error: "Registration failed. User already exists.",
      });
    }
    redirect(303, "/");
  },
};
