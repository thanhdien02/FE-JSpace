import React from "react";
import { NavLink } from "react-router-dom";

interface PropComponent {
  className?: string;
  title: string;
  path: string;
}
const HeaderItem: React.FC<PropComponent> = ({
  className,
  title,
  path = "/",
}) => {
  return (
    <li className={`${className}`}>
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive
            ? "text-primary flex gap-4 pl-4 rounded-lg hover:text-primary"
            : " flex gap-4 pl-4 rounded-lg hover:text-primary"
        }
      >
        {title}
      </NavLink>
    </li>
  );
};

export default HeaderItem;
