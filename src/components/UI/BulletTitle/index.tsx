import React, { ReactNode } from "react";

function BulletTitle({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-baseline gap-1.5">
      <span className="w-1 h-3 bg-primary-l2 rounded-xl" />
      <h2 className="text-primary font-[700] text-2xl">{children}</h2>
    </div>
  );
}

export default BulletTitle;
