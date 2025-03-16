'use client'

import { ComponentPropsWithoutRef, ElementType } from 'react'

import Loader from '@/assets/images/loader.svg'
import { cn } from "../../utils/cn.ts"

type Props<T extends ElementType = "img"> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;

export const CircleLoader = <T extends ElementType = "img">({
  className,
  as,
  ...rest
}: Props<T>) => {
  const Component = as || "img";

  return (
    <div
      className={cn(className)}
      {...rest}
    >
      <Component
        alt={'Loader'}
        className={'mt-3'}
        height={50}
        src={Loader}
        width={50}
      />
    </div>
  )
}
