import { HTMLAttributes } from "react";

interface LinkProps {
  children: React.ReactNode;
}
export const Link: React.FC<LinkProps & HTMLAttributes<HTMLAnchorElement>> = ({
  children,
  ...props
}) => {
  return <a {...props}>{children}</a>;
};
