import { Meta, StoryObj } from "@storybook/react";
import { LinkWithIcon } from "./LinkWithIcon.tsx";
import { Chrome, Desktop } from "../../assets/icons";

const meta = {
  args: {
    ActiveIcon: Chrome,
    DefaultIcon: Chrome,
    as: "a",
    children: "Chrome",
    disabled: false,
    href: "/123",
  },
  component: LinkWithIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Component/LinkWithIcon",
} satisfies Meta<typeof LinkWithIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LinkWithIconDefault: Story = {
  args: {},
};

export const ButtonWithIconDefault: Story = {
  args: {
    ActiveIcon: Chrome,
    DefaultIcon: Desktop,
    as: "button",
    children: "Desktop",
    disabled: false,
  },
};
