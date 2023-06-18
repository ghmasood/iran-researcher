import Footer from "components/Footer";
import React, { ReactNode } from "react";

function LayoutComponent({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen h-full py-8">
      <div id="Layout" className="px-[12.75rem]">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default LayoutComponent;
