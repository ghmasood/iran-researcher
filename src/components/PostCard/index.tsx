import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { categories } from "types";

interface IPostCardProps {
  customClass?: string;
  CoverImg: string;
  title: string;
  desc: string;
  date: Date;
  kind: "col" | "row";
  category: categories;
}
function PostCard({
  title,
  kind,
  date,
  desc,
  CoverImg,
  category,
  customClass = "",
}: IPostCardProps) {
  return (
    <div
      className={clsx([
        "flex bg-white drop-shadow-md p-2.5 gap-2.5 rounded-xl",
        kind === "col" ? "flex-col" : "flex-row",
        customClass,
      ])}
    >
      <div
        className={clsx([
          "relative aspect-[3/2] shrink-0",
          kind === "col" ? "w-full" : "w-1/2",
        ])}
      >
        <Image
          src={CoverImg}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-between items-center p-1.5 gap-2">
        <h2 className="text-primary text-lg font-semibold hover:text-primary-l2 transition-colors duration-300 cursor-pointer">
          {title}
        </h2>
        <p className="line-clamp-3 text-base font-light">{desc}</p>
        <div className="bg-gray w-full flex  gap-3 rounded-xl p-1">
          <div className="h-10 w-10 relative bg-primary rounded-xl">
            <Image
              src="./logo.svg"
              alt="iran researcher"
              fill
              className="p-1 brightness-0 invert"
            />
          </div>
          <div className="flex flex-col justify-between">
            <span className="text-sm font-light">{category}</span>
            <span className="text-sm font-light">
              {date.toLocaleTimeString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
