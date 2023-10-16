import type { Config } from "tailwindcss";

import { colors } from "./colors";

export { colors };

export default {
  content: [""],
  theme: {
    colors,
    extend: {},
  },
  plugins: [],
} satisfies Config;
