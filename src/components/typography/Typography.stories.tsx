import { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography.tsx";
import { typographyData } from "./typographyData.ts";

const meta = {
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Design/Typography",
  args: {
    variant: "reg16",
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "large",
        "h1",
        "h2",
        "h3",
        "reg16",
        "bold16",
        "reg14",
        "med14",
        "bold14",
        "small",
        "semiBoldSmall",
        "regularLink",
        "smallLink",
      ],
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BasicTypography: Story = {
  render: (args) => <Typography {...args}>Text</Typography>,
};

export const AllTypographyExample: Story = {
  render: () => (
    <div className={"flex flex-col gap-2.5 text-white"}>
      {typographyData.map((item) => {
        return item === "regularLink" || item === "smallLink" ? (
          <Typography href={"#"} key={item} variant={item}>
            Link text
          </Typography>
        ) : (
          <Typography key={item} variant={item}>
            Typography text
          </Typography>
        );
      })}
    </div>
  ),
};
