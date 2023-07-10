"use client";
import clsx from "clsx";
import PostCard from "components/PostCard";
import { useKeenSlider } from "keen-slider/react";
import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { IPostCard } from "types";
import useWidth from "hooks/useWidth";
import icons from "utils/icons";
import BulletTitle from "components/BulletTitle";

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
        className={clsx(["keen-slider", !loaded && "skeleton", customClass])}
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
