'use client'

import React, { ComponentProps } from 'react'
import { cn } from "../../utils/cn.ts";
import { typographyVariants } from "../typography";

type Props = {
  selected?: boolean
} & ComponentProps<'button'>

export const PageButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, selected, ...props }: Props, ref) => {
    return (
      <button
        className={cn(
          `px-2 py-1 text-accent-500`,
          typographyVariants({ variant: 'reg14' }),
          !!selected && 'bg-white rounded-sm text-[14px] text-dark-900'
        )}
        ref={ref}
        {...props}
        type={'button'}
      >
        {children}
      </button>
    )
  }
)
