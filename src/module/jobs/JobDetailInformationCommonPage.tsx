import React from "react";
import IconGroupUser from "../../components/icons/IconGroupUser";
import IconClock from "../../components/icons/IconClock";
import IconBriefCase from "../../components/icons/IconBriefCase";
import { HourglassOutlined } from "@ant-design/icons";

interface PropComponent {
  className?: string;
}
const JobDetailInformationCommonPage: React.FC<PropComponent> = ({
  className,
}) => {
  return (
    <>
      <div className={`p-5 ${className}`}>
        <h2 className="text-xl font-bold">Thông tin chung</h2>
        <div className="mt-5 flex flex-col gap-5">
          <div className="flex gap-4 items-center">
            <HourglassOutlined style={{fontSize: "23px"}} className="p-3 bg-primary rounded-full text-white" />
            {/* <IconMoney className="p-3 bg-primary rounded-full text-white"></IconMoney> */}
            <div className="flex flex-col">
              <span className="text-sm text-gray-500 line-clamp-1">
                Cấp bậc
              </span>
              <span className="font-medium line-clamp-1">Nhân viên</span>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <IconBriefCase className="p-3 bg-primary rounded-full text-white"></IconBriefCase>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500 line-clamp-1">
                Kinh nghiệm
              </span>
              <span className="font-medium line-clamp-1">3 năm</span>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <IconGroupUser className="p-3 bg-primary rounded-full text-white"></IconGroupUser>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500 line-clamp-1">
                Số lượng tuyển
              </span>
              <span className="font-medium line-clamp-1">2 người</span>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <IconClock className="p-3 bg-primary rounded-full text-white"></IconClock>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500 line-clamp-1">
                Hình thức làm việc
              </span>
              <span className="font-medium line-clamp-1">Toàn thời gian</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetailInformationCommonPage;
