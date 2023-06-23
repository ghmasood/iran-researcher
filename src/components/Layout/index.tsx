import Footer from "components/Footer";
import React, { ReactNode } from "react";

function LayoutComponent({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen h-full py-8 flex flex-col">
      <div className="px-[2rem] sm:px-[4rem] lg:px-[6rem] xl:px-[12.75rem]">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default LayoutComponent;
