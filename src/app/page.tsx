import CategoryChip from "components/CategoryChip";
import CategorySlider from "components/CatrgorySlider";
import { ICategoryChip, ICategorySlider, categories } from "types";

export default function Home() {
  return (
    <div className="w-full flex justify-center">
      <CategorySlider categories={mockData} />
    </div>
  );
}

const mockData: ICategoryChip[] = [
  {
    bgImage:
      "https://www.daysoftheyear.com/wp-content/uploads/national-fast-food-day.jpg",
    category: categories.FOOD,
    link: "/",
    title: "خوراک",
  },
  {
    bgImage:
      "https://www.daysoftheyear.com/wp-content/uploads/national-fast-food-day.jpg",
    category: categories.FOOD,
    link: "/",
    title: "خوراک",
  },
  {
    bgImage:
      "https://www.daysoftheyear.com/wp-content/uploads/national-fast-food-day.jpg",
    category: categories.FOOD,
    link: "/",
    title: "خوراک",
  },
  {
    bgImage:
      "https://www.daysoftheyear.com/wp-content/uploads/national-fast-food-day.jpg",
    category: categories.FOOD,
    link: "/",
    title: "خوراک",
  },
  {
    bgImage:
      "https://www.daysoftheyear.com/wp-content/uploads/national-fast-food-day.jpg",
    category: categories.FOOD,
    link: "/",
    title: "خوراک",
  },
];
