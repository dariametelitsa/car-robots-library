import type { Meta, StoryObj } from "@storybook/react";

import { Tabs, TabsType } from "./Tabs";
import { Typography } from "../typography";
import { Button } from "../button";

const tabs: TabsType[] = [
  {
    content: (
      <Typography variant={"reg16"}>Don&apos;t click forward</Typography>
    ),
    id: "tab1",
    title: "Today",
  },
  {
    content: (
      <div>
        <p>I recommend you to stop</p>
        <Button>Stop here</Button>
      </div>
    ),
    id: "tab2",
    title: "Tomorrow",
  },

  {
    content: (
      <>
        So... It&apos;s too late for you
        <img
          alt={"Picture"}
          height={400}
          src={
            "https://www.georgeezell.com/wp-content/uploads/2020/10/image-8.jpeg"
          }
          width={300}
        />
      </>
    ),
    id: "tab3",
    title: "Always",
  },
  {
    content: <Typography variant={"reg16"}>Disabled</Typography>,
    disabled: true,
    id: "tab4",
    title: "Never",
  },
];

const meta = {
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Component/Tabs",
  args: {
    tabsData: tabs,
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicTabs: Story = {};
