import React from "react";
import { ReactNode } from "react";

interface WysiwygJsonProps {
  tag: string;
  attributes?: {
    [key: string]: string;
  };
  text?: string;
  children?: WysiwygJsonProps[];
}

// Reusable React component to display WYSIWYG JSON as HTML

export default function WysiwygRenderer({ json }: { json: WysiwygJsonProps }) {
  const createHtmlElement = (json: WysiwygJsonProps): ReactNode => {
    const { tag, attributes, text, children } = json;
    const childElements = children?.map((child) => createHtmlElement(child));

    const ee = childElements
      ? React.createElement(tag, attributes, text, ...childElements)
      : React.createElement(tag, attributes, text);
    return ee;
  };

  const htmlElement = createHtmlElement(json);

  return <>{htmlElement}</>;
}
