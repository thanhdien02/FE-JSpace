import React from "react";
import logo from "../../assets/banner.jpg";
import IconGroupUser from "../../components/icons/IconGroupUser";
import IconMapPin from "../../components/icons/IconMapPin";
import { Popover } from "antd";
import { NavLink } from "react-router-dom";
import IconUtunRight from "../../components/icons/IconUtunRight";
interface PropComponent {
  className?: string;
}
const JobDetailInformationCompanyPage: React.FC<PropComponent> = ({
  className,
}) => {
  return (
    <>
      <div className={`p-5 ${className}`}>
        <div className="flex gap-4">
          <img
            src={logo}
            alt=""
            className="w-[80px] h-[80px] rounded-sm object-cover"
          />
          <div>
            <Popover
              content={
                <p className="max-w-[300px] font-medium text-center">
                  CÔNG TY TNHH CÔNG NGHỆ ALTEK
                </p>
              }
            >
              <p className="font-bold text-base line-clamp-2 cursor-pointer">
                CÔNG TY TNHH CÔNG NGHỆ ALTEK
              </p>
            </Popover>
          </div>
        </div>
        <div className="flex items-start gap-1 mt-5">
          <div className="flex w-[40%] text-gray-500 gap-2 items-center">
            <IconGroupUser classIcon="w-5 h-5" className=""></IconGroupUser>
            <span>Quy mô:</span>
          </div>
          <p className="grow">25-99 nhân viên</p>
        </div>
        <div className="flex items-start gap-1 mt-5">
          <div className="flex min-w-[40%] text-gray-500 gap-2 items-center">
            <IconMapPin classIcon="w-5 h-5" className=""></IconMapPin>
            <span>Địa điểm:</span>
          </div>
          <Popover
            content={
              <p className="max-w-[300px] font-medium text-center">
                Hà Nội, Hồ Chí Minh, Đà Nẵng, Đồng Tháp
              </p>
            }
          >
            <p className="grow line-clamp-3">
              Hà Nội, Hồ Chí Minh, Đà Nẵng, Đồng Tháp
            </p>
          </Popover>
        </div>
        <NavLink
          to="/"
          className="flex gap-2 mt-5 items-center justify-center text-primary font-medium"
        >
          <span>Xem trang công ty</span>
          <IconUtunRight></IconUtunRight>
        </NavLink>
      </div>
    </>
  );
};

export default JobDetailInformationCompanyPage;
