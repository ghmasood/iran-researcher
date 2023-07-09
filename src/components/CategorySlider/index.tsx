"use client";
import clsx from "clsx";
import CategoryChip from "components/CategoryChip";
import React, { useState } from "react";
import { ICategorySlider } from "types";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import icons from "utils/icons";
import useWidth from "hooks/useWidth";

interface ICategorySliderProps extends ICategorySlider {
  customClass?: string;
}
function CategorySlider({
  customClass = "",
  categories,
}: ICategorySliderProps) {
  //STATES
  const [curSlide, setCurSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  //CUSTOM HOOK
  const is2Xs = useWidth(345);
  const isXs = useWidth(475);
  const isSm = useWidth(640);
  const isMd = useWidth(768);
  const isLg = useWidth(1024);
  const isXl = useWidth(1280);
  const is2xl = useWidth(1536);
  const is3xl = useWidth(1600);
  const perView = is2Xs
    ? 1
    : isXs
    ? 1
    : isSm
    ? 2
    : isMd
    ? 2.5
    : isLg
    ? 3
    : isXl
    ? 4
    : is2xl
    ? 4.5
    : is3xl
    ? 5.5
    : 8;

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    rtl: true,
    slideChanged(s) {
      setCurSlide(s.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: {
      perView: perView,
      spacing: 6,
    },
  });

  return (
    <div className="bg-gray p-2 rounded-xl">
      <div
        className={clsx([
          "keen-slider relative",
          !loaded && "skeleton",
          customClass,
        ])}
        ref={sliderRef}
      >
        {categories.map((item, index) => (
          <CategoryChip
            customClass={`keen-slider__slide`}
            key={item.category + index}
            category={item.category}
            bgImage={item.bgImage}
            link={item.link}
          />
        ))}
        {loaded && instanceRef.current && (
          <>
            <div
              className={clsx([
                "transition-all duration-500 absolute -right-2 bg-gradient-to-l from-gray via-gray/95 to-transparent w-14 h-[200%] top-1/2 -translate-y-1/2 flex items-center justify-start",
                ,
                curSlide === 0 && "opacity-0 -z-10",
              ])}
            >
              <span
                onClick={(e: any) => {
                  e.stopPropagation() || instanceRef.current?.prev();
                }}
                className="cursor-pointer"
              >
                {icons.arrow("", "")}
              </span>
            </div>

            <div
              className={clsx([
                "transition-all duration-500 absolute -left-2 bg-gradient-to-r from-gray via-gray/95 to-transparent w-14 h-[200%] top-1/2 -translate-y-1/2 flex items-center justify-end",
                ,
                curSlide >=
                  instanceRef.current.track.details.slides.length - perView &&
                  "opacity-0 -z-10",
              ])}
            >
              <span
                onClick={(e: any) => {
                  e.stopPropagation() || instanceRef.current?.next();
                }}
                className="cursor-pointer"
              >
                {icons.arrow("rotate-180", "")}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CategorySlider;
