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
  return (
    <Link
      href={link}
      prefetch={false}
      className={clsx([
        "h-14 relative rounded-xl overflow-hidden",
        customClass,
      ])}
    >
      <span
        style={{ textShadow: "0.5px 0.5px 8px rgba(0,0,0,0.5)" }}
        className="z-[1] text-white absolute text-center top-1/2 -translate-y-1/2
       w-full text-2xl font-extrabold"
      >
        <span className="font-extralight">#</span>
        <span>{title}</span>
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
