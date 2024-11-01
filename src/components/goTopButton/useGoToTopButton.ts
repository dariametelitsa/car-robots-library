import { useEffect } from "react";

import { Variants, useAnimationControls, useScroll } from "framer-motion";

export const useGoToTopButton = () => {
  const isBrowser = () => typeof window !== "undefined";

  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();

  const scrollToTopVariants: Variants = {
    hide: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    scrollYProgress.on("change", (latestValue) => {
      if (latestValue > 0.5) {
        controls.start("show").then(() => {
          return;
        });
      } else {
        controls.start("hide").then(() => {
          return;
        });
      }
    });

    return () => scrollYProgress.destroy();
  }, [scrollYProgress, controls]);

  function scrollToTopHandler() {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }

  return { controls, isBrowser, scrollToTopHandler, scrollToTopVariants };
};
