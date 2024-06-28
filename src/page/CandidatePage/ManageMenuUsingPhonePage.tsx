import { CameraOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Switch } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import IconText from "../../components/icons/IconText";
import IconDocumentArrowUp from "../../components/icons/IconDocumentArrowUp";
import IconHeart from "../../components/icons/IconHeart";
import IconBriefCaseOutline from "../../components/icons/IconBriefCaseOutline";
import IconWifi from "../../components/icons/IconWifi";
import IconArrowRightLeft from "../../components/icons/IconArrowRightLeft";
import IconUser from "../../components/icons/IconUser";
import { useTranslation } from "react-i18next";
const ManageMenuUsingPhonePage: React.FC = () => {
  const { user } = useSelector((state: any) => state.auth);
  const { t } = useTranslation();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="border-t-[1px] border-solid border-gray-200">
      <div className="flex flex-col w-full h-fit p-5 gap-3 bg-white rounded-lg">
        <div className="flex gap-5">
          <div
            className="relative w-[65px]"
            onClick={() => navigate("/manage/information-account")}
          >
            {user?.picture ? (
              <>
                <img
                  src={
                    user?.picture
                      ? user?.picture
                      : "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_1280.png"
                  }
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
                <div className="bg-white rounded-full">
                  <Avatar
                    className="mx-auto "
                    size={60}
                    icon={<UserOutlined />}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="grow">
            <p className="text-xs text-gray-400 ">{t("manage.welcomback")}</p>
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
          <span className="">{t("menu.allowrecruitor")}</span>
        </div>
        <NavLink
          to="/wall"
          className="flex items-center gap-3 pb-4 cursor-pointer hover:opacity-80 transition-all"
        >
          <IconUser className="text-gray-600"></IconUser>
          <p>{t("menu.personinformation")}</p>
        </NavLink>
        <NavLink
          to="/manage/information-account"
          className="flex items-center gap-3 pb-4 cursor-pointer hover:opacity-80 transition-all"
        >
          <IconText className="text-gray-600"></IconText>
          <p>{t("menu.information")}</p>
        </NavLink>
        <NavLink
          to="/list-resume"
          className="flex items-center gap-3 pb-4 cursor-pointer hover:opacity-80 transition-all"
        >
          <IconDocumentArrowUp className="text-gray-600"></IconDocumentArrowUp>
          <p>{t("menu.cv")}</p>
        </NavLink>
        <NavLink
          to="/manage/job-save"
          className="flex items-center gap-3 pb-4 cursor-pointer hover:opacity-80 transition-all"
        >
          <IconHeart
            classIcon="!w-6 !h-6"
            className="text-gray-600"
          ></IconHeart>
          <p>{t("menu.save")}</p>
        </NavLink>
        <NavLink
          to="/manage/job-apply"
          className="flex items-center gap-3 pb-4 cursor-pointer hover:opacity-80 transition-all"
        >
          <IconBriefCaseOutline className="text-gray-600"></IconBriefCaseOutline>
          <p>{t("menu.apply")}</p>
        </NavLink>
        <NavLink
          to="/manage/company-followed"
          className="flex items-center gap-3 pb-4 cursor-pointer hover:opacity-80 transition-all"
        >
          <IconWifi className="text-gray-600"></IconWifi>
          <p>{t("menu.follow")}</p>
        </NavLink>
        <NavLink
          to="/manage/change-password"
          className="flex items-center gap-3 pb-4 cursor-pointer hover:opacity-80 transition-all"
        >
          <IconArrowRightLeft className="text-gray-600"></IconArrowRightLeft>
          <p>{t("menu.changepassword")}</p>
        </NavLink>
      </div>
    </div>
  );
};

export default ManageMenuUsingPhonePage;
