import { Meta } from "@storybook/react";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover.tsx";
import { useState } from "react";
import { Button } from "../button";

const meta = {
  component: Popover,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  title: "Component/Popover/Distance",
} satisfies Meta<typeof Popover>;

export default meta;

export const PopoverBasicDistance = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover onOpenChange={setIsOpen} open={isOpen}>
      <PopoverTrigger asChild>
        <Button variant={"primary"} aria-label={"Open popover"}>
          Click to open popover on the left
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align={"center"}
        className={"popoverOpacity w-48 py-5 px-3"}
        side={"bottom"}
        sideOffset={2}
      >
        Some content
      </PopoverContent>
    </Popover>
  );
};

export const PopoverCloseDistance = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover onOpenChange={setIsOpen} open={isOpen}>
      <PopoverTrigger asChild>
        <Button variant={"primary"} aria-label={"Open popover"}>
          Click to open popover on the left
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align={"center"}
        className={"popoverOpacity w-48 py-5 px-3"}
        side={"bottom"}
        sideOffset={0}
      >
        Some content
      </PopoverContent>
    </Popover>
  );
};

export const PopoverFarDistance = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover onOpenChange={setIsOpen} open={isOpen}>
      <PopoverTrigger asChild>
        <Button variant={"primary"} aria-label={"Open popover"}>
          Click to open popover on the left
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align={"center"}
        className={"popoverOpacity w-48 py-5 px-3"}
        side={"bottom"}
        sideOffset={10}
      >
        Some content
      </PopoverContent>
    </Popover>
  );
};
