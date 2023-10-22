import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { relations, sql } from "drizzle-orm";
import { boolean, mysqlEnum, timestamp, varchar } from "drizzle-orm/mysql-core";

import { mySqlTable } from "./_table";
import { stores } from "./store";

export const storePermissions = mySqlTable("store_permissions", {
  id: varchar("id", { length: 256 }).primaryKey(),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at").onUpdateNow(),
  userId: varchar("user_id", { length: 256 }),
  role: mysqlEnum("role", ["master", "admin", "promoter", "user"]),
  enabled: boolean("enabled"),
});

export const storePermissionsRelations = relations(
  storePermissions,
  ({ one }) => ({
    store: one(stores, {
      fields: [storePermissions.userId],
      references: [stores.id],
    }),
  }),
);

export type StorePermissionsInsert = InferInsertModel<typeof storePermissions>;
export type StorePermissionsSelect = InferSelectModel<typeof storePermissions>;
