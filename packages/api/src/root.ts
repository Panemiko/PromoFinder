import { storeRouter } from "./router/store";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  store: storeRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
