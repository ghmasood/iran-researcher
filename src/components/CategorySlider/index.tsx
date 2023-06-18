import clsx from "clsx";
import CategoryChip from "components/CategoryChip";
import React from "react";
import { ICategorySlider } from "types";

interface ICategorySliderProps extends ICategorySlider {
  customClass?: string;
}
function CategorySlider({
  customClass = "",
  categories,
}: ICategorySliderProps) {
  return (
    <div className={clsx(["flex gap-6 rounded-xl bg-gray p-2", customClass])}>
      {categories.map((item, index) => (
        <CategoryChip
          key={item.category + index}
          category={item.category}
          title={item.title}
          bgImage={item.bgImage}
          link={item.link}
        />
      ))}
    </div>
  );
}

export default CategorySlider;
