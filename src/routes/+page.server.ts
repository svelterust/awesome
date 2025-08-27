import { db } from "$lib/database";
import { article, user } from "$lib/schema";
import { error, redirect } from "@sveltejs/kit";
import { eq } from "drizzle-orm";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const articles = await db
    .select({
      title: article.title,
      content: article.content,
      createdAt: article.createdAt,
      username: user.name,
    })
    .from(article)
    .leftJoin(user, eq(article.userId, user.id))
    .orderBy(article.createdAt);
  return { articles };
};

export const actions: Actions = {
  default: async ({ request, locals: { user } }) => {
    // Get form data
    const formData = await request.formData();
    const { title, content } = Object.fromEntries(formData.entries()) as {
      title: string;
      content: string;
    };

    // Create new article
    if (!user) error(403);
    await db.insert(article).values({ title, content, userId: user.id });
    redirect(303, "/");
  },
};
