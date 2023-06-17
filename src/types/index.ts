import { SVGProps } from "react";

export interface ILogo extends SVGProps<SVGSVGElement> {
  pathClassName?: string;
}

export enum categories {
  FOOD,
  ANIMAL,
  CAR,
  SPORT,
  MUSIC,
  TECHNOLOGY,
}

export interface ICategoryChip {
  category: categories;
  title: string;
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
