import React from "react";
import Link from "next/link";

import type { IFooterCommentItem } from "types";

function FooterCommentItem({ text, link, author }: IFooterCommentItem) {
  return (
    <div className="flex flex-col gap py-1.5 px-4 bg-gray rounded-xl">
      <h4 className="text-primary text-2xl font-[450]">{author}</h4>
      <Link
        href={link}
        className="text-primary-l1 text-lg font-[300] truncate hover:text-primary-l2"
      >
        {text}
      </Link>
    </div>
  );
}

export default FooterCommentItem;
