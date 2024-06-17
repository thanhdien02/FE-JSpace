import React from "react";

const CardCompanyPageSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse w-full h-[300px] bg-white shadow-md rounded-md">
      <div className="relative h-[43%]">
        <div className="rounded-t-lg w-full h-full object-cover bg-gray-200"></div>
      </div>
      <div className="mt-4 w-full flex flex-col px-3 gap-3">
        <div className="w-full h-9 bg-gray-200"></div>
        <div className="w-full h-5 bg-gray-200"></div>
        <div className="w-full h-4 bg-gray-300"></div>
        <div className="w-full h-6 flex gap-2">
          <div className="w-full h-full bg-gray-200"></div>
          <div className="w-full h-full bg-gray-200"></div>
          <div className="w-full h-full bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default CardCompanyPageSkeleton;
