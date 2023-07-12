"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import PostCard from "components/PostCard";
import BulletTitle from "components/BulletTitle";
import icons from "utils/icons";

import "./embla.css";
import type { IPostCard } from "types";

interface IPostSectionColProps {
  customClass?: string;
  posts: IPostCard[];
  sectionTitle: string;
}
function PostSectionCol({
  sectionTitle,
  posts,
  customClass = "",
}: IPostSectionColProps) {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: false,
    skipSnaps: true,
    axis: "x",
    direction: "rtl",
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  useEffect(() => {
    if (embla) {
      const onSelect = () => {
        setSelectedIndex(embla.selectedScrollSnap());
        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
      };

      setScrollSnaps(embla.scrollSnapList());
      embla.on("select", onSelect);
      onSelect();
    }
  }, [embla]);

  return (
    <div className={`flex flex-col gap-2 ${customClass}`}>
      <div className="flex items-center justify-between px-2">
        <BulletTitle>{sectionTitle}</BulletTitle>
        <div className="flex gap-2">
          <span
            onClick={scrollPrev}
            className={
              !prevBtnEnabled ? "cursor-not-allowed" : "cursor-pointer"
            }
          >
            {icons.chevronFilledR(
              "group",
              "",
              `transition-all duration-500 ${
                !prevBtnEnabled
                  ? "fill-dark-t25"
                  : "fill-dark  group-hover:fill-primary-l2"
              }`
            )}
          </span>

          <span
            onClick={scrollNext}
            className={
              !nextBtnEnabled ? "cursor-not-allowed" : "cursor-pointer"
            }
          >
            {icons.chevronFilledR(
              "rotate-180 group",
              "",
              `transition-all duration-500 ${
                !nextBtnEnabled
                  ? "fill-dark-t25"
                  : "fill-dark group-hover:fill-primary-l2"
              }`
            )}
          </span>
        </div>
      </div>
      <div className="embla" data-axis={"x"}>
        <div ref={emblaRef} className="embla__viewport">
          <div className="embla__container">
            {posts.map((p, index) => {
              return (
                <PostCard
                  customClass=""
                  key={p.title + index}
                  CoverImg={p.CoverImg}
                  title={p.title}
                  desc={p.desc}
                  date={p.date}
                  kind={p.kind}
                  category={p.category}
                  link={p.link}
                />
              );
            })}
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default PostSectionCol;
