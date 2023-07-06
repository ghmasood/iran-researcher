import BulletTitle from "components/BulletTitle";
import Link from "next/link";
import React from "react";
import icons from "utils/icons";
import styles from "./social.module.scss";
import clsx from "clsx";

interface ISocialMediaProps {
  customClass?: string;
}
function SocialMedia({ customClass = "" }: ISocialMediaProps) {
  return (
    <div className={`flex flex-col justify-between gap-4 w-1/2 ${customClass}`}>
      <BulletTitle>سوشال مدیا</BulletTitle>
      <div className="flex gap-4">
        <Link
          className={clsx([styles.btn, styles.linkedin])}
          href="https://www.linkedin.com/company/iresearcher/"
        >
          {icons.linkedin("h-10 w-10 p-2", "fill-white")}
        </Link>
        <Link
          className={clsx([styles.btn, styles.insta])}
          href="https://instagram.com/iresearcher.ir"
        >
          {icons.instagram("h-10 w-10 p-2", "fill-white")}
        </Link>
        <Link
          className={clsx([styles.btn, styles.telegram])}
          href="https://t.me/iresearcherir"
        >
          {icons.telegram("h-10 w-10 p-2", "fill-white")}
        </Link>
        <Link
          className={clsx([styles.btn, styles.twitter])}
          href="https://twitter.com/iresearcher_ir"
        >
          {icons.twitter("h-10 w-10 p-2", "fill-white")}
        </Link>
      </div>
    </div>
  );
}
export default SocialMedia;
