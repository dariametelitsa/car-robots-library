import type { Meta, StoryObj } from "@storybook/react";
import { Overlay } from "./Overlay.tsx";

const meta = {
  component: Overlay,
  tags: ["autodocs"],
  title: "Component/Overlay",
} satisfies Meta<typeof Overlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicLoader: Story = {};
