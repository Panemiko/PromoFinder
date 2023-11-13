import * as dotenv from "dotenv";
import type { Config } from "drizzle-kit";

dotenv.config({
  path: "../../.env",
});

if (!process.env.DATABASE_URL) throw new Error("Invalid environment variables");

export default {
  schema: "./schema",
  driver: "mysql2",
  out: "drizzle",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL,
  },
  tablesFilter: ["promofinder_*"],
} satisfies Config;
