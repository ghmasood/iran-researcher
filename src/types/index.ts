import { SVGProps } from "react";

export interface ILogo extends SVGProps<SVGSVGElement> {
  pathClassName?: string;
}

export enum categories {
  EDUCATION = "آموزش و پرورش",
  COMMUNICATION = "ارتباطات",
  SECURITY = "امنیت",
  ECONOMIC = "اقتصادی",
  HEALTH = "بهداشت و سلامت",
  WORKـWELFARE = "کار و رفاه",
  NUTRITION = " تغذیه",
  JUSTICE = "عدالت",
  CITY_SERVICE = "راه و خدمات شهری",
  BUSINESS = "کسب و کار",
  SCIENCE_TECH = "علم و فناوری",
  CULTURAL = "فرهنگی",
  TOURISM = "گردشگری",
  FORCE = "نیرو",
  YOUTH = "جوانان",
  NATURAL_ENVIRONMENT = "محیط زیست",
}

export interface ICategoryChip {
  category: categories;
  bgImage: string;
  link: string;
}

export interface ICategorySlider {
  categories: ICategoryChip[];
}

export interface IFooterCommentItem {
  author: string;
  text: string;
  link: string;
}

export interface IPostCardRes {
  id: string;
  CoverImg: string;
  title: string;
  desc: string;
  date: string;
  category: categories;
  link: string;
}
