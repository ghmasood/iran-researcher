import { useEffect } from "react";

export function SlideConfigsHandler(
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

  const config =
    wdth < 475
      ? { perView: 1, spacing: 2 }
      : wdth < 640
      ? { perView: 1.4, spacing: 8 }
      : wdth < 768
      ? { perView: 2, spacing: 10 }
      : wdth < 900
      ? { perView: 2.2, spacing: 12 }
      : wdth < 1024
      ? { perView: 2.5, spacing: 14 }
      : wdth < 1200
      ? { perView: 2.8, spacing: 16 }
      : wdth < 1440
      ? { perView: 3, spacing: 16}
      : { perView: 4, spacing: 16 };

  return config;
}
