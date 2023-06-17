import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ICategoryChip } from "types";

interface ICategoryChipProps extends ICategoryChip {
  customClass?: string;
}
function CategoryChip({
  customClass = "",
  category,
  link,
  bgImage,
  title,
}: ICategoryChipProps) {
  console.log(link);
  return (
    <Link
      href={link}
      prefetch={false}
      className={clsx([
        "h-14 w-[10.5rem] relative rounded-xl overflow-hidden",
        customClass,
      ])}
    >
      <span
        className="z-[1] text-white absolute text-center top-1/2 -translate-y-1/2 drop-shadow-2xl
       w-full text-2xl font-extrabold"
      >
        <span>{title}</span>
        <span
          className="font-extralight
        "
        >
          #
        </span>
      </span>
      <Image
        src={bgImage}
        className="object-cover blur-[2.5px]"
        alt={""}
        fill
      />
    </Link>
  );
}

export default CategoryChip;
