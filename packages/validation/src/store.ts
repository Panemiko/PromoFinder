import { z } from "zod";

export const storeNameSchema = z.string().max(256).min(1);
