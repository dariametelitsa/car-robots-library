import type { Meta, StoryObj } from "@storybook/react";
import { FullScreenLoader } from "./FullScreenLoader.tsx";


const meta = {
  component: FullScreenLoader,
  tags: ["autodocs"],
  title: "Component/FullScreenLoader",
} satisfies Meta<typeof FullScreenLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicLoader: Story = {};
