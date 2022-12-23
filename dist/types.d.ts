import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
interface ButtonProps {
    children: React.ReactNode;
}
export const Button: React.FC<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>>;
interface LinkProps {
    children: React.ReactNode;
}
export const Link: React.FC<LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>>;

//# sourceMappingURL=types.d.ts.map
