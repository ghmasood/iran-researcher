import React from "react";

function AboutMenuSection({ customClass = "" }: { customClass?: string }) {
  return (
    <div
      className={`bg-gray rounded-bl-[3rem] rounded-tl-[3rem] pr-[12.75rem] p-10  ${customClass}`}
    >
      about
    </div>
  );
}

export default AboutMenuSection;
