import { z } from "zod";

import { schema } from "@promofinder/db";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { generateId } from "../utils";

import "@promofinder/validation";

import {
  imageKeySchema,
  modelIdSchema,
  storeNameSchema,
  timeSchema,
} from "@promofinder/validation";

import { getFirstImageUrl } from "../utils/utapi";

const storeOutputSchema = z
  .object({
    id: modelIdSchema,
    name: storeNameSchema,
    createdAt: timeSchema,
    updatedAt: timeSchema.optional(),
    bannerKey: imageKeySchema.optional(),
    avatarKey: imageKeySchema,
  })
  .transform(async (input) => ({
    bannerUrl: input.bannerKey ? await getFirstImageUrl(input.bannerKey) : null,
    avatarUrl: input.avatarKey ? await getFirstImageUrl(input.avatarKey) : null,
    ...input,
  }));

export const storeRouter = createTRPCRouter({
  create: protectedProcedure
    .output(storeOutputSchema)
    .input(
      z.object({
        name: storeNameSchema,
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const avatarKey = "a";
      const storeId = generateId();

      await ctx.db.insert(schema.stores).values({
        id: storeId,
        avatarKey,
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
    .output(storeOutputSchema.array())
    .query(async ({ ctx }) => {
      // Get the permissions of the current user
      const permissions = await ctx.db.query.storePermissions.findMany({
        where: (storePermissions, { eq }) =>
          eq(storePermissions.userId, ctx.auth.userId),
        with: {
          store: true,
        },
      });

      if (!permissions || permissions.length === 0) {
        return null;
      }

      return permissions.map((permission) => permission.store);
    }),
  byId: publicProcedure
    .input(z.object({ storeId: modelIdSchema }))
    .output(storeOutputSchema)
    .query(async ({ ctx, input }) => {
      const store = await ctx.db.query.stores.findFirst({
        where: (stores, { eq }) => eq(stores.id, input.storeId),
      });

      if (!store) {
        return null;
      }

      return store;
    }),
});
