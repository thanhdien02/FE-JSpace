import React from "react";

import logo from "../../assets/bg-login.jpg";
import IconTrash from "../icons/IconTrash";
import IconMoney from "../icons/IconMoney";
import { Popover } from "antd";
import { useNavigate } from "react-router-dom";
const CardManageJobSavePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative flex md:gap-5 gap-3 w-full items-center md:p-3 p-2 shadow-sm lg:h-[150px] border border-solid border-gray-200 rounded-md">
        <div className="absolute top-2 right-2 hidden lg:flex items-center gap-2 font-medium text-primary px-2 py-1 rounded-sm cursor-pointer">
          <IconMoney classIcon="!w-5 !h-5"></IconMoney>
          <span className="text-sm">Thỏa thuận</span>
        </div>
        <div className="lg:w-[20%] md:w-[20%] w-[30%] self-start mt-2">
          <img
            src={logo}
            alt=""
            className="w-full max-w-full object-cover md:h-[110px] h-[70px]"
          />
        </div>
        <div className="flex flex-col w-full self-start">
          <Popover
            content={
              <p className="w-[300px]">
                Font end developer for 2 years (Senior) 10 - 20tr many benifit
                and team building. Apply now that bench
              </p>
            }
          >
            <h4
              className="lg:w-[80%] cursor-pointer text-base font-medium line-clamp-1"
              onClick={() => {
                navigate("/jobs/1");
              }}
            >
              Font end developer for 2 years (Senior) 10 - 20tr many benifit and
              team building. Apply now that bench
            </h4>
          </Popover>

          <h5 className="text-gray-500 line-clamp-1 lg:text-base md:text-sm text-xs mt-1">
            Công ty Cổ phần Solazu
          </h5>
          <p className="md:text-sm text-xs text-gray-500">
            Đã lưu: 20/04/2024 - 14:43
          </p>
          <div className="flex gap-3 items-center md:mt-3 mt-2">
            <span className="p-1 text-xs bg-gray-200 rounded-sm">
              Ho Chi Minh
            </span>
          </div>
        </div>
        <div className="absolute lg:bottom-3 bottom-2 lg:right-3 right-2 flex items-center gap-2">
          <span
            onClick={() => {
              navigate("/jobs/1");
            }}
            className="md:text-sm text-xs select-none bg-primary text-white py-1 px-2 rounded-sm cursor-pointer"
          >
            Ứng tuyển
          </span>
          <div className="flex items-center select-none gap-1 bg-slate-200 py-1 px-2 cursor-pointer">
            <IconTrash></IconTrash>
            <span className="md:text-sm text-xs rounded-sm">Bỏ lưu</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardManageJobSavePage;
