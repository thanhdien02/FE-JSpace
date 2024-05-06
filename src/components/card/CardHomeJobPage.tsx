import React from "react";

import { Tag } from "antd";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  return (
    <>
      <div
        className={`flex gap-3 bg-white rounded-md min-h-[100px] p-4 ${className}`}
      >
        <div className="min-w-[25%]">
          <img
            src="https://th.bing.com/th/id/R.01cd719c50a4066e50808738e6eff177?rik=6%2fm77v2X46RLyg&pid=ImgRaw&r=0"
            alt=""
            className="w-full h-[80px] object-cover"
          />
        </div>
        <div className="grow flex flex-col gap-1 overflow-hidden">
          <h3
            className="line-clamp-1 font-medium cursor-pointer hover:text-primary transition-all"
            onClick={() => {
              navigate("/jobs/1");
            }}
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
