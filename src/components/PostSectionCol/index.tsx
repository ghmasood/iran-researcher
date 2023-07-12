"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import PostCard from "components/PostCard";
import BulletTitle from "components/BulletTitle";
import icons from "utils/icons";

import { categories, type IPostCardRes } from "types";

interface IPostSectionColProps {
  customClass?: string;
  posts: IPostCardRes[];
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
  const [loading, setLoading] = useState(true);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 1200);
    }
  }, []);

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
      <div className="relative">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex items-stretch h-full will-change-transform">
            {loading
              ? [...new Array(8)].map((p, index) => {
                  return (
                    <PostCard
                      key={index}
                      id={index + ""}
                      CoverImg={""}
                      title={
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sint? "
                      }
                      desc={
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sint? Adipisci impedit culpa, voluptatibus quo pariatur, eius consequuntur laboriosam iusto aut excepturi est, ipsum rem minima officia tempora corporis labore!"
                      }
                      date={""}
                      kind={"col"}
                      category={categories.EDUCATION}
                      link={""}
                      loading={true}
                    />
                  );
                })
              : posts.map((p, index) => {
                  return (
                    <PostCard
                      key={p.title + index}
                      id="p.title + index"
                      customClass=""
                      CoverImg={p.CoverImg}
                      title={p.title}
                      desc={p.desc}
                      date={p.date}
                      kind={"col"}
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
