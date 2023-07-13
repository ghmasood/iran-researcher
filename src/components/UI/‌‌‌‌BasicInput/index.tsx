import React, { ReactNode } from "react";

import clsx from "clsx";

interface IBasicInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  customClass?: string;
  plchldr?: string;
  LIcon?: ReactNode;
  RIcon?: ReactNode;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  val: string | number | readonly string[] | undefined;
}

function BasicInput({
  LIcon,
  RIcon,
  plchldr,
  val,
  customClass = "",
  onChange,
  ...rest
}: IBasicInputProps) {
  return (
    <div
      className={clsx([
        "flex gap-4 bg-white h-12 rounded-xl overflow-hidden items-center px-4",
        customClass,
      ])}
    >
      {RIcon}
      <input
        {...rest}
        onChange={onChange}
        className="h-full w-full focus-visible:outline-none"
        placeholder={plchldr}
        value={val}
      />
      {LIcon}
    </div>
  );
}

export default BasicInput;
