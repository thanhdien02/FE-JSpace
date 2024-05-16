import React, { useEffect, useState } from "react";
import LayoutHomeUserHeader from "../module/common/LayoutHomeUserHeader";
import { Outlet } from "react-router-dom";
import LoginPage from "../page/CommonPage/LoginPage";
import { useSelector } from "react-redux";
import LayoutHomeUserFooter from "../module/common/LayoutHomeUserFooter";
import { CSSTransition } from "react-transition-group";

const LayoutHomeUser: React.FC = () => {
  const { accessToken } = useSelector((state: any) => state.auth);
  const [checkLogin, setCheckLogin] = useState(false);

  useEffect(() => {
    if (accessToken !== "") {
      setCheckLogin(false);
    }
  }, [accessToken]);

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
      <LayoutHomeUserFooter></LayoutHomeUserFooter>
    </div>
  );
};

export default LayoutHomeUser;
