"use client";

import { useEffect } from "react";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;

    const initSmoothScroll = async () => {
      const Lenis = (await import("lenis")).default;

      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      });

      function raf(time: number) {
        if (lenis) {
          lenis.raf(time);
        }
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    };

    initSmoothScroll();

    return () => {
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  return <>{children}</>;
}
