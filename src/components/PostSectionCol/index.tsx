"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";

import clsx from "clsx";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import PostCard from "components/PostCard";
import BulletTitle from "components/BulletTitle";
import icons from "utils/icons";

import { SlideConfigsHandler } from "./services";

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
  //STATES
  const [curSlide, setCurSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [wdth, setWdth] = useState(0);

  // LIFECYCLE HOOK
  useLayoutEffect(() => {
    setWdth(window.innerWidth);
  }, []);

  //PERVIEW FOR SLIDER
  const slidesConfig = SlideConfigsHandler(wdth, setWdth);

  //SLIDERCONFIG
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    rtl: true,
    slideChanged(s) {
      setCurSlide(s.track.details.rel);
    },
    created() {
      setLoaded(true);
    },

    slides: slidesConfig,
  });

  //ARROWS STATE HANDLER
  let arrowState = { isFirst: true, isLast: false };
  if (loaded && instanceRef.current) {
    arrowState = {
      isFirst: curSlide === 0,
      isLast:
        curSlide >=
        instanceRef.current.track.details.slides.length - slidesConfig.perView,
    };
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between px-2">
        <BulletTitle>{sectionTitle}</BulletTitle>
        <div className="flex gap-2">
          <span
            onClick={(e: any) => {
              e.stopPropagation() || instanceRef.current?.prev();
            }}
            className={
              arrowState.isFirst ? "cursor-not-allowed" : "cursor-pointer"
            }
          >
            {icons.chevronFilledR(
              "",
              "",
              `transition-all duration-500 ${
                arrowState.isFirst ? "fill-dark-t25" : "fill-dark"
              }`
            )}
          </span>

          <span
            onClick={(e: any) => {
              e.stopPropagation() || instanceRef.current?.next();
            }}
            className={
              arrowState.isLast ? "cursor-not-allowed" : "cursor-pointer"
            }
          >
            {icons.chevronFilledR(
              "rotate-180",
              "",
              `transition-all duration-500 ${
                arrowState.isLast ? "fill-dark-t25" : "fill-dark"
              }`
            )}
          </span>
        </div>
      </div>

      <div
        ref={sliderRef}
        className={clsx([
          "keen-slider flex !justify-stretch",
          !loaded && "skeleton",
          customClass,
        ])}
      >
        {posts.map((p, index) => {
          return (
            <PostCard
              customClass="keen-slider__slide"
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
  );
}

export default PostSectionCol;
