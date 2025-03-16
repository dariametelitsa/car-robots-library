'use client'

import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  useEffect,
  useRef,
} from 'react'

import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import { cn } from "../../utils/cn.ts";
import { GoTopButton } from "../goTopButton";
import { ScrollBar } from "./Scrollbar.tsx";

type Props = {
  isGoToTop?: boolean
  orientation?: 'horizontal' | 'vertical'
} & ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>

export const ScrollArea = forwardRef<
  ElementRef<typeof ScrollAreaPrimitive.Root>,
  Props
>(({ children, className, isGoToTop = false, orientation, ...props }, ref) => {
  const scrollableRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const element = scrollableRef.current?.querySelector('.viewport > div')

      if (element instanceof HTMLElement) {
        element.style.display = 'block'
      }
    }
  }, [])

  return (
    <ScrollAreaPrimitive.Root
      className={cn('relative overflow-hidden lg:pr-scrollbar', className)}
      ref={ref}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        className={'h-full w-full rounded-[inherit] viewport'}
        ref={scrollableRef}
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      {isGoToTop && scrollableRef.current && (
        <GoTopButton scrollInElementRef={scrollableRef} />
      )}
      <ScrollBar orientation={orientation} />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
})

ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName
