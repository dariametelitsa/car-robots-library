'use client'

import * as React from "react";
import { ComponentPropsWithoutRef } from "react";

import { Slot } from "@radix-ui/react-slot";
import { VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn.ts";
import { buttonVariants } from "./buttonVariants.ts";

type ButtonProps = { asChild?: boolean } & ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonVariants>;

const Button = React.forwardRef<React.ElementRef<"button">, ButtonProps>(
  ({ asChild, className, variant = "primary", ...props }, ref) => {
    const Component = asChild ? Slot : "button";

    return (
      <Component
        className={cn(buttonVariants({ variant }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button };
