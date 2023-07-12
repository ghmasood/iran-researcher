import React from "react";
import Image from "next/image";
import Link from "next/link";

import clsx from "clsx";
import { DateTime } from "luxon";

import SaveBtn from "./components/SaveBtn";

import type { IPostCard } from "types";

interface IPostCardProps extends IPostCard {
  customClass?: string;
}

function PostCard({
  title,
  link,
  kind,
  desc,
  date,
  category,
  CoverImg,
  customClass = "",
}: IPostCardProps) {
  //Vase link category bayad subLink is link post begiram
  return (
    <div className={clsx(["p-2", customClass])}>
      <div
        className={clsx([
          "flex bg-white drop-shadow-md p-2.5 gap-2 rounded-xl h-full",
          kind === "col" ? "flex-col" : "flex-row",
        ])}
      >
        <Link
          href={link}
          className={clsx([
            "relative aspect-[3/2] shrink-0",
            kind === "col" ? "h-[12rem]" : "w-1/2",
          ])}
        >
          <Image
            src={CoverImg}
            alt={title}
            fill
            className="object-cover rounded-lg"
          />
        </Link>
        <div
          className={`flex flex-col  items-center p-1.5 gap-2 justify-between ${
            kind === "col" ? "h-full" : ""
          }`}
        >
          <Link
            href={link}
            className="text-primary text-lg font-semibold hover:text-primary-l2 transition-colors duration-300 cursor-pointer"
          >
            {title}
          </Link>
          <p className="text-base font-light line-clamp-2">{desc}</p>
          <div className="bg-gray w-full flex items-center gap-2 rounded-xl py-1 px-2 h-[3.25rem]">
            <div className="md:h-11 md:w-11 relative bg-primary rounded-lg">
              <Image
                src="./logo.svg"
                alt="iran researcher"
                fill
                className="p-2 brightness-0 invert"
              />
            </div>
            <div className="flex flex-col justify-between gap-1">
              <Link
                href={"#"}
                className="text-sm font-medium text-primary hover:text-primary-l2 duration-300 transition-colors"
              >
                {category}
              </Link>
              <span className="text-sm font-light">
                {DateTime.fromISO(date)
                  .setZone("Asia/Tehran")
                  .setLocale("fa-IR")
                  .toLocaleString({
                    month: "long",
                    year: "numeric",
                    day: "2-digit",
                  })}
              </span>
            </div>
            <div className="mr-auto px-2">
              <SaveBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
