import React from "react";

import IconMapPin from "../icons/IconMapPin";
import IconBuilding from "../icons/IconBuilding";
import { Popover } from "antd";
interface PropComponent {
  id: string;
  title?: string;
  salary?: number;
  location?: string;
  closeDate?: string | string[];
  description?: string;
  quantity?: string;
  experience?: string;
  skills?: string | string[];
  rank?: string;
  jobType?: string;
  gender?: string;
  onClick?: any;
  onClickCheckActive?: any;
  className?: string;
  checkActive?: string;
}

const CardJobClickShortPage: React.FC<PropComponent> = ({
  id,
  className,
  checkActive = "false",
  onClick,
  title,
  location,
  description,
}) => {
  return (
    <>
      <div
        className={`group/item flex gap-3 border boder-solid  bg-white hover:border-primary transition-all rounded-md min-h-[100px] p-4 ${className} ${
          checkActive == id ? "border-primary" : "border-gray-200"
        }`}
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
            <Popover content={<p className="w-[300px]">{title}</p>}>
              <h3
                className="line-clamp-2 min-w-[70%] font-medium cursor-pointer hover:text-primary transition-all"
                onClick={() => {
                  // navigate("/jobs/1");
                  onClick({
                    id: id,
                    description: description,
                    title: title,
                    location: location,
                  });
                }}
              >
                {title}
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
              {location}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardJobClickShortPage;
