"use client";
import BulletTitle from "components/BulletTitle";
import BasicInput from "components/‌‌‌‌BasicInput";
import React, { useState } from "react";
import icons from "utils/icons";

interface INewsLetterProps {
  customClass?: string;
}
function NewsLetter({ customClass = "" }: INewsLetterProps) {
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col gap-4 w-full md:w-1/2 ">
      <BulletTitle>خبرنامه</BulletTitle>
      <BasicInput
        plchldr="ایمیل خود را وارد کنید "
        RIcon={icons.email("h-5 w-5", "fill-primary-l2")}
        val={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
}

export default NewsLetter;
