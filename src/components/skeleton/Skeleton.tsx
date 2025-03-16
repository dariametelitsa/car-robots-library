'use client'

import { HTMLAttributes } from 'react'
import { cn } from "../../utils/cn.ts";

export const Skeleton = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-dark-300', className)}
      {...props}
    />
  )
}
