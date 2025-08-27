import { sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

// Tables
export const articleTable = sqliteTable("article", {
  id: integer().primaryKey(),
  title: text().notNull(),
  content: text().notNull(),
  createdAt: integer({ mode: "timestamp" })
    .notNull()
    .default(sql`(unixepoch())`),
});
