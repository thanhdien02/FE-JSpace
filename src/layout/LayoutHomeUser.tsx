import React, { useEffect, useState } from "react";
import LayoutHomeUserHeader from "../module/common/LayoutHomeUserHeader";
import { Outlet } from "react-router-dom";
import LoginPage from "../page/CommonPage/LoginPage";
import { useSelector } from "react-redux";
import LayoutHomeUserFooter from "../module/common/LayoutHomeUserFooter";
import { CSSTransition } from "react-transition-group";
import IconChervonUp from "../components/icons/IconChervonUp";

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
          className="fixed bottom-5 right-5 cursor-pointer bg-primary text-white rounded-full p-[6px]"
          onClick={scrollToTop}
        >
          <IconChervonUp classIcon="!w-6 !h-6"></IconChervonUp>
        </div>
      </CSSTransition>

      <LayoutHomeUserFooter></LayoutHomeUserFooter>
    </div>
  );
};

export default LayoutHomeUser;
