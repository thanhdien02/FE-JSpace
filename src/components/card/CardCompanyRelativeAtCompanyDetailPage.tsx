import { Popover } from "antd";
import React from "react";
import logo from "../../assets/banner3.jpg";
import IconTrash from "../icons/IconTrash";
import IconPlus from "../icons/IconPlus";
import { useNavigate } from "react-router-dom";
const CardCompanyRelativeAtCompanyDetailPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative flex gap-5 w-full items-center p-5 shadow-sm h-[150px] border border-solid border-gray-200 rounded-md">
        <div className="w-[20%]">
          <img src={logo} alt="" className="w-[100px] object-cover h-[100px]" />
        </div>
        <div className="flex flex-col w-full self-start">
          <Popover content={<p className="w-[300px]">Công ty TNHH FPT</p>}>
            <h4
              className="w-[80%] cursor-pointer text-base font-medium line-clamp-1"
              onClick={() => {
                navigate("/companys/1");
              }}
            >
              Công ty TNHH FPT
            </h4>
          </Popover>

          <h5 className="text-gray-500 line-clamp-1 text-base mt-1">
            Quy mô: 500 nhân viên
          </h5>
          <p className="text-sm text-gray-500">Có 300 người theo dõi</p>
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
          <div className="flex items-center select-none gap-2 bg-primary text-white py-1 px-2 cursor-pointer">
            {!true ? (
              <>
                <IconTrash></IconTrash>
                <span className="text-sm  rounded-sm">Bỏ theo dõi</span>
              </>
            ) : (
              <>
                <IconPlus classIcon="!w-5 !h-5"></IconPlus>
                <span className="text-sm  rounded-sm">Theo dõi</span>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCompanyRelativeAtCompanyDetailPage;
