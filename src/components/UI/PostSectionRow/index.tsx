"use client";

import PostCard from "components/UI/PostCard";
import BulletTitle from "components/UI/BulletTitle";

import { type IPostCardRes } from "types";
import BasicButton from "../BaaicButton";

interface IPostSectionRowProps {
  customClass?: string;
  posts: IPostCardRes[];
  sectionTitle: string;
  loading?: boolean;
}
function PostSectionRow({
  sectionTitle,
  posts,
  loading,
  customClass = "",
}: IPostSectionRowProps) {
  return (
    <div className={`flex flex-col gap-2 ${customClass}`}>
      <div className="flex items-center justify-between px-2">
        <BulletTitle>{sectionTitle}</BulletTitle>
        <BasicButton customClass="bg-black-t25 py-2 px-4 rounded-lg">
          showAll
        </BasicButton>
      </div>
      <div className="flex flex-wrap gap-4">
        {posts.slice(0, 6).map((p, index) => (
          <PostCard
            key={p.title + index}
            id="p.title + index"
            customClass="basis-full lg:basis-[calc((100%_-_1rem)/2)]"
            imgWrapperClass="w-1/3 md:w-1/2"
            CoverImg={p.CoverImg}
            title={p.title}
            desc={p.desc}
            date={p.date}
            kind={"row"}
            category={p.category}
            link={p.link}
          />
        ))}
      </div>
    </div>
  );
}

export default PostSectionRow;
