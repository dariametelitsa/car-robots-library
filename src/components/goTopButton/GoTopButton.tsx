'use client'

import { RefObject } from 'react'
import { ArrowBackOutline } from '../../assets/icons/outlineIcons'
import { useGoToTopButton } from './useGoToTopButton'
import { motion } from 'framer-motion'
import { cn } from "../../utils/cn.ts";
import { Tooltip } from "../tooltip";

type Props = {
  scrollInElementRef?: RefObject<HTMLDivElement> | null
}

export const GoTopButton = ({ scrollInElementRef }: Props) => {
  const { controls, isBrowser, onScrollToTop, scrollToTopVariants, } =
    useGoToTopButton(scrollInElementRef)

  if (!isBrowser) {
    return
  }

  return (
    <motion.button
      animate={controls}
      className={cn(
        'hidden lg:block bg-dark-300 fixed right-7 p-2 rounded-sm bottom-20 lg:bottom-7'
      )}
      initial={'hide'}
      onClick={onScrollToTop}
      type={'button'}
      variants={scrollToTopVariants}
    >
      <Tooltip title='Go to top'>
        <ArrowBackOutline
          className={'rotate-90'}
          height={'20'}
          width={'20'}
        />
      </Tooltip>
    </motion.button>
  )
}
