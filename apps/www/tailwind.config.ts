import baseConfig from "@promofinder/tailwind-config";

export default {
  content: ["./src/**/*.{ts,tsx}", "../../packages/ui/**/*.{ts,tsx}"],
  presets: [baseConfig],
};
