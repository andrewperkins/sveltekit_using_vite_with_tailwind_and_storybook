module.exports = {
  "stories": [
    "../src/lib/**/*.stories.svelte"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-storysource",
    "@storybook/addon-svelte-csf",
    "storybook-tailwind-dark-mode"
  ],
  "framework": "@storybook/svelte",
  "core": {
    "builder": "@storybook/builder-vite",
    "disableTelemetry": true
  },
  "svelteOptions": {
    "preprocess": import("../svelte.config.js").preprocess
  }
}