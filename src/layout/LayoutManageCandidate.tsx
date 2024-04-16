import React from "react";
import { useSelector } from "react-redux";

import { Outlet } from "react-router-dom";
import LayoutHomeUserHeader from "../module/common/LayoutHomeUserHeader";

const LayoutManageCandidate: React.FC = () => {
  const { user } = useSelector((state: any) => state.auth);
  return (
    <>
      <LayoutHomeUserHeader></LayoutHomeUserHeader>
      <div className="bg-gray-200 h-dvh pt-5">
        <div className="flex w-[80%] mx-auto gap-5 bg-gray-200">
          <div className="grow bg-white rounded-lg">
            <Outlet></Outlet>
          </div>
          <div className="flex flex-col w-[28%] p-3 gap-3 bg-white rounded-lg">
            <div className="flex gap-8">
              <img
                src={user?.picture}
                alt=""
                className="w-[65px] h-[65px] rounded-full"
              />
              <div>
                <p className="text-sm text-gray-400">Chào bạn trở lại</p>
                <h3 className="text-line-clamp font-semibold text-lg">
                  {user?.name}
                </h3>
              </div>
            </div>
            <span className="h-[1px] bg-gray-200 w-full"></span>
            <div>Thong tin them</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutManageCandidate;
