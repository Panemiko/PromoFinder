import { Client } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";

import * as products from "./schema/product";
import * as stores from "./schema/store";
import * as storePermissions from "./schema/store-permission";

export const schema = { ...products, ...stores, ...storePermissions };

export { mySqlTable as tableCreator } from "./schema/_table";

export * from "drizzle-orm";

export const db = drizzle(
  new Client({
    url: process.env.DATABASE_URL,
  }).connection(),
  { schema },
);
