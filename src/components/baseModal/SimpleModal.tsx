'use client'

import { PropsWithChildren } from "react";

import { DialogProps } from "@radix-ui/react-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./BaseModal.tsx";

type Props = {
  className?: string;
  title: string;
} & DialogProps &
  PropsWithChildren;

export const SimpleModal = ({
  children,
  className,
  onOpenChange,
  open,
  title,
  ...rest
}: Props) => {
  return (
    <Dialog onOpenChange={onOpenChange} open={open} {...rest}>
      <DialogContent crossOff className={"max-w-[378px]"}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <DialogDescription className={className}>{children}</DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
