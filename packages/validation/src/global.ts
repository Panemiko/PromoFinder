import { z } from "zod";

export const modelIdSchema = z.string().uuid();

export const timeSchema = z.date();
