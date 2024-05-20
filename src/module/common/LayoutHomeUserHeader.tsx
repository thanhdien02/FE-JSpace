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

interface PropComponent {
  actionLogin?: any;
}
const LayoutHomeUserHeader: React.FC<PropComponent> = ({ actionLogin }) => {
  const { user, accessToken } = useSelector((state: any) => state.auth);
  const [checkNotification, setCheckNotification] = useState(false);
  const [checkNotificationShort, setCheckNotificationShort] = useState(false);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [size] = useState<DrawerProps["size"]>();
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
    if (e.title === "Đăng xuất") {
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
            <HeaderItem title="Trang chủ" path="/"></HeaderItem>
            <HeaderItem title="Tìm việc" path="/jobs"></HeaderItem>
            <HeaderItem title="Công ty" path="/companys"></HeaderItem>
            <HeaderItem title="Bài biết" path="/blogs"></HeaderItem>
          </ul>
        </div>
        <div className="lg:block hidden">
          {accessToken === "" ? (
            <div className="xl:flex hidden justify-center items-center gap-1 ">
              <button
                className="p-2 hover:text-primary"
                onClick={() => actionLogin(true)}
              >
                Đăng nhập
              </button>
              <span className="w-[2px] h-[25px] bg-slate-700/30"></span>
              <a
                className="p-2 hover:text-primary"
                href="https://jspace-employer.vercel.app/"
                target="_blank"
              >
                Đăng bài tuyển dụng
              </a>
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
                        <h3>Thông báo</h3>
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
                        className="w-[40px] h-[40px] rounded-lg"
                      />
                      <div className="text-sm">
                        <h3 className="font-semibold text-line-clamp max-w-[250px]">
                          {user?.name}
                        </h3>
                        <p className="font-semibold text-gray-400">
                          Mã ứng viên: #{user?.id}
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
                    Thông báo
                  </Button>
                  <Button
                    type="primary"
                    onClick={() => {
                      dispatch(authLogout());
                      setOpen(false);
                    }}
                  >
                    Đăng xuất
                  </Button>
                </>
              ) : (
                <Button
                  type="primary"
                  onClick={() => {
                    actionLogin(true);
                    setOpen(false);
                  }}
                >
                  Đăng nhập
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
                title="Trang chủ"
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
                title="Tìm việc"
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
                title="Công ty"
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
                title="Bài biết"
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
        </Drawer>

        {checkNotification && (
          <NotificationPage onClick={setCheckNotification}></NotificationPage>
        )}
      </header>
    </>
  );
};

export default LayoutHomeUserHeader;
