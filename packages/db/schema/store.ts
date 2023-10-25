import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { relations, sql } from "drizzle-orm";
import { timestamp, varchar } from "drizzle-orm/mysql-core";

import { mySqlTable } from "./_table";
import { storePermissions } from "./store-permission";

export const stores = mySqlTable("stores", {
  id: varchar("id", { length: 256 }).primaryKey(),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at").onUpdateNow(),
  name: varchar("name", { length: 256 }).notNull(),
  bannerKey: varchar("banner_key", { length: 256 }),
  avatarKey: varchar("avatar_key", { length: 256 }).notNull(),
});

export const storesRelations = relations(stores, ({ many }) => ({
  permissions: many(storePermissions),
}));

export type StoresInsert = InferInsertModel<typeof stores>;
export type StoresSelect = InferSelectModel<typeof stores>;
