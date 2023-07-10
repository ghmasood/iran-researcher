"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";

import clsx from "clsx";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import CategoryChip from "components/CategoryChip";
import icons from "utils/icons";

import { PerViewHandler } from "./services";

import type { ICategorySlider } from "types";

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
  const [wdth, setWdth] = useState(0);

  // LIFECYCLE HOOK
  useLayoutEffect(() => {
    setWdth(window.innerWidth);
  }, []);

  //PERVIEW FOR SLIDER
  const perView = PerViewHandler(wdth, setWdth);

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
