"use client";
import React, { useState } from "react";

import { ArchiveAdd } from "iconsax-react";

interface ISaveProps {
  customClass?: string;
  id?: string;
}

function Save({ customClass = "" }: ISaveProps) {
  //STATES
  const [isSave, setIsSave] = useState(false);

  return (
    <ArchiveAdd
      onClick={() => setIsSave(!isSave)}
      size="1.5rem"
      className={`text-primary cursor-pointer transition-all duration-500 ${customClass}`}
      variant={isSave ? "Bold" : "Linear"}
    />
  );
}

export default Save;
