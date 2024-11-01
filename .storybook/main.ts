import type { StorybookConfig } from "@storybook/react-vite";
import { withoutVitePlugins } from "@storybook/builder-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-viewport",
    "@storybook/addon-storysource",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  staticDirs: ["../public"],
  async viteFinal(config) {
    config.plugins = await withoutVitePlugins(config.plugins, ["vite:dts"]);

    return config;
  },
};
export default config;
