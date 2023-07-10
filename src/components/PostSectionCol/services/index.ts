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
      ? { perView: 2, spacing: 12 }
      : wdth < 1024
      ? { perView: 2.5, spacing: 16 }
      : wdth < 1536
      ? { perView: 3, spacing: 20 }
      : { perView: 4, spacing: 24 };

  return config;
}
