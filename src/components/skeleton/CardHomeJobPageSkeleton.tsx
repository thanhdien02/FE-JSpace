import { Tag } from "antd";
import React from "react";

const CardHomeJobPageSkeleton: React.FC = () => {
  return (
    <div
      className={`animate-pulse relative flex gap-3 shadow-md bg-white rounded-md min-h-[100px] p-4`}
    >
      <div className="min-w-[80px] w-[80px] h-[80px]">
        <div className="w-full h-full object-cover bg-gray-300"></div>
      </div>
      <div className="grow flex flex-col gap-1 overflow-hidden">
        <h3 className="line-clamp-1 font-medium cursor-pointer hover:text-primary transition-all w-full bg-gray-300 h-full"></h3>

        <h4 className="line-clamp-1 text-gray-500 text-sm bg-gray-200 h-1/2 w-full "></h4>
        <div className="flex gap-1 overflow-hidden mt-1 h-1/2">
          <Tag className="min-w-[70px] line-clamp-1 max-w-[600px] font-medium bg-gray-200"></Tag>
          <Tag className="min-w-[70px] line-clamp-1 max-w-[115px] font-medium bg-gray-200"></Tag>
          <Tag className="min-w-[70px] line-clamp-1 max-w-[115px] font-medium bg-gray-200"></Tag>
        </div>
      </div>
    </div>
  );
};

export default CardHomeJobPageSkeleton;
