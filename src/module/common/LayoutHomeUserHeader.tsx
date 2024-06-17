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
import { Avatar, Button, Divider, Drawer, DrawerProps, Space } from "antd";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import IconChervonRight from "../../components/icons/IconChervonRight";
import NotificationPage from "../../page/CommonPage/NotificationPage";
import { useTranslation } from "react-i18next";
import { commonUpdateLoginRedux } from "../../store/common/common-slice";
import IconSearch from "../../components/icons/IconSearch";
import InputSearchResult from "../../components/input/InputSearchResult";

interface PropComponent {}
const LayoutHomeUserHeader: React.FC<PropComponent> = () => {
  const { loadingInputSearchJob } = useSelector((state: any) => state.job);
  const { user, accessToken } = useSelector((state: any) => state.auth);
  const [title, setTitle] = useState("");
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
    if (e.title === "logout") {
      dispatch(authLogout());
    }
  };
  const handleChangeJobTitle = (e: any) => {
    setTitle(e.target.value);
  };
  return (
    <>
      <header className="flex fixed left-0 top-0 right-0 shadow-md lg:px-10 px-5 pb-3 pt-4 justify-between items-center bg-white z-40 ">
        <div className="flex items-center gap-5">
          <NavLink to="/">
            <img src={logo} alt="" className="w-[45px] object-cover" />
          </NavLink>
          <ul className="lg:flex hidden gap-2 items-center">
            <HeaderItem title={t("home.name")} path="/"></HeaderItem>
            <HeaderItem title={t("findjob.name")} path="/jobs"></HeaderItem>
            <HeaderItem title={t("company.name")} path="/companys"></HeaderItem>
            <div className="ml-5 relative  w-[400px] rounded-lg ">
              <input
                placeholder={t("home.placeholdernamejob")}
                value={title}
                type="text"
                className="w-full h-full pl-14 pr-4 py-[10px] outline-none text-base rounded-lg bg-slate-100 placeholder:text-sm border border-solid border-gray-200 placeholder:text-gray-500 focus:bg-white focus:border-gray-300"
                onChange={handleChangeJobTitle}
              />
              <div className="absolute h-full left-3 top-1/2 -translate-y-1/2 flex gap-3 items-center text-gray-500">
                <IconSearch classIcon="!w-5 !h-5"></IconSearch>
                <span className="h-[55%] w-[.9px] bg-gray-500"></span>
              </div>

              {title && (
                <InputSearchResult
                  loading={loadingInputSearchJob ? true : false}
                  title={title}
                  setTitle={setTitle}
                  className="absolute top-[120%] border border-solid border-gray-200 bg-white shadow-xl rounded-lg w-[120%] min-h-[80px] p-1 pr-0 pb-[30px]"
                ></InputSearchResult>
              )}
              {/* <span className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1 rounded-md bg-primary text-white text-sm">Tìm kiếm</span> */}
            </div>
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
              <div>
                <p className="text-xs text-gray-400">Bạn là nhà tuyển dụng ?</p>
                <a
                  href="https://jspace-employer.vercel.app/"
                  target="_blank"
                  className="flex items-center cursor-pointer hover:text-primary transition-all font-semibold"
                >
                  <span>Đăng nhập ngay</span>
                  <IconChervonRight></IconChervonRight>
                </a>
              </div>
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
                {checkNotificationShort && (
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
                )}
              </span>

              <div
                onMouseOver={handleMouseOverCandidateMenu}
                onMouseLeave={handleMouseLeaveCandidateMenu}
                className="relative flex justify-center items-center gap-3 border border-solid rounded-lg py-2 px-2 border-gary-200  hover:bg-blue-100 hover:text-primary cursor-pointer transition-all"
              >
                {user?.picture ? (
                  <img
                    src={user?.picture}
                    alt=""
                    className="w-[30px] h-[30px] rounded-full"
                  />
                ) : (
                  <div className="rounded-full bg-white ">
                    <Avatar
                      className="mx-auto "
                      size={30}
                      icon={<UserOutlined />}
                    />
                  </div>
                )}

                <h3 className="text-line-clamp text-sm font-semibold max-w-[150px]">
                  {user?.name}
                </h3>
                <IconChervonDown></IconChervonDown>
                {/*  */}
                <section className="candidate-menu-manage hidden z-20 absolute w-[380px] min-h-[300px] top-10 right-0 text-black cursor-default">
                  <div className="flex flex-col bg-white gap-3 w-full h-full mt-[14px] p-5 shadow-md rounded-lg">
                    <div className="flex gap-8">
                      {user?.picture ? (
                        <img
                          src={user?.picture}
                          alt=""
                          className="w-[40px] h-[40px] rounded-lg object-cover self-center"
                        />
                      ) : (
                        <div className="rounded-full bg-white ">
                          <Avatar
                            className="mx-auto "
                            size={50}
                            icon={<UserOutlined />}
                          />
                        </div>
                      )}

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
          <div className="flex gap-1 items-center mt-3">
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
        </Drawer>

        {checkNotification && (
          <NotificationPage onClick={setCheckNotification}></NotificationPage>
        )}
      </header>
    </>
  );
};

export default LayoutHomeUserHeader;
