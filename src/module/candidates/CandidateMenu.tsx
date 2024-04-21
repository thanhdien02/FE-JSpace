import React from "react";
import { NavLink } from "react-router-dom";
import IconArrowRight from "../../components/icons/IconArrowRight";

interface PropComponent {
  className?: string;
  data?: any;
  onClick?: any;
}
const CandidateMenu: React.FC<PropComponent> = ({
  className,
  data,
  onClick,
}) => {
  return (
    <>
      {data?.length > 0 &&
        data.map((item: any) => (
          <NavLink
            key={item?.key}
            onClick={() => onClick(item)}
            to={`${item?.path}`}
            className={`button-menu-candidate text-gray-800 flex items-center justify-between bg-blue-50 py-3 px-4 rounded-md hover:text-primary transition-all ${className}`}
          >
            <div className="flex gap-4 font-medium text-[14px] items-center">
              {item?.icon}
              <p className="text-line-clamp max-w-[200px]">{item?.title}</p>
            </div>
            <IconArrowRight className="arrow-menu text-blue-50 transition-all"></IconArrowRight>
          </NavLink>
        ))}
    </>
  );
};

export default CandidateMenu;
