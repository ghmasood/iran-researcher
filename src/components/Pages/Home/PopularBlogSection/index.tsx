import React from "react";

import SectionLayout from "components/UI/Layout";
import PostSectionRow from "components/UI/PostSectionRow";

import type { IPostCardRes } from "types";

interface IPopBlogSectionProps {
  customClass?: string;
}
async function PopBlogSection({ customClass = "" }: IPopBlogSectionProps) {
  const data = await getData();
  const news: IPostCardRes[] = data.items.map((n: any, index: number) => ({
    link: "#",
    category: (n.categories[0] as string).replace("&gt;", "-"),
    CoverImg: n.enclosure.link,
    title: n.title,
    desc: n.description,
    date: new Date(n.pubDate).toISOString(),
    id: index + "",
  }));

  return (
    <SectionLayout>
      <PostSectionRow posts={news} sectionTitle={"پربازدیدترین"} />
    </SectionLayout>
  );
}

export default PopBlogSection;

async function getData() {
  const res = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fwww.mehrnews.com%2Frss%2Fpl%2F9",
    { cache: "force-cache", next: { revalidate: 300 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
