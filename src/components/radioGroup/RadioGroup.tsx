'use client'

import * as React from 'react'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'
import { cn } from "../../utils/cn.ts";
import { typographyVariants } from "../typography";

export type RadioOption = {
  label: string
  value: string
}
export type RadioGroupType = {
  classNamesForGroup?: string
  classNamesForItem?: string
  disabled?: boolean
  options: RadioOption[]
} & React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>

export const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupType
>(
  (
    { classNamesForGroup, classNamesForItem, disabled, options, ...props },
    ref
  ) => {
    const cls = {
      groupContainer: cn('flex gap-[44px]', classNamesForGroup),
      indicator: 'w-2.5 h-2.5 rounded-full bg-light-100',
      item: clsx(
        'aspect-square h-5 rounded-full border-2 border-light-100 flex items-center justify-center',
        'relative',
        !disabled && [
          'before:absolute before:w-8 before:h-8 before:rounded-full hover:before:bg-gray-700 before:z-[-1]',
          'focus-visible:before:absolute focus-visible:before:w-8 focus-visible:before:h-8 focus-visible:before:rounded-full focus-visible:before:bg-dark-500 focus-visible:before:z-[-1]',
        ]
      ),
      itemContainer: clsx(
        'flex justify-center items-center gap-2',
        classNamesForItem,
        disabled && 'opacity-50'
      ),
      label: clsx(
        typographyVariants({ variant: 'reg14' }),
        disabled ? 'text-gray-500' : 'text-light-100'
      ),
    }

    return (
      <RadioGroupPrimitive.Root
        className={cls.groupContainer}
        {...props}
        disabled={disabled}
        ref={ref}
      >
        {options.map(({ label, value }) => (
          <div
            className={cls.itemContainer}
            key={`radio-group-item-${value}`}
          >
            <RadioGroupPrimitive.Item
              className={cls.item}
              disabled={disabled}
              id={value}
              value={value}
            >
              <RadioGroupPrimitive.Indicator className={cls.indicator} />
            </RadioGroupPrimitive.Item>
            <label
              className={cls.label}
              htmlFor={value}
            >
              {label}
            </label>
          </div>
        ))}
      </RadioGroupPrimitive.Root>
    )
  }
)
