import type { HTMLAttributes } from "react";

const MouseIcon: React.FC<HTMLAttributes<HTMLDivElement>> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group/mouse absolute left-[50%] top-[85%] hidden cursor-pointer md:block"
    >
      <svg
        width="30"
        height="45"
        viewBox="0 0 30 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.79">
          <path
            d="M5 17C5 11.4772 9.47715 7 15 7C20.5228 7 25 11.4772 25 17V28C25 33.5228 20.5228 38 15 38C9.47715 38 5 33.5228 5 28V17Z"
            fill="#212429"
          />
          <rect
            x="14"
            y="12"
            width="2"
            height="8"
            rx="1"
            fill="white"
            className="transition-transform group-hover/mouse:translate-y-[26%]"
          />
        </g>
      </svg>
    </div>
  );
};

export default MouseIcon;
