import CategorySlider from "components/CategorySlider";
import LayoutComponent from "components/Layout";
import PostCard from "components/PostCard";
import PostSectionCol from "components/PostSectionCol";
import { ICategoryChip, IPostCard, categories } from "types";

export default function Home() {
  return (
    <LayoutComponent>
      <CategorySlider categories={mockData2} />
      <div className="flex flex-col gap-10 my-8">
        <PostSectionCol posts={pdata} sectionTitle="پست‌های اخیر" />
        <PostCard
          link="#"
          category={categories.EDUCATION}
          customClass="w-[744px]"
          CoverImg={
            "https://mwallpaper.ir/wp-content/uploads/2021/10/%D9%88%D8%A7%D9%84%D9%BE%DB%8C%D9%BE%D8%B1-%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE-%D8%A8%D8%A7-%D8%AA%D9%85-%D8%B1%D9%86%DA%AF-%D8%A8%D9%86%D9%81%D8%B4.jpg"
          }
          title={
            "محبوب‌ترین نسخه اندروید و محبوب‌ترین مرورگر میان کاربران این سیستم‌عامل کدام است؟"
          }
          desc={
            "نتایج نظرسنجی جدید از کاربران اندروید، محبوب‌ترین نسخه‌ی این سیستم‌عامل، محبوب‌ترین مرورگر در آن و غیره را نشان می‌دهد.نتایج نظرسنجی جدید از کاربران اندروید، محبوب‌ترین نسخه‌ی این سیستم‌عامل، محبوب‌ترین مرورگر در آن و غیره را نشان می‌دهد."
          }
          date={new Date().toISOString()}
          kind={"row"}
        />
      </div>
    </LayoutComponent>
  );
}

const mockData2: ICategoryChip[] = Object.values(categories).map((item, _) => ({
  link: "#",
  bgImage:
    "https://footofan.com/cmsfiles/mainportal/images/11779-footofan_com.jpg",
  category: item,
}));

const pdata: IPostCard[] = new Array(6).fill({
  link: "#",
  category: categories.EDUCATION,
  customClass: "w-[744px]",
  CoverImg:
    "https://mwallpaper.ir/wp-content/uploads/2021/10/%D9%88%D8%A7%D9%84%D9%BE%DB%8C%D9%BE%D8%B1-%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE-%D8%A8%D8%A7-%D8%AA%D9%85-%D8%B1%D9%86%DA%AF-%D8%A8%D9%86%D9%81%D8%B4.jpg",
  title:
    "محبوب‌ترین نسخه اندروید و محبوب‌ترین مرورگر میان کاربران این سیستم‌عامل کدام است؟",
  desc: "نتایج نظرسنجی جدید از کاربران اندروید، محبوب‌ترین نسخه‌ی این سیستم‌عامل، محبوب‌ترین مرورگر در آن و غیره را نشان می‌دهد.نتایج نظرسنجی جدید از کاربران اندروید، محبوب‌ترین نسخه‌ی این سیستم‌عامل، محبوب‌ترین مرورگر در آن و غیره را نشان می‌دهد.",
  date: new Date().toISOString(),
  kind: "col",
});
