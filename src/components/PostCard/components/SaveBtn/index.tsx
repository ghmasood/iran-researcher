"use client";
import { ArchiveAdd } from "iconsax-react";
import React, { useState } from "react";

interface ISaveProps {
  customClass?: string;
  id?: string;
}
function Save({ customClass = "" }: ISaveProps) {
  const [isSave, setIsSave] = useState(false);
  return (
    <ArchiveAdd
      onClick={() => setIsSave(!isSave)}
      size="1.5rem"
      className="text-primary cursor-pointer transition-all duration-500"
      variant={isSave ? "Bold" : "Linear"}
    />
  );
}

export default Save;
