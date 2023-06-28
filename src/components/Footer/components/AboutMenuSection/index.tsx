import BulletTitle from "components/BulletTitle";
import BasicInput from "components/‌‌‌‌BasicInput";
import React, { useState } from "react";
import icons from "utils";
import NewsLetter from "../NewsLetter";
import SocialMedia from "../SocialMedia";

function AboutMenuSection({ customClass = "" }: { customClass?: string }) {
  return (
    <div
      className={`bg-gray rounded-l-[3rem] w-full flex flex-col gap-10 py-6 pl-10 ${customClass}`}
    >
      <div
        className={`w-full pr-[2rem] sm:pr-[4rem] lg:pr-[6rem] xl:pr-[12.75rem] gap-6 flex flex-col`}
      >
        <div className="flex flex-col gap-4 w-full">
          <BulletTitle>ایران ریسرچر</BulletTitle>
          <span className="text-primary-l1">
            ایران ریسرچر با کمک شما به دنبال اعداد و داده های معتبری هست که مشخص
            میکنند در مقاطع زمانی مختلف نیازهای مردم ایران در هر حوزه به چه صورت
            برطرف می شود. امیدواریم این حرکت به تصمیم گیری ها و اولویت بندی های
            بهتر مسئولان، فعالان اجتماعی و سایر بازیگران هر حوزه منجر شود.
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-x-24 gap-y-8 w-full ">
          <NewsLetter />
          <SocialMedia />
        </div>
      </div>
      <div className="w-full bg-dark-t05 text-primary rounded-l-xl flex  pr-[2rem] sm:pr-[4rem] lg:pr-[6rem] xl:pr-[12.75rem] p-2 justify-between">
        <span style={{ direction: "ltr" }}>© 2023, All Rights Reserved</span>
        <span>IRAN RESEARCHER</span>
      </div>
    </div>
  );
}

export default AboutMenuSection;
