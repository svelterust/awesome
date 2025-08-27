import { db } from "$lib/database";
import { articleTable } from "$lib/schema";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const articles = await db.select().from(articleTable).orderBy(articleTable.createdAt);
  return { articles };
};
