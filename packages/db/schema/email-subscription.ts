import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { sql } from "drizzle-orm";
import { timestamp, varchar } from "drizzle-orm/mysql-core";

import { mySqlTable } from "./_table";

export const emailSubscriptions = mySqlTable("email_subscriptions", {
  id: varchar("id", { length: 256 }).primaryKey(),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  email: varchar("email", { length: 256 }).unique(),
});

export type EmailSubscriptionInsert = InferInsertModel<
  typeof emailSubscriptions
>;
export type EmailSubscriptionSelect = InferSelectModel<
  typeof emailSubscriptions
>;
