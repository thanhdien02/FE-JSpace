import React from "react";
import IconMoney from "../../components/icons/IconMoney";
import IconPaperAirplan from "../../components/icons/IconPaperAirplan";
import IconHeart from "../../components/icons/IconHeart";
import IconHeartFill from "../../components/icons/IconHeartFill";
import { Popover } from "antd";

interface PropComponent {
  className?: string;
  titleJob?: string;
  nameCompany?: string;
  logo?: string;
  salary?: string;
  location?: string;
  onClick?: any;
}
const JobDetailInformationJobPage: React.FC<PropComponent> = ({
  className,
}) => {
  return (
    <>
      <div className={`p-6 rounded-sm ${className}`}>
        <h2 className="text-xl font-bold line-clamp-1">Java Developer</h2>
        <div className="flex gap-14 mt-5">
          <div className="flex gap-3 items-center">
            <IconMoney className="p-3 bg-primary rounded-full text-white"></IconMoney>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500 line-clamp-1">
                Mức lương
              </span>
              <span className="font-medium line-clamp-1">Thỏa thuận</span>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <IconMoney className="p-3 bg-primary rounded-full text-white"></IconMoney>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500 line-clamp-1">
                Địa điểm
              </span>
              <span className="font-medium line-clamp-1">Đồng Tháp</span>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <IconMoney className="p-3 bg-primary rounded-full text-white"></IconMoney>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500 line-clamp-1">
                Kinh Nghiệm
              </span>
              <span className="font-medium line-clamp-1">2 năm</span>
            </div>
          </div>
        </div>
        <div className="flex gap-5 mt-5">
          <div className="grow flex items-center justify-center py-2 gap-3 hover:opacity-80 transition-all cursor-pointer bg-primary text-white font-medium  rounded-md">
            <button className="">Ứng tuyển ngay</button>
            <IconPaperAirplan></IconPaperAirplan>
          </div>
          <Popover
            content={
              <p className="text-center font-medium">
                {true ? "Bỏ lưu" : "Lưu tin"}
              </p>
            }
          >
            <div className="w-[15%] hover:opacity-80 transition-all flex items-center border border-solid border-primary text-primary font-medium justify-center py-2 gap-2 rounded-md">
              <button className="">{true ? "Đã lưu" : "Lưu tin"}</button>
              {true ? <IconHeartFill></IconHeartFill> : <IconHeart></IconHeart>}
            </div>
          </Popover>
        </div>
      </div>
    </>
  );
};

export default JobDetailInformationJobPage;
