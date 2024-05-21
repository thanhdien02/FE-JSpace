import React, { useEffect, useState } from "react";
import LayoutHomeUserHeader from "../module/common/LayoutHomeUserHeader";
import { Outlet } from "react-router-dom";
import LoginPage from "../page/CommonPage/LoginPage";
import { useSelector } from "react-redux";
import LayoutHomeUserFooter from "../module/common/LayoutHomeUserFooter";
import { CSSTransition } from "react-transition-group";
import IconChervonUp from "../components/icons/IconChervonUp";
import { CommentOutlined } from "@ant-design/icons";

const LayoutHomeUser: React.FC = () => {
  const { accessToken } = useSelector((state: any) => state.auth);
  const [checkLogin, setCheckLogin] = useState(false);
  const [checkScrolltoTop, setCheckScrolltoTop] = useState(false);
  useEffect(() => {
    if (accessToken !== "") {
      setCheckLogin(false);
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
        in={checkLogin}
        timeout={200}
        classNames="fade"
        unmountOnExit
      >
        <LoginPage
          actionLogin={setCheckLogin}
          claseNameOverlay="opacity-40"
        ></LoginPage>
      </CSSTransition>

      <LayoutHomeUserHeader actionLogin={setCheckLogin}></LayoutHomeUserHeader>
      <div className="bg-white">
        <Outlet></Outlet>
      </div>
      <CSSTransition
        in={checkScrolltoTop}
        timeout={200}
        classNames="fade"
        unmountOnExit
      >
        <div
          className="fixed md:bottom-12 bottom-6 z-10 md:left-10 left-5 cursor-pointer bg-primary text-white rounded-full p-[6px]"
          onClick={scrollToTop}
        >
          <IconChervonUp classIcon="!w-6 !h-6"></IconChervonUp>
        </div>
      </CSSTransition>
      <a
        href="https://m.me/267479709792373"
        target="_blank"
        className="fixed z-30 flex md:right-10 right-5 md:w-16 md:h-16 w-14 h-14 md:bottom-10 bottom-5 bg-primary rounded-full"
      >
        <CommentOutlined className="m-auto text-3xl text-white" />
      </a>
      <LayoutHomeUserFooter></LayoutHomeUserFooter>
    </div>
  );
};

export default LayoutHomeUser;
