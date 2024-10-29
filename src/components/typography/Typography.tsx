import { ComponentPropsWithoutRef, ElementType } from 'react'

import { VariantProps } from 'class-variance-authority'
import { typographyVariants } from "./typographyVariants.ts";
import { cn } from "../../utils/cn.ts";

export type Variant = NonNullable<
  VariantProps<typeof typographyVariants>['variant']
>

const typographyTags: Record<Variant, ElementType> = {
  bold14: 'p',
  bold16: 'p',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  large: 'div',
  med14: 'p',
  reg14: 'p',
  reg16: 'p',
  regularLink: 'a',
  semiBoldSmall: 'p',
  small: 'p',
  smallLink: 'a',
}

type Props = ComponentPropsWithoutRef<ElementType> &
  VariantProps<typeof typographyVariants>

export const Typography = ({
  className,
  variant = 'reg16',
  ...props
}: Props) => {
  const Component = variant ? typographyTags[variant] : 'p'

  return (
    <Component
      className={cn(typographyVariants({ variant }), className)}
      {...props}
    />
  )
}
