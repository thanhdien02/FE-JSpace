import React from "react";
interface PropComponent {
  className?: string;
}
const IconUtunRight: React.FC<PropComponent> = ({ className }) => {
  return (
    <span className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
        />
      </svg>
    </span>
  );
};

export default IconUtunRight;
