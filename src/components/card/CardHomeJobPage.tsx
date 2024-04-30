import React from "react";

import logo from "../../assets/bg-login.jpg";
import { Tag } from "antd";
interface PropComponent {
  className?: string;
  titleJob?: string;
  nameCompany?: string;
  logo?: string;
  salary?: string;
  location?: string;
  onClick?: any;
}
const CardHomeJobPage: React.FC<PropComponent> = ({ className }) => {
  return (
    <>
      <div
        className={`flex gap-3 bg-white rounded-md min-h-[100px] p-4 ${className}`}
      >
        <div className="min-w-[21%]">
          <img src={logo} alt="" className="w-full h-[70px] object-cover" />
        </div>
        <div className="grow flex flex-col gap-1 overflow-hidden">
          <h3
            className="line-clamp-1 font-medium cursor-pointer hover:text-primary transition-all"
            onClick={() => {}}
          >
            Lorem ipsum dolor sit amet
          </h3>
          <h4 className="line-clamp-1 text-gray-500 text-sm">
            Công ty phần mềm FPT Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Quibusdam nulla temporibus dolorem consectetur
            alias dicta expedita sapiente repellat voluptate explicabo dolor
            rerum distinctio maiores, harum impedit nisi. Perferendis, tenetur
            odit!
          </h4>
          <div className="flex gap-1 overflow-hidden mt-1">
            <Tag className="min-w-[50px] line-clamp-1 max-w-[100px]">Tag 1</Tag>
            <Tag className="min-w-[50px] line-clamp-1 max-w-[100px]">Tag 1</Tag>

            <Tag>Tag 2</Tag>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardHomeJobPage;
