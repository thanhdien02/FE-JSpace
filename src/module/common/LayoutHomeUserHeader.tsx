import React, { useState } from "react";
import logo from "../../assets/logo3.png";
import { useSelector } from "react-redux";
import IconChervonDown from "../../components/icons/IconChervonDown";
import IconBell from "../../components/icons/IconBell";
import HeaderItem from "../../components/common/HeaderItem";
import { NavLink } from "react-router-dom";
import CandidateMenu from "../candidates/CandidateMenu";
import {
  dataCandidateMenu,
  dataCandidateMenuResponsive,
} from "../../utils/dataFetch";
import { useDispatch } from "react-redux";
import { authLogout } from "../../store/auth/auth-slice";
import { Button, Divider, Drawer, DrawerProps, Space } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import IconChervonRight from "../../components/icons/IconChervonRight";
import NotificationPage from "../../page/CommonPage/NotificationPage";
import { useTranslation } from "react-i18next";
import { commonUpdateLoginRedux } from "../../store/common/common-slice";

interface PropComponent {}
const LayoutHomeUserHeader: React.FC<PropComponent> = () => {
  const { user, accessToken } = useSelector((state: any) => state.auth);
  const [checkNotification, setCheckNotification] = useState(false);
  const [checkNotificationShort, setCheckNotificationShort] = useState(false);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [size] = useState<DrawerProps["size"]>();

  // dich
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const showDrawer = () => {
    setOpen(true);
    const elementBody = document.body;
    elementBody.style.overflow = "hidden";
  };

  const onClose = () => {
    const elementBody = document.body;
    elementBody.style.overflow = "visible";
    setOpen(false);
  };
  const handleMouseOverCandidateMenu = () => {
    const elementMouseOver: any = document.querySelector(
      ".candidate-menu-manage"
    );
    if (elementMouseOver) {
      elementMouseOver.style.display = "block";
    }
  };
  const handleMouseLeaveCandidateMenu = () => {
    const elementMouseOver: any = document.querySelector(
      ".candidate-menu-manage"
    );
    if (elementMouseOver) {
      elementMouseOver.style.display = "none";
    }
  };
  const handleCandidateMenu: any = (e: any) => {
    console.log("🚀 ~ e:", e);
    console.log("object");
    if (e.title === "logout") {
      dispatch(authLogout());
    }
  };

  return (
    <>
      <header className="flex lg:px-10 px-5 pb-3 pt-4 justify-between items-center">
        <div className="flex items-center gap-5">
          <NavLink to="/">
            <img src={logo} alt="" className="w-[45px] object-cover" />
          </NavLink>
          <ul className="lg:flex hidden gap-2">
            <HeaderItem title={t("home.name")} path="/"></HeaderItem>
            <HeaderItem title={t("findjob.name")} path="/jobs"></HeaderItem>
            <HeaderItem title={t("company.name")} path="/companys"></HeaderItem>
            <HeaderItem title={t("blog.name")} path="/blogs"></HeaderItem>
          </ul>
        </div>
        <div className="lg:block hidden">
          {accessToken === "" ? (
            <div className="lg:flex hidden justify-center items-center gap-1 ">
              <button
                className="p-2 hover:text-primary"
                onClick={() =>
                  dispatch(commonUpdateLoginRedux({ loginCheck: true }))
                }
              >
                {t("login")}
              </button>
              <span className="w-[2px] h-[25px] bg-slate-700/30"></span>
              <a
                className="p-2 hover:text-primary"
                href="https://jspace-employer.vercel.app/"
                target="_blank"
              >
                {t("postjob")}
              </a>
              <div className="flex gap-1 items-center">
                <img
                  src="https://static.topcv.vn/srp/website/images/flags/vietnam.png"
                  alt=""
                  onClick={() => changeLanguage("vi")}
                  className="w-6 h-6 cursor-pointer object-contain"
                />
                <img
                  src="https://static.topcv.vn/srp/website/images/flags/uk.jpeg"
                  alt=""
                  onClick={() => changeLanguage("en")}
                  className="w-6 h-6 cursor-pointer object-contain"
                />
              </div>
            </div>
          ) : (
            <div className="flex gap-5 justify-between items-center">
              <span className="relative p-2 bg-blue-200 rounded-full ">
                <IconBell
                  onClick={setCheckNotificationShort}
                  checkNotification={checkNotificationShort}
                  className="text-primary cursor-pointer hover:opacity-80 transition-all"
                ></IconBell>
                {!true ? (
                  <span className="absolute -top-2 -right-2 flex ">
                    <span className="m-auto w-6 h-6 text-center rounded-full bg-red-500 text-white  font-medium">
                      2
                    </span>{" "}
                  </span>
                ) : (
                  <></>
                )}
                {checkNotificationShort ? (
                  <>
                    <div
                      className="fixed inset-0 bg-transparent z-10 cursor-pointer"
                      onClick={() =>
                        setCheckNotificationShort(!checkNotificationShort)
                      }
                    ></div>
                    <div className="absolute top-[155%] bg-white shadow-md min-w-[300px] min-h-[200px] z-20 right-0">
                      <div className="p-4">
                        <h3>{t("notification")}</h3>
                      </div>
                      <Divider className="mt-0"></Divider>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </span>

              <div
                onMouseOver={handleMouseOverCandidateMenu}
                onMouseLeave={handleMouseLeaveCandidateMenu}
                className="relative flex justify-center items-center gap-3 border border-solid rounded-lg py-2 px-2 border-gary-200  hover:bg-blue-100 hover:text-primary cursor-pointer transition-all"
              >
                <img
                  src={user?.picture}
                  alt=""
                  className="w-[30px] h-[30px] rounded-full"
                />
                <h3 className="text-line-clamp text-sm font-semibold max-w-[150px]">
                  {user?.name}
                </h3>
                <IconChervonDown></IconChervonDown>
                {/*  */}
                <section className="candidate-menu-manage hidden z-20 absolute w-[380px] min-h-[300px] top-10 right-0 text-black cursor-default">
                  <div className="flex flex-col bg-white gap-3 w-full h-full mt-[14px] p-5 shadow-md rounded-lg">
                    <div className="flex gap-8">
                      <img
                        src={user?.picture}
                        alt=""
                        className="w-[40px] h-[40px] rounded-lg object-cover"
                      />
                      <div className="text-sm">
                        <h3 className="font-semibold text-line-clamp max-w-[250px]">
                          {user?.name}
                        </h3>
                        <p className="font-semibold text-gray-400">
                          {t("menu.candidatecode")}: #{user?.id}
                        </p>
                        <p className="font-semibold text-gray-400">
                          {" "}
                          {user?.email}
                        </p>
                      </div>
                    </div>
                    <span className="w-full h-[1px] bg-slate-300"></span>
                    <CandidateMenu
                      data={dataCandidateMenu}
                      onClick={handleCandidateMenu}
                    ></CandidateMenu>
                  </div>
                </section>
              </div>
              <div className="flex gap-1 items-center">
                <img
                  src="https://static.topcv.vn/srp/website/images/flags/vietnam.png"
                  alt=""
                  onClick={() => changeLanguage("vi")}
                  className="w-6 h-4 cursor-pointer object-cover"
                />
                <img
                  src="https://static.topcv.vn/srp/website/images/flags/uk.jpeg"
                  alt=""
                  onClick={() => changeLanguage("en")}
                  className="w-6 h-4 cursor-pointer object-cover"
                />
              </div>
            </div>
          )}
        </div>

        <div className="lg:hidden">
          <MenuOutlined
            className=" !font-semibold text-2xl p-2 bg-blue-100 rounded-full text-primary"
            onClick={showDrawer}
          />
        </div>
        <Drawer
          title={<h1 className="text-primary text-xl font-bold">JSPACE</h1>}
          placement="right"
          size={size}
          // closable={false}
          onClose={onClose}
          className="ease-linear duration-500"
          open={open}
          extra={
            <Space>
              {user?.id ? (
                <>
                  <Button
                    type="primary"
                    onClick={() => {
                      // dispatch(authLogout());
                      setOpen(false);
                      setCheckNotification(true);
                    }}
                  >
                    {t("notification")}
                  </Button>
                  <Button
                    type="primary"
                    onClick={() => {
                      dispatch(authLogout());
                      setOpen(false);
                    }}
                  >
                    {t("logout")}
                  </Button>
                </>
              ) : (
                <Button
                  type="primary"
                  onClick={() => {
                    dispatch(commonUpdateLoginRedux({ loginCheck: true }));
                    setOpen(false);
                  }}
                >
                  {t("login")}
                </Button>
              )}
            </Space>
          }
        >
          {user?.id && (
            <div className="flex gap-3">
              <img
                src={user?.picture}
                className="w-[50px] h-[50px] rounded-full"
                alt=""
              />
              <div className="">
                <h3 className="font-medium line-clamp-1">{user?.name}</h3>
                <h4 className="line-clamp-1 text-gray-500 break-all">
                  {user?.email}
                </h4>
              </div>
            </div>
          )}
          <ul className={`flex flex-col gap-5 ${user?.id ? "mt-5" : ""}`}>
            <div onClick={onClose}>
              {" "}
              <HeaderItem
                className="text-[14px] "
                classLink="!pl-0"
                title={t("home.name")}
                path="/"
              >
                <IconChervonRight
                  classIcon="!w-[18px] !h-[18px]"
                  className="ml-auto"
                ></IconChervonRight>
              </HeaderItem>
            </div>{" "}
            <div onClick={onClose}>
              <HeaderItem
                className="text-[14px] "
                classLink="!pl-0"
                title={t("findjob.name")}
                path="/jobs"
              >
                <IconChervonRight
                  classIcon="!w-[18px] !h-[18px]"
                  className="ml-auto"
                ></IconChervonRight>
              </HeaderItem>{" "}
            </div>
            <div onClick={onClose}>
              <HeaderItem
                className="text-[14px] "
                classLink="!pl-0"
                title={t("company.name")}
                path="/companys"
              >
                <IconChervonRight
                  classIcon="!w-[18px] !h-[18px]"
                  className="ml-auto"
                ></IconChervonRight>
              </HeaderItem>{" "}
            </div>
            <div onClick={onClose}>
              <HeaderItem
                className="text-[14px] "
                classLink="!pl-0"
                title={t("blog.name")}
                path="/blogs"
              >
                <IconChervonRight
                  classIcon="!w-[18px] !h-[18px]"
                  className="ml-auto"
                ></IconChervonRight>
              </HeaderItem>{" "}
            </div>
          </ul>
          <div className="w-full h-[1px] bg-gray-200 my-3"></div>
          {user?.id && (
            <div className="">
              <ul className="flex flex-col gap-5">
                {user?.id &&
                  dataCandidateMenuResponsive.length > 0 &&
                  dataCandidateMenuResponsive?.map((item: any) => (
                    <div onClick={onClose} key={item?.key}>
                      {" "}
                      <HeaderItem
                        className="text-[14px] "
                        classLink="!pl-0"
                        title={item?.title}
                        path={item?.path}
                      >
                        <IconChervonRight
                          classIcon="!w-[18px] !h-[18px]"
                          className="ml-auto"
                        ></IconChervonRight>
                      </HeaderItem>
                    </div>
                  ))}
              </ul>
            </div>
          )}
          <div className="flex gap-1 items-center mt-5">
            <img
              src="https://static.topcv.vn/srp/website/images/flags/vietnam.png"
              alt=""
              onClick={() => changeLanguage("vi")}
              className="w-11 h-7 cursor-pointer object-cover"
            />
            <img
              src="https://static.topcv.vn/srp/website/images/flags/uk.jpeg"
              alt=""
              onClick={() => changeLanguage("en")}
              className="w-11 h-7 cursor-pointer object-cover"
            />
          </div>
        </Drawer>

        {checkNotification && (
          <NotificationPage onClick={setCheckNotification}></NotificationPage>
        )}
      </header>
    </>
  );
};

export default LayoutHomeUserHeader;
