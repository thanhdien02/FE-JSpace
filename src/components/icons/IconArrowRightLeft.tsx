import React from "react";
interface PropComponent {
  className?: string;
  classIcon?: string;
}
const IconArrowRightLeft: React.FC<PropComponent> = ({
  className,
  classIcon,
}) => {
  return (
    <span className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`w-6 h-6 ${classIcon}`}
      >
        <path
          fillRule="evenodd"
          d="M15.97 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l3.22-3.22H7.5a.75.75 0 0 1 0-1.5h11.69l-3.22-3.22a.75.75 0 0 1 0-1.06Zm-7.94 9a.75.75 0 0 1 0 1.06l-3.22 3.22H16.5a.75.75 0 0 1 0 1.5H4.81l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 0Z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
};

export default IconArrowRightLeft;
