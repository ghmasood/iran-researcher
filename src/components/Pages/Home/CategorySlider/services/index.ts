import { useEffect } from "react";

export function PerViewHandler(
  wdth: number,
  setWdth: React.Dispatch<React.SetStateAction<number>>
) {
  useEffect(() => {
    const handleWindowResize = () => {
      setWdth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  const perView =
    wdth < 440
      ? 1
      : wdth < 640
      ? 1.5
      : wdth < 768
      ? 2
      : wdth < 1024
      ? 2.5
      : wdth < 1280
      ? 3
      : wdth < 1536
      ? 4
      : wdth < 1600
      ? 4.5
      : wdth < 1800
      ? 5.5
      : 8;

  return perView;
}
