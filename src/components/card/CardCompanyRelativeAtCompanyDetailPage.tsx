import { Popover } from "antd";
import React from "react";
import IconMoney from "../icons/IconMoney";
import logo from "../../assets/bg-login.jpg";
import IconTrash from "../icons/IconTrash";
import IconHeart from "../icons/IconHeart";
const CardCompanyRelativeAtCompanyDetailPage: React.FC = () => {
  return (
    <>
      <div className="relative flex gap-5 w-full items-center p-5 shadow-sm h-[150px] border border-solid border-gray-200 rounded-md">
        <div className="absolute top-2 right-2 flex items-center gap-2 font-medium text-primary px-2 py-1 rounded-sm cursor-pointer">
          <IconMoney classIcon="!w-5 !h-5"></IconMoney>
          <span className="text-sm">Thỏa thuận</span>
        </div>
        <div className="w-[20%]">
          <img src={logo} alt="" className="w-[100px] object-cover h-[100px]" />
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
              className="w-[80%] cursor-pointer text-base font-medium line-clamp-1"
              onClick={() => {
                // navigate("/jobs/1");
              }}
            >
              Font end developer for 2 years (Senior) 10 - 20tr many benifit and
              team building. Apply now that bench
            </h4>
          </Popover>

          <h5 className="text-gray-500 line-clamp-1 text-base mt-1">
            Công ty Cổ phần Solazu
          </h5>
          <p className="text-sm text-gray-500">Đã lưu: 20/04/2024 - 14:43</p>
          <div className="flex gap-3 items-center mt-3">
            <span className="p-1 text-xs bg-gray-200 rounded-sm">
              Ho Chi Minh
            </span>
            <span className="p-1 text-xs bg-gray-200 rounded-sm">
              Cập nhật 42 phút trước
            </span>
          </div>
        </div>
        <div className="absolute bottom-3 right-3 flex items-center gap-2">
          <span
            onClick={() => {
            //   navigate("/jobs/1");
            }}
            className="text-sm select-none bg-primary text-white py-1 px-2 rounded-sm cursor-pointer"
          >
            Ứng tuyển
          </span>
          <div className="flex items-center select-none gap-1 bg-slate-200 py-1 px-2 cursor-pointer">
            {true ? (
              <>
                {" "}
                <IconTrash></IconTrash>
                <span className="text-sm  rounded-sm">Bỏ lưu</span>
              </>
            ) : (
              <>
                <IconHeart></IconHeart>
                <span className="text-sm  rounded-sm">Lưu</span>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCompanyRelativeAtCompanyDetailPage;
