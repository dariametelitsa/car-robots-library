'use client'

import { cn } from "../../utils/cn.ts";

export const Loader = () => {
  return (
    <div
      className={cn(
        'w-full h-1 fixed bg-dark-700 overflow-hidden top-0 left-0 z-[1000]',
        'after:absolute after:w-1/2 after:h-1 after:bg-accent-500 after:top-0 after:left-0 after:animate-loader'
      )}
    ></div>
  )
}
