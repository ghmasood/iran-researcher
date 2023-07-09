"use client";
import clsx from "clsx";
import PostCard from "components/PostCard";
import { useKeenSlider } from "keen-slider/react";
import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { IPostCard } from "types";
import useWidth from "hooks/useWidth";
import icons from "utils/icons";

interface IPostSectionColProps {
  customClass?: string;
  posts: IPostCard[];
}
function PostSectionCol({ posts, customClass = "" }: IPostSectionColProps) {
  //STATES
  const [curSlide, setCurSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  //CUSTOM HOOK

  const isXs = useWidth(475);
  const isSm = useWidth(640);
  const isMd = useWidth(768);
  const isLg = useWidth(1024);
  const is2xl = useWidth(1536);

  const slidesConfig = isXs
    ? { perView: 1, spacing: 2 }
    : isSm
    ? { perView: 1.4, spacing: 8 }
    : isMd
    ? { perView: 2, spacing: 12 }
    : isLg
    ? { perView: 2.5, spacing: 16 }
    : is2xl
    ? { perView: 3, spacing: 20 }
    : { perView: 4, spacing: 24 };

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
  return (
    <div
      ref={sliderRef}
      className={clsx([
        "keen-slider relative ",
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
      {loaded && instanceRef.current && (
        <>
          <div
            className={clsx([
              "transition-all duration-500 absolute -right-2 bg-gradient-to-l from-white via-white/95 to-transparent w-14 h-[200%] top-1/2 -translate-y-1/2 flex items-center justify-start",
              ,
              curSlide === 0 && "opacity-0 -z-10",
            ])}
          >
            {/* <span
              onClick={(e: any) => {
                e.stopPropagation() || instanceRef.current?.prev();
              }}
              className="cursor-pointer"
            >
              {icons.arrow("", "")}
            </span> */}
          </div>

          <div
            className={clsx([
              "transition-all duration-500 absolute -left-2 bg-gradient-to-r from-white via-white/95 to-transparent w-14 h-[200%] top-1/2 -translate-y-1/2 flex items-center justify-end",
              ,
              curSlide >=
                instanceRef.current.track.details.slides.length -
                  slidesConfig.perView && "opacity-0 -z-10",
            ])}
          >
            {/* <span
              onClick={(e: any) => {
                e.stopPropagation() || instanceRef.current?.next();
              }}
              className="cursor-pointer"
            >
              {icons.arrow("rotate-180", "")}
            </span> */}
          </div>
        </>
      )}
    </div>
  );
}

export default PostSectionCol;
