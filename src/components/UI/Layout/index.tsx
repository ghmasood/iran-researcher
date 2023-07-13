import React, { ReactNode } from "react";

function SectionLayout({
  children,
  customClass,
}: {
  children: ReactNode;
  customClass?: string;
}) {
  return (
    <div
      className={`px-[2rem] sm:px-[4rem] lg:px-[6rem] xl:px-[9rem] 2xl:px-[11.5rem] py-6 ${customClass}`}
    >
      {children}
    </div>
  );
}

export default SectionLayout;
