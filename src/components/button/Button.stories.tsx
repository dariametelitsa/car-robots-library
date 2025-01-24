import { Meta, StoryObj } from "@storybook/react";

import { typographyVariants } from "../typography";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Component/Button",
  argTypes: {
    variant: {
      control: "select",
      options: ["outline", "primary", "secondary", "text"],
    },
    asChild: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
    disabled: false,
    onClick: () => alert("Hello!"),
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    ...Primary.args,
    variant: "outline",
  },
};

export const TextButton: Story = {
  args: {
    ...Primary.args,
    variant: "text",
  },
};

export const LinkAsButton: Story = {
  args: {
    asChild: true,
    children: <a href={"/"}>Link</a>,
    className: typographyVariants({ variant: "h3" }),
  },
};
