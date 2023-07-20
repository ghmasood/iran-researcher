import React, { cache } from "react";

import SectionLayout from "components/UI/Layout";

import PostSectionCol from "components/UI/PostSectionCol";
import type { IPostCardRes } from "types";
import WysiwygRenderer from "components/UI/wysiwyg";

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
  const a = await getJson();
  const b = await getPost();
  console.log(b.body);
  return (
    <SectionLayout>
      <PostSectionCol posts={a} sectionTitle={"آخرین اخبار"} />
      <WysiwygRenderer json={b} />
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

async function getJson() {
  const res = await fetch("http://localhost:3000/api/blogList");
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return data;
}

async function getPost() {
  const res = await fetch("http://localhost:3000/api/blog", {
    cache: "no-cache",
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return data;
}
