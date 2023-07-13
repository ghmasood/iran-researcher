import SectionLayout from "components/UI/Layout";
import PostSectionCol from "components/UI/PostSectionCol";
import React from "react";
import { IPostCardRes } from "types";

interface ILastBlogSectionProps {
  customClass?: string;
}
async function LastBlogSection({ customClass = "" }: ILastBlogSectionProps) {
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
      <PostSectionCol posts={news} sectionTitle={"آخرین اخبار"} />
    </SectionLayout>
  );
}

export default LastBlogSection;

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
