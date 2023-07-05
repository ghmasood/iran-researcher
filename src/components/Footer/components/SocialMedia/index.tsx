import BulletTitle from "components/BulletTitle";
import Link from "next/link";
import React from "react";
import icons from "utils";

interface ISocialMediaProps {
  customClass?: string;
}
function SocialMedia({ customClass = "" }: ISocialMediaProps) {
  return (
    <div className="flex flex-col justify-between gap-4 w-1/2">
      <BulletTitle>سوشال مدیا</BulletTitle>
      <div className="flex gap-4 rounded-xl">
        <Link
          className="bg-gradient-to-tr from-[#0a66c2] to-[#004182] rounded-lg"
          href="https://www.linkedin.com/company/iresearcher/"
        >
          {icons.linkedin("h-9 w-9 p-1", "fill-white")}
        </Link>
        <Link
          className="rounded-xl"
          style={{
            background: "linear-gradient(223deg, #F45C9F 0%, #FF7563 100%);",
          }}
          href="https://instagram.com/iresearcher.ir"
        >
          {icons.instagram("h-9 w-9 p-1.5", "fill-white")}
        </Link>
        <Link
          className="bg-gradient-to-tr from-[#2AABEE] to-[#229ED9] rounded-xl"
          href="https://t.me/iresearcherir"
        >
          {icons.telegram("h-9 w-9 p-1", "fill-white")}
        </Link>
        <Link
          style={{
            background: "linear-gradient(228deg, #2CA5E0 0%, #67C9F5 100%);",
          }}
          className="rounded-xl"
          href="https://twitter.com/iresearcher_ir"
        >
          {icons.twitter("h-9 w-9 p-1", "fill-white")}
        </Link>
      </div>
    </div>
  );
}
export default SocialMedia;
