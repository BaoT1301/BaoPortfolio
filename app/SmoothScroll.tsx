"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | null = null;

    const syncScrollTrigger = () => ScrollTrigger.update();

    const start = () => {
      if (lenis || motionPreference.matches) return;

      lenis = new Lenis({
        autoRaf: true,
        anchors: true,
        lerp: 0.1,
        smoothWheel: true,
        stopInertiaOnNavigate: true,
        syncTouch: false,
        wheelMultiplier: 0.92,
      });

      lenis.on("scroll", syncScrollTrigger);
      requestAnimationFrame(() => ScrollTrigger.refresh());
    };

    const stop = () => {
      if (!lenis) return;
      lenis.off("scroll", syncScrollTrigger);
      lenis.destroy();
      lenis = null;
    };

    const updateForMotionPreference = () => {
      if (motionPreference.matches) stop();
      else start();
    };

    updateForMotionPreference();
    motionPreference.addEventListener("change", updateForMotionPreference);

    return () => {
      motionPreference.removeEventListener("change", updateForMotionPreference);
      stop();
    };
  }, []);

  return null;
}
