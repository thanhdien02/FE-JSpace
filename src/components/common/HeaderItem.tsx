import React from "react";
import { NavLink } from "react-router-dom";

interface PropComponent {
  className?: string;
  classLink?: string;
  title: string;
  path: string;
  children?: any;
}
const HeaderItem: React.FC<PropComponent> = ({
  className,
  title,
  path = "/",
  children,
  classLink = "",
}) => {
  return (
    <li className={`${className}`}>
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive
            ? `text-primary flex items-center gap-4 pl-4 rounded-lg hover:text-primary ${classLink}`
            : `flex items-centergap-4 pl-4 rounded-lg hover:text-primary text-black ${classLink}`
        }
      >
        {title}
        {children}
      </NavLink>
    </li>
  );
};

export default HeaderItem;
