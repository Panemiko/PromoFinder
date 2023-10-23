import baseConfig from "@promofinder/tailwind-config";
import {withUt} from 'uploadthing/tw'

export default withUt( {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [baseConfig],
} )
