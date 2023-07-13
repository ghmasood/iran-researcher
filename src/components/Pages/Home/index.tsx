import React from "react";
import LastBlogSection from "./LastBlogSection";
import CategorySlider from "./CategorySlider";
import PostSectionRow from "components/UI/PostSectionRow";
import PopBlogSection from "./PopularBlogSection";

function HomePage() {
  return (
    <>
      <CategorySlider />
      <LastBlogSection />
      <PopBlogSection />
    </>
  );
}

export default HomePage;
