'use client'

import * as React from "react";
import { useId } from "react";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { clsx } from "clsx";
import { cn } from "../../utils/cn.ts";
import { CheckmarkOutline } from "../../assets/icons/outlineIcons";
import { Variant } from "../typography/Typography.tsx";
import { typographyVariants } from "../typography";

const CheckboxField = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <div
    className={clsx(
      "flex items-center justify-center h-[36px] w-[36px] rounded-full hover:bg-dark-300 active:bg-dark-100 focus-visible:outline-none disabled:pointer-events-none",
      "focus-within:bg-dark-500 flex-shrink-0",
    )}
  >
    <CheckboxPrimitive.Root
      className={cn(
        "peer h-[18px] w-[18px] shrink-0 rounded-sm border-2 enabled:border-light-500 ring-offset-background focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none enabled:data-[state=checked]:bg-light-100 data-[state=checked]:text-dark-900 enabled:data-[state=checked]:border-none",
        "data-[state=checked]:disabled:bg-dark-100 data-[state=checked]:disabled:border-none data-[state=unchecked]:disabled:border-light-900",
        className,
      )}
      ref={ref}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn("flex items-center justify-center text-current")}
      >
        <CheckmarkOutline
          className={clsx(
            "size-full",
            props.disabled ? "text-light-700" : "text-current",
          )}
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  </div>
));

CheckboxField.displayName = CheckboxPrimitive.Root.displayName;

export type Props = {
  checked?: boolean;
  disabled?: boolean;
  id?: string;
  label?: React.ReactNode;
  typographyVariant?: Variant;
} & React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>;

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  Props
>(
  (
    {
      checked,
      disabled,
      id,
      label,
      typographyVariant = "reg14",
      ...props
    }: Props,
    ref,
  ) => {
    const generatedId = useId();
    const checkboxId = id || generatedId;

    return (
      <div
        className={clsx(
          "flex items-center gap-0.5",
          disabled && "pointer-events-none",
        )}
      >
        <CheckboxField
          checked={checked}
          disabled={disabled}
          id={checkboxId}
          ref={ref}
          {...props}
        />
        {label && (
          <label
            className={clsx(
              "peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
              typographyVariants({ variant: typographyVariant }),
              disabled ? "text-light-900" : "text-light-100",
            )}
            htmlFor={checkboxId}
          >
            {label}
          </label>
        )}
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";
