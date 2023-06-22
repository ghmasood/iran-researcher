import CategorySlider from "components/CategorySlider";
import LayoutComponent from "components/Layout";
import { ICategoryChip, categories } from "types";

export default function Home() {
  return (
    <LayoutComponent>
      <CategorySlider categories={mockData} />
    </LayoutComponent>
  );
}

const mockData: ICategoryChip[] = [
  {
    bgImage:
      "https://www.daysoftheyear.com/wp-content/uploads/national-fast-food-day.jpg",
    category: categories.FOOD,
    link: "/a",
    title: "1خوراک",
  },
  {
    bgImage:
      "https://www.digistyle.com/mag/wp-content/uploads/2022/02/milan-fashion.jpg",
    category: categories.FOOD,
    link: "/b",
    title: "2پوشاک",
  },
  {
    bgImage: "https://media.khabaronline.ir/d/2020/08/24/4/5448142.jpg",
    category: categories.FOOD,
    link: "/c",
    title: "3اقتصاد",
  },
  {
    bgImage:
      "https://footofan.com/cmsfiles/mainportal/images/11779-footofan_com.jpg",
    category: categories.FOOD,
    link: "/d",
    title: "4آموزش",
  },
  {
    bgImage:
      "https://www.daysoftheyear.com/wp-content/uploads/national-fast-food-day.jpg",
    category: categories.FOOD,
    link: "/a",
    title: "5خوراک",
  },
  {
    bgImage:
      "https://www.digistyle.com/mag/wp-content/uploads/2022/02/milan-fashion.jpg",
    category: categories.FOOD,
    link: "/b",
    title: "6پوشاک",
  },
  {
    bgImage: "https://media.khabaronline.ir/d/2020/08/24/4/5448142.jpg",
    category: categories.FOOD,
    link: "/c",
    title: "7اقتصاد",
  },
  {
    bgImage:
      "https://footofan.com/cmsfiles/mainportal/images/11779-footofan_com.jpg",
    category: categories.FOOD,
    link: "/d",
    title: "8آموزش",
  },
  {
    bgImage:
      "https://www.daysoftheyear.com/wp-content/uploads/national-fast-food-day.jpg",
    category: categories.FOOD,
    link: "/a",
    title: "9خوراک",
  },
  {
    bgImage:
      "https://www.digistyle.com/mag/wp-content/uploads/2022/02/milan-fashion.jpg",
    category: categories.FOOD,
    link: "/b",
    title: "10پوشاک",
  },
  {
    bgImage: "https://media.khabaronline.ir/d/2020/08/24/4/5448142.jpg",
    category: categories.FOOD,
    link: "/c",
    title: "11اقتصاد",
  },
  {
    bgImage:
      "https://footofan.com/cmsfiles/mainportal/images/11779-footofan_com.jpg",
    category: categories.FOOD,
    link: "/d",
    title: "12آموزش",
  },
];
