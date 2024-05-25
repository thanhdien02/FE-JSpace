import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { NavLink, Outlet, useNavigate } from "react-router-dom";
import LayoutHomeUserHeader from "../module/common/LayoutHomeUserHeader";
import { message, Spin, Switch, Upload, UploadProps } from "antd";
import { getToken } from "../utils/auth";
import { useDispatch } from "react-redux";
import { authFetchMe } from "../store/auth/auth-slice";
import { CameraOutlined, CommentOutlined } from "@ant-design/icons";
import IconText from "../components/icons/IconText";
import IconWifi from "../components/icons/IconWifi";
import IconBriefCaseOutline from "../components/icons/IconBriefCaseOutline";
import IconHeart from "../components/icons/IconHeart";
import IconDocumentArrowUp from "../components/icons/IconDocumentArrowUp";
import IconArrowRightLeft from "../components/icons/IconArrowRightLeft";
import IconHome from "../components/icons/IconHome";
import IconBuilding from "../components/icons/IconBuilding";
import IconUser from "../components/icons/IconUser";
import { useTranslation } from "react-i18next";

const LayoutManageCandidate: React.FC = () => {
  const { user, accessToken } = useSelector((state: any) => state.auth);
  const { t } = useTranslation();
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
          <div className="flex flex-col xl:flex-row w-full mx-auto gap-5 bg-gray-200">
            <div className="grow w-full bg-white rounded-lg h-fit">
              <Outlet></Outlet>
            </div>
            <div className="md:flex hidden flex-col min-w-[29%] h-fit p-5 gap-3 bg-white rounded-lg">
              <div className="flex gap-5 p-2">
                <Upload {...props} className="relative w-[65px]">
                  {user?.picture ? (
                    <>
                      <img
                        src={user?.picture}
                        alt=""
                        className="w-[65px] h-[65px] rounded-full cursor-pointer object-cover"
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
                  <p className="text-xs text-gray-400 ">
                    {t("manage.welcomback")}
                  </p>
                  <h3 className="line-clamp-1 font-semibold text-lg leading-5">
                    {user?.name}
                  </h3>
                  <p className="text-gray-500 break-all text-sm line-clamp-1 mt-1">
                    {user?.email}
                  </p>
                </div>
              </div>
              <span className="h-[1px] bg-gray-200 w-full"></span>

              <div className="flex items-center gap-4 pb-3 mt-2">
                <Switch></Switch>
                <span className="font-medium line-clamp-1">
                  {t("menu.allowrecruitor")}
                </span>
              </div>
              <NavLink
                to="/wall"
                className="flex items-center gap-3 pb-3 cursor-pointer hover:opacity-80 transition-all "
              >
                <IconUser classIcon="!w-5 !h-5"></IconUser>
                <p className="font-secondary">{t("menu.personinformation")}</p>
              </NavLink>
              <NavLink
                to="/manage/information-account"
                className="flex items-center gap-3 pb-3 cursor-pointer hover:opacity-80 transition-all "
              >
                <IconText classIcon="!w-5 !h-5"></IconText>
                <p className="font-secondary">{t("menu.information")}</p>
              </NavLink>
              <NavLink
                to="/list-resume"
                className="flex items-center gap-3 pb-3 cursor-pointer hover:opacity-80 transition-all"
              >
                <IconDocumentArrowUp classIcon="!w-5 !h-5"></IconDocumentArrowUp>
                <p className="font-secondary">{t("menu.jobapplication")}</p>
              </NavLink>
              <NavLink
                to="/manage/job-save"
                className="flex items-center gap-3 pb-3 cursor-pointer hover:opacity-80 transition-all"
              >
                <IconHeart classIcon="!w-5 !h-5"></IconHeart>
                <p className="font-secondary">{t("menu.save")}</p>
              </NavLink>
              <NavLink
                to="/manage/job-apply"
                className="flex items-center gap-3 pb-3 cursor-pointer hover:opacity-80 transition-all"
              >
                <IconBriefCaseOutline classIcon="!w-5 !h-5"></IconBriefCaseOutline>
                <p className="font-secondary">{t("menu.apply")}</p>
              </NavLink>
              <NavLink
                to="/manage/company-followed"
                className="flex items-center gap-3 pb-3 cursor-pointer hover:opacity-80 transition-all"
              >
                <IconWifi classIcon="!w-5 !h-5"></IconWifi>
                <p className="font-secondary">{t("menu.follow")}</p>
              </NavLink>
              <NavLink
                to="/manage/change-password"
                className="flex items-center gap-3 pb-3 cursor-pointer hover:opacity-80 transition-all"
              >
                <IconArrowRightLeft classIcon="!w-5 !h-5"></IconArrowRightLeft>
                <p className="font-secondary">{t("menu.changepassword")}</p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <a
        href="https://m.me/267479709792373"
        target="_blank"
        className="fixed z-30 flex md:right-10 right-5 md:w-16 md:h-16 w-14 h-14 md:bottom-10 bottom-20 bg-primary rounded-full"
      >
        <CommentOutlined className="m-auto text-3xl text-white" />
      </a>

      {/* phone */}
      <div className="md:hidden fixed z-20 right-0 py-1 left-0 bottom-0 bg-white flex justify-evenly h-[60px] border-t-[1px] border-solid border-gray-200">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? `text-primary flex flex-col items-center justify-center`
              : `flex flex-col items-center justify-center`
          }
        >
          <IconHome className="my-1" classIcon="!w-5 !h-5"></IconHome>
          <span className="text-xs">{t("home.name")}</span>
        </NavLink>
        <NavLink
          to="/jobs"
          className={({ isActive }) =>
            isActive
              ? `text-primary flex flex-col items-center justify-center`
              : `flex flex-col items-center justify-center`
          }
        >
          <IconBriefCaseOutline
            className="my-1"
            classIcon="!w-5 !h-5"
          ></IconBriefCaseOutline>
          <span className="text-xs">{t("findjob.name")}</span>
        </NavLink>
        <NavLink
          to="/companys"
          className={({ isActive }) =>
            isActive
              ? `text-primary flex flex-col items-center justify-center`
              : `flex flex-col items-center justify-center`
          }
        >
          <IconBuilding className="my-1" classIcon="!w-5 !h-5"></IconBuilding>
          <span className="text-xs">{t("company.name")}</span>
        </NavLink>
        <NavLink
          to="/common"
          className={({ isActive }) =>
            isActive
              ? `text-primary flex flex-col items-center justify-center`
              : `flex flex-col items-center justify-center`
          }
        >
          <IconUser className="my-1" classIcon="!w-5 !h-5"></IconUser>
          <span className="text-xs">{t("information")}</span>
        </NavLink>
      </div>
    </>
  );
};

export default LayoutManageCandidate;
