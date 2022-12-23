import { AnchorHTMLAttributes } from "react";

interface LinkProps {
  children: React.ReactNode;
}
export const Link: React.FC<
  LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ children, ...props }) => {
  return <a {...props}>{children}</a>;
};
