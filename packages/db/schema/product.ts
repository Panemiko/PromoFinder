import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { sql } from "drizzle-orm";
import { timestamp, varchar } from "drizzle-orm/mysql-core";

import { mySqlTable } from "./_table";

export const products = mySqlTable("products", {
  id: varchar("id", { length: 256 }).primaryKey(),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at").onUpdateNow(),
  name: varchar("name", { length: 256 }).notNull(),
  description: varchar("description", { length: 1024 }),
  photoId: varchar("photo_id", { length: 256 }).notNull(),
  eanCode: varchar("ean_code", { length: 256 }),
});

export type ProductsInsert = InferInsertModel<typeof products>;
export type ProductsSelect = InferSelectModel<typeof products>;
