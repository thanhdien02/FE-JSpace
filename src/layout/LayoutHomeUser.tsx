import React, { useEffect, useState } from "react";
import LayoutHomeUserHeader from "../module/common/LayoutHomeUserHeader";
import { NavLink, Outlet } from "react-router-dom";
import LoginPage from "../page/CommonPage/LoginPage";
import { useSelector } from "react-redux";
import LayoutHomeUserFooter from "../module/common/LayoutHomeUserFooter";
import { CSSTransition } from "react-transition-group";
import IconChervonUp from "../components/icons/IconChervonUp";
import { CommentOutlined } from "@ant-design/icons";
import IconBriefCaseOutline from "../components/icons/IconBriefCaseOutline";
import IconHome from "../components/icons/IconHome";
import IconBuilding from "../components/icons/IconBuilding";
import IconUser from "../components/icons/IconUser";
import { useDispatch } from "react-redux";
import {
  commonUpdateLoginRedux,
  commonUpdateSuggestJobRedux,
} from "../store/common/common-slice";
import { useTranslation } from "react-i18next";
import SuggestJobThroughEmailPage from "../page/CommonPage/SuggestJobThroughEmailPage";

const LayoutHomeUser: React.FC = () => {
  const { t } = useTranslation();
  const { user, accessToken } = useSelector((state: any) => state.auth);
  const { loginCheck, suggestJobCheck } = useSelector(
    (state: any) => state.common
  );
  const dispatch = useDispatch();
  const [checkScrolltoTop, setCheckScrolltoTop] = useState(false);
  useEffect(() => {
    if (accessToken !== "") {
      dispatch(commonUpdateLoginRedux({ loginCheck: false }));
    }
  }, [accessToken]);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      if (position > 400) {
        setCheckScrolltoTop(true);
      } else {
        setCheckScrolltoTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="">
      <CSSTransition
        in={loginCheck}
        timeout={200}
        classNames="fade"
        unmountOnExit
      >
        <LoginPage claseNameOverlay="opacity-40"></LoginPage>
      </CSSTransition>

      <LayoutHomeUserHeader></LayoutHomeUserHeader>
      <div className="bg-white mt-[73px]">
        <Outlet></Outlet>
      </div>
      <CSSTransition
        in={checkScrolltoTop}
        timeout={200}
        classNames="fade"
        unmountOnExit
      >
        <div
          className="fixed md:bottom-12 bottom-20 z-10 md:left-10 left-5 cursor-pointer bg-primary text-white rounded-full p-[6px]"
          onClick={scrollToTop}
        >
          <IconChervonUp classIcon="!w-6 !h-6"></IconChervonUp>
        </div>
      </CSSTransition>
      {/* khảo sát gợi ý việc làm */}

      <div
        onClick={() => {
          dispatch(
            commonUpdateSuggestJobRedux({ suggestJobCheck: !suggestJobCheck })
          );
        }}
        className="fixed right-0 top-1/2 bg-primary py-3 px-1 text-white rounded-r-lg text-base cursor-pointer vertical-text"
      >
        Gợi ý việc làm
      </div>
      {suggestJobCheck && (
        <SuggestJobThroughEmailPage></SuggestJobThroughEmailPage>
      )}

      {/* hỗ trợ qua messenger */}
      <a
        href="https://m.me/267479709792373"
        target="_blank"
        className="fixed z-30 flex md:right-10 right-5 md:w-16 md:h-16 w-14 h-14 md:bottom-10 bottom-20 bg-primary rounded-full"
      >
        <CommentOutlined className="m-auto text-3xl text-white" />
      </a>
      <LayoutHomeUserFooter></LayoutHomeUserFooter>

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
        {!user?.id ? (
          <div
            className="flex flex-col items-center justify-center"
            onClick={() =>
              dispatch(commonUpdateLoginRedux({ loginCheck: true }))
            }
          >
            {" "}
            <IconUser className="my-1" classIcon="!w-5 !h-5"></IconUser>
            <span className="text-xs">{t("login")}</span>
          </div>
        ) : (
          <>
            {" "}
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
          </>
        )}
      </div>
    </div>
  );
};

export default LayoutHomeUser;
