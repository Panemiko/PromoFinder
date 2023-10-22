import { z } from "zod";

import { schema } from "@promofinder/db";

import { createTRPCRouter, protectedProcedure } from "../trpc";
import { generateId } from "../utils";

import "@promofinder/validation";

import type { StoresSelect } from "@promofinder/db/schema/store";
import {
  modelIdSchema,
  storeNameSchema,
  timeSchema,
} from "@promofinder/validation";

const storeOutputSchema = z.preprocess(
  (arg) => arg as StoresSelect,
  z.object({
    id: modelIdSchema,
    name: storeNameSchema,
    createdAt: timeSchema,
    updatedAt: timeSchema,
  }),
);

export const storeRouter = createTRPCRouter({
  create: protectedProcedure
    .output(storeOutputSchema)
    .input(
      z.object({
        name: storeNameSchema,
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const avatarId = "a";
      const storeId = generateId();

      await ctx.db.insert(schema.stores).values({
        id: storeId,
        avatarId,
        name: input.name,
      });

      // permission for the current user
      await ctx.db.insert(schema.storePermissions).values({
        id: generateId(),
        enabled: true,
        role: "master",
        userId: ctx.auth.userId,
      });

      const store = await ctx.db.query.stores.findFirst({
        where: (stores, { eq }) => eq(stores.id, storeId),
      });

      return store;
    }),
  byCurrentUser: protectedProcedure
    .output(storeOutputSchema)
    .query(async ({ ctx }) => {
      // Get the permissions of the current user
      const permissions = await ctx.db.query.storePermissions.findMany({
        where: (storePermissions, { eq }) =>
          eq(storePermissions.userId, ctx.auth.userId),
      });

      if (!permissions) {
        return null;
      }
    }),
});
