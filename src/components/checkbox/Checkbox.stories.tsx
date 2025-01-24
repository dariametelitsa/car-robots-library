import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox.tsx";
import { useState } from "react";

const meta = {
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Component/Checkbox",
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    typographyVariant: {
      options: [
        "med14",
        "small",
        "bold14",
        "reg14",
        "bold16",
        "large",
        "reg16",
      ],
    },
  },
  args: {
    checked: true,
    disabled: false,
    id: "checkbox",
    label: "Check-box",
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicUncheckedCheckbox: Story = {
  args: {
    checked: false,
    id: "checkbox",
    label: "Checkbox is unchecked",
  },
};

export const BasicCheckedCheckbox: Story = {
  args: {
    checked: true,
    id: "checkbox",
    label: "Checkbox is checked",
  },
};

export const DisabledCheckbox: Story = {
  args: {
    checked: true,
    disabled: true,
    id: "checkbox",
    label: "Checkbox is disabled",
  },
};

export const UncontrolledCheckbox = () => {
  const [_, setChecked] = useState(false);

  return (
    <Checkbox
      label={"Checkbox for click"}
      id={"checkbox"}
      onClick={() => setChecked((prev) => !prev)}
    />
  );
};
