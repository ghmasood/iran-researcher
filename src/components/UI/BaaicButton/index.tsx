import React, { ReactNode } from "react";

interface IBasicButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  customClass?: string;
  LIcon?: ReactNode;
  children: ReactNode;
  RIcon?: ReactNode;
  disable?: boolean;
}
function BasicButton({
  customClass = "",
  LIcon,
  RIcon,
  children,
  disable,
  ...rest
}: IBasicButtonProps) {
  return (
    <button className={customClass} {...rest}>
      {children}
    </button>
  );
}

export default BasicButton;
