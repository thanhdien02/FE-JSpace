import React from "react";

import IconMapPin from "../icons/IconMapPin";
import IconBuilding from "../icons/IconBuilding";
import { Popover } from "antd";
interface PropComponent {
  onClick?: any;
  onClickCheckActive?: any;
  className?: string;
  checkActive?: string;
  item?: any;
}

const CardJobClickShortPage: React.FC<PropComponent> = ({
  className,
  checkActive = "false",
  onClick,
  item,
}) => {
  return (
    <>
      <div
        className={`group/item flex gap-3 border boder-solid  bg-white hover:border-primary transition-all rounded-md min-h-[100px] p-4 ${className} ${
          checkActive == item?.post?.id ? "border-primary" : "border-gray-200"
        }`}
      >
        <div className="min-w-[25%] max-w-[25%] max-h-[100px]">
          <img
            src={
              item?.post?.company?.logo
                ? item?.post?.company?.logo
                : "https://cdn.pixabay.com/photo/2023/08/11/16/29/tourist-8183867_640.png"
            }
            alt=""
            className="w-h-full h-full object-cover"
          />
        </div>
        <div className="relative grow flex flex-col gap-1">
          <div className="flex justify-between">
            <Popover content={<p className="w-[300px]">{item?.post?.title}</p>}>
              <h3
                className="line-clamp-1 min-w-[70%] font-medium cursor-pointer hover:text-primary transition-all"
                onClick={() => {
                  onClick(item);
                }}
              >
                {item?.post?.title}
              </h3>
            </Popover>
          </div>
          <div className="flex gap-1 items-center mt-2">
            <IconBuilding className="text-gray-500"></IconBuilding>
            <h4 className="line-clamp-1 text-gray-500 text-sm">
              {item?.post?.company?.name}
            </h4>
          </div>
          <div className="flex gap-1 overflow-hidden mt-2 items-center">
            <IconMapPin className="text-gray-500"></IconMapPin>
            <span className="line-clamp-1 text-sm text-gray-500">
              {item?.post?.location?.province}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardJobClickShortPage;
