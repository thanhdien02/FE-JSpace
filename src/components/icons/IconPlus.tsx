import React from "react";
interface PropComponent {
  className?: string;
  classIcon?: string;
}
const IconPlus: React.FC<PropComponent> = ({ className, classIcon }) => {
  return (
    <span className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className={`w-6 h-6 ${classIcon}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.7}
          stroke="currentColor"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </span>
  );
};

export default IconPlus;
