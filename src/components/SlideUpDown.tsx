import React, { useRef, useEffect, useCallback } from "react";
import { twMerge } from "tailwind-merge";

interface SlideUpDownProps extends React.HTMLAttributes<HTMLDivElement> {
  closed?: boolean;
}

const SlideUpDown: React.FC<SlideUpDownProps> = ({
  children,
  closed = false,
  className,
  ...rest
}) => {
  const outerRef = useRef<HTMLDivElement>(null);
  const startTransition = useCallback(
    (prevHeight: string) => {
      if (!outerRef.current) return;
      let endHeight = "0px";

      if (!closed) {
        outerRef.current.classList.remove("hidden");
        outerRef.current.style.height = "auto";
        endHeight = getComputedStyle(outerRef.current).height;
      }

      outerRef.current.classList.add("overflow-y-hidden");
      outerRef.current.style.height = prevHeight;
      outerRef.current.offsetHeight; // force repaint
      outerRef.current.style.transitionProperty = "height";
      outerRef.current.style.height = endHeight;
    },
    [closed],
  );

  useEffect(() => {
    if (outerRef.current) {
      startTransition(getSnapshotBeforeUpdate(outerRef.current));
      outerRef.current.classList.remove("opacity-0");
    }
  }, [closed, startTransition]);

  const getSnapshotBeforeUpdate = (outerRef: HTMLDivElement) => {
    /* Prepare to resize */
    return `${outerRef.getBoundingClientRect().height}px`;
  };

  const endTransition = () => {
    if (!outerRef.current) return;

    outerRef.current.classList.remove("overflow-y-hidden");
    outerRef.current.style.transitionProperty = "none";
    outerRef.current.style.height = closed ? "0px" : "auto";

    if (closed) {
      outerRef.current.classList.add("hidden");
    }
  };

  const handleTransitionEnd = (evt: React.TransitionEvent) => {
    if (evt.target === outerRef.current && evt.propertyName === "height") {
      endTransition();
    }
  };

  return (
    <div
      ref={outerRef}
      className={twMerge(
        "h-0 opacity-0 transition-[height] duration-300 ease-out",
        className,
      )}
      onTransitionEnd={handleTransitionEnd}
      {...rest}
    >
      <>{children}</>
    </div>
  );
};

export default SlideUpDown;
