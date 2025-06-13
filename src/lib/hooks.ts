// hooks/useLockBodyScroll.ts
import { useLayoutEffect } from "react";

export const useLockBodyScroll = (shouldLock: boolean) => {
  useLayoutEffect(() => {
    if (shouldLock) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [shouldLock]);
};
