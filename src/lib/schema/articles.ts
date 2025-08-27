import { sql } from "drizzle-orm";
import { user as userTable } from "./users";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

// Tables
export const article = sqliteTable("article", {
  id: integer().primaryKey(),
  title: text().notNull(),
  content: text().notNull(),
  userId: text()
    .notNull()
    .references(() => userTable.id, { onDelete: "cascade" }),
  createdAt: integer({ mode: "timestamp" })
    .notNull()
    .default(sql`(unixepoch())`),
});
