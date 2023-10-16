import { createTRPCReact } from "@trpc/react-query";

import type { AppRouter } from "@promofindr/api";

export const api = createTRPCReact<AppRouter>();

export { type RouterInputs, type RouterOutputs } from "@promofindr/api";
