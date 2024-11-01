import type { Meta, StoryObj } from "@storybook/react";
import { GoTopButton } from "./GoTopButton.tsx";
import { Typography } from "../typography";

const meta = {
  component: GoTopButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Component/GoTopButton",
} satisfies Meta<typeof GoTopButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicGoToTopButton: Story = {};

export const GoToTopButton = () => {
  return (
    <div className={"w-full h-screen flex justify-center items-center"}>
      <Typography variant={"h1"}>Scroll to see</Typography>
      <GoTopButton />
    </div>
  );
};
