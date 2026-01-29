"use client";

import { useEffect, useState } from "react";

export function useScrollThreshold(threshold = 120) {
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setPassed(window.scrollY > threshold);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return passed;
}
