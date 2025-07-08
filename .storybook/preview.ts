import type { Preview } from "@storybook/react"

import "../styles/tailwind.css"
import "../styles/loading.css" // Import the loading styles

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
