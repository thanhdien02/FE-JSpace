import { CameraOutlined } from "@ant-design/icons";
import { message, Spin, Switch, Upload, UploadProps } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import IconText from "../../components/icons/IconText";
import IconDocumentArrowUp from "../../components/icons/IconDocumentArrowUp";
import IconHeart from "../../components/icons/IconHeart";
import IconBriefCaseOutline from "../../components/icons/IconBriefCaseOutline";
import IconWifi from "../../components/icons/IconWifi";
import IconArrowRightLeft from "../../components/icons/IconArrowRightLeft";

const ManageMenuUsingPhonePage: React.FC = () => {
  const { user } = useSelector((state: any) => state.auth);
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
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="border-t-[1px] border-solid border-gray-200">
      <div className="flex flex-col w-full h-fit p-5 gap-3 bg-white rounded-lg">
        <div className="flex gap-5">
          <Upload {...props} className="relative w-[65px]">
            {user?.picture ? (
              <>
                <img
                  src={user?.picture}
                  alt=""
                  className="w-[55px] h-[55px] rounded-full cursor-pointer"
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
            <h3 className="line-clamp-1 font-semibold leading-5">
              {user?.name}
            </h3>
            <p className="text-gray-500 break-all text-sm line-clamp-1">
              {user?.email}
            </p>
          </div>
        </div>
        <span className="h-[1px] bg-gray-200 w-full"></span>

        <div className="flex gap-5 p-1  pb-4">
          <Switch></Switch>
          <span className="">Cho phép NTD tìm CV của bạn</span>
        </div>
        <NavLink
          to="/wall"
          className="flex items-center gap-3 pb-4 cursor-pointer hover:opacity-80 transition-all"
        >
          <IconText className="text-gray-600"></IconText>
          <p>Trang cá nhân của bạn</p>
        </NavLink>
        <NavLink
          to="/list-resume"
          className="flex items-center gap-3 pb-4 cursor-pointer hover:opacity-80 transition-all"
        >
          <IconDocumentArrowUp className="text-gray-600"></IconDocumentArrowUp>
          <p>Hồ sơ xin việc</p>
        </NavLink>
        <NavLink
          to="/manage/job-save"
          className="flex items-center gap-3 pb-4 cursor-pointer hover:opacity-80 transition-all"
        >
          <IconHeart
            classIcon="!w-6 !h-6"
            className="text-gray-600"
          ></IconHeart>
          <p>Công việc đã lưu</p>
        </NavLink>
        <NavLink
          to="/manage/job-apply"
          className="flex items-center gap-3 pb-4 cursor-pointer hover:opacity-80 transition-all"
        >
          <IconBriefCaseOutline className="text-gray-600"></IconBriefCaseOutline>
          <p>Công việc đã ứng tuyển</p>
        </NavLink>
        <NavLink
          to="/manage/company-followed"
          className="flex items-center gap-3 pb-4 cursor-pointer hover:opacity-80 transition-all"
        >
          <IconWifi className="text-gray-600"></IconWifi>
          <p>Công ty đang theo dõi</p>
        </NavLink>
        <NavLink
          to="/manage/change-password"
          className="flex items-center gap-3 pb-4 cursor-pointer hover:opacity-80 transition-all"
        >
          <IconArrowRightLeft className="text-gray-600"></IconArrowRightLeft>
          <p>Đổi mật khẩu</p>
        </NavLink>
      </div>
    </div>
  );
};

export default ManageMenuUsingPhonePage;
