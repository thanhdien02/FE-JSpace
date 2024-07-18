import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { NavLink, Outlet, useNavigate } from "react-router-dom";
import LayoutHomeUserHeader from "../module/common/LayoutHomeUserHeader";
import { Avatar, message, Switch } from "antd";
import { getToken } from "../utils/auth";
import { useDispatch } from "react-redux";
import { authFetchMe } from "../store/auth/auth-slice";
import {
  CameraOutlined,
  CommentOutlined,
  UserOutlined,
} from "@ant-design/icons";
import IconText from "../components/icons/IconText";
import IconWifi from "../components/icons/IconWifi";
import IconBriefCaseOutline from "../components/icons/IconBriefCaseOutline";
import IconHeart from "../components/icons/IconHeart";
import IconDocumentArrowUp from "../components/icons/IconDocumentArrowUp";
import IconHome from "../components/icons/IconHome";
import IconBuilding from "../components/icons/IconBuilding";
import IconUser from "../components/icons/IconUser";
import { useTranslation } from "react-i18next";
import OverlaySearchHeader from "../components/overlay/OverlaySearchHeader";
import { candidateUpdatePublicResume } from "../store/candidate/candidate-slice";
import { CSSTransition } from "react-transition-group";
import SuggestJobThroughEmailPage from "../page/CommonPage/SuggestJobThroughEmailPage";
import {
  commonUpdateLoginRedux,
  commonUpdateSuggestJobRedux,
} from "../store/common/common-slice";

const LayoutManageCandidate: React.FC = () => {
  const { user, accessToken, publicProfile, defaultResume, surveyed } =
    useSelector((state: any) => state.auth);
  const { inputHeaderSearchCheck, suggestJobCheck } = useSelector(
    (state: any) => state.common
  );
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const date = new Date(user?.createdAt);
  // const formattedDate = date.toLocaleDateString("en-GB");

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
  const handleChangePublicResume = () => {
    if (defaultResume) {
      if (!surveyed) {
        dispatch(
          commonUpdateSuggestJobRedux({
            suggestJobCheck: true,
          })
        );
      } else {
        dispatch(
          candidateUpdatePublicResume({
            candidate_id: user?.id,
            publicProfile: !publicProfile,
          })
        );
      }
    } else {
      message.info("Bạn cần xác định CV chính trước.");
    }
  };
  return (
    <>
      <LayoutHomeUserHeader></LayoutHomeUserHeader>
      <div className="relative bg-gray-200 mt-[77px]">
        {/* search header */}
        {inputHeaderSearchCheck && <OverlaySearchHeader></OverlaySearchHeader>}
        {/*  */}
        <div className="w-[1200px] max-w-full mx-auto min-h-screen py-5">
          <div className="flex flex-col xl:flex-row w-full mx-auto gap-5 bg-gray-200 ">
            <div className=" grow w-full bg-white rounded-lg h-fit">
              <Outlet></Outlet>
            </div>
            <div className="md:flex hidden flex-col min-w-[29%] h-fit p-5 gap-3 bg-white rounded-lg">
              <div className="flex gap-5 p-2">
                <div
                  onClick={() => navigate("/manage/information-account")}
                  className="relative w-[65px]"
                >
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
                    <div className="w-[65px] h-[65px] rounded-full bg-white ">
                      <Avatar
                        className="mx-auto "
                        size={60}
                        icon={<UserOutlined />}
                      />
                      <CameraOutlined
                        className="absolute bottom-2 right-0 bg-blue-50 p-2 rounded-full cursor-pointer"
                        style={{ fontSize: "18px" }}
                      />
                    </div>
                  )}
                </div>
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
                <Switch
                  value={publicProfile}
                  onChange={handleChangePublicResume}
                ></Switch>
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
              {/* <NavLink
                to="/manage/change-password"
                className="flex items-center gap-3 pb-3 cursor-pointer hover:opacity-80 transition-all"
              >
                <IconArrowRightLeft classIcon="!w-5 !h-5"></IconArrowRightLeft>
                <p className="font-secondary">{t("menu.changepassword")}</p>
              </NavLink> */}
            </div>
          </div>
        </div>
      </div>
      {user?.id && (
        <div
          onClick={() => {
            if (!user?.id) {
              dispatch(commonUpdateLoginRedux({ loginCheck: true }));
            } else {
              dispatch(
                commonUpdateSuggestJobRedux({
                  suggestJobCheck: !suggestJobCheck,
                })
              );
            }
          }}
          className="fixed z-10 right-0 top-1/2 bg-primary py-3 px-1 text-white rounded-r-lg text-base cursor-pointer vertical-text"
        >
          {t("jobsuggestion.header")}
        </div>
      )}
      <CSSTransition
        in={suggestJobCheck}
        timeout={200}
        classNames="fade"
        unmountOnExit
      >
        <SuggestJobThroughEmailPage></SuggestJobThroughEmailPage>
      </CSSTransition>
      {/*  */}
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
