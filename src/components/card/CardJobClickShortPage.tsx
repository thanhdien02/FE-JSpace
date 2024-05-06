import React from "react";

import IconMapPin from "../icons/IconMapPin";
import IconBuilding from "../icons/IconBuilding";
import { Popover } from "antd";
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
const CardJobClickShortPage: React.FC<PropComponent> = ({ className }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className={`flex gap-3 border boder-solid border-gray-200 bg-white hover:border-primary transition-all rounded-md min-h-[100px] p-4 ${className}`}
      >
        <div className="min-w-[25%] max-h-[100px]">
          <img
            src="https://th.bing.com/th/id/R.01cd719c50a4066e50808738e6eff177?rik=6%2fm77v2X46RLyg&pid=ImgRaw&r=0"
            alt=""
            className="w-h-full h-full object-cover"
          />
        </div>
        <div className="relative grow flex flex-col gap-1">
          <div className="flex justify-between">
            <Popover
              content={
                <p className="w-[300px]">
                  Font end developer for 2 years (Senior) 10 - 20tr many benifit
                  and team building. Apply now that bench
                </p>
              }
            >
              <h3
                className="line-clamp-2 min-w-[70%] font-medium cursor-pointer hover:text-primary transition-all"
                onClick={() => {
                  navigate("/jobs/1");
                }}
              >
                Font end developer for 2 years (Senior) 10 - 20tr many benifit
                and team building. Apply now that bench
              </h3>
            </Popover>
          </div>
          <div className="flex gap-1 items-center mt-2">
            <IconBuilding className="text-gray-500"></IconBuilding>
            <h4 className="line-clamp-1 text-gray-500 text-sm">
              Công ty phần mềm FPT Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Quibusdam nulla temporibus dolorem consectetur
              alias dicta expedita sapiente repellat voluptate explicabo dolor
              rerum distinctio maiores, harum impedit nisi. Perferendis, tenetur
              odit!
            </h4>
          </div>
          <div className="flex gap-1 overflow-hidden mt-2 items-center">
            <IconMapPin className="text-gray-500"></IconMapPin>
            <span className="line-clamp-1 text-sm text-gray-500">
              Hồ Chí Minh
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardJobClickShortPage;
