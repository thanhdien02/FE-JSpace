import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { NavLink, Outlet, useNavigate } from "react-router-dom";
import LayoutHomeUserHeader from "../module/common/LayoutHomeUserHeader";
import { message, Spin, Switch, Upload, UploadProps } from "antd";
import { getToken } from "../utils/auth";
import { useDispatch } from "react-redux";
import { authFetchMe } from "../store/auth/auth-slice";

const LayoutManageCandidate: React.FC = () => {
  const { user, accessToken } = useSelector((state: any) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const date = new Date(user?.createdAt);
  // const formattedDate = date.toLocaleDateString("en-GB");

  const props: UploadProps = {
    beforeUpload: (file) => {
      const isPNG = file.type === "image/png";
      if (!isPNG) {
        message.error(`${file.name} is not a png file`);
      }
      return isPNG || Upload.LIST_IGNORE;
    },
    onChange: (info) => {
      console.log(info.fileList);
    },
  };
  useEffect(() => {
    if (accessToken == "") {
      const token = getToken();
      if (token?.accessToken == "null") {
        navigate("/");
      } else if (accessToken == "") {
        dispatch(authFetchMe());
      }
    }
  }, [accessToken]);
  return (
    <>
      <LayoutHomeUserHeader></LayoutHomeUserHeader>
      <div className="bg-gray-200 min-h-screen py-5">
        <div className="flex flex-col lg:flex-row w-[80%] mx-auto gap-5 bg-gray-200">
          <div className="grow bg-white rounded-lg">
            <Outlet></Outlet>
          </div>
          <div className="flex flex-col min-w-[28%] h-fit p-3 gap-3 bg-white rounded-lg">
            <div className="flex gap-6 p-2">
              <Upload {...props} className="">
                {user?.picture ? (
                  <img
                    src={user?.picture}
                    alt=""
                    className="w-[65px] h-[65px] rounded-full cursor-pointer"
                  />
                ) : (
                  <div className="w-[65px] h-[65px] rounded-full flex ">
                    <Spin className="m-auto" />
                  </div>
                )}
              </Upload>
              <div>
                <p className="text-xs text-gray-400 ">Chào bạn trở lại</p>
                <h3 className="line-clamp-1 font-semibold text-lg max-w-[200px] leading-5">
                  {user?.name}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-1 mt-1">
                  {user?.email}
                </p>
                {/* <p className="text-gray-500 text-sm">{formattedDate}</p> */}
              </div>
            </div>
            <span className="h-[1px] bg-gray-200 w-full"></span>
            <div className="flex gap-5 p-1">
              <Switch></Switch>
              <span className="font-medium">Cho phép tìm việc</span>
            </div>
            <div className="flex gap-5 p-1">
              <Switch></Switch>
              <span className="font-medium">Cho phép NTD tìm CV của bạn</span>
            </div>
            <div className="px-4 py-2 font-semibold border border-solid border-gray-400 cursor-pointer hover:opacity-80 transition-all">
              <p>Ai đã xem CV của bạn</p>
            </div>
            <NavLink
              to="/wall"
              className="px-4 py-2 font-semibold border border-solid border-gray-400 cursor-pointer hover:opacity-80 transition-all"
            >
              <p>Tường của bạn</p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutManageCandidate;
