import type { HTMLAttributes } from "react";

const MouseIcon: React.FC<HTMLAttributes<HTMLDivElement>> = ({ onClick }) => {
  return (
    <div
      className="group/mouse absolute left-[50%] top-[85%] hidden cursor-pointer md:block"
      onClick={onClick}
    >
      <svg
        fill="none"
        height="45"
        viewBox="0 0 30 45"
        width="30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.79">
          <path
            d="M5 17C5 11.4772 9.47715 7 15 7C20.5228 7 25 11.4772 25 17V28C25 33.5228 20.5228 38 15 38C9.47715 38 5 33.5228 5 28V17Z"
            fill="#212429"
          />
          <rect
            className="transition-transform group-hover/mouse:translate-y-[26%]"
            fill="white"
            height="8"
            rx="1"
            width="2"
            x="14"
            y="12"
          />
        </g>
      </svg>
    </div>
  );
};

export default MouseIcon;
