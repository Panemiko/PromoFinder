import { z } from "zod";

export const modelIdSchema = z.string().uuid();

export const timeSchema = z.date();

export const imageKeySchema = z.string();
