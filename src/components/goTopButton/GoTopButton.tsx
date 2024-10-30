import { motion } from 'framer-motion'
import { useGoToTopButton } from "./useGoToTopButton.ts";
import { ArrowBackOutline } from "../../assets/icons/outlineIcons";

export const GoTopButton = () => {
  const { controls, isBrowser, scrollToTopHandler, scrollToTopVariants } =
    useGoToTopButton()

  if (!isBrowser) {
    return
  }

  return (
    <motion.button
      animate={controls}
      className={'bg-dark-300 fixed right-7 bottom-7 p-2 rounded-sm'}
      initial={'hide'}
      onClick={scrollToTopHandler}
      type={'button'}
      variants={scrollToTopVariants}
    >
      <ArrowBackOutline
        className={'rotate-90'}
        height={'20'}
        width={'20'}
      />
    </motion.button>
  )
}
