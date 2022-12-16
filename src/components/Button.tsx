import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps {
  children: React.ReactNode;
}
export const Button: React.FC<
  ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>;
};
