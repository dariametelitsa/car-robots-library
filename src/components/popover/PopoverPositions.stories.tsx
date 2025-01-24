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
  title: "Component/Popover/Positions",
} satisfies Meta<typeof Popover>;

export default meta;

export const PopoverLeft = () => {
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
        side={"left"}
        sideOffset={2}
      >
        Some content
      </PopoverContent>
    </Popover>
  );
};

export const PopoverRight = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover onOpenChange={setIsOpen} open={isOpen}>
      <PopoverTrigger asChild>
        <Button variant={"primary"} aria-label={"Open popover"}>
          Click to open popover on the right
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align={"start"}
        className={"popoverOpacity w-48 py-5 px-3"}
        side={"right"}
        sideOffset={2}
      >
        Some content
      </PopoverContent>
    </Popover>
  );
};

export const PopoverTop = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover onOpenChange={setIsOpen} open={isOpen}>
      <PopoverTrigger asChild>
        <Button variant={"primary"} aria-label={"Open popover"}>
          Click to open popover on the top
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

export const PopoverBottom = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover onOpenChange={setIsOpen} open={isOpen}>
      <PopoverTrigger asChild>
        <Button variant={"primary"} aria-label={"Open popover"}>
          Click to open popover on the bottom
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align={"start"}
        className={"popoverOpacity w-48 py-5 px-3"}
        side={"bottom"}
        sideOffset={2}
      >
        Some content
      </PopoverContent>
    </Popover>
  );
};
