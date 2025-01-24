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
  title: "Component/Popover/Align",
} satisfies Meta<typeof Popover>;

export default meta;

export const PopoverStart = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover onOpenChange={setIsOpen} open={isOpen}>
      <PopoverTrigger asChild>
        <Button variant={"primary"} aria-label={"Open popover"}>
          Click to open popover on the left
        </Button>
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

export const PopoverCenter = () => {
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
        side={"top"}
        sideOffset={2}
      >
        Some content
      </PopoverContent>
    </Popover>
  );
};

export const PopoverEnd = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover onOpenChange={setIsOpen} open={isOpen}>
      <PopoverTrigger asChild>
        <Button variant={"primary"} aria-label={"Open popover"}>
          Click to open popover on the left
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align={"end"}
        className={"popoverOpacity w-48 py-5 px-3"}
        side={"top"}
        sideOffset={2}
      >
        Some content
      </PopoverContent>
    </Popover>
  );
};
