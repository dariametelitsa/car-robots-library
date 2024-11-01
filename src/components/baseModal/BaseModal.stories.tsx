import type { Meta, StoryObj } from "@storybook/react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./BaseModal";
import { Button } from "../button";
import { Typography } from "../typography";
import { SimpleModal } from "./SimpleModal.tsx";
import { useState } from "react";

const meta = {
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Component/Modal",
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicModal: Story = {
  render: () => {
    return (
      <>
        <Dialog>
          <DialogTrigger>
            <Button className={"w-full"} type={"button"}>
              Click me!
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Title in Header</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              Dialog description dialog description dialog description.
            </DialogDescription>
            <DialogFooter>
              <Button className={"w-full"} type={"button"}>
                Footer for button
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    );
  },
};

export const ModalWithoutCross: Story = {
  render: () => {
    return (
      <>
        <Dialog>
          <DialogTrigger>
            <Button className={"w-full"} type={"button"}>
              Click me!
            </Button>
          </DialogTrigger>
          <DialogContent crossOff>
            <DialogHeader>
              <DialogTitle>Title in Header</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              Dialog description dialog description dialog description.
            </DialogDescription>
            <DialogFooter>
              <Button className={"w-full"} type={"button"}>
                Footer for button
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    );
  },
};

export const SimpleModalWindow = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Click me!</Button>
      <SimpleModal
        className={"flex flex-col gap-6 mb-6"}
        onOpenChange={() => {}}
        open={isOpen}
        title={"Title"}
      >
        <Typography variant={"reg16"}>Some content</Typography>
        <Button className={"w-max ml-auto"} onClick={() => setIsOpen(false)}>
          OK
        </Button>
      </SimpleModal>
    </>
  );
};
