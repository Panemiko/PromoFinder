import * as dotenv from "dotenv";
import type { Config } from "drizzle-kit";
import { env } from './env.mjs';

dotenv.config({
  path: "../../.env",
});

export default {
  schema: "./schema",
  driver: "mysql2",
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
  tablesFilter: ["promofinder_*"],
} satisfies Config;
