import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<'button'>
export const Button = (props: Props) => {
  return (
    <button {...props} style={{background: "tomato"}}>
      Some button
    </button>
  );
};