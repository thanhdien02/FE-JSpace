import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { NavLink, Outlet, useNavigate } from "react-router-dom";
import LayoutHomeUserHeader from "../module/common/LayoutHomeUserHeader";
import { message, Spin, Switch, Upload, UploadProps } from "antd";
import { getToken } from "../utils/auth";
import { useDispatch } from "react-redux";
import { authFetchMe } from "../store/auth/auth-slice";
import { CameraOutlined } from "@ant-design/icons";
import IconText from "../components/icons/IconText";
import IconWifi from "../components/icons/IconWifi";
import IconBriefCaseOutline from "../components/icons/IconBriefCaseOutline";
import IconHeart from "../components/icons/IconHeart";
import IconDocumentArrowUp from "../components/icons/IconDocumentArrowUp";
import IconArrowRightLeft from "../components/icons/IconArrowRightLeft";

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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <LayoutHomeUserHeader></LayoutHomeUserHeader>
      <div className="bg-gray-200 ">
        <div className="w-[1200px] max-w-full mx-auto min-h-screen py-5">
          <div className="flex flex-col lg:flex-row w-full mx-auto gap-5 bg-gray-200">
            <div className="grow w-full bg-white rounded-lg h-fit">
              <Outlet></Outlet>
            </div>
            <div className="flex flex-col min-w-[29%] h-fit p-5 gap-3 bg-white rounded-lg">
              <div className="flex gap-5 p-2">
                <Upload {...props} className="relative w-[65px]">
                  {user?.picture ? (
                    <>
                      <img
                        src={user?.picture}
                        alt=""
                        className="w-[65px] h-[65px] rounded-full cursor-pointer"
                      />
                      <CameraOutlined
                        className="absolute bottom-2 -right-1 bg-blue-50 p-2 rounded-full cursor-pointer"
                        style={{ fontSize: "18px" }}
                      />
                    </>
                  ) : (
                    <div className="w-[65px] h-[65px] rounded-full flex ">
                      <Spin className="m-auto" />
                    </div>
                  )}
                </Upload>
                <div className="grow">
                  <p className="text-xs text-gray-400 ">Chào bạn trở lại</p>
                  <h3 className="line-clamp-1 font-semibold text-lg leading-5">
                    {user?.name}
                  </h3>
                  <p className="text-gray-500 break-all text-sm line-clamp-1 mt-1">
                    {user?.email}
                  </p>
                </div>
              </div>
              <span className="h-[1px] bg-gray-200 w-full"></span>

              <div className="flex gap-5 p-1">
                <Switch></Switch>
                <span className="font-medium">Cho phép NTD tìm CV của bạn</span>
              </div>
              <span className="w-full bg-gray-200 h-[1px]"></span>
              <NavLink
                to="/wall"
                className="flex items-center gap-3 pb-4 border-b-[1px] border-solid border-gray-200 cursor-pointer hover:opacity-80 transition-all"
              >
                <IconText className="text-gray-600"></IconText>
                <p>Trang cá nhân của bạn</p>
              </NavLink>
              <NavLink
                to="/list-resume"
                className="flex items-center gap-3 pb-4 border-b-[1px] border-solid border-gray-200 cursor-pointer hover:opacity-80 transition-all"
              >
                <IconDocumentArrowUp className="text-gray-600"></IconDocumentArrowUp>
                <p>Hồ sơ xin việc</p>
              </NavLink>
              <NavLink
                to="/manage/job-save"
                className="flex items-center gap-3 pb-4 border-b-[1px] border-solid border-gray-200 cursor-pointer hover:opacity-80 transition-all"
              >
                <IconHeart
                  classIcon="!w-6 !h-6"
                  className="text-gray-600"
                ></IconHeart>
                <p>Công việc đã lưu</p>
              </NavLink>
              <NavLink
                to="/manage/job-apply"
                className="flex items-center gap-3 pb-4 border-b-[1px] border-solid border-gray-200 cursor-pointer hover:opacity-80 transition-all"
              >
                <IconBriefCaseOutline className="text-gray-600"></IconBriefCaseOutline>
                <p>Công việc đã ứng tuyển</p>
              </NavLink>
              <NavLink
                to="/manage/company-followed"
                className="flex items-center gap-3 pb-4 border-b-[1px] border-solid border-gray-200 cursor-pointer hover:opacity-80 transition-all"
              >
                <IconWifi className="text-gray-600"></IconWifi>
                <p>Công ty đang theo dõi</p>
              </NavLink>
              <NavLink
                to="/manage/change-password"
                className="flex items-center gap-3 pb-4 border-b-[1px] border-solid border-gray-200 cursor-pointer hover:opacity-80 transition-all"
              >
                <IconArrowRightLeft className="text-gray-600"></IconArrowRightLeft>
                <p>Đổi mật khẩu</p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutManageCandidate;
