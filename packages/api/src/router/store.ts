import { z } from "zod";

import { schema } from "@promofinder/db";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { generateId } from "../utils";

import "@promofinder/validation";

import { TRPCError } from "@trpc/server";

import type { StoresSelect } from "@promofinder/db/schema/store";
import {
  imageKeySchema,
  modelIdSchema,
  storeNameSchema,
  timeSchema,
} from "@promofinder/validation";

import { getFirstImageUrl } from "../utils";

const storeOutputSchema = z
  .object({
    id: modelIdSchema,
    name: storeNameSchema,
    createdAt: timeSchema,
    updatedAt: timeSchema.nullable(),
    bannerKey: imageKeySchema.nullable(),
    avatarKey: imageKeySchema,
  })
  .transform(async (input) => {
    return {
      bannerUrl: input.bannerKey
        ? await getFirstImageUrl(input.bannerKey)
        : null,
      avatarUrl: input.avatarKey
        ? await getFirstImageUrl(input.avatarKey)
        : null,
      ...input,
    };
  });

export const storeRouter = createTRPCRouter({
  create: protectedProcedure
    .output(storeOutputSchema)
    .input(
      z.object({
        name: storeNameSchema,
        avatarKey: imageKeySchema,
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const storeId = generateId();

      await ctx.db.insert(schema.stores).values({
        id: storeId,
        avatarKey: input.avatarKey,
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

      if (!store) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });

      return store;
    }),
  byCurrentUser: protectedProcedure
    .output(storeOutputSchema.array().nullable())
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

      const stores = permissions.map((permission) => permission.store);

      // static definition because of the filtering
      return stores.filter((store) => store !== null) as StoresSelect[];
    }),
  byId: publicProcedure
    .output(storeOutputSchema.nullable())
    .input(z.object({ storeId: modelIdSchema }))
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
