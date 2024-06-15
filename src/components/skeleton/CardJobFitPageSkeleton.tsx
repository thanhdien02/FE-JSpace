import React from "react";

const CardJobFitPageSkeleton: React.FC = () => {
  return (
    <div
      className={`animate-pulse relative flex gap-3 border boder-solid border-gray-200 bg-white hover:border-primary transition-all rounded-md min-h-[100px] w-full lg:p-4 p-2`}
    >
      <div className="lg:min-w-[23%] w-[100px] max-w-full h-[110px] lg:max-h-[110px]">
        <div className="w-h-full h-full lg:object-cover object-contain bg-gray-300"></div>
      </div>
      <div className="relative grow w-full flex flex-col lg:gap-1 h-full">
        <div className="flex gap-1 items-center h-full w-full bg-gray-300"></div>
        <div className="flex gap-1 overflow-hidden mt-2 items-center h-1/3 w-full bg-gray-200"></div>
        <div className="lg:flex gap-2 mt-1 items-center hidden h-1/2 w-full">
          <div className="w-full h-full bg-gray-200"></div>
          <div className="w-full h-full bg-gray-200"></div>
          <div className="w-full h-full bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default CardJobFitPageSkeleton;
