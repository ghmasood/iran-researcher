import React from "react";

import BulletTitle from "components/UI/BulletTitle";
import FooterCommentItem from "./FooterCommentItem";

import type { IFooterCommentItem } from "types";

function FooterCommentSection({
  customClass = "",
  lastComments,
}: {
  lastComments: IFooterCommentItem[];
  customClass?: string;
}) {
  return (
    <section className={`flex flex-col gap-6 ${customClass}`}>
      <BulletTitle>آخرین نظرات</BulletTitle>
      <div className="flex flex-col gap-3">
        {lastComments.map((item, index) => (
          <FooterCommentItem
            key={item.author + index + item}
            author={item.author}
            text={item.text}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
}

export default FooterCommentSection;
