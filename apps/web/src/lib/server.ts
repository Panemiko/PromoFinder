import { headers } from "next/headers";
import {
  createTRPCProxyClient,
  loggerLink,
  unstable_httpBatchStreamLink,
} from "@trpc/client";
import superjson from "superjson";

import type { AppRouter } from "@promofinder/api";

import { env } from "@/env.mjs";

const getBaseUrl = () => {
  if (env.VERCEL_URL) return env.VERCEL_URL; // SSR should use vercel url
  return `http://localhost:${env.PORT}`; // dev SSR should use localhost
};

export const serverApi = createTRPCProxyClient<AppRouter>({
  transformer: superjson,
  links: [
    loggerLink({
      enabled: (opts) =>
        process.env.NODE_ENV === "development" ||
        (opts.direction === "down" && opts.result instanceof Error),
    }),
    unstable_httpBatchStreamLink({
      url: `${getBaseUrl()}/api/trpc`,
      headers() {
        const header = new Map(headers());
        header.set("x-trpc-source", "rsc");
        return Object.fromEntries(header);
      },
    }),
  ],
});
