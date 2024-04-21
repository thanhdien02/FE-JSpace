import React from "react";
import IconArrowRight from "../icons/IconArrowRight";
import { NavLink } from "react-router-dom";
import IconIdentification from "../icons/IconIdentification";

interface PropComponent {
  className?: string;
  path?: string;
  title?: string;
  onClick?: any;
  icon?: string
}
const ButtonMenu: React.FC<PropComponent> = ({
  className,
  path,
  title,
  onClick = () => {},
}) => {
  return (
    <>
      <NavLink
        onClick={onClick}
        to={`${path}`}
        className={`button-menu-candidate text-gray-800 flex items-center justify-between bg-blue-50 py-3 px-4 rounded-md hover:text-primary transition-all ${className}`}
      >
        <div className="flex gap-4 font-medium text-[14px] items-center">
          <IconIdentification className="text-primary"></IconIdentification>
          <p className="text-line-clamp max-w-[200px]">{title}</p>
        </div>
        <IconArrowRight className="arrow-menu text-blue-50 transition-all"></IconArrowRight>
      </NavLink>
    </>
  );
};

export default ButtonMenu;
