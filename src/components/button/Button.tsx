import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<'button'>
export const Button = (props: Props) => {
  return (
    <button {...props} className={'bg-cyan-200 p-7'} >
      Some button
    </button>
  );
};