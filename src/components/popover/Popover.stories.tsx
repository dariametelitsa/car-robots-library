import { Meta } from "@storybook/react";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover.tsx";
import { useState } from "react";
import { Maximize, MaximizeOutline } from "../../assets/icons";

const meta = {
  component: Popover,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  title: "Component/Popover",
} satisfies Meta<typeof Popover>;

export default meta;

export const PopoverWithIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover onOpenChange={setIsOpen} open={isOpen}>
      <PopoverTrigger asChild>
        {isOpen ? (
          <Maximize className={"w-[28px] h-[28px] text-accent-500"} />
        ) : (
          <MaximizeOutline className={"w-[28px] h-[28px]"} />
        )}
      </PopoverTrigger>
      <PopoverContent
        align={"start"}
        className={"popoverOpacity w-48 py-5 px-3"}
        side={"top"}
        sideOffset={2}
      >
        Some content
      </PopoverContent>
    </Popover>
  );
};
