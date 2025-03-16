'use client'

import {
  Bounce,
  ToastContainer as Container,
  ToastContainerProps,
} from 'react-toastify'

import { Close } from '../../assets/icons/filledIcons'
import { getToastClassName } from './helpers'
import { typographyVariants } from "../typography";

const ToastContainer = (args: ToastContainerProps) => (
  <Container
    autoClose={3000}
    className={typographyVariants({ variant: 'reg16' })}
    closeButton={
      <Close
        className={'min-w-6 min-h-6 ml-auto'}
        height={'24px'}
        width={'24px'}
      />
    }
    closeOnClick
    hideProgressBar
    icon={false}
    position={'bottom-left'}
    toastClassName={getToastClassName}
    transition={Bounce}
    {...args}
  />
)

export default ToastContainer
