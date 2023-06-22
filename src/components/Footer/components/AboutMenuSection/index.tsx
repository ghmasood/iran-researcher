import BulletTitle from "components/BulletTitle";
import BasicInput from "components/‌‌‌‌BasicInput";
import React, { useState } from "react";
import icons from "utils";
import NewsLetter from "../NewsLetter";
import SocialMedia from "../SocialMedia";

function AboutMenuSection({ customClass = "" }: { customClass?: string }) {
  return (
    <div
      className={`bg-gray rounded-bl-[3rem] rounded-tl-[3rem] pr-[2rem] sm:pr-[4rem] lg:pr-[6rem] xl:pr-[12.75rem] p-6 flex flex-col gap-6 ${customClass}`}
    >
      <div className="flex flex-col gap-4">
        <BulletTitle>ایران ریسرچر</BulletTitle>
        <span className="text-primary-l1">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد سوالات
          پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </span>
      </div>
      <div className="flex gap-24 w-full ">
        <NewsLetter />
        <SocialMedia />
      </div>
      {/* <div></div> */}
    </div>
  );
}

export default AboutMenuSection;
